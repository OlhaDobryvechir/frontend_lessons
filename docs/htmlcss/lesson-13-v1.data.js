/*
 * Content of lesson 13 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS: width, height, min-width, max-width, min-height, max-height',
      kicker: 'Leksjon 13 &middot; HTML &amp; CSS',
      title: 'CSS: width, height, min-width, max-width, min-height, max-height',
      lead: 'Seks egenskaper som ser ut som ett tall hver. I praksis er de tre lag: et ønske, et tak og et gulv — og de blir alltid brukt i den rekkefølgen, også når de er uenige.',

      's.box.t': 'Hva tallet faktisk måler',
      's.box.d':
        '<p>Før du kan stole på et eneste av disse tallene, må du vite hvilken del av boksen det gjelder. Som standard er <code>width</code> bredden på <em>innholdet</em>: innvendig marg og ramme kommer utenpå, og den synlige boksen blir bredere enn tallet du skrev.</p>' +
        '<p>Med <code>box-sizing: border-box</code> betyr tallet hele den synlige boksen, og innholdet krymper for å gi plass til marg og ramme. Det er nesten alltid det du mente: <code>width: 200px</code> bør gi noe som er 200 piksler bredt.</p>' +
        '<p>Derfor begynner nesten hvert prosjekt med å sette <code>border-box</code> på alt. Det er ikke en vane uten grunn — uten den må du trekke fra marger i hodet hver gang du setter en bredde.</p>',

      's.auto.t': 'Standardverdien, og hvorfor bredde og høyde ikke ligner hverandre',
      's.auto.d':
        '<p>Skriver du ingenting, er begge <code>auto</code> — men <code>auto</code> betyr to helt forskjellige ting.</p>' +
        '<p>For bredde betyr det «fyll det foreldreelementet gir deg». En blokk er så bred som det er plass til, uansett hvor lite innhold den har. For høyde betyr det «vær så høy som innholdet». Ingen fyller noe; boksen vokser nedover til innholdet er ferdig.</p>' +
        '<p>Det er nettopp denne asymmetrien som gjorde <code>height: 50%</code> i forrige leksjon til en ikke-hendelse. Bredden til blokken rundt er alltid kjent, høyden er ofte ikke det.</p>',

      's.max.t': 'Taket',
      's.max.d':
        '<p><code>max-width</code> er den mest brukte av de fire grensene, og paret <code>width: 100%</code> med <code>max-width</code> er selve grunnmønsteret i responsiv layout: følg vinduet så lenge det er smalt, og stopp når det blir bredt.</p>' +
        '<p>Den andre klassikeren er <code>img { max-width: 100%; height: auto }</code>. Uten den stikker et for stort bilde rett ut av boksen sin; med den krymper det til det passer, og <code>height: auto</code> sørger for at det beholder formen.</p>' +
        '<p><code>max-height</code> brukes sjeldnere, og har en felle med seg: innholdet forsvinner ikke fordi du satte et tak. Det renner over, med mindre du også sier hva som skal skje med det som ikke får plass.</p>',

      's.min.t': 'Gulvet',
      's.min.d':
        '<p><code>min-width</code> hindrer at noe krymper til det blir ubrukelig. En sidekolonne på 25 % er fin på en stor skjerm og en ubrukelig stripe på en liten; et gulv på 240 piksler gjør at den heller bryter layouten enn å bli uleselig.</p>' +
        '<p><code>min-height</code> gjør det samme nedover, og brukes mest til å hindre at en tom boks faller helt sammen — et panel som venter på data, en liste som ennå ikke har rader.</p>' +
        '<p>Merk at prosent på <code>min-height</code> og <code>max-height</code> har nøyaktig samme krav som <code>height</code>: forelderen må ha en bestemt høyde, ellers skjer det ingenting.</p>',

      's.order.t': 'Hvem som vinner når de er uenige',
      's.order.d':
        '<p>De tre kan motsi hverandre, og utfallet er ikke tilfeldig. Nettleseren regner først ut bredden du ba om, klemmer den så ned under <code>max-width</code>, og klemmer så resultatet opp over <code>min-width</code>.</p>' +
        '<p>Den siste operasjonen vinner. Setter du <code>max-width: 300px</code> og <code>min-width: 500px</code> på samme element, blir det 500 piksler bredt — taket taper mot gulvet, selv om det ser ut som en selvmotsigelse.</p>' +
        '<p>Det er greit å vite når noe nekter å bli smalt: se etter en <code>min-width</code> et sted, kanskje arvet fra et rammeverk, før du begynner å skru på <code>width</code>.</p>',

      's.intrinsic.t': 'Å la innholdet bestemme',
      's.intrinsic.d':
        '<p>I stedet for et tall kan du be om størrelsen innholdet selv vil ha. <code>min-content</code> er så smalt som boksen kan bli uten at noe renner over — i praksis bredden på det lengste ordet. <code>max-content</code> er så bredt som innholdet ønsker seg, helt uten linjebrytning.</p>' +
        '<p><code>fit-content</code> er mellomtingen: som <code>max-content</code>, men aldri bredere enn plassen som faktisk finnes. Det er en knapp som er akkurat så bred som teksten sin, uten at du måtte måle teksten.</p>' +
        '<p>Funksjonsformen <code>fit-content(40ch)</code> setter et tak du velger selv, men nettlesere godtar den foreløpig på grid-spor og ikke på <code>width</code>. Sjekk at den virker der du vil bruke den før du lener deg på den.</p>',

      's.flex.t': 'Flex-elementet som nekter å krympe',
      's.flex.d':
        '<p>Én gang kommer du til å sitte med en rad der ett element har lang tekst, og hele raden blir bredere enn den skal, uansett hva du gjør med <code>width</code>.</p>' +
        '<p>Grunnen er en regel du ikke har skrevet: på et flex- eller grid-element betyr <code>min-width: auto</code> ikke null, men <code>min-content</code>. Elementet har altså allerede et gulv — bredden på sitt lengste ord — og nekter å gå under det.</p>' +
        '<p>Løsningen ser ut som om den ikke kan gjøre noe: <code>min-width: 0</code>. Den fjerner gulvet, og først da får elementet lov til å krympe og brekke teksten. I en kolonne er det <code>min-height: 0</code> som gjør samme nytten.</p>',

      's.note':
        '<p>Kortversjonen. Sett <code>border-box</code> på alt, én gang. <code>width</code> er et ønske, <code>max-*</code> et tak og <code>min-*</code> et gulv, og gulvet vinner alltid. <code>width: 100%</code> med <code>max-width</code> er responsivt oppsett i to linjer. Og nekter et flex-element å krympe, er svaret <code>min-width: 0</code>.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS: width, height, min-width, max-width, min-height, max-height',
      kicker: 'Lesson 13 &middot; HTML &amp; CSS',
      title: 'CSS: width, height, min-width, max-width, min-height, max-height',
      lead: 'Six properties that each look like a single number. In practice they are three layers: a wish, a ceiling and a floor — and they are always applied in that order, including when they disagree.',

      's.box.t': 'What the number actually measures',
      's.box.d':
        '<p>Before you can trust any of these numbers you have to know which part of the box it refers to. By default <code>width</code> is the width of the <em>content</em>: padding and border are added on the outside, and the visible box ends up wider than the number you wrote.</p>' +
        '<p>With <code>box-sizing: border-box</code> the number means the whole visible box, and the content shrinks to make room for padding and border. That is almost always what you meant: <code>width: 200px</code> ought to produce something 200 pixels wide.</p>' +
        '<p>This is why nearly every project starts by setting <code>border-box</code> on everything. It is not a habit without a reason — without it you are subtracting padding in your head every time you set a width.</p>',

      's.auto.t': 'The default, and why width and height are not alike',
      's.auto.d':
        '<p>Write nothing and both are <code>auto</code> — but <code>auto</code> means two completely different things.</p>' +
        '<p>For width it means "fill whatever the parent gives you". A block is as wide as there is room for, however little content it holds. For height it means "be as tall as the content". Nothing is filled; the box grows downwards until the content runs out.</p>' +
        '<p>This is exactly the asymmetry that made <code>height: 50%</code> a non-event in the previous lesson. The width of the block around you is always known; its height often is not.</p>',

      's.max.t': 'The ceiling',
      's.max.d':
        '<p><code>max-width</code> is the most used of the four limits, and pairing <code>width: 100%</code> with a <code>max-width</code> is the basic pattern of responsive layout: follow the window while it is narrow, and stop once it gets wide.</p>' +
        '<p>The other classic is <code>img { max-width: 100%; height: auto }</code>. Without it an oversized image sticks straight out of its box; with it the image shrinks to fit, and <code>height: auto</code> keeps its proportions.</p>' +
        '<p><code>max-height</code> is used less often and carries a trap: content does not disappear because you set a ceiling. It overflows, unless you also say what should happen to the part that does not fit.</p>',

      's.min.t': 'The floor',
      's.min.d':
        '<p><code>min-width</code> stops something shrinking until it is useless. A 25% side column is fine on a large screen and an unusable strip on a small one; a floor of 240 pixels makes it break the layout rather than become unreadable.</p>' +
        '<p><code>min-height</code> does the same downwards, and is used mostly to keep an empty box from collapsing entirely — a panel waiting for data, a list with no rows yet.</p>' +
        '<p>Note that a percentage on <code>min-height</code> and <code>max-height</code> carries exactly the same requirement as <code>height</code>: the parent needs a definite height, or nothing happens at all.</p>',

      's.order.t': 'Who wins when they disagree',
      's.order.d':
        '<p>The three can contradict each other, and the outcome is not arbitrary. The browser first works out the width you asked for, then clamps it down under <code>max-width</code>, then clamps that result up above <code>min-width</code>.</p>' +
        '<p>The last operation wins. Put <code>max-width: 300px</code> and <code>min-width: 500px</code> on the same element and it comes out 500 pixels wide — the ceiling loses to the floor, however much that reads like a contradiction.</p>' +
        '<p>Worth knowing when something refuses to get narrow: look for a <code>min-width</code> somewhere, quite possibly inherited from a framework, before you start adjusting <code>width</code>.</p>',

      's.intrinsic.t': 'Letting the content decide',
      's.intrinsic.d':
        '<p>Instead of a number you can ask for the size the content itself wants. <code>min-content</code> is as narrow as the box can go without anything overflowing — in practice the width of the longest word. <code>max-content</code> is as wide as the content would like, with no wrapping at all.</p>' +
        '<p><code>fit-content</code> is the middle ground: like <code>max-content</code>, but never wider than the space actually available. That is a button exactly as wide as its text, without you having had to measure the text.</p>' +
        '<p>The function form, <code>fit-content(40ch)</code>, caps it at a limit of your own — but browsers currently accept it on grid tracks rather than on <code>width</code>. Check that it works where you intend to use it before relying on it.</p>',

      's.flex.t': 'The flex item that refuses to shrink',
      's.flex.d':
        '<p>One day you will have a row where one item holds long text, and the whole row comes out wider than it should, whatever you do to <code>width</code>.</p>' +
        '<p>The reason is a rule you did not write: on a flex or grid item, <code>min-width: auto</code> does not mean zero, it means <code>min-content</code>. The item already has a floor — the width of its longest word — and refuses to go below it.</p>' +
        '<p>The fix looks like it cannot possibly do anything: <code>min-width: 0</code>. It removes the floor, and only then is the item allowed to shrink and wrap its text. In a column, <code>min-height: 0</code> does the same job.</p>',

      's.note':
        '<p>The short version. Set <code>border-box</code> on everything, once. <code>width</code> is a wish, <code>max-*</code> a ceiling and <code>min-*</code> a floor, and the floor always wins. <code>width: 100%</code> with a <code>max-width</code> is responsive layout in two lines. And when a flex item refuses to shrink, the answer is <code>min-width: 0</code>.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS: width, height, min-width, max-width, min-height, max-height',
      kicker: 'Урок 13 &middot; HTML &amp; CSS',
      title: 'CSS: width, height, min-width, max-width, min-height, max-height',
      lead: 'Шість властивостей, кожна з яких виглядає як одне число. Насправді це три шари: побажання, стеля і підлога — і їх завжди застосовують саме в такому порядку, зокрема й коли вони суперечать одне одному.',

      's.box.t': 'Що саме міряє це число',
      's.box.d':
        '<p>Перш ніж довіряти бодай одному з цих чисел, треба знати, якої частини коробки воно стосується. Типово <code>width</code> — це ширина <em>вмісту</em>: внутрішній відступ і рамка додаються ззовні, і видима коробка виходить ширшою за написане число.</p>' +
        '<p>З <code>box-sizing: border-box</code> число означає всю видиму коробку, а вміст стискається, щоб дати місце відступу й рамці. Це майже завжди те, що ви мали на увазі: <code>width: 200px</code> має давати щось завширшки 200 пікселів.</p>' +
        '<p>Саме тому майже кожен проєкт починається з того, що <code>border-box</code> ставлять усьому. Це звичка не без причини: без неї ви щоразу подумки віднімаєте відступи, задаючи ширину.</p>',

      's.auto.t': 'Типове значення і чому ширина з висотою не схожі',
      's.auto.d':
        '<p>Якщо не написати нічого, обидві будуть <code>auto</code> — але <code>auto</code> означає дві цілком різні речі.</p>' +
        '<p>Для ширини це «заповни те, що дає батько». Блок завширшки такий, скільки є місця, хоч яким малим був би його вміст. Для висоти це «будь заввишки як вміст». Нічого не заповнюється; коробка росте вниз, доки вміст не скінчиться.</p>' +
        '<p>Саме ця асиметрія й перетворила <code>height: 50%</code> з попереднього уроку на ніщо. Ширина блока навколо відома завжди, висота — часто ні.</p>',

      's.max.t': 'Стеля',
      's.max.d':
        '<p><code>max-width</code> — найуживаніша з чотирьох меж, а пара <code>width: 100%</code> з <code>max-width</code> є базовим шаблоном адаптивної розкладки: іди за вікном, поки воно вузьке, і зупинись, коли стане широким.</p>' +
        '<p>Друга класика — <code>img { max-width: 100%; height: auto }</code>. Без неї завелике зображення просто стирчить із коробки; з нею воно стискається до потрібного, а <code>height: auto</code> зберігає пропорції.</p>' +
        '<p><code>max-height</code> вживають рідше, і вона несе пастку: вміст не зникає через те, що ви задали стелю. Він переповнює коробку, якщо ви додатково не скажете, що робити з тим, що не вмістилося.</p>',

      's.min.t': 'Підлога',
      's.min.d':
        '<p><code>min-width</code> не дає чомусь стиснутися до непридатності. Бічна колонка на 25% гарна на великому екрані й непридатна смужка на малому; підлога у 240 пікселів змусить її радше зламати розкладку, ніж стати нечитабельною.</p>' +
        '<p><code>min-height</code> робить те саме вниз і слугує здебільшого для того, щоб порожня коробка не склалася зовсім — панель, що чекає на дані, список, у якому ще немає рядків.</p>' +
        '<p>Зверніть увагу: відсоток у <code>min-height</code> і <code>max-height</code> має рівно ту саму вимогу, що й <code>height</code> — у батька має бути певна висота, інакше не станеться нічого.</p>',

      's.order.t': 'Хто перемагає в суперечці',
      's.order.d':
        '<p>Ці три можуть суперечити одне одному, і результат не довільний. Браузер спершу обчислює ширину, яку ви попросили, потім притискає її вниз до <code>max-width</code>, а потім притискає отримане вгору до <code>min-width</code>.</p>' +
        '<p>Перемагає остання дія. Поставте <code>max-width: 300px</code> і <code>min-width: 500px</code> на один елемент — і вийде 500 пікселів: стеля програє підлозі, хоч як це читається як суперечність.</p>' +
        '<p>Це варто знати, коли щось відмовляється звужуватись: пошукайте десь <code>min-width</code>, цілком можливо успадкований із фреймворку, перш ніж узагалі чіпати <code>width</code>.</p>',

      's.intrinsic.t': 'Дати вміст вирішувати',
      's.intrinsic.d':
        '<p>Замість числа можна попросити той розмір, якого хоче сам вміст. <code>min-content</code> — це настільки вузько, наскільки коробка може стиснутися без переповнення, тобто на практиці ширина найдовшого слова. <code>max-content</code> — настільки широко, як хоче вміст, узагалі без перенесення рядків.</p>' +
        '<p><code>fit-content</code> — середина: як <code>max-content</code>, але ніколи не ширше за місце, яке справді є. Це кнопка рівно завширшки зі свій текст, і вимірювати текст вам не довелося.</p>' +
        '<p>Функційна форма <code>fit-content(40ch)</code> задає стелю на ваш вибір, але браузери наразі приймають її для доріжок grid, а не для <code>width</code>. Перевірте, що вона працює там, де ви збираєтеся її вжити, перш ніж на неї покладатися.</p>',

      's.flex.t': 'Flex-елемент, який відмовляється стискатися',
      's.flex.d':
        '<p>Колись ви матимете рядок, у якому один елемент містить довгий текст, і весь рядок виходить ширшим, ніж мав би, хоч що ви робіть із <code>width</code>.</p>' +
        '<p>Причина — правило, якого ви не писали: на елементі flex або grid <code>min-width: auto</code> означає не нуль, а <code>min-content</code>. Тобто в елемента вже є підлога — ширина його найдовшого слова — і нижче він не піде.</p>' +
        '<p>Розв’язання виглядає так, ніби нічого не може зробити: <code>min-width: 0</code>. Воно прибирає підлогу, і лише тоді елементу дозволено стиснутися й перенести текст. У колонці ту саму роботу виконує <code>min-height: 0</code>.</p>',

      's.note':
        '<p>Коротко. Поставте <code>border-box</code> усьому, один раз. <code>width</code> — побажання, <code>max-*</code> — стеля, <code>min-*</code> — підлога, і підлога завжди перемагає. <code>width: 100%</code> з <code>max-width</code> — це адаптивна розкладка у два рядки. А коли flex-елемент відмовляється стискатися, відповідь — <code>min-width: 0</code>.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Et element har <code>width: 200px; padding: 20px; border: 2px solid</code> og standard <code>box-sizing</code>. Hvor bred blir den synlige boksen?',
        answer: 2,
        options: [
          {
            text: '200px',
            why: 'Det ville stemt med <code>border-box</code>. Standarden er <code>content-box</code>, der tallet bare gjelder innholdet.',
          },
          {
            text: '240px',
            why: 'Nesten &mdash; du har lagt til begge margene, men glemt de to rammene på 2px hver.',
          },
          {
            text: '244px',
            why: '2 + 20 + 200 + 20 + 2. Med <code>content-box</code> legges innvendig marg og ramme utenpå tallet du skrev.',
          },
          {
            text: '204px',
            why: 'Det er bare rammene lagt til. Den innvendige margen kommer utenpå den også.',
          },
        ],
      },
      {
        q: 'Et element har <code>width: 400px; max-width: 300px; min-width: 500px</code>. Hvor bredt blir det?',
        answer: 3,
        options: [
          {
            text: '300px — <code>max-width</code> er det strengeste.',
            why: '<code>max-width</code> klemmer den ned til 300, men så kommer <code>min-width</code> etterpå og løfter den igjen.',
          },
          {
            text: '400px — de to grensene opphever hverandre.',
            why: 'De opphever ikke hverandre. Begge brukes, i en bestemt rekkefølge.',
          },
          {
            text: 'Ugyldig — grensene motsier hverandre.',
            why: 'Det er fullt lovlig. CSS har et klart svar på tilfellet.',
          },
          {
            text: '500px — <code>min-width</code> brukes sist og vinner.',
            why: 'Rekkefølgen er: bredde, så tak, så gulv. Gulvet kjøres til slutt og har derfor alltid siste ord.',
          },
        ],
      },
      {
        q: 'Hva gjør <code>.container { width: 100%; max-width: 60rem }</code>?',
        answer: 1,
        options: [
          {
            text: 'Låser bredden til 60rem.',
            why: 'Bare når det finnes plass til det. I et smalere vindu vinner <code>100%</code>.',
          },
          {
            text: 'Lar bredden følge vinduet, men stopper på 60rem.',
            why: 'Grunnmønsteret i responsivt oppsett: full bredde mens det er trangt, og en lesbar maksbredde når skjermen blir stor.',
          },
          {
            text: 'Setter en nedre grense på 60rem.',
            why: 'Det ville vært <code>min-width</code>. <code>max-width</code> er et tak.',
          },
          {
            text: 'Det samme som <code>width: 60rem</code>.',
            why: 'Bare på brede skjermer. På en smal skjerm ville <code>width: 60rem</code> stukket utenfor.',
          },
        ],
      },
      {
        q: 'Et flex-element med lang tekst gjør hele raden for bred, og <code>width</code> hjelper ikke. Hva mangler?',
        answer: 2,
        options: [
          {
            text: '<code>max-width: 100%</code>',
            why: 'Taket ligger over problemet. Det som stopper krympingen, er et gulv du ikke har skrevet.',
          },
          {
            text: '<code>overflow: hidden</code> på raden',
            why: 'Det skjuler symptomet i stedet for å la elementet krympe. Teksten forsvinner, den brekker ikke.',
          },
          {
            text: '<code>min-width: 0</code> på elementet',
            why: 'På et flex-element betyr <code>min-width: auto</code> ikke null, men <code>min-content</code> &mdash; bredden på det lengste ordet. <code>min-width: 0</code> fjerner det gulvet, og da får elementet endelig lov til å krympe.',
          },
          {
            text: '<code>box-sizing: border-box</code>',
            why: 'Den endrer hva bredden måler, ikke hvor liten elementet har lov til å bli.',
          },
        ],
      },
      {
        q: 'Du setter <code>max-height: 50%</code> på et element. Forelderen har ingen høyde satt. Hva skjer?',
        answer: 0,
        options: [
          {
            text: 'Ingenting — prosenten har ingen bestemt høyde å regne av.',
            why: 'Nøyaktig samme krav som <code>height</code> i forrige leksjon: uten en bestemt høyde hos forelderen faller grensen bort.',
          },
          {
            text: 'Elementet blir halvparten så høyt som innholdet.',
            why: 'Det ville vært sirkulært, og er ikke det nettleseren gjør.',
          },
          {
            text: 'Elementet blir halvparten av vindushøyden.',
            why: 'Det ville vært <code>50vh</code>. En prosent ser på forelderen, ikke på vinduet.',
          },
          {
            text: 'Innholdet blir klippet på midten.',
            why: 'Ingenting klippes. Og selv med en grense som virket, ville innholdet rent over, ikke forsvunnet.',
          },
        ],
      },
      {
        q: 'Hvorfor setter nesten alle prosjekter <code>box-sizing: border-box</code> på alt?',
        answer: 1,
        options: [
          {
            text: 'Fordi <code>content-box</code> er utdatert.',
            why: 'Den er fortsatt standarden og fullt gyldig. Den er bare upraktisk å regne med.',
          },
          {
            text: 'Fordi <code>width</code> da betyr bredden på hele den synlige boksen, marger og ramme inkludert.',
            why: 'Uten den må du trekke fra innvendig marg og ramme selv hver gang du setter en bredde &mdash; og på nytt hver gang margen endres.',
          },
          {
            text: 'Fordi det gjør siden raskere å tegne.',
            why: 'Ytelsen er den samme. Gevinsten er at regnestykkene blir enkle.',
          },
          {
            text: 'Fordi prosent ikke virker uten den.',
            why: 'Prosent virker med begge. Den avgjør bare hva prosenten ender opp med å dekke.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'An element has <code>width: 200px; padding: 20px; border: 2px solid</code> and the default <code>box-sizing</code>. How wide is the visible box?',
        answer: 2,
        options: [
          {
            text: '200px',
            why: 'That would be true with <code>border-box</code>. The default is <code>content-box</code>, where the number covers the content only.',
          },
          {
            text: '240px',
            why: 'Close — you have added both paddings but forgotten the two 2px borders.',
          },
          {
            text: '244px',
            why: '2 + 20 + 200 + 20 + 2. With <code>content-box</code>, padding and border are added outside the number you wrote.',
          },
          {
            text: '204px',
            why: 'That is the borders only. The padding is added outside as well.',
          },
        ],
      },
      {
        q: 'An element has <code>width: 400px; max-width: 300px; min-width: 500px</code>. How wide does it end up?',
        answer: 3,
        options: [
          {
            text: '300px — <code>max-width</code> is the strictest.',
            why: '<code>max-width</code> does clamp it down to 300, but <code>min-width</code> runs afterwards and lifts it again.',
          },
          {
            text: '400px — the two limits cancel out.',
            why: 'They do not cancel. Both are applied, in a fixed order.',
          },
          {
            text: 'Invalid — the limits contradict each other.',
            why: 'It is perfectly legal. CSS has a defined answer for this case.',
          },
          {
            text: '500px — <code>min-width</code> is applied last and wins.',
            why: 'The order is width, then ceiling, then floor. The floor runs last, so it always has the final say.',
          },
        ],
      },
      {
        q: 'What does <code>.container { width: 100%; max-width: 60rem }</code> do?',
        answer: 1,
        options: [
          {
            text: 'Locks the width at 60rem.',
            why: 'Only where there is room for it. In a narrower window <code>100%</code> wins.',
          },
          {
            text: 'Lets the width follow the window, but stops at 60rem.',
            why: 'The basic pattern of responsive layout: full width while things are tight, and a readable maximum once the screen gets large.',
          },
          {
            text: 'Sets a lower limit of 60rem.',
            why: 'That would be <code>min-width</code>. <code>max-width</code> is a ceiling.',
          },
          {
            text: 'The same as <code>width: 60rem</code>.',
            why: 'Only on wide screens. On a narrow one, <code>width: 60rem</code> would stick out.',
          },
        ],
      },
      {
        q: 'A flex item with long text makes the whole row too wide, and <code>width</code> does not help. What is missing?',
        answer: 2,
        options: [
          {
            text: '<code>max-width: 100%</code>',
            why: 'The ceiling is above the problem. What stops the shrinking is a floor you never wrote.',
          },
          {
            text: '<code>overflow: hidden</code> on the row',
            why: 'That hides the symptom instead of letting the item shrink. The text disappears rather than wrapping.',
          },
          {
            text: '<code>min-width: 0</code> on the item',
            why: 'On a flex item, <code>min-width: auto</code> means <code>min-content</code> rather than zero — the width of the longest word. <code>min-width: 0</code> removes that floor, and only then is the item allowed to shrink.',
          },
          {
            text: '<code>box-sizing: border-box</code>',
            why: 'That changes what the width measures, not how small the item is allowed to get.',
          },
        ],
      },
      {
        q: 'You set <code>max-height: 50%</code> on an element. The parent has no height set. What happens?',
        answer: 0,
        options: [
          {
            text: 'Nothing — the percentage has no definite height to work from.',
            why: 'Exactly the same requirement as <code>height</code> in the previous lesson: with no definite height on the parent, the limit simply does not apply.',
          },
          {
            text: 'The element becomes half as tall as its content.',
            why: 'That would be circular, and is not what the browser does.',
          },
          {
            text: 'The element becomes half the window height.',
            why: 'That would be <code>50vh</code>. A percentage looks at the parent, not the window.',
          },
          {
            text: 'The content is cut in half.',
            why: 'Nothing is cut. And even with a limit that did apply, the content would overflow rather than vanish.',
          },
        ],
      },
      {
        q: 'Why do nearly all projects set <code>box-sizing: border-box</code> on everything?',
        answer: 1,
        options: [
          {
            text: 'Because <code>content-box</code> is obsolete.',
            why: 'It is still the default and perfectly valid. It is just awkward to do arithmetic with.',
          },
          {
            text: 'Because <code>width</code> then means the width of the whole visible box, padding and border included.',
            why: 'Without it you are subtracting padding and border yourself every time you set a width — and again every time the padding changes.',
          },
          {
            text: 'Because it makes the page faster to render.',
            why: 'Performance is the same. The benefit is that the arithmetic becomes simple.',
          },
          {
            text: 'Because percentages do not work without it.',
            why: 'Percentages work with both. It only decides what the percentage ends up covering.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Елемент має <code>width: 200px; padding: 20px; border: 2px solid</code> і типовий <code>box-sizing</code>. Якою завширшки буде видима коробка?',
        answer: 2,
        options: [
          {
            text: '200px',
            why: 'Це було б правдою з <code>border-box</code>. Типовим є <code>content-box</code>, де число стосується лише вмісту.',
          },
          {
            text: '240px',
            why: 'Майже — ви додали обидва внутрішні відступи, але забули дві рамки по 2px.',
          },
          {
            text: '244px',
            why: '2 + 20 + 200 + 20 + 2. З <code>content-box</code> відступ і рамка додаються ззовні написаного числа.',
          },
          {
            text: '204px',
            why: 'Це лише рамки. Внутрішній відступ теж додається ззовні.',
          },
        ],
      },
      {
        q: 'Елемент має <code>width: 400px; max-width: 300px; min-width: 500px</code>. Якої ширини він вийде?',
        answer: 3,
        options: [
          {
            text: '300px — <code>max-width</code> найсуворіша.',
            why: '<code>max-width</code> справді притискає до 300, але потім спрацьовує <code>min-width</code> і піднімає знову.',
          },
          {
            text: '400px — дві межі взаємно скасовуються.',
            why: 'Вони не скасовуються. Застосовуються обидві, у сталому порядку.',
          },
          {
            text: 'Недійсно — межі суперечать одна одній.',
            why: 'Це цілком законно. CSS має визначену відповідь для цього випадку.',
          },
          {
            text: '500px — <code>min-width</code> застосовується останньою і перемагає.',
            why: 'Порядок такий: ширина, потім стеля, потім підлога. Підлога спрацьовує останньою, тож завжди має вирішальне слово.',
          },
        ],
      },
      {
        q: 'Що робить <code>.container { width: 100%; max-width: 60rem }</code>?',
        answer: 1,
        options: [
          {
            text: 'Фіксує ширину на 60rem.',
            why: 'Лише там, де для цього є місце. У вужчому вікні перемагає <code>100%</code>.',
          },
          {
            text: 'Дозволяє ширині йти за вікном, але зупиняє на 60rem.',
            why: 'Базовий шаблон адаптивної розкладки: повна ширина, поки тісно, і читабельний максимум, коли екран стає великим.',
          },
          {
            text: 'Задає нижню межу 60rem.',
            why: 'Це була б <code>min-width</code>. <code>max-width</code> — це стеля.',
          },
          {
            text: 'Те саме, що <code>width: 60rem</code>.',
            why: 'Лише на широких екранах. На вузькому <code>width: 60rem</code> стирчав би назовні.',
          },
        ],
      },
      {
        q: 'Flex-елемент із довгим текстом робить увесь рядок заширокий, і <code>width</code> не допомагає. Чого бракує?',
        answer: 2,
        options: [
          {
            text: '<code>max-width: 100%</code>',
            why: 'Стеля лежить вище за проблему. Стискатися заважає підлога, якої ви не писали.',
          },
          {
            text: '<code>overflow: hidden</code> на рядку',
            why: 'Це ховає симптом замість дати елементу стиснутися. Текст зникає, а не переноситься.',
          },
          {
            text: '<code>min-width: 0</code> на елементі',
            why: 'На flex-елементі <code>min-width: auto</code> означає <code>min-content</code>, а не нуль — ширину найдовшого слова. <code>min-width: 0</code> прибирає цю підлогу, і лише тоді елементу дозволено стиснутися.',
          },
          {
            text: '<code>box-sizing: border-box</code>',
            why: 'Це змінює те, що міряє ширина, а не те, наскільки малим елементу дозволено стати.',
          },
        ],
      },
      {
        q: 'Ви ставите <code>max-height: 50%</code> на елемент. У батька висоту не задано. Що станеться?',
        answer: 0,
        options: [
          {
            text: 'Нічого — відсотку нема від якої певної висоти рахувати.',
            why: 'Рівно та сама вимога, що й у <code>height</code> з попереднього уроку: без певної висоти в батька межа просто не діє.',
          },
          {
            text: 'Елемент стане вдвічі нижчим за свій вміст.',
            why: 'Це було б замкнене коло, і браузер так не робить.',
          },
          {
            text: 'Елемент стане половиною висоти вікна.',
            why: 'Це був би <code>50vh</code>. Відсоток дивиться на батька, а не на вікно.',
          },
          {
            text: 'Вміст обріжеться навпіл.',
            why: 'Нічого не обрізається. Та й навіть з межею, що діє, вміст переповнив би коробку, а не зник.',
          },
        ],
      },
      {
        q: 'Чому майже всі проєкти ставлять <code>box-sizing: border-box</code> усьому?',
        answer: 1,
        options: [
          {
            text: 'Бо <code>content-box</code> застарів.',
            why: 'Він і досі типовий і цілком дійсний. Просто з ним незручно рахувати.',
          },
          {
            text: 'Бо тоді <code>width</code> означає ширину всієї видимої коробки, разом із відступом і рамкою.',
            why: 'Без цього ви щоразу самі віднімаєте відступ і рамку, задаючи ширину — і знову щоразу, коли відступ змінюється.',
          },
          {
            text: 'Бо так сторінка малюється швидше.',
            why: 'Швидкодія однакова. Виграш у тому, що арифметика стає простою.',
          },
          {
            text: 'Бо без цього не працюють відсотки.',
            why: 'Відсотки працюють з обома. Це лише вирішує, що саме відсоток зрештою покриває.',
          },
        ],
      },
    ],
  },
});
