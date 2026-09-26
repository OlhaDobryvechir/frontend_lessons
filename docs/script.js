/*
 * Shared runtime for every lesson under /lessons/.
 *
 * A lesson page supplies only data; all behaviour lives here:
 *   - a fixed language switcher (Norwegian / English / Ukrainian, Norwegian by default),
 *   - translation of any element carrying a data-i18n key,
 *   - the self-check quiz (question -> submit -> explanation -> next / finish).
 *
 * Usage from a lesson page:
 *   Lessons.init({ translations: { no: {...}, en: {...}, uk: {...} },
 *                  quiz:         { no: [...], en: [...], uk: [...] } });
 */
(function (global) {
  'use strict';

  var LANGUAGES = [
    { code: 'no', short: 'NO', label: 'Norsk' },
    { code: 'en', short: 'EN', label: 'English' },
    { code: 'uk', short: 'UK', label: 'Українська' },
  ];

  var DEFAULT_LANGUAGE = 'no';
  var STORAGE_KEY = 'lte-lessons-language';

  /* Chrome of the quiz itself, translated here so lessons never repeat it. */
  var UI = {
    no: {
      langLabel: 'Velg språk',
      step: 'Spørsmål {current} av {total}',
      submit: 'Send inn',
      next: 'Neste spørsmål',
      finish: 'Avslutt testen',
      close: 'Lukk',
      restart: 'Ta testen på nytt',
      correct: 'Riktig!',
      wrong: 'Ikke helt',
      yourAnswer: 'Svaret ditt:',
      rightAnswer: 'Riktig svar:',
      pickFirst: 'Velg et alternativ først.',
      resultTitle: 'Resultat',
      resultText: 'Du svarte riktig på {score} av {total} spørsmål.',
      resultPerfect: 'Alt riktig — dette sitter!',
      resultGood: 'Bra jobbet. Les gjerne gjennom avsnittene du bommet på, så tar du testen på nytt.',
      resultWeak: 'Gå gjennom leksjonen en gang til, så tar du testen på nytt.',
      Completed: 'Fullført',
      InProgress: 'Pågår',
    },
    en: {
      langLabel: 'Choose language',
      step: 'Question {current} of {total}',
      submit: 'Submit',
      next: 'Next question',
      finish: 'Finish testing',
      close: 'Close',
      restart: 'Take the test again',
      correct: 'Correct!',
      wrong: 'Not quite',
      yourAnswer: 'Your answer:',
      rightAnswer: 'Correct answer:',
      pickFirst: 'Pick an option first.',
      resultTitle: 'Result',
      resultText: 'You answered {score} of {total} questions correctly.',
      resultPerfect: 'All correct — you have learned all perfectly!',
      resultGood: 'Nicely done. Skim the sections you missed and take the test again.',
      resultWeak: 'Read the lesson once more, then take the test again.',
      Completed: 'Completed',
      InProgress: 'In progress',
    },
    uk: {
      langLabel: 'Обрати мову',
      step: 'Питання {current} з {total}',
      submit: 'Відповісти',
      next: 'Наступне питання',
      finish: 'Завершити тест',
      close: 'Закрити',
      restart: 'Пройти тест ще раз',
      correct: 'Правильно!',
      wrong: 'Не зовсім',
      yourAnswer: 'Ваша відповідь:',
      rightAnswer: 'Правильна відповідь:',
      pickFirst: 'Спочатку оберіть варіант.',
      resultTitle: 'Результат',
      resultText: 'Ви правильно відповіли на {score} з {total} питань.',
      resultPerfect: 'Усе правильно — матеріал засвоєно!',
      resultGood: 'Добре. Перегляньте розділи, де були помилки, а потім пройдіть тест знову.',
      resultWeak: 'Прочитайте урок ще раз, а потім пройдіть тест знову.',
      Completed: 'Завершено',
      InProgress: 'У процесі',
    },
  };

  var state = {
    language: DEFAULT_LANGUAGE,
    translations: {},
    quiz: {},
    index: 0,
    selected: null,
    answered: false,
    score: 0,
    finished: false,
  };

  var nodes = {};

  /* ------------------------------------------------------------------ *
   * Language
   * ------------------------------------------------------------------ */

  function isKnownLanguage(code) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) {
        return true;
      }
    }
    return false;
  }

  function readNameOfCurrentLessonGroup() {
      const path = window.location.pathname;
      const folder = path.substring(0, path.lastIndexOf('/')).split('/').pop();
      console.log(folder);
      return folder;
  }

  function readSectionsPassed() {
      const folder = readNameOfCurrentLessonGroup();
      const val = global.localStorage.getItem("pass_" + folder);
      if (!val) {
          return {};    
      }
      try {
           const a = JSON.parse(val);
           return typeof a==='object' ? a : {};          
      } catch(error) {
            console.log('error: ', error);
            return {}; 
      }   
  }

  function writeSectionsPassed(info) {
       if (!info || typeof info!=="object") {
           return;
       }
       try {
           const folder = readNameOfCurrentLessonGroup();
           const val = JSON.stringify(info);
           global.localStorage.setItem("pass_" + folder, val);
           console.log('pass_' + folder, val); 
       } catch(error) {
            console.log('error: ', error);
       } 
  }


  function readLessonNumber() {
      const match = window.location.pathname.match(/\/lesson-(\d+)-v\d+\.html$/);
      const lessonNumber = match ? match[1] : null;
      return lessonNumber;
  }

  function writeLectionPassed(res) {
      const info = readSectionsPassed();
      const lessonNumber = readLessonNumber();
      if (!lessonNumber) {
          console.log("cannot retrieve lesson number from ", window.locationi.pathname);
          return; 
      } 
      info[lessonNumber] = res;
      writeSectionsPassed(info);  
  }

  function readStoredLanguage() {
    try {
      var stored = global.localStorage.getItem(STORAGE_KEY);
      return isKnownLanguage(stored) ? stored : DEFAULT_LANGUAGE;
    } catch (error) {
      /* Private mode or blocked storage: fall back to the default. */
      return DEFAULT_LANGUAGE;
    }
  }

  function storeLanguage(code) {
    try {
      global.localStorage.setItem(STORAGE_KEY, code);
    } catch (error) {
      /* Persisting the choice is a nicety, never a requirement. */
    }
  }

  /** Translation from the lesson's own dictionary, with the key as last resort. */
  function t(key) {
    var pack = state.translations[state.language] || {};
    if (Object.prototype.hasOwnProperty.call(pack, key)) {
      return pack[key];
    }
    var fallback = state.translations[DEFAULT_LANGUAGE] || {};
    return Object.prototype.hasOwnProperty.call(fallback, key) ? fallback[key] : key;
  }

  /** Translation from the shared quiz chrome, with {placeholder} substitution. */
  function ui(key, values) {
    var pack = UI[state.language] || UI[DEFAULT_LANGUAGE];
    var text = pack[key] || UI[DEFAULT_LANGUAGE][key] || key;
    if (!values) {
      return text;
    }
    return text.replace(/\{(\w+)\}/g, function (match, name) {
      return Object.prototype.hasOwnProperty.call(values, name) ? values[name] : match;
    });
  }

  /** Rewrites every [data-i18n] element, the document title and the <html> lang. */
  function applyTranslations() {
    document.documentElement.setAttribute('lang', state.language);

    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = t(elements[i].getAttribute('data-i18n'));
    }

    var titled = document.querySelector('[data-i18n-title]');
    if (titled) {
      document.title = t(titled.getAttribute('data-i18n-title'));
    }
  }

  function buildLanguageSwitcher() {
    var bar = document.createElement('nav');
    bar.className = 'lang-switch';
    bar.setAttribute('aria-label', ui('langLabel'));

    nodes.langButtons = [];

    LANGUAGES.forEach(function (language) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = language.short;
      button.title = language.label;
      button.setAttribute('lang', language.code);
      button.addEventListener('click', function () {
        setLanguage(language.code);
      });
      bar.appendChild(button);
      nodes.langButtons.push({ code: language.code, element: button, bar: bar });
    });

    document.body.appendChild(bar);
    nodes.langBar = bar;
  }

  function markActiveLanguage() {
    if (!nodes.langButtons) {
      return;
    }
    nodes.langButtons.forEach(function (entry) {
      entry.element.setAttribute('aria-pressed', String(entry.code === state.language));
    });
    if (nodes.langBar) {
      nodes.langBar.setAttribute('aria-label', ui('langLabel'));
    }
  }

  function setLanguage(code) {
    if (!isKnownLanguage(code) || code === state.language) {
      return;
    }
    state.language = code;
    storeLanguage(code);
    applyTranslations();
    markActiveLanguage();
    markPassedLessons();
    /* Keep an open quiz in sync without losing the learner's place. */
    if (nodes.overlay && nodes.overlay.classList.contains('is-open')) {
      if (state.finished) {
        renderResult();
      } else {
        renderQuestion();
      }
    }
  }

  /* ------------------------------------------------------------------ *
   * Quiz
   * ------------------------------------------------------------------ */

  function questions() {
    return state.quiz[state.language] || state.quiz[DEFAULT_LANGUAGE] || [];
  }

  function buildQuizModal() {
    var overlay = document.createElement('div');
    overlay.className = 'quiz-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div class="quiz-dialog">' +
      '<div class="quiz-head">' +
      '<span class="quiz-step"></span>' +
      '<button type="button" class="quiz-close">&times;</button>' +
      '</div>' +
      '<div class="quiz-progress"><span></span></div>' +
      '<div class="quiz-body"></div>' +
      '</div>';

    nodes.overlay = overlay;
    nodes.dialog = overlay.querySelector('.quiz-dialog');
    nodes.step = overlay.querySelector('.quiz-step');
    nodes.progress = overlay.querySelector('.quiz-progress span');
    nodes.body = overlay.querySelector('.quiz-body');
    nodes.closeButton = overlay.querySelector('.quiz-close');

    nodes.closeButton.addEventListener('click', closeQuiz);
    overlay.addEventListener('mousedown', function (event) {
      if (event.target === overlay) {
        closeQuiz();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeQuiz();
      }
    });

    document.body.appendChild(overlay);
  }

  function openQuiz() {
    state.index = 0;
    state.score = 0;
    state.selected = null;
    state.answered = false;
    state.finished = false;
    nodes.overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderQuestion();
  }

  function closeQuiz() {
    nodes.overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateProgress(done, total) {
    nodes.progress.style.width = total ? (done / total) * 100 + '%' : '0%';
  }

  function renderQuestion() {
    var list = questions();
    var question = list[state.index];
    if (!question) {
      renderResult();
      return;
    }

    nodes.closeButton.setAttribute('aria-label', ui('close'));
    nodes.step.textContent = ui('step', { current: state.index + 1, total: list.length });
    updateProgress(state.index, list.length);

    nodes.body.innerHTML = '';

    var heading = document.createElement('p');
    heading.className = 'quiz-question';
    heading.innerHTML = question.q;
    nodes.body.appendChild(heading);

    var options = document.createElement('div');
    options.className = 'quiz-options';
    options.setAttribute('role', 'radiogroup');
    nodes.options = options;

    question.options.forEach(function (option, optionIndex) {
      var label = document.createElement('label');
      label.className = 'quiz-option';

      var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'quiz-option';
      input.value = String(optionIndex);
      if (state.answered) {
        input.disabled = true;
        input.checked = state.selected === optionIndex;
      }
      input.addEventListener('change', function () {
        state.selected = optionIndex;
        if (nodes.submit) {
          nodes.submit.disabled = false;
        }
        if (nodes.hint) {
          nodes.hint.remove();
          nodes.hint = null;
        }
      });

      var text = document.createElement('span');
      text.innerHTML = option.text;

      label.appendChild(input);
      label.appendChild(text);
      options.appendChild(label);
    });

    nodes.body.appendChild(options);

    var actions = document.createElement('div');
    actions.className = 'quiz-actions';
    nodes.actions = actions;
    nodes.body.appendChild(actions);

    if (state.answered) {
      /* Re-rendered after a language switch: restore the graded view. */
      showFeedback();
    } else {
      var submit = document.createElement('button');
      submit.type = 'button';
      submit.className = 'btn btn-primary';
      submit.textContent = ui('submit');
      submit.disabled = state.selected === null;
      submit.addEventListener('click', submitAnswer);
      nodes.submit = submit;
      actions.appendChild(submit);
    }
  }

  function submitAnswer() {
    var question = questions()[state.index];
    if (!question) {
      return;
    }
    if (state.selected === null) {
      if (!nodes.hint) {
        nodes.hint = document.createElement('p');
        nodes.hint.className = 'quiz-why';
        nodes.hint.textContent = ui('pickFirst');
        nodes.body.insertBefore(nodes.hint, nodes.actions);
      }
      return;
    }

    state.answered = true;
    if (state.selected === question.answer) {
      state.score += 1;
    }
    showFeedback();
  }

  /** Locks the options, colours them and explains both the pick and the right answer. */
  function showFeedback() {
    var list = questions();
    var question = list[state.index];
    var isCorrect = state.selected === question.answer;

    nodes.options.classList.add('is-locked');
    var labels = nodes.options.querySelectorAll('.quiz-option');
    for (var i = 0; i < labels.length; i++) {
      labels[i].querySelector('input').disabled = true;
      if (i === question.answer) {
        labels[i].classList.add('is-correct');
      } else if (i === state.selected) {
        labels[i].classList.add('is-wrong');
      }
    }

    var feedback = document.createElement('div');
    feedback.className = 'quiz-feedback ' + (isCorrect ? 'is-correct' : 'is-wrong');

    var verdict = document.createElement('p');
    verdict.className = 'quiz-verdict';
    verdict.textContent = isCorrect ? ui('correct') : ui('wrong');
    feedback.appendChild(verdict);

    var picked = document.createElement('p');
    picked.className = 'quiz-why';
    picked.innerHTML =
      '<strong>' + ui('yourAnswer') + '</strong> ' + question.options[state.selected].why;
    feedback.appendChild(picked);

    if (!isCorrect) {
      var right = document.createElement('p');
      right.className = 'quiz-why';
      right.innerHTML =
        '<strong>' + ui('rightAnswer') + '</strong> ' + question.options[question.answer].why;
      feedback.appendChild(right);
    }

    nodes.body.insertBefore(feedback, nodes.actions);
    updateProgress(state.index + 1, list.length);

    nodes.actions.innerHTML = '';

    if (state.index < list.length - 1) {
      var next = document.createElement('button');
      next.type = 'button';
      next.className = 'btn btn-primary';
      next.textContent = ui('next');
      next.addEventListener('click', nextQuestion);
      nodes.actions.appendChild(next);
    }

    var finish = document.createElement('button');
    finish.type = 'button';
    finish.className = state.index < list.length - 1 ? 'btn btn-ghost' : 'btn btn-primary';
    finish.textContent = ui('finish');
    finish.addEventListener('click', renderResult);
    nodes.actions.appendChild(finish);
  }

  function nextQuestion() {
    state.index += 1;
    state.selected = null;
    state.answered = false;
    renderQuestion();
  }

  function renderResult() {
    var list = questions();
    var answered = state.finished ? state.answeredCount : state.index + (state.answered ? 1 : 0);
    state.answeredCount = answered;
    state.finished = true;

    nodes.step.textContent = ui('resultTitle');
    updateProgress(1, 1);

    var ratio = answered ? state.score / answered : 0;
    var verdictKey = ratio > 0.99999 ? 'resultPerfect' : ratio >= 0.5 ? 'resultGood' : 'resultWeak';
    if (verdictKey ===  'resultPerfect' && answered < list.length) {
         verdictKey = 'resultGood';   
    }
    var smallKey = verdictKey.substring(6, 7);
    writeLectionPassed(smallKey);
  
    nodes.body.innerHTML = '';

    var score = document.createElement('p');
    score.className = 'quiz-score';
    score.textContent = state.score + ' / ' + (answered || list.length);
    nodes.body.appendChild(score);

    var text = document.createElement('p');
    text.className = 'quiz-result-text';
    text.textContent =
      ui('resultText', { score: state.score, total: answered || list.length }) +
      ' ' +
      ui(verdictKey);
    nodes.body.appendChild(text);

    var actions = document.createElement('div');
    actions.className = 'quiz-actions';

    var restart = document.createElement('button');
    restart.type = 'button';
    restart.className = 'btn btn-ghost';
    restart.textContent = ui('restart');
    restart.addEventListener('click', openQuiz);
    actions.appendChild(restart);

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'btn btn-primary';
    close.textContent = ui('close');
    close.addEventListener('click', closeQuiz);
    actions.appendChild(close);

    nodes.body.appendChild(actions);
    nodes.actions = actions;
  }

  function markPassedLessons() {
      const lessons = [...document.querySelectorAll('a.lesson-card')];
      if (!lessons.length) {
          console.log("This is a lesson itself");
          return;   
      }
      const info = readSectionsPassed();
      const word = 'lesson-';  
      for(let i=0;i<lessons.length;i++) {
         const aref=lessons[i];
         if (aref.href) {
             let pos = aref.href.indexOf(word);
             if (pos>=0) {
                 pos += word.length;
                 const num = aref.href.substring(pos, pos+2);
                 if (num && info[num]) {
                       const compl = info[num] === 'P';
                       const status = compl ? 'completed' : 'progress';
                       aref.classList.add(status);
                       const mess = compl ? ui("Completed") : ui("InProgress");
                       const numPlace = aref.querySelector('.num');
                       if (numPlace) {
                           numPlace.innerHTML = compl ? '✓': ' ';
                       }
                       let statusEl = aref.querySelector('.status');
                       if (!statusEl) {
                           statusEl = document.createElement('span');
                           statusEl.classList.add("status"); 
                           const b = aref.querySelector('.body');
                           if (b) {
                                b.appendChild(statusEl);
                           } 
                       }
                       statusEl.innerHTML = mess;                        	 
                 }
             }
         }      
      }  
  }

  /* ------------------------------------------------------------------ *
   * Bootstrap
   * ------------------------------------------------------------------ */

  function start(options) {
    state.translations = options.translations || {};
    state.quiz = options.quiz || {};
    state.language = readStoredLanguage();

    buildLanguageSwitcher();
    applyTranslations();
    markActiveLanguage();
    markPassedLessons();

    if (Object.keys(state.quiz).length) {
      buildQuizModal();
      var triggers = document.querySelectorAll('[data-quiz-start]');
      for (var i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener('click', openQuiz);
      }
    }
  }

  function init(options) {
    var config = options || {};
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        start(config);
      });
    } else {
      start(config);
    }
  }

  global.Lessons = {
    init: init,
    setLanguage: setLanguage,
    openQuiz: openQuiz,
    languages: LANGUAGES,
  };
})(window);
