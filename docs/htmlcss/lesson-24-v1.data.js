/*
 * Content of lesson 24 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */

Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS Grid vs Flex vs Table',
      kicker: 'Leksjon 24 · CSS',
      title: 'CSS: Grid vs Flex, Grid vs Table',
      lead: 'Grid, Flexbox og HTML-tabeller løser ulike layoutoppgaver. Lær hva som skiller dem, og hvordan du velger riktig verktøy.',

      's.gridFlex.t': "Grid vs Flex",
      's.gridFlex.d': '<p>Grid passer godt for layout i to dimensjoner, mens Flexbox vanligvis passer for én rad eller én kolonne.</p>' + '<p>Grid kan styre både kolonner og rader samtidig. Flexbox organiserer elementer langs én hovedakse og kan flytte dem til flere linjer med <code>flex-wrap</code>, men har ikke samme todimensjonale sporstyring som Grid.</p>',

      's.dimension.t': "Én dimensjon vs to dimensjoner",
      's.dimension.d': '<p>Tenk på Flexbox som en hovedakse og Grid som et rutenett.</p>' + '<p>Hvis du primært justerer elementer i en rad, er Flexbox ofte naturlig. Når både rad- og kolonneplassering er en del av strukturen, gir Grid egne spor for begge dimensjoner.</p>',

      's.useGrid.t': "Når bør du bruke Grid?",
      's.useGrid.d': '<p>Bruk Grid når selve layouten har tydelige rader og kolonner, for eksempel et dashboard eller et kortgitter.</p>' + '<p>Grid lar deg definere kolonner, rader, gap og plassering på en samlet måte. Det gjør det egnet for overordnede side- og komponentlayouter der to dimensjoner er viktige.</p>',

      's.gridTable.t': "Grid vs Table",
      's.gridTable.d': '<p>CSS Grid er et layoutverktøy. En HTML-tabell er laget for tabulære data.</p>' + '<p>Bruk Grid når innholdet skal organiseres visuelt i et layoutsystem. Bruk <code>&lt;table&gt;</code> når data har en naturlig rad-og-kolonne-relasjon, for eksempel priser, resultater eller andre datasett.</p>',

      's.semantic.t': "Semantiske tabeller",
      's.semantic.d': '<p>Tabeller har semantisk betydning som Grid ikke har.</p>' + '<p>En ekte <code>&lt;table&gt;</code> forteller nettlesere og hjelpemidler at cellene representerer tabulære data. Elementer som <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code> og <code>&lt;td&gt;</code> uttrykker strukturen i dataene.</p>',

      's.choice.t': "Velg layoutverktøy etter innholdet",
      's.choice.d': '<p>Velg verktøy etter hva strukturen betyr, ikke bare etter hvordan den ser ut.</p>' + '<p>Bruk Grid for todimensjonal layout, Flexbox for en-dimensjonal justering og tabellmarkup for tabulære data. De kan også brukes sammen på samme side.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS Grid vs Flex vs Table',
      kicker: 'Lesson 24 · CSS',
      title: 'CSS: Grid vs Flex, Grid vs Table',
      lead: 'Grid, Flexbox and HTML tables solve different layout problems. Learn what separates them and how to choose the right tool.',

      's.gridFlex.t': "Grid vs Flex",
      's.gridFlex.d': '<p>Grid is well suited to two-dimensional layouts, while Flexbox is usually suited to one row or one column.</p>' + '<p>Grid can control columns and rows at the same time. Flexbox organizes items along one main axis and can wrap onto multiple lines with <code>flex-wrap</code>, but it does not provide the same two-dimensional track model as Grid.</p>',

      's.dimension.t': "One dimension vs two dimensions",
      's.dimension.d': '<p>Think of Flexbox as working mainly along an axis and Grid as working with a grid of tracks.</p>' + '<p>If you mainly align items in a row, Flexbox is often a natural fit. When both row and column placement are part of the structure, Grid provides explicit tracks for both dimensions.</p>',

      's.useGrid.t': "When should you use Grid?",
      's.useGrid.d': '<p>Use Grid when the layout itself has clear rows and columns, such as a dashboard or card grid.</p>' + '<p>Grid lets you define columns, rows, gaps and placement as one layout system. This makes it useful for page-level and component layouts where two dimensions matter.</p>',

      's.gridTable.t': "Grid vs Table",
      's.gridTable.d': '<p>CSS Grid is a layout tool. An HTML table is designed for tabular data.</p>' + '<p>Use Grid when content needs to be arranged as a visual layout. Use <code>&lt;table&gt;</code> when data has a natural row-and-column relationship, such as prices, results or other datasets.</p>',

      's.semantic.t': "Semantic tables",
      's.semantic.d': '<p>Tables carry semantic meaning that Grid does not.</p>' + '<p>A real <code>&lt;table&gt;</code> tells browsers and assistive technologies that cells represent tabular data. Elements such as <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> express the data structure.</p>',

      's.choice.t': "Choose a layout tool by meaning",
      's.choice.d': '<p>Choose the tool based on what the structure means, not only on how it looks.</p>' + '<p>Use Grid for two-dimensional layout, Flexbox for one-dimensional alignment, and table markup for tabular data. They can also be combined on the same page.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS Grid vs Flex vs Table',
      kicker: 'Урок 24 · CSS',
      title: 'CSS: Grid vs Flex, Grid vs Table',
      lead: 'Grid, Flexbox і HTML-таблиці розв’язують різні задачі компонування. Дізнайтеся, чим вони відрізняються та коли обирати кожен інструмент.',

      's.gridFlex.t': "Grid проти Flex",
      's.gridFlex.d': '<p>Grid добре підходить для двовимірних макетів, а Flexbox зазвичай — для одного рядка або одного стовпця.</p>' + '<p>Grid може одночасно керувати стовпцями та рядками. Flexbox організовує елементи вздовж однієї головної осі й може переносити їх на кілька рядків через <code>flex-wrap</code>, але не має такої самої двовимірної системи треків, як Grid.</p>',

      's.dimension.t': "Один вимір проти двох",
      's.dimension.d': '<p>Думайте про Flexbox як про роботу вздовж осі, а про Grid — як про роботу із сіткою треків.</p>' + '<p>Якщо потрібно переважно вирівняти елементи в рядок, Flexbox часто є природним вибором. Коли в структурі важливі і рядки, і стовпці, Grid надає окремі треки для обох вимірів.</p>',

      's.useGrid.t': "Коли використовувати Grid?",
      's.useGrid.d': '<p>Використовуйте Grid, коли сам макет має чіткі рядки та стовпці, наприклад dashboard або сітку карток.</p>' + '<p>Grid дає змогу визначати стовпці, рядки, проміжки та розташування в межах однієї системи компонування. Це зручно для макетів сторінки та компонентів, де важливі два виміри.</p>',

      's.gridTable.t': "Grid проти Table",
      's.gridTable.d': '<p>CSS Grid — інструмент компонування. HTML-таблиця призначена для табличних даних.</p>' + '<p>Використовуйте Grid, коли вміст потрібно організувати як візуальний макет. Використовуйте <code>&lt;table&gt;</code>, коли дані мають природний зв’язок рядків і стовпців, наприклад ціни, результати або інші набори даних.</p>',

      's.semantic.t': "Семантичні таблиці",
      's.semantic.d': '<p>Таблиці мають семантичне значення, якого Grid не має.</p>' + '<p>Справжній <code>&lt;table&gt;</code> повідомляє браузерам і допоміжним технологіям, що комірки представляють табличні дані. Елементи <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code> і <code>&lt;td&gt;</code> виражають структуру даних.</p>',

      's.choice.t': "Обирайте інструмент за змістом",
      's.choice.d': '<p>Обирайте інструмент за значенням структури, а не лише за її зовнішнім виглядом.</p>' + '<p>Використовуйте Grid для двовимірного компонування, Flexbox для одновимірного вирівнювання, а табличну розмітку — для табличних даних. Їх також можна поєднувати на одній сторінці.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva er den viktigste forskjellen mellom Grid og Flexbox?',
        answer: 1,
        options: [
          { text: 'De bruker helt forskjellige HTML-elementer.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Grid er laget for todimensjonal layout, mens Flexbox primært organiserer langs én akse.', why: 'Riktig.' },
          { text: 'Flexbox kan bare brukes på bilder.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Grid fungerer bare i tabeller.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
      {
        q: 'Hvilket verktøy passer naturlig når du vil styre både kolonner og rader i en layout?',
        answer: 2,
        options: [
          { text: 'Bare margin.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Flexbox alene.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Grid.', why: 'Riktig.' },
          { text: 'HTML-tabell i alle tilfeller.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
      {
        q: 'Hva beskriver Flexbox best?',
        answer: 0,
        options: [
          { text: 'En layoutmodell som primært organiserer elementer langs en hovedakse.', why: 'Riktig.' },
          { text: 'Et system for semantiske datatabeller.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'En erstatning for HTML.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Et verktøy som bare styrer tabellrader.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
      {
        q: 'Når er en HTML-tabell riktig valg?',
        answer: 3,
        options: [
          { text: 'Når du vil lage en tilfeldig kortlayout.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Når du vil sentrere en knapp.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Når du vil lage en navigasjonsrad.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Når innholdet faktisk er tabulære data med rader og kolonner.', why: 'Riktig.' },
        ],
      },
      {
        q: 'Hvorfor bør du ikke bruke en tabell bare fordi layouten ser ut som et rutenett?',
        answer: 1,
        options: [
          { text: 'Tabeller kan ikke inneholde tekst.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Tabeller uttrykker semantikk for tabulære data, ikke generell layout.', why: 'Riktig.' },
          { text: 'Grid støtter ikke rader.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'CSS kan ikke style tabeller.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
      {
        q: 'Hvilken egenskap kan Flexbox bruke for å la elementer flytte seg til flere linjer?',
        answer: 2,
        options: [
          { text: 'grid-template-columns', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'grid-row', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'flex-wrap', why: 'Riktig.' },
          { text: 'table-layout', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
      {
        q: 'Hva er en viktig fordel med Grid for et dashboard?',
        answer: 3,
        options: [
          { text: 'Det gjør all tekst semantisk.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Det krever ingen CSS.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Det erstatter HTML-tabeller for data.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Det kan beskrive både kolonner og rader som deler av samme layout.', why: 'Riktig.' },
        ],
      },
      {
        q: 'Hvilken HTML-struktur uttrykker tabulære data?',
        answer: 0,
        options: [
          { text: '<code>&lt;table&gt;</code> med for eksempel <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code> og <code>&lt;td&gt;</code>.', why: 'Riktig.' },
          { text: 'En <code>&lt;div&gt;</code> med <code>display: grid</code> er alltid semantisk en tabell.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'En <code>&lt;ul&gt;</code> betyr automatisk tabulære data.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'En <code>&lt;span&gt;</code> uttrykker tabellceller.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
      {
        q: 'Du skal lage en rad med knapper som ligger ved siden av hverandre. Hvilket verktøy passer ofte godt?',
        answer: 2,
        options: [
          { text: 'HTML-table.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Grid er obligatorisk.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Flexbox.', why: 'Riktig.' },
          { text: 'Ingen av dem kan gjøre dette.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
      {
        q: 'Hvilket utsagn om Grid og Flexbox er riktig?',
        answer: 1,
        options: [
          { text: 'De kan aldri brukes sammen.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'De kan brukes sammen, for eksempel Grid for sideoppsett og Flexbox for en navigasjonsrad.', why: 'Riktig.' },
          { text: 'Flexbox er bare for tabeller.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
          { text: 'Grid kan bare brukes på hele siden.', why: 'Dette alternativet beskriver ikke den aktuelle rollen til verktøyet.' },
        ],
      },
    ],

    en: [
      {
        q: 'What is the key difference between Grid and Flexbox?',
        answer: 1,
        options: [
          { text: 'They require completely different HTML elements.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Grid is designed for two-dimensional layout, while Flexbox primarily organizes items along one axis.', why: 'Correct.' },
          { text: 'Flexbox can only be used on images.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Grid only works inside tables.', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
      {
        q: 'Which tool naturally fits a layout where you want to control both columns and rows?',
        answer: 2,
        options: [
          { text: 'Only margin.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Flexbox alone.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Grid.', why: 'Correct.' },
          { text: 'An HTML table in every case.', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
      {
        q: 'Which description best matches Flexbox?',
        answer: 0,
        options: [
          { text: 'A layout model that primarily organizes items along a main axis.', why: 'Correct.' },
          { text: 'A system for semantic data tables.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'A replacement for HTML.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'A tool that only controls table rows.', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
      {
        q: 'When is an HTML table the right choice?',
        answer: 3,
        options: [
          { text: 'When you want a random card layout.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'When you want to center a button.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'When you want to make a navigation row.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'When the content is actually tabular data with rows and columns.', why: 'Correct.' },
        ],
      },
      {
        q: 'Why should you not use a table just because a layout looks like a grid?',
        answer: 1,
        options: [
          { text: 'Tables cannot contain text.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Tables express semantics for tabular data, not general layout.', why: 'Correct.' },
          { text: 'Grid does not support rows.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'CSS cannot style tables.', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
      {
        q: 'Which property can Flexbox use to allow items to move onto multiple lines?',
        answer: 2,
        options: [
          { text: 'grid-template-columns', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'grid-row', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'flex-wrap', why: 'Correct.' },
          { text: 'table-layout', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
      {
        q: 'What is an important advantage of Grid for a dashboard?',
        answer: 3,
        options: [
          { text: 'It makes all text semantic.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'It requires no CSS.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'It replaces HTML tables for data.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'It can describe both columns and rows as parts of the same layout.', why: 'Correct.' },
        ],
      },
      {
        q: 'Which HTML structure expresses tabular data?',
        answer: 0,
        options: [
          { text: '<code>&lt;table&gt;</code> with elements such as <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code>.', why: 'Correct.' },
          { text: 'A <code>&lt;div&gt;</code> with <code>display: grid</code> is always semantically a table.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'A <code>&lt;ul&gt;</code> automatically means tabular data.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'A <code>&lt;span&gt;</code> expresses table cells.', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
      {
        q: 'You need a row of buttons next to each other. Which tool is often a good fit?',
        answer: 2,
        options: [
          { text: 'An HTML table.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Grid is mandatory.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Flexbox.', why: 'Correct.' },
          { text: 'None of them can do this.', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
      {
        q: 'Which statement about Grid and Flexbox is correct?',
        answer: 1,
        options: [
          { text: 'They can never be used together.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'They can be used together, for example Grid for page layout and Flexbox for a navigation row.', why: 'Correct.' },
          { text: 'Flexbox is only for tables.', why: 'This option does not describe the relevant role of the tool.' },
          { text: 'Grid can only be used for the whole page.', why: 'This option does not describe the relevant role of the tool.' },
        ],
      },
    ],

    uk: [
      {
        q: 'Яка головна відмінність між Grid і Flexbox?',
        answer: 1,
        options: [
          { text: 'Вони потребують повністю різних HTML-елементів.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Grid призначений для двовимірного компонування, а Flexbox переважно організовує елементи вздовж однієї осі.', why: 'Правильно.' },
          { text: 'Flexbox можна використовувати лише для зображень.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Grid працює лише всередині таблиць.', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
      {
        q: 'Який інструмент природно підходить для макета, де потрібно керувати і стовпцями, і рядками?',
        answer: 2,
        options: [
          { text: 'Лише margin.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Тільки Flexbox.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Grid.', why: 'Правильно.' },
          { text: 'HTML-таблиця в усіх випадках.', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
      {
        q: 'Який опис найкраще відповідає Flexbox?',
        answer: 0,
        options: [
          { text: 'Модель компонування, що переважно організовує елементи вздовж головної осі.', why: 'Правильно.' },
          { text: 'Система для семантичних таблиць даних.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Заміна HTML.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Інструмент, що керує лише рядками таблиці.', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
      {
        q: 'Коли HTML-таблиця є правильним вибором?',
        answer: 3,
        options: [
          { text: 'Коли потрібно створити довільну сітку карток.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Коли потрібно відцентрувати кнопку.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Коли потрібно створити рядок навігації.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Коли вміст справді є табличними даними з рядками та стовпцями.', why: 'Правильно.' },
        ],
      },
      {
        q: 'Чому не варто використовувати таблицю лише тому, що макет виглядає як сітка?',
        answer: 1,
        options: [
          { text: 'Таблиці не можуть містити текст.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Таблиці мають семантику табличних даних, а не загального компонування.', why: 'Правильно.' },
          { text: 'Grid не підтримує рядки.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'CSS не може стилізувати таблиці.', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
      {
        q: 'Яка властивість Flexbox дає змогу переносити елементи на кілька рядків?',
        answer: 2,
        options: [
          { text: 'grid-template-columns', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'grid-row', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'flex-wrap', why: 'Правильно.' },
          { text: 'table-layout', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
      {
        q: 'Яка важлива перевага Grid для dashboard?',
        answer: 3,
        options: [
          { text: 'Він робить увесь текст семантичним.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Для нього не потрібен CSS.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Він замінює HTML-таблиці для даних.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Він може описувати і стовпці, і рядки як частини одного макета.', why: 'Правильно.' },
        ],
      },
      {
        q: 'Яка HTML-структура виражає табличні дані?',
        answer: 0,
        options: [
          { text: '<code>&lt;table&gt;</code> з елементами на кшталт <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code> і <code>&lt;td&gt;</code>.', why: 'Правильно.' },
          { text: '<code>&lt;div&gt;</code> з <code>display: grid</code> завжди семантично є таблицею.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: '<code>&lt;ul&gt;</code> автоматично означає табличні дані.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: '<code>&lt;span&gt;</code> виражає комірки таблиці.', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
      {
        q: 'Потрібно створити ряд кнопок поруч одна з одною. Який інструмент часто добре підходить?',
        answer: 2,
        options: [
          { text: 'HTML-таблиця.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Grid є обов’язковим.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Flexbox.', why: 'Правильно.' },
          { text: 'Жоден із них не може це зробити.', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
      {
        q: 'Яке твердження про Grid і Flexbox правильне?',
        answer: 1,
        options: [
          { text: 'Їх ніколи не можна використовувати разом.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Їх можна поєднувати, наприклад Grid для макета сторінки, а Flexbox для рядка навігації.', why: 'Правильно.' },
          { text: 'Flexbox призначений лише для таблиць.', why: 'Цей варіант не описує відповідну роль інструмента.' },
          { text: 'Grid можна використовувати лише для всієї сторінки.', why: 'Цей варіант не описує відповідну роль інструмента.' },
        ],
      },
    ],

  },
});
