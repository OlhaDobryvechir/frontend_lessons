/*
 * Content of lesson 01 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'HTML-tagger: html, head, body, style, script',
      kicker: 'Leksjon 1 &middot; HTML &amp; CSS',
      title: 'HTML-tagger: html, head, body, style, script',
      lead: 'Fem elementer utgjør rammen rundt enhver nettside. Når du ser hvordan de ligger inne i hverandre, faller resten av HTML på plass.',

      's.html.t': 'Roten i dokumentet',
      's.html.d':
        '<p><code>&lt;html&gt;</code> er rotelementet. Alt annet i dokumentet ligger inne i det, og et dokument har nøyaktig ett slikt element.</p>' +
        '<p>Det inneholder to deler, alltid i denne rekkefølgen: først <code>&lt;head&gt;</code>, deretter <code>&lt;body&gt;</code>.</p>',

      's.head.t': 'Informasjon om siden',
      's.head.d':
        '<p><code>&lt;head&gt;</code> beskriver dokumentet i stedet for å vise innhold. Her står tittelen på siden, og her plasseres vanligvis et <code>&lt;style&gt;</code>-element.</p>' +
        '<p>Ingenting du legger i <code>&lt;head&gt;</code>, tegnes opp i sidevinduet. Tittelen dukker likevel opp — men i fanen til nettleseren, ikke på siden.</p>',

      's.body.t': 'Det den besøkende ser',
      's.body.d':
        '<p><code>&lt;body&gt;</code> inneholder alt den besøkende faktisk ser: overskrifter, tekst, bilder, lenker, knapper og skjemaer.</p>' +
        '<p>Et dokument har ett <code>&lt;body&gt;</code>, og det kommer etter <code>&lt;head&gt;</code>. Er du i tvil om hvor et synlig element hører hjemme, er svaret nesten alltid her.</p>',

      's.style.t': 'CSS inne i dokumentet',
      's.style.d':
        '<p><code>&lt;style&gt;</code> lar deg skrive CSS-regler rett inn i HTML-dokumentet. Innholdet er CSS, ikke HTML — nettleseren leser det som stilregler og tegner aldri opp teksten på siden.</p>' +
        '<p>Elementet plasseres normalt i <code>&lt;head&gt;</code>, slik at stilen er kjent før innholdet tegnes.</p>',

      's.script.t': 'JavaScript inne i dokumentet',
      's.script.d':
        '<p><code>&lt;script&gt;</code> er stedet for JavaScript. Innholdet er programkode, ikke HTML, så nettleseren kjører det i stedet for å tegne det opp.</p>' +
        '<p>Plasseringen betyr noe: et skript som skal jobbe med innholdet på siden, legges gjerne nederst i <code>&lt;body&gt;</code>, slik at innholdet allerede finnes når koden kjører.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'HTML tags: html, head, body, style, script',
      kicker: 'Lesson 1 &middot; HTML &amp; CSS',
      title: 'HTML tags: html, head, body, style, script',
      lead: 'Five elements make up the frame of every web page. Once you see how they nest inside each other, the rest of HTML falls into place.',

      's.html.t': 'The root of the document',
      's.html.d':
        '<p><code>&lt;html&gt;</code> is the root element. Everything else in the document sits inside it, and a document has exactly one of them.</p>' +
        '<p>It holds two parts, always in this order: <code>&lt;head&gt;</code> first, then <code>&lt;body&gt;</code>.</p>',

      's.head.t': 'Information about the page',
      's.head.d':
        '<p><code>&lt;head&gt;</code> describes the document instead of showing content. The page title lives here, and this is also where a <code>&lt;style&gt;</code> element is usually placed.</p>' +
        '<p>Nothing you put in <code>&lt;head&gt;</code> is drawn in the page area. The title still shows up — but in the browser tab, not on the page.</p>',

      's.body.t': 'What the visitor sees',
      's.body.d':
        '<p><code>&lt;body&gt;</code> contains everything a visitor actually sees: headings, text, images, links, buttons and forms.</p>' +
        '<p>A document has one <code>&lt;body&gt;</code>, and it comes after <code>&lt;head&gt;</code>. When you are unsure where a visible element belongs, the answer is almost always here.</p>',

      's.style.t': 'CSS inside the document',
      's.style.d':
        '<p><code>&lt;style&gt;</code> lets you write CSS rules straight into the HTML document. Its content is CSS, not HTML — the browser reads it as styling rules and never draws the text on the page.</p>' +
        '<p>The element normally goes in <code>&lt;head&gt;</code>, so the styling is known before the content is drawn.</p>',

      's.script.t': 'JavaScript inside the document',
      's.script.d':
        '<p><code>&lt;script&gt;</code> is where JavaScript goes. Its content is program code, not HTML, so the browser runs it instead of drawing it.</p>' +
        '<p>Position matters: a script that works with the content of the page is often placed at the end of <code>&lt;body&gt;</code>, so that the content already exists when the code runs.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'HTML-теги: html, head, body, style, script',
      kicker: 'Урок 1 &middot; HTML &amp; CSS',
      title: 'HTML-теги: html, head, body, style, script',
      lead: 'П’ять елементів утворюють каркас будь-якої вебсторінки. Щойно ви побачите, як вони вкладені один в одного, решта HTML стане зрозумілою.',

      's.html.t': 'Корінь документа',
      's.html.d':
        '<p><code>&lt;html&gt;</code> — кореневий елемент. Усе інше в документі міститься всередині нього, і в документі він рівно один.</p>' +
        '<p>Він містить дві частини, завжди в такому порядку: спочатку <code>&lt;head&gt;</code>, потім <code>&lt;body&gt;</code>.</p>',

      's.head.t': 'Інформація про сторінку',
      's.head.d':
        '<p><code>&lt;head&gt;</code> описує документ, а не показує вміст. Тут міститься заголовок сторінки, і тут зазвичай розміщують елемент <code>&lt;style&gt;</code>.</p>' +
        '<p>Ніщо з того, що ви покладете в <code>&lt;head&gt;</code>, не малюється в області сторінки. Заголовок усе ж видно — але у вкладці браузера, а не на сторінці.</p>',

      's.body.t': 'Те, що бачить відвідувач',
      's.body.d':
        '<p><code>&lt;body&gt;</code> містить усе, що відвідувач справді бачить: заголовки, текст, зображення, посилання, кнопки та форми.</p>' +
        '<p>У документі один <code>&lt;body&gt;</code>, і він іде після <code>&lt;head&gt;</code>. Якщо ви не певні, куди покласти видимий елемент, відповідь майже завжди тут.</p>',

      's.style.t': 'CSS усередині документа',
      's.style.d':
        '<p><code>&lt;style&gt;</code> дозволяє писати правила CSS просто в HTML-документі. Його вміст — це CSS, а не HTML: браузер читає його як правила оформлення і ніколи не малює цей текст на сторінці.</p>' +
        '<p>Елемент зазвичай розміщують у <code>&lt;head&gt;</code>, щоб оформлення було відоме ще до того, як намалюється вміст.</p>',

      's.script.t': 'JavaScript усередині документа',
      's.script.d':
        '<p><code>&lt;script&gt;</code> — місце для JavaScript. Його вміст — програмний код, а не HTML, тому браузер виконує його, а не малює.</p>' +
        '<p>Розташування має значення: скрипт, який працює з вмістом сторінки, часто ставлять у кінці <code>&lt;body&gt;</code>, щоб на момент запуску коду цей вміст уже існував.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hvilket element er roten i dokumentet — det som alle andre elementer ligger inne i?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> bærer informasjon om dokumentet. Det ligger selv inne i <code>&lt;html&gt;</code>.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> inneholder bare den synlige delen av siden, og ligger også inne i <code>&lt;html&gt;</code>.',
          },
          {
            text: '<code>&lt;html&gt;</code>',
            why: '<code>&lt;html&gt;</code> er rotelementet. <code>&lt;head&gt;</code> og <code>&lt;body&gt;</code>, og alt i dem, ligger inne i det.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> inneholder CSS-regler. Det er en liten del av dokumentet, aldri beholderen rundt.',
          },
        ],
      },
      {
        q: 'Du vil at et tekstavsnitt skal være synlig i nettleservinduet. Hvilket element må det ligge inne i?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;head&gt;</code>',
            why: 'Innhold i <code>&lt;head&gt;</code> beskriver dokumentet; nettleseren tegner det ikke opp i sidevinduet.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> inneholder alt den besøkende ser: tekst, overskrifter, bilder og lenker.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> kan bare inneholde CSS-regler, aldri tekst som er ment for leseren.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> inneholder JavaScript, som nettleseren kjører i stedet for å vise.',
          },
        ],
      },
      {
        q: 'Navnet på siden som nettleseren viser i fanen, kommer fra elementet <code>&lt;title&gt;</code>. Hvilket element ligger <code>&lt;title&gt;</code> inne i?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> er for synlig sideinnhold. Fanenavnet er informasjon om dokumentet, ikke sideinnhold.',
          },
          {
            text: '<code>&lt;html&gt;</code>, direkte',
            why: '<code>&lt;html&gt;</code> inneholder bare <code>&lt;head&gt;</code> og <code>&lt;body&gt;</code>; informasjon om dokumentet ligger ett nivå dypere, i <code>&lt;head&gt;</code>.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> er der informasjon om dokumentet hører hjemme, og tittelen er nettopp det.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> inneholder JavaScript. Det beskriver ikke dokumentet for nettleseren.',
          },
        ],
      },
      {
        q: 'Du vil skrive CSS-regler rett inn i HTML-dokumentet. Hvilket element bruker du?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> er for JavaScript. CSS lagt der ville verken blitt forstått eller brukt.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> er elementet som har CSS-regler som innhold.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> er der et <code>&lt;style&gt;</code>-element vanligvis plasseres, men <code>&lt;head&gt;</code> inneholder ikke CSS-regler selv.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> inneholder det synlige innholdet på siden, ikke reglene som styler det.',
          },
        ],
      },
      {
        q: 'Hvilket element bruker du for å legge JavaScript inn på en side?',
        answer: 3,
        options: [
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> forstår bare CSS. JavaScript skrevet der ville blitt ignorert.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> er ofte der et <code>&lt;script&gt;</code> plasseres, men <code>&lt;body&gt;</code> er ikke selve elementet som holder koden.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> kan inneholde et <code>&lt;script&gt;</code>, men <code>&lt;head&gt;</code> er ikke selve elementet som holder koden.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> er elementet som har JavaScript som innhold.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'Which element is the root of the document — the one every other element sits inside?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> carries information about the document. It is itself placed inside <code>&lt;html&gt;</code>.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> holds only the visible part of the page, and it too is placed inside <code>&lt;html&gt;</code>.',
          },
          {
            text: '<code>&lt;html&gt;</code>',
            why: '<code>&lt;html&gt;</code> is the root element. <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>, and everything in them, live inside it.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> holds CSS rules. It is one small part of the document, never its container.',
          },
        ],
      },
      {
        q: 'You want a paragraph of text to be visible in the browser window. Which element must it be placed inside?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;head&gt;</code>',
            why: 'Content in <code>&lt;head&gt;</code> describes the document; the browser does not draw it in the page area.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> contains everything the visitor sees: text, headings, images and links.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> can only contain CSS rules, never text meant for the reader.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> contains JavaScript, which the browser runs rather than displays.',
          },
        ],
      },
      {
        q: 'The page name the browser shows in its tab comes from the <code>&lt;title&gt;</code> element. Which element is <code>&lt;title&gt;</code> placed inside?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> is for visible page content. The tab name is information about the document, not page content.',
          },
          {
            text: '<code>&lt;html&gt;</code>, directly',
            why: '<code>&lt;html&gt;</code> only holds <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>; information about the document lives one level deeper, in <code>&lt;head&gt;</code>.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> is where information about the document belongs, and the title is exactly that.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> contains JavaScript. It does not describe the document to the browser.',
          },
        ],
      },
      {
        q: 'You want to write CSS rules straight into your HTML document. Which element do you use?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> is for JavaScript. CSS placed there would be neither understood nor applied.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> is the element whose content is CSS rules.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> is where a <code>&lt;style&gt;</code> element is usually placed, but <code>&lt;head&gt;</code> itself does not hold CSS rules.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> holds the visible content of the page, not the rules that style it.',
          },
        ],
      },
      {
        q: 'Which element do you use to put JavaScript into a page?',
        answer: 3,
        options: [
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> only understands CSS. JavaScript written there would be ignored.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> is where a <code>&lt;script&gt;</code> is often placed, but <code>&lt;body&gt;</code> itself is not the element that holds the code.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> can contain a <code>&lt;script&gt;</code>, but <code>&lt;head&gt;</code> itself is not the element that holds the code.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> is the element whose content is JavaScript.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Який елемент є коренем документа — тим, усередині якого містяться всі інші?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> несе інформацію про документ. Він і сам розташований усередині <code>&lt;html&gt;</code>.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> містить лише видиму частину сторінки і теж розташований усередині <code>&lt;html&gt;</code>.',
          },
          {
            text: '<code>&lt;html&gt;</code>',
            why: '<code>&lt;html&gt;</code> є кореневим елементом. <code>&lt;head&gt;</code> і <code>&lt;body&gt;</code>, і все, що в них, міститься всередині нього.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> містить правила CSS. Це невелика частина документа, а не контейнер для нього.',
          },
        ],
      },
      {
        q: 'Ви хочете, щоб абзац тексту було видно у вікні браузера. Усередині якого елемента він має бути?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;head&gt;</code>',
            why: 'Вміст <code>&lt;head&gt;</code> описує документ; браузер не малює його в області сторінки.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> містить усе, що бачить відвідувач: текст, заголовки, зображення та посилання.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> може містити лише правила CSS, а не текст для читача.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> містить JavaScript, який браузер виконує, а не показує.',
          },
        ],
      },
      {
        q: 'Назва сторінки, яку браузер показує у вкладці, походить з елемента <code>&lt;title&gt;</code>. Усередині якого елемента міститься <code>&lt;title&gt;</code>?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> призначений для видимого вмісту. Назва вкладки — це інформація про документ, а не вміст сторінки.',
          },
          {
            text: '<code>&lt;html&gt;</code>, безпосередньо',
            why: '<code>&lt;html&gt;</code> містить лише <code>&lt;head&gt;</code> і <code>&lt;body&gt;</code>; інформація про документ лежить на рівень глибше — у <code>&lt;head&gt;</code>.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: 'Саме в <code>&lt;head&gt;</code> належить інформація про документ, і заголовок є саме такою інформацією.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> містить JavaScript. Він не описує документ для браузера.',
          },
        ],
      },
      {
        q: 'Ви хочете написати правила CSS просто в HTML-документі. Який елемент використаєте?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> призначений для JavaScript. CSS там не був би ні зрозумілий, ні застосований.',
          },
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> — це елемент, вмістом якого є правила CSS.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: 'У <code>&lt;head&gt;</code> зазвичай розміщують елемент <code>&lt;style&gt;</code>, але сам <code>&lt;head&gt;</code> не містить правил CSS.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: '<code>&lt;body&gt;</code> містить видимий вміст сторінки, а не правила його оформлення.',
          },
        ],
      },
      {
        q: 'Який елемент використовують, щоб додати JavaScript на сторінку?',
        answer: 3,
        options: [
          {
            text: '<code>&lt;style&gt;</code>',
            why: '<code>&lt;style&gt;</code> розуміє лише CSS. JavaScript, написаний там, було б проігноровано.',
          },
          {
            text: '<code>&lt;body&gt;</code>',
            why: 'У <code>&lt;body&gt;</code> часто розміщують <code>&lt;script&gt;</code>, але сам <code>&lt;body&gt;</code> не є елементом, що містить код.',
          },
          {
            text: '<code>&lt;head&gt;</code>',
            why: '<code>&lt;head&gt;</code> може містити <code>&lt;script&gt;</code>, але сам <code>&lt;head&gt;</code> не є елементом, що містить код.',
          },
          {
            text: '<code>&lt;script&gt;</code>',
            why: '<code>&lt;script&gt;</code> — це елемент, вмістом якого є JavaScript.',
          },
        ],
      },
    ],
  },
});
