/*
 * Content of lesson 20 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */

Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS Flexbox: flex-wrap, gap, row-gap, column-gap',
      kicker: 'Leksjon 20 &middot; CSS',
      title: 'CSS Flexbox: flex-wrap, gap, row-gap, column-gap',
      lead: 'Lær hvordan Flexbox legger elementer på én linje eller flere linjer, og hvordan du styrer avstanden mellom dem.',

      's.wrap.t': 'Når elementene skal bryte til neste linje',
      's.wrap.d':
        '<p><code>flex-wrap</code> bestemmer om flex-elementene må holde seg på én linje eller kan bryte til flere linjer.</p>' +
        '<p>Med <code>flex-wrap: nowrap</code> er standarden at elementene blir på samme linje. Med <code>flex-wrap: wrap</code> kan elementene flyttes til neste linje når det ikke er nok plass.</p>',

      's.gap.t': 'Avstand mellom flex-elementene',
      's.gap.d':
        '<p><code>gap</code> setter avstanden mellom radene og kolonnene i en flex-container. Det gjør det enkelt å lage jevn avstand uten å legge margin på hvert barn.</p>' +
        '<p>Én verdi, for eksempel <code>gap: 20px</code>, bruker samme avstand begge veier. To verdier, for eksempel <code>gap: 12px 24px</code>, betyr først radavstand og deretter kolonneavstand.</p>',

      's.row.t': 'Avstand mellom rader',
      's.row.d':
        '<p><code>row-gap</code> styrer avstanden mellom rader. Dette er særlig nyttig når <code>flex-wrap: wrap</code> lager flere rader.</p>' +
        '<p>For eksempel gir <code>row-gap: 16px</code> 16 piksler avstand mellom radene, mens kolonneavstanden styres separat.</p>',

      's.column.t': 'Avstand mellom kolonner',
      's.column.d':
        '<p><code>column-gap</code> styrer avstanden mellom kolonner i flex-layouten.</p>' +
        '<p>For eksempel gir <code>column-gap: 24px</code> 24 piksler mellom elementer som ligger ved siden av hverandre. Radavstanden kan styres separat med <code>row-gap</code>.</p>',

      's.combo.t': 'Bruk egenskapene sammen',
      's.combo.d':
        '<p>En vanlig kombinasjon er <code>display: flex</code>, <code>flex-wrap: wrap</code> og egne verdier for <code>row-gap</code> og <code>column-gap</code>.</p>' +
        '<p>Da kan innholdet brytes til flere rader når det trengs, samtidig som du bestemmer avstanden vertikalt og horisontalt uavhengig av hverandre.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS Flexbox: flex-wrap, gap, row-gap, column-gap',
      kicker: 'Lesson 20 &middot; CSS',
      title: 'CSS Flexbox: flex-wrap, gap, row-gap, column-gap',
      lead: 'Learn how Flexbox places items on one line or multiple lines, and how to control the space between them.',

      's.wrap.t': 'When items should wrap to the next line',
      's.wrap.d':
        '<p><code>flex-wrap</code> determines whether flex items must stay on one line or may wrap onto multiple lines.</p>' +
        '<p>With <code>flex-wrap: nowrap</code>, the default behavior is to keep the items on the same line. With <code>flex-wrap: wrap</code>, items can move to the next line when there is not enough space.</p>',

      's.gap.t': 'Space between flex items',
      's.gap.d':
        '<p><code>gap</code> sets the space between rows and columns in a flex container. It is a simple way to create even spacing without adding margins to every child.</p>' +
        '<p>One value, such as <code>gap: 20px</code>, uses the same space in both directions. Two values, such as <code>gap: 12px 24px</code>, mean row gap first and column gap second.</p>',

      's.row.t': 'Space between rows',
      's.row.d':
        '<p><code>row-gap</code> controls the space between rows. This is especially useful when <code>flex-wrap: wrap</code> creates multiple rows.</p>' +
        '<p>For example, <code>row-gap: 16px</code> gives 16 pixels of space between rows, while the column spacing is controlled separately.</p>',

      's.column.t': 'Space between columns',
      's.column.d':
        '<p><code>column-gap</code> controls the space between columns in the flex layout.</p>' +
        '<p>For example, <code>column-gap: 24px</code> gives 24 pixels between items that sit next to each other. Row spacing can be controlled separately with <code>row-gap</code>.</p>',

      's.combo.t': 'Use the properties together',
      's.combo.d':
        '<p>A common combination is <code>display: flex</code>, <code>flex-wrap: wrap</code>, and separate values for <code>row-gap</code> and <code>column-gap</code>.</p>' +
        '<p>This lets the content wrap onto multiple rows when needed while giving you independent control over vertical and horizontal spacing.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS Flexbox: flex-wrap, gap, row-gap, column-gap',
      kicker: 'Урок 20 &middot; CSS',
      title: 'CSS Flexbox: flex-wrap, gap, row-gap, column-gap',
      lead: 'Дізнайтеся, як Flexbox розміщує елементи в одному або кількох рядках і як керувати відстанню між ними.',

      's.wrap.t': 'Коли елементи мають переноситися на наступний рядок',
      's.wrap.d':
        '<p><code>flex-wrap</code> визначає, чи мають flex-елементи залишатися в одному рядку, чи можуть переноситися на кілька рядків.</p>' +
        '<p>За <code>flex-wrap: nowrap</code> стандартна поведінка — залишати елементи в одному рядку. За <code>flex-wrap: wrap</code> елементи можуть перейти на наступний рядок, коли місця недостатньо.</p>',

      's.gap.t': 'Відстань між flex-елементами',
      's.gap.d':
        '<p><code>gap</code> задає відстань між рядками та колонками у flex-контейнері. Це простий спосіб створити рівномірні проміжки без додавання margin до кожної дочірньої елемента.</p>' +
        '<p>Одне значення, наприклад <code>gap: 20px</code>, задає однакову відстань в обох напрямках. Два значення, наприклад <code>gap: 12px 24px</code>, означають спочатку відстань між рядками, а потім між колонками.</p>',

      's.row.t': 'Відстань між рядками',
      's.row.d':
        '<p><code>row-gap</code> керує відстанню між рядками. Це особливо корисно, коли <code>flex-wrap: wrap</code> створює кілька рядків.</p>' +
        '<p>Наприклад, <code>row-gap: 16px</code> задає 16 пікселів між рядками, тоді як відстань між колонками керується окремо.</p>',

      's.column.t': 'Відстань між колонками',
      's.column.d':
        '<p><code>column-gap</code> керує відстанню між колонками у flex-розкладці.</p>' +
        '<p>Наприклад, <code>column-gap: 24px</code> задає 24 пікселі між елементами, що стоять поруч. Відстань між рядками можна окремо задати через <code>row-gap</code>.</p>',

      's.combo.t': 'Використовуйте властивості разом',
      's.combo.d':
        '<p>Поширена комбінація — <code>display: flex</code>, <code>flex-wrap: wrap</code> та окремі значення для <code>row-gap</code> і <code>column-gap</code>.</p>' +
        '<p>Так вміст може переноситися на кілька рядків, коли це потрібно, а вертикальну й горизонтальну відстань можна налаштовувати незалежно.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hvilken verdi for <code>flex-wrap</code> lar flex-elementer flytte til neste linje når det ikke er nok plass?',
        answer: 0,
        options: [
          { text: '<code>wrap</code>', why: '<code>flex-wrap: wrap</code> tillater at flex-elementer brytes til flere linjer når det trengs.' },
          { text: '<code>nowrap</code>', why: '<code>nowrap</code> holder elementene på én linje i stedet for å tillate wrapping.' },
          { text: '<code>row</code>', why: '<code>row</code> er en verdi for <code>flex-direction</code>, ikke for <code>flex-wrap</code>.' },
          { text: '<code>multiple</code>', why: '<code>multiple</code> er ikke en gyldig verdi for <code>flex-wrap</code>.' },
        ],
      },
      {
        q: 'Hva er standardverdien for <code>flex-wrap</code>?',
        answer: 2,
        options: [
          { text: '<code>wrap</code>', why: '<code>wrap</code> må angis når du vil tillate at flex-elementer brytes til flere linjer.' },
          { text: '<code>break</code>', why: '<code>break</code> er ikke en verdi for <code>flex-wrap</code>.' },
          { text: '<code>nowrap</code>', why: '<code>nowrap</code> er standardverdien og holder flex-elementene på én linje.' },
          { text: '<code>auto</code>', why: '<code>auto</code> er ikke standardverdien for <code>flex-wrap</code>.' },
        ],
      },
      {
        q: 'Hva gjør <code>gap: 20px</code> i en flex-container?',
        answer: 0,
        options: [
          { text: 'Gir 20px avstand i begge retninger', why: 'Én verdi for <code>gap</code> brukes som både radavstand og kolonneavstand.' },
          { text: 'Gir 20px bare mellom kolonner', why: 'Når <code>gap</code> har én verdi, brukes den også mellom rader.' },
          { text: 'Gir 20px bare mellom rader', why: 'Én verdi for <code>gap</code> gjelder begge retninger, ikke bare radene.' },
          { text: 'Gir 20px margin rundt containeren', why: '<code>gap</code> lager avstand mellom flex-elementene, ikke rundt selve containeren.' },
        ],
      },
      {
        q: 'I <code>gap: 12px 24px</code>, hva betyr den første og den andre verdien?',
        answer: 2,
        options: [
          { text: '12px kolonner, 24px rader', why: 'Rekkefølgen er motsatt: den første verdien gjelder rader, den andre kolonner.' },
          { text: '12px container, 24px elementer', why: '<code>gap</code> angir ikke margin eller padding på containeren eller elementene.' },
          { text: '12px rader, 24px kolonner', why: 'For to <code>gap</code>-verdier er første verdi <code>row-gap</code> og andre verdi <code>column-gap</code>.' },
          { text: '12px venstre, 24px høyre', why: 'De to verdiene beskriver rad- og kolonneavstand, ikke venstre og høyre side.' },
        ],
      },
      {
        q: 'Hvilken CSS-egenskap styrer avstanden mellom rader?',
        answer: 1,
        options: [
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> styrer avstanden mellom kolonner.' },
          { text: '<code>row-gap</code>', why: '<code>row-gap</code> styrer avstanden mellom rader.' },
          { text: '<code>flex-wrap</code>', why: '<code>flex-wrap</code> bestemmer om elementer kan brytes, men angir ikke avstanden mellom radene.' },
          { text: '<code>row-space</code>', why: '<code>row-space</code> er ikke en CSS-egenskap for dette formålet.' },
        ],
      },
      {
        q: 'Hvilken CSS-egenskap styrer avstanden mellom kolonner?',
        answer: 0,
        options: [
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> styrer avstanden mellom kolonner.' },
          { text: '<code>row-gap</code>', why: '<code>row-gap</code> styrer avstanden mellom rader, ikke kolonner.' },
          { text: '<code>column-space</code>', why: '<code>column-space</code> er ikke en CSS-egenskap for dette formålet.' },
          { text: '<code>flex-wrap</code>', why: '<code>flex-wrap</code> styrer wrapping, ikke avstanden mellom kolonnene.' },
        ],
      },
      {
        q: 'Du vil ha 10px mellom rader og 30px mellom kolonner. Hvilken regel uttrykker dette direkte?',
        answer: 3,
        options: [
          { text: '<code>gap: 30px 10px;</code>', why: 'Med to verdier ville dette bety 30px mellom rader og 10px mellom kolonner, altså motsatt.' },
          { text: '<code>row-gap: 30px; column-gap: 10px;</code>', why: 'Disse verdiene gir motsatt av ønsket: 30px mellom rader og 10px mellom kolonner.' },
          { text: '<code>gap: 10px;</code>', why: 'Én verdi gir 10px i begge retninger, ikke 30px mellom kolonnene.' },
          { text: '<code>row-gap: 10px; column-gap: 30px;</code>', why: 'Dette setter 10px mellom radene og 30px mellom kolonnene, slik målet krever.' },
        ],
      },
      {
        q: 'Hva må være sant for at <code>flex-wrap: wrap</code> faktisk skal kunne lage flere rader?',
        answer: 2,
        options: [
          { text: 'Containeren må ha <code>gap</code>', why: '<code>gap</code> er ikke nødvendig for wrapping; det styrer bare avstanden mellom elementene.' },
          { text: 'Alle elementene må ha samme bredde', why: 'Elementene trenger ikke å ha samme bredde for at wrapping skal kunne skje.' },
          { text: 'Det må ikke være nok plass til å holde alle elementene på én linje', why: 'Wrapping blir relevant når elementene samlet ikke får plass på én linje i containeren.' },
          { text: 'Containeren må bruke <code>column-gap</code>', why: '<code>column-gap</code> er ikke et krav for at wrapping skal kunne skje.' },
        ],
      },
      {
        q: 'Hvilken kombinasjon gir en flex-container som kan bryte til flere rader og samtidig har 16px mellom rader og 24px mellom kolonner?',
        answer: 1,
        options: [
          { text: '<code>display: flex; flex-wrap: nowrap; gap: 16px 24px;</code>', why: '<code>nowrap</code> tillater ikke at elementene brytes til flere rader.' },
          { text: '<code>display: flex; flex-wrap: wrap; row-gap: 16px; column-gap: 24px;</code>', why: '<code>flex-wrap: wrap</code> tillater flere rader, mens <code>row-gap</code> og <code>column-gap</code> gir de ønskede avstandene.' },
          { text: '<code>display: block; flex-wrap: wrap; gap: 16px 24px;</code>', why: '<code>flex-wrap</code> og <code>gap</code> brukes her som flex-egenskaper, men containeren er ikke satt til <code>display: flex</code>.' },
          { text: '<code>display: flex; flex-wrap: wrap; row-gap: 24px; column-gap: 16px;</code>', why: 'Wrapping er riktig, men rad- og kolonneavstandene er byttet om.' },
        ],
      },
      {
        q: 'Hva er den viktigste forskjellen mellom <code>gap</code> og <code>flex-wrap</code> i en flex-container?',
        answer: 0,
        options: [
          { text: '<code>flex-wrap</code> styrer om elementer kan brytes, mens <code>gap</code> styrer avstanden mellom dem', why: '<code>flex-wrap</code> bestemmer wrapping, mens <code>gap</code> bestemmer mellomrommet mellom flex-elementene.' },
          { text: '<code>gap</code> styrer wrapping, mens <code>flex-wrap</code> styrer avstanden', why: 'Rollene er motsatt: wrapping styres av <code>flex-wrap</code>, avstanden av <code>gap</code>.' },
          { text: 'Begge egenskapene gjør nøyaktig det samme', why: 'De har forskjellige roller: én styrer wrapping og den andre avstand.' },
          { text: 'Begge egenskapene styrer bare containerens bredde', why: 'Ingen av dem brukes primært til å sette containerens bredde.' },
        ],
      },
    ],

    en: [
      {
        q: 'Which value of <code>flex-wrap</code> lets flex items move to the next line when there is not enough space?',
        answer: 0,
        options: [
          { text: '<code>wrap</code>', why: '<code>flex-wrap: wrap</code> allows flex items to break onto multiple lines when needed.' },
          { text: '<code>nowrap</code>', why: '<code>nowrap</code> keeps the items on one line instead of allowing wrapping.' },
          { text: '<code>row</code>', why: '<code>row</code> is a value for <code>flex-direction</code>, not for <code>flex-wrap</code>.' },
          { text: '<code>multiple</code>', why: '<code>multiple</code> is not a valid value for <code>flex-wrap</code>.' },
        ],
      },
      {
        q: 'What is the default value of <code>flex-wrap</code>?',
        answer: 2,
        options: [
          { text: '<code>wrap</code>', why: '<code>wrap</code> must be specified when you want flex items to move onto multiple lines.' },
          { text: '<code>break</code>', why: '<code>break</code> is not a value for <code>flex-wrap</code>.' },
          { text: '<code>nowrap</code>', why: '<code>nowrap</code> is the default and keeps flex items on one line.' },
          { text: '<code>auto</code>', why: '<code>auto</code> is not the default value for <code>flex-wrap</code>.' },
        ],
      },
      {
        q: 'What does <code>gap: 20px</code> do in a flex container?',
        answer: 0,
        options: [
          { text: 'It gives 20px of space in both directions', why: 'One value for <code>gap</code> is used for both row and column spacing.' },
          { text: 'It gives 20px only between columns', why: 'With one <code>gap</code> value, the same spacing is also used between rows.' },
          { text: 'It gives 20px only between rows', why: 'One <code>gap</code> value applies in both directions, not only between rows.' },
          { text: 'It gives the container a 20px margin', why: '<code>gap</code> creates space between flex items, not around the container itself.' },
        ],
      },
      {
        q: 'In <code>gap: 12px 24px</code>, what do the first and second values mean?',
        answer: 2,
        options: [
          { text: '12px for columns, 24px for rows', why: 'The order is reversed: the first value is for rows and the second is for columns.' },
          { text: '12px for the container, 24px for the items', why: '<code>gap</code> does not set margin or padding on the container or its items.' },
          { text: '12px for rows, 24px for columns', why: 'With two <code>gap</code> values, the first is <code>row-gap</code> and the second is <code>column-gap</code>.' },
          { text: '12px on the left, 24px on the right', why: 'The two values describe row and column spacing, not left and right sides.' },
        ],
      },
      {
        q: 'Which CSS property controls the space between rows?',
        answer: 1,
        options: [
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> controls the space between columns.' },
          { text: '<code>row-gap</code>', why: '<code>row-gap</code> controls the space between rows.' },
          { text: '<code>flex-wrap</code>', why: '<code>flex-wrap</code> controls whether items can wrap, but it does not set the spacing between rows.' },
          { text: '<code>row-space</code>', why: '<code>row-space</code> is not the CSS property used for this purpose.' },
        ],
      },
      {
        q: 'Which CSS property controls the space between columns?',
        answer: 0,
        options: [
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> controls the space between columns.' },
          { text: '<code>row-gap</code>', why: '<code>row-gap</code> controls the space between rows, not columns.' },
          { text: '<code>column-space</code>', why: '<code>column-space</code> is not the CSS property used for this purpose.' },
          { text: '<code>flex-wrap</code>', why: '<code>flex-wrap</code> controls wrapping, not the spacing between columns.' },
        ],
      },
      {
        q: 'You want 10px between rows and 30px between columns. Which rule expresses this directly?',
        answer: 3,
        options: [
          { text: '<code>gap: 30px 10px;</code>', why: 'With two values this means 30px between rows and 10px between columns, which is reversed.' },
          { text: '<code>row-gap: 30px; column-gap: 10px;</code>', why: 'These values give the opposite of the requested spacing: 30px for rows and 10px for columns.' },
          { text: '<code>gap: 10px;</code>', why: 'One value gives 10px in both directions, not 30px between columns.' },
          { text: '<code>row-gap: 10px; column-gap: 30px;</code>', why: 'This sets 10px between rows and 30px between columns, exactly as required.' },
        ],
      },
      {
        q: 'What must be true for <code>flex-wrap: wrap</code> to actually create multiple rows?',
        answer: 2,
        options: [
          { text: 'The container must have <code>gap</code>', why: '<code>gap</code> is not required for wrapping; it only controls spacing between items.' },
          { text: 'All items must have the same width', why: 'Items do not need to have the same width for wrapping to occur.' },
          { text: 'There must not be enough space to keep all items on one line', why: 'Wrapping becomes relevant when the items cannot all fit on one line in the container.' },
          { text: 'The container must use <code>column-gap</code>', why: '<code>column-gap</code> is not a requirement for wrapping.' },
        ],
      },
      {
        q: 'Which combination creates a flex container that can wrap to multiple rows and has 16px between rows and 24px between columns?',
        answer: 1,
        options: [
          { text: '<code>display: flex; flex-wrap: nowrap; gap: 16px 24px;</code>', why: '<code>nowrap</code> does not allow the items to wrap onto multiple rows.' },
          { text: '<code>display: flex; flex-wrap: wrap; row-gap: 16px; column-gap: 24px;</code>', why: '<code>flex-wrap: wrap</code> allows multiple rows, while the two gap properties provide the requested spacing.' },
          { text: '<code>display: block; flex-wrap: wrap; gap: 16px 24px;</code>', why: 'The container is not a flex container because it does not use <code>display: flex</code>.' },
          { text: '<code>display: flex; flex-wrap: wrap; row-gap: 24px; column-gap: 16px;</code>', why: 'Wrapping is correct, but the row and column spacing values are reversed.' },
        ],
      },
      {
        q: 'What is the main difference between <code>gap</code> and <code>flex-wrap</code> in a flex container?',
        answer: 0,
        options: [
          { text: '<code>flex-wrap</code> controls whether items can wrap, while <code>gap</code> controls the space between them', why: '<code>flex-wrap</code> controls wrapping, while <code>gap</code> controls spacing between flex items.' },
          { text: '<code>gap</code> controls wrapping, while <code>flex-wrap</code> controls spacing', why: 'The roles are reversed: wrapping is controlled by <code>flex-wrap</code>, and spacing by <code>gap</code>.' },
          { text: 'Both properties do exactly the same thing', why: 'They have different roles: one controls wrapping and the other controls spacing.' },
          { text: 'Both properties only control the container width', why: 'Neither property is primarily used to set the container width.' },
        ],
      },
    ],

    uk: [
      {
        q: 'Яке значення <code>flex-wrap</code> дозволяє flex-елементам перейти на наступний рядок, коли місця недостатньо?',
        answer: 0,
        options: [
          { text: '<code>wrap</code>', why: '<code>flex-wrap: wrap</code> дозволяє flex-елементам переноситися на кілька рядків, коли це потрібно.' },
          { text: '<code>nowrap</code>', why: '<code>nowrap</code> залишає елементи в одному рядку й не дозволяє перенесення.' },
          { text: '<code>row</code>', why: '<code>row</code> є значенням для <code>flex-direction</code>, а не для <code>flex-wrap</code>.' },
          { text: '<code>multiple</code>', why: '<code>multiple</code> не є допустимим значенням для <code>flex-wrap</code>.' },
        ],
      },
      {
        q: 'Яке значення <code>flex-wrap</code> використовується за замовчуванням?',
        answer: 3,
        options: [
          { text: '<code>wrap</code>', why: '<code>wrap</code> потрібно вказати, якщо ви хочете дозволити перенесення flex-елементів на кілька рядків.' },
          { text: '<code>break</code>', why: '<code>break</code> не є значенням властивості <code>flex-wrap</code>.' },
          { text: '<code>auto</code>', why: '<code>auto</code> не є значенням за замовчуванням для <code>flex-wrap</code>.' },
          { text: '<code>nowrap</code>', why: '<code>nowrap</code> є значенням за замовчуванням і залишає flex-елементи в одному рядку.' },
        ],
      },
      {
        q: 'Що робить <code>gap: 20px</code> у flex-контейнері?',
        answer: 0,
        options: [
          { text: 'Задає 20px відстані в обох напрямках', why: 'Одне значення <code>gap</code> використовується і для відстані між рядками, і для відстані між колонками.' },
          { text: 'Задає 20px лише між колонками', why: 'За одного значення <code>gap</code> така сама відстань використовується і між рядками.' },
          { text: 'Задає 20px лише між рядками', why: 'Одне значення <code>gap</code> застосовується в обох напрямках, а не лише між рядками.' },
          { text: 'Задає контейнеру margin 20px', why: '<code>gap</code> створює відстань між flex-елементами, а не навколо самого контейнера.' },
        ],
      },
      {
        q: 'У <code>gap: 12px 24px</code> що означають перше та друге значення?',
        answer: 2,
        options: [
          { text: '12px для колонок, 24px для рядків', why: 'Порядок протилежний: перше значення задає відстань між рядками, друге — між колонками.' },
          { text: '12px для контейнера, 24px для елементів', why: '<code>gap</code> не задає margin або padding контейнера чи його елементів.' },
          { text: '12px для рядків, 24px для колонок', why: 'У двох значеннях <code>gap</code> перше відповідає <code>row-gap</code>, а друге — <code>column-gap</code>.' },
          { text: '12px ліворуч, 24px праворуч', why: 'Два значення описують відстань між рядками та колонками, а не ліву і праву сторони.' },
        ],
      },
      {
        q: 'Яка CSS-властивість керує відстанню між рядками?',
        answer: 1,
        options: [
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> керує відстанню між колонками.' },
          { text: '<code>row-gap</code>', why: '<code>row-gap</code> керує відстанню між рядками.' },
          { text: '<code>flex-wrap</code>', why: '<code>flex-wrap</code> визначає, чи можуть елементи переноситися, але не задає відстань між рядками.' },
          { text: '<code>row-space</code>', why: '<code>row-space</code> не є CSS-властивістю для цієї мети.' },
        ],
      },
      {
        q: 'Яка CSS-властивість керує відстанню між колонками?',
        answer: 0,
        options: [
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> керує відстанню між колонками.' },
          { text: '<code>row-gap</code>', why: '<code>row-gap</code> керує відстанню між рядками, а не між колонками.' },
          { text: '<code>column-space</code>', why: '<code>column-space</code> не є CSS-властивістю для цієї мети.' },
          { text: '<code>flex-wrap</code>', why: '<code>flex-wrap</code> керує перенесенням, а не відстанню між колонками.' },
        ],
      },
      {
        q: 'Вам потрібно 10px між рядками та 30px між колонками. Яке правило безпосередньо задає це?',
        answer: 3,
        options: [
          { text: '<code>gap: 30px 10px;</code>', why: 'За двох значень це означає 30px між рядками та 10px між колонками, тобто навпаки.' },
          { text: '<code>row-gap: 30px; column-gap: 10px;</code>', why: 'Ці значення задають протилежне: 30px між рядками та 10px між колонками.' },
          { text: '<code>gap: 10px;</code>', why: 'Одне значення задає 10px в обох напрямках, а не 30px між колонками.' },
          { text: '<code>row-gap: 10px; column-gap: 30px;</code>', why: 'Це задає 10px між рядками та 30px між колонками, саме як потрібно.' },
        ],
      },
      {
        q: 'Що має бути виконано, щоб <code>flex-wrap: wrap</code> справді міг створити кілька рядків?',
        answer: 2,
        options: [
          { text: 'Контейнер обов’язково має мати <code>gap</code>', why: '<code>gap</code> не потрібен для перенесення; він лише керує відстанню між елементами.' },
          { text: 'Усі елементи мають мати однакову ширину', why: 'Для перенесення елементи не повинні мати однакову ширину.' },
          { text: 'Має бути недостатньо місця, щоб розмістити всі елементи в одному рядку', why: 'Перенесення стає потрібним, коли всі елементи не можуть поміститися в одному рядку контейнера.' },
          { text: 'Контейнер обов’язково має використовувати <code>column-gap</code>', why: '<code>column-gap</code> не є умовою для перенесення елементів.' },
        ],
      },
      {
        q: 'Яка комбінація створює flex-контейнер, що може переноситися на кілька рядків і має 16px між рядками та 24px між колонками?',
        answer: 1,
        options: [
          { text: '<code>display: flex; flex-wrap: nowrap; gap: 16px 24px;</code>', why: '<code>nowrap</code> не дозволяє елементам переноситися на кілька рядків.' },
          { text: '<code>display: flex; flex-wrap: wrap; row-gap: 16px; column-gap: 24px;</code>', why: '<code>flex-wrap: wrap</code> дозволяє кілька рядків, а дві gap-властивості задають потрібні відстані.' },
          { text: '<code>display: block; flex-wrap: wrap; gap: 16px 24px;</code>', why: 'Контейнер не є flex-контейнером, бо для нього не задано <code>display: flex</code>.' },
          { text: '<code>display: flex; flex-wrap: wrap; row-gap: 24px; column-gap: 16px;</code>', why: 'Перенесення задано правильно, але відстані між рядками та колонками поміняні місцями.' },
        ],
      },
      {
        q: 'Яка головна різниця між <code>gap</code> і <code>flex-wrap</code> у flex-контейнері?',
        answer: 0,
        options: [
          { text: '<code>flex-wrap</code> визначає, чи можуть елементи переноситися, а <code>gap</code> задає відстань між ними', why: '<code>flex-wrap</code> керує перенесенням, а <code>gap</code> — відстанню між flex-елементами.' },
          { text: '<code>gap</code> керує перенесенням, а <code>flex-wrap</code> задає відстань', why: 'Ролі протилежні: перенесення керується <code>flex-wrap</code>, а відстань — <code>gap</code>.' },
          { text: 'Обидві властивості роблять абсолютно те саме', why: 'Вони мають різні ролі: одна керує перенесенням, інша — відстанню.' },
          { text: 'Обидві властивості керують лише шириною контейнера', why: 'Жодна з цих властивостей не призначена насамперед для задання ширини контейнера.' },
        ],
      },
    ],
  },
});
