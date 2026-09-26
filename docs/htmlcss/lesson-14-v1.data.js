/*
 * Content of lesson 14 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS: text-align, font, font-size, font-weight',
      kicker: 'Leksjon 14 &middot; HTML &amp; CSS',
      title: 'CSS: text-align, font, font-size, font-weight',
      lead: 'Egenskapene som former teksten. De arves nedover i dokumentet, i motsetning til størrelsene fra forrige leksjon — og én av dem, kortformen <code>font</code>, nullstiller stille alt den ikke nevner.',

      's.align.t': 'Teksten, ikke boksen',
      's.align.d':
        '<p><code>text-align</code> bestemmer hvor linjene legger seg inne i en blokk. Den flytter ikke blokken.</p>' +
        '<p>Det er den vanligste misforståelsen her: <code>text-align: center</code> på et kort sentrerer teksten <em>inni</em> kortet, mens kortet fortsatt står der det sto. Skal selve boksen midtstilles, er det bredde og marg som gjør jobben, ikke tekstjusteringen.</p>' +
        '<p><code>start</code> og <code>end</code> følger leseretningen, mens <code>left</code> og <code>right</code> er absolutte. På et flerspråklig nettsted er de to første tryggest: de gjør det riktige også når språket leses fra høyre.</p>',

      's.size.t': 'Størrelsen, og hvilken enhet',
      's.size.d':
        '<p>Utgangspunktet i en nettleser er 16 piksler, og leseren kan endre det. Hvilken enhet du velger, avgjør om du respekterer den endringen.</p>' +
        '<p><code>px</code> gjør ikke det: 16 piksler blir 16 piksler også for den som har skrudd opp skriften fordi hun trenger det. <code>rem</code> måles mot rotelementet og følger dermed leserens valg — det er derfor <code>rem</code> er standardvalget for skriftstørrelse.</p>' +
        '<p><code>em</code> måles mot forelderen, og det gir en egenskap de andre ikke har: den hoper seg opp. To nivåer med <code>1.5em</code> inni hverandre gir ikke halvannen gang, men drøyt to. Noen ganger er det nettopp det du vil ha; oftere er det en overraskelse langt nede i et komponenttre.</p>',

      's.weight.t': 'Tykkelsen, og hva skriften faktisk har',
      's.weight.d':
        '<p>Vekt oppgis som et tall fra 100 til 900. <code>normal</code> er nøyaktig det samme som 400, og <code>bold</code> det samme som 700 — navnene er bare eldre skrivemåter for de to tallene.</p>' +
        '<p><code>bolder</code> og <code>lighter</code> er ikke verdier, men steg: de regnes ut fra det forelderen har. Det gjør dem nyttige i små, gjenbrukbare biter og upraktiske når du vil vite nøyaktig hva du får.</p>' +
        '<p>Én ting er verdt å vite: at du skriver <code>600</code>, betyr ikke at du får en ekte halvfet. Har familien bare 400 og 700, velger nettleseren den nærmeste, eller tegner en kunstig fet variant som ofte ser dårligere ut enn den ekte. Beregnet verdi sier fortsatt 600 — det er tegningen som faller tilbake. Variable skrifter er unntaket; der finnes alle trinnene på ekte.</p>',

      's.family.t': 'Familien, og reserveløsningene',
      's.family.d':
        '<p><code>font-family</code> er ikke ett navn, men en liste i prioritert rekkefølge. Nettleseren tar det første navnet den faktisk har, og går videre hvis den ikke har det.</p>' +
        '<p>Navn med mellomrom skal i anførselstegn. Og listen bør alltid ende med en generisk familie — <code>sans-serif</code>, <code>serif</code>, <code>monospace</code> — slik at det finnes et siste svar uansett hvilken maskin siden åpnes på.</p>',

      's.short.t': 'Kortformen som nullstiller',
      's.short.d':
        '<p><code>font</code> setter flere egenskaper på én linje. Størrelse og familie er obligatoriske, de kommer til slutt, og rekkefølgen er fast: stil, variant, vekt, bredde, så størrelse og eventuelt linjehøyde, så familien.</p>' +
        '<p>Fellen ligger ikke i rekkefølgen, men i det den gjør med det du ikke skrev. En kortform setter <em>alle</em> egenskapene sine, og de du utelater får startverdien sin tilbake. Skriver du <code>font: 1rem system-ui</code> under en <code>font-weight: 700</code>, står du igjen med vanlig vekt — ikke fordi noe feilet, men fordi kortformen nettopp satte vekten til 400.</p>' +
        '<p>Derfor hører <code>font</code> hjemme først i en regel, ikke sist. Og trenger du bare å endre størrelsen, er <code>font-size</code> det trygge valget.</p>',

      's.lh.t': 'Linjehøyde med og uten enhet',
      's.lh.d':
        '<p><code>line-height</code> kan skrives som et rent tall eller med en enhet, og forskjellen viser seg først hos barna.</p>' +
        '<p>Et rent tall arves som tall: hvert element ganger det med sin egen skriftstørrelse. En lengde eller en prosent regnes ut én gang hos den som skrev den, og barna arver det ferdige tallet.</p>' +
        '<p>Konsekvensen er konkret. Med <code>line-height: 1.5</code> på <code>body</code> får en overskrift på 32 piksler 48 piksler mellom linjene. Med <code>line-height: 150%</code> arver den 24 piksler — mindre enn sin egen skriftstørrelse, og linjene legger seg oppå hverandre. Skriv tallet alene.</p>',

      's.inherit.t': 'Disse arves nedover',
      's.inherit.d':
        '<p>Alt i denne leksjonen arves. Setter du <code>font-family</code> på <code>body</code>, gjelder den hele dokumentet uten at du nevner den igjen.</p>' +
        '<p>Det er motsatt av forrige leksjon. <code>width</code>, <code>margin</code> og <code>border</code> arves ikke — det ville vært meningsløst om hvert barn fikk forelderens bredde.</p>' +
        '<p>Skillet er ikke tilfeldig: det som beskriver tekst, arves, fordi tekst renner gjennom hele treet. Det som beskriver en boks, gjør det ikke, fordi hver boks er sin egen.</p>',

      's.note':
        '<p>Kortversjonen. <code>text-align</code> flytter teksten, ikke boksen. <code>rem</code> til skriftstørrelse, så leseren får bestemme. Vekt som tall, og husk at familien må ha den. <code>line-height</code> uten enhet. Og bruk <code>font</code> med åpne øyne — den nullstiller alt den ikke nevner.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS: text-align, font, font-size, font-weight',
      kicker: 'Lesson 14 &middot; HTML &amp; CSS',
      title: 'CSS: text-align, font, font-size, font-weight',
      lead: 'The properties that shape text. They are inherited down the document, unlike the sizes from the previous lesson — and one of them, the <code>font</code> shorthand, quietly resets everything it does not mention.',

      's.align.t': 'The text, not the box',
      's.align.d':
        '<p><code>text-align</code> decides where the lines sit inside a block. It does not move the block.</p>' +
        '<p>That is the commonest misunderstanding here: <code>text-align: center</code> on a card centres the text <em>within</em> the card, while the card stays exactly where it was. To centre the box itself, width and margin do the work, not the text alignment.</p>' +
        '<p><code>start</code> and <code>end</code> follow the reading direction, while <code>left</code> and <code>right</code> are absolute. On a multilingual site the first two are safer: they still do the right thing when the language reads from the right.</p>',

      's.size.t': 'The size, and which unit',
      's.size.d':
        '<p>A browser starts at 16 pixels, and the reader can change that. Which unit you choose decides whether you respect the change.</p>' +
        '<p><code>px</code> does not: 16 pixels stays 16 pixels even for someone who turned the text up because they need it. <code>rem</code> is measured against the root element and therefore follows the reader choice — which is why <code>rem</code> is the default answer for font size.</p>' +
        '<p><code>em</code> is measured against the parent, and that gives it a property the others lack: it accumulates. Two levels of <code>1.5em</code> nested inside each other do not give one and a half times, but a little over two. Sometimes that is exactly what you want; more often it is a surprise somewhere deep in a component tree.</p>',

      's.weight.t': 'The weight, and what the font actually has',
      's.weight.d':
        '<p>Weight is given as a number from 100 to 900. <code>normal</code> is precisely the same as 400 and <code>bold</code> the same as 700 — the names are simply older spellings of those two numbers.</p>' +
        '<p><code>bolder</code> and <code>lighter</code> are not values but steps: they are worked out from whatever the parent has. That makes them handy inside small reusable pieces and awkward when you want to know exactly what you will get.</p>' +
        '<p>One thing is worth knowing: writing <code>600</code> does not mean you get a genuine semibold. If the family only has 400 and 700, the browser picks the nearest, or draws an artificial bold that usually looks worse than the real thing. The computed value still says 600 — it is the drawing that falls back. Variable fonts are the exception; there every step genuinely exists.</p>',

      's.family.t': 'The family, and the fallbacks',
      's.family.d':
        '<p><code>font-family</code> is not one name but a list in order of preference. The browser takes the first name it actually has, and moves on if it does not.</p>' +
        '<p>Names containing spaces belong in quotes. And the list should always end with a generic family — <code>sans-serif</code>, <code>serif</code>, <code>monospace</code> — so that there is a final answer whatever machine the page is opened on.</p>',

      's.short.t': 'The shorthand that resets',
      's.short.d':
        '<p><code>font</code> sets several properties on one line. Size and family are required, they come last, and the order is fixed: style, variant, weight, stretch, then size with an optional line height, then the family.</p>' +
        '<p>The trap is not the order but what it does to what you did not write. A shorthand sets <em>all</em> of its properties, and the ones you leave out get their initial value back. Write <code>font: 1rem system-ui</code> beneath a <code>font-weight: 700</code> and you are left with normal weight — not because anything failed, but because the shorthand just set the weight to 400.</p>' +
        '<p>So <code>font</code> belongs at the top of a rule, not the bottom. And if all you need is a different size, <code>font-size</code> is the safe choice.</p>',

      's.lh.t': 'Line height with and without a unit',
      's.lh.d':
        '<p><code>line-height</code> can be written as a bare number or with a unit, and the difference only shows up in the children.</p>' +
        '<p>A bare number is inherited as a number: every element multiplies it by its own font size. A length or a percentage is worked out once, on the element that wrote it, and the children inherit the finished figure.</p>' +
        '<p>The consequence is concrete. With <code>line-height: 1.5</code> on <code>body</code>, a 32 pixel heading gets 48 pixels between its lines. With <code>line-height: 150%</code> it inherits 24 pixels — less than its own font size, and the lines pile on top of each other. Write the number on its own.</p>',

      's.inherit.t': 'These travel down the tree',
      's.inherit.d':
        '<p>Everything in this lesson is inherited. Set <code>font-family</code> on <code>body</code> and it applies to the whole document without being mentioned again.</p>' +
        '<p>That is the opposite of the previous lesson. <code>width</code>, <code>margin</code> and <code>border</code> are not inherited — it would be meaningless for every child to take its parent width.</p>' +
        '<p>The split is not arbitrary: things that describe text are inherited, because text flows through the whole tree. Things that describe a box are not, because every box is its own.</p>',

      's.note':
        '<p>The short version. <code>text-align</code> moves the text, not the box. <code>rem</code> for font size, so the reader gets to decide. Weight as a number, and remember the family has to have it. <code>line-height</code> without a unit. And use <code>font</code> with your eyes open — it resets everything it does not mention.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS: text-align, font, font-size, font-weight',
      kicker: 'Урок 14 &middot; HTML &amp; CSS',
      title: 'CSS: text-align, font, font-size, font-weight',
      lead: 'Властивості, які формують текст. Вони успадковуються вниз по документу, на відміну від розмірів з попереднього уроку — і одна з них, скорочення <code>font</code>, тихо скидає все, чого не згадує.',

      's.align.t': 'Текст, а не коробка',
      's.align.d':
        '<p><code>text-align</code> визначає, де лягають рядки всередині блока. Сам блок він не рухає.</p>' +
        '<p>Це найпоширеніше непорозуміння тут: <code>text-align: center</code> на картці центрує текст <em>усередині</em> картки, а картка лишається точно там, де була. Щоб відцентрувати саму коробку, працюють ширина й відступ, а не вирівнювання тексту.</p>' +
        '<p><code>start</code> і <code>end</code> ідуть за напрямком читання, а <code>left</code> і <code>right</code> абсолютні. На багатомовному сайті перші два безпечніші: вони роблять правильно й тоді, коли мова читається справа наліво.</p>',

      's.size.t': 'Розмір і яка одиниця',
      's.size.d':
        '<p>Браузер починає з 16 пікселів, і читач може це змінити. Обрана одиниця вирішує, чи поважаєте ви цю зміну.</p>' +
        '<p><code>px</code> не поважає: 16 пікселів лишаються 16 пікселями навіть для того, хто збільшив шрифт, бо інакше не бачить. <code>rem</code> міряється відносно кореневого елемента і тому йде за вибором читача — саме тому <code>rem</code> є типовою відповіддю для розміру шрифту.</p>' +
        '<p><code>em</code> міряється відносно батька, і це дає йому властивість, якої немає в інших: він накопичується. Два рівні <code>1.5em</code>, вкладені один в одного, дають не півтора рази, а трохи більше за два. Іноді це саме те, чого ви хочете; частіше це несподіванка десь у глибині дерева компонентів.</p>',

      's.weight.t': 'Насиченість і те, що насправді є в шрифті',
      's.weight.d':
        '<p>Насиченість задають числом від 100 до 900. <code>normal</code> — це рівно те саме, що 400, а <code>bold</code> — те саме, що 700: назви є просто давнішими написаннями цих двох чисел.</p>' +
        '<p><code>bolder</code> і <code>lighter</code> — не значення, а кроки: їх обчислюють від того, що має батько. Це робить їх зручними в невеликих повторно вживаних частинах і незручними, коли треба точно знати, що ви отримаєте.</p>' +
        '<p>Одну річ варто знати: написати <code>600</code> не означає отримати справжній напівжирний. Якщо в родині є лише 400 і 700, браузер обирає найближчий або малює штучний жирний, який зазвичай виглядає гірше за справжній. Обчислене значення й далі каже 600 — відкочується саме малювання. Варіативні шрифти є винятком: там кожен крок існує по-справжньому.</p>',

      's.family.t': 'Родина і запасні варіанти',
      's.family.d':
        '<p><code>font-family</code> — це не одна назва, а список у порядку переваги. Браузер бере першу назву, яка в нього справді є, і йде далі, якщо немає.</p>' +
        '<p>Назви з пробілами беруть у лапки. А список завжди має завершуватися загальною родиною — <code>sans-serif</code>, <code>serif</code>, <code>monospace</code> — щоб остаточна відповідь була на будь-якій машині, де відкриють сторінку.</p>',

      's.short.t': 'Скорочення, яке скидає',
      's.short.d':
        '<p><code>font</code> задає кілька властивостей одним рядком. Розмір і родина обовʼязкові, вони стоять наприкінці, і порядок сталий: стиль, варіант, насиченість, ширина, потім розмір із необовʼязковою висотою рядка, потім родина.</p>' +
        '<p>Пастка не в порядку, а в тому, що воно робить із тим, чого ви не написали. Скорочення задає <em>всі</em> свої властивості, а пропущені отримують назад свої початкові значення. Напишіть <code>font: 1rem system-ui</code> під <code>font-weight: 700</code> — і ви лишитеся зі звичайною насиченістю: не тому, що щось не спрацювало, а тому, що скорочення щойно встановило насиченість у 400.</p>' +
        '<p>Тож <code>font</code> має стояти на початку правила, а не в кінці. А якщо треба лише інший розмір, безпечний вибір — <code>font-size</code>.</p>',

      's.lh.t': 'Висота рядка з одиницею і без',
      's.lh.d':
        '<p><code>line-height</code> можна писати як просте число або з одиницею, і різниця виявляється лише в нащадках.</p>' +
        '<p>Просте число успадковується як число: кожен елемент множить його на власний розмір шрифту. Довжину або відсоток обчислюють один раз, на тому елементі, що їх написав, а нащадки успадковують уже готову величину.</p>' +
        '<p>Наслідок цілком конкретний. З <code>line-height: 1.5</code> на <code>body</code> заголовок у 32 пікселі дістає 48 пікселів між рядками. З <code>line-height: 150%</code> він успадкує 24 пікселі — менше за власний розмір шрифту, і рядки налазять один на одного. Пишіть число саме по собі.</p>',

      's.inherit.t': 'Ці йдуть униз по дереву',
      's.inherit.d':
        '<p>Усе в цьому уроці успадковується. Задайте <code>font-family</code> на <code>body</code> — і вона діятиме на весь документ, і згадувати її більше не треба.</p>' +
        '<p>Це протилежність попереднього уроку. <code>width</code>, <code>margin</code> і <code>border</code> не успадковуються — було б безглуздо, якби кожен нащадок брав ширину батька.</p>' +
        '<p>Поділ не випадковий: те, що описує текст, успадковується, бо текст тече крізь усе дерево. Те, що описує коробку, — ні, бо кожна коробка своя власна.</p>',

      's.note':
        '<p>Коротко. <code>text-align</code> рухає текст, а не коробку. <code>rem</code> для розміру шрифту, щоб вирішував читач. Насиченість числом — і памʼятайте, що родина має її мати. <code>line-height</code> без одиниці. І користуйтеся <code>font</code> з розплющеними очима: воно скидає все, чого не згадує.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du setter <code>text-align: center</code> på et kort som er smalere enn siden. Hva skjer?',
        answer: 1,
        options: [
          {
            text: 'Kortet flytter seg til midten av siden.',
            why: '<code>text-align</code> rører aldri blokken selv. Kortet blir stående nøyaktig der det sto.',
          },
          {
            text: 'Teksten inne i kortet midtstilles; kortet står stille.',
            why: 'Egenskapen bestemmer hvor linjene legger seg inne i blokken. Skal kortet selv midtstilles, trenger du en bredde og <code>margin-inline: auto</code>.',
          },
          {
            text: 'Både kortet og teksten midtstilles.',
            why: 'Bare innholdet. Boksen krever en annen mekanisme.',
          },
          {
            text: 'Ingenting, med mindre kortet har en bredde.',
            why: 'Teksten midtstilles uansett bredde. Det er bare boksen som ikke flytter seg.',
          },
        ],
      },
      {
        q: 'En regel har <code>font-weight: 700</code>, og på neste linje <code>font: 1rem system-ui</code>. Hvilken vekt får elementet?',
        answer: 2,
        options: [
          {
            text: '700 — vekten ble satt først.',
            why: 'Rekkefølgen er nettopp problemet: kortformen kommer etterpå og overstyrer.',
          },
          {
            text: '700 — kortformen nevner ikke vekt, så den lar den stå.',
            why: 'En kortform lar aldri noe stå. Den setter alle egenskapene sine, også dem du ikke skrev.',
          },
          {
            text: '400 — kortformen nullstilte vekten fordi den ikke nevnte den.',
            why: 'Alt <code>font</code> ikke nevner, får startverdien tilbake. Derfor hører kortformen hjemme først i regelen, ikke sist.',
          },
          {
            text: 'Ugyldig — de to kan ikke stå i samme regel.',
            why: 'De kan godt det. Den siste vinner, som alltid.',
          },
        ],
      },
      {
        q: 'Rotstørrelsen er 16px. Et element med <code>font-size: 1.5em</code> ligger inne i et annet element med <code>font-size: 1.5em</code>. Hvor stor blir det innerste?',
        answer: 2,
        options: [
          {
            text: '16px — <code>em</code> måles mot roten.',
            why: 'Det er <code>rem</code> som måles mot roten. <code>em</code> ser på forelderen.',
          },
          {
            text: '24px — begge nivåene gir samme størrelse.',
            why: '24px er det første nivået. Det andre måles mot det, ikke mot roten.',
          },
          {
            text: '36px — <code>em</code> hoper seg opp nedover.',
            why: '16 × 1,5 = 24 på første nivå, og 24 × 1,5 = 36 på det neste. Det er nettopp denne oppsamlingen som skiller <code>em</code> fra <code>rem</code>.',
          },
          {
            text: '48px — 16 ganget med 1,5 to ganger, pluss roten.',
            why: 'Roten legges ikke til på toppen. Hvert nivå ganger bare forelderens størrelse.',
          },
        ],
      },
      {
        q: '<code>body</code> har <code>line-height: 150%</code>. En overskrift inne i den har <code>font-size: 32px</code>. Hvor mye plass får hver linje i overskriften?',
        answer: 0,
        options: [
          {
            text: '24px — den arvet den ferdig utregnede verdien fra <code>body</code>.',
            why: 'En prosent regnes ut hos den som skrev den: 16 × 1,5 = 24px. Barna arver tallet, ikke forholdet — så overskriften får mindre linjehøyde enn sin egen skriftstørrelse, og linjene kolliderer.',
          },
          {
            text: '48px — 150 % av 32px.',
            why: 'Det ville vært svaret med <code>line-height: 1.5</code> uten enhet. Med prosent er regnestykket allerede gjort hos forelderen.',
          },
          {
            text: '32px — linjehøyden følger skriftstørrelsen.',
            why: 'Linjehøyde og skriftstørrelse er to uavhengige verdier.',
          },
          {
            text: 'Det kommer an på skriftfamilien.',
            why: 'Familien påvirker hvordan bokstavene ser ut i linjen, ikke hva <code>line-height</code> regner ut.',
          },
        ],
      },
      {
        q: 'Du skriver <code>font-weight: 600</code>, men familien har bare vanlig og fet. Hva skjer?',
        answer: 1,
        options: [
          {
            text: 'Regelen er ugyldig og ignoreres.',
            why: 'Den er helt gyldig. 600 er en lovlig vekt uansett hvilke skrifter som finnes.',
          },
          {
            text: 'Beregnet verdi er fortsatt 600, men tegningen faller tilbake til det familien har.',
            why: 'CSS-verdien og den tegnede skriften er to forskjellige ting. Nettleseren velger nærmeste tilgjengelige snitt, eller lager en kunstig fet variant. En variabel skrift ville hatt 600 på ekte.',
          },
          {
            text: 'Nettleseren runder verdien ned til 400 i CSS.',
            why: 'Verdien i CSS endres ikke. Det er bare valget av skriftsnitt som endres.',
          },
          {
            text: 'Teksten blir stående uten skrift.',
            why: 'Det skjer aldri. Det finnes alltid et snitt å falle tilbake på.',
          },
        ],
      },
      {
        q: 'Hvilken av disse arves nedover til barna?',
        answer: 3,
        options: [
          {
            text: '<code>width</code>',
            why: 'Den arves ikke. Det ville vært meningsløst om hvert barn overtok forelderens bredde.',
          },
          {
            text: '<code>padding</code>',
            why: 'Arves ikke. Hver boks har sin egen innvendige marg.',
          },
          {
            text: '<code>border</code>',
            why: 'Arves ikke &mdash; ellers ville hvert eneste barn fått sin egen ramme.',
          },
          {
            text: '<code>text-align</code>',
            why: 'Den arves, som alt annet i denne leksjonen. Tekstegenskaper renner nedover i treet; boksegenskaper gjør det ikke.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You set <code>text-align: center</code> on a card that is narrower than the page. What happens?',
        answer: 1,
        options: [
          {
            text: 'The card moves to the middle of the page.',
            why: '<code>text-align</code> never touches the block itself. The card stays exactly where it was.',
          },
          {
            text: 'The text inside the card is centred; the card does not move.',
            why: 'The property decides where lines sit inside the block. To centre the card itself you need a width and <code>margin-inline: auto</code>.',
          },
          {
            text: 'Both the card and the text are centred.',
            why: 'Only the content. The box needs a different mechanism.',
          },
          {
            text: 'Nothing, unless the card has a width.',
            why: 'The text is centred whatever the width. It is only the box that does not move.',
          },
        ],
      },
      {
        q: 'A rule has <code>font-weight: 700</code> and, on the next line, <code>font: 1rem system-ui</code>. What weight does the element get?',
        answer: 2,
        options: [
          {
            text: '700 — the weight was set first.',
            why: 'The order is exactly the problem: the shorthand comes afterwards and overrides it.',
          },
          {
            text: '700 — the shorthand does not mention weight, so it leaves it alone.',
            why: 'A shorthand never leaves anything alone. It sets all of its properties, including the ones you did not write.',
          },
          {
            text: '400 — the shorthand reset the weight because it did not mention it.',
            why: 'Anything <code>font</code> does not mention gets its initial value back. This is why the shorthand belongs at the top of a rule, not the bottom.',
          },
          {
            text: 'Invalid — the two cannot appear in the same rule.',
            why: 'They can. The later one wins, as always.',
          },
        ],
      },
      {
        q: 'The root size is 16px. An element with <code>font-size: 1.5em</code> sits inside another element with <code>font-size: 1.5em</code>. How big is the inner one?',
        answer: 2,
        options: [
          {
            text: '16px — <code>em</code> is measured against the root.',
            why: 'That is <code>rem</code>. <code>em</code> looks at the parent.',
          },
          {
            text: '24px — both levels give the same size.',
            why: '24px is the first level. The second is measured against that, not against the root.',
          },
          {
            text: '36px — <code>em</code> accumulates downwards.',
            why: '16 × 1.5 = 24 at the first level, and 24 × 1.5 = 36 at the next. This accumulation is exactly what separates <code>em</code> from <code>rem</code>.',
          },
          {
            text: '48px — 16 multiplied by 1.5 twice, plus the root.',
            why: 'The root is not added on top. Each level simply multiplies its parent size.',
          },
        ],
      },
      {
        q: '<code>body</code> has <code>line-height: 150%</code>. A heading inside it has <code>font-size: 32px</code>. How much room does each line of the heading get?',
        answer: 0,
        options: [
          {
            text: '24px — it inherited the already computed value from <code>body</code>.',
            why: 'A percentage is worked out on the element that wrote it: 16 × 1.5 = 24px. Children inherit the figure, not the ratio — so the heading gets less line height than its own font size, and the lines collide.',
          },
          {
            text: '48px — 150% of 32px.',
            why: 'That would be the answer with a unitless <code>line-height: 1.5</code>. With a percentage the arithmetic has already been done on the parent.',
          },
          {
            text: '32px — line height follows font size.',
            why: 'Line height and font size are two independent values.',
          },
          {
            text: 'It depends on the font family.',
            why: 'The family affects how the letters sit within the line, not what <code>line-height</code> computes to.',
          },
        ],
      },
      {
        q: 'You write <code>font-weight: 600</code>, but the family only ships regular and bold. What happens?',
        answer: 1,
        options: [
          {
            text: 'The rule is invalid and ignored.',
            why: 'It is perfectly valid. 600 is a legal weight regardless of which fonts exist.',
          },
          {
            text: 'The computed value stays 600, but the drawing falls back to what the family has.',
            why: 'The CSS value and the drawn typeface are two different things. The browser picks the nearest available face, or synthesises a bold. A variable font would have a real 600.',
          },
          {
            text: 'The browser rounds the value down to 400 in CSS.',
            why: 'The CSS value does not change. Only the choice of typeface does.',
          },
          {
            text: 'The text renders with no font at all.',
            why: 'That never happens. There is always a face to fall back to.',
          },
        ],
      },
      {
        q: 'Which of these is inherited by the children?',
        answer: 3,
        options: [
          {
            text: '<code>width</code>',
            why: 'Not inherited. It would be meaningless for every child to take its parent width.',
          },
          {
            text: '<code>padding</code>',
            why: 'Not inherited. Every box has its own padding.',
          },
          {
            text: '<code>border</code>',
            why: 'Not inherited — otherwise every single child would get its own border.',
          },
          {
            text: '<code>text-align</code>',
            why: 'Inherited, like everything else in this lesson. Text properties flow down the tree; box properties do not.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви задаєте <code>text-align: center</code> картці, вужчій за сторінку. Що станеться?',
        answer: 1,
        options: [
          {
            text: 'Картка переїде на середину сторінки.',
            why: '<code>text-align</code> ніколи не чіпає сам блок. Картка лишиться точно там, де була.',
          },
          {
            text: 'Текст усередині картки відцентрується; картка не зрушить.',
            why: 'Властивість визначає, де лягають рядки всередині блока. Щоб відцентрувати саму картку, потрібні ширина і <code>margin-inline: auto</code>.',
          },
          {
            text: 'Відцентруються і картка, і текст.',
            why: 'Лише вміст. Коробці потрібен інший механізм.',
          },
          {
            text: 'Нічого, якщо в картки немає ширини.',
            why: 'Текст відцентрується за будь-якої ширини. Не рухається саме коробка.',
          },
        ],
      },
      {
        q: 'У правилі є <code>font-weight: 700</code>, а наступним рядком <code>font: 1rem system-ui</code>. Яку насиченість отримає елемент?',
        answer: 2,
        options: [
          {
            text: '700 — насиченість задали першою.',
            why: 'Саме порядок і є проблемою: скорочення йде після і перекриває.',
          },
          {
            text: '700 — скорочення не згадує насиченість, тож лишає її як є.',
            why: 'Скорочення ніколи нічого не лишає як є. Воно задає всі свої властивості, зокрема й ті, яких ви не писали.',
          },
          {
            text: '400 — скорочення скинуло насиченість, бо не згадало її.',
            why: 'Усе, чого <code>font</code> не згадує, отримує назад початкове значення. Саме тому скорочення має стояти на початку правила, а не в кінці.',
          },
          {
            text: 'Недійсно — ці двоє не можуть бути в одному правилі.',
            why: 'Можуть. Перемагає пізніше, як завжди.',
          },
        ],
      },
      {
        q: 'Кореневий розмір 16px. Елемент із <code>font-size: 1.5em</code> лежить усередині іншого елемента з <code>font-size: 1.5em</code>. Яким буде внутрішній?',
        answer: 2,
        options: [
          {
            text: '16px — <code>em</code> міряють відносно кореня.',
            why: 'Це <code>rem</code>. <code>em</code> дивиться на батька.',
          },
          {
            text: '24px — обидва рівні дають той самий розмір.',
            why: '24px — це перший рівень. Другий міряють відносно нього, а не відносно кореня.',
          },
          {
            text: '36px — <code>em</code> накопичується вниз.',
            why: '16 × 1,5 = 24 на першому рівні й 24 × 1,5 = 36 на наступному. Саме це накопичення й відрізняє <code>em</code> від <code>rem</code>.',
          },
          {
            text: '48px — 16 помножено на 1,5 двічі плюс корінь.',
            why: 'Корінь зверху не додається. Кожен рівень просто множить розмір свого батька.',
          },
        ],
      },
      {
        q: 'У <code>body</code> задано <code>line-height: 150%</code>. Заголовок усередині має <code>font-size: 32px</code>. Скільки місця дістанеться кожному рядку заголовка?',
        answer: 0,
        options: [
          {
            text: '24px — він успадкував уже обчислене значення від <code>body</code>.',
            why: 'Відсоток обчислюють на тому елементі, що його написав: 16 × 1,5 = 24px. Нащадки успадковують величину, а не співвідношення — тож заголовок дістає менше висоти рядка, ніж його власний розмір шрифту, і рядки налазять.',
          },
          {
            text: '48px — 150% від 32px.',
            why: 'Це була б відповідь для <code>line-height: 1.5</code> без одиниці. З відсотком обчислення вже зроблено на батькові.',
          },
          {
            text: '32px — висота рядка йде за розміром шрифту.',
            why: 'Висота рядка й розмір шрифту — два незалежні значення.',
          },
          {
            text: 'Залежить від родини шрифту.',
            why: 'Родина впливає на те, як літери сидять у рядку, а не на те, що обчислює <code>line-height</code>.',
          },
        ],
      },
      {
        q: 'Ви пишете <code>font-weight: 600</code>, але в родині є лише звичайний і жирний. Що станеться?',
        answer: 1,
        options: [
          {
            text: 'Правило недійсне і його проігнорують.',
            why: 'Воно цілком дійсне. 600 — законна насиченість незалежно від того, які шрифти є.',
          },
          {
            text: 'Обчислене значення лишається 600, але малювання відкочується до того, що має родина.',
            why: 'Значення CSS і намальована гарнітура — дві різні речі. Браузер обирає найближче доступне накреслення або синтезує жирне. Варіативний шрифт мав би справжні 600.',
          },
          {
            text: 'Браузер округлює значення до 400 у самому CSS.',
            why: 'Значення в CSS не змінюється. Змінюється лише вибір накреслення.',
          },
          {
            text: 'Текст відмалюється взагалі без шрифту.',
            why: 'Такого не буває. Завжди є накреслення, до якого можна відкотитися.',
          },
        ],
      },
      {
        q: 'Що з цього успадковується нащадками?',
        answer: 3,
        options: [
          {
            text: '<code>width</code>',
            why: 'Не успадковується. Було б безглуздо, якби кожен нащадок брав ширину батька.',
          },
          {
            text: '<code>padding</code>',
            why: 'Не успадковується. У кожної коробки свій внутрішній відступ.',
          },
          {
            text: '<code>border</code>',
            why: 'Не успадковується — інакше кожен нащадок дістав би власну рамку.',
          },
          {
            text: '<code>text-align</code>',
            why: 'Успадковується, як і все інше в цьому уроці. Текстові властивості течуть униз по дереву; коробкові — ні.',
          },
        ],
      },
    ],
  },
});
