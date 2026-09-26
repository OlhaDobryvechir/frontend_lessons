/*
 * Content of lesson 19 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS Flex: justify-content og align-items',
      kicker: 'Leksjon 19 &middot; CSS',
      title: 'CSS Flex: justify-content og align-items',
      lead: 'Med Flexbox kan du plassere elementer langs hovedaksen og tverraksen. Lær forskjellen mellom justify-content og align-items, og hvordan flex-retningen påvirker dem.',

      's.flex.t': 'Flex-containeren',
      's.flex.d':
        '<p>Når en container får <code>display: flex</code>, blir de direkte barna flex-items. Flexbox gir deg egenskaper som styrer hvordan disse elementene plasseres inne i containeren.</p>' +
        '<p>Som standard er <code>flex-direction: row</code>. Da går hovedaksen vannrett, fra start mot slutt.</p>',

      's.justify.t': 'Plassering langs hovedaksen',
      's.justify.d':
        '<p><code>justify-content</code> bestemmer hvordan det tilgjengelige ledige rommet fordeles langs <strong>hovedaksen</strong>. Med standard <code>row</code> betyr det vanligvis vannrett plassering.</p>' +
        '<p>Vanlige verdier er <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code> og <code>space-evenly</code>.</p>',

      's.align.t': 'Plassering langs tverraksen',
      's.align.d':
        '<p><code>align-items</code> bestemmer hvordan flex-items plasseres langs <strong>tverraksen</strong>.</p>' +
        '<p>Med standard <code>row</code> er tverraksen loddrett. <code>align-items: center</code> plasserer derfor items midt på tverraksen.</p>',

      's.axes.t': 'Hovedakse og tverrakse',
      's.axes.d':
        '<p>Det viktigste er å huske at <code>justify-content</code> følger hovedaksen, mens <code>align-items</code> følger tverraksen.</p>' +
        '<p>Hvis du endrer <code>flex-direction</code> til <code>column</code>, blir hovedaksen loddrett. Da endrer også retningen som <code>justify-content</code> og <code>align-items</code> virker langs.</p>',

      's.values.t': 'Vanlige verdier',
      's.values.d':
        '<p><code>flex-start</code> samler items ved starten av aksen, <code>center</code> plasserer dem i midten, og <code>flex-end</code> samler dem ved slutten.</p>' +
        '<p><code>space-between</code> legger likt mellomrom mellom items uten ekstra mellomrom ytterst. <code>stretch</code> er standardverdien for <code>align-items</code> og kan strekke items på tverraksen når størrelsen tillater det.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS Flex: justify-content and align-items',
      kicker: 'Lesson 19 &middot; CSS',
      title: 'CSS Flex: justify-content and align-items',
      lead: 'Flexbox lets you place items along the main axis and the cross axis. Learn the difference between justify-content and align-items, and how flex direction changes them.',

      's.flex.t': 'The flex container',
      's.flex.d':
        '<p>When a container gets <code>display: flex</code>, its direct children become flex items. Flexbox gives you properties that control how those items are placed inside the container.</p>' +
        '<p>By default, <code>flex-direction: row</code>. The main axis therefore runs horizontally, from start to end.</p>',

      's.justify.t': 'Placement along the main axis',
      's.justify.d':
        '<p><code>justify-content</code> controls how available free space is distributed along the <strong>main axis</strong>. With the default <code>row</code>, this normally means horizontal placement.</p>' +
        '<p>Common values are <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>, and <code>space-evenly</code>.</p>',

      's.align.t': 'Placement along the cross axis',
      's.align.d':
        '<p><code>align-items</code> controls how flex items are placed along the <strong>cross axis</strong>.</p>' +
        '<p>With the default <code>row</code>, the cross axis is vertical. Therefore, <code>align-items: center</code> places the items in the middle of the cross axis.</p>',

      's.axes.t': 'Main axis and cross axis',
      's.axes.d':
        '<p>The key idea is that <code>justify-content</code> follows the main axis, while <code>align-items</code> follows the cross axis.</p>' +
        '<p>If you change <code>flex-direction</code> to <code>column</code>, the main axis becomes vertical. The directions along which <code>justify-content</code> and <code>align-items</code> work therefore change too.</p>',

      's.values.t': 'Common values',
      's.values.d':
        '<p><code>flex-start</code> groups items at the start of the axis, <code>center</code> places them in the middle, and <code>flex-end</code> groups them at the end.</p>' +
        '<p><code>space-between</code> puts equal space between items without extra space at the outer edges. <code>stretch</code> is the default for <code>align-items</code> and can stretch items along the cross axis when their size allows it.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS Flex: justify-content та align-items',
      kicker: 'Урок 19 &middot; CSS',
      title: 'CSS Flex: justify-content та align-items',
      lead: 'Flexbox дає змогу розміщувати елементи вздовж головної та поперечної осей. Вивчіть різницю між justify-content і align-items та те, як напрямок flex змінює їхню роботу.',

      's.flex.t': 'Flex-контейнер',
      's.flex.d':
        '<p>Коли контейнер отримує <code>display: flex</code>, його безпосередні дочірні елементи стають flex-items. Flexbox дає властивості, які керують розміщенням цих елементів усередині контейнера.</p>' +
        '<p>За замовчуванням встановлено <code>flex-direction: row</code>. Тому головна вісь проходить горизонтально, від початку до кінця.</p>',

      's.justify.t': 'Розміщення вздовж головної осі',
      's.justify.d':
        '<p><code>justify-content</code> визначає, як доступний вільний простір розподіляється вздовж <strong>головної осі</strong>. За стандартного <code>row</code> це зазвичай означає горизонтальне розміщення.</p>' +
        '<p>Поширені значення: <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code> та <code>space-evenly</code>.</p>',

      's.align.t': 'Розміщення вздовж поперечної осі',
      's.align.d':
        '<p><code>align-items</code> визначає, як flex-items розміщуються вздовж <strong>поперечної осі</strong>.</p>' +
        '<p>За стандартного <code>row</code> поперечна вісь є вертикальною. Тому <code>align-items: center</code> розміщує елементи посередині поперечної осі.</p>',

      's.axes.t': 'Головна та поперечна осі',
      's.axes.d':
        '<p>Головне правило: <code>justify-content</code> працює вздовж головної осі, а <code>align-items</code> — вздовж поперечної.</p>' +
        '<p>Якщо змінити <code>flex-direction</code> на <code>column</code>, головна вісь стає вертикальною. Тому змінюються й напрямки, вздовж яких працюють <code>justify-content</code> та <code>align-items</code>.</p>',

      's.values.t': 'Поширені значення',
      's.values.d':
        '<p><code>flex-start</code> збирає елементи на початку осі, <code>center</code> розміщує їх посередині, а <code>flex-end</code> — в кінці.</p>' +
        '<p><code>space-between</code> створює однаковий простір між елементами без додаткового простору біля зовнішніх країв. <code>stretch</code> є стандартним значенням для <code>align-items</code> і може розтягувати елементи вздовж поперечної осі, якщо їхній розмір це дозволяє.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'En container har <code>display: flex</code> og standard <code>flex-direction: row</code>. Hvilken egenskap styrer plasseringen av items langs hovedaksen?',
        answer: 0,
        options: [
          { text: '<code>justify-content</code>', why: '<code>justify-content</code> styrer hvordan ledig plass fordeles langs hovedaksen.' },
          { text: '<code>align-items</code>', why: '<code>align-items</code> styrer plasseringen langs tverraksen.' },
          { text: '<code>flex-direction</code>', why: '<code>flex-direction</code> bestemmer aksenes retning, men fordeler ikke items langs aksen.' },
          { text: '<code>display</code>', why: '<code>display: flex</code> slår på Flexbox, men bestemmer ikke fordelingen av items.' },
        ],
      },
      {
        q: 'Med standard <code>flex-direction: row</code>, hvilken akse er tverraksen?',
        answer: 1,
        options: [
          { text: 'Vannrett', why: 'Med <code>row</code> er den vannrette aksen hovedaksen, ikke tverraksen.' },
          { text: 'Loddrett', why: 'Med <code>row</code> er hovedaksen vannrett, så tverraksen er loddrett.' },
          { text: 'Diagonal', why: 'Flexbox definerer ikke tverraksen som diagonal i dette tilfellet.' },
          { text: 'Dybdeaksen', why: 'Vanlig Flexbox bruker en hovedakse og en tverrakse, ikke en dybdeakse.' },
        ],
      },
      {
        q: 'Hvilken <code>justify-content</code>-verdi plasserer flex-items midt på hovedaksen?',
        answer: 2,
        options: [
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> plasserer items ved starten av hovedaksen.' },
          { text: '<code>flex-end</code>', why: '<code>flex-end</code> plasserer items ved slutten av hovedaksen.' },
          { text: '<code>center</code>', why: '<code>center</code> plasserer items midt i den tilgjengelige plassen på hovedaksen.' },
          { text: '<code>stretch</code>', why: '<code>stretch</code> er først og fremst knyttet til strekking på tverraksen gjennom <code>align-items</code>.' },
        ],
      },
      {
        q: 'Hvilken <code>align-items</code>-verdi sentrerer items på tverraksen?',
        answer: 0,
        options: [
          { text: '<code>center</code>', why: '<code>align-items: center</code> plasserer items midt på tverraksen.' },
          { text: '<code>space-between</code>', why: '<code>space-between</code> brukes til fordeling av plass med <code>justify-content</code>, ikke til sentrering via <code>align-items</code>.' },
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> plasserer items ved starten av tverraksen.' },
          { text: '<code>space-evenly</code>', why: '<code>space-evenly</code> fordeler ledig plass i stedet for å sentrere items med <code>align-items</code>.' },
        ],
      },
      {
        q: 'Hva skjer med hovedaksen når <code>flex-direction</code> endres fra <code>row</code> til <code>column</code>?',
        answer: 3,
        options: [
          { text: 'Den forblir vannrett.', why: 'Med <code>column</code> er hovedaksen ikke lenger vannrett.' },
          { text: 'Den forsvinner.', why: 'En flex-container har fortsatt en hovedakse uansett retning.' },
          { text: 'Den blir diagonal.', why: 'Flexbox gjør ikke hovedaksen diagonal når <code>column</code> brukes.' },
          { text: 'Den blir loddrett.', why: 'Med <code>flex-direction: column</code> går hovedaksen loddrett.' },
        ],
      },
      {
        q: 'En container har <code>flex-direction: row</code>. Hvilken deklarasjon plasserer tre items med like mellomrom mellom dem og uten ekstra plass ytterst?',
        answer: 1,
        options: [
          { text: '<code>align-items: space-between</code>', why: '<code>space-between</code> er ikke en <code>align-items</code>-verdi for denne fordelingen.' },
          { text: '<code>justify-content: space-between</code>', why: 'Med <code>row</code> er hovedaksen vannrett, og <code>space-between</code> gir like mellomrom mellom items uten ekstra plass ved ytterkantene.' },
          { text: '<code>align-items: center</code>', why: 'Dette sentrerer items på tverraksen, men lager ikke mellomrom mellom dem på hovedaksen.' },
          { text: '<code>justify-content: stretch</code>', why: '<code>stretch</code> er ikke verdien som fordeler items mellom kantene på denne måten.' },
        ],
      },
      {
        q: 'Hvilket utsagn beskriver forholdet mellom <code>justify-content</code> og <code>align-items</code> riktig?',
        answer: 2,
        options: [
          { text: 'Begge egenskapene virker alltid bare vannrett.', why: 'Retningen avhenger av hovedaksen og tverraksen, som endres med <code>flex-direction</code>.' },
          { text: '<code>justify-content</code> styrer tverraksen, mens <code>align-items</code> styrer hovedaksen.', why: 'Det er motsatt: <code>justify-content</code> følger hovedaksen, mens <code>align-items</code> følger tverraksen.' },
          { text: '<code>justify-content</code> styrer hovedaksen, mens <code>align-items</code> styrer tverraksen.', why: 'Dette er hovedforskjellen mellom de to egenskapene.' },
          { text: 'Begge egenskapene gjør det samme.', why: 'De styrer forskjellige akser og har derfor forskjellige roller.' },
        ],
      },
      {
        q: 'Hva gjør <code>justify-content: flex-end</code> i en flex-container?',
        answer: 0,
        options: [
          { text: 'Plasserer items ved slutten av hovedaksen.', why: '<code>flex-end</code> samler items ved slutten av hovedaksen.' },
          { text: 'Plasserer items ved starten av hovedaksen.', why: 'Det er virkningen av <code>flex-start</code>, ikke <code>flex-end</code>.' },
          { text: 'Sentrerer items på tverraksen.', why: 'Sentrering på tverraksen gjøres med <code>align-items: center</code>.' },
          { text: 'Lager like mellomrom mellom items.', why: 'Like mellomrom mellom items uten ekstra plass ytterst lages med <code>space-between</code>.' },
        ],
      },
      {
        q: 'Hvilken verdi er standard for <code>align-items</code> i en flex-container?',
        answer: 3,
        options: [
          { text: '<code>center</code>', why: '<code>center</code> må settes eksplisitt når items skal sentreres på tverraksen.' },
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> er ikke standardverdien for <code>align-items</code>.' },
          { text: '<code>space-between</code>', why: '<code>space-between</code> er ikke standardverdien for <code>align-items</code>.' },
          { text: '<code>stretch</code>', why: '<code>stretch</code> er standardverdien for <code>align-items</code>.' },
        ],
      },
      {
        q: 'En container bruker <code>flex-direction: column</code>. Hvilken egenskap styrer plasseringen av items langs den loddrette hovedaksen?',
        answer: 1,
        options: [
          { text: '<code>align-items</code>', why: 'Med <code>column</code> er tverraksen vannrett, så <code>align-items</code> styrer ikke den loddrette hovedaksen.' },
          { text: '<code>justify-content</code>', why: 'Med <code>column</code> blir hovedaksen loddrett, så <code>justify-content</code> styrer plasseringen langs den.' },
          { text: '<code>display</code>', why: '<code>display: flex</code> aktiverer Flexbox, men styrer ikke plasseringen langs hovedaksen.' },
          { text: '<code>align-content</code>', why: '<code>align-content</code> gjelder fordeling av flex-linjer, ikke den grunnleggende plasseringen av items langs hovedaksen.' },
        ],
      },
    ],

    en: [
      {
        q: 'A container has <code>display: flex</code> and the default <code>flex-direction: row</code>. Which property controls item placement along the main axis?',
        answer: 0,
        options: [
          { text: '<code>justify-content</code>', why: '<code>justify-content</code> controls how free space is distributed along the main axis.' },
          { text: '<code>align-items</code>', why: '<code>align-items</code> controls placement along the cross axis.' },
          { text: '<code>flex-direction</code>', why: '<code>flex-direction</code> defines the axis direction but does not distribute items along it.' },
          { text: '<code>display</code>', why: '<code>display: flex</code> enables Flexbox but does not define item distribution.' },
        ],
      },
      {
        q: 'With the default <code>flex-direction: row</code>, which axis is the cross axis?',
        answer: 1,
        options: [
          { text: 'Horizontal', why: 'With <code>row</code>, the horizontal axis is the main axis, not the cross axis.' },
          { text: 'Vertical', why: 'With <code>row</code>, the main axis is horizontal, so the cross axis is vertical.' },
          { text: 'Diagonal', why: 'Flexbox does not define the cross axis as diagonal in this case.' },
          { text: 'Depth axis', why: 'Normal Flexbox uses a main axis and a cross axis, not a depth axis.' },
        ],
      },
      {
        q: 'Which <code>justify-content</code> value places flex items in the middle of the main axis?',
        answer: 2,
        options: [
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> places items at the start of the main axis.' },
          { text: '<code>flex-end</code>', why: '<code>flex-end</code> places items at the end of the main axis.' },
          { text: '<code>center</code>', why: '<code>center</code> places items in the middle of the available space on the main axis.' },
          { text: '<code>stretch</code>', why: '<code>stretch</code> is primarily associated with stretching on the cross axis through <code>align-items</code>.' },
        ],
      },
      {
        q: 'Which <code>align-items</code> value centers items on the cross axis?',
        answer: 0,
        options: [
          { text: '<code>center</code>', why: '<code>align-items: center</code> places items in the middle of the cross axis.' },
          { text: '<code>space-between</code>', why: '<code>space-between</code> is a space-distribution value used with <code>justify-content</code>, not cross-axis centering through <code>align-items</code>.' },
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> places items at the start of the cross axis.' },
          { text: '<code>space-evenly</code>', why: '<code>space-evenly</code> distributes free space rather than centering items through <code>align-items</code>.' },
        ],
      },
      {
        q: 'What happens to the main axis when <code>flex-direction</code> changes from <code>row</code> to <code>column</code>?',
        answer: 3,
        options: [
          { text: 'It stays horizontal.', why: 'With <code>column</code>, the main axis is no longer horizontal.' },
          { text: 'It disappears.', why: 'A flex container still has a main axis regardless of its direction.' },
          { text: 'It becomes diagonal.', why: 'Flexbox does not make the main axis diagonal when using <code>column</code>.' },
          { text: 'It becomes vertical.', why: 'With <code>flex-direction: column</code>, the main axis runs vertically.' },
        ],
      },
      {
        q: 'A container has <code>flex-direction: row</code>. Which declaration places three items with equal space between them and no extra space at the outer edges?',
        answer: 1,
        options: [
          { text: '<code>align-items: space-between</code>', why: '<code>space-between</code> is not an <code>align-items</code> value for this distribution.' },
          { text: '<code>justify-content: space-between</code>', why: 'With <code>row</code>, the main axis is horizontal, and <code>space-between</code> creates equal gaps between items without extra outer gaps.' },
          { text: '<code>align-items: center</code>', why: 'This centers items on the cross axis but does not create gaps between them on the main axis.' },
          { text: '<code>justify-content: stretch</code>', why: '<code>stretch</code> is not the required value for distributing the items between the edges.' },
        ],
      },
      {
        q: 'Which statement correctly describes the relationship between <code>justify-content</code> and <code>align-items</code>?',
        answer: 2,
        options: [
          { text: 'Both properties always work only horizontally.', why: 'Their directions depend on the main and cross axes, which change with <code>flex-direction</code>.' },
          { text: '<code>justify-content</code> controls the cross axis, while <code>align-items</code> controls the main axis.', why: 'It is the other way around: <code>justify-content</code> follows the main axis and <code>align-items</code> follows the cross axis.' },
          { text: '<code>justify-content</code> controls the main axis, while <code>align-items</code> controls the cross axis.', why: 'This is the key distinction between the two properties.' },
          { text: 'Both properties do the same thing.', why: 'They control different axes and therefore have different roles.' },
        ],
      },
      {
        q: 'What does <code>justify-content: flex-end</code> do in a flex container?',
        answer: 0,
        options: [
          { text: 'Places items at the end of the main axis.', why: '<code>flex-end</code> groups items at the end of the main axis.' },
          { text: 'Places items at the start of the main axis.', why: 'That is the behavior of <code>flex-start</code>, not <code>flex-end</code>.' },
          { text: 'Centers items on the cross axis.', why: 'Cross-axis centering is done with <code>align-items: center</code>.' },
          { text: 'Creates equal gaps between items.', why: 'Equal gaps between items without extra outer space are created with <code>space-between</code>.' },
        ],
      },
      {
        q: 'Which value is the default for <code>align-items</code> in a flex container?',
        answer: 3,
        options: [
          { text: '<code>center</code>', why: '<code>center</code> must be set explicitly when items should be centered on the cross axis.' },
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> is not the default value of <code>align-items</code>.' },
          { text: '<code>space-between</code>', why: '<code>space-between</code> is not the default value of <code>align-items</code>.' },
          { text: '<code>stretch</code>', why: '<code>stretch</code> is the default value of <code>align-items</code>.' },
        ],
      },
      {
        q: 'A container uses <code>flex-direction: column</code>. Which property controls item placement along the vertical main axis?',
        answer: 1,
        options: [
          { text: '<code>align-items</code>', why: 'With <code>column</code>, the cross axis is horizontal, so <code>align-items</code> does not control the vertical main axis.' },
          { text: '<code>justify-content</code>', why: 'With <code>column</code>, the main axis becomes vertical, so <code>justify-content</code> controls placement along it.' },
          { text: '<code>display</code>', why: '<code>display: flex</code> enables Flexbox but does not control placement along the main axis.' },
          { text: '<code>align-content</code>', why: '<code>align-content</code> concerns distribution of flex lines rather than the primary placement of items along the main axis.' },
        ],
      },
    ],
    uk: [
      {
        q: 'Контейнер має <code>display: flex</code> і стандартний <code>flex-direction: row</code>. Яка властивість керує розміщенням елементів уздовж головної осі?',
        answer: 0,
        options: [
          { text: '<code>justify-content</code>', why: '<code>justify-content</code> керує розподілом вільного простору вздовж головної осі.' },
          { text: '<code>align-items</code>', why: '<code>align-items</code> керує розміщенням уздовж поперечної осі.' },
          { text: '<code>flex-direction</code>', why: '<code>flex-direction</code> визначає напрямок осей, але не розподіляє елементи вздовж осі.' },
          { text: '<code>display</code>', why: '<code>display: flex</code> вмикає Flexbox, але не визначає розподіл елементів.' },
        ],
      },
      {
        q: 'За стандартного <code>flex-direction: row</code> яка вісь є поперечною?',
        answer: 1,
        options: [
          { text: 'Горизонтальна', why: 'За <code>row</code> горизонтальна вісь є головною, а не поперечною.' },
          { text: 'Вертикальна', why: 'За <code>row</code> головна вісь горизонтальна, тому поперечна вісь вертикальна.' },
          { text: 'Діагональна', why: 'Flexbox не визначає поперечну вісь як діагональну в цьому випадку.' },
          { text: 'Вісь глибини', why: 'Звичайний Flexbox працює з головною та поперечною осями, а не з віссю глибини.' },
        ],
      },
      {
        q: 'Яке значення <code>justify-content</code> розміщує flex-items посередині головної осі?',
        answer: 2,
        options: [
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> розміщує items біля початку головної осі.' },
          { text: '<code>flex-end</code>', why: '<code>flex-end</code> розміщує items біля кінця головної осі.' },
          { text: '<code>center</code>', why: '<code>center</code> розміщує items у центрі доступного простору на головній осі.' },
          { text: '<code>stretch</code>', why: '<code>stretch</code> повʼязане насамперед із розтягуванням на поперечній осі через <code>align-items</code>.' },
        ],
      },
      {
        q: 'Яке значення <code>align-items</code> центрує items на поперечній осі?',
        answer: 0,
        options: [
          { text: '<code>center</code>', why: '<code>align-items: center</code> розміщує items посередині поперечної осі.' },
          { text: '<code>space-between</code>', why: '<code>space-between</code> є значенням для розподілу простору через <code>justify-content</code>, а не центрування поперечної осі.' },
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> розміщує items біля початку поперечної осі.' },
          { text: '<code>space-evenly</code>', why: '<code>space-evenly</code> розподіляє вільний простір, а не центрує items через <code>align-items</code>.' },
        ],
      },
      {
        q: 'Що станеться з головною віссю, якщо змінити <code>flex-direction</code> з <code>row</code> на <code>column</code>?',
        answer: 3,
        options: [
          { text: 'Вона залишиться горизонтальною.', why: 'Для <code>column</code> головна вісь уже не є горизонтальною.' },
          { text: 'Вона зникне.', why: 'Flex-контейнер зберігає головну вісь незалежно від напрямку.' },
          { text: 'Вона стане діагональною.', why: 'Flexbox не робить головну вісь діагональною через <code>column</code>.' },
          { text: 'Вона стане вертикальною.', why: 'При <code>flex-direction: column</code> головна вісь проходить вертикально.' },
        ],
      },
      {
        q: 'Контейнер має <code>flex-direction: row</code>. Яка декларація розмістить три items з однаковим простором між ними та без додаткового простору по краях?',
        answer: 1,
        options: [
          { text: '<code>align-items: space-between</code>', why: '<code>space-between</code> не є значенням <code>align-items</code> для такого розподілу.' },
          { text: '<code>justify-content: space-between</code>', why: 'За <code>row</code> головна вісь горизонтальна, а <code>space-between</code> створює однакові проміжки між items без додаткового простору по краях.' },
          { text: '<code>align-items: center</code>', why: 'Це центрує items на поперечній осі, але не створює проміжків між ними на головній осі.' },
          { text: '<code>justify-content: stretch</code>', why: '<code>stretch</code> не є потрібним значенням для розподілу items між краями.' },
        ],
      },
      {
        q: 'Яке твердження правильно описує звʼязок між <code>justify-content</code> та <code>align-items</code>?',
        answer: 2,
        options: [
          { text: 'Обидві властивості завжди працюють лише горизонтально.', why: 'Напрямок залежить від головної та поперечної осей, які змінюються разом із <code>flex-direction</code>.' },
          { text: '<code>justify-content</code> керує поперечною віссю, а <code>align-items</code> — головною.', why: 'Це навпаки: <code>justify-content</code> відповідає головній осі, а <code>align-items</code> — поперечній.' },
          { text: '<code>justify-content</code> керує головною віссю, а <code>align-items</code> — поперечною.', why: 'Саме так Flexbox розділяє ролі цих двох властивостей.' },
          { text: 'Обидві властивості роблять одне й те саме.', why: 'Вони керують різними осями, тому мають різні ролі.' },
        ],
      },
      {
        q: 'Що робить <code>justify-content: flex-end</code> у flex-контейнері?',
        answer: 0,
        options: [
          { text: 'Розміщує items біля кінця головної осі.', why: '<code>flex-end</code> збирає items біля кінця головної осі.' },
          { text: 'Розміщує items біля початку головної осі.', why: 'Це поведінка <code>flex-start</code>, а не <code>flex-end</code>.' },
          { text: 'Центрує items на поперечній осі.', why: 'Центрування поперечної осі виконується через <code>align-items: center</code>.' },
          { text: 'Створює однакові проміжки між items.', why: 'Для однакових проміжків між items без додаткового простору по краях використовують <code>space-between</code>.' },
        ],
      },
      {
        q: 'Яке значення є стандартним для <code>align-items</code> у flex-контейнері?',
        answer: 3,
        options: [
          { text: '<code>center</code>', why: '<code>center</code> потрібно задати явно, якщо items мають бути по центру поперечної осі.' },
          { text: '<code>flex-start</code>', why: '<code>flex-start</code> не є стандартним значенням <code>align-items</code>.' },
          { text: '<code>space-between</code>', why: '<code>space-between</code> не є стандартним значенням <code>align-items</code>.' },
          { text: '<code>stretch</code>', why: '<code>stretch</code> є стандартним значенням <code>align-items</code>.' },
        ],
      },
      {
        q: 'У контейнері встановлено <code>flex-direction: column</code>. Яка властивість керує розміщенням items уздовж вертикальної головної осі?',
        answer: 1,
        options: [
          { text: '<code>align-items</code>', why: 'За <code>column</code> поперечна вісь є горизонтальною, тому <code>align-items</code> не керує вертикальною головною віссю.' },
          { text: '<code>justify-content</code>', why: 'При <code>column</code> головна вісь стає вертикальною, тому <code>justify-content</code> керує розміщенням уздовж неї.' },
          { text: '<code>display</code>', why: '<code>display: flex</code> вмикає Flexbox, але не керує розміщенням уздовж головної осі.' },
          { text: '<code>align-content</code>', why: '<code>align-content</code> стосується розподілу flex-lines, а не основного розміщення items уздовж головної осі.' },
        ],
      },
    ],
  },
});
