/*
 * Content of JS lesson 05 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson owns the loop forms and for...of vs for...in.
 * Iterators and Map/Set belong to lesson 15.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Løkker: for, while',
      kicker: 'Leksjon 5 &middot; Javascript',
      title: 'Løkker: for, while',
      lead: 'Fire måter å gjenta noe på, og to av dem har navn som ligner så mye at de byttes om hele tiden. Forskjellen på <code>of</code> og <code>in</code> er verdt å lære grundig én gang.',

      's.for.t': 'Den klassiske tredelte løkken',
      's.for.d':
        '<p><code>for</code> samler tre ting i parentesen: hva som skjer før første runde, hva som må være sant for at en runde til skal kjøres, og hva som skjer etter hver runde.</p>' +
        '<p>Alle tre kan stå tomme, og hvert semikolon må likevel være der. Det er denne fleksibiliteten som gjør <code>for</code> nyttig når du trenger en teller, teller to ting samtidig, eller går bakover.</p>' +
        '<p>Bruk <code>let</code> til telleren. Leksjon 3 viste hvorfor: med <code>var</code> deler alle rundene én variabel, og enhver funksjon du lager inne i løkken, ser den verdien løkken endte på.</p>',

      's.while.t': 'Når du ikke vet hvor mange runder',
      's.while.d':
        '<p><code>while</code> har bare betingelsen. Den passer når antallet ikke er kjent på forhånd &mdash; du tømmer en kø, leser til noe tar slutt, prøver til noe lykkes.</p>' +
        '<p><code>do ... while</code> flytter betingelsen ned bak kroppen. Forskjellen er ikke stor, men den er skarp: kroppen kjører alltid minst én gang, også når betingelsen var usann fra start. Det er nyttig når du må gjøre et forsøk før du i det hele tatt kan vite om flere trengs.</p>' +
        '<p>Med <code>while</code> er det ditt ansvar at noe faktisk endrer seg inne i kroppen. Glemmer du det, stopper fanen &mdash; ikke programmet, men hele fanen, for Javascript kjører på én tråd.</p>',

      's.of.t': 'for...of: verdiene',
      's.of.d':
        '<p><code>for...of</code> gir deg verdiene, én om gangen. Ingen teller, ingen <code>length</code>, ingen indeks du kan skrive feil.</p>' +
        '<p>Det er standardvalget når du skal gå gjennom et array og faktisk er ute etter innholdet. Trenger du indeksen i tillegg, gir <code>.entries()</code> deg begge deler.</p>' +
        '<p>Den virker på alt som er itererbart, ikke bare arrays: tekst gir deg ett tegn om gangen, og det samme gjelder <code>Map</code>, <code>Set</code> og listene du får tilbake fra DOM-en. Et vanlig objekt er derimot ikke itererbart, og <code>for...of</code> over et slikt kaster en TypeError.</p>',

      's.in.t': 'for...in: nøklene, og hvorfor det er en felle',
      's.in.d':
        '<p><code>for...in</code> går gjennom nøkler. På et array er nøklene indeksene &mdash; men som tekst, siden alle nøkler er tekst (leksjon 2). Du får <code>&#39;0&#39;</code>, ikke <code>0</code>, og <code>&#39;2&#39; + 1</code> blir <code>&#39;21&#39;</code>.</p>' +
        '<p>Verre er at den finner alt objektet har, ikke bare indeksene. Legger noen en egenskap på arrayet, dukker den opp i løkken din. <code>for...of</code> lar den være i fred.</p>' +
        '<p>Og rekkefølgen er ikke den du skrev nøklene i. Nøkler som ser ut som hele tall, kommer først, sortert stigende; resten kommer etterpå i innsettingsrekkefølge. Skal du gå gjennom et objekt, si det heller rett ut med <code>Object.entries()</code> &mdash; da vet både du og neste leser hva som skjer.</p>',

      's.break.t': 'Å hoppe ut og hoppe over',
      's.break.d':
        '<p><code>break</code> avslutter løkken. <code>continue</code> hopper til neste runde. Begge gjelder bare den nærmeste løkken rundt seg.</p>' +
        '<p>Er du inne i to løkker og vil ut av begge, kan du gi den ytre et navn og bruke navnet. Det er ikke noe man bruker ofte, men alternativet &mdash; en hjelpevariabel som sjekkes to steder &mdash; er som regel verre å lese.</p>' +
        '<p>Én detalj det er verdt å kjenne: i en <code>for</code>-løkke kjører oppdateringsdelen også når du bruker <code>continue</code>. I en <code>while</code>-løkke finnes ingen slik del, så hopper du over linjen som skulle telle opp, har du laget en evig løkke.</p>',

      's.methods.t': 'Metodene, og det de ikke kan',
      's.methods.d':
        '<p>Arrays har egne metoder som ofte leser bedre enn en løkke. <code>map</code> lager et nytt array av samme lengde, <code>filter</code> et kortere, <code>find</code> henter den første som passer.</p>' +
        '<p><code>forEach</code> er den som bare gjør noe for hvert element. Den har én begrensning som er verdt å kjenne før du treffer den: du kommer deg ikke ut av den. <code>break</code> er en syntaksfeil inni, og <code>return</code> avslutter bare denne ene runden &mdash; resten av listen går like fullt.</p>' +
        '<p>Trenger du å stoppe tidlig, har du to gode valg: <code>some</code>, som stanser ved første treff, eller en vanlig <code>for...of</code> med <code>break</code>. Begge sier tydelig at du ikke har tenkt å gå hele veien.</p>',

      's.traps.t': 'Å endre listen mens du går gjennom den',
      's.traps.d':
        '<p>Betingelsen i en <code>for</code>-løkke leses på nytt før hver eneste runde. <code>i &lt; liste.length</code> er ikke et tall som ble låst i starten &mdash; det er et spørsmål som stilles om igjen.</p>' +
        '<p>Legger du til elementer inni løkken, flytter slutten seg raskere enn telleren nærmer seg den, og løkken blir aldri ferdig. Fjerner du elementer, er problemet det motsatte: neste element glir ned i plassen du nettopp tømte, og telleren går forbi det.</p>' +
        '<p>Begge har enkle utveier. Går du bakover, forskyver ikke fjerningen noe du ennå ikke har sett. Eller bedre: la listen være og lag en ny med <code>filter</code>. Det er kortere, og det finnes ingen indeks å ta feil av.</p>',

      's.note':
        '<p>Kortversjonen. <code>for...of</code> til verdier, <code>Object.entries()</code> til objekter, <code>for</code> når du trenger en teller, <code>while</code> når antallet er ukjent. <code>for...in</code> gir nøkler som tekst og finner mer enn du ba om &mdash; bruk den sjelden. <code>forEach</code> kan ikke stoppes; ta <code>some</code> eller <code>for...of</code> med <code>break</code>. Og ikke endre en liste du går gjennom.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Cycles: for, while',
      kicker: 'Lesson 5 &middot; Javascript',
      title: 'Cycles: for, while',
      lead: 'Four ways to repeat something, two of which have names so similar they get swapped constantly. The difference between <code>of</code> and <code>in</code> is worth learning properly once.',

      's.for.t': 'The classic three-part loop',
      's.for.d':
        '<p><code>for</code> gathers three things into its parentheses: what happens before the first turn, what has to be true for another turn to run, and what happens after each turn.</p>' +
        '<p>All three may be left empty, and every semicolon still has to be there. It is this flexibility that makes <code>for</code> useful when you need a counter, count two things at once, or walk backwards.</p>' +
        '<p>Use <code>let</code> for the counter. Lesson 3 showed why: with <code>var</code> every turn shares one variable, and any function you create inside the loop sees the value the loop finished on.</p>',

      's.while.t': 'When you do not know how many turns',
      's.while.d':
        '<p><code>while</code> has only the condition. It suits the case where the count is not known in advance — you drain a queue, read until something ends, retry until something succeeds.</p>' +
        '<p><code>do ... while</code> moves the condition below the body. The difference is small but sharp: the body always runs at least once, even when the condition was false from the start. That helps when you have to make one attempt before you can know whether more are needed.</p>' +
        '<p>With <code>while</code>, it is your responsibility that something inside the body actually changes. Forget it and the tab stops — not the program, the whole tab, because Javascript runs on one thread.</p>',

      's.of.t': 'for...of: the values',
      's.of.d':
        '<p><code>for...of</code> hands you the values, one at a time. No counter, no <code>length</code>, no index to get wrong.</p>' +
        '<p>It is the default choice for walking an array when what you actually want is the contents. If you need the index as well, <code>.entries()</code> gives you both.</p>' +
        '<p>It works on anything iterable, not just arrays: a string gives you one character at a time, and the same goes for <code>Map</code>, <code>Set</code> and the lists you get back from the DOM. A plain object, however, is not iterable, and <code>for...of</code> over one throws a TypeError.</p>',

      's.in.t': 'for...in: the keys, and why it is a trap',
      's.in.d':
        '<p><code>for...in</code> walks keys. On an array the keys are the indexes — but as text, since all keys are text (lesson 2). You get <code>&#39;0&#39;</code>, not <code>0</code>, and <code>&#39;2&#39; + 1</code> is <code>&#39;21&#39;</code>.</p>' +
        '<p>Worse, it finds everything the object has, not only the indexes. If someone puts a property on the array, it turns up in your loop. <code>for...of</code> leaves it alone.</p>' +
        '<p>And the order is not the order you wrote the keys in. Keys that look like whole numbers come first, sorted ascending; the rest follow in insertion order. If you are walking an object, say so outright with <code>Object.entries()</code> — then both you and the next reader know what is happening.</p>',

      's.break.t': 'Jumping out and skipping ahead',
      's.break.d':
        '<p><code>break</code> ends the loop. <code>continue</code> jumps to the next turn. Both apply only to the nearest loop around them.</p>' +
        '<p>If you are inside two loops and want out of both, you can give the outer one a name and use the name. It is not something you reach for often, but the alternative — a helper variable checked in two places — usually reads worse.</p>' +
        '<p>One detail worth knowing: in a <code>for</code> loop the update part still runs when you use <code>continue</code>. A <code>while</code> loop has no such part, so if you skip past the line that was meant to count up, you have made an endless loop.</p>',

      's.methods.t': 'The methods, and what they cannot do',
      's.methods.d':
        '<p>Arrays have their own methods that often read better than a loop. <code>map</code> builds a new array of the same length, <code>filter</code> a shorter one, <code>find</code> fetches the first that matches.</p>' +
        '<p><code>forEach</code> is the one that simply does something with each element. It has one limitation worth knowing before you hit it: you cannot get out of it. <code>break</code> is a syntax error inside, and <code>return</code> only ends that one turn — the rest of the list runs regardless.</p>' +
        '<p>When you do need to stop early you have two good options: <code>some</code>, which halts at the first match, or an ordinary <code>for...of</code> with <code>break</code>. Both say plainly that you do not intend to go all the way.</p>',

      's.traps.t': 'Changing the list while walking it',
      's.traps.d':
        '<p>The condition in a <code>for</code> loop is re-read before every single turn. <code>i &lt; list.length</code> is not a number that was locked in at the start — it is a question asked again each time.</p>' +
        '<p>Add elements inside the loop and the end moves away faster than the counter approaches it, so the loop never finishes. Remove elements and the problem is the opposite: the next element slides down into the slot you just emptied, and the counter steps straight over it.</p>' +
        '<p>Both have simple ways out. Walking backwards means a removal never shifts anything you have not seen yet. Or better: leave the list alone and build a new one with <code>filter</code>. It is shorter, and there is no index to get wrong.</p>',

      's.note':
        '<p>The short version. <code>for...of</code> for values, <code>Object.entries()</code> for objects, <code>for</code> when you need a counter, <code>while</code> when the count is unknown. <code>for...in</code> gives keys as text and finds more than you asked for — use it rarely. <code>forEach</code> cannot be stopped; take <code>some</code> or <code>for...of</code> with <code>break</code>. And do not change a list you are walking.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Цикли: for, while',
      kicker: 'Урок 5 &middot; Javascript',
      title: 'Цикли: for, while',
      lead: 'Чотири способи щось повторити, і два з них мають настільки схожі назви, що їх постійно плутають. Різницю між <code>of</code> та <code>in</code> варто вивчити як слід один раз.',

      's.for.t': 'Класичний тричастинний цикл',
      's.for.d':
        '<p><code>for</code> збирає в дужках три речі: що стається перед першим обертом, що має бути істинним, щоб виконався ще один оберт, і що стається після кожного оберту.</p>' +
        '<p>Усі три можна лишити порожніми, а крапки з комою все одно мають бути на місці. Саме ця гнучкість робить <code>for</code> корисним, коли потрібен лічильник, коли ви рахуєте дві речі водночас або йдете назад.</p>' +
        '<p>Беріть <code>let</code> для лічильника. Урок 3 показав чому: з <code>var</code> усі оберти ділять одну змінну, і будь-яка функція, створена всередині циклу, бачить те значення, на якому цикл завершився.</p>',

      's.while.t': 'Коли невідомо, скільки буде обертів',
      's.while.d':
        '<p>У <code>while</code> є лише умова. Він пасує там, де кількість наперед невідома: ви спорожняєте чергу, читаєте, доки щось не скінчиться, повторюєте спроби, доки щось не вдасться.</p>' +
        '<p><code>do ... while</code> переносить умову під тіло. Різниця невелика, але чітка: тіло завжди виконується принаймні раз, навіть коли умова була хибною від початку. Це допомагає, коли треба зробити одну спробу, перш ніж узагалі можна дізнатися, чи потрібні наступні.</p>' +
        '<p>З <code>while</code> саме ви відповідаєте за те, щоб усередині тіла щось справді змінювалося. Забудете — і вкладка спиниться: не програма, а вся вкладка, бо Javascript працює в одному потоці.</p>',

      's.of.t': 'for...of: значення',
      's.of.d':
        '<p><code>for...of</code> віддає вам значення, по одному. Ні лічильника, ні <code>length</code>, ні індексу, у якому можна помилитися.</p>' +
        '<p>Це типовий вибір для обходу масиву, коли вам справді потрібен вміст. Якщо потрібен ще й індекс, <code>.entries()</code> дасть обидва.</p>' +
        '<p>Він працює з усім ітерованим, а не лише з масивами: текст віддає по одному символу, і так само поводяться <code>Map</code>, <code>Set</code> і списки, які повертає DOM. А от звичайний об’єкт не є ітерованим, і <code>for...of</code> над ним кидає TypeError.</p>',

      's.in.t': 'for...in: ключі, і чому це пастка',
      's.in.d':
        '<p><code>for...in</code> обходить ключі. У масиві ключами є індекси — але текстові, бо всі ключі є текстом (урок 2). Ви дістаєте <code>&#39;0&#39;</code>, а не <code>0</code>, і <code>&#39;2&#39; + 1</code> дає <code>&#39;21&#39;</code>.</p>' +
        '<p>Гірше те, що він знаходить усе, що має об’єкт, а не лише індекси. Якщо хтось покладе на масив властивість, вона з’явиться у вашому циклі. <code>for...of</code> її не чіпає.</p>' +
        '<p>І порядок не той, у якому ви писали ключі. Ключі, схожі на цілі числа, ідуть першими за зростанням; решта — далі, у порядку вставляння. Якщо ви обходите об’єкт, скажіть це прямо через <code>Object.entries()</code> — тоді і ви, і наступний читач знатимете, що відбувається.</p>',

      's.break.t': 'Вистрибнути і перестрибнути',
      's.break.d':
        '<p><code>break</code> завершує цикл. <code>continue</code> переходить до наступного оберту. Обидва стосуються лише найближчого циклу навколо себе.</p>' +
        '<p>Якщо ви всередині двох циклів і хочете вийти з обох, зовнішньому можна дати ім’я і скористатися ним. До цього вдаються нечасто, але альтернатива — допоміжна змінна, яку перевіряють у двох місцях — зазвичай читається гірше.</p>' +
        '<p>Одна деталь, яку варто знати: у циклі <code>for</code> частина оновлення виконується й тоді, коли ви застосовуєте <code>continue</code>. У <code>while</code> такої частини немає, тож якщо ви перестрибнете рядок, який мав збільшувати лічильник, ви створили вічний цикл.</p>',

      's.methods.t': 'Методи і те, чого вони не можуть',
      's.methods.d':
        '<p>У масивів є власні методи, які часто читаються краще за цикл. <code>map</code> будує новий масив тієї самої довжини, <code>filter</code> — коротший, <code>find</code> дістає перший відповідний.</p>' +
        '<p><code>forEach</code> — той, що просто щось робить із кожним елементом. У нього є одне обмеження, яке варто знати до того, як на нього натрапите: з нього неможливо вийти. <code>break</code> усередині є синтаксичною помилкою, а <code>return</code> завершує лише цей один оберт — решта списку однаково пройде.</p>' +
        '<p>Коли справді треба спинитися раніше, є два добрі варіанти: <code>some</code>, що зупиняється на першому збігу, або звичайний <code>for...of</code> із <code>break</code>. Обидва ясно кажуть, що ви не збираєтеся йти до кінця.</p>',

      's.traps.t': 'Змінювати список, поки ним ідеш',
      's.traps.d':
        '<p>Умову в циклі <code>for</code> перечитують перед кожним обертом. <code>i &lt; list.length</code> — це не число, зафіксоване на початку, а питання, яке ставлять знову щоразу.</p>' +
        '<p>Додаватимете елементи всередині циклу — і кінець тікатиме швидше, ніж лічильник до нього доходить, тож цикл ніколи не завершиться. Вилучатимете елементи — проблема протилежна: наступний елемент зсувається в комірку, яку ви щойно спорожнили, і лічильник переступає через нього.</p>' +
        '<p>В обох є прості виходи. Якщо йти назад, вилучення ніколи не зсуває того, чого ви ще не бачили. Або краще: лишіть список у спокої і збудуйте новий через <code>filter</code>. Це коротше, і жодного індексу, у якому можна помилитися.</p>',

      's.note':
        '<p>Коротко. <code>for...of</code> для значень, <code>Object.entries()</code> для об’єктів, <code>for</code> коли потрібен лічильник, <code>while</code> коли кількість невідома. <code>for...in</code> дає ключі текстом і знаходить більше, ніж ви просили — беріть його рідко. <code>forEach</code> не спинити; візьміть <code>some</code> або <code>for...of</code> із <code>break</code>. І не змінюйте список, яким ідете.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: '<code>for (const k in [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</code> &mdash; hva er <code>k</code> i første runde?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;a&#39;</code>',
            why: 'Det er verdien, og den får du med <code>for...of</code>. <code>for...in</code> gir nøkler.',
          },
          {
            text: '<code>0</code> som tall',
            why: 'Nesten &mdash; men nøkler er tekst, også indeksene i et array. Det betyr at <code>k + 1</code> blir <code>&#39;01&#39;</code>, ikke 1.',
          },
          {
            text: '<code>&#39;0&#39;</code> som tekst',
            why: 'Alle nøkler er tekst (leksjon 2), og indeksene i et array er ikke noe unntak. Det er en av grunnene til at <code>for...in</code> sjelden er det du vil ha på et array.',
          },
          {
            text: 'Hele arrayet.',
            why: 'Løkken gir ett element om gangen, ikke hele samlingen.',
          },
        ],
      },
      {
        q: 'Et array har fått en ekstra egenskap: <code>a.notat = &#39;x&#39;</code>. Hvilken løkke ser den?',
        answer: 1,
        options: [
          {
            text: 'Begge.',
            why: 'Bare den ene. Det er nettopp her de skiller lag.',
          },
          {
            text: 'Bare <code>for...in</code>.',
            why: '<code>for...in</code> går gjennom alle nøkler objektet har, og et array er et objekt. <code>for...of</code> bruker arrayets egen gjennomgang og ser bare de nummererte plassene.',
          },
          {
            text: 'Bare <code>for...of</code>.',
            why: 'Omvendt. <code>for...of</code> er den som holder seg til verdiene.',
          },
          {
            text: 'Ingen av dem &mdash; <code>length</code> er fortsatt 2.',
            why: '<code>length</code> endrer seg riktignok ikke, men nøkkelen finnes, og <code>for...in</code> finner den.',
          },
        ],
      },
      {
        q: 'Hva skjer med <code>for (const v of { a: 1 })</code>?',
        answer: 3,
        options: [
          {
            text: '<code>v</code> blir <code>1</code>.',
            why: 'Det ville krevd at objektet var itererbart. Det er det ikke.',
          },
          {
            text: '<code>v</code> blir <code>&#39;a&#39;</code>.',
            why: 'Det ville vært <code>for...in</code>, og selv da som nøkkel, ikke verdi.',
          },
          {
            text: 'Løkken kjører null ganger.',
            why: 'Den kjører ikke i det hele tatt &mdash; men den feiler i stedet for å hoppe stille over.',
          },
          {
            text: 'TypeError &mdash; objektet er ikke itererbart.',
            why: '<code>for...of</code> krever noe som kan itereres. Arrays, tekst, <code>Map</code> og <code>Set</code> kan; et vanlig objekt kan ikke. Bruk <code>Object.entries()</code>.',
          },
        ],
      },
      {
        q: 'Hvordan stopper du en <code>forEach</code> tidlig?',
        answer: 2,
        options: [
          {
            text: 'Med <code>break</code>.',
            why: 'Det er en syntaksfeil inne i en <code>forEach</code>. Du står i en funksjon, ikke i en løkke.',
          },
          {
            text: 'Med <code>return</code>.',
            why: '<code>return</code> avslutter bare denne ene runden. Resten av listen kjøres like fullt.',
          },
          {
            text: 'Det går ikke &mdash; bruk <code>some</code> eller <code>for...of</code> med <code>break</code>.',
            why: '<code>forEach</code> kjører alltid hele veien. <code>some</code> stanser ved første treff, og en vanlig løkke lar deg bryte når du vil.',
          },
          {
            text: 'Ved å kaste et unntak.',
            why: 'Det virker teknisk, men å bruke feilhåndtering som hoppekommando gjør koden vond å lese. Det finnes to enklere svar.',
          },
        ],
      },
      {
        q: 'Hva er galt her?<br><code>for (let i = 0; i &lt; liste.length; i++) liste.push(i);</code>',
        answer: 0,
        options: [
          {
            text: 'Løkken blir aldri ferdig &mdash; <code>length</code> leses på nytt hver runde.',
            why: 'Betingelsen er ikke låst i starten. Hver <code>push</code> flytter slutten ett hakk lenger unna, og telleren tar den aldri igjen.',
          },
          {
            text: 'Ingenting &mdash; <code>length</code> ble lest én gang før første runde.',
            why: 'Det er den vanlige antakelsen, og den er feil. Betingelsen stilles på nytt før hver eneste runde.',
          },
          {
            text: '<code>push</code> kan ikke brukes inne i en løkke.',
            why: 'Den kan brukes hvor som helst. Problemet er hva den gjør med betingelsen.',
          },
          {
            text: '<code>i</code> burde vært <code>var</code>.',
            why: 'Det ville gjort saken verre, ikke bedre. Valget av <code>let</code> er riktig.',
          },
        ],
      },
      {
        q: 'Når kjører en <code>do ... while</code> kroppen sin flere ganger enn en tilsvarende <code>while</code>?',
        answer: 1,
        options: [
          {
            text: 'Aldri &mdash; de er identiske.',
            why: 'De er like i nesten alle tilfeller. Det finnes ett der de ikke er det.',
          },
          {
            text: 'Når betingelsen er usann allerede før første runde.',
            why: '<code>while</code> sjekker først og kjører null ganger. <code>do ... while</code> sjekker etterpå, så kroppen har allerede kjørt én gang. Det er hele forskjellen.',
          },
          {
            text: 'Når betingelsen blir usann midt i.',
            why: 'Da oppfører begge seg likt: de fullfører runden og stopper.',
          },
          {
            text: 'Når kroppen inneholder <code>continue</code>.',
            why: '<code>continue</code> virker likt i begge.',
          },
        ],
      },
    ],

    en: [
      {
        q: '<code>for (const k in [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</code> — what is <code>k</code> on the first turn?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;a&#39;</code>',
            why: 'That is the value, and you get it with <code>for...of</code>. <code>for...in</code> gives keys.',
          },
          {
            text: '<code>0</code> as a number',
            why: 'Close — but keys are text, array indexes included. Which means <code>k + 1</code> is <code>&#39;01&#39;</code>, not 1.',
          },
          {
            text: '<code>&#39;0&#39;</code> as text',
            why: 'All keys are text (lesson 2), and array indexes are no exception. It is one of the reasons <code>for...in</code> is rarely what you want on an array.',
          },
          {
            text: 'The whole array.',
            why: 'The loop hands you one element at a time, not the whole collection.',
          },
        ],
      },
      {
        q: 'An array has picked up an extra property: <code>a.note = &#39;x&#39;</code>. Which loop sees it?',
        answer: 1,
        options: [
          {
            text: 'Both.',
            why: 'Only one. This is exactly where they part company.',
          },
          {
            text: 'Only <code>for...in</code>.',
            why: '<code>for...in</code> walks every key the object has, and an array is an object. <code>for...of</code> uses the array own iteration and sees only the numbered slots.',
          },
          {
            text: 'Only <code>for...of</code>.',
            why: 'The other way round. <code>for...of</code> is the one that sticks to the values.',
          },
          {
            text: 'Neither — <code>length</code> is still 2.',
            why: '<code>length</code> does indeed not change, but the key exists, and <code>for...in</code> finds it.',
          },
        ],
      },
      {
        q: 'What happens with <code>for (const v of { a: 1 })</code>?',
        answer: 3,
        options: [
          {
            text: '<code>v</code> becomes <code>1</code>.',
            why: 'That would require the object to be iterable. It is not.',
          },
          {
            text: '<code>v</code> becomes <code>&#39;a&#39;</code>.',
            why: 'That would be <code>for...in</code>, and even then as a key, not a value.',
          },
          {
            text: 'The loop runs zero times.',
            why: 'It does not run at all — but it fails rather than quietly skipping.',
          },
          {
            text: 'TypeError — the object is not iterable.',
            why: '<code>for...of</code> needs something that can be iterated. Arrays, strings, <code>Map</code> and <code>Set</code> can; a plain object cannot. Use <code>Object.entries()</code>.',
          },
        ],
      },
      {
        q: 'How do you stop a <code>forEach</code> early?',
        answer: 2,
        options: [
          {
            text: 'With <code>break</code>.',
            why: 'That is a syntax error inside a <code>forEach</code>. You are in a function, not in a loop.',
          },
          {
            text: 'With <code>return</code>.',
            why: '<code>return</code> only ends that one turn. The rest of the list runs regardless.',
          },
          {
            text: 'You cannot — use <code>some</code> or <code>for...of</code> with <code>break</code>.',
            why: '<code>forEach</code> always runs all the way. <code>some</code> halts at the first match, and an ordinary loop lets you break whenever you like.',
          },
          {
            text: 'By throwing an exception.',
            why: 'It technically works, but using error handling as a jump statement makes code unpleasant to read. There are two simpler answers.',
          },
        ],
      },
      {
        q: 'What is wrong here?<br><code>for (let i = 0; i &lt; list.length; i++) list.push(i);</code>',
        answer: 0,
        options: [
          {
            text: 'The loop never finishes — <code>length</code> is re-read every turn.',
            why: 'The condition is not locked in at the start. Every <code>push</code> moves the end one step further away, and the counter never catches it.',
          },
          {
            text: 'Nothing — <code>length</code> was read once before the first turn.',
            why: 'That is the common assumption, and it is wrong. The condition is asked again before every single turn.',
          },
          {
            text: '<code>push</code> cannot be used inside a loop.',
            why: 'It can be used anywhere. The problem is what it does to the condition.',
          },
          {
            text: '<code>i</code> should have been <code>var</code>.',
            why: 'That would make things worse, not better. Choosing <code>let</code> is right.',
          },
        ],
      },
      {
        q: 'When does a <code>do ... while</code> run its body more times than the equivalent <code>while</code>?',
        answer: 1,
        options: [
          {
            text: 'Never — they are identical.',
            why: 'They match in almost every case. There is one where they do not.',
          },
          {
            text: 'When the condition is already false before the first turn.',
            why: '<code>while</code> checks first and runs zero times. <code>do ... while</code> checks afterwards, so the body has already run once. That is the whole difference.',
          },
          {
            text: 'When the condition becomes false partway through.',
            why: 'Then both behave the same: they finish the turn and stop.',
          },
          {
            text: 'When the body contains <code>continue</code>.',
            why: '<code>continue</code> works the same in both.',
          },
        ],
      },
    ],

    uk: [
      {
        q: '<code>for (const k in [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</code> — чим є <code>k</code> на першому оберті?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;a&#39;</code>',
            why: 'Це значення, і його дає <code>for...of</code>. <code>for...in</code> дає ключі.',
          },
          {
            text: '<code>0</code> як число',
            why: 'Майже — але ключі є текстом, і індекси масиву не виняток. Тобто <code>k + 1</code> дасть <code>&#39;01&#39;</code>, а не 1.',
          },
          {
            text: '<code>&#39;0&#39;</code> як текст',
            why: 'Усі ключі є текстом (урок 2), і індекси масиву не виняток. Це одна з причин, чому <code>for...in</code> рідко є тим, що потрібно для масиву.',
          },
          {
            text: 'Увесь масив.',
            why: 'Цикл віддає по одному елементу, а не всю колекцію.',
          },
        ],
      },
      {
        q: 'Масив дістав додаткову властивість: <code>a.note = &#39;x&#39;</code>. Який цикл її побачить?',
        answer: 1,
        options: [
          {
            text: 'Обидва.',
            why: 'Лише один. Саме тут їхні шляхи й розходяться.',
          },
          {
            text: 'Лише <code>for...in</code>.',
            why: '<code>for...in</code> обходить кожен ключ, який має об’єкт, а масив є об’єктом. <code>for...of</code> користується власним обходом масиву і бачить лише пронумеровані комірки.',
          },
          {
            text: 'Лише <code>for...of</code>.',
            why: 'Навпаки. Саме <code>for...of</code> тримається значень.',
          },
          {
            text: 'Жоден — <code>length</code> досі 2.',
            why: '<code>length</code> справді не змінюється, але ключ існує, і <code>for...in</code> його знайде.',
          },
        ],
      },
      {
        q: 'Що станеться з <code>for (const v of { a: 1 })</code>?',
        answer: 3,
        options: [
          {
            text: '<code>v</code> стане <code>1</code>.',
            why: 'Для цього об’єкт мав би бути ітерованим. Він не є.',
          },
          {
            text: '<code>v</code> стане <code>&#39;a&#39;</code>.',
            why: 'Це був би <code>for...in</code>, та й то як ключ, а не значення.',
          },
          {
            text: 'Цикл виконається нуль разів.',
            why: 'Він не виконається взагалі — але з помилкою, а не тихим пропуском.',
          },
          {
            text: 'TypeError — об’єкт не є ітерованим.',
            why: '<code>for...of</code> потребує чогось, що можна ітерувати. Масиви, текст, <code>Map</code> і <code>Set</code> можуть; звичайний об’єкт — ні. Візьміть <code>Object.entries()</code>.',
          },
        ],
      },
      {
        q: 'Як спинити <code>forEach</code> раніше?',
        answer: 2,
        options: [
          {
            text: 'Через <code>break</code>.',
            why: 'Усередині <code>forEach</code> це синтаксична помилка. Ви у функції, а не в циклі.',
          },
          {
            text: 'Через <code>return</code>.',
            why: '<code>return</code> завершує лише цей один оберт. Решта списку однаково виконається.',
          },
          {
            text: 'Ніяк — візьміть <code>some</code> або <code>for...of</code> із <code>break</code>.',
            why: '<code>forEach</code> завжди йде до кінця. <code>some</code> спиняється на першому збігу, а звичайний цикл дає перервати будь-коли.',
          },
          {
            text: 'Кинувши виняток.',
            why: 'Технічно це працює, але використовувати обробку помилок як команду переходу — робити код неприємним для читання. Є дві простіші відповіді.',
          },
        ],
      },
      {
        q: 'Що тут не так?<br><code>for (let i = 0; i &lt; list.length; i++) list.push(i);</code>',
        answer: 0,
        options: [
          {
            text: 'Цикл ніколи не завершиться — <code>length</code> перечитують щооберту.',
            why: 'Умову не зафіксовано на початку. Кожен <code>push</code> відсуває кінець ще на крок, і лічильник його не наздожене.',
          },
          {
            text: 'Нічого — <code>length</code> прочитали один раз перед першим обертом.',
            why: 'Це поширене припущення, і воно хибне. Умову ставлять знову перед кожним обертом.',
          },
          {
            text: '<code>push</code> не можна вживати всередині циклу.',
            why: 'Його можна вживати будь-де. Проблема в тому, що він робить з умовою.',
          },
          {
            text: '<code>i</code> мав би бути <code>var</code>.',
            why: 'Це зробило б гірше, а не краще. Вибір <code>let</code> правильний.',
          },
        ],
      },
      {
        q: 'Коли <code>do ... while</code> виконає тіло більше разів, ніж рівноцінний <code>while</code>?',
        answer: 1,
        options: [
          {
            text: 'Ніколи — вони однакові.',
            why: 'Вони збігаються майже завжди. Є один випадок, коли ні.',
          },
          {
            text: 'Коли умова хибна вже перед першим обертом.',
            why: '<code>while</code> перевіряє спершу і виконується нуль разів. <code>do ... while</code> перевіряє потім, тож тіло вже виконалося раз. У цьому вся різниця.',
          },
          {
            text: 'Коли умова стає хибною посередині.',
            why: 'Тоді обидва поводяться однаково: завершують оберт і спиняються.',
          },
          {
            text: 'Коли тіло містить <code>continue</code>.',
            why: '<code>continue</code> працює однаково в обох.',
          },
        ],
      },
    ],
  },
});
