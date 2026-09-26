/*
 * Content of lesson 17 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson introduces the model only. Individual flex
 * properties belong to lessons 18-20, and the last section maps them.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS: flex box',
      kicker: 'Leksjon 17 &middot; HTML &amp; CSS',
      title: 'CSS: flex box',
      lead: 'Den første av flere leksjoner om flex. Denne handler ikke om en eneste egenskap, men om modellen: hva som skjer i det du skriver <code>display: flex</code>, og hvem som bestemmer hva etterpå.',

      's.on.t': 'Å slå det på',
      's.on.d':
        '<p>Flex slås på ett sted: på beholderen. Fra da av gjelder et annet sett med regler for barna dens.</p>' +
        '<p>Det er verdt å legge merke til hvor lite du trengte å skrive. Én erklæring endrer hvordan hele raden regnes ut, og gir deg fire ting du ellers måtte bedt om hver for seg. Resten av flex er stort sett finjustering av det du allerede fikk.</p>',

      's.two.t': 'To ordforråd, ikke ett',
      's.two.d':
        '<p>Flex har to sett med egenskaper, og de bor på hver sin side. Noen hører hjemme på beholderen og beskriver hvordan raden som helhet oppfører seg. Andre hører hjemme på et enkelt element og beskriver hvordan nettopp det skal oppføre seg blant de andre.</p>' +
        '<p>Ingen egenskap hører hjemme begge steder. Det høres innlysende ut, og er likevel den vanligste kilden til forvirring: <code>justify-content</code> på et barn gjør ingenting, og <code>align-self</code> på beholderen gjør ingenting. Når en flex-regel ser ut til å bli ignorert, er det som oftest fordi den står på feil side.</p>' +
        '<p>Siste seksjon i denne leksjonen er et kart over hvilken side hver av dem hører til &mdash; og hvilken av de neste leksjonene som tar den.</p>',

      's.items.t': 'Hva som faktisk blir et element',
      's.items.d':
        '<p>Bare de direkte barna til beholderen blir flex-elementer. Et barnebarn er ikke med; det ligger inne i et element og følger reglene der.</p>' +
        '<p>Det forklarer en feil nesten alle gjør én gang: du setter <code>display: flex</code> på noe som har ett eneste barn, og lurer på hvorfor ingenting stiller seg opp. Alt du ville stille opp, ligger ett nivå for dypt.</p>' +
        '<p>Løs tekst rett inne i beholderen blir også et element &mdash; et anonymt et, uten noen tagg du kan gi en klasse. Det er lett å overse, og gir en uforklarlig ekstra kolonne i raden. Pakk teksten inn i noe hvis du trenger å kunne peke på den.</p>' +
        '<p>Ett unntak: et barn med <code>position: absolute</code> blir ikke et flex-element. Det tas ut av raden helt, og beholderen fordeler plass som om det ikke fantes.</p>',

      's.free.t': 'Det du får uten å be om det',
      's.free.d':
        '<p><code>display: flex</code> alene er allerede et brukbart oppsett, og det er verdt å vite nøyaktig hva det gir deg før du begynner å legge til linjer.</p>' +
        '<p>Elementene stiller seg på rad, pakket mot starten. De strekker seg til samme høyde &mdash; det er <code>align-items: stretch</code>, og det er grunnen til at to kort ved siden av hverandre blir like høye uten at du gjorde noe. Og de brekker ikke til neste linje: blir det for trangt, krymper de i stedet.</p>' +
        '<p>En detalj verdt å kjenne hvis du ser på dette i utviklerverktøyet: de to siste beregnes ikke til <code>flex-start</code> og <code>stretch</code>, men til <code>normal</code> &mdash; et nøkkelord som betyr «gjør det fornuftige for denne oppsettsmåten». I en flex-beholder oppfører det seg nøyaktig som de to. Du ser <code>normal</code> i inspektøren, og det navngitte ordet først når du har skrevet det selv.</p>' +
        '<p>Hvert element starter på <code>flex: 0 1 auto</code>: naturlig størrelse, lov til å krympe, ikke lov til å vokse. Nettopp det tallet er tema for neste leksjon.</p>',

      's.off.t': 'Det flex slår av',
      's.off.d':
        '<p>Et flex-element spiller etter andre regler enn et vanlig blokkelement, og noen egenskaper slutter rett og slett å gjelde.</p>' +
        '<p><code>float</code> og <code>clear</code> gjør ingenting på et flex-element. Det samme gjelder <code>vertical-align</code>. De hører til de gamle måtene å stille opp ting på, og flex har overtatt jobben deres &mdash; men CSS sier ikke fra, så en <code>float: left</code> som ble stående igjen fra før, blir bare stille ignorert.</p>' +
        '<p>Marger mellom elementer kolliderer heller ikke. I vanlig flyt blir 10 piksler under det ene og 10 over det neste til 10 til sammen; mellom flex-elementer blir de 20. Det er som regel en lettelse, men det er en forskjell å regne med.</p>',

      's.inline.t': 'Forskjellen på flex og inline-flex',
      's.inline.d':
        '<p>De to gjør nøyaktig det samme på innsiden. Forskjellen gjelder bare beholderens egen boks, utad.</p>' +
        '<p><code>flex</code> gir en boks på blokknivå: den begynner på en ny linje og tar hele bredden, som en <code>&lt;div&gt;</code>. <code>inline-flex</code> gir en boks som står i tekstflyten og er akkurat så bred som innholdet, som en <code>&lt;span&gt;</code>.</p>' +
        '<p>Til en etikett eller en knapp med et ikon ved siden av teksten er <code>inline-flex</code> nesten alltid det riktige. Til en rad med kort er det <code>flex</code>.</p>',

      's.map.t': 'Hvor hver egenskap hører hjemme',
      's.map.d':
        '<p>Her er hele flex-ordforrådet, sortert etter hvilken side det bor på. Dette er kartet resten av flex-leksjonene fyller ut.</p>' +
        '<p>Legg merke til at listen er kort. Flex er ikke stort; det virker uoversiktlig fordi navnene ligner på hverandre og fordi de to sidene blandes sammen. Har du kartet i hodet, er halve forvirringen borte.</p>',

      's.note':
        '<p>Kortversjonen. <code>display: flex</code> på beholderen, aldri på elementene. Bare direkte barn blir elementer, og løs tekst blir det også. Du får rad, lik høyde og krymping gratis. <code>float</code>, <code>clear</code> og <code>vertical-align</code> slutter å virke. Og når en flex-regel ser ut til å bli ignorert: sjekk om den står på beholderen når den burde stått på elementet, eller omvendt.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS: flex box',
      kicker: 'Lesson 17 &middot; HTML &amp; CSS',
      title: 'CSS: flex box',
      lead: 'The first of several lessons on flex. This one is not about a single property but about the model: what happens the moment you write <code>display: flex</code>, and who decides what afterwards.',

      's.on.t': 'Switching it on',
      's.on.d':
        '<p>Flex is switched on in one place: on the container. From then on a different set of rules applies to its children.</p>' +
        '<p>It is worth noticing how little you had to write. One declaration changes how the whole row is worked out, and hands you four things you would otherwise have had to ask for separately. The rest of flex is largely fine-tuning what you already got.</p>',

      's.two.t': 'Two vocabularies, not one',
      's.two.d':
        '<p>Flex has two sets of properties, and they live on opposite sides. Some belong on the container and describe how the row as a whole behaves. Others belong on a single element and describe how that one should behave among the others.</p>' +
        '<p>No property belongs on both. That sounds obvious and is still the commonest source of confusion: <code>justify-content</code> on a child does nothing, and <code>align-self</code> on the container does nothing. When a flex rule appears to be ignored, it is usually because it is written on the wrong side.</p>' +
        '<p>The last section of this lesson is a map of which side each one belongs to — and which of the coming lessons covers it.</p>',

      's.items.t': 'What actually becomes an item',
      's.items.d':
        '<p>Only the direct children of the container become flex items. A grandchild is not included; it sits inside an item and follows the rules in there.</p>' +
        '<p>That explains a mistake nearly everyone makes once: you put <code>display: flex</code> on something that has a single child, and wonder why nothing lines up. Everything you wanted to line up is one level too deep.</p>' +
        '<p>Loose text directly inside the container becomes an item too — an anonymous one, with no tag you can give a class to. It is easy to miss, and produces an inexplicable extra column in the row. Wrap the text in something if you need to be able to point at it.</p>' +
        '<p>One exception: a child with <code>position: absolute</code> does not become a flex item. It is taken out of the row entirely, and the container distributes space as though it were not there.</p>',

      's.free.t': 'What you get without asking',
      's.free.d':
        '<p><code>display: flex</code> on its own is already a usable layout, and it is worth knowing exactly what it hands you before you start adding lines.</p>' +
        '<p>The items sit in a row, packed towards the start. They stretch to the same height — that is <code>align-items: stretch</code>, and it is why two cards side by side come out equal height without you doing anything. And they do not break onto a second line: when space runs short they shrink instead.</p>' +
        '<p>A detail worth knowing if you inspect these in developer tools: the last two do not compute to <code>flex-start</code> and <code>stretch</code> but to <code>normal</code> &mdash; a keyword meaning "do the sensible thing for this layout mode". In a flex container it behaves exactly as those two. You will see <code>normal</code> in the inspector, and the named value only once you have written it yourself.</p>' +
        '<p>Every item starts at <code>flex: 0 1 auto</code>: natural size, allowed to shrink, not allowed to grow. That number is the subject of the next lesson.</p>',

      's.off.t': 'What flex switches off',
      's.off.d':
        '<p>A flex item plays by different rules from an ordinary block, and some properties simply stop applying.</p>' +
        '<p><code>float</code> and <code>clear</code> do nothing on a flex item. Neither does <code>vertical-align</code>. They belong to the older ways of lining things up, and flex has taken over their job — but CSS does not warn you, so a <code>float: left</code> left over from before is just quietly ignored.</p>' +
        '<p>Margins between items do not collapse either. In normal flow, 10 pixels below one and 10 above the next add up to 10; between flex items they add up to 20. That is usually a relief, but it is a difference to count on.</p>',

      's.inline.t': 'The difference between flex and inline-flex',
      's.inline.d':
        '<p>The two do exactly the same thing on the inside. The difference concerns only the container own box, on the outside.</p>' +
        '<p><code>flex</code> gives a block-level box: it starts on a new line and takes the full width, like a <code>&lt;div&gt;</code>. <code>inline-flex</code> gives a box that sits in the running text and is exactly as wide as its content, like a <code>&lt;span&gt;</code>.</p>' +
        '<p>For a badge, or a button with an icon beside its text, <code>inline-flex</code> is almost always the right one. For a row of cards it is <code>flex</code>.</p>',

      's.map.t': 'Where each property belongs',
      's.map.d':
        '<p>Here is the whole flex vocabulary, sorted by which side it lives on. This is the map the remaining flex lessons fill in.</p>' +
        '<p>Notice how short the list is. Flex is not large; it feels unwieldy because the names resemble each other and because the two sides get mixed up. Hold the map in your head and half the confusion goes away.</p>',

      's.note':
        '<p>The short version. <code>display: flex</code> on the container, never on the items. Only direct children become items, and loose text becomes one too. You get the row, the equal heights and the shrinking for free. <code>float</code>, <code>clear</code> and <code>vertical-align</code> stop working. And when a flex rule looks ignored: check whether it is on the container when it should be on the item, or the other way round.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS: flex box',
      kicker: 'Урок 17 &middot; HTML &amp; CSS',
      title: 'CSS: flex box',
      lead: 'Перший із уроків про flex. Цей не про якусь одну властивість, а про модель: що стається тієї миті, коли ви пишете <code>display: flex</code>, і хто що вирішує далі.',

      's.on.t': 'Як це ввімкнути',
      's.on.d':
        '<p>Flex вмикають в одному місці — на контейнері. Відтоді до його нащадків застосовується інший набір правил.</p>' +
        '<p>Варто помітити, як мало довелося написати. Одне оголошення змінює те, як обчислюється весь рядок, і дає чотири речі, які інакше довелося б просити окремо. Решта flex — здебільшого тонке налаштування того, що ви вже отримали.</p>',

      's.two.t': 'Два словники, а не один',
      's.two.d':
        '<p>У flex два набори властивостей, і вони живуть по різні боки. Одні належать контейнеру й описують, як поводиться рядок загалом. Інші належать окремому елементу й описують, як саме він має поводитися серед решти.</p>' +
        '<p>Жодна властивість не належить обом сторонам. Звучить очевидно — і все одно це найпоширеніше джерело плутанини: <code>justify-content</code> на нащадкові не робить нічого, і <code>align-self</code> на контейнері теж. Коли здається, що правило flex ігнорують, зазвичай воно просто написане не на тому боці.</p>' +
        '<p>Останній розділ цього уроку — мапа того, якому боку належить кожна з них і який з наступних уроків її розглядає.</p>',

      's.items.t': 'Що насправді стає елементом',
      's.items.d':
        '<p>Елементами flex стають лише безпосередні нащадки контейнера. Онук не входить; він лежить усередині елемента і підкоряється правилам уже там.</p>' +
        '<p>Це пояснює помилку, яку роблять майже всі бодай раз: ви ставите <code>display: flex</code> на щось із одним-єдиним нащадком і дивуєтеся, чому нічого не вишиковується. Усе, що ви хотіли вишикувати, лежить на рівень глибше.</p>' +
        '<p>Вільний текст просто всередині контейнера теж стає елементом — анонімним, без жодного тега, якому можна дати клас. Його легко не помітити, і він дає незрозумілу зайву колонку в рядку. Загорніть текст у щось, якщо на нього треба мати змогу вказати.</p>' +
        '<p>Один виняток: нащадок із <code>position: absolute</code> елементом flex не стає. Його цілком виймають із рядка, і контейнер розподіляє місце так, ніби його немає.</p>',

      's.free.t': 'Те, що ви дістаєте, не просячи',
      's.free.d':
        '<p><code>display: flex</code> сам по собі вже є придатною розкладкою, і варто знати точно, що він дає, перш ніж додавати рядки.</p>' +
        '<p>Елементи стають у рядок, притиснуті до початку. Вони розтягуються до однакової висоти — це <code>align-items: stretch</code>, і саме тому дві картки поруч виходять однакової висоти без жодних ваших дій. І вони не переходять на другий рядок: коли місця бракує, вони натомість стискаються.</p>' +
        '<p>Деталь, яку варто знати, якщо зазирнете в інструменти розробника: останні дві обчислюються не до <code>flex-start</code> і <code>stretch</code>, а до <code>normal</code> &mdash; ключового слова, що означає «зроби розумне типове для цього режиму розкладки». У flex-контейнері воно поводиться точно як ті двоє. В інспекторі ви побачите <code>normal</code>, а іменоване значення — лише коли напишете його самі.</p>' +
        '<p>Кожен елемент починає з <code>flex: 0 1 auto</code>: природний розмір, дозволено стискатися, не дозволено рости. Саме це число — тема наступного уроку.</p>',

      's.off.t': 'Що flex вимикає',
      's.off.d':
        '<p>Елемент flex грає за іншими правилами, ніж звичайний блок, і деякі властивості просто перестають діяти.</p>' +
        '<p><code>float</code> і <code>clear</code> на елементі flex не роблять нічого. Те саме з <code>vertical-align</code>. Вони належать до давніших способів вишиковувати речі, і flex перебрав їхню роботу — але CSS про це не попереджає, тож <code>float: left</code>, що лишився з минулого, просто тихо ігнорується.</p>' +
        '<p>Відступи між елементами теж не згортаються. У звичайному потоці 10 пікселів під одним і 10 над наступним дають разом 10; між елементами flex вони дають 20. Зазвичай це полегшення, але цю різницю треба враховувати.</p>',

      's.inline.t': 'Різниця між flex і inline-flex',
      's.inline.d':
        '<p>Усередині ці двоє роблять точнісінько те саме. Різниця стосується лише власної коробки контейнера — назовні.</p>' +
        '<p><code>flex</code> дає коробку блокового рівня: вона починається з нового рядка і займає всю ширину, як <code>&lt;div&gt;</code>. <code>inline-flex</code> дає коробку, що стоїть у потоці тексту і завширшки рівно зі свій вміст, як <code>&lt;span&gt;</code>.</p>' +
        '<p>Для бейджа або кнопки з піктограмою поруч із текстом майже завжди правильний <code>inline-flex</code>. Для рядка карток — <code>flex</code>.</p>',

      's.map.t': 'Де живе кожна властивість',
      's.map.d':
        '<p>Ось увесь словник flex, розсортований за тим, на якому боці він живе. Це мапа, яку заповнять решта уроків про flex.</p>' +
        '<p>Зверніть увагу, який короткий цей перелік. Flex невеликий; він здається громіздким, бо назви схожі одна на одну і бо дві сторони плутають між собою. Тримайте мапу в голові — і половина плутанини зникне.</p>',

      's.note':
        '<p>Коротко. <code>display: flex</code> на контейнері, ніколи на елементах. Елементами стають лише безпосередні нащадки, і вільний текст теж. Рядок, однакову висоту і стискання ви дістаєте задарма. <code>float</code>, <code>clear</code> і <code>vertical-align</code> перестають діяти. А коли правило flex виглядає проігнорованим — перевірте, чи не стоїть воно на контейнері замість елемента або навпаки.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du setter <code>display: flex</code> på en beholder som inneholder ett <code>&lt;div&gt;</code>, og inni det ligger tre kort. Hva skjer med kortene?',
        answer: 2,
        options: [
          {
            text: 'De stiller seg på rad.',
            why: 'Det ville skjedd hvis de var direkte barn. Her er de ett nivå for dypt.',
          },
          {
            text: 'De blir like høye, men stiller seg ikke opp.',
            why: 'Ingen av delene når dem. Reglene stopper ved det ene barnet.',
          },
          {
            text: 'Ingenting &mdash; bare det ene <code>&lt;div&gt;</code>-et er et flex-element.',
            why: 'Bare direkte barn blir elementer. Beholderen har nøyaktig ett, og kortene inni følger vanlige blokkregler. Flytt <code>display: flex</code> ned på det mellomliggende elementet.',
          },
          {
            text: 'De blir absolutt posisjonert.',
            why: 'Flex endrer ikke posisjonering. Det skjer ingenting med dem i det hele tatt.',
          },
        ],
      },
      {
        q: 'Du skriver bare <code>display: flex</code> og ingenting mer. Hva får du?',
        answer: 1,
        options: [
          {
            text: 'Elementer på rad som brekker til neste linje når det blir trangt.',
            why: 'Nesten &mdash; men standarden er <code>nowrap</code>. De brekker ikke; de krymper.',
          },
          {
            text: 'Elementer på rad, pakket mot starten, med lik høyde, som krymper i stedet for å brekke.',
            why: 'Det er de fire standardverdiene: <code>row</code>, <code>flex-start</code>, <code>stretch</code> og <code>nowrap</code>. Den like høyden er den folk oftest blir overrasket over at de fikk gratis.',
          },
          {
            text: 'Elementer midtstilt både vannrett og loddrett.',
            why: 'Midtstilling må du be om. Standarden pakker mot starten.',
          },
          {
            text: 'Elementer i en kolonne.',
            why: 'Standardretningen er <code>row</code>. Kolonne er noe du velger, i leksjon 19.',
          },
        ],
      },
      {
        q: 'Et flex-element har <code>float: left</code> fra en tidligere versjon av stilarket. Hva gjør den nå?',
        answer: 3,
        options: [
          {
            text: 'Den flytter elementet til venstre i raden.',
            why: 'Plasseringen i raden styres av beholderen, ikke av <code>float</code>.',
          },
          {
            text: 'Den tar elementet ut av raden.',
            why: 'Det gjør <code>position: absolute</code>. En <code>float</code> gjør ingenting her.',
          },
          {
            text: 'Den gjør regelen ugyldig.',
            why: 'Regelen er helt gyldig. Den har bare ingen virkning på et flex-element.',
          },
          {
            text: 'Ingenting &mdash; <code>float</code> gjelder ikke for flex-elementer.',
            why: 'Sammen med <code>clear</code> og <code>vertical-align</code> slutter den å virke. Ingen advarsel kommer, så gamle linjer blir gjerne liggende lenge etter at de sluttet å bety noe.',
          },
        ],
      },
      {
        q: 'Hva er forskjellen på <code>display: flex</code> og <code>display: inline-flex</code>?',
        answer: 0,
        options: [
          {
            text: 'Bare beholderens egen boks: blokknivå mot inline-nivå. Innsiden er lik.',
            why: 'Elementene inni oppfører seg nøyaktig likt i begge. Forskjellen er om beholderen begynner på en ny linje og fyller bredden, eller står i tekstflyten og er så bred som innholdet.',
          },
          {
            text: '<code>inline-flex</code> stiller elementene på rad, <code>flex</code> i kolonne.',
            why: 'Begge bruker <code>row</code> som standard. Retning er en egen egenskap.',
          },
          {
            text: '<code>inline-flex</code> gjør elementene inline.',
            why: 'Elementene blir flex-elementer uansett. Det er beholderen det gjelder.',
          },
          {
            text: 'Ingen &mdash; <code>inline-flex</code> er en eldre skrivemåte.',
            why: 'Begge er i bruk, og de gjør to forskjellige ting utad.',
          },
        ],
      },
      {
        q: 'Rett inne i en flex-beholder står det litt løs tekst mellom to <code>&lt;div&gt;</code>-er. Hva blir den?',
        answer: 1,
        options: [
          {
            text: 'Den ignoreres.',
            why: 'Den blir stående og tar plass. Det er nettopp derfor den forvirrer.',
          },
          {
            text: 'Et anonymt flex-element, som tar sin egen plass i raden.',
            why: 'Den får sin egen kolonne, akkurat som de to andre &mdash; men det finnes ingen tagg å gi en klasse eller en <code>flex</code>-verdi. Pakk den inn i et element om du trenger å styre den.',
          },
          {
            text: 'Den slås sammen med elementet foran.',
            why: 'Den holdes atskilt. Den blir sitt eget element.',
          },
          {
            text: 'Den gjør beholderen ugyldig.',
            why: 'Det er helt lovlig oppmerking. Den oppfører seg bare ikke slik folk forventer.',
          },
        ],
      },
      {
        q: 'Du vil pakke elementene mot midten av raden. Hvor skriver du <code>justify-content: center</code>?',
        answer: 0,
        options: [
          {
            text: 'På beholderen.',
            why: '<code>justify-content</code> fordeler plassen mellom elementene, og det er beholderens jobb. Alt som handler om raden som helhet, bor der.',
          },
          {
            text: 'På hvert element.',
            why: 'Der gjør den ingenting. Et element kan ikke bestemme hvordan hele raden fordeles.',
          },
          {
            text: 'På begge, for sikkerhets skyld.',
            why: 'Den på elementene er uansett uten virkning, og gjør bare stilarket vanskeligere å lese.',
          },
          {
            text: 'På forelderen til beholderen.',
            why: 'Ett nivå for høyt. Egenskapen virker på den beholderen som faktisk har <code>display: flex</code>.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You set <code>display: flex</code> on a container holding one <code>&lt;div&gt;</code>, and inside that sit three cards. What happens to the cards?',
        answer: 2,
        options: [
          {
            text: 'They line up in a row.',
            why: 'That would happen if they were direct children. Here they are one level too deep.',
          },
          {
            text: 'They become equal height, but do not line up.',
            why: 'Neither reaches them. The rules stop at that single child.',
          },
          {
            text: 'Nothing — only that one <code>&lt;div&gt;</code> is a flex item.',
            why: 'Only direct children become items. The container has exactly one, and the cards inside follow ordinary block rules. Move <code>display: flex</code> down onto the intermediate element.',
          },
          {
            text: 'They become absolutely positioned.',
            why: 'Flex does not change positioning. Nothing happens to them at all.',
          },
        ],
      },
      {
        q: 'You write just <code>display: flex</code> and nothing else. What do you get?',
        answer: 1,
        options: [
          {
            text: 'Items in a row that wrap onto the next line when space runs short.',
            why: 'Almost — but the default is <code>nowrap</code>. They do not wrap; they shrink.',
          },
          {
            text: 'Items in a row, packed at the start, equal height, shrinking rather than wrapping.',
            why: 'Those are the four defaults: <code>row</code>, <code>flex-start</code>, <code>stretch</code> and <code>nowrap</code>. The equal height is the one people are most often surprised to have got for free.',
          },
          {
            text: 'Items centred both horizontally and vertically.',
            why: 'Centring has to be asked for. The default packs at the start.',
          },
          {
            text: 'Items in a column.',
            why: 'The default direction is <code>row</code>. A column is something you choose, in lesson 19.',
          },
        ],
      },
      {
        q: 'A flex item has <code>float: left</code> left over from an earlier version of the stylesheet. What does it do now?',
        answer: 3,
        options: [
          {
            text: 'Moves the item to the left of the row.',
            why: 'Position within the row is controlled by the container, not by <code>float</code>.',
          },
          {
            text: 'Takes the item out of the row.',
            why: 'That is what <code>position: absolute</code> does. A <code>float</code> does nothing here.',
          },
          {
            text: 'Makes the rule invalid.',
            why: 'The rule is perfectly valid. It simply has no effect on a flex item.',
          },
          {
            text: 'Nothing — <code>float</code> does not apply to flex items.',
            why: 'Along with <code>clear</code> and <code>vertical-align</code>, it stops working. No warning is given, so old lines tend to sit there long after they stopped meaning anything.',
          },
        ],
      },
      {
        q: 'What is the difference between <code>display: flex</code> and <code>display: inline-flex</code>?',
        answer: 0,
        options: [
          {
            text: 'Only the container own box: block-level versus inline-level. The inside is identical.',
            why: 'The items inside behave exactly the same in both. The difference is whether the container starts a new line and fills the width, or sits in the running text as wide as its content.',
          },
          {
            text: '<code>inline-flex</code> puts the items in a row, <code>flex</code> in a column.',
            why: 'Both default to <code>row</code>. Direction is a separate property.',
          },
          {
            text: '<code>inline-flex</code> makes the items inline.',
            why: 'The items become flex items either way. It is the container that differs.',
          },
          {
            text: 'None — <code>inline-flex</code> is an older spelling.',
            why: 'Both are current, and they do two different things on the outside.',
          },
        ],
      },
      {
        q: 'Directly inside a flex container there is some loose text between two <code>&lt;div&gt;</code> elements. What does it become?',
        answer: 1,
        options: [
          {
            text: 'It is ignored.',
            why: 'It stays and takes up space. That is precisely why it confuses people.',
          },
          {
            text: 'An anonymous flex item, taking its own place in the row.',
            why: 'It gets its own column, just like the other two — but there is no tag to give a class or a <code>flex</code> value to. Wrap it in an element if you need to control it.',
          },
          {
            text: 'It is merged into the item before it.',
            why: 'It is kept separate. It becomes an item of its own.',
          },
          {
            text: 'It makes the container invalid.',
            why: 'It is perfectly legal markup. It just does not behave the way people expect.',
          },
        ],
      },
      {
        q: 'You want to pack the items towards the middle of the row. Where do you write <code>justify-content: center</code>?',
        answer: 0,
        options: [
          {
            text: 'On the container.',
            why: '<code>justify-content</code> distributes the space between the items, and that is the container job. Anything concerning the row as a whole lives there.',
          },
          {
            text: 'On each item.',
            why: 'There it does nothing. An item cannot decide how the whole row is distributed.',
          },
          {
            text: 'On both, to be safe.',
            why: 'The one on the items has no effect either way, and only makes the stylesheet harder to read.',
          },
          {
            text: 'On the container parent.',
            why: 'One level too high. The property works on the container that actually has <code>display: flex</code>.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви ставите <code>display: flex</code> контейнеру, у якому один <code>&lt;div&gt;</code>, а всередині нього три картки. Що станеться з картками?',
        answer: 2,
        options: [
          {
            text: 'Вони стануть у рядок.',
            why: 'Це сталося б, якби вони були безпосередніми нащадками. Тут вони на рівень глибше.',
          },
          {
            text: 'Вони стануть однакової висоти, але не вишикуються.',
            why: 'До них не доходить ні те, ні інше. Правила спиняються на тому одному нащадкові.',
          },
          {
            text: 'Нічого — елементом flex є лише той один <code>&lt;div&gt;</code>.',
            why: 'Елементами стають лише безпосередні нащадки. У контейнера він рівно один, а картки всередині живуть за звичайними блоковими правилами. Перенесіть <code>display: flex</code> на проміжний елемент.',
          },
          {
            text: 'Вони стануть абсолютно позиціонованими.',
            why: 'Flex не змінює позиціонування. З ними не стається взагалі нічого.',
          },
        ],
      },
      {
        q: 'Ви пишете лише <code>display: flex</code> і більше нічого. Що ви отримаєте?',
        answer: 1,
        options: [
          {
            text: 'Елементи в рядок, які переходять на наступний рядок, коли бракує місця.',
            why: 'Майже — але типове значення <code>nowrap</code>. Вони не переносяться, вони стискаються.',
          },
          {
            text: 'Елементи в рядок, притиснуті до початку, однакової висоти, що стискаються замість переносу.',
            why: 'Це чотири типові значення: <code>row</code>, <code>flex-start</code>, <code>stretch</code> і <code>nowrap</code>. Найбільше людей дивує саме однакова висота, отримана задарма.',
          },
          {
            text: 'Елементи, відцентровані і по горизонталі, і по вертикалі.',
            why: 'Центрування треба попросити. Типово все притискається до початку.',
          },
          {
            text: 'Елементи в колонку.',
            why: 'Типовий напрямок — <code>row</code>. Колонку ви обираєте самі, в уроці 19.',
          },
        ],
      },
      {
        q: 'Елемент flex має <code>float: left</code>, що лишився від давнішої версії файлу стилів. Що він робить тепер?',
        answer: 3,
        options: [
          {
            text: 'Рухає елемент ліворуч у рядку.',
            why: 'Розташуванням у рядку керує контейнер, а не <code>float</code>.',
          },
          {
            text: 'Виймає елемент із рядка.',
            why: 'Це робить <code>position: absolute</code>. <code>float</code> тут не робить нічого.',
          },
          {
            text: 'Робить правило недійсним.',
            why: 'Правило цілком дійсне. Воно просто не діє на елемент flex.',
          },
          {
            text: 'Нічого — <code>float</code> не застосовується до елементів flex.',
            why: 'Разом із <code>clear</code> і <code>vertical-align</code> він перестає діяти. Жодного попередження не буде, тож старі рядки часто лежать ще довго після того, як утратили сенс.',
          },
        ],
      },
      {
        q: 'Яка різниця між <code>display: flex</code> і <code>display: inline-flex</code>?',
        answer: 0,
        options: [
          {
            text: 'Лише власна коробка контейнера: блоковий рівень проти рядкового. Усередині однаково.',
            why: 'Елементи всередині поводяться точнісінько так само в обох. Різниця в тому, чи контейнер починає новий рядок і займає всю ширину, чи стоїть у потоці тексту завширшки зі свій вміст.',
          },
          {
            text: '<code>inline-flex</code> ставить елементи в рядок, а <code>flex</code> — у колонку.',
            why: 'Обидва типово використовують <code>row</code>. Напрямок — окрема властивість.',
          },
          {
            text: '<code>inline-flex</code> робить елементи рядковими.',
            why: 'Елементи стають елементами flex у будь-якому разі. Різниця в контейнері.',
          },
          {
            text: 'Жодної — <code>inline-flex</code> це давніше написання.',
            why: 'Обидва чинні, і назовні вони роблять дві різні речі.',
          },
        ],
      },
      {
        q: 'Просто всередині flex-контейнера між двома <code>&lt;div&gt;</code> стоїть трохи вільного тексту. Чим він стане?',
        answer: 1,
        options: [
          {
            text: 'Його проігнорують.',
            why: 'Він лишається і займає місце. Саме тому він і бентежить.',
          },
          {
            text: 'Анонімним елементом flex, що займає власне місце в рядку.',
            why: 'Він дістає власну колонку, як і двоє інших — але тега, якому можна дати клас чи значення <code>flex</code>, немає. Загорніть його в елемент, якщо ним треба керувати.',
          },
          {
            text: 'Його приєднають до попереднього елемента.',
            why: 'Він лишається окремим. Він стає власним елементом.',
          },
          {
            text: 'Він робить контейнер недійсним.',
            why: 'Це цілком законна розмітка. Вона просто поводиться не так, як очікують.',
          },
        ],
      },
      {
        q: 'Ви хочете зібрати елементи до середини рядка. Де написати <code>justify-content: center</code>?',
        answer: 0,
        options: [
          {
            text: 'На контейнері.',
            why: '<code>justify-content</code> розподіляє місце між елементами, а це робота контейнера. Усе, що стосується рядка загалом, живе там.',
          },
          {
            text: 'На кожному елементі.',
            why: 'Там воно не робить нічого. Елемент не може вирішувати, як розподіляється весь рядок.',
          },
          {
            text: 'На обох, про всяк випадок.',
            why: 'Те, що на елементах, однаково не діє, і лише ускладнює читання файлу стилів.',
          },
          {
            text: 'На батькові контейнера.',
            why: 'На рівень вище, ніж треба. Властивість діє на тому контейнері, який справді має <code>display: flex</code>.',
          },
        ],
      },
    ],
  },
});
