/*
 * Content of lesson 11 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS-velgere: class, id og tagg',
      kicker: 'Leksjon 11 &middot; HTML &amp; CSS',
      title: 'CSS-velgere: class, id og tagg',
      lead: 'Leksjon 10 handlet om erklæringene — hva som skal skje. Dette handler om den andre halvdelen av en regel: hvem det skal skje med. Tre velgere bærer nesten alt du kommer til å skrive.',

      's.rule.t': 'De to halvdelene av en regel',
      's.rule.d':
        '<p>En regel i et stilark består av en velger og en blokk med erklæringer. Erklæringene kjenner du fra leksjon 10; de sa hva som skal skje. Velgeren foran krøllparentesen svarer på det andre spørsmålet: hvem gjelder dette for.</p>' +
        '<p>Det er nettopp denne halvdelen <code>style</code>-attributtet mangler. Der er svaret allerede gitt — dette elementet — og derfor kunne attributtet verken si <code>:hover</code> eller <code>@media</code>. Med en velger får du det tilbake.</p>',

      's.tag.t': 'Velge etter tagg',
      's.tag.d':
        '<p>Skriver du bare navnet på et element, treffer du hvert eneste et av dem i dokumentet. <code>p</code> er alle avsnitt, <code>a</code> er alle lenker.</p>' +
        '<p>Det er den bredeste velgeren som finnes, og derfor brukes den mest til grunnlinjen: linjeavstanden i all brødtekst, fargen på alle lenker. Til alt som gjelder noen avsnitt og ikke andre, er den for stump — da trenger du et navn.</p>' +
        '<p>Taggnavn er det eneste her som ikke bryr seg om store og små bokstaver: i HTML treffer <code>P</code> like godt som <code>p</code>.</p>',

      's.class.t': 'Velge etter klasse',
      's.class.d':
        '<p>Et punktum foran navnet velger hvert element som bærer den klassen. <code>.price</code> bryr seg ikke om hva slags element det er — en <code>&lt;p&gt;</code>, en <code>&lt;span&gt;</code> og en <code>&lt;td&gt;</code> treffes likt så lenge navnet står der.</p>' +
        '<p>Og siden <code>class</code> er en liste, som i leksjon 10, holder det at navnet er ett av flere. <code>class="total price"</code> treffes av både <code>.total</code> og <code>.price</code>.</p>' +
        '<p>I motsetning til taggnavn teller store og små bokstaver: <code>.price</code> finner ikke <code>class="Price"</code>.</p>',

      's.id.t': 'Velge etter id',
      's.id.d':
        '<p>En emneknagg foran navnet velger det ene elementet med den <code>id</code>-en. Siden en <code>id</code> er unik i dokumentet, som i leksjon 8, treffer velgeren per definisjon høyst ett element.</p>' +
        '<p>Den er fullt lovlig og av og til riktig — <code>scroll-margin-top</code> på nettopp det hoppmålet, for eksempel. Men den er en dårlig vane som hovedverktøy: stilen kan ikke gjenbrukes av noe annet element, og velgeren er så sterk at den er vond å overstyre senere. Neste seksjon viser hvor sterk.</p>',

      's.combine.t': 'Å sette sammen, og å liste opp',
      's.combine.d':
        '<p>Skriver du to velgere inntil hverandre uten mellomrom, må begge være sanne om det samme elementet. <code>p.price</code> er et avsnitt som også bærer klassen — ikke et avsnitt og en klasse hver for seg.</p>' +
        '<p>Komma betyr det motsatte: hold dem fra hverandre, og det holder at én av dem treffer. <code>h1, h2, h3</code> er én regel som gjelder alle tre.</p>' +
        '<p>Én felle er verdt å kjenne. Er én enkelt velger i en kommaliste ugyldig — en skrivefeil, eller noe nettleseren ikke kjenner — kastes hele regelen, også de delene som var riktige. Én feil i listen tar med seg resten.</p>',

      's.desc.t': 'Mellomrommet er en velger i seg selv',
      's.desc.d':
        '<p>Et mellomrom mellom to velgere betyr «inne i». <code>.card p</code> er et avsnitt et eller annet sted inne i <code>.card</code>, uansett hvor dypt. <code>&gt;</code> strammer det inn til bare direkte barn.</p>' +
        '<p><code>+</code> og <code>~</code> ser sidelengs i stedet for nedover: den umiddelbart neste søskenen, og alle senere søsken.</p>' +
        '<p>Legg merke til hvor mye det ene tegnet gjør. <code>.card.is-open</code> er ett element med begge klassene; <code>.card .is-open</code> er noe med <code>.is-open</code> inne i noe med <code>.card</code>. Et mellomrom for mye er en av de vanligste CSS-feilene som finnes.</p>',

      's.spec.t': 'Å telle spesifisitet',
      's.spec.d':
        '<p>Leksjon 10 viste rangstigen; her er regnestykket bak den. Tell tre ting i velgeren: antall <code>id</code>-er, antall klasser, antall taggnavn. Det gir et talltrippel, og høyere trippel vinner — venstre kolonne først, og den kan aldri veies opp av de andre.</p>' +
        '<p>Derfor slår <code>#total</code> (1,0,0) en <code>.card .price .value</code> (0,3,0), uansett hvor mange klasser du stabler opp. Og derfor er et par korte klassevelgere lettere å leve med enn én lang: de er enklere å overstyre den dagen du må.</p>' +
        '<p>Er to velgere helt like i trippel, vinner den som står sist i stilarket. Rekkefølge avgjør bare ved uavgjort.</p>',

      's.note':
        '<p>Kortversjonen. Tagg for grunnlinjen, klasse for alt annet, <code>id</code> nesten aldri i CSS. Ingen mellomrom betyr samme element, mellomrom betyr inne i, komma betyr eller. Tell <code>id</code>-er, klasser og tagger når to regler slåss — og hold velgerne korte, så slipper du å slåss.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS selectors: class, id and tag',
      kicker: 'Lesson 11 &middot; HTML &amp; CSS',
      title: 'CSS selectors: class, id and tag',
      lead: 'Lesson 10 was about the declarations — what should happen. This is about the other half of a rule: who it should happen to. Three selectors carry almost everything you will ever write.',

      's.rule.t': 'The two halves of a rule',
      's.rule.d':
        '<p>A rule in a stylesheet is a selector plus a block of declarations. You know the declarations from lesson 10; they said what should happen. The selector in front of the brace answers the other question: who does this apply to.</p>' +
        '<p>This is exactly the half the <code>style</code> attribute is missing. There the answer is already given — this element — and that is why the attribute could not say <code>:hover</code> or <code>@media</code>. A selector gives it back.</p>',

      's.tag.t': 'Selecting by tag',
      's.tag.d':
        '<p>Write the name of an element on its own and you match every single one of them in the document. <code>p</code> is all paragraphs, <code>a</code> is all links.</p>' +
        '<p>It is the broadest selector there is, which is why it is used mostly for the baseline: the line height of all body text, the colour of all links. For anything that applies to some paragraphs and not others it is too blunt — that is when you need a name.</p>' +
        '<p>Tag names are the one thing here that ignores case: in HTML, <code>P</code> matches just as well as <code>p</code>.</p>',

      's.class.t': 'Selecting by class',
      's.class.d':
        '<p>A full stop in front of a name selects every element carrying that class. <code>.price</code> does not care what kind of element it is — a <code>&lt;p&gt;</code>, a <code>&lt;span&gt;</code> and a <code>&lt;td&gt;</code> are all matched equally, as long as the name is there.</p>' +
        '<p>And since <code>class</code> is a list, as in lesson 10, it is enough for the name to be one of several. <code>class="total price"</code> is matched by both <code>.total</code> and <code>.price</code>.</p>' +
        '<p>Unlike tag names, case counts here: <code>.price</code> will not find <code>class="Price"</code>.</p>',

      's.id.t': 'Selecting by id',
      's.id.d':
        '<p>A hash in front of a name selects the one element with that <code>id</code>. Since an <code>id</code> is unique in the document, as in lesson 8, the selector matches at most one element by definition.</p>' +
        '<p>It is perfectly legal and occasionally right — <code>scroll-margin-top</code> on that particular jump target, for instance. But it is a poor habit as your main tool: the styling cannot be reused by any other element, and the selector is strong enough to be awkward to override later. The next section shows how strong.</p>',

      's.combine.t': 'Stacking, and listing',
      's.combine.d':
        '<p>Write two selectors against each other with no space and both have to be true of the same element. <code>p.price</code> is a paragraph that also carries the class — not a paragraph and a class separately.</p>' +
        '<p>A comma means the opposite: keep them apart, and any one of them matching is enough. <code>h1, h2, h3</code> is one rule that applies to all three.</p>' +
        '<p>One trap is worth knowing. If a single selector in a comma list is invalid — a typo, or something the browser does not recognise — the whole rule is thrown away, including the parts that were fine. One mistake in the list takes the rest with it.</p>',

      's.desc.t': 'The space is a selector of its own',
      's.desc.d':
        '<p>A space between two selectors means "inside". <code>.card p</code> is a paragraph somewhere inside <code>.card</code>, however deep. <code>&gt;</code> tightens that to direct children only.</p>' +
        '<p><code>+</code> and <code>~</code> look sideways instead of downwards: the immediately next sibling, and any later sibling.</p>' +
        '<p>Notice how much that one character does. <code>.card.is-open</code> is one element with both classes; <code>.card .is-open</code> is something with <code>.is-open</code> inside something with <code>.card</code>. One space too many is among the most common CSS mistakes there is.</p>',

      's.spec.t': 'Counting specificity',
      's.spec.d':
        '<p>Lesson 10 showed the ladder; here is the arithmetic behind it. Count three things in the selector: how many <code>id</code> values, how many classes, how many tag names. That gives a triple of numbers, and the higher triple wins — leftmost column first, and it can never be outweighed by the others.</p>' +
        '<p>That is why <code>#total</code> (1,0,0) beats <code>.card .price .value</code> (0,3,0), no matter how many classes you stack up. And it is why a couple of short class selectors are easier to live with than one long one: they are simpler to override on the day you have to.</p>' +
        '<p>If two selectors have exactly the same triple, the one written later in the stylesheet wins. Order only decides ties.</p>',

      's.note':
        '<p>The short version. Tag for the baseline, class for everything else, <code>id</code> almost never in CSS. No space means the same element, a space means inside, a comma means or. Count ids, classes and tags when two rules fight — and keep selectors short so you rarely have to.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Селектори CSS: class, id і тег',
      kicker: 'Урок 11 &middot; HTML &amp; CSS',
      title: 'Селектори CSS: class, id і тег',
      lead: 'Урок 10 був про оголошення — що має статися. Цей про другу половину правила: з ким це має статися. Три селектори витримують майже все, що ви колись напишете.',

      's.rule.t': 'Дві половини правила',
      's.rule.d':
        '<p>Правило у файлі стилів — це селектор плюс блок оголошень. Оголошення ви знаєте з уроку 10; вони казали, що має статися. Селектор перед дужкою відповідає на інше питання: до кого це застосовується.</p>' +
        '<p>Саме цієї половини бракує атрибуту <code>style</code>. Там відповідь уже дано — цей елемент — і саме тому атрибут не міг сказати ні <code>:hover</code>, ні <code>@media</code>. Селектор повертає цю можливість.</p>',

      's.tag.t': 'Вибір за тегом',
      's.tag.d':
        '<p>Напишіть саму лише назву елемента — і ви влучите в кожен такий елемент у документі. <code>p</code> — це всі абзаци, <code>a</code> — усі посилання.</p>' +
        '<p>Це найширший селектор, який існує, і тому його вживають переважно для базового шару: міжрядковий інтервал усього основного тексту, колір усіх посилань. Для чогось, що стосується одних абзаців і не стосується інших, він заширокий — отут і потрібне ім’я.</p>' +
        '<p>Назви тегів — єдине тут, що не зважає на регістр: у HTML <code>P</code> влучає так само, як <code>p</code>.</p>',

      's.class.t': 'Вибір за класом',
      's.class.d':
        '<p>Крапка перед іменем обирає кожен елемент, що несе цей клас. <code>.price</code> байдуже, який це елемент: <code>&lt;p&gt;</code>, <code>&lt;span&gt;</code> і <code>&lt;td&gt;</code> влучаються однаково, аби ім’я було на місці.</p>' +
        '<p>А оскільки <code>class</code> — це список, як в уроці 10, достатньо, щоб ім’я було одним із кількох. У <code>class="total price"</code> влучають і <code>.total</code>, і <code>.price</code>.</p>' +
        '<p>На відміну від назв тегів, регістр тут має значення: <code>.price</code> не знайде <code>class="Price"</code>.</p>',

      's.id.t': 'Вибір за id',
      's.id.d':
        '<p>Решітка перед іменем обирає той один елемент, що має цей <code>id</code>. Оскільки <code>id</code> унікальний у документі, як в уроці 8, такий селектор за визначенням влучає щонайбільше в один елемент.</p>' +
        '<p>Він цілком законний і подеколи доречний — наприклад, <code>scroll-margin-top</code> саме на тій цілі переходу. Але як основний інструмент це погана звичка: оформлення не зможе перевикористати жоден інший елемент, а сам селектор настільки сильний, що потім його незручно перекривати. Наскільки сильний — у наступному розділі.</p>',

      's.combine.t': 'Складати разом і перелічувати',
      's.combine.d':
        '<p>Напишіть два селектори впритул, без пробілу — і обидва мають бути правдою про той самий елемент. <code>p.price</code> — це абзац, який до того ж несе клас, а не абзац і клас окремо.</p>' +
        '<p>Кома означає протилежне: розведіть їх, і достатньо, щоб влучив будь-який один. <code>h1, h2, h3</code> — це одне правило, що діє для всіх трьох.</p>' +
        '<p>Одну пастку варто знати. Якщо бодай один селектор у переліку через кому недійсний — одрук або щось, чого браузер не знає — усе правило відкидається, разом із тими частинами, що були правильні. Одна помилка в переліку тягне за собою решту.</p>',

      's.desc.t': 'Пробіл — це теж селектор',
      's.desc.d':
        '<p>Пробіл між двома селекторами означає «всередині». <code>.card p</code> — це абзац десь усередині <code>.card</code>, хоч як глибоко. <code>&gt;</code> звужує це до самих лише прямих нащадків.</p>' +
        '<p><code>+</code> і <code>~</code> дивляться вбік, а не вглиб: безпосередньо наступний сусід і будь-який пізніший сусід.</p>' +
        '<p>Зверніть увагу, скільки робить один символ. <code>.card.is-open</code> — це один елемент з обома класами; <code>.card .is-open</code> — це щось із <code>.is-open</code> усередині чогось із <code>.card</code>. Зайвий пробіл — одна з найпоширеніших помилок у CSS.</p>',

      's.spec.t': 'Рахувати специфічність',
      's.spec.d':
        '<p>Урок 10 показав драбину; ось арифметика за нею. Порахуйте в селекторі три речі: скільки <code>id</code>, скільки класів, скільки назв тегів. Виходить трійка чисел, і перемагає вища трійка — спершу ліва колонка, і переважити її іншими неможливо.</p>' +
        '<p>Саме тому <code>#total</code> (1,0,0) б’є <code>.card .price .value</code> (0,3,0), хоч скільки класів ви складете. І саме тому пара коротких класових селекторів легша в житті, ніж один довгий: їх простіше перекрити того дня, коли доведеться.</p>' +
        '<p>Якщо у двох селекторів трійка однакова, перемагає той, що написаний пізніше у файлі стилів. Порядок вирішує лише нічию.</p>',

      's.note':
        '<p>Коротко. Тег — для базового шару, клас — для всього іншого, <code>id</code> у CSS майже ніколи. Без пробілу — той самий елемент, пробіл — усередині, кома — або. Рахуйте id, класи й теги, коли два правила б’ються, і тримайте селектори короткими, щоб битися доводилося рідко.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva er forskjellen på <code>.card.is-open</code> og <code>.card .is-open</code>?',
        answer: 2,
        options: [
          {
            text: 'Ingen — mellomrom i en velger betyr ingenting.',
            why: 'Mellomrommet er en velger i seg selv. Det er nettopp derfor denne feilen er så vanlig.',
          },
          {
            text: 'Den første er ugyldig.',
            why: 'Begge er helt gyldige. De betyr bare to forskjellige ting.',
          },
          {
            text: 'Den første er ett element med begge klassene; den andre er <code>.is-open</code> inne i <code>.card</code>.',
            why: 'Uten mellomrom må begge være sanne om det samme elementet. Med mellomrom snakker du om to elementer, der det ene ligger inni det andre.',
          },
          {
            text: 'Den andre treffer bare direkte barn.',
            why: 'Det ville vært <code>.card &gt; .is-open</code>. Et mellomrom går så dypt som det trengs.',
          },
        ],
      },
      {
        q: 'Regelen <code>.price { font-weight: 700 }</code> slår ikke inn på <code>&lt;p class="Price"&gt;</code>. Hvorfor?',
        answer: 1,
        options: [
          {
            text: 'Fordi <code>.price</code> bare treffer <code>&lt;span&gt;</code>.',
            why: 'En klassevelger bryr seg ikke om elementtype. Den ville truffet en <code>&lt;p&gt;</code> like godt.',
          },
          {
            text: 'Fordi klassenavn skiller mellom store og små bokstaver.',
            why: '<code>Price</code> og <code>price</code> er to forskjellige navn. Taggnavn er det eneste her som ikke bryr seg om forskjellen.',
          },
          {
            text: 'Fordi <code>font-weight</code> krever en <code>id</code>.',
            why: 'Alle egenskaper virker fra alle slags velgere. Problemet er at velgeren ikke treffer.',
          },
          {
            text: 'Fordi klassen må stå alene i attributtet.',
            why: 'Den kan godt være én av flere; <code>class="total price"</code> treffes av <code>.price</code>. Her er det stavemåten som er feil.',
          },
        ],
      },
      {
        q: 'Hvilken velger vinner over den andre: <code>#total</code> eller <code>.card .price .value</code>?',
        answer: 0,
        options: [
          {
            text: '<code>#total</code> — én <code>id</code> slår et hvilket som helst antall klasser.',
            why: 'Trippelet er (1,0,0) mot (0,3,0). Venstre kolonne avgjør først, og den kan aldri veies opp av de til høyre, uansett hvor mange du stabler.',
          },
          {
            text: '<code>.card .price .value</code> — tre velgere slår én.',
            why: 'Det er ikke antallet som teller, men hvilken kolonne de havner i. Tre klasser er fortsatt null <code>id</code>-er.',
          },
          {
            text: 'Den som står sist i stilarket.',
            why: 'Rekkefølge avgjør bare når trippelet er helt likt. Her er det ikke det.',
          },
          {
            text: 'Den som er kortest.',
            why: 'Lengde har ingenting med spesifisitet å gjøre.',
          },
        ],
      },
      {
        q: 'Du skriver <code>h1, h2, ::placeholderr { margin: 0 }</code> — med en skrivefeil i den siste. Hva skjer med <code>h1</code> og <code>h2</code>?',
        answer: 2,
        options: [
          {
            text: 'De virker som normalt; bare den siste delen hoppes over.',
            why: 'Det ville vært rimelig, men er ikke slik det fungerer. En kommaliste vurderes under ett.',
          },
          {
            text: 'De virker, men bare i noen nettlesere.',
            why: 'Oppførselen er den samme overalt: hele regelen faller.',
          },
          {
            text: 'De mister også regelen — én ugyldig velger i listen kaster hele regelen.',
            why: 'Derfor bør velgere du er usikker på, stå i sin egen regel, så de ikke kan ta med seg de andre i fallet.',
          },
          {
            text: 'Nettleseren retter skrivefeilen.',
            why: 'Den gjetter ikke. Den kjenner ikke velgeren, og da er listen ugyldig.',
          },
        ],
      },
      {
        q: 'Hva er spesifisiteten til <code>p.price</code>?',
        answer: 1,
        options: [
          {
            text: '(0, 0, 2) — to velgere, begge tagger.',
            why: '<code>.price</code> er en klasse, ikke en tagg. Bare <code>p</code> havner i tagg-kolonnen.',
          },
          {
            text: '(0, 1, 1) — én klasse og én tagg.',
            why: 'Tell hver del for seg og legg den i sin kolonne: <code>p</code> er en tagg, <code>.price</code> er en klasse. Ingen <code>id</code>-er.',
          },
          {
            text: '(1, 1, 0) — å sette dem sammen teller som en <code>id</code>.',
            why: 'Å sette velgere sammen endrer ikke hvilken kolonne delene hører til. Bare en faktisk <code>#id</code> fyller den første.',
          },
          {
            text: '(0, 1, 0) — klassen overskygger taggen.',
            why: 'Ingenting overskygges. Begge deler telles, hver i sin kolonne.',
          },
        ],
      },
      {
        q: 'Du vil at alle avsnitt i dokumentet skal ha samme linjeavstand. Hvilken velger passer best?',
        answer: 0,
        options: [
          {
            text: '<code>p</code>',
            why: 'Det er nettopp det taggvelgeren er til for: grunnlinjen som gjelder alle. Ingen klasser å huske, og lett å overstyre senere fordi den er så svak.',
          },
          {
            text: '<code>.paragraph</code> på hvert avsnitt',
            why: 'Det virker, men du må skrive klassen på hvert eneste avsnitt for alltid — og for noe som gjelder alle, gir det ingen gevinst.',
          },
          {
            text: '<code>#content p</code>',
            why: 'Nå gjelder det bare avsnitt inne i ett bestemt element, og velgeren har fått en <code>id</code> som gjør den vond å overstyre.',
          },
          {
            text: '<code>*</code>',
            why: 'Den treffer hvert eneste element i dokumentet, ikke bare avsnittene. Linjeavstanden ville landet overalt.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'What is the difference between <code>.card.is-open</code> and <code>.card .is-open</code>?',
        answer: 2,
        options: [
          {
            text: 'None — whitespace in a selector means nothing.',
            why: 'The space is a selector in its own right. That is exactly why this mistake is so common.',
          },
          {
            text: 'The first one is invalid.',
            why: 'Both are perfectly valid. They simply mean two different things.',
          },
          {
            text: 'The first is one element with both classes; the second is <code>.is-open</code> inside <code>.card</code>.',
            why: 'With no space, both have to be true of the same element. With a space you are talking about two elements, one inside the other.',
          },
          {
            text: 'The second matches direct children only.',
            why: 'That would be <code>.card &gt; .is-open</code>. A space reaches as deep as it needs to.',
          },
        ],
      },
      {
        q: 'The rule <code>.price { font-weight: 700 }</code> has no effect on <code>&lt;p class="Price"&gt;</code>. Why?',
        answer: 1,
        options: [
          {
            text: 'Because <code>.price</code> only matches <code>&lt;span&gt;</code>.',
            why: 'A class selector does not care about element type. It would match a <code>&lt;p&gt;</code> just as well.',
          },
          {
            text: 'Because class names are case-sensitive.',
            why: '<code>Price</code> and <code>price</code> are two different names. Tag names are the one thing here that ignores the difference.',
          },
          {
            text: 'Because <code>font-weight</code> requires an <code>id</code>.',
            why: 'Every property works from every kind of selector. The problem is that the selector does not match.',
          },
          {
            text: 'Because the class has to be alone in the attribute.',
            why: 'It can be one of several; <code>class="total price"</code> is matched by <code>.price</code>. Here it is the spelling that is wrong.',
          },
        ],
      },
      {
        q: 'Which selector wins over the other: <code>#total</code> or <code>.card .price .value</code>?',
        answer: 0,
        options: [
          {
            text: '<code>#total</code> — one <code>id</code> beats any number of classes.',
            why: 'The triples are (1,0,0) against (0,3,0). The leftmost column decides first, and it can never be outweighed by the ones to its right, however many you stack up.',
          },
          {
            text: '<code>.card .price .value</code> — three selectors beat one.',
            why: 'It is not the count that matters but which column they land in. Three classes are still zero ids.',
          },
          {
            text: 'Whichever comes last in the stylesheet.',
            why: 'Order only decides when the triples are exactly equal. Here they are not.',
          },
          {
            text: 'Whichever is shorter.',
            why: 'Length has nothing to do with specificity.',
          },
        ],
      },
      {
        q: 'You write <code>h1, h2, ::placeholderr { margin: 0 }</code> — with a typo in the last one. What happens to <code>h1</code> and <code>h2</code>?',
        answer: 2,
        options: [
          {
            text: 'They work as normal; only the last part is skipped.',
            why: 'That would be reasonable, but it is not how it works. A comma list is judged as one thing.',
          },
          {
            text: 'They work, but only in some browsers.',
            why: 'The behaviour is the same everywhere: the whole rule is dropped.',
          },
          {
            text: 'They lose the rule too — one invalid selector throws the whole rule away.',
            why: 'This is why a selector you are unsure about belongs in a rule of its own, where it cannot take the others down with it.',
          },
          {
            text: 'The browser corrects the typo.',
            why: 'It does not guess. It does not recognise the selector, and that makes the list invalid.',
          },
        ],
      },
      {
        q: 'What is the specificity of <code>p.price</code>?',
        answer: 1,
        options: [
          {
            text: '(0, 0, 2) — two selectors, both tags.',
            why: '<code>.price</code> is a class, not a tag. Only <code>p</code> lands in the tag column.',
          },
          {
            text: '(0, 1, 1) — one class and one tag.',
            why: 'Count each part separately and put it in its column: <code>p</code> is a tag, <code>.price</code> is a class. No ids.',
          },
          {
            text: '(1, 1, 0) — stacking them counts as an <code>id</code>.',
            why: 'Stacking selectors does not change which column the parts belong to. Only an actual <code>#id</code> fills the first one.',
          },
          {
            text: '(0, 1, 0) — the class overrides the tag.',
            why: 'Nothing is overridden. Both parts are counted, each in its own column.',
          },
        ],
      },
      {
        q: 'You want every paragraph in the document to share the same line height. Which selector fits best?',
        answer: 0,
        options: [
          {
            text: '<code>p</code>',
            why: 'That is exactly what the tag selector is for: the baseline that applies to all of them. No classes to remember, and easy to override later precisely because it is so weak.',
          },
          {
            text: '<code>.paragraph</code> on every paragraph',
            why: 'It works, but you have to write the class on every paragraph forever — and for something that applies to all of them, it buys nothing.',
          },
          {
            text: '<code>#content p</code>',
            why: 'Now it only covers paragraphs inside one particular element, and the selector has picked up an <code>id</code> that makes it awkward to override.',
          },
          {
            text: '<code>*</code>',
            why: 'That matches every element in the document, not just the paragraphs. The line height would land everywhere.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Яка різниця між <code>.card.is-open</code> і <code>.card .is-open</code>?',
        answer: 2,
        options: [
          {
            text: 'Жодної — пробіл у селекторі нічого не означає.',
            why: 'Пробіл сам по собі є селектором. Саме тому ця помилка така поширена.',
          },
          {
            text: 'Перший недійсний.',
            why: 'Обидва цілком дійсні. Вони просто означають різні речі.',
          },
          {
            text: 'Перший — це один елемент з обома класами; другий — <code>.is-open</code> усередині <code>.card</code>.',
            why: 'Без пробілу обидва мають бути правдою про той самий елемент. З пробілом ідеться про два елементи, один усередині іншого.',
          },
          {
            text: 'Другий влучає лише в прямих нащадків.',
            why: 'Це був би <code>.card &gt; .is-open</code>. Пробіл сягає так глибоко, як треба.',
          },
        ],
      },
      {
        q: 'Правило <code>.price { font-weight: 700 }</code> не діє на <code>&lt;p class="Price"&gt;</code>. Чому?',
        answer: 1,
        options: [
          {
            text: 'Бо <code>.price</code> влучає лише в <code>&lt;span&gt;</code>.',
            why: 'Класовому селектору байдуже до типу елемента. Він влучив би в <code>&lt;p&gt;</code> так само добре.',
          },
          {
            text: 'Бо імена класів чутливі до регістру.',
            why: '<code>Price</code> і <code>price</code> — два різні імені. Назви тегів — єдине тут, що цю різницю ігнорує.',
          },
          {
            text: 'Бо <code>font-weight</code> потребує <code>id</code>.',
            why: 'Будь-яка властивість працює з будь-яким селектором. Проблема в тому, що селектор не влучає.',
          },
          {
            text: 'Бо клас має бути єдиним в атрибуті.',
            why: 'Він може бути одним із кількох; у <code>class="total price"</code> влучає <code>.price</code>. Тут хибне саме написання.',
          },
        ],
      },
      {
        q: 'Який селектор перемагає: <code>#total</code> чи <code>.card .price .value</code>?',
        answer: 0,
        options: [
          {
            text: '<code>#total</code> — один <code>id</code> б’є будь-яку кількість класів.',
            why: 'Трійки — (1,0,0) проти (0,3,0). Ліва колонка вирішує першою, і переважити її правими неможливо, хоч скільки їх складай.',
          },
          {
            text: '<code>.card .price .value</code> — три селектори б’ють один.',
            why: 'Важлива не кількість, а те, в яку колонку вони потрапляють. Три класи — це все одно нуль id.',
          },
          {
            text: 'Той, що стоїть пізніше у файлі стилів.',
            why: 'Порядок вирішує лише тоді, коли трійки цілком однакові. Тут це не так.',
          },
          {
            text: 'Той, що коротший.',
            why: 'Довжина до специфічності стосунку не має.',
          },
        ],
      },
      {
        q: 'Ви пишете <code>h1, h2, ::placeholderr { margin: 0 }</code> — з одруком в останньому. Що станеться з <code>h1</code> і <code>h2</code>?',
        answer: 2,
        options: [
          {
            text: 'Вони працюватимуть як зазвичай; пропуститься лише остання частина.',
            why: 'Це було б розумно, але так воно не працює. Перелік через кому оцінюється як одне ціле.',
          },
          {
            text: 'Вони працюватимуть, але лише в деяких браузерах.',
            why: 'Поведінка однакова всюди: усе правило відкидається.',
          },
          {
            text: 'Вони теж втратять правило — один недійсний селектор відкидає все правило.',
            why: 'Саме тому селектор, у якому ви не певні, має жити в окремому правилі, де він не потягне за собою інших.',
          },
          {
            text: 'Браузер виправить одрук.',
            why: 'Він не вгадує. Він не впізнає селектор, і через це перелік стає недійсним.',
          },
        ],
      },
      {
        q: 'Яка специфічність у <code>p.price</code>?',
        answer: 1,
        options: [
          {
            text: '(0, 0, 2) — два селектори, обидва теги.',
            why: '<code>.price</code> — це клас, а не тег. У колонку тегів потрапляє лише <code>p</code>.',
          },
          {
            text: '(0, 1, 1) — один клас і один тег.',
            why: 'Рахуйте кожну частину окремо й кладіть у свою колонку: <code>p</code> це тег, <code>.price</code> це клас. Жодного id.',
          },
          {
            text: '(1, 1, 0) — складання їх разом рахується як <code>id</code>.',
            why: 'Складання селекторів не змінює того, до якої колонки належать частини. Першу заповнює лише справжній <code>#id</code>.',
          },
          {
            text: '(0, 1, 0) — клас перекриває тег.',
            why: 'Ніщо не перекривається. Рахуються обидві частини, кожна у своїй колонці.',
          },
        ],
      },
      {
        q: 'Ви хочете, щоб усі абзаци в документі мали однаковий міжрядковий інтервал. Який селектор пасує найкраще?',
        answer: 0,
        options: [
          {
            text: '<code>p</code>',
            why: 'Саме для цього тегові селектори й існують: базовий шар, що стосується всіх. Жодних класів пам’ятати не треба, і перекрити потім легко — якраз тому, що він такий слабкий.',
          },
          {
            text: '<code>.paragraph</code> на кожному абзаці',
            why: 'Спрацює, але клас доведеться писати на кожному абзаці назавжди — а для того, що стосується всіх, це не дає нічого.',
          },
          {
            text: '<code>#content p</code>',
            why: 'Тепер це охоплює лише абзаци всередині одного конкретного елемента, а селектор набув <code>id</code>, через який його незручно перекривати.',
          },
          {
            text: '<code>*</code>',
            why: 'Він влучає в кожен елемент документа, а не лише в абзаци. Інтервал приземлився б усюди.',
          },
        ],
      },
    ],
  },
});
