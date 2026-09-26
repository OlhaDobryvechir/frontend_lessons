/*
 * Content of JS lesson 03 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson owns hoisting, the temporal dead zone and block
 * scope. The scope chain and closures belong to lesson 9.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Deklarasjon av variabler: var, const, let',
      kicker: 'Leksjon 3 &middot; Javascript',
      title: 'Deklarasjon av variabler: var, const, let',
      lead: 'Tre nøkkelord for det samme, og bare to av dem er verdt å skrive. Forskjellen handler om hvor et navn finnes, og fra hvilket øyeblikk det kan brukes.',

      's.const.t': 'const — navnet står fast',
      's.const.d':
        '<p><code>const</code> sier at dette navnet aldri kommer til å peke på noe annet. Prøver du likevel, stopper språket deg med en gang.</p>' +
        '<p>Og her er koblingen til forrige leksjon, som forvirrer alle én gang: <code>const</code> låser bindingen, ikke verdien. Et <code>const</code>-objekt kan fylles, tømmes og endres så mye du vil. Det eneste som er forbudt, er å la navnet peke på et annet objekt.</p>' +
        '<p>Et <code>const</code> må dessuten få en verdi i samme setning. Det finnes ingen tom <code>const</code> du kan fylle senere.</p>' +
        '<p>Bruk den som standard. Ikke fordi verdien er hellig, men fordi et navn som aldri flytter seg, er ett mindre å holde styr på når du leser koden senere.</p>',

      's.let.t': 'let — navnet kan flytte seg',
      's.let.d':
        '<p><code>let</code> er nøyaktig det samme som <code>const</code>, bortsett fra at navnet kan tilordnes på nytt. Det er hele forskjellen.</p>' +
        '<p>Den kan også erklæres uten verdi, og står da på <code>undefined</code> til noen fyller den.</p>' +
        '<p>Det den ikke tillater, er å erklære det samme navnet to ganger i samme blokk. Det er en fordel: en skrivefeil der du trodde du laget en ny variabel, blir en feilmelding i stedet for en stille overskriving.</p>',

      's.var.t': 'var — den som ikke ser blokker',
      's.var.d':
        '<p><code>var</code> er den opprinnelige måten, og den oppfører seg annerledes på ett avgjørende punkt: den bryr seg ikke om krøllparenteser. En <code>var</code> erklært inne i en <code>if</code> eller en løkke finnes i hele funksjonen rundt.</p>' +
        '<p>Det er sjelden det du mener. Du skrev parentesene fordi du ville avgrense noe, og <code>var</code> overser avgrensningen.</p>' +
        '<p>Den lar deg også erklære samme navn om igjen uten å si fra. To <code>var a</code> i samme funksjon er lovlig, og den andre overskriver stille den første &mdash; noe som skjuler nettopp de skrivefeilene <code>let</code> ville fanget.</p>' +
        '<p>Du trenger den ikke i ny kode. Du trenger å kjenne den igjen i gammel.</p>',

      's.hoist.t': 'Heising: erklæringen kommer først',
      's.hoist.d':
        '<p>Før en funksjon kjøres, leses den igjennom, og alle erklæringer i den blir kjent. Det er dette som kalles heising, og det forklarer flere ting som ellers ser umulige ut.</p>' +
        '<p>En <code>var</code> finnes derfor fra toppen av funksjonen sin, med verdien <code>undefined</code>, selv om linjen som erklærer den står lenger nede. Å lese den før den linjen gir ikke en feil &mdash; den gir <code>undefined</code>, som er verre, fordi programmet bare går videre.</p>' +
        '<p>En funksjon erklært med <code>function</code> heises derimot i sin helhet: du kan kalle den på en linje over der den står. Men en funksjon lagret i en <code>var</code> er bare en vanlig verdi, og variabelen er <code>undefined</code> til tilordningen kjører. Kaller du den for tidlig, får du «er ikke en funksjon».</p>',

      's.tdz.t': 'Den døde sonen',
      's.tdz.d':
        '<p><code>let</code> og <code>const</code> heises også &mdash; det er en utbredt misforståelse at de ikke gjør det. Forskjellen er hva som skjer hvis du rører dem for tidlig.</p>' +
        '<p>Fra toppen av blokken og fram til linjen som erklærer dem, finnes navnet, men er ubrukelig. Leser du det der, får du en feilmelding i stedet for <code>undefined</code>. Det området kalles den døde sonen, og den er en tjeneste: den gjør en for tidlig lesning til en feil du ser, i stedet for en verdi du ikke forventet.</p>' +
        '<p>Merk én ting som overrasker: <code>typeof</code> beskytter deg ikke her. På et navn som ikke finnes i det hele tatt, gir <code>typeof</code> pent <code>&#39;undefined&#39;</code>. På et navn i den døde sonen kaster den. Det er det ene stedet <code>typeof</code> kan feile.</p>',

      's.loop.t': 'Løkken som gjorde let nødvendig',
      's.loop.d':
        '<p>Dette er eksempelet som overbeviste alle. En løkke som lager funksjoner &mdash; hendelseslyttere, tidtakere, hva som helst &mdash; og som skal huske hvilken runde den var i.</p>' +
        '<p>Med <code>var</code> finnes det bare én <code>i</code> for hele funksjonen. Alle funksjonene du laget, peker på den samme, og når de omsider kjører, er løkken ferdig. Alle sier <code>3</code>.</p>' +
        '<p>Med <code>let</code> får hver runde sin egen <code>j</code>. Funksjonen fra runde null holder på sin null. Det er ikke en spesialregel for løkker som noen la til i etterkant &mdash; det følger av at <code>let</code> hører til blokken, og hver runde er sin egen blokk.</p>',

      's.global.t': 'Når et navn slipper ut',
      's.global.d':
        '<p>Tilordner du til et navn du aldri erklærte, lager gammel Javascript en global variabel av det, uten å si fra. En skrivefeil blir til en ny global som ligger og virker til den gjør skade et helt annet sted.</p>' +
        '<p>I streng modus er det en feilmelding i stedet, og moduler er alltid strenge. I et hvilket som helst moderne prosjekt får du altså beskjed &mdash; men det er verdt å vite hvorfor regelen finnes.</p>' +
        '<p>Én siste forskjell: i et klassisk skript blir en <code>var</code> på toppnivå en egenskap på <code>window</code>. <code>let</code> og <code>const</code> gjør ikke det. De finnes, men de henger seg ikke på det globale objektet.</p>',

      's.note':
        '<p>Kortversjonen. <code>const</code> som standard, <code>let</code> når navnet må flytte seg, <code>var</code> aldri i ny kode. <code>const</code> låser navnet, ikke innholdet. <code>var</code> hører til funksjonen, <code>let</code> og <code>const</code> til blokken. Alt heises, men bare <code>var</code> kan leses for tidlig uten å klage &mdash; og <code>typeof</code> redder deg ikke i den døde sonen.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Declaration of variables: var, const, let',
      kicker: 'Lesson 3 &middot; Javascript',
      title: 'Declaration of variables: var, const, let',
      lead: 'Three keywords for the same thing, and only two of them worth typing. The difference is about where a name exists, and from which moment it can be used.',

      's.const.t': 'const — the name stays put',
      's.const.d':
        '<p><code>const</code> says this name will never point at anything else. Try anyway and the language stops you immediately.</p>' +
        '<p>And here is the link back to the previous lesson, the one that confuses everybody once: <code>const</code> locks the binding, not the value. A <code>const</code> object can be filled, emptied and changed as much as you like. The only forbidden thing is pointing the name at a different object.</p>' +
        '<p>A <code>const</code> must also be given a value in the same statement. There is no empty <code>const</code> you can fill in later.</p>' +
        '<p>Use it by default. Not because the value is sacred, but because a name that never moves is one less thing to keep track of when you read the code later.</p>',

      's.let.t': 'let — the name can move',
      's.let.d':
        '<p><code>let</code> is exactly the same as <code>const</code>, except that the name can be reassigned. That is the whole difference.</p>' +
        '<p>It can also be declared without a value, and then sits at <code>undefined</code> until someone fills it.</p>' +
        '<p>What it does not allow is declaring the same name twice in the same block. That is a benefit: a typo where you thought you were making a new variable becomes an error instead of a silent overwrite.</p>',

      's.var.t': 'var — the one that cannot see blocks',
      's.var.d':
        '<p><code>var</code> is the original way, and it behaves differently in one decisive respect: it does not care about curly braces. A <code>var</code> declared inside an <code>if</code> or a loop exists throughout the surrounding function.</p>' +
        '<p>That is rarely what you mean. You wrote the braces because you wanted to fence something off, and <code>var</code> ignores the fence.</p>' +
        '<p>It also lets you declare the same name again without a word. Two <code>var a</code> in one function is legal, and the second silently overwrites the first — hiding exactly the typos <code>let</code> would have caught.</p>' +
        '<p>You do not need it in new code. You need to recognise it in old code.</p>',

      's.hoist.t': 'Hoisting: the declaration comes first',
      's.hoist.d':
        '<p>Before a function runs it is read through, and every declaration in it becomes known. This is what hoisting means, and it explains several things that otherwise look impossible.</p>' +
        '<p>A <code>var</code> therefore exists from the top of its function, holding <code>undefined</code>, even though the line declaring it sits further down. Reading it before that line is not an error — it gives <code>undefined</code>, which is worse, because the program simply carries on.</p>' +
        '<p>A function declared with <code>function</code>, by contrast, is hoisted whole: you can call it on a line above where it is written. But a function stored in a <code>var</code> is just an ordinary value, and the variable is <code>undefined</code> until the assignment runs. Call it too early and you get "is not a function".</p>',

      's.tdz.t': 'The dead zone',
      's.tdz.d':
        '<p><code>let</code> and <code>const</code> are hoisted too — it is a widespread misunderstanding that they are not. The difference is what happens if you touch them too early.</p>' +
        '<p>From the top of the block until the line that declares them, the name exists but is unusable. Read it there and you get an error instead of <code>undefined</code>. That stretch is called the temporal dead zone, and it is a service: it turns an early read into a failure you can see, rather than a value you did not expect.</p>' +
        '<p>Note one thing that surprises people: <code>typeof</code> does not protect you here. On a name that does not exist at all, <code>typeof</code> politely returns <code>&#39;undefined&#39;</code>. On a name in the dead zone, it throws. That is the one place <code>typeof</code> can fail.</p>',

      's.loop.t': 'The loop that made let necessary',
      's.loop.d':
        '<p>This is the example that convinced everyone. A loop that creates functions — event listeners, timers, anything — which are meant to remember which turn they came from.</p>' +
        '<p>With <code>var</code> there is only one <code>i</code> for the whole function. Every function you made points at that same one, and by the time they actually run, the loop has finished. They all say <code>3</code>.</p>' +
        '<p>With <code>let</code>, each turn gets its own <code>j</code>. The function from turn zero keeps its zero. This is not a special rule for loops that someone bolted on afterwards — it follows from <code>let</code> belonging to the block, and each turn being its own block.</p>',

      's.global.t': 'When a name escapes',
      's.global.d':
        '<p>Assign to a name you never declared and old Javascript quietly makes a global out of it. A typo becomes a new global that sits there working until it does damage somewhere else entirely.</p>' +
        '<p>In strict mode it is an error instead, and modules are always strict. In any modern project you will therefore be told — but it is worth knowing why the rule exists.</p>' +
        '<p>One last difference: in a classic script, a top-level <code>var</code> becomes a property on <code>window</code>. <code>let</code> and <code>const</code> do not. They exist, but they do not attach themselves to the global object.</p>',

      's.note':
        '<p>The short version. <code>const</code> by default, <code>let</code> when the name has to move, <code>var</code> never in new code. <code>const</code> locks the name, not the contents. <code>var</code> belongs to the function, <code>let</code> and <code>const</code> to the block. Everything is hoisted, but only <code>var</code> can be read early without complaint — and <code>typeof</code> will not rescue you in the dead zone.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Оголошення змінних: var, const, let',
      kicker: 'Урок 3 &middot; Javascript',
      title: 'Оголошення змінних: var, const, let',
      lead: 'Три ключові слова для того самого, і лише два з них варто писати. Різниця в тому, де ім’я існує і з якої миті ним можна користуватися.',

      's.const.t': 'const — ім’я лишається на місці',
      's.const.d':
        '<p><code>const</code> каже, що це ім’я ніколи не вказуватиме на щось інше. Спробуєте попри це — мова спинить вас одразу.</p>' +
        '<p>І ось зв’язок із попереднім уроком, який раз збиває з пантелику всіх: <code>const</code> замикає зв’язування, а не значення. <code>const</code>-об’єкт можна наповнювати, спорожняти і змінювати скільки завгодно. Заборонено лише одне — спрямувати ім’я на інший об’єкт.</p>' +
        '<p>До того ж <code>const</code> має дістати значення в тому самому рядку. Порожнього <code>const</code>, який заповнять пізніше, не буває.</p>' +
        '<p>Беріть його за замовчуванням. Не тому, що значення священне, а тому, що ім’я, яке ніколи не рухається, — це на одну річ менше, за якою треба стежити, читаючи код згодом.</p>',

      's.let.t': 'let — ім’я може рухатися',
      's.let.d':
        '<p><code>let</code> — це точно те саме, що й <code>const</code>, крім того, що імені можна призначити нове значення. У цьому вся різниця.</p>' +
        '<p>Його також можна оголосити без значення, і тоді воно лишається на <code>undefined</code>, доки хтось його не заповнить.</p>' +
        '<p>Чого він не дозволяє — це оголосити те саме ім’я двічі в одному блоці. І це перевага: одрук там, де ви думали, що створюєте нову змінну, стає помилкою замість тихого перезапису.</p>',

      's.var.t': 'var — той, що не бачить блоків',
      's.var.d':
        '<p><code>var</code> — первісний спосіб, і він поводиться інакше в одному вирішальному сенсі: йому байдуже до фігурних дужок. <code>var</code>, оголошений усередині <code>if</code> чи циклу, існує в усій функції навколо.</p>' +
        '<p>Це рідко те, що ви маєте на увазі. Ви написали дужки, бо хотіли щось відмежувати, а <code>var</code> цю межу ігнорує.</p>' +
        '<p>Він також дозволяє оголосити те саме ім’я знову, не сказавши ні слова. Два <code>var a</code> в одній функції законні, і другий тихо перезаписує перший — приховуючи саме ті одруки, які <code>let</code> упіймав би.</p>' +
        '<p>У новому коді він вам не потрібен. Потрібно впізнавати його в старому.</p>',

      's.hoist.t': 'Підняття: оголошення йде першим',
      's.hoist.d':
        '<p>Перш ніж функція виконається, її прочитують, і всі оголошення в ній стають відомими. Це й називають підняттям, і воно пояснює кілька речей, які інакше виглядають неможливими.</p>' +
        '<p><code>var</code> тому існує від початку своєї функції зі значенням <code>undefined</code>, хоча рядок, що його оголошує, стоїть нижче. Прочитати його до цього рядка — не помилка: ви дістаєте <code>undefined</code>, і це гірше, бо програма просто йде далі.</p>' +
        '<p>А от функція, оголошена через <code>function</code>, піднімається цілком: її можна викликати рядком вище, ніж вона написана. Але функція, збережена у <code>var</code>, є звичайним значенням, і змінна лишається <code>undefined</code>, доки не виконається призначення. Викличете зарано — дістанете «не є функцією».</p>',

      's.tdz.t': 'Мертва зона',
      's.tdz.d':
        '<p><code>let</code> і <code>const</code> теж піднімаються — поширене непорозуміння, що ні. Різниця в тому, що станеться, якщо торкнутися їх зарано.</p>' +
        '<p>Від початку блоку і до рядка, який їх оголошує, ім’я існує, але непридатне. Прочитаєте його там — дістанете помилку, а не <code>undefined</code>. Цей проміжок називають часовою мертвою зоною, і це послуга: він перетворює зарану читання на помилку, яку видно, а не на значення, якого ви не чекали.</p>' +
        '<p>Зверніть увагу на те, що дивує: <code>typeof</code> вас тут не захистить. На імені, якого взагалі немає, <code>typeof</code> чемно поверне <code>&#39;undefined&#39;</code>. На імені в мертвій зоні він кине помилку. Це єдине місце, де <code>typeof</code> може впасти.</p>',

      's.loop.t': 'Цикл, через який let став потрібним',
      's.loop.d':
        '<p>Це той приклад, що переконав усіх. Цикл, який створює функції — слухачів подій, таймери, будь-що — і які мають пам’ятати, з якого вони оберту.</p>' +
        '<p>З <code>var</code> на всю функцію існує лише одна <code>i</code>. Усі створені вами функції вказують на ту саму, а коли вони нарешті виконуються, цикл уже завершився. Усі кажуть <code>3</code>.</p>' +
        '<p>З <code>let</code> кожен оберт дістає власну <code>j</code>. Функція з нульового оберту зберігає свій нуль. Це не спеціальне правило для циклів, яке хтось потім прикрутив, — це випливає з того, що <code>let</code> належить блокові, а кожен оберт є власним блоком.</p>',

      's.global.t': 'Коли ім’я втікає',
      's.global.d':
        '<p>Призначте значення імені, якого ніколи не оголошували, — і давній Javascript тихо зробить із нього глобальну змінну. Одрук перетворюється на нову глобальну, яка лежить і працює, доки не нашкодить десь зовсім в іншому місці.</p>' +
        '<p>У строгому режимі це натомість помилка, а модулі завжди строгі. Тож у будь-якому сучасному проєкті вам про це скажуть — але варто знати, звідки це правило.</p>' +
        '<p>Остання відмінність: у класичному скрипті <code>var</code> верхнього рівня стає властивістю <code>window</code>. <code>let</code> і <code>const</code> — ні. Вони існують, але не чіпляються до глобального об’єкта.</p>',

      's.note':
        '<p>Коротко. <code>const</code> за замовчуванням, <code>let</code> коли ім’я має рухатися, <code>var</code> — ніколи в новому коді. <code>const</code> замикає ім’я, а не вміст. <code>var</code> належить функції, <code>let</code> і <code>const</code> — блокові. Піднімається все, але лише <code>var</code> можна прочитати зарано без скарги — і <code>typeof</code> не врятує вас у мертвій зоні.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: '<code>const kunde = {};</code> Hvilken linje feiler?',
        answer: 3,
        options: [
          {
            text: '<code>kunde.navn = &#39;Ada&#39;;</code>',
            why: 'Lovlig. Du endrer innholdet, og <code>const</code> bryr seg ikke om innholdet.',
          },
          {
            text: '<code>kunde.alder = 36;</code>',
            why: 'Også lovlig, av samme grunn.',
          },
          {
            text: '<code>delete kunde.navn;</code>',
            why: 'Lovlig. Fortsatt bare en endring av innholdet.',
          },
          {
            text: '<code>kunde = {};</code>',
            why: 'Dette er det eneste <code>const</code> stopper: å la navnet peke på et annet objekt. Bindingen er låst, verdien er ikke.',
          },
        ],
      },
      {
        q: 'Hva skjer her?<br><code>function f() { typeof x; var x = 1; }</code>',
        answer: 1,
        options: [
          {
            text: 'ReferenceError &mdash; <code>x</code> finnes ikke ennå.',
            why: 'Den finnes. En <code>var</code> er kjent fra toppen av funksjonen sin.',
          },
          {
            text: 'Den gir <code>&#39;undefined&#39;</code> &mdash; <code>x</code> er heist, men uten verdi.',
            why: 'Erklæringen er kjent fra toppen; tilordningen skjer først på sin egen linje. Det er nettopp derfor <code>var</code> er ubehagelig: en for tidlig lesning går stille igjennom.',
          },
          {
            text: 'Den gir <code>&#39;number&#39;</code>.',
            why: 'Tilordningen har ikke kjørt ennå når <code>typeof</code> leses.',
          },
          {
            text: 'SyntaxError.',
            why: 'Koden er helt gyldig. Det er oppførselen som overrasker.',
          },
        ],
      },
      {
        q: 'Og her?<br><code>function f() { typeof y; let y = 1; }</code>',
        answer: 2,
        options: [
          {
            text: 'Den gir <code>&#39;undefined&#39;</code>, som med <code>var</code>.',
            why: 'Det er nettopp forskjellen. <code>let</code> gir deg ikke en stille <code>undefined</code>.',
          },
          {
            text: 'Den gir <code>&#39;number&#39;</code>.',
            why: 'Linjen med tilordningen har ikke kjørt.',
          },
          {
            text: 'ReferenceError &mdash; <code>y</code> er i den døde sonen.',
            why: 'Navnet er heist, men ubrukelig til sin egen linje. Og legg merke til at <code>typeof</code> ikke beskytter deg her &mdash; det er det ene stedet den kan kaste.',
          },
          {
            text: 'Ingenting &mdash; <code>let</code> heises ikke.',
            why: '<code>let</code> heises også. Det er bare tilgangen før erklæringen som er forbudt.',
          },
        ],
      },
      {
        q: '<code>for (var i = 0; i &lt; 3; i++) fns.push(() =&gt; i);</code><br>Hva gir <code>fns.map(f =&gt; f())</code>?',
        answer: 3,
        options: [
          {
            text: '<code>[0, 1, 2]</code>',
            why: 'Det er svaret med <code>let</code>. Med <code>var</code> deler alle funksjonene én variabel.',
          },
          {
            text: '<code>[undefined, undefined, undefined]</code>',
            why: '<code>i</code> har en verdi. Den er bare ikke den du håpet.',
          },
          {
            text: '<code>[2, 2, 2]</code>',
            why: 'Nesten &mdash; men løkken stopper først når <code>i</code> har blitt 3 og betingelsen svikter. Det er verdien som blir stående.',
          },
          {
            text: '<code>[3, 3, 3]</code>',
            why: 'Det finnes bare én <code>i</code> i hele funksjonen. Når funksjonene kjører, er løkken ferdig og <code>i</code> er 3. Bytt til <code>let</code>, så får hver runde sin egen.',
          },
        ],
      },
      {
        q: 'Hvorfor foretrekkes <code>let</code> framfor <code>var</code> inne i en <code>if</code>-blokk?',
        answer: 0,
        options: [
          {
            text: 'Fordi <code>var</code> ignorerer blokken og finnes i hele funksjonen.',
            why: 'Du skrev krøllparentesene for å avgrense noe. <code>let</code> respekterer avgrensningen; <code>var</code> ser den ikke.',
          },
          {
            text: 'Fordi <code>var</code> er tregere.',
            why: 'Ytelsen er den samme. Forskjellen handler om hvor navnet finnes.',
          },
          {
            text: 'Fordi <code>var</code> ikke kan tilordnes på nytt.',
            why: 'Det er omvendt &mdash; <code>var</code> kan tilordnes fritt, og til og med erklæres på nytt.',
          },
          {
            text: 'Fordi <code>var</code> er fjernet fra språket.',
            why: 'Den virker fortsatt, og kommer alltid til å gjøre det. Den er bare sjelden det du vil ha.',
          },
        ],
      },
      {
        q: 'Du tilordner til et navn du aldri erklærte, inne i en modul. Hva skjer?',
        answer: 2,
        options: [
          {
            text: 'Det lages en global variabel.',
            why: 'Det er den gamle oppførselen, i såkalt slapp modus. Moduler kjører ikke slik.',
          },
          {
            text: 'Navnet blir en lokal <code>var</code>.',
            why: 'Ingen erklæring skjer implisitt. Enten blir det globalt, eller så blir det en feil.',
          },
          {
            text: 'ReferenceError &mdash; moduler er alltid i streng modus.',
            why: 'Nettopp derfor slipper du å oppdage skrivefeilen som en mystisk global tre filer unna. I et gammelt skript uten streng modus ville den samme linjen stille laget en global.',
          },
          {
            text: 'Ingenting &mdash; linjen hoppes over.',
            why: 'Linjer hoppes aldri over i stillhet. Enten virker den, eller så kaster den.',
          },
        ],
      },
    ],

    en: [
      {
        q: '<code>const customer = {};</code> Which line fails?',
        answer: 3,
        options: [
          {
            text: '<code>customer.name = &#39;Ada&#39;;</code>',
            why: 'Legal. You are changing the contents, and <code>const</code> does not care about contents.',
          },
          {
            text: '<code>customer.age = 36;</code>',
            why: 'Also legal, for the same reason.',
          },
          {
            text: '<code>delete customer.name;</code>',
            why: 'Legal. Still just a change to the contents.',
          },
          {
            text: '<code>customer = {};</code>',
            why: 'This is the only thing <code>const</code> stops: pointing the name at a different object. The binding is locked, the value is not.',
          },
        ],
      },
      {
        q: 'What happens here?<br><code>function f() { typeof x; var x = 1; }</code>',
        answer: 1,
        options: [
          {
            text: 'ReferenceError — <code>x</code> does not exist yet.',
            why: 'It does exist. A <code>var</code> is known from the top of its function.',
          },
          {
            text: 'It gives <code>&#39;undefined&#39;</code> — <code>x</code> is hoisted, but has no value.',
            why: 'The declaration is known from the top; the assignment only happens on its own line. This is exactly why <code>var</code> is uncomfortable: an early read passes silently.',
          },
          {
            text: 'It gives <code>&#39;number&#39;</code>.',
            why: 'The assignment has not run at the point <code>typeof</code> is read.',
          },
          {
            text: 'SyntaxError.',
            why: 'The code is perfectly valid. It is the behaviour that surprises.',
          },
        ],
      },
      {
        q: 'And here?<br><code>function f() { typeof y; let y = 1; }</code>',
        answer: 2,
        options: [
          {
            text: 'It gives <code>&#39;undefined&#39;</code>, as with <code>var</code>.',
            why: 'That is precisely the difference. <code>let</code> does not hand you a silent <code>undefined</code>.',
          },
          {
            text: 'It gives <code>&#39;number&#39;</code>.',
            why: 'The line with the assignment has not run.',
          },
          {
            text: 'ReferenceError — <code>y</code> is in the dead zone.',
            why: 'The name is hoisted but unusable until its own line. And note that <code>typeof</code> does not protect you here — it is the one place it can throw.',
          },
          {
            text: 'Nothing — <code>let</code> is not hoisted.',
            why: '<code>let</code> is hoisted too. It is only access before the declaration that is forbidden.',
          },
        ],
      },
      {
        q: '<code>for (var i = 0; i &lt; 3; i++) fns.push(() =&gt; i);</code><br>What does <code>fns.map(f =&gt; f())</code> give?',
        answer: 3,
        options: [
          {
            text: '<code>[0, 1, 2]</code>',
            why: 'That is the answer with <code>let</code>. With <code>var</code> all the functions share one variable.',
          },
          {
            text: '<code>[undefined, undefined, undefined]</code>',
            why: '<code>i</code> has a value. It is just not the one you hoped for.',
          },
          {
            text: '<code>[2, 2, 2]</code>',
            why: 'Close — but the loop only stops once <code>i</code> has become 3 and the condition fails. That is the value left behind.',
          },
          {
            text: '<code>[3, 3, 3]</code>',
            why: 'There is only one <code>i</code> in the whole function. By the time the functions run, the loop has finished and <code>i</code> is 3. Switch to <code>let</code> and each turn gets its own.',
          },
        ],
      },
      {
        q: 'Why is <code>let</code> preferred over <code>var</code> inside an <code>if</code> block?',
        answer: 0,
        options: [
          {
            text: 'Because <code>var</code> ignores the block and exists throughout the function.',
            why: 'You wrote the braces to fence something off. <code>let</code> respects the fence; <code>var</code> does not see it.',
          },
          {
            text: 'Because <code>var</code> is slower.',
            why: 'Performance is the same. The difference is about where the name exists.',
          },
          {
            text: 'Because <code>var</code> cannot be reassigned.',
            why: 'The opposite — <code>var</code> can be reassigned freely, and even redeclared.',
          },
          {
            text: 'Because <code>var</code> has been removed from the language.',
            why: 'It still works and always will. It is just rarely what you want.',
          },
        ],
      },
      {
        q: 'You assign to a name you never declared, inside a module. What happens?',
        answer: 2,
        options: [
          {
            text: 'A global variable is created.',
            why: 'That is the old behaviour, in so-called sloppy mode. Modules do not run that way.',
          },
          {
            text: 'The name becomes a local <code>var</code>.',
            why: 'No declaration happens implicitly. Either it becomes global, or it is an error.',
          },
          {
            text: 'ReferenceError — modules are always in strict mode.',
            why: 'Which is exactly why you are spared discovering the typo as a mysterious global three files away. In an old script without strict mode, the same line would quietly have made a global.',
          },
          {
            text: 'Nothing — the line is skipped.',
            why: 'Lines are never silently skipped. Either it works or it throws.',
          },
        ],
      },
    ],

    uk: [
      {
        q: '<code>const kunde = {};</code> Який рядок упаде?',
        answer: 3,
        options: [
          {
            text: '<code>kunde.name = &#39;Ada&#39;;</code>',
            why: 'Законно. Ви змінюєте вміст, а <code>const</code> до вмісту байдужий.',
          },
          {
            text: '<code>kunde.age = 36;</code>',
            why: 'Теж законно, з тієї самої причини.',
          },
          {
            text: '<code>delete kunde.name;</code>',
            why: 'Законно. Це й далі лише зміна вмісту.',
          },
          {
            text: '<code>kunde = {};</code>',
            why: 'Це єдине, що спиняє <code>const</code>: спрямувати ім’я на інший об’єкт. Зв’язування замкнене, значення — ні.',
          },
        ],
      },
      {
        q: 'Що станеться тут?<br><code>function f() { typeof x; var x = 1; }</code>',
        answer: 1,
        options: [
          {
            text: 'ReferenceError — <code>x</code> ще не існує.',
            why: 'Існує. <code>var</code> відомий від початку своєї функції.',
          },
          {
            text: 'Дасть <code>&#39;undefined&#39;</code> — <code>x</code> піднято, але без значення.',
            why: 'Оголошення відоме від початку; призначення стається лише на своєму рядку. Саме тому <code>var</code> незручний: зарано прочитання проходить тихо.',
          },
          {
            text: 'Дасть <code>&#39;number&#39;</code>.',
            why: 'На момент читання <code>typeof</code> призначення ще не виконалося.',
          },
          {
            text: 'SyntaxError.',
            why: 'Код цілком дійсний. Дивує саме поведінка.',
          },
        ],
      },
      {
        q: 'А тут?<br><code>function f() { typeof y; let y = 1; }</code>',
        answer: 2,
        options: [
          {
            text: 'Дасть <code>&#39;undefined&#39;</code>, як із <code>var</code>.',
            why: 'Саме в цьому й різниця. <code>let</code> не дає вам тихого <code>undefined</code>.',
          },
          {
            text: 'Дасть <code>&#39;number&#39;</code>.',
            why: 'Рядок із призначенням ще не виконався.',
          },
          {
            text: 'ReferenceError — <code>y</code> у мертвій зоні.',
            why: 'Ім’я піднято, але непридатне до свого рядка. І зверніть увагу: <code>typeof</code> вас тут не захищає — це єдине місце, де він може кинути помилку.',
          },
          {
            text: 'Нічого — <code>let</code> не піднімається.',
            why: '<code>let</code> теж піднімається. Заборонений лише доступ до оголошення.',
          },
        ],
      },
      {
        q: '<code>for (var i = 0; i &lt; 3; i++) fns.push(() =&gt; i);</code><br>Що дасть <code>fns.map(f =&gt; f())</code>?',
        answer: 3,
        options: [
          {
            text: '<code>[0, 1, 2]</code>',
            why: 'Це відповідь із <code>let</code>. З <code>var</code> усі функції ділять одну змінну.',
          },
          {
            text: '<code>[undefined, undefined, undefined]</code>',
            why: 'У <code>i</code> є значення. Просто не те, на яке ви сподівалися.',
          },
          {
            text: '<code>[2, 2, 2]</code>',
            why: 'Майже — але цикл спиняється лише тоді, коли <code>i</code> стає 3 і умова не виконується. Саме це значення й лишається.',
          },
          {
            text: '<code>[3, 3, 3]</code>',
            why: 'На всю функцію є лише одна <code>i</code>. Коли функції виконуються, цикл уже завершився і <code>i</code> дорівнює 3. Перейдіть на <code>let</code> — і кожен оберт дістане власну.',
          },
        ],
      },
      {
        q: 'Чому всередині блоку <code>if</code> віддають перевагу <code>let</code>, а не <code>var</code>?',
        answer: 0,
        options: [
          {
            text: 'Бо <code>var</code> ігнорує блок і існує в усій функції.',
            why: 'Ви написали дужки, щоб щось відмежувати. <code>let</code> цю межу поважає; <code>var</code> її не бачить.',
          },
          {
            text: 'Бо <code>var</code> повільніший.',
            why: 'Швидкодія однакова. Різниця в тому, де існує ім’я.',
          },
          {
            text: 'Бо <code>var</code> не можна призначити повторно.',
            why: 'Навпаки — <code>var</code> можна вільно призначати і навіть оголошувати наново.',
          },
          {
            text: 'Бо <code>var</code> вилучили з мови.',
            why: 'Він і досі працює і завжди працюватиме. Просто він рідко є тим, що вам потрібно.',
          },
        ],
      },
      {
        q: 'Ви призначаєте значення імені, якого ніколи не оголошували, усередині модуля. Що станеться?',
        answer: 2,
        options: [
          {
            text: 'Створиться глобальна змінна.',
            why: 'Це давня поведінка, у так званому нестрогому режимі. Модулі так не працюють.',
          },
          {
            text: 'Ім’я стане локальним <code>var</code>.',
            why: 'Неявних оголошень не буває. Або воно стає глобальним, або це помилка.',
          },
          {
            text: 'ReferenceError — модулі завжди у строгому режимі.',
            why: 'Саме тому вам не доведеться шукати цей одрук як загадкову глобальну за три файли звідси. У старому скрипті без строгого режиму той самий рядок тихо створив би глобальну.',
          },
          {
            text: 'Нічого — рядок пропуститься.',
            why: 'Рядки ніколи не пропускають мовчки. Або воно працює, або кидає помилку.',
          },
        ],
      },
    ],
  },
});
