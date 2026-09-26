/*
 * Content of lesson 03 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'HTML-tagger: div, span, p, table, td, tr',
      kicker: 'Leksjon 3 &middot; HTML &amp; CSS',
      title: 'HTML-tagger: div, span, p, table, td, tr',
      lead: 'Seks elementer for selve innholdet: to som ikke betyr noe i seg selv, ett for løpende tekst, og tre som til sammen bygger en tabell.',

      's.div.t': 'En blokk uten egen betydning',
      's.div.d':
        '<p><code>&lt;div&gt;</code> er en ren beholder. Den samler andre elementer i én blokk, men sier ingenting om hva innholdet er.</p>' +
        '<p>Den er en blokk: den begynner på en ny linje og tar hele bredden som er tilgjengelig. Bruk den når du trenger å holde en del av siden samlet — for å plassere eller style den under ett — og ingen mer beskrivende element passer.</p>',

      's.span.t': 'Det samme, men inne i en linje',
      's.span.d':
        '<p><code>&lt;span&gt;</code> er motstykket til <code>&lt;div&gt;</code> inne i en linje. Den pakker inn en bit tekst uten å bryte linjen.</p>' +
        '<p>Den betyr like lite i seg selv. Bruk den når du vil skille ut noen få ord midt i en setning, for eksempel for å gi dem en annen farge.</p>',

      's.p.t': 'Et avsnitt med tekst',
      's.p.d':
        '<p><code>&lt;p&gt;</code> er et avsnitt. I motsetning til <code>&lt;div&gt;</code> betyr det noe: dette er løpende tekst. Nettleseren legger luft over og under.</p>' +
        '<p>Et avsnitt kan ikke inneholde et annet avsnitt, og det kan heller ikke inneholde en <code>&lt;div&gt;</code>. Trenger du en blokk inne i teksten, må du avslutte avsnittet først.</p>',

      's.table.t': 'Beholderen for tabelldata',
      's.table.d':
        '<p><code>&lt;table&gt;</code> samler data som virkelig hører hjemme i rader og kolonner — et prisoppsett, en rekke målinger, en timeplan.</p>' +
        '<p>Den er for data, ikke for utforming av siden. Skal du plassere et sidefelt ved siden av hovedinnholdet, er det en jobb for <code>&lt;div&gt;</code>, ikke for en tabell.</p>',

      's.tr.t': 'En rad',
      's.tr.d':
        '<p><code>&lt;tr&gt;</code> er én rad i tabellen, og ligger rett inne i <code>&lt;table&gt;</code>.</p>' +
        '<p>Raden viser ingenting selv; den holder bare cellene sammen. En tabell med tre rader har tre <code>&lt;tr&gt;</code>-elementer.</p>',

      's.td.t': 'En celle',
      's.td.d':
        '<p><code>&lt;td&gt;</code> er selve cellen — boksen der innholdet står — og ligger inne i en <code>&lt;tr&gt;</code>.</p>' +
        '<p>Antall <code>&lt;td&gt;</code>-elementer i en rad bestemmer hvor mange kolonner den raden har. Rekkefølgen er alltid den samme: <code>&lt;table&gt;</code> inneholder <code>&lt;tr&gt;</code>, som inneholder <code>&lt;td&gt;</code>.</p>',

      's.note':
        '<p>Hele kjeden, uten unntak: <code>&lt;table&gt;</code> &rarr; <code>&lt;tr&gt;</code> &rarr; <code>&lt;td&gt;</code>. Tekst kan aldri stå rett inne i <code>&lt;table&gt;</code> eller <code>&lt;tr&gt;</code> — den hører hjemme i en celle.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'HTML tags: div, span, p, table, td, tr',
      kicker: 'Lesson 3 &middot; HTML &amp; CSS',
      title: 'HTML tags: div, span, p, table, td, tr',
      lead: 'Six elements for the content itself: two that mean nothing on their own, one for running text, and three that together build a table.',

      's.div.t': 'A block with no meaning of its own',
      's.div.d':
        '<p><code>&lt;div&gt;</code> is a plain container. It gathers other elements into one block but says nothing about what the content is.</p>' +
        '<p>It is a block: it starts on a new line and takes the full width available. Reach for it when you need to hold a part of the page together — to position or style it as one — and no more descriptive element fits.</p>',

      's.span.t': 'The same, but inside a line',
      's.span.d':
        '<p><code>&lt;span&gt;</code> is the counterpart of <code>&lt;div&gt;</code> inside a line. It wraps a piece of text without breaking the line.</p>' +
        '<p>It means just as little on its own. Use it when you want to single out a few words in the middle of a sentence, for example to give them a different colour.</p>',

      's.p.t': 'A paragraph of text',
      's.p.d':
        '<p><code>&lt;p&gt;</code> is a paragraph. Unlike <code>&lt;div&gt;</code> it does mean something: this is running text. The browser adds space above and below it.</p>' +
        '<p>A paragraph cannot contain another paragraph, and it cannot contain a <code>&lt;div&gt;</code> either. If you need a block inside your text, end the paragraph first.</p>',

      's.table.t': 'The container for tabular data',
      's.table.d':
        '<p><code>&lt;table&gt;</code> gathers data that genuinely belongs in rows and columns — a price list, a set of measurements, a timetable.</p>' +
        '<p>It is for data, not for laying out a page. Placing a sidebar next to the main content is a job for <code>&lt;div&gt;</code>, not for a table.</p>',

      's.tr.t': 'A row',
      's.tr.d':
        '<p><code>&lt;tr&gt;</code> is one row of the table, and it sits directly inside <code>&lt;table&gt;</code>.</p>' +
        '<p>The row shows nothing itself; it only holds the cells together. A table with three rows has three <code>&lt;tr&gt;</code> elements.</p>',

      's.td.t': 'A cell',
      's.td.d':
        '<p><code>&lt;td&gt;</code> is the cell itself — the box the content sits in — and it lives inside a <code>&lt;tr&gt;</code>.</p>' +
        '<p>The number of <code>&lt;td&gt;</code> elements in a row decides how many columns that row has. The order never changes: <code>&lt;table&gt;</code> holds <code>&lt;tr&gt;</code>, which holds <code>&lt;td&gt;</code>.</p>',

      's.note':
        '<p>The whole chain, with no exceptions: <code>&lt;table&gt;</code> &rarr; <code>&lt;tr&gt;</code> &rarr; <code>&lt;td&gt;</code>. Text can never sit directly inside <code>&lt;table&gt;</code> or <code>&lt;tr&gt;</code> — it belongs in a cell.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'HTML-теги: div, span, p, table, td, tr',
      kicker: 'Урок 3 &middot; HTML &amp; CSS',
      title: 'HTML-теги: div, span, p, table, td, tr',
      lead: 'Шість елементів для самого вмісту: два, що нічого не означають самі по собі, один для суцільного тексту і три, які разом будують таблицю.',

      's.div.t': 'Блок без власного значення',
      's.div.d':
        '<p><code>&lt;div&gt;</code> — це проста оболонка. Вона збирає інші елементи в один блок, але нічого не каже про те, чим є цей вміст.</p>' +
        '<p>Це блок: він починається з нового рядка і займає всю доступну ширину. Беріть його, коли треба втримати частину сторінки разом — щоб розмістити чи оформити її як одне ціле — і жоден описовіший елемент не пасує.</p>',

      's.span.t': 'Те саме, але всередині рядка',
      's.span.d':
        '<p><code>&lt;span&gt;</code> — відповідник <code>&lt;div&gt;</code> усередині рядка. Він обгортає шматок тексту, не розриваючи рядка.</p>' +
        '<p>Сам по собі він означає так само мало. Використовуйте його, коли треба виділити кілька слів посеред речення, наприклад щоб дати їм інший колір.</p>',

      's.p.t': 'Абзац тексту',
      's.p.d':
        '<p><code>&lt;p&gt;</code> — це абзац. На відміну від <code>&lt;div&gt;</code> він таки щось означає: це суцільний текст. Браузер додає відступ згори і знизу.</p>' +
        '<p>Абзац не може містити інший абзац, і так само не може містити <code>&lt;div&gt;</code>. Якщо вам потрібен блок усередині тексту, спершу завершіть абзац.</p>',

      's.table.t': 'Оболонка для табличних даних',
      's.table.d':
        '<p><code>&lt;table&gt;</code> збирає дані, які справді належать до рядків і стовпців — прайс, набір вимірювань, розклад.</p>' +
        '<p>Вона для даних, а не для верстки сторінки. Поставити бічну панель поруч з основним вмістом — це робота для <code>&lt;div&gt;</code>, а не для таблиці.</p>',

      's.tr.t': 'Рядок',
      's.tr.d':
        '<p><code>&lt;tr&gt;</code> — це один рядок таблиці, і він розташований безпосередньо всередині <code>&lt;table&gt;</code>.</p>' +
        '<p>Сам рядок нічого не показує; він лише тримає комірки разом. Таблиця з трьох рядків має три елементи <code>&lt;tr&gt;</code>.</p>',

      's.td.t': 'Комірка',
      's.td.d':
        '<p><code>&lt;td&gt;</code> — це сама комірка, коробка, у якій міститься вміст, і вона живе всередині <code>&lt;tr&gt;</code>.</p>' +
        '<p>Кількість елементів <code>&lt;td&gt;</code> у рядку визначає, скільки в цьому рядку стовпців. Порядок незмінний: <code>&lt;table&gt;</code> містить <code>&lt;tr&gt;</code>, який містить <code>&lt;td&gt;</code>.</p>',

      's.note':
        '<p>Увесь ланцюжок, без винятків: <code>&lt;table&gt;</code> &rarr; <code>&lt;tr&gt;</code> &rarr; <code>&lt;td&gt;</code>. Текст ніколи не може стояти прямо всередині <code>&lt;table&gt;</code> чи <code>&lt;tr&gt;</code> — його місце в комірці.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du vil at tre ord midt i en setning skal ha en annen farge, uten at resten av setningen dyttes ned på en ny linje. Hvilket element pakker du dem inn i?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;div&gt;</code>',
            why: '<code>&lt;div&gt;</code> er en blokk: den ville begynt på en ny linje og delt setningen i to.',
          },
          {
            text: '<code>&lt;span&gt;</code>',
            why: '<code>&lt;span&gt;</code> pakker inn en bit tekst inne i linjen uten å bryte den. Det er nettopp det den er til for.',
          },
          {
            text: '<code>&lt;p&gt;</code>',
            why: '<code>&lt;p&gt;</code> er et helt avsnitt. Et avsnitt inne i en setning ville delt setningen, og et avsnitt kan uansett ikke ligge inne i et annet avsnitt.',
          },
          {
            text: '<code>&lt;td&gt;</code>',
            why: '<code>&lt;td&gt;</code> er en tabellcelle og betyr bare noe inne i en tabellrad.',
          },
        ],
      },
      {
        q: 'Du vil samle en overskrift og to avsnitt slik at du kan plassere dem som én blokk. Ingen element med en egentlig betydning passer. Hva bruker du?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;span&gt;</code>',
            why: '<code>&lt;span&gt;</code> holder seg inne i en linje, så den har feil form for en gruppe blokker.',
          },
          {
            text: '<code>&lt;p&gt;</code>',
            why: 'Et avsnitt er for løpende tekst, og det kan ikke inneholde andre blokker.',
          },
          {
            text: '<code>&lt;div&gt;</code>',
            why: '<code>&lt;div&gt;</code> er den rene blokkbeholderen: den grupperer elementer uten å påstå noe om hva de er.',
          },
          {
            text: '<code>&lt;table&gt;</code>',
            why: 'En tabell er for data i rader og kolonner, ikke for å holde en gruppe blokker sammen.',
          },
        ],
      },
      {
        q: 'Du har en bolk med løpende tekst. Hvorfor skrive <code>&lt;p&gt;</code> i stedet for <code>&lt;div&gt;</code>?',
        answer: 1,
        options: [
          {
            text: 'Fordi bare <code>&lt;p&gt;</code> kan inneholde tekst.',
            why: 'Begge kan inneholde tekst. Det er ikke forskjellen.',
          },
          {
            text: 'Fordi <code>&lt;p&gt;</code> sier at innholdet er et avsnitt med tekst, mens <code>&lt;div&gt;</code> ikke sier noe i det hele tatt.',
            why: 'Det er nettopp forskjellen: <code>&lt;div&gt;</code> er bare struktur, <code>&lt;p&gt;</code> bærer betydning. Nettleseren legger dessuten luft over og under et avsnitt.',
          },
          {
            text: 'Fordi en <code>&lt;div&gt;</code> ikke ville vært synlig.',
            why: 'En <code>&lt;div&gt;</code> er fullt synlig. Den sier bare ikke hva innholdet er.',
          },
          {
            text: 'Fordi <code>&lt;p&gt;</code> bare kan stå inne i en <code>&lt;div&gt;</code>.',
            why: 'Det finnes ingen slik regel. Et avsnitt kan stå overalt der blokkinnhold er tillatt.',
          },
        ],
      },
      {
        q: 'I hvilken rekkefølge ligger de tre tabellelementene inne i hverandre?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;table&gt;</code> inne i <code>&lt;tr&gt;</code> inne i <code>&lt;td&gt;</code>',
            why: 'Det står på hodet: tabellen er det ytterste elementet, ikke det innerste.',
          },
          {
            text: '<code>&lt;tr&gt;</code> inne i <code>&lt;td&gt;</code> inne i <code>&lt;table&gt;</code>',
            why: 'Cellene ligger inne i radene, ikke omvendt.',
          },
          {
            text: '<code>&lt;table&gt;</code> inneholder <code>&lt;tr&gt;</code>, som inneholder <code>&lt;td&gt;</code>',
            why: 'Tabell, så rad, så celle. Rekkefølgen endrer seg aldri.',
          },
          {
            text: 'Hvilken som helst rekkefølge — nettleseren ordner opp.',
            why: 'Den gjør ikke det. Hvert av de tre har én plass det hører hjemme.',
          },
        ],
      },
      {
        q: 'En rad i tabellen din skal vise tre kolonner. Hva er det som avgjør det?',
        answer: 1,
        options: [
          {
            text: 'Tre <code>&lt;tr&gt;</code>-elementer inne i <code>&lt;table&gt;</code>',
            why: 'Tre <code>&lt;tr&gt;</code> gir deg tre rader, ikke tre kolonner.',
          },
          {
            text: 'Tre <code>&lt;td&gt;</code>-elementer inne i den <code>&lt;tr&gt;</code>-en',
            why: 'Antall celler i en rad er antallet kolonner den raden har.',
          },
          {
            text: 'Tre <code>&lt;table&gt;</code>-elementer ved siden av hverandre',
            why: 'Det ville blitt tre atskilte tabeller.',
          },
          {
            text: 'Tre <code>&lt;div&gt;</code>-elementer inne i <code>&lt;tr&gt;</code>',
            why: 'En rad holder celler. En <code>&lt;div&gt;</code> er ikke en celle og hører ikke hjemme rett inne i <code>&lt;tr&gt;</code>.',
          },
        ],
      },
      {
        q: 'Du vil ha et sidefelt ved siden av hovedinnholdet på siden. Hvilket element er det riktige utgangspunktet?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;table&gt;</code>',
            why: 'En tabell er for data som virkelig er rader og kolonner. Utforming av siden er ikke det.',
          },
          {
            text: '<code>&lt;div&gt;</code>',
            why: 'Å samle et område av siden slik at det kan plasseres, er nøyaktig det en <code>&lt;div&gt;</code> er til for.',
          },
          {
            text: '<code>&lt;span&gt;</code>',
            why: 'En <code>&lt;span&gt;</code> holder seg inne i en tekstlinje; den kan ikke bære et helt område av siden som en blokk.',
          },
          {
            text: '<code>&lt;td&gt;</code>',
            why: 'En celle finnes bare inne i en tabellrad, så dette henter tilbake tabellen du ikke vil ha.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You want three words in the middle of a sentence to be a different colour, without pushing the rest of the sentence onto a new line. Which element do you wrap them in?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;div&gt;</code>',
            why: '<code>&lt;div&gt;</code> is a block: it would start on a new line and break the sentence in two.',
          },
          {
            text: '<code>&lt;span&gt;</code>',
            why: '<code>&lt;span&gt;</code> wraps a piece of text inside a line without breaking it. That is exactly what it is for.',
          },
          {
            text: '<code>&lt;p&gt;</code>',
            why: '<code>&lt;p&gt;</code> is a whole paragraph. One inside a sentence would split the sentence, and a paragraph cannot sit inside another paragraph anyway.',
          },
          {
            text: '<code>&lt;td&gt;</code>',
            why: '<code>&lt;td&gt;</code> is a table cell and only means anything inside a table row.',
          },
        ],
      },
      {
        q: 'You want to group a heading and two paragraphs so you can position them as a single block. No element with a real meaning fits. Which do you use?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;span&gt;</code>',
            why: '<code>&lt;span&gt;</code> stays inside a line, so it is the wrong shape for a group of blocks.',
          },
          {
            text: '<code>&lt;p&gt;</code>',
            why: 'A paragraph is for running text, and it cannot contain other blocks.',
          },
          {
            text: '<code>&lt;div&gt;</code>',
            why: '<code>&lt;div&gt;</code> is the plain block container: it groups elements without claiming anything about what they are.',
          },
          {
            text: '<code>&lt;table&gt;</code>',
            why: 'A table is for data in rows and columns, not for holding a group of blocks together.',
          },
        ],
      },
      {
        q: 'You have a block of running text. Why write <code>&lt;p&gt;</code> rather than <code>&lt;div&gt;</code>?',
        answer: 1,
        options: [
          {
            text: 'Because only <code>&lt;p&gt;</code> can contain text.',
            why: 'Both can contain text. That is not the difference.',
          },
          {
            text: 'Because <code>&lt;p&gt;</code> says the content is a paragraph of text, while <code>&lt;div&gt;</code> says nothing at all.',
            why: 'That is exactly the difference: <code>&lt;div&gt;</code> is structure only, <code>&lt;p&gt;</code> carries meaning. The browser also adds space above and below a paragraph.',
          },
          {
            text: 'Because a <code>&lt;div&gt;</code> would not be visible.',
            why: 'A <code>&lt;div&gt;</code> is perfectly visible. It simply does not say what its content is.',
          },
          {
            text: 'Because <code>&lt;p&gt;</code> may only appear inside a <code>&lt;div&gt;</code>.',
            why: 'There is no such rule. A paragraph can stand anywhere block content is allowed.',
          },
        ],
      },
      {
        q: 'In which order are the three table elements nested?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;table&gt;</code> inside <code>&lt;tr&gt;</code> inside <code>&lt;td&gt;</code>',
            why: 'That is upside down: the table is the outermost element, not the innermost.',
          },
          {
            text: '<code>&lt;tr&gt;</code> inside <code>&lt;td&gt;</code> inside <code>&lt;table&gt;</code>',
            why: 'Cells sit inside rows, not the other way round.',
          },
          {
            text: '<code>&lt;table&gt;</code> holds <code>&lt;tr&gt;</code>, which holds <code>&lt;td&gt;</code>',
            why: 'Table, then row, then cell. The order never changes.',
          },
          {
            text: 'Any order — the browser sorts it out.',
            why: 'It does not. Each of the three has one place where it belongs.',
          },
        ],
      },
      {
        q: 'A row of your table should show three columns. What makes that happen?',
        answer: 1,
        options: [
          {
            text: 'Three <code>&lt;tr&gt;</code> elements inside the <code>&lt;table&gt;</code>',
            why: 'Three <code>&lt;tr&gt;</code> gives you three rows, not three columns.',
          },
          {
            text: 'Three <code>&lt;td&gt;</code> elements inside that <code>&lt;tr&gt;</code>',
            why: 'The number of cells in a row is the number of columns that row has.',
          },
          {
            text: 'Three <code>&lt;table&gt;</code> elements next to each other',
            why: 'That would give you three separate tables.',
          },
          {
            text: 'Three <code>&lt;div&gt;</code> elements inside the <code>&lt;tr&gt;</code>',
            why: 'A row holds cells. A <code>&lt;div&gt;</code> is not a cell and does not belong directly inside <code>&lt;tr&gt;</code>.',
          },
        ],
      },
      {
        q: 'You want a sidebar sitting next to the main content of your page. Which element is the right starting point?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;table&gt;</code>',
            why: 'A table is for data that really is rows and columns. Page layout is not that.',
          },
          {
            text: '<code>&lt;div&gt;</code>',
            why: 'Grouping a region of the page so it can be positioned is exactly what a <code>&lt;div&gt;</code> is for.',
          },
          {
            text: '<code>&lt;span&gt;</code>',
            why: 'A <code>&lt;span&gt;</code> stays inside a line of text; it cannot carry a whole region of the page as a block.',
          },
          {
            text: '<code>&lt;td&gt;</code>',
            why: 'A cell only exists inside a table row, so this brings back the table you did not want.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви хочете, щоб три слова посеред речення мали інший колір, і при цьому решта речення не переїхала на новий рядок. У який елемент ви їх загорнете?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;div&gt;</code>',
            why: '<code>&lt;div&gt;</code> — це блок: він почався б з нового рядка і розірвав би речення надвоє.',
          },
          {
            text: '<code>&lt;span&gt;</code>',
            why: '<code>&lt;span&gt;</code> обгортає шматок тексту всередині рядка, не розриваючи його. Саме для цього він і потрібен.',
          },
          {
            text: '<code>&lt;p&gt;</code>',
            why: '<code>&lt;p&gt;</code> — це цілий абзац. Абзац посеред речення розділив би його, та й абзац усе одно не може стояти всередині іншого абзацу.',
          },
          {
            text: '<code>&lt;td&gt;</code>',
            why: '<code>&lt;td&gt;</code> — це комірка таблиці, і вона щось означає лише всередині рядка таблиці.',
          },
        ],
      },
      {
        q: 'Ви хочете згрупувати заголовок і два абзаци, щоб розмістити їх як один блок. Жоден елемент зі справжнім значенням не пасує. Що візьмете?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;span&gt;</code>',
            why: '<code>&lt;span&gt;</code> лишається всередині рядка, тож має неправильну форму для групи блоків.',
          },
          {
            text: '<code>&lt;p&gt;</code>',
            why: 'Абзац призначений для суцільного тексту і не може містити інші блоки.',
          },
          {
            text: '<code>&lt;div&gt;</code>',
            why: '<code>&lt;div&gt;</code> — це проста блокова оболонка: вона групує елементи, нічого не стверджуючи про те, чим вони є.',
          },
          {
            text: '<code>&lt;table&gt;</code>',
            why: 'Таблиця призначена для даних у рядках і стовпцях, а не для того, щоб тримати разом групу блоків.',
          },
        ],
      },
      {
        q: 'У вас є шматок суцільного тексту. Чому написати <code>&lt;p&gt;</code>, а не <code>&lt;div&gt;</code>?',
        answer: 1,
        options: [
          {
            text: 'Бо лише <code>&lt;p&gt;</code> може містити текст.',
            why: 'Обидва можуть містити текст. Різниця не в цьому.',
          },
          {
            text: 'Бо <code>&lt;p&gt;</code> каже, що вміст — це абзац тексту, а <code>&lt;div&gt;</code> не каже нічого.',
            why: 'Саме в цьому різниця: <code>&lt;div&gt;</code> — лише структура, <code>&lt;p&gt;</code> несе значення. До того ж браузер додає відступ згори і знизу абзацу.',
          },
          {
            text: 'Бо <code>&lt;div&gt;</code> був би невидимий.',
            why: '<code>&lt;div&gt;</code> цілком видимий. Він просто не каже, чим є його вміст.',
          },
          {
            text: 'Бо <code>&lt;p&gt;</code> може стояти лише всередині <code>&lt;div&gt;</code>.',
            why: 'Такого правила немає. Абзац може стояти всюди, де дозволено блоковий вміст.',
          },
        ],
      },
      {
        q: 'У якому порядку три елементи таблиці вкладені один в одного?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;table&gt;</code> усередині <code>&lt;tr&gt;</code> усередині <code>&lt;td&gt;</code>',
            why: 'Це догори дриґом: таблиця — найзовнішніший елемент, а не найглибший.',
          },
          {
            text: '<code>&lt;tr&gt;</code> усередині <code>&lt;td&gt;</code> усередині <code>&lt;table&gt;</code>',
            why: 'Комірки містяться в рядках, а не навпаки.',
          },
          {
            text: '<code>&lt;table&gt;</code> містить <code>&lt;tr&gt;</code>, який містить <code>&lt;td&gt;</code>',
            why: 'Таблиця, потім рядок, потім комірка. Порядок ніколи не змінюється.',
          },
          {
            text: 'Будь-який порядок — браузер розбереться.',
            why: 'Не розбереться. У кожного з трьох є одне місце, якому він належить.',
          },
        ],
      },
      {
        q: 'Рядок вашої таблиці має показувати три стовпці. Що це визначає?',
        answer: 1,
        options: [
          {
            text: 'Три елементи <code>&lt;tr&gt;</code> усередині <code>&lt;table&gt;</code>',
            why: 'Три <code>&lt;tr&gt;</code> дають три рядки, а не три стовпці.',
          },
          {
            text: 'Три елементи <code>&lt;td&gt;</code> усередині цього <code>&lt;tr&gt;</code>',
            why: 'Кількість комірок у рядку — це і є кількість стовпців у цьому рядку.',
          },
          {
            text: 'Три елементи <code>&lt;table&gt;</code> поруч один з одним',
            why: 'Це дало б три окремі таблиці.',
          },
          {
            text: 'Три елементи <code>&lt;div&gt;</code> усередині <code>&lt;tr&gt;</code>',
            why: 'Рядок тримає комірки. <code>&lt;div&gt;</code> не є коміркою і не має стояти прямо всередині <code>&lt;tr&gt;</code>.',
          },
        ],
      },
      {
        q: 'Ви хочете бічну панель поруч з основним вмістом сторінки. Який елемент є правильною відправною точкою?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;table&gt;</code>',
            why: 'Таблиця призначена для даних, які справді є рядками і стовпцями. Верстка сторінки — це не те.',
          },
          {
            text: '<code>&lt;div&gt;</code>',
            why: 'Згрупувати ділянку сторінки, щоб її можна було розмістити, — це саме те, для чого існує <code>&lt;div&gt;</code>.',
          },
          {
            text: '<code>&lt;span&gt;</code>',
            why: '<code>&lt;span&gt;</code> лишається всередині рядка тексту; він не може нести цілу ділянку сторінки як блок.',
          },
          {
            text: '<code>&lt;td&gt;</code>',
            why: 'Комірка існує лише всередині рядка таблиці, тож це повертає ту саму таблицю, якої ви не хотіли.',
          },
        ],
      },
    ],
  },
});
