/*
 * Content of JS lesson 09 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: lesson 3 owned block scope and hoisting; lesson 8 owned the
 * two function forms. This lesson owns the scope chain, closures and what
 * `this` actually resolves to.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Kontekst og synlighet for variabler',
      kicker: 'Leksjon 9 &middot; Javascript',
      title: 'Kontekst og synlighet for variabler',
      lead: 'To spørsmål som stadig blandes sammen: hvilke navn koden kan se, og hva <code>this</code> peker på. Det første avgjøres av hvor koden står. Det andre av hvordan den blir kalt.',

      's.chain.t': 'Kjeden går utover',
      's.chain.d':
        '<p>Når koden bruker et navn, leter språket først i blokken den står i, så i blokken utenfor, og videre utover til modulen og til slutt det globale. Finner den ingenting, er det en <code>ReferenceError</code>.</p>' +
        '<p>Søket går bare én vei. En funksjon ser alt rundt seg, men ingenting utenfra kan se inn i den. Det er hele grunnlaget for at man kan skrive kode som ikke kolliderer: alt du erklærer inne i en funksjon, er usynlig for resten av programmet.</p>' +
        '<p>Og kjeden bestemmes av hvor funksjonen er <em>skrevet</em>, ikke hvor den blir kalt fra. Sender du en funksjon til den andre siden av programmet og kaller den der, ser den fortsatt nøyaktig de samme navnene som da du skrev den.</p>',

      's.shadow.t': 'Et navn som dekker et annet',
      's.shadow.d':
        '<p>Erklærer du et navn som allerede finnes lenger ute, får du et nytt navn som skjuler det gamle. Inne i den blokken er det ditt som gjelder; utenfor er det ytre uendret.</p>' +
        '<p>Forskjellen mellom å erklære og å tilordne er hele poenget. <code>const navn = ...</code> lager en ny variabel; <code>navn = ...</code> uten nøkkelord endrer den som allerede finnes, hvor langt ute den enn er.</p>' +
        '<p>Skygging er nyttig og helt vanlig &mdash; parameternavn skygger ofte for noe ytre. Det blir først et problem når du trodde du endret den ytre og bare laget en ny.</p>',

      's.closure.t': 'En funksjon husker hvor den ble født',
      's.closure.d':
        '<p>Når en funksjon lages, får den med seg kjeden av omgivelser den ble skrevet i. Returnerer du funksjonen ut av den som laget den, følger omgivelsene med &mdash; de forsvinner ikke selv om funksjonen rundt er ferdig.</p>' +
        '<p>Det er dette som kalles en lukning, og det er mindre mystisk enn navnet antyder: variabelen lever så lenge noen fortsatt kan nå den.</p>' +
        '<p>Hvert kall lager sitt eget sett. To tellere laget av samme fabrikk deler ingenting; hver har sin egen <code>n</code>.</p>' +
        '<p>Og det er variabelen som huskes, ikke verdien den hadde. Endrer noe verdien etterpå, ser lukningen den nye. Det er nettopp derfor <code>var</code> i en løkke ga alle funksjonene samme svar i leksjon 3, og <code>let</code> ga hver runde sin egen.</p>',

      's.this.t': 'this avgjøres av kallet',
      's.this.d':
        '<p><code>this</code> er ikke en variabel du kan slå opp i kjeden. Den settes på nytt hver gang en vanlig funksjon kalles, og det er <em>måten</em> den kalles på som bestemmer verdien.</p>' +
        '<p>Kaller du den rett fram, uten noe foran punktumet, får du <code>undefined</code> i en modul og det globale objektet i et gammelt skript. Kaller du den som en metode, med noe foran punktumet, blir det objektet. Kaller du med <code>new</code>, blir det det nye objektet. Og kaller du med <code>call</code> eller <code>apply</code>, blir det det du oppga.</p>' +
        '<p>Legg merke til hva det innebærer: nøyaktig samme funksjon gir fire forskjellige svar, uten at en eneste linje i den er endret. Vil du vite hva <code>this</code> er, må du se på kallstedet, ikke på definisjonen.</p>',

      's.losing.t': 'Når punktumet forsvinner',
      's.losing.d':
        '<p>Dette er den vanligste <code>this</code>-feilen i praksis, og den ser ut som magi til du vet hva som skjer.</p>' +
        '<p>Tar du en metode ut av objektet og lagrer den i en variabel, får du bare funksjonen. Bindingen lå aldri i funksjonen &mdash; den lå i punktumet. Kaller du den etterpå, er det et helt vanlig kall, og <code>this</code> er borte.</p>' +
        '<p>Det skjer hver gang du sender en metode videre uten å kalle den: til en hendelseslytter, til en tidtaker, til <code>map</code>. Alle mottar funksjonen alene.</p>' +
        '<p>Hva du så får, avhenger av modus. I en modul er <code>this</code> <code>undefined</code>, og du får en <code>TypeError</code> med en gang &mdash; det beste utfallet, for da ser du feilen. I et klassisk skript er <code>this</code> vinduet, og du leser en egenskap som sjelden finnes: svaret blir <code>undefined</code>, og programmet går videre. Verst av alt er navnene vinduet faktisk har: en metode som leser <code>this.name</code>, gir den tomme teksten, fordi <code>window.name</code> er en ekte egenskap.</p>' +
        '<p>Det finnes to gode svar. Pakk kallet i en pil, som beholder <code>this</code> fra der du skrev den, eller bind metoden til objektet én gang. Begge sier tydelig hva du mente.</p>',

      's.bind.t': 'call, apply og bind',
      's.bind.d':
        '<p>De tre gjør nesten det samme. <code>call</code> kaller funksjonen med en <code>this</code> du velger. <code>apply</code> er identisk, bortsett fra at argumentene kommer i et array. <code>bind</code> kaller ikke i det hele tatt: den gir deg en ny funksjon som for alltid har den <code>this</code>-en.</p>' +
        '<p>Og «for alltid» er bokstavelig. En bundet funksjon kan ikke bindes om. Binder du den på nytt, får du en ny funksjon som fortsatt bruker den første bindingen &mdash; det andre forsøket blir stille ignorert. Det er verdt å kjenne den dagen en <code>bind</code> «ikke virker».</p>' +
        '<p>Og som i forrige leksjon: på en pilfunksjon gjør alle tre ingenting med <code>this</code>. Der finnes det ingen egen <code>this</code> å sette.</p>',

      's.module.t': 'Modulen er sitt eget rom',
      's.module.d':
        '<p>Toppnivået i en modul er ikke det globale rommet. Skriver du <code>const</code> der, finnes navnet i modulen og ingen andre steder &mdash; det havner ikke på <code>globalThis</code>.</p>' +
        '<p>I et klassisk skript er det annerledes: <code>var</code> og funksjonserklæringer på toppnivå blir egenskaper på det globale objektet, mens <code>let</code> og <code>const</code> ikke blir det. Det er samme skille som i leksjon 3.</p>' +
        '<p>Moduler er dessuten alltid strenge, og det endrer <code>this</code> i et rett fram kall fra det globale objektet til <code>undefined</code>. Det høres ut som en forverring og er en forbedring: en metode som mistet bindingen sin, feiler nå tydelig i stedet for å skrive til noe globalt ved et uhell.</p>',

      's.note':
        '<p>Kortversjonen. Navn slås opp utover fra der koden er skrevet, aldri innover. Skygging lager et nytt navn, ikke en endring. En lukning husker variabelen, ikke verdien. <code>this</code> avgjøres av kallet: rett fram, som metode, med <code>new</code>, eller satt med <code>call</code>. Mister du punktumet, mister du <code>this</code> &mdash; bruk en pil eller <code>bind</code>. Og en bundet funksjon kan ikke bindes om.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Context and visibility of variables',
      kicker: 'Lesson 9 &middot; Javascript',
      title: 'Context and visibility of variables',
      lead: 'Two questions that keep getting confused: which names the code can see, and what <code>this</code> points at. The first is decided by where the code is written. The second by how it is called.',

      's.chain.t': 'The chain goes outward',
      's.chain.d':
        '<p>When code uses a name, the language looks first in the block it sits in, then in the block outside that, and onward out to the module and finally the global scope. Find nothing and it is a <code>ReferenceError</code>.</p>' +
        '<p>The search only goes one way. A function sees everything around it, but nothing outside can see into it. That is the whole basis for writing code that does not collide: everything you declare inside a function is invisible to the rest of the program.</p>' +
        '<p>And the chain is fixed by where the function is <em>written</em>, not where it is called from. Pass a function to the other side of the program and call it there, and it still sees exactly the same names it saw when you wrote it.</p>',

      's.shadow.t': 'A name that covers another',
      's.shadow.d':
        '<p>Declare a name that already exists further out and you get a new name that hides the old one. Inside that block yours applies; outside, the outer one is unchanged.</p>' +
        '<p>The difference between declaring and assigning is the whole point. <code>const name = ...</code> makes a new variable; <code>name = ...</code> with no keyword changes the one that already exists, however far out it is.</p>' +
        '<p>Shadowing is useful and entirely ordinary — parameter names often shadow something outer. It only becomes a problem when you thought you were changing the outer one and merely made a new one.</p>',

      's.closure.t': 'A function remembers where it was born',
      's.closure.d':
        '<p>When a function is created it carries along the chain of surroundings it was written in. Return that function out of the one that made it and the surroundings come too — they do not vanish just because the outer function has finished.</p>' +
        '<p>This is what a closure is, and it is less mysterious than the name suggests: the variable lives as long as somebody can still reach it.</p>' +
        '<p>Each call makes its own set. Two counters from the same factory share nothing; each has its own <code>n</code>.</p>' +
        '<p>And it is the variable that is remembered, not the value it held. If something changes the value afterwards, the closure sees the new one. Which is exactly why <code>var</code> in a loop gave every function the same answer in lesson 3, and <code>let</code> gave each turn its own.</p>',

      's.this.t': 'this is decided by the call',
      's.this.d':
        '<p><code>this</code> is not a variable you can look up in the chain. It is set afresh every time an ordinary function is called, and it is the <em>way</em> it is called that decides the value.</p>' +
        '<p>Call it plainly, with nothing before a dot, and you get <code>undefined</code> in a module and the global object in an old script. Call it as a method, with something before the dot, and it is that object. Call it with <code>new</code> and it is the fresh object. Call it with <code>call</code> or <code>apply</code> and it is whatever you supplied.</p>' +
        '<p>Notice what that means: the very same function gives four different answers without a single line of it changing. To know what <code>this</code> is, look at the call site, not the definition.</p>',

      's.losing.t': 'When the dot disappears',
      's.losing.d':
        '<p>This is the commonest <code>this</code> bug in practice, and it looks like magic until you know what is happening.</p>' +
        '<p>Take a method out of its object and store it in a variable and you get just the function. The binding was never in the function — it was in the dot. Call it afterwards and it is an ordinary plain call, and <code>this</code> is gone.</p>' +
        '<p>It happens every time you pass a method along without calling it: to an event listener, to a timer, to <code>map</code>. All of them receive the function alone.</p>' +
        '<p>What you get then depends on the mode. In a module <code>this</code> is <code>undefined</code> and you get a <code>TypeError</code> straight away — the best outcome, because you can see it. In a classic script <code>this</code> is the window, and you read a property that rarely exists: the answer is <code>undefined</code> and the program carries on. Worst of all are the names the window actually has: a method reading <code>this.name</code> gives the empty string, because <code>window.name</code> is a real property.</p>' +
        '<p>There are two good answers. Wrap the call in an arrow, which keeps <code>this</code> from where you wrote it, or bind the method to the object once. Both say plainly what you meant.</p>',

      's.bind.t': 'call, apply and bind',
      's.bind.d':
        '<p>The three do nearly the same thing. <code>call</code> calls the function with a <code>this</code> of your choosing. <code>apply</code> is identical except the arguments arrive in an array. <code>bind</code> does not call at all: it hands you a new function permanently attached to that <code>this</code>.</p>' +
        '<p>And "permanently" is literal. A bound function cannot be rebound. Bind it again and you get a new function that still uses the first binding — the second attempt is silently ignored. Worth knowing on the day a <code>bind</code> "does not work".</p>' +
        '<p>And as in the previous lesson: on an arrow function all three do nothing to <code>this</code>. There is no own <code>this</code> there to set.</p>',

      's.module.t': 'A module is its own room',
      's.module.d':
        '<p>The top level of a module is not the global scope. Write <code>const</code> there and the name exists in the module and nowhere else — it does not land on <code>globalThis</code>.</p>' +
        '<p>In a classic script it is different: top-level <code>var</code> and function declarations become properties of the global object, while <code>let</code> and <code>const</code> do not. That is the same split as in lesson 3.</p>' +
        '<p>Modules are also always strict, and that changes <code>this</code> in a plain call from the global object to <code>undefined</code>. It sounds like a downgrade and is an improvement: a method that lost its binding now fails visibly instead of writing to something global by accident.</p>',

      's.note':
        '<p>The short version. Names are looked up outward from where the code is written, never inward. Shadowing makes a new name, not a change. A closure remembers the variable, not the value. <code>this</code> is decided by the call: plain, as a method, with <code>new</code>, or set with <code>call</code>. Lose the dot and you lose <code>this</code> — use an arrow or <code>bind</code>. And a bound function cannot be rebound.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Контекст і видимість змінних',
      kicker: 'Урок 9 &middot; Javascript',
      title: 'Контекст і видимість змінних',
      lead: 'Два питання, які постійно плутають: які імена бачить код і на що вказує <code>this</code>. Перше визначається тим, де код написано. Друге — тим, як його викликають.',

      's.chain.t': 'Ланцюжок іде назовні',
      's.chain.d':
        '<p>Коли код уживає ім’я, мова шукає спершу в блоці, де воно стоїть, потім у блоці навколо, і далі назовні — до модуля і зрештою до глобальної області. Не знайде — буде <code>ReferenceError</code>.</p>' +
        '<p>Пошук іде лише в один бік. Функція бачить усе навколо себе, але ніщо ззовні не бачить усередину неї. Це і є вся підстава для того, щоб писати код, який не стикається: усе, оголошене всередині функції, невидиме для решти програми.</p>' +
        '<p>А ланцюжок визначається тим, де функцію <em>написано</em>, а не звідки її викликають. Передайте функцію на інший бік програми і викличте її там — вона все одно бачитиме рівно ті самі імена, що й тоді, коли ви її писали.</p>',

      's.shadow.t': 'Ім’я, що закриває інше',
      's.shadow.d':
        '<p>Оголосіть ім’я, яке вже існує далі назовні, — і ви дістанете нове ім’я, що ховає старе. Усередині того блоку діє ваше; назовні зовнішнє лишається незмінним.</p>' +
        '<p>Різниця між оголошенням і призначенням і є суттю. <code>const name = ...</code> створює нову змінну; <code>name = ...</code> без ключового слова змінює ту, що вже існує, хоч би як далеко назовні вона була.</p>' +
        '<p>Затінення корисне і цілком звичайне — імена параметрів часто затінюють щось зовнішнє. Проблемою воно стає лише тоді, коли ви думали, що змінюєте зовнішнє, а лише створили нове.</p>',

      's.closure.t': 'Функція пам’ятає, де народилася',
      's.closure.d':
        '<p>Коли функцію створюють, вона забирає з собою ланцюжок оточень, у яких її написали. Поверніть цю функцію назовні з тієї, що її створила, — і оточення піде слідом: воно не зникає лише через те, що зовнішня функція завершилася.</p>' +
        '<p>Це і називають замиканням, і воно менш загадкове, ніж натякає назва: змінна живе, доки хтось іще може до неї дотягнутися.</p>' +
        '<p>Кожен виклик створює власний набір. Два лічильники з однієї фабрики не ділять нічого; у кожного власне <code>n</code>.</p>' +
        '<p>І пам’ятається саме змінна, а не значення, яке вона мала. Якщо щось змінить значення потім, замикання побачить нове. Саме тому <code>var</code> у циклі давав усім функціям однакову відповідь в уроці 3, а <code>let</code> давав кожному оберту власну.</p>',

      's.this.t': 'this визначає виклик',
      's.this.d':
        '<p><code>this</code> — не змінна, яку можна знайти в ланцюжку. Його встановлюють наново щоразу, коли викликають звичайну функцію, і значення визначає саме <em>спосіб</em> виклику.</p>' +
        '<p>Викличете просто так, без нічого перед крапкою — дістанете <code>undefined</code> у модулі і глобальний об’єкт у давньому скрипті. Викличете як метод, із чимось перед крапкою — це буде той об’єкт. Викличете з <code>new</code> — це буде новий об’єкт. Викличете з <code>call</code> чи <code>apply</code> — це буде те, що ви подали.</p>' +
        '<p>Зверніть увагу, що це означає: та сама функція дає чотири різні відповіді, і в ній не змінився жоден рядок. Щоб дізнатися, чим є <code>this</code>, дивіться на місце виклику, а не на визначення.</p>',

      's.losing.t': 'Коли крапка зникає',
      's.losing.d':
        '<p>Це найпоширеніша на практиці помилка з <code>this</code>, і вона виглядає як магія, доки не знаєш, що відбувається.</p>' +
        '<p>Візьміть метод з об’єкта і збережіть у змінній — і ви дістанете саму лише функцію. Прив’язки ніколи не було у функції: вона була в крапці. Викличете її потім — це буде звичайний простий виклик, і <code>this</code> зникне.</p>' +
        '<p>Це стається щоразу, коли ви передаєте метод далі, не викликаючи його: слухачеві подій, таймеру, у <code>map</code>. Усі вони дістають саму функцію.</p>' +
        '<p>Що ви дістанете далі, залежить від режиму. У модулі <code>this</code> є <code>undefined</code>, і ви одразу дістаєте <code>TypeError</code> — найкращий результат, бо помилку видно. У класичному скрипті <code>this</code> є вікном, і ви читаєте властивість, якої зазвичай немає: відповіддю буде <code>undefined</code>, а програма піде далі. Найгірші — імена, які вікно справді має: метод, що читає <code>this.name</code>, дасть порожній текст, бо <code>window.name</code> є справжньою властивістю.</p>' +
        '<p>Є дві добрі відповіді. Загорніть виклик у стрілку, яка зберігає <code>this</code> звідти, де ви її написали, або прив’яжіть метод до об’єкта один раз. Обидві ясно кажуть, що ви мали на увазі.</p>',

      's.bind.t': 'call, apply і bind',
      's.bind.d':
        '<p>Ці три роблять майже те саме. <code>call</code> викликає функцію з <code>this</code> на ваш вибір. <code>apply</code> ідентичний, тільки аргументи приходять масивом. <code>bind</code> не викликає взагалі: він дає нову функцію, назавжди прив’язану до того <code>this</code>.</p>' +
        '<p>І «назавжди» тут буквально. Прив’язану функцію неможливо прив’язати наново. Прив’яжете ще раз — дістанете нову функцію, яка й далі користується першою прив’язкою; другу спробу тихо проігнорують. Це варто знати того дня, коли <code>bind</code> «не працює».</p>' +
        '<p>І, як у попередньому уроці: на стрілковій функції всі три нічого не роблять із <code>this</code>. Там немає власного <code>this</code>, який можна було б задати.</p>',

      's.module.t': 'Модуль — окрема кімната',
      's.module.d':
        '<p>Верхній рівень модуля не є глобальною областю. Напишіть там <code>const</code> — і ім’я існуватиме в модулі й ніде більше: на <code>globalThis</code> воно не потрапить.</p>' +
        '<p>У класичному скрипті інакше: <code>var</code> і оголошення функцій верхнього рівня стають властивостями глобального об’єкта, а <code>let</code> і <code>const</code> — ні. Це той самий поділ, що й в уроці 3.</p>' +
        '<p>До того ж модулі завжди строгі, і це змінює <code>this</code> у простому виклику з глобального об’єкта на <code>undefined</code>. Звучить як погіршення, а є покращенням: метод, що втратив прив’язку, тепер падає помітно, замість випадково записувати щось у глобальне.</p>',

      's.note':
        '<p>Коротко. Імена шукають назовні від місця, де написано код, і ніколи всередину. Затінення створює нове ім’я, а не зміну. Замикання пам’ятає змінну, а не значення. <code>this</code> визначає виклик: простий, як метод, із <code>new</code> або заданий через <code>call</code>. Втратите крапку — втратите <code>this</code>: беріть стрілку або <code>bind</code>. І прив’язану функцію не можна прив’язати наново.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: '<code>const teller = { navn: &#39;a&#39;, les() { return this.navn; } };</code><br><code>const løs = teller.les;</code><br>Hva gir <code>løs()</code> i en modul?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;a&#39;</code>',
            why: 'Det ville krevd at bindingen fulgte med funksjonen. Den lå i punktumet, ikke i funksjonen.',
          },
          {
            text: 'Selve objektet.',
            why: '<code>this.navn</code> ville uansett gitt en egenskap, ikke objektet.',
          },
          {
            text: 'En TypeError, fordi <code>this</code> er <code>undefined</code>.',
            why: 'I en modul er et rett fram kall strengt, så <code>this</code> er <code>undefined</code>, og <code>undefined.navn</code> kaster. I et gammelt skript ville du fått <code>undefined</code> i stedet &mdash; stille og verre.',
          },
          {
            text: '<code>&#39;løs&#39;</code>',
            why: 'Navnet på variabelen har ingenting med <code>this</code> å gjøre.',
          },
        ],
      },
      {
        q: '<code>function lagTeller() { let n = 0; return () =&gt; ++n; }</code><br><code>const a = lagTeller(); const b = lagTeller();</code><br>Hva gir <code>a(); a(); b();</code>?',
        answer: 1,
        options: [
          {
            text: '<code>1, 2, 3</code>',
            why: 'Det ville krevd at de delte samme <code>n</code>. Hvert kall til fabrikken lager et nytt sett.',
          },
          {
            text: '<code>1, 2, 1</code>',
            why: 'Hvert kall til <code>lagTeller</code> gir sin egen <code>n</code>. <code>a</code> teller for seg, og <code>b</code> begynner på nytt.',
          },
          {
            text: '<code>1, 1, 1</code>',
            why: 'Da ville lukningen glemt mellom kallene. Den beholder variabelen så lenge funksjonen finnes.',
          },
          {
            text: 'En ReferenceError, fordi <code>n</code> er borte.',
            why: '<code>n</code> lever videre nettopp fordi den returnerte funksjonen fortsatt kan nå den.',
          },
        ],
      },
      {
        q: 'Hva blir <code>f.bind({ n: 1 }).bind({ n: 2 })()</code>?',
        answer: 0,
        options: [
          {
            text: 'Den bruker <code>{ n: 1 }</code> &mdash; den første bindingen.',
            why: 'En bundet funksjon kan ikke bindes om. Den andre <code>bind</code> lager riktignok en ny funksjon, men <code>this</code> er allerede låst fra første gang.',
          },
          {
            text: 'Den bruker <code>{ n: 2 }</code> &mdash; den siste vinner.',
            why: 'Det ville vært rimelig, og er ikke slik det virker. Den første bindingen står.',
          },
          {
            text: 'En TypeError.',
            why: 'Å binde to ganger er helt lovlig. Det andre forsøket gjør bare ingenting.',
          },
          {
            text: '<code>this</code> blir <code>undefined</code>.',
            why: 'Den er bundet &mdash; bare ikke til det du trodde.',
          },
        ],
      },
      {
        q: 'Hvorfor kan en funksjon lese en variabel fra der den ble skrevet, selv når den kalles et helt annet sted?',
        answer: 3,
        options: [
          {
            text: 'Fordi variabelen er global.',
            why: 'Den trenger ikke være det. En lokal variabel i den ytre funksjonen virker like godt.',
          },
          {
            text: 'Fordi <code>this</code> følger med funksjonen.',
            why: '<code>this</code> følger nettopp <em>ikke</em> med &mdash; den settes av kallet. Det er et annet spørsmål enn synlighet.',
          },
          {
            text: 'Fordi Javascript kopierer verdien inn i funksjonen.',
            why: 'Ingenting kopieres. Endres variabelen etterpå, ser funksjonen den nye verdien.',
          },
          {
            text: 'Fordi kjeden av omgivelser bestemmes av hvor funksjonen står, ikke hvor den kalles.',
            why: 'Det er hele ideen bak lukninger. Funksjonen tar med seg omgivelsene sine, og de lever videre så lenge den gjør det.',
          },
        ],
      },
      {
        q: 'I en modul står <code>const hemmelig = 1;</code> på toppnivå. Hva er <code>globalThis.hemmelig</code>?',
        answer: 1,
        options: [
          {
            text: '<code>1</code>',
            why: 'Det ville vært tilfellet for <code>var</code> i et klassisk skript, ikke for <code>const</code> i en modul.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Toppnivået i en modul er modulens eget rom. Navnet finnes der, men henger seg ikke på det globale objektet. <code>let</code> og <code>const</code> gjør det heller ikke i et skript.',
          },
          {
            text: 'En ReferenceError',
            why: 'Å lese en egenskap som ikke finnes, gir <code>undefined</code>, ikke en feil (leksjon 1).',
          },
          {
            text: 'Det kommer an på nettleseren.',
            why: 'Oppførselen er den samme overalt.',
          },
        ],
      },
      {
        q: 'Du sender en metode til <code>addEventListener</code> og mister <code>this</code>. Hvilke to løsninger er riktige?',
        answer: 2,
        options: [
          {
            text: 'Gjøre metoden til en pil på objektet.',
            why: 'Da får den <code>this</code> fra utsiden av objektet, ikke objektet selv. Det er nettopp feilen fra leksjon 8.',
          },
          {
            text: 'Kalle den med <code>teller.les()</code> når du registrerer den.',
            why: 'Da kaller du den med én gang og sender inn returverdien, ikke funksjonen.',
          },
          {
            text: 'Pakke den i en pil, eller binde den med <code>bind</code>.',
            why: 'Pilen kaller metoden med punktumet intakt; <code>bind</code> lager en versjon som har objektet festet til seg. Begge sier tydelig hva du mente.',
          },
          {
            text: 'Lagre objektet i en global variabel.',
            why: 'Det virker, og det bytter et lite problem mot et større.',
          },
        ],
      },
    ],

    en: [
      {
        q: '<code>const counter = { name: &#39;a&#39;, read() { return this.name; } };</code><br><code>const loose = counter.read;</code><br>What does <code>loose()</code> give in a module?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;a&#39;</code>',
            why: 'That would require the binding to travel with the function. It was in the dot, not in the function.',
          },
          {
            text: 'The object itself.',
            why: '<code>this.name</code> would give a property either way, not the object.',
          },
          {
            text: 'A TypeError, because <code>this</code> is <code>undefined</code>.',
            why: 'In a module a plain call is strict, so <code>this</code> is <code>undefined</code>, and <code>undefined.name</code> throws. In an old script you would get <code>undefined</code> instead — quieter and worse.',
          },
          {
            text: '<code>&#39;loose&#39;</code>',
            why: 'The name of the variable has nothing to do with <code>this</code>.',
          },
        ],
      },
      {
        q: '<code>function makeCounter() { let n = 0; return () =&gt; ++n; }</code><br><code>const a = makeCounter(); const b = makeCounter();</code><br>What does <code>a(); a(); b();</code> give?',
        answer: 1,
        options: [
          {
            text: '<code>1, 2, 3</code>',
            why: 'That would require them to share one <code>n</code>. Each call to the factory makes a new set.',
          },
          {
            text: '<code>1, 2, 1</code>',
            why: 'Each call to <code>makeCounter</code> gets its own <code>n</code>. <code>a</code> counts on its own and <code>b</code> starts again.',
          },
          {
            text: '<code>1, 1, 1</code>',
            why: 'That would mean the closure forgot between calls. It keeps the variable as long as the function exists.',
          },
          {
            text: 'A ReferenceError, because <code>n</code> is gone.',
            why: '<code>n</code> lives on precisely because the returned function can still reach it.',
          },
        ],
      },
      {
        q: 'What is <code>f.bind({ n: 1 }).bind({ n: 2 })()</code>?',
        answer: 0,
        options: [
          {
            text: 'It uses <code>{ n: 1 }</code> — the first binding.',
            why: 'A bound function cannot be rebound. The second <code>bind</code> does make a new function, but <code>this</code> is already locked from the first time.',
          },
          {
            text: 'It uses <code>{ n: 2 }</code> — the last one wins.',
            why: 'That would be reasonable, and is not how it works. The first binding stands.',
          },
          {
            text: 'A TypeError.',
            why: 'Binding twice is perfectly legal. The second attempt simply does nothing.',
          },
          {
            text: '<code>this</code> becomes <code>undefined</code>.',
            why: 'It is bound — just not to what you thought.',
          },
        ],
      },
      {
        q: 'Why can a function read a variable from where it was written, even when called somewhere else entirely?',
        answer: 3,
        options: [
          {
            text: 'Because the variable is global.',
            why: 'It need not be. A local variable in the outer function works just as well.',
          },
          {
            text: 'Because <code>this</code> travels with the function.',
            why: '<code>this</code> precisely does <em>not</em> travel — it is set by the call. That is a different question from visibility.',
          },
          {
            text: 'Because Javascript copies the value into the function.',
            why: 'Nothing is copied. Change the variable afterwards and the function sees the new value.',
          },
          {
            text: 'Because the chain of surroundings is fixed by where the function sits, not where it is called.',
            why: 'That is the whole idea behind closures. The function takes its surroundings with it, and they live as long as it does.',
          },
        ],
      },
      {
        q: 'In a module, <code>const secret = 1;</code> sits at the top level. What is <code>globalThis.secret</code>?',
        answer: 1,
        options: [
          {
            text: '<code>1</code>',
            why: 'That would be the case for <code>var</code> in a classic script, not for <code>const</code> in a module.',
          },
          {
            text: '<code>undefined</code>',
            why: 'The top level of a module is the module own room. The name exists there but does not attach to the global object. <code>let</code> and <code>const</code> do not attach in a script either.',
          },
          {
            text: 'A ReferenceError',
            why: 'Reading a property that is not there gives <code>undefined</code>, not an error (lesson 1).',
          },
          {
            text: 'It depends on the browser.',
            why: 'The behaviour is the same everywhere.',
          },
        ],
      },
      {
        q: 'You pass a method to <code>addEventListener</code> and lose <code>this</code>. Which fix is right?',
        answer: 2,
        options: [
          {
            text: 'Make the method an arrow on the object.',
            why: 'Then it gets <code>this</code> from outside the object, not the object itself. That is precisely the mistake from lesson 8.',
          },
          {
            text: 'Call it as <code>counter.read()</code> when registering.',
            why: 'That calls it immediately and passes the return value, not the function.',
          },
          {
            text: 'Wrap it in an arrow, or bind it with <code>bind</code>.',
            why: 'The arrow calls the method with the dot intact; <code>bind</code> makes a version with the object attached. Both say plainly what you meant.',
          },
          {
            text: 'Store the object in a global variable.',
            why: 'It works, and it trades a small problem for a larger one.',
          },
        ],
      },
    ],

    uk: [
      {
        q: '<code>const counter = { name: &#39;a&#39;, read() { return this.name; } };</code><br><code>const loose = counter.read;</code><br>Що дасть <code>loose()</code> у модулі?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;a&#39;</code>',
            why: 'Для цього прив’язка мала б мандрувати разом із функцією. Вона була в крапці, а не у функції.',
          },
          {
            text: 'Сам об’єкт.',
            why: '<code>this.name</code> у будь-якому разі дав би властивість, а не об’єкт.',
          },
          {
            text: 'TypeError, бо <code>this</code> є <code>undefined</code>.',
            why: 'У модулі простий виклик строгий, тож <code>this</code> є <code>undefined</code>, а <code>undefined.name</code> кидає помилку. У старому скрипті ви б дістали <code>undefined</code> — тихіше і гірше.',
          },
          {
            text: '<code>&#39;loose&#39;</code>',
            why: 'Ім’я змінної до <code>this</code> стосунку не має.',
          },
        ],
      },
      {
        q: '<code>function makeCounter() { let n = 0; return () =&gt; ++n; }</code><br><code>const a = makeCounter(); const b = makeCounter();</code><br>Що дасть <code>a(); a(); b();</code>?',
        answer: 1,
        options: [
          {
            text: '<code>1, 2, 3</code>',
            why: 'Для цього вони мали б ділити одне <code>n</code>. Кожен виклик фабрики створює новий набір.',
          },
          {
            text: '<code>1, 2, 1</code>',
            why: 'Кожен виклик <code>makeCounter</code> дістає власне <code>n</code>. <code>a</code> рахує собі, а <code>b</code> починає спочатку.',
          },
          {
            text: '<code>1, 1, 1</code>',
            why: 'Це означало б, що замикання забуває між викликами. Воно тримає змінну, доки існує функція.',
          },
          {
            text: 'ReferenceError, бо <code>n</code> уже немає.',
            why: '<code>n</code> живе далі саме тому, що повернена функція ще може до нього дотягнутися.',
          },
        ],
      },
      {
        q: 'Чим буде <code>f.bind({ n: 1 }).bind({ n: 2 })()</code>?',
        answer: 0,
        options: [
          {
            text: 'Використає <code>{ n: 1 }</code> — першу прив’язку.',
            why: 'Прив’язану функцію не можна прив’язати наново. Другий <code>bind</code> справді створює нову функцію, але <code>this</code> уже замкнено з першого разу.',
          },
          {
            text: 'Використає <code>{ n: 2 }</code> — перемагає останній.',
            why: 'Це було б розумно, але працює не так. Лишається перша прив’язка.',
          },
          {
            text: 'TypeError.',
            why: 'Прив’язувати двічі цілком законно. Друга спроба просто нічого не робить.',
          },
          {
            text: '<code>this</code> стане <code>undefined</code>.',
            why: 'Він прив’язаний — просто не до того, що ви думали.',
          },
        ],
      },
      {
        q: 'Чому функція може прочитати змінну звідти, де її написали, навіть коли її викликають зовсім в іншому місці?',
        answer: 3,
        options: [
          {
            text: 'Бо змінна глобальна.',
            why: 'Їй не обов’язково бути такою. Локальна змінна зовнішньої функції працює так само добре.',
          },
          {
            text: 'Бо <code>this</code> мандрує разом із функцією.',
            why: '<code>this</code> якраз <em>не</em> мандрує — його задає виклик. Це інше питання, ніж видимість.',
          },
          {
            text: 'Бо Javascript копіює значення у функцію.',
            why: 'Нічого не копіюється. Змініть змінну потім — і функція побачить нове значення.',
          },
          {
            text: 'Бо ланцюжок оточень визначається тим, де функція стоїть, а не звідки її викликають.',
            why: 'У цьому й уся ідея замикань. Функція бере оточення з собою, і воно живе, доки живе вона.',
          },
        ],
      },
      {
        q: 'У модулі на верхньому рівні стоїть <code>const secret = 1;</code>. Чим є <code>globalThis.secret</code>?',
        answer: 1,
        options: [
          {
            text: '<code>1</code>',
            why: 'Так було б для <code>var</code> у класичному скрипті, а не для <code>const</code> у модулі.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Верхній рівень модуля — власна кімната модуля. Ім’я існує там, але до глобального об’єкта не чіпляється. <code>let</code> і <code>const</code> не чіпляються і в скрипті.',
          },
          {
            text: 'ReferenceError',
            why: 'Читання властивості, якої немає, дає <code>undefined</code>, а не помилку (урок 1).',
          },
          {
            text: 'Залежить від браузера.',
            why: 'Поведінка всюди однакова.',
          },
        ],
      },
      {
        q: 'Ви передаєте метод у <code>addEventListener</code> і втрачаєте <code>this</code>. Яке виправлення правильне?',
        answer: 2,
        options: [
          {
            text: 'Зробити метод стрілкою на об’єкті.',
            why: 'Тоді він дістане <code>this</code> ззовні об’єкта, а не сам об’єкт. Це саме та помилка з уроку 8.',
          },
          {
            text: 'Викликати його як <code>counter.read()</code> під час реєстрації.',
            why: 'Це викличе його одразу і передасть повернене значення, а не функцію.',
          },
          {
            text: 'Загорнути у стрілку або прив’язати через <code>bind</code>.',
            why: 'Стрілка викликає метод із незайманою крапкою; <code>bind</code> створює версію з прикріпленим об’єктом. Обидва ясно кажуть, що ви мали на увазі.',
          },
          {
            text: 'Зберегти об’єкт у глобальній змінній.',
            why: 'Спрацює — і обміняє малу проблему на більшу.',
          },
        ],
      },
    ],
  },
});
