/*
 * Content of lesson 21 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */

Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS flex: 1 0 200px — grow, shrink, basis',
      kicker: 'Leksjon 21 &middot; CSS',
      title: 'CSS flex: 1 0 200px — grow, shrink, basis',
      lead: 'Tre tall forteller flex-elementet hvordan det skal dele plassen: 1 betyr grow, 0 betyr shrink, og 200px er basisstørrelsen.',

      's.flex.t': 'Kortformen for tre egenskaper',
      's.flex.d':
        '<p><code>flex</code> er kortformen for <code>flex-grow</code>, <code>flex-shrink</code> og <code>flex-basis</code>.</p>' +
        '<p>I <code>flex: 1 0 200px</code> betyr tallene derfor: <strong>1</strong> for vekst, <strong>0</strong> for krymping og <strong>200px</strong> som utgangspunkt for størrelsen.</p>',

      's.grow.t': '1 — flex-grow',
      's.grow.d':
        '<p>Det første tallet er <code>flex-grow</code>. Verdien <code>1</code> betyr at elementet kan vokse og ta sin del av ledig plass i flex-containeren.</p>' +
        '<p>Hvis flere elementer har <code>flex-grow: 1</code>, deler de den ledige plassen likt, forutsatt at de ellers har samme relevante betingelser.</p>',

      's.shrink.t': '0 — flex-shrink',
      's.shrink.d':
        '<p>Det andre tallet er <code>flex-shrink</code>. Verdien <code>0</code> betyr at elementet ikke skal krympe gjennom flex-shrink-mekanismen når det ikke er nok plass.</p>' +
        '<p>Det betyr ikke at elementet alltid blir nøyaktig 200px bredt: andre CSS-regler, innhold og containerens oppsett kan også påvirke resultatet.</p>',

      's.basis.t': '200px — flex-basis',
      's.basis.d':
        '<p>Det tredje tallet er <code>flex-basis</code>. Verdien <code>200px</code> er den opprinnelige hovedaksestørrelsen som flex-layouten tar utgangspunkt i før ledig plass fordeles.</p>' +
        '<p>Med <code>flex-direction: row</code> er dette normalt den horisontale størrelsen. Med <code>flex-direction: column</code> gjelder den hovedsakelig den vertikale størrelsen.</p>',

      's.space.t': 'Slik virker de sammen',
      's.space.d':
        '<p>Tenk på <code>flex: 1 0 200px</code> som: «Start på 200px, ikke krymp, og bruk ledig plass til å vokse.»</p>' +
        '<p>Hvis det finnes ledig plass, kan elementet vokse på grunn av <code>1</code>. Hvis containeren blir for liten, sier <code>0</code> at flex-shrink ikke skal redusere størrelsen.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS flex: 1 0 200px — grow, shrink, basis',
      kicker: 'Lesson 21 &middot; CSS',
      title: 'CSS flex: 1 0 200px — grow, shrink, basis',
      lead: 'Three values tell a flex item how to share space: 1 means grow, 0 means shrink, and 200px is the starting basis.',

      's.flex.t': 'The shorthand for three properties',
      's.flex.d':
        '<p><code>flex</code> is the shorthand for <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.</p>' +
        '<p>So in <code>flex: 1 0 200px</code>, the values mean: <strong>1</strong> for growing, <strong>0</strong> for shrinking, and <strong>200px</strong> as the starting size.</p>',

      's.grow.t': '1 — flex-grow',
      's.grow.d':
        '<p>The first value is <code>flex-grow</code>. A value of <code>1</code> means the item can grow and take its share of free space in the flex container.</p>' +
        '<p>If several items have <code>flex-grow: 1</code>, they share the free space equally, assuming the other relevant conditions are the same.</p>',

      's.shrink.t': '0 — flex-shrink',
      's.shrink.d':
        '<p>The second value is <code>flex-shrink</code>. A value of <code>0</code> means the item should not shrink through the flex-shrink mechanism when there is not enough space.</p>' +
        '<p>This does not mean the item will always be exactly 200px wide: other CSS rules, content, and the container layout can also affect the result.</p>',

      's.basis.t': '200px — flex-basis',
      's.basis.d':
        '<p>The third value is <code>flex-basis</code>. The value <code>200px</code> is the initial main-size value that the flex layout uses as its starting point before free space is distributed.</p>' +
        '<p>With <code>flex-direction: row</code>, this is normally the horizontal size. With <code>flex-direction: column</code>, it mainly applies to the vertical size.</p>',

      's.space.t': 'How they work together',
      's.space.d':
        '<p>Think of <code>flex: 1 0 200px</code> as: “Start at 200px, do not shrink, and use free space to grow.”</p>' +
        '<p>If there is free space, the item can grow because of <code>1</code>. If the container becomes too small, <code>0</code> says that flex-shrink should not reduce the size.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS flex: 1 0 200px — grow, shrink, basis',
      kicker: 'Урок 21 &middot; CSS',
      title: 'CSS flex: 1 0 200px — grow, shrink, basis',
      lead: 'Три значення визначають, як flex-елемент ділить простір: 1 означає зростання, 0 — заборону стискання, а 200px — початковий розмір.',

      's.flex.t': 'Скорочений запис трьох властивостей',
      's.flex.d':
        '<p><code>flex</code> — це скорочений запис для <code>flex-grow</code>, <code>flex-shrink</code> і <code>flex-basis</code>.</p>' +
        '<p>Отже, у <code>flex: 1 0 200px</code> значення означають: <strong>1</strong> для зростання, <strong>0</strong> для стискання і <strong>200px</strong> як початковий розмір.</p>',

      's.grow.t': '1 — flex-grow',
      's.grow.d':
        '<p>Перше значення — <code>flex-grow</code>. Значення <code>1</code> означає, що елемент може збільшуватися та отримувати свою частину вільного простору у flex-контейнері.</p>' +
        '<p>Якщо кілька елементів мають <code>flex-grow: 1</code>, вони ділять вільний простір порівну, якщо інші важливі умови однакові.</p>',

      's.shrink.t': '0 — flex-shrink',
      's.shrink.d':
        '<p>Друге значення — <code>flex-shrink</code>. Значення <code>0</code> означає, що елемент не має стискатися через механізм flex-shrink, коли місця недостатньо.</p>' +
        '<p>Це не означає, що елемент завжди буде рівно 200px завширшки: на результат також можуть впливати інші CSS-правила, вміст і налаштування контейнера.</p>',

      's.basis.t': '200px — flex-basis',
      's.basis.d':
        '<p>Третє значення — <code>flex-basis</code>. Значення <code>200px</code> — це початковий розмір уздовж головної осі, від якого flex-розкладка відштовхується перед розподілом вільного простору.</p>' +
        '<p>За <code>flex-direction: row</code> це зазвичай горизонтальний розмір. За <code>flex-direction: column</code> воно переважно визначає вертикальний розмір.</p>',

      's.space.t': 'Як вони працюють разом',
      's.space.d':
        '<p>Сприймайте <code>flex: 1 0 200px</code> так: «Почни з 200px, не стискайся і використовуй вільний простір для зростання».</p>' +
        '<p>Якщо є вільний простір, елемент може збільшуватися завдяки <code>1</code>. Якщо контейнер стає замалим, <code>0</code> означає, що flex-shrink не має зменшувати розмір.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva betyr det første tallet i <code>flex: 1 0 200px</code>?',
        answer: 0,
        options: [
          { text: '<code>flex-grow</code>', why: 'Det første tallet er <code>flex-grow</code>. Verdien 1 betyr at elementet kan bruke ledig plass til å vokse.' },
          { text: '<code>flex-shrink</code>', why: '<code>flex-shrink</code> er det andre tallet, altså 0 i dette eksemplet.' },
          { text: '<code>flex-basis</code>', why: '<code>flex-basis</code> er det tredje tallet, altså 200px i dette eksemplet.' },
          { text: 'bredden i piksler', why: '200px er basisverdien. Tallet 1 er ikke en pikselverdi.' },
        ],
      },
      {
        q: 'Hva betyr <code>0</code> som den andre verdien i <code>flex: 1 0 200px</code>?',
        answer: 1,
        options: [
          { text: 'Elementet skal aldri vokse.', why: 'Vekst styres av den første verdien, <code>flex-grow</code>, som her er 1.' },
          { text: 'Elementet skal ikke krympe gjennom <code>flex-shrink</code>.', why: 'Den andre verdien er <code>flex-shrink</code>, og 0 betyr at flex-shrink ikke skal redusere størrelsen.' },
          { text: 'Basisstørrelsen er 0px.', why: 'Basisstørrelsen er den tredje verdien, 200px.' },
          { text: 'Elementet skjules.', why: 'Ingen av verdiene i denne shorthand-egenskapen betyr at elementet skal skjules.' },
        ],
      },
      {
        q: 'Hva angir <code>200px</code> i <code>flex: 1 0 200px</code>?',
        answer: 2,
        options: [
          { text: 'Hvor mye elementet kan vokse.', why: 'Vekstfaktoren er den første verdien: 1.' },
          { text: 'Hvor mye elementet kan krympe.', why: 'Krympingsfaktoren er den andre verdien: 0.' },
          { text: 'Elementets <code>flex-basis</code>.', why: 'Den tredje verdien er <code>flex-basis</code>, og her er den 200px.' },
          { text: 'Avstanden mellom flex-elementer.', why: 'Avstand styres ikke av <code>flex-basis</code>; for eksempel brukes <code>gap</code> til avstand.' },
        ],
      },
      {
        q: 'Hvilken rekkefølge bruker shorthand-egenskapen <code>flex</code> i dette eksemplet?',
        answer: 3,
        options: [
          { text: 'basis, grow, shrink', why: 'Det er ikke rekkefølgen for <code>flex</code>.' },
          { text: 'shrink, basis, grow', why: 'Det er ikke rekkefølgen for <code>flex</code>.' },
          { text: 'grow, basis, shrink', why: 'Basis ligger som tredje verdi, ikke som andre.' },
          { text: 'grow, shrink, basis', why: '<code>flex</code> skrives her som <code>flex-grow flex-shrink flex-basis</code>.' },
        ],
      },
      {
        q: 'Et flex-element har <code>flex: 1 0 200px</code> og det finnes ledig plass. Hva kan skje?',
        answer: 0,
        options: [
          { text: 'Elementet kan vokse og ta en del av den ledige plassen.', why: '<code>flex-grow: 1</code> gjør at elementet kan vokse når det finnes ledig plass.' },
          { text: 'Elementet må krympe til 0px.', why: '<code>0</code> er <code>flex-shrink</code>, ikke en instruks om å krympe til 0px.' },
          { text: 'Elementet blir skjult.', why: 'Ingen del av denne verdien skjuler elementet.' },
          { text: 'Elementet blir alltid nøyaktig 200px.', why: '200px er basisstørrelsen, men <code>flex-grow: 1</code> kan gjøre elementet større.' },
        ],
      },
      {
        q: 'Hvorfor er <code>200px</code> ikke nødvendigvis den endelige størrelsen på elementet?',
        answer: 1,
        options: [
          { text: 'Fordi <code>flex-basis</code> alltid ignoreres.', why: '<code>flex-basis</code> brukes som utgangspunkt i flex-layouten.' },
          { text: 'Fordi ledig plass kan fordeles til elementet når <code>flex-grow</code> er 1.', why: 'Basis er utgangspunktet; <code>flex-grow: 1</code> kan legge til størrelse når det finnes ledig plass.' },
          { text: 'Fordi <code>flex-shrink: 0</code> tvinger størrelsen til 200px.', why: '<code>flex-shrink: 0</code> handler om å ikke krympe gjennom flex-shrink, ikke om å låse størrelsen til basis.' },
          { text: 'Fordi 200px bare betyr avstand.', why: '200px er <code>flex-basis</code>, ikke avstanden mellom elementer.' },
        ],
      },
      {
        q: 'Med <code>flex-direction: row</code>, hvilken retning gjelder <code>flex-basis: 200px</code> hovedsakelig for?',
        answer: 2,
        options: [
          { text: 'Vertikalt.', why: 'Med <code>row</code> er hovedaksen horisontal.' },
          { text: 'Bare diagonalt.', why: 'Flexbox har ikke en diagonal hovedakse.' },
          { text: 'Horisontalt.', why: 'Med <code>flex-direction: row</code> er hovedaksen horisontal, så basis gjelder hovedsakelig den horisontale størrelsen.' },
          { text: 'Ingen retning.', why: '<code>flex-basis</code> gjelder hovedaksen, som har en retning bestemt av flex-direction.' },
        ],
      },
      {
        q: 'Hva skjer med <code>flex-shrink</code> når verdien er <code>0</code>?',
        answer: 3,
        options: [
          { text: 'Elementet vokser raskere.', why: 'Vekst styres av <code>flex-grow</code>, ikke <code>flex-shrink</code>.' },
          { text: 'Elementet får basisstørrelsen 0px.', why: 'Basis er den tredje verdien, 200px.' },
          { text: 'Elementet får alltid bredden 0px.', why: '<code>0</code> betyr ikke en bredde på 0px.' },
          { text: 'Elementet skal ikke krympe gjennom flex-shrink.', why: '<code>flex-shrink: 0</code> betyr at flex-shrink ikke skal redusere størrelsen.' },
        ],
      },
      {
        q: 'Hvilken setning beskriver best <code>flex: 1 0 200px</code>?',
        answer: 0,
        options: [
          { text: 'Start på 200px, ikke krymp gjennom flex-shrink, og bruk ledig plass til å vokse.', why: 'Dette oppsummerer henholdsvis basis 200px, shrink 0 og grow 1.' },
          { text: 'Start på 1px, krymp med 0px, og bruk 200 som grow-faktor.', why: 'Verdiene er ikke pikselstørrelse, pikselstørrelse og grow-faktor i denne rekkefølgen.' },
          { text: 'Start på 0px og lås størrelsen til 200px.', why: '200px er basis, men grow 1 betyr at størrelsen kan øke.' },
          { text: 'Start på 200px og krymp alltid når plassen blir større.', why: 'Når plassen blir større, er det grow som kan bruke den ledige plassen.' },
        ],
      },
      {
        q: 'Hvis to flex-elementer begge har <code>flex: 1 0 200px</code> og det finnes ledig plass, hva sier <code>1</code>-verdien?',
        answer: 1,
        options: [
          { text: 'At bare det første elementet vokser.', why: 'Begge har grow-verdi 1, så begge kan delta i fordelingen av ledig plass.' },
          { text: 'At begge kan ta del i den ledige plassen.', why: 'Begge har <code>flex-grow: 1</code>, så de kan vokse og dele ledig plass etter flex-reglene.' },
          { text: 'At ingen av dem kan vokse.', why: 'Grow-verdien 1 betyr nettopp at de kan vokse.' },
          { text: 'At hvert element alltid blir 1px bredt.', why: 'Tallet 1 er <code>flex-grow</code>, ikke en pikselverdi.' },
        ],
      },
    ],

    en: [
      {
        q: 'What does the first value in <code>flex: 1 0 200px</code> mean?',
        answer: 0,
        options: [
          { text: '<code>flex-grow</code>', why: 'The first value is <code>flex-grow</code>. A value of 1 means the item can use free space to grow.' },
          { text: '<code>flex-shrink</code>', why: '<code>flex-shrink</code> is the second value, which is 0 here.' },
          { text: '<code>flex-basis</code>', why: '<code>flex-basis</code> is the third value, which is 200px here.' },
          { text: 'the width in pixels', why: '200px is the basis value. The number 1 is not a pixel width.' },
        ],
      },
      {
        q: 'What does <code>0</code> as the second value in <code>flex: 1 0 200px</code> mean?',
        answer: 1,
        options: [
          { text: 'The item must never grow.', why: 'Growth is controlled by the first value, <code>flex-grow</code>, which is 1 here.' },
          { text: 'The item should not shrink through <code>flex-shrink</code>.', why: 'The second value is <code>flex-shrink</code>, and 0 means flex-shrink should not reduce the size.' },
          { text: 'The basis size is 0px.', why: 'The basis size is the third value, 200px.' },
          { text: 'The item is hidden.', why: 'None of these shorthand values means that the item should be hidden.' },
        ],
      },
      {
        q: 'What does <code>200px</code> represent in <code>flex: 1 0 200px</code>?',
        answer: 2,
        options: [
          { text: 'How much the item can grow.', why: 'The grow factor is the first value: 1.' },
          { text: 'How much the item can shrink.', why: 'The shrink factor is the second value: 0.' },
          { text: 'The item’s <code>flex-basis</code>.', why: 'The third value is <code>flex-basis</code>, and here it is 200px.' },
          { text: 'The gap between flex items.', why: 'Spacing is not controlled by <code>flex-basis</code>; for example, <code>gap</code> is used for spacing.' },
        ],
      },
      {
        q: 'What order does the <code>flex</code> shorthand use in this example?',
        answer: 3,
        options: [
          { text: 'basis, grow, shrink', why: 'That is not the order used by the <code>flex</code> shorthand.' },
          { text: 'shrink, basis, grow', why: 'That is not the order used by the <code>flex</code> shorthand.' },
          { text: 'grow, basis, shrink', why: 'Basis is the third value, not the second.' },
          { text: 'grow, shrink, basis', why: 'Here <code>flex</code> is written as <code>flex-grow flex-shrink flex-basis</code>.' },
        ],
      },
      {
        q: 'A flex item has <code>flex: 1 0 200px</code> and there is free space. What can happen?',
        answer: 0,
        options: [
          { text: 'The item can grow and take a share of the free space.', why: '<code>flex-grow: 1</code> allows the item to grow when free space is available.' },
          { text: 'The item must shrink to 0px.', why: '<code>0</code> is <code>flex-shrink</code>, not an instruction to shrink to 0px.' },
          { text: 'The item becomes hidden.', why: 'None of these values hides the item.' },
          { text: 'The item is always exactly 200px.', why: '200px is the basis, but <code>flex-grow: 1</code> can make the item larger.' },
        ],
      },
      {
        q: 'Why is <code>200px</code> not necessarily the final size of the item?',
        answer: 1,
        options: [
          { text: 'Because <code>flex-basis</code> is always ignored.', why: '<code>flex-basis</code> is used as the starting point in the flex layout.' },
          { text: 'Because free space can be given to the item when <code>flex-grow</code> is 1.', why: 'The basis is the starting point; <code>flex-grow: 1</code> can add size when free space exists.' },
          { text: 'Because <code>flex-shrink: 0</code> forces the size to 200px.', why: '<code>flex-shrink: 0</code> concerns shrinking through flex-shrink; it does not lock the size to the basis.' },
          { text: 'Because 200px only means spacing.', why: '200px is <code>flex-basis</code>, not the gap between items.' },
        ],
      },
      {
        q: 'With <code>flex-direction: row</code>, which direction does <code>flex-basis: 200px</code> mainly apply to?',
        answer: 2,
        options: [
          { text: 'Vertically.', why: 'With <code>row</code>, the main axis is horizontal.' },
          { text: 'Only diagonally.', why: 'Flexbox does not have a diagonal main axis.' },
          { text: 'Horizontally.', why: 'With <code>flex-direction: row</code>, the main axis is horizontal, so the basis mainly applies to horizontal size.' },
          { text: 'No direction.', why: '<code>flex-basis</code> applies to the main axis, whose direction is determined by flex-direction.' },
        ],
      },
      {
        q: 'What happens to <code>flex-shrink</code> when its value is <code>0</code>?',
        answer: 3,
        options: [
          { text: 'The item grows faster.', why: 'Growth is controlled by <code>flex-grow</code>, not <code>flex-shrink</code>.' },
          { text: 'The item gets a basis size of 0px.', why: 'The basis is the third value, 200px.' },
          { text: 'The item always gets a width of 0px.', why: '<code>0</code> does not mean a width of 0px.' },
          { text: 'The item should not shrink through flex-shrink.', why: '<code>flex-shrink: 0</code> means flex-shrink should not reduce the size.' },
        ],
      },
      {
        q: 'Which sentence best describes <code>flex: 1 0 200px</code>?',
        answer: 0,
        options: [
          { text: 'Start at 200px, do not shrink through flex-shrink, and use free space to grow.', why: 'This summarizes basis 200px, shrink 0, and grow 1.' },
          { text: 'Start at 1px, shrink by 0px, and use 200 as the grow factor.', why: 'The values are not pixel size, pixel size, and grow factor in that order.' },
          { text: 'Start at 0px and lock the size to 200px.', why: '200px is the basis, but grow 1 means the size can increase.' },
          { text: 'Start at 200px and always shrink when the space gets larger.', why: 'When space gets larger, grow is what can use the free space.' },
        ],
      },
      {
        q: 'If two flex items both have <code>flex: 1 0 200px</code> and there is free space, what does the value <code>1</code> say?',
        answer: 1,
        options: [
          { text: 'Only the first item grows.', why: 'Both items have a grow value of 1, so both can participate in distributing free space.' },
          { text: 'Both can take a share of the free space.', why: 'Both have <code>flex-grow: 1</code>, so both can grow and share free space according to the flex rules.' },
          { text: 'Neither item can grow.', why: 'A grow value of 1 means they can grow.' },
          { text: 'Each item is always 1px wide.', why: 'The number 1 is <code>flex-grow</code>, not a pixel width.' },
        ],
      },
    ],

    uk: [
      {
        q: 'Що означає перше значення в <code>flex: 1 0 200px</code>?',
        answer: 0,
        options: [
          { text: '<code>flex-grow</code>', why: 'Перше значення — <code>flex-grow</code>. Значення 1 означає, що елемент може використовувати вільний простір для зростання.' },
          { text: '<code>flex-shrink</code>', why: '<code>flex-shrink</code> — друге значення, тут воно дорівнює 0.' },
          { text: '<code>flex-basis</code>', why: '<code>flex-basis</code> — третє значення, тут воно дорівнює 200px.' },
          { text: 'ширину в пікселях', why: '200px — це значення basis. Число 1 не є шириною в пікселях.' },
        ],
      },
      {
        q: 'Що означає <code>0</code> як друге значення в <code>flex: 1 0 200px</code>?',
        answer: 1,
        options: [
          { text: 'Елемент ніколи не має зростати.', why: 'Зростання визначає перше значення, <code>flex-grow</code>, тут воно дорівнює 1.' },
          { text: 'Елемент не має стискатися через <code>flex-shrink</code>.', why: 'Друге значення — <code>flex-shrink</code>, і 0 означає, що цей механізм не має зменшувати розмір.' },
          { text: 'Початковий розмір дорівнює 0px.', why: 'Початковий розмір задає третє значення — 200px.' },
          { text: 'Елемент приховується.', why: 'Жодне з цих значень shorthand не означає приховування елемента.' },
        ],
      },
      {
        q: 'Що означає <code>200px</code> у <code>flex: 1 0 200px</code>?',
        answer: 2,
        options: [
          { text: 'Наскільки елемент може зрости.', why: 'Коефіцієнт зростання — перше значення: 1.' },
          { text: 'Наскільки елемент може стиснутися.', why: 'Коефіцієнт стискання — друге значення: 0.' },
          { text: '<code>flex-basis</code> елемента.', why: 'Третє значення — <code>flex-basis</code>, і тут воно дорівнює 200px.' },
          { text: 'Відстань між flex-елементами.', why: 'Відстань не визначається <code>flex-basis</code>; наприклад, для неї використовують <code>gap</code>.' },
        ],
      },
      {
        q: 'У якому порядку записуються значення скороченої властивості <code>flex</code> у цьому прикладі?',
        answer: 3,
        options: [
          { text: 'basis, grow, shrink', why: 'Це не порядок значень у shorthand <code>flex</code>.' },
          { text: 'shrink, basis, grow', why: 'Це не порядок значень у shorthand <code>flex</code>.' },
          { text: 'grow, basis, shrink', why: 'Basis є третім значенням, а не другим.' },
          { text: 'grow, shrink, basis', why: 'Тут <code>flex</code> записується як <code>flex-grow flex-shrink flex-basis</code>.' },
        ],
      },
      {
        q: 'Flex-елемент має <code>flex: 1 0 200px</code>, і є вільний простір. Що може статися?',
        answer: 0,
        options: [
          { text: 'Елемент може зрости й отримати частину вільного простору.', why: '<code>flex-grow: 1</code> дозволяє елементу збільшуватися, коли є вільний простір.' },
          { text: 'Елемент має стиснутися до 0px.', why: '<code>0</code> — це <code>flex-shrink</code>, а не команда стиснутися до 0px.' },
          { text: 'Елемент приховається.', why: 'Жодне з цих значень не приховує елемент.' },
          { text: 'Елемент завжди буде рівно 200px.', why: '200px — це basis, але <code>flex-grow: 1</code> може збільшити елемент.' },
        ],
      },
      {
        q: 'Чому <code>200px</code> не обов’язково є кінцевим розміром елемента?',
        answer: 1,
        options: [
          { text: 'Тому що <code>flex-basis</code> завжди ігнорується.', why: '<code>flex-basis</code> використовується як початкова точка flex-розкладки.' },
          { text: 'Тому що за <code>flex-grow: 1</code> елемент може отримати вільний простір.', why: 'Basis є початковою точкою, а <code>flex-grow: 1</code> може додати розмір, коли є вільний простір.' },
          { text: 'Тому що <code>flex-shrink: 0</code> примусово встановлює 200px.', why: '<code>flex-shrink: 0</code> стосується стискання, а не блокування розміру на значенні basis.' },
          { text: 'Тому що 200px означає лише відстань.', why: '200px — це <code>flex-basis</code>, а не проміжок між елементами.' },
        ],
      },
      {
        q: 'За <code>flex-direction: row</code>, до якого напрямку переважно застосовується <code>flex-basis: 200px</code>?',
        answer: 2,
        options: [
          { text: 'До вертикального.', why: 'За <code>row</code> головна вісь є горизонтальною.' },
          { text: 'Лише до діагонального.', why: 'Flexbox не має діагональної головної осі.' },
          { text: 'До горизонтального.', why: 'За <code>flex-direction: row</code> головна вісь горизонтальна, тому basis переважно визначає горизонтальний розмір.' },
          { text: 'До жодного напрямку.', why: '<code>flex-basis</code> застосовується до головної осі, напрямок якої визначає flex-direction.' },
        ],
      },
      {
        q: 'Що відбувається з <code>flex-shrink</code>, коли його значення дорівнює <code>0</code>?',
        answer: 3,
        options: [
          { text: 'Елемент зростає швидше.', why: 'Зростання визначає <code>flex-grow</code>, а не <code>flex-shrink</code>.' },
          { text: 'Елемент отримує basis 0px.', why: 'Basis — це третє значення, 200px.' },
          { text: 'Елемент завжди має ширину 0px.', why: '<code>0</code> не означає ширину 0px.' },
          { text: 'Елемент не має стискатися через flex-shrink.', why: '<code>flex-shrink: 0</code> означає, що flex-shrink не має зменшувати розмір.' },
        ],
      },
      {
        q: 'Яке твердження найкраще описує <code>flex: 1 0 200px</code>?',
        answer: 0,
        options: [
          { text: 'Почни з 200px, не стискайся через flex-shrink і використовуй вільний простір для зростання.', why: 'Це підсумовує відповідно basis 200px, shrink 0 і grow 1.' },
          { text: 'Почни з 1px, стискайся на 0px і використовуй 200 як коефіцієнт зростання.', why: 'Значення не є розміром у пікселях, розміром у пікселях і коефіцієнтом зростання в такому порядку.' },
          { text: 'Почни з 0px і зафіксуй розмір на 200px.', why: '200px — це basis, але grow 1 означає, що розмір може збільшуватися.' },
          { text: 'Почни з 200px і завжди стискайся, коли простору стає більше.', why: 'Коли простору стає більше, саме grow може використати вільний простір.' },
        ],
      },
      {
        q: 'Якщо два flex-елементи мають <code>flex: 1 0 200px</code> і є вільний простір, що означає значення <code>1</code>?',
        answer: 1,
        options: [
          { text: 'Зростає лише перший елемент.', why: 'Обидва елементи мають grow 1, тому обидва можуть брати участь у розподілі вільного простору.' },
          { text: 'Обидва можуть отримати частину вільного простору.', why: 'Обидва мають <code>flex-grow: 1</code>, тому можуть зростати й ділити вільний простір за правилами flex.' },
          { text: 'Жоден не може зрости.', why: 'Значення grow 1 означає, що елемент може зростати.' },
          { text: 'Кожен елемент завжди має ширину 1px.', why: 'Число 1 — це <code>flex-grow</code>, а не ширина в пікселях.' },
        ],
      },
    ],
  },
});
