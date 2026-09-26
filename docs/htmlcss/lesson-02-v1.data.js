/*
 * Content of lesson 02 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'HTML-tagger: meta, link, base',
      kicker: 'Leksjon 2 &middot; HTML &amp; CSS',
      title: 'HTML-tagger: meta, link, base',
      lead: 'Tre elementer som bor i <code>&lt;head&gt;</code> og aldri viser noe på siden — likevel avgjør de hvordan siden leses, hvordan den ser ut på mobil, og hvor lenkene peker.',

      's.meta.t': 'Innstillinger for dokumentet',
      's.meta.d':
        '<p><code>&lt;meta&gt;</code> bærer én enkelt opplysning om dokumentet. Det hører hjemme i <code>&lt;head&gt;</code>, har ingen sluttagg og intet innhold — alt det sier, sier det gjennom attributtene sine.</p>' +
        '<p>En side kan inneholde mange <code>&lt;meta&gt;</code>-elementer. To av dem finnes på nesten hver eneste side.</p>',
      's.meta.charset':
        '<p><code>charset</code> forteller nettleseren hvilken tegnkoding filen er skrevet i. <code>utf-8</code> dekker alle alfabeter du sannsynligvis trenger.</p>' +
        '<p>Utelater du den, kan bokstaver som <code>æ ø å</code> eller <code>і ї є</code> komme fram som rare symboler. Sett den først i <code>&lt;head&gt;</code>: nettleseren må vite kodingen før den begynner å lese resten av teksten.</p>',
      's.meta.viewport':
        '<p>Her sier <code>name</code> hvilken innstilling du endrer, og <code>content</code> gir verdien.</p>' +
        '<p><code>width=device-width</code> gjør siden like bred som selve enheten, og <code>initial-scale=1</code> åpner den i normal zoom. Uten denne linjen later mobilen som om skjermen er omtrent 980 piksler bred og krymper hele siden for å få plass, slik at alt blir bitte lite.</p>',

      's.link.t': 'En kobling til en annen fil',
      's.link.d':
        '<p><code>&lt;link&gt;</code> kobler dokumentet til en egen fil. Som <code>&lt;meta&gt;</code> bor det i <code>&lt;head&gt;</code>, har ingen sluttagg og intet innhold.</p>' +
        '<p><code>rel</code> sier hva slags kobling det er; adressen til filen oppgis med <code>href</code>.</p>',
      's.link.stylesheet':
        '<p><code>rel="stylesheet"</code> henter inn en egen CSS-fil og bruker den på siden.</p>' +
        '<p>Dette er alternativet til å skrive CSS inne i <code>&lt;style&gt;</code>. Én stilarkfil kan deles av alle sidene på et nettsted, og nettleseren trenger bare å laste den ned én gang.</p>',
      's.link.icon':
        '<p><code>rel="icon"</code> peker på det lille bildet nettleseren viser i fanen og i bokmerkene.</p>',

      's.base.t': 'En standard for hele dokumentet',
      's.base.d':
        '<p><code>&lt;base&gt;</code> setter en standard som gjelder alle adresser i dokumentet. Det står i <code>&lt;head&gt;</code>, har ingen sluttagg og intet innhold, og et dokument kan inneholde høyst ett av dem.</p>' +
        '<p>Det har to attributter, og du kan bruke det ene, det andre eller begge.</p>',
      's.base.href':
        '<p><code>href</code> er adressen som alle relative adresser i dokumentet måles ut fra.</p>' +
        '<p>Med basen nedenfor betyr en lenke skrevet som <code>lesson-01-v1.html</code> nettopp <code>/lessons/htmlcss/lesson-01-v1.html</code>, uansett hvilken mappe dokumentet selv ble lastet fra.</p>',
      's.base.target':
        '<p><code>target</code> er hvor lenker åpnes som standard. <code>_self</code> er samme fane og er det som skjer uansett; <code>_blank</code> er en ny fane; <code>_parent</code> og <code>_top</code> betyr bare noe inne i rammer.</p>' +
        '<p>En enkelt lenke som har sin egen <code>target</code>, overstyrer denne standarden.</p>',
      's.base.note':
        '<p>Fordi <code>&lt;base&gt;</code> endrer hvordan adresser leses, bør det plasseres før alt som bruker en adresse — ellers tolkes elementene over det på gamlemåten, og de to halvdelene av siden er uenige.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'HTML tags: meta, link, base',
      kicker: 'Lesson 2 &middot; HTML &amp; CSS',
      title: 'HTML tags: meta, link, base',
      lead: 'Three elements that live in <code>&lt;head&gt;</code> and never show anything on the page — yet they decide how the page is read, how it looks on a phone, and where its links point.',

      's.meta.t': 'Settings for the document',
      's.meta.d':
        '<p><code>&lt;meta&gt;</code> carries a single piece of information about the document. It belongs in <code>&lt;head&gt;</code>, it has no closing tag and no content — everything it says, it says through its attributes.</p>' +
        '<p>A page can contain many <code>&lt;meta&gt;</code> elements. Two of them appear on almost every page.</p>',
      's.meta.charset':
        '<p><code>charset</code> tells the browser which character encoding the file is written in. <code>utf-8</code> covers every alphabet you are likely to need.</p>' +
        '<p>Leave it out and letters such as <code>æ ø å</code> or <code>і ї є</code> may arrive as garbled symbols. Put it first in <code>&lt;head&gt;</code>: the browser has to know the encoding before it starts reading the rest of the text.</p>',
      's.meta.viewport':
        '<p>Here <code>name</code> says which setting you are changing, and <code>content</code> gives its value.</p>' +
        '<p><code>width=device-width</code> makes the page as wide as the actual device, and <code>initial-scale=1</code> opens it at normal zoom. Without this line a phone pretends its screen is about 980 pixels wide and shrinks the whole page to fit, so everything looks tiny.</p>',

      's.link.t': 'A connection to another file',
      's.link.d':
        '<p><code>&lt;link&gt;</code> connects the document to a separate file. Like <code>&lt;meta&gt;</code> it lives in <code>&lt;head&gt;</code>, has no closing tag and no content.</p>' +
        '<p><code>rel</code> says what kind of connection it is; the address of the file is given by <code>href</code>.</p>',
      's.link.stylesheet':
        '<p><code>rel="stylesheet"</code> loads a separate CSS file and applies it to the page.</p>' +
        '<p>This is the alternative to writing CSS inside <code>&lt;style&gt;</code>. One stylesheet file can be shared by every page of a site, and the browser only has to download it once.</p>',
      's.link.icon':
        '<p><code>rel="icon"</code> points at the small picture the browser shows in the tab and in bookmarks.</p>',

      's.base.t': 'A default for the whole document',
      's.base.d':
        '<p><code>&lt;base&gt;</code> sets a default that applies to every address in the document. It goes in <code>&lt;head&gt;</code>, has no closing tag and no content, and a document may contain at most one of them.</p>' +
        '<p>It has two attributes, and you may use either or both.</p>',
      's.base.href':
        '<p><code>href</code> is the address that every relative address in the document is measured against.</p>' +
        '<p>With the base below, a link written as <code>lesson-01-v1.html</code> means <code>/lessons/htmlcss/lesson-01-v1.html</code>, no matter which folder the document itself was loaded from.</p>',
      's.base.target':
        '<p><code>target</code> is where links open by default. <code>_self</code> is the same tab and is what happens anyway; <code>_blank</code> is a new tab; <code>_parent</code> and <code>_top</code> matter only inside frames.</p>' +
        '<p>Any single link that carries its own <code>target</code> overrides this default.</p>',
      's.base.note':
        '<p>Because <code>&lt;base&gt;</code> changes how addresses are read, place it before anything that uses one — otherwise the elements above it are resolved the old way, and the two halves of your page disagree.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'HTML-теги: meta, link, base',
      kicker: 'Урок 2 &middot; HTML &amp; CSS',
      title: 'HTML-теги: meta, link, base',
      lead: 'Три елементи, які живуть у <code>&lt;head&gt;</code> і ніколи нічого не показують на сторінці — та все ж вони визначають, як сторінка читається, як вона виглядає на телефоні і куди ведуть її посилання.',

      's.meta.t': 'Налаштування документа',
      's.meta.d':
        '<p><code>&lt;meta&gt;</code> несе одну окрему відомість про документ. Він належить до <code>&lt;head&gt;</code>, не має закривального тега і не має вмісту — усе, що він повідомляє, він повідомляє через свої атрибути.</p>' +
        '<p>Сторінка може містити багато елементів <code>&lt;meta&gt;</code>. Два з них є майже на кожній сторінці.</p>',
      's.meta.charset':
        '<p><code>charset</code> повідомляє браузеру, у якому кодуванні символів записано файл. <code>utf-8</code> охоплює всі абетки, які вам імовірно знадобляться.</p>' +
        '<p>Якщо його пропустити, літери на кшталт <code>і ї є</code> або <code>æ ø å</code> можуть з’явитися як дивні символи. Ставте його першим у <code>&lt;head&gt;</code>: браузер має знати кодування ще до того, як почне читати решту тексту.</p>',
      's.meta.viewport':
        '<p>Тут <code>name</code> каже, яке налаштування ви змінюєте, а <code>content</code> задає його значення.</p>' +
        '<p><code>width=device-width</code> робить сторінку такою ж завширшки, як сам пристрій, а <code>initial-scale=1</code> відкриває її у звичайному масштабі. Без цього рядка телефон удає, що його екран завширшки близько 980 пікселів, і стискає всю сторінку, щоб вона вмістилася — тому все стає крихітним.</p>',

      's.link.t': 'Зв’язок з іншим файлом',
      's.link.d':
        '<p><code>&lt;link&gt;</code> пов’язує документ з окремим файлом. Як і <code>&lt;meta&gt;</code>, він живе в <code>&lt;head&gt;</code>, не має закривального тега і не має вмісту.</p>' +
        '<p><code>rel</code> каже, який це зв’язок; адресу файлу задає <code>href</code>.</p>',
      's.link.stylesheet':
        '<p><code>rel="stylesheet"</code> завантажує окремий файл CSS і застосовує його до сторінки.</p>' +
        '<p>Це альтернатива написанню CSS усередині <code>&lt;style&gt;</code>. Один файл стилів можуть використовувати всі сторінки сайту, і браузеру достатньо завантажити його один раз.</p>',
      's.link.icon':
        '<p><code>rel="icon"</code> вказує на маленьке зображення, яке браузер показує у вкладці та в закладках.</p>',

      's.base.t': 'Типове значення для всього документа',
      's.base.d':
        '<p><code>&lt;base&gt;</code> задає типове значення, що діє для всіх адрес у документі. Він стоїть у <code>&lt;head&gt;</code>, не має закривального тега і вмісту, а документ може містити щонайбільше один такий елемент.</p>' +
        '<p>Він має два атрибути, і ви можете використати один, другий або обидва.</p>',
      's.base.href':
        '<p><code>href</code> — це адреса, від якої відлічуються всі відносні адреси в документі.</p>' +
        '<p>З базою, наведеною нижче, посилання, записане як <code>lesson-01-v1.html</code>, означає <code>/lessons/htmlcss/lesson-01-v1.html</code> — незалежно від того, з якої теки було завантажено сам документ.</p>',
      's.base.target':
        '<p><code>target</code> — це те, де типово відкриваються посилання. <code>_self</code> — та сама вкладка, і так відбувається й без нього; <code>_blank</code> — нова вкладка; <code>_parent</code> і <code>_top</code> мають значення лише всередині фреймів.</p>' +
        '<p>Окреме посилання, що має власний <code>target</code>, перевизначає це типове значення.</p>',
      's.base.note':
        '<p>Оскільки <code>&lt;base&gt;</code> змінює те, як читаються адреси, розміщуйте його перед усім, що використовує адресу — інакше елементи вище нього буде розібрано по-старому, і дві половини сторінки не узгоджуватимуться.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Norske bokstaver på siden din vises som rare symboler i stedet for æ ø å. Hvilken linje i <code>&lt;head&gt;</code> mangler?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> forteller nettleseren hvilken tegnkoding filen bruker. Uten den gjetter nettleseren, og bokstaver utenfor det engelske alfabetet kommer ut forvrengt.',
          },
          {
            text: '<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>',
            why: 'Viewport-linjen styrer hvor bred siden er på mobil. Den har ingenting med tegnkoding å gjøre.',
          },
          {
            text: '<code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>',
            why: 'Et stilark endrer hvordan siden ser ut, ikke hvordan teksten tolkes.',
          },
          {
            text: '<code>&lt;base href="/"&gt;</code>',
            why: '<code>&lt;base&gt;</code> endrer hvordan adresser leses, ikke hvordan tegn leses.',
          },
        ],
      },
      {
        q: 'På mobil ser siden din ut som en krympet skrivebordsside, med bitte liten tekst. Hvilken linje løser det?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> avgjør hvordan tegn tolkes. Siden ville fortsatt vært krympet.',
          },
          {
            text: '<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>',
            why: '<code>width=device-width</code> gjør siden like bred som selve enheten, og <code>initial-scale=1</code> åpner den i normal zoom — i stedet for at nettleseren later som skjermen er rundt 980 piksler og krymper alt.',
          },
          {
            text: '<code>&lt;link rel="icon" href="favicon.svg"&gt;</code>',
            why: 'Den setter bare bildet i nettleserfanen.',
          },
          {
            text: '<code>&lt;base target="_blank"&gt;</code>',
            why: 'Den endrer bare hvor lenker åpnes.',
          },
        ],
      },
      {
        q: 'Du har flyttet CSS-en ut av dokumentet og over i en egen fil, <code>styles.css</code>. Hvilken linje henter den inn igjen?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;style&gt;styles.css&lt;/style&gt;</code>',
            why: '<code>&lt;style&gt;</code> kan bare inneholde CSS-regler skrevet ut i sin helhet; det kan ikke hente en fil.',
          },
          {
            text: '<code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>',
            why: '<code>rel="stylesheet"</code> er nettopp koblingen som laster inn en ekstern CSS-fil og bruker den.',
          },
          {
            text: '<code>&lt;link rel="icon" href="styles.css"&gt;</code>',
            why: '<code>rel="icon"</code> sier at filen er bildet til fanen, så nettleseren ville prøvd å tegne CSS-en din som et bilde.',
          },
          {
            text: '<code>&lt;meta name="stylesheet" content="styles.css"&gt;</code>',
            why: '<code>&lt;meta&gt;</code> bærer opplysninger om dokumentet; det kan ikke laste en fil.',
          },
        ],
      },
      {
        q: 'Hvilken linje gir nettleseren det lille bildet den viser i fanen?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;link rel="stylesheet" href="favicon.svg"&gt;</code>',
            why: '<code>rel="stylesheet"</code> sier at filen er CSS, så nettleseren ville prøvd å lese bildet ditt som stilregler.',
          },
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> handler om tegnkoding, ikke om bilder.',
          },
          {
            text: '<code>&lt;link rel="icon" href="favicon.svg"&gt;</code>',
            why: '<code>rel="icon"</code> er koblingen som navngir bildet for fanen og for bokmerkene.',
          },
          {
            text: '<code>&lt;base href="favicon.svg"&gt;</code>',
            why: '<code>&lt;base&gt;</code> setter adressen andre adresser måles ut fra; det peker ikke på et ikon.',
          },
        ],
      },
      {
        q: 'I <code>&lt;head&gt;</code> står <code>&lt;base href="/lessons/htmlcss/"&gt;</code>. Et sted i <code>&lt;body&gt;</code> finnes en lenke skrevet som <code>&lt;a href="lesson-01-v1.html"&gt;</code>. Hvor fører den?',
        answer: 1,
        options: [
          {
            text: '<code>/lesson-01-v1.html</code>',
            why: 'Det ville vært svaret hvis det ikke fantes noen <code>&lt;base&gt;</code> og adressen ble målt fra roten av nettstedet.',
          },
          {
            text: '<code>/lessons/htmlcss/lesson-01-v1.html</code>',
            why: 'Alle relative adresser i dokumentet måles ut fra basen, så den korte lenken utvides til hele stien.',
          },
          {
            text: 'Ingen steder — <code>&lt;base&gt;</code> og lenken opphever hverandre.',
            why: 'De er ikke i konflikt. Basen er nettopp det en relativ adresse som denne fylles ut med.',
          },
          {
            text: 'Det kommer an på hvilken mappe dokumentet ble lastet fra.',
            why: 'Det stemmer når det ikke finnes noen <code>&lt;base&gt;</code>. Så snart en base er satt, betyr dokumentets egen mappe ikke lenger noe.',
          },
        ],
      },
      {
        q: 'Du vil at alle lenker på siden skal åpnes i en ny fane, uten å skrive det samme på hver eneste lenke. Hvilken linje gjør det?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;base target="_blank"&gt;</code>',
            why: '<code>target</code> på <code>&lt;base&gt;</code> er standarden for alle lenker i dokumentet, og <code>_blank</code> betyr ny fane.',
          },
          {
            text: '<code>&lt;base href="_blank"&gt;</code>',
            why: '<code>href</code> på <code>&lt;base&gt;</code> forventer en adresse. <code>_blank</code> er ikke en adresse, men et sted å åpne lenker.',
          },
          {
            text: '<code>&lt;meta name="target" content="_blank"&gt;</code>',
            why: '<code>&lt;meta&gt;</code> bærer opplysninger om dokumentet. Det kan ikke endre hvordan lenker oppfører seg.',
          },
          {
            text: '<code>&lt;link rel="target" href="_blank"&gt;</code>',
            why: '<code>&lt;link&gt;</code> kobler dokumentet til en fil. Det finnes ingen kobling som heter «target».',
          },
        ],
      },
    ],

    en: [
      {
        q: 'Letters on your page show up as strange symbols instead of æ ø å. Which line in <code>&lt;head&gt;</code> is missing?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> tells the browser which character encoding the file uses. Without it the browser guesses, and letters outside the English alphabet come out garbled.',
          },
          {
            text: '<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>',
            why: 'The viewport line controls how wide the page is on a phone. It has nothing to do with character encoding.',
          },
          {
            text: '<code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>',
            why: 'A stylesheet changes how the page looks, not how its text is decoded.',
          },
          {
            text: '<code>&lt;base href="/"&gt;</code>',
            why: '<code>&lt;base&gt;</code> changes how addresses are read, not how characters are read.',
          },
        ],
      },
      {
        q: 'On a phone your page looks like a shrunken desktop page, with tiny text. Which line fixes it?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> decides how characters are decoded. The page would still be shrunk.',
          },
          {
            text: '<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>',
            why: '<code>width=device-width</code> makes the page as wide as the real device and <code>initial-scale=1</code> opens it at normal zoom — instead of the browser pretending the screen is about 980 pixels and shrinking everything.',
          },
          {
            text: '<code>&lt;link rel="icon" href="favicon.svg"&gt;</code>',
            why: 'That only sets the picture in the browser tab.',
          },
          {
            text: '<code>&lt;base target="_blank"&gt;</code>',
            why: 'That only changes where links open.',
          },
        ],
      },
      {
        q: 'You moved your CSS out of the document and into a separate file called <code>styles.css</code>. Which line pulls it back in?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;style&gt;styles.css&lt;/style&gt;</code>',
            why: '<code>&lt;style&gt;</code> can only contain CSS rules written out in full; it cannot fetch a file.',
          },
          {
            text: '<code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>',
            why: '<code>rel="stylesheet"</code> is exactly the connection that loads an external CSS file and applies it.',
          },
          {
            text: '<code>&lt;link rel="icon" href="styles.css"&gt;</code>',
            why: '<code>rel="icon"</code> tells the browser this file is the tab picture, so it would try to draw your CSS as an image.',
          },
          {
            text: '<code>&lt;meta name="stylesheet" content="styles.css"&gt;</code>',
            why: '<code>&lt;meta&gt;</code> carries information about the document; it cannot load a file.',
          },
        ],
      },
      {
        q: 'Which line gives the browser the small picture it shows in the tab?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;link rel="stylesheet" href="favicon.svg"&gt;</code>',
            why: '<code>rel="stylesheet"</code> says the file is CSS, so the browser would try to read your image as style rules.',
          },
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> is about character encoding, not pictures.',
          },
          {
            text: '<code>&lt;link rel="icon" href="favicon.svg"&gt;</code>',
            why: '<code>rel="icon"</code> is the connection that names the picture for the tab and for bookmarks.',
          },
          {
            text: '<code>&lt;base href="favicon.svg"&gt;</code>',
            why: '<code>&lt;base&gt;</code> sets the address other addresses are measured against; it does not point at an icon.',
          },
        ],
      },
      {
        q: 'The <code>&lt;head&gt;</code> contains <code>&lt;base href="/lessons/htmlcss/"&gt;</code>. Somewhere in the <code>&lt;body&gt;</code> there is a link written as <code>&lt;a href="lesson-01-v1.html"&gt;</code>. Where does it lead?',
        answer: 1,
        options: [
          {
            text: '<code>/lesson-01-v1.html</code>',
            why: 'That would be the answer if there were no <code>&lt;base&gt;</code> and the address were measured from the root of the site.',
          },
          {
            text: '<code>/lessons/htmlcss/lesson-01-v1.html</code>',
            why: 'Every relative address in the document is measured from the base, so this short link expands to the full path.',
          },
          {
            text: 'Nowhere — <code>&lt;base&gt;</code> and the link cancel each other out.',
            why: 'They do not conflict. The base is precisely what a relative address like this one is completed with.',
          },
          {
            text: 'It depends on which folder the document was loaded from.',
            why: 'That is true when there is no <code>&lt;base&gt;</code>. Once a base is set, the folder of the document no longer matters.',
          },
        ],
      },
      {
        q: 'You want every link on the page to open in a new tab, without writing the same thing on each link. Which line does it?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;base target="_blank"&gt;</code>',
            why: '<code>target</code> on <code>&lt;base&gt;</code> is the default for every link in the document, and <code>_blank</code> means a new tab.',
          },
          {
            text: '<code>&lt;base href="_blank"&gt;</code>',
            why: '<code>href</code> on <code>&lt;base&gt;</code> expects an address. <code>_blank</code> is not an address; it is a place to open links.',
          },
          {
            text: '<code>&lt;meta name="target" content="_blank"&gt;</code>',
            why: '<code>&lt;meta&gt;</code> carries information about the document. It cannot change how links behave.',
          },
          {
            text: '<code>&lt;link rel="target" href="_blank"&gt;</code>',
            why: '<code>&lt;link&gt;</code> connects the document to a file. There is no connection called “target”.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Літери на вашій сторінці показуються як дивні символи замість і ї є. Якого рядка бракує в <code>&lt;head&gt;</code>?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> повідомляє браузеру, яке кодування символів використовує файл. Без нього браузер вгадує, і літери поза англійською абеткою виходять спотвореними.',
          },
          {
            text: '<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>',
            why: 'Рядок viewport керує шириною сторінки на телефоні. До кодування символів він не має стосунку.',
          },
          {
            text: '<code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>',
            why: 'Файл стилів змінює вигляд сторінки, а не спосіб декодування її тексту.',
          },
          {
            text: '<code>&lt;base href="/"&gt;</code>',
            why: '<code>&lt;base&gt;</code> змінює те, як читаються адреси, а не як читаються символи.',
          },
        ],
      },
      {
        q: 'На телефоні ваша сторінка виглядає як стиснена десктопна версія з крихітним текстом. Який рядок це виправить?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> визначає, як декодуються символи. Сторінка все одно лишилася б стисненою.',
          },
          {
            text: '<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>',
            why: '<code>width=device-width</code> робить сторінку такою ж завширшки, як справжній пристрій, а <code>initial-scale=1</code> відкриває її у звичайному масштабі — замість того, щоб браузер удавав, ніби екран завширшки близько 980 пікселів, і стискав усе.',
          },
          {
            text: '<code>&lt;link rel="icon" href="favicon.svg"&gt;</code>',
            why: 'Це лише задає зображення у вкладці браузера.',
          },
          {
            text: '<code>&lt;base target="_blank"&gt;</code>',
            why: 'Це лише змінює те, де відкриваються посилання.',
          },
        ],
      },
      {
        q: 'Ви перенесли CSS із документа в окремий файл <code>styles.css</code>. Який рядок поверне його на сторінку?',
        answer: 1,
        options: [
          {
            text: '<code>&lt;style&gt;styles.css&lt;/style&gt;</code>',
            why: '<code>&lt;style&gt;</code> може містити лише повністю виписані правила CSS; завантажити файл він не може.',
          },
          {
            text: '<code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>',
            why: '<code>rel="stylesheet"</code> — це саме той зв’язок, який завантажує зовнішній файл CSS і застосовує його.',
          },
          {
            text: '<code>&lt;link rel="icon" href="styles.css"&gt;</code>',
            why: '<code>rel="icon"</code> каже браузеру, що цей файл — зображення для вкладки, тож він намагався б намалювати ваш CSS як картинку.',
          },
          {
            text: '<code>&lt;meta name="stylesheet" content="styles.css"&gt;</code>',
            why: '<code>&lt;meta&gt;</code> несе відомості про документ; завантажити файл він не може.',
          },
        ],
      },
      {
        q: 'Який рядок дає браузеру маленьке зображення, яке він показує у вкладці?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;link rel="stylesheet" href="favicon.svg"&gt;</code>',
            why: '<code>rel="stylesheet"</code> каже, що файл — це CSS, тож браузер намагався б прочитати ваше зображення як правила оформлення.',
          },
          {
            text: '<code>&lt;meta charset="utf-8"&gt;</code>',
            why: '<code>charset</code> стосується кодування символів, а не зображень.',
          },
          {
            text: '<code>&lt;link rel="icon" href="favicon.svg"&gt;</code>',
            why: '<code>rel="icon"</code> — це зв’язок, який називає зображення для вкладки та для закладок.',
          },
          {
            text: '<code>&lt;base href="favicon.svg"&gt;</code>',
            why: '<code>&lt;base&gt;</code> задає адресу, від якої відлічуються інші адреси; на іконку він не вказує.',
          },
        ],
      },
      {
        q: 'У <code>&lt;head&gt;</code> є <code>&lt;base href="/lessons/htmlcss/"&gt;</code>. Десь у <code>&lt;body&gt;</code> є посилання, записане як <code>&lt;a href="lesson-01-v1.html"&gt;</code>. Куди воно веде?',
        answer: 1,
        options: [
          {
            text: '<code>/lesson-01-v1.html</code>',
            why: 'Це була б відповідь, якби <code>&lt;base&gt;</code> не було і адреса відлічувалася від кореня сайту.',
          },
          {
            text: '<code>/lessons/htmlcss/lesson-01-v1.html</code>',
            why: 'Усі відносні адреси в документі відлічуються від бази, тож це коротке посилання розгортається в повний шлях.',
          },
          {
            text: 'Нікуди — <code>&lt;base&gt;</code> і посилання взаємно скасовуються.',
            why: 'Вони не конфліктують. База — це саме те, чим доповнюється така відносна адреса.',
          },
          {
            text: 'Залежить від того, з якої теки було завантажено документ.',
            why: 'Це правда, коли <code>&lt;base&gt;</code> немає. Щойно базу задано, власна тека документа вже не має значення.',
          },
        ],
      },
      {
        q: 'Ви хочете, щоб усі посилання на сторінці відкривалися в новій вкладці, не пишучи те саме біля кожного посилання. Який рядок це робить?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;base target="_blank"&gt;</code>',
            why: '<code>target</code> у <code>&lt;base&gt;</code> — це типове значення для всіх посилань документа, а <code>_blank</code> означає нову вкладку.',
          },
          {
            text: '<code>&lt;base href="_blank"&gt;</code>',
            why: '<code>href</code> у <code>&lt;base&gt;</code> очікує адресу. <code>_blank</code> — це не адреса, а місце, де відкривати посилання.',
          },
          {
            text: '<code>&lt;meta name="target" content="_blank"&gt;</code>',
            why: '<code>&lt;meta&gt;</code> несе відомості про документ. Змінити поведінку посилань він не може.',
          },
          {
            text: '<code>&lt;link rel="target" href="_blank"&gt;</code>',
            why: '<code>&lt;link&gt;</code> пов’язує документ із файлом. Зв’язку під назвою «target» не існує.',
          },
        ],
      },
    ],
  },
});
