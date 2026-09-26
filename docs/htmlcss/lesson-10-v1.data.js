/*
 * Content of lesson 10 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'HTML: attributtene style og class',
      kicker: 'Leksjon 10 &middot; HTML &amp; CSS',
      title: 'HTML: attributtene style og class',
      lead: 'To attributter som begge fører til CSS, men fra hver sin ende. Det ene legger utseendet rett på elementet; det andre gir elementet et navn og lar utseendet bo et annet sted. Valget mellom dem former hele stilarket ditt.',

      's.style.t': 'CSS på ett enkelt element',
      's.style.d':
        '<p><code>style</code> lar deg skrive CSS rett på ett element. Innholdet er det samme språket som i <code>&lt;style&gt;</code>-elementet fra leksjon 1 — men bare den innerste delen av det.</p>' +
        '<p>En regel i et stilark har tre deler: en velger som sier hvem den gjelder, krøllparenteser, og erklæringene inni. I <code>style</code>-attributtet er velgeren allerede svaret — det er dette elementet — så bare erklæringene blir igjen. Ingen velger, ingen krøllparenteser.</p>',

      's.decl.t': 'Hva som ikke får plass',
      's.decl.d':
        '<p>Fordi det ikke finnes noen velger, finnes det heller ikke noe sted å henge betingelser på. Alt som må si <em>når</em> eller <em>hvilken del</em>, har ingen plass i attributtet.</p>' +
        '<p>Det betyr ingen <code>:hover</code>, ingen <code>::before</code>, ingen <code>@media</code>. Det er ikke en begrensning noen har funnet på for å plage deg — de tingene beskriver en tilstand eller en situasjon, og en tilstand trenger en velger å sitte på.</p>' +
        '<p>Derfor er et element som styles inline, låst til ett utseende. Skal det oppføre seg annerledes på mobil eller når musepekeren er over, må stilen uansett flytte ut i et stilark.</p>',

      's.class.t': 'Et navn mange elementer kan dele',
      's.class.d':
        '<p><code>class</code> gir elementet ett eller flere navn. Verdien er en liste atskilt med mellomrom, så <code>class="price price--campaign"</code> er to navn, ikke ett langt.</p>' +
        '<p>Navnene er frie i begge retninger: ett element kan bære mange klasser, og én klasse kan sitte på hvor mange elementer du vil. Det er nettopp denne mange-til-mange-koblingen som gjør at én linje CSS kan endre hundre steder samtidig.</p>' +
        '<p>Merk at store og små bokstaver teller: <code>Price</code> og <code>price</code> er to forskjellige klasser.</p>',

      's.vs.t': 'Hvilken du skal ta',
      's.vs.d':
        '<p><code>id</code> fra leksjon 8 og <code>class</code> ser ut som samme slags ting og er det ikke. En <code>id</code> er ett navn på ett element, unikt i dokumentet. En klasse er laget for å deles.</p>' +
        '<p>Regelen i praksis: styl med klasser, og bruk <code>id</code> til det <code>id</code> faktisk er til for — et hoppmål for et fragment, målet for en <code>&lt;label for&gt;</code> fra leksjon 5, eller et håndtak et skript skal finne igjen.</p>' +
        '<p>Et element kan ha begge samtidig, og ofte bør det ha det. Overskriften du hopper til, er sjelden den eneste overskriften som skal se sånn ut.</p>',

      's.spec.t': 'Hvorfor inline stil er så vond å overstyre',
      's.spec.d':
        '<p>Når flere erklæringer gjelder samme element og samme egenskap, vinner den mest spesifikke. Et element er svakest, en klasse slår et element, en <code>id</code> slår en klasse — og <code>style</code>-attributtet slår dem alle.</p>' +
        '<p>Det er der smerten ligger. En farge du har skrevet inline, kan ikke overstyres av noen vanlig regel i stilarket ditt. Den eneste utveien er <code>!important</code>, som er en ny runde med det samme problemet: nå er den regelen uoverstyrbar for alle andre.</p>' +
        '<p>Derfor er <code>style</code> den siste utveien, ikke den første. Den fortjener plassen sin når verdien virkelig er unik for ett element og regnet ut i farten — en bredde i prosent fra et skript, en posisjon fra en måling. Den er også fortsatt normal i e-post-HTML, der stilark ofte ikke overlever.</p>',

      's.list.t': 'Å endre klasser fra skript',
      's.list.d':
        '<p><code>classList</code> er måten et skript legger til og fjerner navn: <code>add</code>, <code>remove</code>, <code>toggle</code> og <code>contains</code>. <code>toggle</code> tar også et andre argument, så du kan tvinge den på eller av i stedet for å bytte.</p>' +
        '<p>Det er nesten alltid bedre enn å skrive <code>element.style.noe = ...</code>. Skriver du en klasse, sier skriptet bare <em>hva slags tilstand</em> elementet er i, og stilarket beholder alle avgjørelsene om hvordan den tilstanden ser ut. Den kan da få en overgang, en annen utgave på mobil og en annen i mørk modus — uten at skriptet vet om noe av det.</p>',

      's.name.t': 'Navn som beskriver, ikke pynter',
      's.name.d':
        '<p>Et klassenavn er lettere å leve med når det sier hva noe <em>er</em> enn når det sier hvordan det <em>ser ut</em>. <code>.price</code> overlever at prisen blir grønn; <code>.red</code> gjør ikke det, og en dag står det <code>.red</code> på noe blått.</p>' +
        '<p>Navn som beskriver tilstand, får ofte et prefiks — <code>.is-open</code>, <code>.has-error</code> — nettopp fordi det er dem et skript slår av og på.</p>' +
        '<p>Én ærlig innvending: verktøy som bygger på små bruksklasser, der <code>.mt-4</code> betyr én bestemt marg, snur dette med vilje på hodet, og det fungerer godt for dem som har valgt det. Rådet over gjelder klassene du finner på selv.</p>',

      's.note':
        '<p>Kortversjonen. Styl med <code>class</code>; hold <code>style</code> til verdier som virkelig er unike og regnet ut i farten. Husk at <code>class</code> er en liste atskilt med mellomrom, og at <code>id</code> er noe annet, ikke en sterkere klasse. Fra skript: endre klasser, ikke stiler. Og gi navn etter hva ting er.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'HTML: the attributes style and class',
      kicker: 'Lesson 10 &middot; HTML &amp; CSS',
      title: 'HTML: the attributes style and class',
      lead: 'Two attributes that both lead to CSS, from opposite ends. One puts the appearance straight onto the element; the other gives the element a name and lets the appearance live somewhere else. Choosing between them shapes your whole stylesheet.',

      's.style.t': 'CSS on a single element',
      's.style.d':
        '<p><code>style</code> lets you write CSS directly onto one element. Its content is the same language as the <code>&lt;style&gt;</code> element from lesson 1 — but only the innermost part of it.</p>' +
        '<p>A rule in a stylesheet has three parts: a selector saying who it applies to, braces, and the declarations inside. In the <code>style</code> attribute the selector is already answered — it is this element — so only the declarations remain. No selector, no braces.</p>',

      's.decl.t': 'What will not fit',
      's.decl.d':
        '<p>Because there is no selector, there is nowhere to hang a condition. Anything that has to say <em>when</em> or <em>which part</em> has no place in the attribute.</p>' +
        '<p>That means no <code>:hover</code>, no <code>::before</code>, no <code>@media</code>. This is not a restriction invented to annoy you — those things describe a state or a situation, and a state needs a selector to sit on.</p>' +
        '<p>So an element styled inline is locked to one appearance. The moment it has to look different on a phone, or under the pointer, the styling has to move out into a stylesheet anyway.</p>',

      's.class.t': 'A name many elements can share',
      's.class.d':
        '<p><code>class</code> gives the element one or more names. The value is a space-separated list, so <code>class="price price--campaign"</code> is two names, not one long one.</p>' +
        '<p>The naming is free in both directions: one element can carry many classes, and one class can sit on as many elements as you like. It is exactly this many-to-many link that lets one line of CSS change a hundred places at once.</p>' +
        '<p>Note that case matters: <code>Price</code> and <code>price</code> are two different classes.</p>',

      's.vs.t': 'Which one to reach for',
      's.vs.d':
        '<p><code>id</code> from lesson 8 and <code>class</code> look like the same kind of thing and are not. An <code>id</code> is one name for one element, unique in the document. A class is built to be shared.</p>' +
        '<p>The rule in practice: style with classes, and use <code>id</code> for what an <code>id</code> is actually for — a jump target for a fragment, the target of a <code>&lt;label for&gt;</code> from lesson 5, or a handle for a script to find.</p>' +
        '<p>An element can carry both at once, and often should. The heading you jump to is rarely the only heading meant to look that way.</p>',

      's.spec.t': 'Why inline style is so painful to override',
      's.spec.d':
        '<p>When several declarations apply to the same element and the same property, the most specific one wins. An element is weakest, a class beats an element, an <code>id</code> beats a class — and the <code>style</code> attribute beats all of them.</p>' +
        '<p>That is where the pain is. A colour you wrote inline cannot be overridden by any ordinary rule in your stylesheet. The only way out is <code>!important</code>, which is the same problem again one level up: now that rule cannot be overridden by anyone else.</p>' +
        '<p>So <code>style</code> is the last resort, not the first. It earns its place when a value really is unique to one element and worked out on the spot — a width in per cent from a script, a position from a measurement. It also remains normal in email HTML, where stylesheets often do not survive.</p>',

      's.list.t': 'Changing classes from script',
      's.list.d':
        '<p><code>classList</code> is how a script adds and removes names: <code>add</code>, <code>remove</code>, <code>toggle</code> and <code>contains</code>. <code>toggle</code> also takes a second argument, so you can force it on or off instead of flipping it.</p>' +
        '<p>It is almost always better than writing <code>element.style.something = ...</code>. Setting a class means the script only says <em>what state</em> the element is in, and the stylesheet keeps every decision about how that state looks. It can then get a transition, a different version on a phone and another in dark mode — without the script knowing about any of it.</p>',

      's.name.t': 'Names that describe rather than decorate',
      's.name.d':
        '<p>A class name is easier to live with when it says what something <em>is</em> than when it says how it <em>looks</em>. <code>.price</code> survives the price turning green; <code>.red</code> does not, and one day <code>.red</code> is written on something blue.</p>' +
        '<p>Names describing a state often take a prefix — <code>.is-open</code>, <code>.has-error</code> — precisely because those are the ones a script switches on and off.</p>' +
        '<p>One honest objection: tools built on small utility classes, where <code>.mt-4</code> means one specific margin, invert this on purpose, and it works well for the teams that chose it. The advice above is about the classes you invent yourself.</p>',

      's.note':
        '<p>The short version. Style with <code>class</code>; keep <code>style</code> for values that really are unique and computed on the spot. Remember that <code>class</code> is a space-separated list, and that <code>id</code> is a different thing, not a stronger class. From script, change classes rather than styles. And name things after what they are.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'HTML: атрибути style і class',
      kicker: 'Урок 10 &middot; HTML &amp; CSS',
      title: 'HTML: атрибути style і class',
      lead: 'Два атрибути, які обидва ведуть до CSS, але з протилежних кінців. Один кладе вигляд просто на елемент; другий дає елементу ім’я, а вигляд лишає жити деінде. Вибір між ними формує весь ваш файл стилів.',

      's.style.t': 'CSS на одному елементі',
      's.style.d':
        '<p><code>style</code> дозволяє писати CSS просто на одному елементі. Його вміст — та сама мова, що й в елементі <code>&lt;style&gt;</code> з уроку 1, але лише найглибша її частина.</p>' +
        '<p>Правило у файлі стилів має три частини: селектор, який каже, до кого воно застосовується, фігурні дужки і оголошення всередині. В атрибуті <code>style</code> на селектор уже є відповідь — це цей елемент — тож лишаються самі оголошення. Ні селектора, ні дужок.</p>',

      's.decl.t': 'Що туди не вміститься',
      's.decl.d':
        '<p>Оскільки селектора немає, немає й на що почепити умову. Усе, що має сказати <em>коли</em> або <em>яка частина</em>, в атрибуті місця не має.</p>' +
        '<p>Тобто ніякого <code>:hover</code>, ніякого <code>::before</code>, ніякого <code>@media</code>. Це не обмеження, вигадане вам на зло: ці речі описують стан або ситуацію, а стану потрібен селектор, на якому він сидітиме.</p>' +
        '<p>Тож елемент, оформлений інлайново, замкнений на один вигляд. Щойно він має виглядати інакше на телефоні або під курсором, оформлення однаково доведеться винести у файл стилів.</p>',

      's.class.t': 'Ім’я, яке можуть ділити багато елементів',
      's.class.d':
        '<p><code>class</code> дає елементу одне або кілька імен. Значення — це список, розділений пробілами, тож <code>class="price price--campaign"</code> це два імені, а не одне довге.</p>' +
        '<p>Іменування вільне в обидва боки: один елемент може нести багато класів, а один клас може сидіти на скількох завгодно елементах. Саме цей зв’язок «багато до багатьох» дає змогу одному рядку CSS змінити сотню місць одразу.</p>' +
        '<p>Зверніть увагу: регістр має значення — <code>Price</code> і <code>price</code> це два різні класи.</p>',

      's.vs.t': 'Що брати',
      's.vs.d':
        '<p><code>id</code> з уроку 8 і <code>class</code> виглядають як речі одного роду, але ними не є. <code>id</code> — це одне ім’я для одного елемента, унікальне в документі. Клас створений для того, щоб його ділили.</p>' +
        '<p>Правило на практиці: оформлюйте класами, а <code>id</code> беріть для того, для чого <code>id</code> насправді існує — ціль переходу для фрагмента, ціль для <code>&lt;label for&gt;</code> з уроку 5 або держак, за яким елемент знайде скрипт.</p>' +
        '<p>Елемент може мати обидва одночасно, і часто має. Заголовок, до якого ви переходите, рідко є єдиним заголовком, що має так виглядати.</p>',

      's.spec.t': 'Чому інлайновий стиль так важко перекрити',
      's.spec.d':
        '<p>Коли до того самого елемента і тієї самої властивості застосовується кілька оголошень, перемагає найспецифічніше. Елемент найслабший, клас б’є елемент, <code>id</code> б’є клас — а атрибут <code>style</code> б’є їх усіх.</p>' +
        '<p>Ось де біль. Колір, написаний інлайново, не перекриє жодне звичайне правило вашого файлу стилів. Єдиний вихід — <code>!important</code>, а це та сама проблема на рівень вище: тепер уже це правило не зможе перекрити ніхто.</p>' +
        '<p>Тому <code>style</code> — останній засіб, а не перший. Він заслуговує на своє місце, коли значення справді унікальне для одного елемента й обчислене на льоту: ширина у відсотках зі скрипта, позиція з вимірювання. Він також лишається звичним у HTML для листів, де файли стилів часто не виживають.</p>',

      's.list.t': 'Змінювати класи зі скрипта',
      's.list.d':
        '<p><code>classList</code> — це те, як скрипт додає і прибирає імена: <code>add</code>, <code>remove</code>, <code>toggle</code> і <code>contains</code>. <code>toggle</code> приймає ще й другий аргумент, тож можна примусово ввімкнути або вимкнути, а не перемикати.</p>' +
        '<p>Це майже завжди краще, ніж писати <code>element.style.щось = ...</code>. Встановлюючи клас, скрипт каже лише <em>у якому стані</em> елемент, а всі рішення про те, як цей стан виглядає, лишаються у файлі стилів. Тоді стан може отримати перехід, іншу версію на телефоні й ще іншу в темній темі — і скрипт про це нічого не знатиме.</p>',

      's.name.t': 'Імена, що описують, а не оздоблюють',
      's.name.d':
        '<p>З іменем класу легше жити, коли воно каже, чим щось <em>є</em>, а не як воно <em>виглядає</em>. <code>.price</code> переживе те, що ціна стане зеленою; <code>.red</code> — ні, і одного дня <code>.red</code> висітиме на чомусь синьому.</p>' +
        '<p>Імена, що описують стан, часто дістають префікс — <code>.is-open</code>, <code>.has-error</code> — саме тому, що це ті, які скрипт вмикає й вимикає.</p>' +
        '<p>Одне чесне заперечення: інструменти, побудовані на дрібних утилітарних класах, де <code>.mt-4</code> означає один конкретний відступ, навмисно перевертають це, і командам, які так обрали, це добре працює. Порада вище стосується класів, які ви вигадуєте самі.</p>',

      's.note':
        '<p>Коротко. Оформлюйте через <code>class</code>; лишіть <code>style</code> для значень, які справді унікальні й обчислені на льоту. Пам’ятайте, що <code>class</code> — це список через пробіли, а <code>id</code> — інша річ, а не сильніший клас. Зі скрипта змінюйте класи, а не стилі. І називайте речі за тим, чим вони є.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hvilken av disse kan <em>ikke</em> skrives inne i et <code>style</code>-attributt?',
        answer: 2,
        options: [
          {
            text: '<code>color: #58a6ff</code>',
            why: 'Det er en vanlig erklæring, og erklæringer er nettopp det attributtet tar imot.',
          },
          {
            text: '<code>margin-top: 1rem; font-weight: 700</code>',
            why: 'To erklæringer atskilt med semikolon er helt i orden. Du kan ha så mange du vil.',
          },
          {
            text: '<code>:hover { color: red }</code>',
            why: '<code>:hover</code> er en tilstand, og en tilstand trenger en velger å sitte på. Attributtet har ingen velger, så det finnes ingen plass å henge den på. Det samme gjelder <code>::before</code> og <code>@media</code>.',
          },
          {
            text: '<code>background: rgba(88, 166, 255, 0.1)</code>',
            why: 'Nok en helt vanlig erklæring.',
          },
        ],
      },
      {
        q: 'Et element har <code>class="card card--wide is-open"</code>. Hvor mange klasser har det?',
        answer: 1,
        options: [
          {
            text: 'Én — hele strengen er navnet.',
            why: 'Verdien er en liste, ikke ett navn. Mellomrommene er skilletegn.',
          },
          {
            text: 'Tre — mellomrom skiller navnene.',
            why: '<code>.card</code>, <code>.card--wide</code> og <code>.is-open</code> kan hver for seg velges fra CSS, og hver for seg legges til og fjernes fra skript.',
          },
          {
            text: 'To — bindestrekene binder de to første sammen.',
            why: 'Bindestreker er helt vanlige tegn i et klassenavn. Det er bare mellomrom som skiller.',
          },
          {
            text: 'Det kommer an på CSS-en.',
            why: 'HTML-en avgjør hvilke klasser elementet har. CSS-en bestemmer bare hva den gjør med dem.',
          },
        ],
      },
      {
        q: 'Et element har <code>style="color: blue"</code>. Regelen <code>.price { color: red }</code> i stilarket slår ikke gjennom. Hvorfor?',
        answer: 0,
        options: [
          {
            text: 'Fordi <code>style</code>-attributtet er mer spesifikt enn en hvilken som helst vanlig velger.',
            why: 'Rekkefølgen er element, klasse, <code>id</code>, og så <code>style</code>-attributtet over dem alle. Eneste vanlige utvei er <code>!important</code> — som er grunnen til å unngå inline stil i utgangspunktet.',
          },
          {
            text: 'Fordi <code>.price</code> står feil sted i filen.',
            why: 'Rekkefølgen i filen avgjør bare mellom regler med lik spesifisitet. Her er de ikke like.',
          },
          {
            text: 'Fordi klassenavn ikke kan sette farge.',
            why: 'De kan sette hva som helst. Problemet er hvem som vinner, ikke hva som er lov.',
          },
          {
            text: 'Fordi elementet mangler en <code>id</code>.',
            why: 'En <code>id</code> ville gjort regelen sterkere enn klassen, men fortsatt svakere enn attributtet.',
          },
        ],
      },
      {
        q: 'Et skript skal skjule et element. Hvorfor er <code>classList.add("is-hidden")</code> som regel bedre enn <code>element.style.display = "none"</code>?',
        answer: 2,
        options: [
          {
            text: 'Det er raskere.',
            why: 'Forskjellen i hastighet er uten betydning. Gevinsten er en annen.',
          },
          {
            text: 'Fordi <code>style</code> ikke virker fra JavaScript.',
            why: 'Det virker helt fint. Spørsmålet er om det er lurt.',
          },
          {
            text: 'Fordi skriptet da bare sier hvilken tilstand elementet er i, og stilarket beholder alle avgjørelsene om utseende.',
            why: 'Tilstanden kan da få en overgang, en annen utgave på mobil og en annen i mørk modus, uten at skriptet vet om noe av det. En inline stil låser i tillegg utseendet bak den høyeste spesifisiteten.',
          },
          {
            text: 'Fordi <code>display</code> er utdatert.',
            why: '<code>display</code> er en helt sentral egenskap. Det er måten den settes på som er poenget.',
          },
        ],
      },
      {
        q: 'En overskrift skal både være et hoppmål for <code>#priser</code> og se ut som alle andre seksjonsoverskrifter. Hva skriver du?',
        answer: 1,
        options: [
          {
            text: 'Bare <code>id="priser"</code>, og styl på <code>#priser</code>.',
            why: 'Det virker for denne ene overskriften, men stilen kan ikke deles. Neste seksjon må ha sin egen regel, med samme innhold.',
          },
          {
            text: 'Begge deler: <code>id="priser" class="section-title"</code>.',
            why: '<code>id</code> gjør jobben sin som unikt hoppmål, og klassen deles av alle overskriftene som skal se like ut. De to attributtene er ikke alternativer til hverandre.',
          },
          {
            text: 'Bare <code>class="priser"</code>.',
            why: 'Et fragment leter etter en <code>id</code>, ikke en klasse. Hoppet ville ikke funnet noe.',
          },
          {
            text: 'To <code>id</code>-er, én til hvert formål.',
            why: 'Et element kan bare ha én <code>id</code>, og den må dessuten være unik i dokumentet.',
          },
        ],
      },
      {
        q: 'Hvorfor er <code>.warning</code> som regel et bedre klassenavn enn <code>.red</code>?',
        answer: 2,
        options: [
          {
            text: 'Det er kortere å skrive.',
            why: 'Det er faktisk lengre. Lengden er ikke poenget.',
          },
          {
            text: 'Nettlesere behandler engelske ord raskere.',
            why: 'Et klassenavn er bare en streng. Innholdet betyr ingenting for nettleseren.',
          },
          {
            text: 'Det sier hva elementet er, ikke hvordan det ser ut — så det holder seg sant når designet endrer seg.',
            why: 'Den dagen advarsler blir oransje, må <code>.red</code> enten hete noe annet overalt, eller lyve. <code>.warning</code> trenger bare en ny farge ett sted.',
          },
          {
            text: 'Fordi klassenavn ikke kan inneholde fargenavn.',
            why: 'De kan inneholde nesten hva som helst. Dette er et råd, ikke en regel.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'Which of these can <em>not</em> be written inside a <code>style</code> attribute?',
        answer: 2,
        options: [
          {
            text: '<code>color: #58a6ff</code>',
            why: 'That is an ordinary declaration, and declarations are exactly what the attribute accepts.',
          },
          {
            text: '<code>margin-top: 1rem; font-weight: 700</code>',
            why: 'Two declarations separated by a semicolon are perfectly fine. You can have as many as you like.',
          },
          {
            text: '<code>:hover { color: red }</code>',
            why: '<code>:hover</code> is a state, and a state needs a selector to sit on. The attribute has no selector, so there is nowhere to hang it. The same goes for <code>::before</code> and <code>@media</code>.',
          },
          {
            text: '<code>background: rgba(88, 166, 255, 0.1)</code>',
            why: 'Another perfectly ordinary declaration.',
          },
        ],
      },
      {
        q: 'An element has <code>class="card card--wide is-open"</code>. How many classes does it have?',
        answer: 1,
        options: [
          {
            text: 'One — the whole string is the name.',
            why: 'The value is a list, not a single name. The spaces are separators.',
          },
          {
            text: 'Three — spaces separate the names.',
            why: '<code>.card</code>, <code>.card--wide</code> and <code>.is-open</code> can each be selected from CSS on their own, and each added or removed from script on its own.',
          },
          {
            text: 'Two — the hyphens join the first two together.',
            why: 'Hyphens are ordinary characters in a class name. Only spaces separate.',
          },
          {
            text: 'It depends on the CSS.',
            why: 'The HTML decides which classes the element has. The CSS only decides what to do with them.',
          },
        ],
      },
      {
        q: 'An element has <code>style="color: blue"</code>. The rule <code>.price { color: red }</code> in your stylesheet has no effect. Why?',
        answer: 0,
        options: [
          {
            text: 'Because the <code>style</code> attribute is more specific than any ordinary selector.',
            why: 'The order is element, class, <code>id</code>, and then the <code>style</code> attribute above all of them. The only ordinary way out is <code>!important</code> — which is exactly why inline style is worth avoiding in the first place.',
          },
          {
            text: 'Because <code>.price</code> is in the wrong place in the file.',
            why: 'Order in the file only decides between rules of equal specificity. These are not equal.',
          },
          {
            text: 'Because class names cannot set a colour.',
            why: 'They can set anything. The question is who wins, not what is allowed.',
          },
          {
            text: 'Because the element has no <code>id</code>.',
            why: 'An <code>id</code> would make the rule stronger than the class, but still weaker than the attribute.',
          },
        ],
      },
      {
        q: 'A script needs to hide an element. Why is <code>classList.add("is-hidden")</code> usually better than <code>element.style.display = "none"</code>?',
        answer: 2,
        options: [
          {
            text: 'It is faster.',
            why: 'The speed difference is irrelevant. The benefit is elsewhere.',
          },
          {
            text: 'Because <code>style</code> does not work from JavaScript.',
            why: 'It works perfectly well. The question is whether it is wise.',
          },
          {
            text: 'Because the script then only says what state the element is in, and the stylesheet keeps every decision about appearance.',
            why: 'That state can then get a transition, a different version on a phone and another in dark mode, without the script knowing about any of it. An inline style also locks the appearance behind the highest specificity.',
          },
          {
            text: 'Because <code>display</code> is obsolete.',
            why: '<code>display</code> is a central property. The point is how it gets set.',
          },
        ],
      },
      {
        q: 'A heading has to be both a jump target for <code>#priser</code> and look like every other section heading. What do you write?',
        answer: 1,
        options: [
          {
            text: 'Just <code>id="priser"</code>, and style <code>#priser</code>.',
            why: 'That works for this one heading, but the styling cannot be shared. The next section needs its own rule with the same content in it.',
          },
          {
            text: 'Both: <code>id="priser" class="section-title"</code>.',
            why: 'The <code>id</code> does its job as a unique jump target, and the class is shared by every heading meant to look the same. The two attributes are not alternatives to each other.',
          },
          {
            text: 'Just <code>class="priser"</code>.',
            why: 'A fragment looks for an <code>id</code>, not a class. The jump would find nothing.',
          },
          {
            text: 'Two <code>id</code> values, one for each purpose.',
            why: 'An element can only have one <code>id</code>, and it has to be unique in the document as well.',
          },
        ],
      },
      {
        q: 'Why is <code>.warning</code> usually a better class name than <code>.red</code>?',
        answer: 2,
        options: [
          {
            text: 'It is shorter to type.',
            why: 'It is actually longer. Length is not the point.',
          },
          {
            text: 'Browsers process English words faster.',
            why: 'A class name is just a string. Its contents mean nothing to the browser.',
          },
          {
            text: 'It says what the element is, not how it looks — so it stays true when the design changes.',
            why: 'The day warnings turn orange, <code>.red</code> either has to be renamed everywhere or start lying. <code>.warning</code> just needs a new colour in one place.',
          },
          {
            text: 'Because class names cannot contain colour words.',
            why: 'They can contain almost anything. This is advice, not a rule.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Що з цього <em>не можна</em> написати всередині атрибута <code>style</code>?',
        answer: 2,
        options: [
          {
            text: '<code>color: #58a6ff</code>',
            why: 'Це звичайне оголошення, а оголошення — саме те, що атрибут приймає.',
          },
          {
            text: '<code>margin-top: 1rem; font-weight: 700</code>',
            why: 'Два оголошення через крапку з комою — цілком нормально. Їх може бути скільки завгодно.',
          },
          {
            text: '<code>:hover { color: red }</code>',
            why: '<code>:hover</code> — це стан, а стану потрібен селектор, на якому він сидітиме. В атрибута селектора немає, тож почепити його нема на що. Те саме стосується <code>::before</code> і <code>@media</code>.',
          },
          {
            text: '<code>background: rgba(88, 166, 255, 0.1)</code>',
            why: 'Ще одне цілком звичайне оголошення.',
          },
        ],
      },
      {
        q: 'Елемент має <code>class="card card--wide is-open"</code>. Скільки в нього класів?',
        answer: 1,
        options: [
          {
            text: 'Один — увесь рядок і є іменем.',
            why: 'Значення — це список, а не одне ім’я. Пробіли є роздільниками.',
          },
          {
            text: 'Три — пробіли розділяють імена.',
            why: '<code>.card</code>, <code>.card--wide</code> і <code>.is-open</code> кожен окремо можна обрати з CSS і кожен окремо додати чи прибрати зі скрипта.',
          },
          {
            text: 'Два — дефіси з’єднують перші два.',
            why: 'Дефіси — звичайні символи в імені класу. Розділяють лише пробіли.',
          },
          {
            text: 'Залежить від CSS.',
            why: 'Які класи має елемент, вирішує HTML. CSS вирішує лише, що з ними робити.',
          },
        ],
      },
      {
        q: 'Елемент має <code>style="color: blue"</code>. Правило <code>.price { color: red }</code> у файлі стилів не спрацьовує. Чому?',
        answer: 0,
        options: [
          {
            text: 'Бо атрибут <code>style</code> специфічніший за будь-який звичайний селектор.',
            why: 'Порядок такий: елемент, клас, <code>id</code>, а над усіма — атрибут <code>style</code>. Єдиний звичайний вихід — <code>!important</code>, і саме тому інлайнового стилю варто уникати від початку.',
          },
          {
            text: 'Бо <code>.price</code> стоїть не в тому місці файлу.',
            why: 'Порядок у файлі вирішує лише між правилами однакової специфічності. Тут вони не однакові.',
          },
          {
            text: 'Бо імена класів не можуть задавати колір.',
            why: 'Можуть задавати будь-що. Питання в тому, хто перемагає, а не що дозволено.',
          },
          {
            text: 'Бо в елемента немає <code>id</code>.',
            why: '<code>id</code> зробив би правило сильнішим за клас, але все одно слабшим за атрибут.',
          },
        ],
      },
      {
        q: 'Скрипт має сховати елемент. Чому <code>classList.add("is-hidden")</code> зазвичай краще за <code>element.style.display = "none"</code>?',
        answer: 2,
        options: [
          {
            text: 'Це швидше.',
            why: 'Різниця у швидкості не має значення. Виграш в іншому.',
          },
          {
            text: 'Бо <code>style</code> не працює з JavaScript.',
            why: 'Працює цілком добре. Питання в тому, чи це розумно.',
          },
          {
            text: 'Бо тоді скрипт каже лише, у якому стані елемент, а всі рішення про вигляд лишаються у файлі стилів.',
            why: 'Цей стан може отримати перехід, іншу версію на телефоні й ще іншу в темній темі — і скрипт про це не знатиме. До того ж інлайновий стиль замикає вигляд за найвищою специфічністю.',
          },
          {
            text: 'Бо <code>display</code> застарів.',
            why: '<code>display</code> — одна з головних властивостей. Річ у тім, як саме її встановлюють.',
          },
        ],
      },
      {
        q: 'Заголовок має бути і ціллю переходу для <code>#priser</code>, і виглядати як усі інші заголовки розділів. Що напишете?',
        answer: 1,
        options: [
          {
            text: 'Лише <code>id="priser"</code>, а оформити через <code>#priser</code>.',
            why: 'Для цього одного заголовка спрацює, але оформленням не поділитися. Наступний розділ потребуватиме власного правила з тим самим вмістом.',
          },
          {
            text: 'Обидва: <code>id="priser" class="section-title"</code>.',
            why: '<code>id</code> виконує свою роботу як унікальна ціль переходу, а клас спільний для всіх заголовків, що мають виглядати однаково. Ці два атрибути не є альтернативами один одному.',
          },
          {
            text: 'Лише <code>class="priser"</code>.',
            why: 'Фрагмент шукає <code>id</code>, а не клас. Перехід не знайшов би нічого.',
          },
          {
            text: 'Два значення <code>id</code>, по одному на кожну мету.',
            why: 'Елемент може мати лише один <code>id</code>, і той до того ж має бути унікальним у документі.',
          },
        ],
      },
      {
        q: 'Чому <code>.warning</code> зазвичай краще ім’я класу, ніж <code>.red</code>?',
        answer: 2,
        options: [
          {
            text: 'Його коротше набирати.',
            why: 'Насправді воно довше. Річ не в довжині.',
          },
          {
            text: 'Браузери швидше обробляють англійські слова.',
            why: 'Ім’я класу — це просто рядок. Його зміст нічого не означає для браузера.',
          },
          {
            text: 'Воно каже, чим елемент є, а не як виглядає — тож лишається правдивим, коли дизайн змінюється.',
            why: 'Того дня, коли попередження стануть помаранчевими, <code>.red</code> доведеться або перейменувати всюди, або він почне брехати. <code>.warning</code> потребує лише нового кольору в одному місці.',
          },
          {
            text: 'Бо імена класів не можуть містити назви кольорів.',
            why: 'Вони можуть містити майже будь-що. Це порада, а не правило.',
          },
        ],
      },
    ],
  },
});
