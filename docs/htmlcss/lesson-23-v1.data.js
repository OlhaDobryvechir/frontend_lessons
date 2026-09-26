/*
 * Content of lesson 23 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */

Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS Grid',
      kicker: 'Leksjon 23 &middot; CSS',
      title: 'CSS Grid',
      lead: 'CSS Grid lager et todimensjonalt rutenett for innhold. Du styrer kolonner, rader, mellomrom og plassering med noen få tydelige egenskaper.',

      's.container.t': 'Gjør et element til et rutenett',
      's.container.d':
        '<p><code>display: grid;</code> gjør elementet til en grid-container. Direkte barn blir grid-elementer, og nettleseren plasserer dem i rutenettet.</p>' +
        '<p>Grid passer særlig godt når både rader og kolonner er en del av layouten. Du trenger ikke å plassere hvert element manuelt for å få en ryddig struktur.</p>',

      's.columns.t': 'Definer kolonner',
      's.columns.d':
        '<p><code>grid-template-columns</code> bestemmer hvor mange kolonner grid-en har og hvor brede de er. <code>1fr 2fr 1fr</code> lager tre kolonner der den midterste får dobbelt så mye tilgjengelig plass som hver av de andre.</p>' +
        '<p><code>fr</code> betyr en brøkdel av den tilgjengelige plassen etter at andre faste størrelser og mellomrom er tatt hensyn til.</p>',

      's.rows.t': 'Definer rader',
      's.rows.d':
        '<p><code>grid-template-rows</code> bestemmer størrelsen på grid-radene. I <code>80px 1fr</code> er første rad 80 piksler høy, mens resten av den tilgjengelige høyden går til den andre raden.</p>' +
        '<p>Du kan bruke faste enheter og fleksible enheter som <code>fr</code> sammen.</p>',

      's.gap.t': 'Lag mellomrom',
      's.gap.d':
        '<p><code>gap</code> lager mellomrom mellom grid-rader og grid-kolonner. Det er en enkel måte å gi jevn avstand uten å legge margin på hvert enkelt barn.</p>' +
        '<p>Du kan også bruke <code>row-gap</code> og <code>column-gap</code> når radene og kolonnene skal ha forskjellige mellomrom.</p>',

      's.placement.t': 'Plasser et grid-element',
      's.placement.d':
        '<p><code>grid-column</code> og <code>grid-row</code> lar deg bestemme hvor et grid-element starter og slutter. Verdien <code>1 / 3</code> for <code>grid-column</code> betyr at elementet går fra kolonnelinje 1 til kolonnelinje 3 og dermed dekker to kolonner.</p>' +
        '<p>Dette er nyttig når ett element skal være bredere eller høyere enn de andre.</p>',

      's.responsive.t': 'Gjenta og begrens kolonner',
      's.responsive.d':
        '<p><code>repeat(3, ...)</code> skriver den samme kolonnedefinisjonen tre ganger på en kortere måte. <code>minmax(180px, 1fr)</code> sier at hver kolonne kan være minst 180 piksler bred og kan vokse til en fleksibel del av tilgjengelig plass.</p>' +
        '<p>Kombinasjonen gjør det enklere å lage rutenett som både har en tydelig minimumsbredde og bruker ledig plass.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS Grid',
      kicker: 'Lesson 23 &middot; CSS',
      title: 'CSS Grid',
      lead: 'CSS Grid creates a two-dimensional layout for content. You control columns, rows, gaps and placement with a small set of clear properties.',

      's.container.t': 'Turn an element into a grid',
      's.container.d':
        '<p><code>display: grid;</code> makes an element a grid container. Its direct children become grid items, and the browser places them in the grid.</p>' +
        '<p>Grid is especially useful when both rows and columns are part of the layout. You do not have to position every item manually to get a structured layout.</p>',

      's.columns.t': 'Define columns',
      's.columns.d':
        '<p><code>grid-template-columns</code> defines how many columns the grid has and how wide they are. <code>1fr 2fr 1fr</code> creates three columns where the middle one gets twice as much available space as each outer column.</p>' +
        '<p><code>fr</code> means a fraction of the available space after other fixed sizes and gaps have been accounted for.</p>',

      's.rows.t': 'Define rows',
      's.rows.d':
        '<p><code>grid-template-rows</code> defines the size of grid rows. In <code>80px 1fr</code>, the first row is 80 pixels tall, while the remaining available height goes to the second row.</p>' +
        '<p>You can combine fixed units with flexible units such as <code>fr</code>.</p>',

      's.gap.t': 'Create spacing',
      's.gap.d':
        '<p><code>gap</code> creates space between grid rows and columns. It is a simple way to keep spacing consistent without adding margin to every child.</p>' +
        '<p>You can also use <code>row-gap</code> and <code>column-gap</code> when rows and columns need different spacing.</p>',

      's.placement.t': 'Place a grid item',
      's.placement.d':
        '<p><code>grid-column</code> and <code>grid-row</code> let you control where a grid item starts and ends. A <code>grid-column</code> value of <code>1 / 3</code> means the item runs from column line 1 to column line 3, so it spans two columns.</p>' +
        '<p>This is useful when one item needs to be wider or taller than the others.</p>',

      's.responsive.t': 'Repeat and constrain columns',
      's.responsive.d':
        '<p><code>repeat(3, ...)</code> writes the same column definition three times in a shorter form. <code>minmax(180px, 1fr)</code> says each column can be at least 180 pixels wide and can grow to a flexible share of the available space.</p>' +
        '<p>The combination makes it easier to build grids that keep a clear minimum width while still using available space.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS Grid',
      kicker: 'Урок 23 &middot; CSS',
      title: 'CSS Grid',
      lead: 'CSS Grid створює двовимірну сітку для вмісту. За допомогою кількох зрозумілих властивостей ви керуєте стовпцями, рядками, проміжками та розташуванням.',

      's.container.t': 'Перетворення елемента на сітку',
      's.container.d':
        '<p><code>display: grid;</code> робить елемент grid-контейнером. Його безпосередні дочірні елементи стають grid-елементами, а браузер розміщує їх у сітці.</p>' +
        '<p>Grid особливо зручний, коли в макеті важливі і рядки, і стовпці. Не потрібно вручну позиціонувати кожен елемент, щоб отримати впорядкований макет.</p>',

      's.columns.t': 'Визначення стовпців',
      's.columns.d':
        '<p><code>grid-template-columns</code> визначає кількість стовпців сітки та їхню ширину. <code>1fr 2fr 1fr</code> створює три стовпці, де середній отримує вдвічі більше доступного простору, ніж кожен із крайніх.</p>' +
        '<p><code>fr</code> означає частку доступного простору після врахування інших фіксованих розмірів і проміжків.</p>',

      's.rows.t': 'Визначення рядків',
      's.rows.d':
        '<p><code>grid-template-rows</code> визначає розмір рядків сітки. У <code>80px 1fr</code> перший рядок має висоту 80 пікселів, а решта доступної висоти переходить до другого рядка.</p>' +
        '<p>Фіксовані одиниці можна поєднувати з гнучкими одиницями, такими як <code>fr</code>.</p>',

      's.gap.t': 'Створення проміжків',
      's.gap.d':
        '<p><code>gap</code> створює проміжки між рядками та стовпцями grid. Це простий спосіб зберігати однакові відступи без додавання margin до кожного дочірнього елемента.</p>' +
        '<p>Також можна використовувати <code>row-gap</code> і <code>column-gap</code>, коли для рядків і стовпців потрібні різні проміжки.</p>',

      's.placement.t': 'Розташування grid-елемента',
      's.placement.d':
        '<p><code>grid-column</code> і <code>grid-row</code> дають змогу визначати, де grid-елемент починається та закінчується. Значення <code>1 / 3</code> для <code>grid-column</code> означає, що елемент іде від лінії стовпця 1 до лінії стовпця 3 і тому займає два стовпці.</p>' +
        '<p>Це корисно, коли один елемент має бути ширшим або вищим за інші.</p>',

      's.responsive.t': 'Повторення та обмеження стовпців',
      's.responsive.d':
        '<p><code>repeat(3, ...)</code> записує те саме визначення стовпця тричі у скороченій формі. <code>minmax(180px, 1fr)</code> означає, що кожен стовпець може мати щонайменше 180 пікселів ширини та може розширюватися до гнучкої частки доступного простору.</p>' +
        '<p>Таке поєднання спрощує створення сіток, які зберігають чітку мінімальну ширину й водночас використовують доступний простір.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva gjør <code>display: grid;</code> med et element?',
        answer: 1,
        options: [
          { text: 'Det gjør elementet til en grid-rad.', why: 'En rad er bare én del av et grid. <code>display: grid;</code> gjør selve elementet til grid-container.' },
          { text: 'Det gjør elementet til en grid-container.', why: 'Dette er riktig: direkte barn blir grid-elementer, og nettleseren kan plassere dem i rutenettet.' },
          { text: 'Det gjør alle barn til inline-elementer.', why: 'Grid endrer ikke barn til inline-elementer. Direkte barn blir grid-elementer.' },
          { text: 'Det skjuler elementet og lager et nytt rutenett.', why: 'Grid skjuler ikke containeren. Den endrer layoutmodellen slik at den kan styre et rutenett.' },
        ],
      },
      {
        q: 'Hva bestemmer <code>grid-template-columns</code>?',
        answer: 2,
        options: [
          { text: 'Avstanden mellom grid-elementene.', why: 'Avstanden styres av <code>gap</code>, <code>row-gap</code> eller <code>column-gap</code>.' },
          { text: 'Høyden på hver grid-rad.', why: 'Radhøyder styres av <code>grid-template-rows</code>.' },
          { text: 'Antall kolonner og størrelsen deres.', why: '<code>grid-template-columns</code> beskriver kolonnene i grid-en og hvor mye plass de får.' },
          { text: 'Hvilket barn som skal vises først i HTML-koden.', why: 'Egenskapen definerer kolonner, ikke rekkefølgen på HTML-elementene.' },
        ],
      },
      {
        q: 'I <code>grid-template-columns: 1fr 2fr 1fr;</code>, hvordan fordeles den tilgjengelige plassen mellom de tre kolonnene når ingen andre størrelser påvirker fordelingen?',
        answer: 3,
        options: [
          { text: 'Alle tre får like mye plass.', why: 'Like store kolonner ville vært <code>1fr 1fr 1fr</code>, ikke <code>1fr 2fr 1fr</code>.' },
          { text: 'Den første får dobbelt så mye som den andre.', why: 'Den midterste har to fr-enheter, mens den første bare har én.' },
          { text: 'Den siste får halvparten av den første.', why: 'Første og siste kolonne har begge én fr-enhet og får derfor samme andel.' },
          { text: 'Den midterste får dobbelt så mye som hver av de to andre.', why: 'Forholdet er 1:2:1, så midterste kolonne får to av totalt fire fr-enheter.' },
        ],
      },
      {
        q: 'Hva er effekten av <code>grid-template-rows: 80px 1fr;</code> når containeren har tilgjengelig høyde for begge rader?',
        answer: 0,
        options: [
          { text: 'Første rad er 80 piksler høy, og andre rad bruker resten av den tilgjengelige høyden.', why: 'Den første raden er fast på 80px, mens <code>1fr</code> får den gjenværende plassen.' },
          { text: 'Begge rader blir 80 piksler høye.', why: 'Bare første rad har en fast verdi på 80px. Den andre bruker <code>1fr</code>.' },
          { text: 'Andre rad blir 80 piksler høy, og første bruker resten.', why: 'Verdiene gjelder i rekkefølgen første rad, deretter andre rad.' },
          { text: 'Begge radene blir automatisk like høye.', why: '<code>80px</code> gjør første rad fast, så radene blir ikke automatisk like høye.' },
        ],
      },
      {
        q: 'Hva gjør <code>gap: 20px;</code> i en grid-container?',
        answer: 2,
        options: [
          { text: 'Legger 20px margin rundt hele containeren.', why: '<code>gap</code> gjelder mellom grid-sporene, ikke rundt hele containerens ytterkant.' },
          { text: 'Gjør alle grid-elementene 20px bredere.', why: 'Gap endrer ikke størrelsen på selve grid-elementene; det lager mellomrom mellom sporene.' },
          { text: 'Lager 20px mellomrom mellom grid-rader og grid-kolonner.', why: '<code>gap</code> angir avstanden mellom både rader og kolonner.' },
          { text: 'Flytter hele grid-en 20px ned på siden.', why: 'Å flytte containeren er ikke funksjonen til <code>gap</code>.' },
        ],
      },
      {
        q: 'Hva betyr <code>grid-column: 1 / 3;</code> for et grid-element?',
        answer: 1,
        options: [
          { text: 'Elementet starter i kolonne 3 og slutter i kolonne 1.', why: 'Linjenumrene leses fra start til slutt: <code>1 / 3</code> går fra linje 1 til linje 3.' },
          { text: 'Elementet går fra kolonnelinje 1 til kolonnelinje 3 og dekker to kolonner.', why: 'To grid-spor ligger mellom linje 1 og linje 3, så elementet spenner over to kolonner.' },
          { text: 'Elementet dekker bare kolonne 1.', why: 'Fra linje 1 til linje 3 inkluderer to kolonne-spor, ikke ett.' },
          { text: 'Elementet flyttes til rad 3.', why: '<code>grid-column</code> styrer kolonneplassering; rader styres av <code>grid-row</code>.' },
        ],
      },
      {
        q: 'Hvilken egenskap bruker du når et grid-element skal plasseres på bestemte rader?',
        answer: 3,
        options: [
          { text: '<code>grid-column</code>', why: '<code>grid-column</code> bestemmer start og slutt i kolonner, ikke rader.' },
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> lager mellomrom mellom kolonner.' },
          { text: '<code>grid-template-rows</code>', why: 'Denne egenskapen definerer størrelsen på grid-radene, men plasserer ikke et bestemt barn i en rad.' },
          { text: '<code>grid-row</code>', why: '<code>grid-row</code> lar deg bestemme hvor et bestemt grid-element starter og slutter i radretningen.' },
        ],
      },
      {
        q: 'Hva gjør <code>repeat(3, 1fr)</code> i <code>grid-template-columns</code>?',
        answer: 0,
        options: [
          { text: 'Det lager tre kolonner, hver med én fleksibel fr-enhet.', why: '<code>repeat(3, 1fr)</code> er en kortere måte å skrive <code>1fr 1fr 1fr</code> på.' },
          { text: 'Det lager én kolonne som er tre ganger så bred.', why: '<code>repeat()</code> gjentar sporet tre ganger; det lager ikke én kolonne med tre ganger bredden.' },
          { text: 'Det lager tre rader med fast høyde.', why: 'Her brukes <code>repeat()</code> i <code>grid-template-columns</code>, så resultatet gjelder kolonner.' },
          { text: 'Det lager tre kolonner på 1 piksel hver.', why: '<code>fr</code> er en fleksibel enhet for tilgjengelig plass, ikke en pikselverdi.' },
        ],
      },
      {
        q: 'Hva er hovedrollen til <code>minmax(180px, 1fr)</code> som en kolonnestørrelse?',
        answer: 2,
        options: [
          { text: 'Kolonnen er alltid nøyaktig 180px bred.', why: '180px er minimumet; <code>1fr</code> lar kolonnen vokse når det er mer plass.' },
          { text: 'Kolonnen kan aldri bli bredere enn 180px.', why: '180px er minimumet, ikke maksimumet.' },
          { text: 'Kolonnen kan være minst 180px bred og vokse fleksibelt.', why: '<code>minmax()</code> setter et minimum på 180px og et fleksibelt maksimum på <code>1fr</code>.' },
          { text: 'Kolonnen får minst 1fr og maks 180px.', why: 'Argumentene er i rekkefølgen minimum, maksimum: først 180px, deretter 1fr.' },
        ],
      },
      {
        q: 'Du har en grid med tre kolonner. Ett kort skal dekke alle tre kolonnene, fra første kolonnelinje til fjerde kolonnelinje. Hvilken verdi passer til <code>grid-column</code>?',
        answer: 1,
        options: [
          { text: '<code>1 / 3</code>', why: 'Dette går bare fra linje 1 til linje 3 og dekker dermed to kolonner.' },
          { text: '<code>1 / 4</code>', why: 'Med tre kolonner finnes fire kolonnelinjer, og fra linje 1 til linje 4 dekker kortet alle tre kolonnene.' },
          { text: '<code>2 / 4</code>', why: 'Dette starter ved linje 2 og dekker bare de to siste kolonnene.' },
          { text: '<code>3 / 1</code>', why: 'Start- og sluttlinjene er angitt i feil rekkefølge for denne plasseringen.' },
        ],
      },
    ],

    en: [
      {
        q: 'What does <code>display: grid;</code> do to an element?',
        answer: 1,
        options: [
          { text: 'It makes the element a grid row.', why: 'A row is only one part of a grid. <code>display: grid;</code> makes the element the grid container.' },
          { text: 'It makes the element a grid container.', why: 'This is correct: direct children become grid items, and the browser can place them in the grid.' },
          { text: 'It makes all children inline elements.', why: 'Grid does not turn children into inline elements. Direct children become grid items.' },
          { text: 'It hides the element and creates a new grid.', why: 'Grid does not hide the container. It changes its layout model so it can control a grid.' },
        ],
      },
      {
        q: 'What does <code>grid-template-columns</code> define?',
        answer: 2,
        options: [
          { text: 'The spacing between grid items.', why: 'Spacing is controlled by <code>gap</code>, <code>row-gap</code>, or <code>column-gap</code>.' },
          { text: 'The height of each grid row.', why: 'Row heights are controlled by <code>grid-template-rows</code>.' },
          { text: 'The number of columns and their sizes.', why: '<code>grid-template-columns</code> describes the grid columns and how much space they receive.' },
          { text: 'Which child appears first in the HTML source.', why: 'The property defines columns, not the order of HTML elements.' },
        ],
      },
      {
        q: 'In <code>grid-template-columns: 1fr 2fr 1fr;</code>, how is the available space divided among the three columns when no other sizes affect the distribution?',
        answer: 3,
        options: [
          { text: 'All three get equal space.', why: 'Equal columns would be <code>1fr 1fr 1fr</code>, not <code>1fr 2fr 1fr</code>.' },
          { text: 'The first gets twice as much as the second.', why: 'The middle column has two fr units, while the first has only one.' },
          { text: 'The last gets half as much as the first.', why: 'The first and last columns both have one fr unit, so they receive the same share.' },
          { text: 'The middle gets twice as much as each of the other two.', why: 'The ratio is 1:2:1, so the middle column gets two of the four total fr units.' },
        ],
      },
      {
        q: 'What is the effect of <code>grid-template-rows: 80px 1fr;</code> when the container has enough height for both rows?',
        answer: 0,
        options: [
          { text: 'The first row is 80 pixels tall, and the second row uses the remaining available height.', why: 'The first row is fixed at 80px, while <code>1fr</code> receives the remaining space.' },
          { text: 'Both rows become 80 pixels tall.', why: 'Only the first row has the fixed 80px value. The second uses <code>1fr</code>.' },
          { text: 'The second row is 80 pixels tall, and the first uses the rest.', why: 'The values apply in order: first row, then second row.' },
          { text: 'Both rows automatically become the same height.', why: '<code>80px</code> fixes the first row, so the rows do not automatically become equal.' },
        ],
      },
      {
        q: 'What does <code>gap: 20px;</code> do in a grid container?',
        answer: 2,
        options: [
          { text: 'It adds 20px of margin around the whole container.', why: '<code>gap</code> applies between grid tracks, not around the outside edge of the container.' },
          { text: 'It makes every grid item 20px wider.', why: 'Gap does not change the size of the grid items themselves; it creates space between tracks.' },
          { text: 'It creates 20px of space between grid rows and columns.', why: '<code>gap</code> sets the spacing between both rows and columns.' },
          { text: 'It moves the whole grid 20px down the page.', why: 'Moving the container is not the function of <code>gap</code>.' },
        ],
      },
      {
        q: 'What does <code>grid-column: 1 / 3;</code> mean for a grid item?',
        answer: 1,
        options: [
          { text: 'The item starts at column 3 and ends at column 1.', why: 'The line numbers are read from start to end: <code>1 / 3</code> goes from line 1 to line 3.' },
          { text: 'The item runs from column line 1 to column line 3 and spans two columns.', why: 'Two grid tracks lie between line 1 and line 3, so the item spans two columns.' },
          { text: 'The item spans only column 1.', why: 'From line 1 to line 3 includes two column tracks, not one.' },
          { text: 'The item moves to row 3.', why: '<code>grid-column</code> controls column placement; rows are controlled by <code>grid-row</code>.' },
        ],
      },
      {
        q: 'Which property do you use when a grid item should be placed on specific rows?',
        answer: 3,
        options: [
          { text: '<code>grid-column</code>', why: '<code>grid-column</code> controls the start and end in columns, not rows.' },
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> creates spacing between columns.' },
          { text: '<code>grid-template-rows</code>', why: 'This property defines grid row sizes, but it does not place one specific child in a row.' },
          { text: '<code>grid-row</code>', why: '<code>grid-row</code> lets you control where a specific grid item starts and ends in the row direction.' },
        ],
      },
      {
        q: 'What does <code>repeat(3, 1fr)</code> do in <code>grid-template-columns</code>?',
        answer: 0,
        options: [
          { text: 'It creates three columns, each with one flexible fr unit.', why: '<code>repeat(3, 1fr)</code> is a shorter way to write <code>1fr 1fr 1fr</code>.' },
          { text: 'It creates one column that is three times wider.', why: '<code>repeat()</code> repeats the track three times; it does not make one track three times wider.' },
          { text: 'It creates three rows with a fixed height.', why: 'Here <code>repeat()</code> is used in <code>grid-template-columns</code>, so the result applies to columns.' },
          { text: 'It creates three columns that are 1 pixel wide.', why: '<code>fr</code> is a flexible unit of available space, not a pixel value.' },
        ],
      },
      {
        q: 'What is the main role of <code>minmax(180px, 1fr)</code> as a column size?',
        answer: 2,
        options: [
          { text: 'The column is always exactly 180px wide.', why: '180px is the minimum; <code>1fr</code> lets the column grow when more space is available.' },
          { text: 'The column can never be wider than 180px.', why: '180px is the minimum, not the maximum.' },
          { text: 'The column can be at least 180px wide and grow flexibly.', why: '<code>minmax()</code> sets a 180px minimum and a flexible <code>1fr</code> maximum.' },
          { text: 'The column gets at least 1fr and at most 180px.', why: 'The arguments are ordered minimum, maximum: first 180px, then 1fr.' },
        ],
      },
      {
        q: 'You have a grid with three columns. One card should span all three columns, from the first column line to the fourth column line. Which <code>grid-column</code> value fits?',
        answer: 1,
        options: [
          { text: '<code>1 / 3</code>', why: 'This runs only from line 1 to line 3 and therefore spans two columns.' },
          { text: '<code>1 / 4</code>', why: 'With three columns there are four column lines, and from line 1 to line 4 the card spans all three columns.' },
          { text: '<code>2 / 4</code>', why: 'This starts at line 2 and spans only the last two columns.' },
          { text: '<code>3 / 1</code>', why: 'The start and end lines are given in the wrong order for this placement.' },
        ],
      },
    ],

    uk: [
      {
        q: 'Що робить <code>display: grid;</code> з елементом?',
        answer: 1,
        options: [
          { text: 'Перетворює елемент на рядок grid.', why: 'Рядок є лише частиною grid. <code>display: grid;</code> перетворює сам елемент на grid-контейнер.' },
          { text: 'Перетворює елемент на grid-контейнер.', why: 'Це правильно: безпосередні дочірні елементи стають grid-елементами, а браузер може розміщувати їх у сітці.' },
          { text: 'Перетворює всіх дочірніх елементів на inline-елементи.', why: 'Grid не перетворює дочірні елементи на inline. Вони стають grid-елементами.' },
          { text: 'Приховує елемент і створює нову сітку.', why: 'Grid не приховує контейнер. Він змінює модель компонування, щоб керувати сіткою.' },
        ],
      },
      {
        q: 'Що визначає <code>grid-template-columns</code>?',
        answer: 2,
        options: [
          { text: 'Проміжок між grid-елементами.', why: 'Проміжки задають <code>gap</code>, <code>row-gap</code> або <code>column-gap</code>.' },
          { text: 'Висоту кожного grid-рядка.', why: 'Висоту рядків визначає <code>grid-template-rows</code>.' },
          { text: 'Кількість стовпців і їхні розміри.', why: '<code>grid-template-columns</code> описує стовпці сітки та простір, який вони отримують.' },
          { text: 'Який дочірній елемент буде першим у HTML-коді.', why: 'Ця властивість визначає стовпці, а не порядок HTML-елементів.' },
        ],
      },
      {
        q: 'У <code>grid-template-columns: 1fr 2fr 1fr;</code> як розподіляється доступний простір між трьома стовпцями, якщо інші розміри не впливають на розподіл?',
        answer: 3,
        options: [
          { text: 'Усі три отримують однаковий простір.', why: 'Для однакових стовпців було б <code>1fr 1fr 1fr</code>, а не <code>1fr 2fr 1fr</code>.' },
          { text: 'Перший отримує вдвічі більше за другий.', why: 'Середній стовпець має дві fr-одиниці, а перший — лише одну.' },
          { text: 'Останній отримує вдвічі менше за перший.', why: 'Перший і останній стовпці мають по одній fr-одиниці, тому отримують однакову частку.' },
          { text: 'Середній отримує вдвічі більше за кожен із двох інших.', why: 'Співвідношення 1:2:1, тому середній отримує дві з чотирьох загальних fr-одиниць.' },
        ],
      },
      {
        q: 'Який ефект має <code>grid-template-rows: 80px 1fr;</code>, якщо контейнер має достатню висоту для обох рядків?',
        answer: 0,
        options: [
          { text: 'Перший рядок має висоту 80 пікселів, а другий використовує решту доступної висоти.', why: 'Перший рядок фіксований на 80px, а <code>1fr</code> отримує простір, що залишився.' },
          { text: 'Обидва рядки стають заввишки 80 пікселів.', why: 'Лише перший рядок має фіксоване значення 80px. Другий використовує <code>1fr</code>.' },
          { text: 'Другий рядок має висоту 80 пікселів, а перший використовує решту.', why: 'Значення застосовуються за порядком: спочатку перший рядок, потім другий.' },
          { text: 'Обидва рядки автоматично стають однакової висоти.', why: '<code>80px</code> фіксує перший рядок, тому рядки не стають автоматично однаковими.' },
        ],
      },
      {
        q: 'Що робить <code>gap: 20px;</code> у grid-контейнері?',
        answer: 2,
        options: [
          { text: 'Додає margin 20px навколо всього контейнера.', why: '<code>gap</code> діє між grid-доріжками, а не по зовнішньому краю контейнера.' },
          { text: 'Робить кожен grid-елемент на 20px ширшим.', why: 'Gap не змінює розмір самих grid-елементів; він створює простір між доріжками.' },
          { text: 'Створює проміжок 20px між рядками та стовпцями grid.', why: '<code>gap</code> задає відстань і між рядками, і між стовпцями.' },
          { text: 'Переміщує всю сітку на 20px вниз сторінки.', why: 'Переміщення контейнера не є функцією <code>gap</code>.' },
        ],
      },
      {
        q: 'Що означає <code>grid-column: 1 / 3;</code> для grid-елемента?',
        answer: 1,
        options: [
          { text: 'Елемент починається у стовпці 3 і закінчується у стовпці 1.', why: 'Номери ліній читаються від початку до кінця: <code>1 / 3</code> означає від лінії 1 до лінії 3.' },
          { text: 'Елемент іде від лінії стовпця 1 до лінії стовпця 3 і займає два стовпці.', why: 'Між лініями 1 і 3 розташовані дві grid-доріжки, тому елемент займає два стовпці.' },
          { text: 'Елемент займає лише стовпець 1.', why: 'Від лінії 1 до лінії 3 містяться дві доріжки стовпців, а не одна.' },
          { text: 'Елемент переміщується до рядка 3.', why: '<code>grid-column</code> керує розташуванням у стовпцях; за рядки відповідає <code>grid-row</code>.' },
        ],
      },
      {
        q: 'Яку властивість використовують, коли grid-елемент потрібно розмістити у визначених рядках?',
        answer: 3,
        options: [
          { text: '<code>grid-column</code>', why: '<code>grid-column</code> керує початком і кінцем у стовпцях, а не в рядках.' },
          { text: '<code>column-gap</code>', why: '<code>column-gap</code> створює проміжки між стовпцями.' },
          { text: '<code>grid-template-rows</code>', why: 'Ця властивість визначає розміри рядків сітки, але не розміщує конкретний дочірній елемент у рядку.' },
          { text: '<code>grid-row</code>', why: '<code>grid-row</code> дає змогу визначити, де конкретний grid-елемент починається та закінчується в напрямку рядків.' },
        ],
      },
      {
        q: 'Що робить <code>repeat(3, 1fr)</code> у <code>grid-template-columns</code>?',
        answer: 0,
        options: [
          { text: 'Створює три стовпці, кожен з однією гнучкою fr-одиницею.', why: '<code>repeat(3, 1fr)</code> — скорочений запис <code>1fr 1fr 1fr</code>.' },
          { text: 'Створює один стовпець, утричі ширший.', why: '<code>repeat()</code> повторює доріжку тричі, а не робить одну доріжку утричі ширшою.' },
          { text: 'Створює три рядки з фіксованою висотою.', why: 'Тут <code>repeat()</code> використано в <code>grid-template-columns</code>, тому результат стосується стовпців.' },
          { text: 'Створює три стовпці шириною 1 піксель.', why: '<code>fr</code> є гнучкою одиницею доступного простору, а не значенням у пікселях.' },
        ],
      },
      {
        q: 'Яка основна роль <code>minmax(180px, 1fr)</code> як розміру стовпця?',
        answer: 2,
        options: [
          { text: 'Стовпець завжди має рівно 180px ширини.', why: '180px — мінімум; <code>1fr</code> дає стовпцю змогу збільшуватися, коли є більше простору.' },
          { text: 'Стовпець ніколи не може бути ширшим за 180px.', why: '180px є мінімальним, а не максимальним значенням.' },
          { text: 'Стовпець може мати щонайменше 180px і гнучко розширюватися.', why: '<code>minmax()</code> задає мінімум 180px і гнучку максимальну межу <code>1fr</code>.' },
          { text: 'Стовпець отримує щонайменше 1fr і щонайбільше 180px.', why: 'Аргументи йдуть у порядку мінімум, максимум: спочатку 180px, потім 1fr.' },
        ],
      },
      {
        q: 'Є grid із трьома стовпцями. Одна картка має займати всі три стовпці — від першої лінії стовпця до четвертої. Яке значення підходить для <code>grid-column</code>?',
        answer: 1,
        options: [
          { text: '<code>1 / 3</code>', why: 'Це йде лише від лінії 1 до лінії 3 і тому охоплює два стовпці.' },
          { text: '<code>1 / 4</code>', why: 'Для трьох стовпців є чотири лінії, і від лінії 1 до лінії 4 картка охоплює всі три стовпці.' },
          { text: '<code>2 / 4</code>', why: 'Це починається з лінії 2 і охоплює лише два останні стовпці.' },
          { text: '<code>3 / 1</code>', why: 'Початкову та кінцеву лінії вказано в неправильному порядку для такого розташування.' },
        ],
      },
    ],
  },
});
