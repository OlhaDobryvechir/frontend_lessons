/*
 * Content of JS lesson 08 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson owns the two forms and how they differ. What
 * `this` actually refers to, and the scope chain, belong to lesson 9.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Funksjoner med function, og pilfunksjoner',
      kicker: 'Leksjon 8 &middot; Javascript',
      title: 'Funksjoner med function, og pilfunksjoner',
      lead: 'To måter å skrive en funksjon på. Den ene er ikke en kortere versjon av den andre — de oppfører seg forskjellig på fire punkter, og ett av dem avgjør hvilken du skal velge.',

      's.decl.t': 'Erklæring eller uttrykk',
      's.decl.d':
        '<p>Skriver du <code>function</code> først i en setning, er det en erklæring, og den heises i sin helhet: du kan kalle den på en linje over der den står. Leksjon 3 viste hvorfor.</p>' +
        '<p>Tilordner du en funksjon til en variabel, er det et uttrykk. Da er den bare en verdi, og variabelen er tom til linjen kjører &mdash; kaller du for tidlig, får du «er ikke en funksjon».</p>' +
        '<p>Et uttrykk kan også ha et navn. Det navnet er synlig bare inne i funksjonen selv, ikke utenfor. Det er mest nyttig i feilmeldinger og når en funksjon skal kalle seg selv.</p>',

      's.arrow.t': 'Pilens former',
      's.arrow.d':
        '<p>Pilfunksjonen har flere kortformer, og de kan kombineres. Er kroppen ett enkelt uttrykk, returneres det uten at du skriver <code>return</code>. Er det nøyaktig én parameter, kan parentesene sløyfes. Er det ingen, må de stå.</p>' +
        '<p>Én felle følger av den implisitte returen: krøllparenteser leses som en kropp, ikke som et objekt. <code>() =&gt; { navn: &#39;Ada&#39; }</code> returnerer <code>undefined</code> &mdash; innholdet tolkes som en etikett og en verdi som kastes. Vil du returnere et objekt, må du pakke det i vanlige parenteser.</p>' +
        '<p>Piler er anonyme, men de får som regel et navn likevel: tilordner du en til en variabel eller en egenskap, låner den navnet derfra. Det er derfor de fortsatt dukker opp med navn i en feilmelding.</p>',

      's.this.t': 'Den forskjellen som avgjør valget',
      's.this.d':
        '<p>En vanlig funksjon får sin egen <code>this</code>, og hva den peker på, bestemmes av hvordan funksjonen ble kalt. En pilfunksjon får ikke sin egen i det hele tatt &mdash; den bruker den som gjaldt der den ble skrevet.</p>' +
        '<p>Det er derfor en tilbakekallingsfunksjon inne i en metode nesten alltid skal være en pil. Skriver du <code>function</code> der, får den sin egen <code>this</code>, som ikke er objektet ditt, og du mister tilgangen til det.</p>' +
        '<p>Og omvendt: en metode på et objekt skal <em>ikke</em> være en pil. Den ville brukt <code>this</code> fra utsiden av objektet, som er noe helt annet enn objektet selv.</p>' +
        '<p>En pil kan heller ikke overtales. <code>call</code>, <code>apply</code> og <code>bind</code> gjør ingenting med <code>this</code> i en pil; den ble avgjort da funksjonen ble skrevet, og står fast.</p>' +
        '<p>Hva <code>this</code> faktisk peker på i de ulike tilfellene, er neste leksjon. Her holder det å vite at de to formene ikke deler den.</p>',

      's.args.t': 'arguments finnes ikke i en pil',
      's.args.d':
        '<p>En vanlig funksjon har alltid <code>arguments</code>: en liste over alt som faktisk ble sendt inn, uansett hvor mange parametere den erklærte.</p>' +
        '<p>En pil har ingen egen. Står den inne i en vanlig funksjon, ser den den ytre funksjonens i stedet &mdash; og det gir svar som er vanskelige å forstå: en pil kalt med tre argumenter kan rapportere to, fordi det var det funksjonen rundt fikk.</p>' +
        '<p>Står pilen ikke inne i noen funksjon, finnes <code>arguments</code> ikke i det hele tatt, og du får en <code>ReferenceError</code>.</p>' +
        '<p>Løsningen er den samme uansett form, og er bedre enn originalen: <code>...</code> foran siste parameter samler resten i et ekte array. <code>arguments</code> var aldri et array, bare noe som lignet.</p>',

      's.new.t': 'En pil kan ikke lage objekter',
      's.new.d':
        '<p>En vanlig funksjon kan brukes med <code>new</code>. Den har en <code>prototype</code>-egenskap som de nye objektene arver fra.</p>' +
        '<p>En pil har ikke det, og <code>new</code> på en pil er en <code>TypeError</code>. Det er med vilje: piler var ment for korte funksjoner du sender videre, ikke for å bygge objekter.</p>' +
        '<p>I praksis møter du dette sjelden, fordi <code>class</code> har overtatt jobben. Men det forklarer feilmeldingen den dagen du konverterer en gammel konstruktørfunksjon til pil og alt slutter å virke.</p>',

      's.params.t': 'Parametere',
      's.params.d':
        '<p>Standardverdier, restparametere og utpakking virker likt i begge former, og er verdt å bruke.</p>' +
        '<p>En standardverdi slår bare inn på <code>undefined</code>. Sender du <code>null</code> eller <code>0</code>, er det ekte verdier, og standarden brukes ikke &mdash; nøyaktig samme skille som <code>??</code> mot <code>||</code> i leksjon 4.</p>' +
        '<p>Til slutt en liten kuriositet med praktisk nytte: <code>length</code> på en funksjon teller bare parameterne før den første som har en standardverdi eller er en rest. Biblioteker bruker det av og til til å gjette hvordan de skal kalle funksjonen din, og da er det greit å vite hvorfor tallet ikke er det du trodde.</p>',

      's.choose.t': 'Hvilken når',
      's.choose.d':
        '<p>Regelen er kort: pil som standard, <code>function</code> når noe trenger sin egen <code>this</code>.</p>' +
        '<p>Alt du sender videre &mdash; til <code>map</code>, til en hendelseslytter, til en tidtaker &mdash; er nesten alltid best som pil. Den er kortere, og den beholder <code>this</code> fra der du skrev den, som er det du forventer.</p>' +
        '<p>Metoder på et objekt skriver du med den korte metodesyntaksen. Den oppfører seg som <code>function</code> og får en <code>this</code> som peker på objektet.</p>' +
        '<p>Den ene feilen det er verdt å kjenne igjen på et blunk: en pil som metode, som bruker <code>this</code>. Den kompilerer, den kjører, og den gir <code>undefined</code>.</p>',

      's.note':
        '<p>Kortversjonen. Erklæringer heises, uttrykk gjør ikke. Piler har implisitt retur &mdash; pakk et objekt i parenteser. Piler har ingen egen <code>this</code>, ingen <code>arguments</code> og ingen <code>new</code>. Bruk pil til alt du sender videre, og <code>function</code> til metoder. Og bruk rest i stedet for <code>arguments</code> uansett hvilken form du velger.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Functions defined with function, and arrow functions',
      kicker: 'Lesson 8 &middot; Javascript',
      title: 'Functions defined with function, and arrow functions',
      lead: 'Two ways to write a function. One is not a shorter version of the other — they behave differently in four respects, and one of those decides which you should pick.',

      's.decl.t': 'Declaration or expression',
      's.decl.d':
        '<p>Write <code>function</code> at the start of a statement and it is a declaration, hoisted whole: you can call it on a line above where it sits. Lesson 3 showed why.</p>' +
        '<p>Assign a function to a variable and it is an expression. Then it is merely a value, and the variable is empty until the line runs — call too early and you get "is not a function".</p>' +
        '<p>An expression can have a name too. That name is visible only inside the function itself, not outside. It is most useful in error messages and when a function needs to call itself.</p>',

      's.arrow.t': 'The arrow forms',
      's.arrow.d':
        '<p>The arrow function has several short forms, and they combine. If the body is a single expression it is returned without you writing <code>return</code>. If there is exactly one parameter the parentheses can be dropped. If there are none, they must be there.</p>' +
        '<p>One trap follows from the implicit return: braces are read as a body, not as an object. <code>() =&gt; { name: &#39;Ada&#39; }</code> returns <code>undefined</code> — the contents are read as a label and a discarded value. To return an object, wrap it in ordinary parentheses.</p>' +
        '<p>Arrows are anonymous, but they usually end up with a name anyway: assign one to a variable or a property and it borrows the name from there. Which is why they still appear by name in an error message.</p>',

      's.this.t': 'The difference that decides the choice',
      's.this.d':
        '<p>An ordinary function gets its own <code>this</code>, and what it points at is decided by how the function was called. An arrow function does not get one at all — it uses the one that applied where it was written.</p>' +
        '<p>Which is why a callback inside a method should almost always be an arrow. Write <code>function</code> there and it gets its own <code>this</code>, which is not your object, and you lose access to it.</p>' +
        '<p>And the reverse: a method on an object should <em>not</em> be an arrow. It would use <code>this</code> from outside the object, which is something else entirely.</p>' +
        '<p>An arrow cannot be talked round, either. <code>call</code>, <code>apply</code> and <code>bind</code> do nothing to <code>this</code> in an arrow; it was settled when the function was written, and it stands.</p>' +
        '<p>What <code>this</code> actually points at in each case is the next lesson. Here it is enough to know that the two forms do not share it.</p>',

      's.args.t': 'arguments does not exist in an arrow',
      's.args.d':
        '<p>An ordinary function always has <code>arguments</code>: a list of everything actually passed in, regardless of how many parameters it declared.</p>' +
        '<p>An arrow has none of its own. Sitting inside an ordinary function, it sees that outer function one instead — which produces answers that are hard to make sense of: an arrow called with three arguments can report two, because that is what the function around it received.</p>' +
        '<p>With no function around it at all, <code>arguments</code> does not exist, and you get a <code>ReferenceError</code>.</p>' +
        '<p>The replacement works in both forms and is better than the original: <code>...</code> before the last parameter gathers the rest into a real array. <code>arguments</code> was never an array, only something that resembled one.</p>',

      's.new.t': 'An arrow cannot make objects',
      's.new.d':
        '<p>An ordinary function can be used with <code>new</code>. It has a <code>prototype</code> property that the new objects inherit from.</p>' +
        '<p>An arrow does not, and <code>new</code> on an arrow is a <code>TypeError</code>. That is deliberate: arrows were meant for short functions you pass around, not for building objects.</p>' +
        '<p>In practice you meet this rarely, because <code>class</code> has taken over the job. But it explains the error message on the day you convert an old constructor function to an arrow and everything stops working.</p>',

      's.params.t': 'Parameters',
      's.params.d':
        '<p>Default values, rest parameters and unpacking work identically in both forms, and are worth using.</p>' +
        '<p>A default only applies to <code>undefined</code>. Pass <code>null</code> or <code>0</code> and those are real values, so the default is not used — exactly the same distinction as <code>??</code> against <code>||</code> in lesson 4.</p>' +
        '<p>Finally a small curiosity with practical use: <code>length</code> on a function counts only the parameters before the first one that has a default or is a rest. Libraries occasionally use it to guess how to call your function, and then it helps to know why the number is not what you assumed.</p>',

      's.choose.t': 'Which one when',
      's.choose.d':
        '<p>The rule is short: arrow by default, <code>function</code> when something needs its own <code>this</code>.</p>' +
        '<p>Everything you pass along — to <code>map</code>, to an event listener, to a timer — is almost always best as an arrow. It is shorter, and it keeps <code>this</code> from where you wrote it, which is what you expect.</p>' +
        '<p>Methods on an object you write with the short method syntax. It behaves like <code>function</code> and gets a <code>this</code> pointing at the object.</p>' +
        '<p>The one mistake worth recognising instantly: an arrow used as a method that uses <code>this</code>. It compiles, it runs, and it gives you <code>undefined</code>.</p>',

      's.note':
        '<p>The short version. Declarations are hoisted, expressions are not. Arrows have an implicit return — wrap an object in parentheses. Arrows have no <code>this</code> of their own, no <code>arguments</code> and no <code>new</code>. Use an arrow for anything you pass along, and <code>function</code> for methods. And use rest instead of <code>arguments</code> whichever form you pick.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Функції через function і стрілкові функції',
      kicker: 'Урок 8 &middot; Javascript',
      title: 'Функції через function і стрілкові функції',
      lead: 'Два способи написати функцію. Один не є коротшою версією другого — вони різняться в чотирьох речах, і одна з них вирішує, який обрати.',

      's.decl.t': 'Оголошення чи вираз',
      's.decl.d':
        '<p>Напишіть <code>function</code> на початку інструкції — і це оголошення, яке піднімається цілком: його можна викликати рядком вище, ніж воно стоїть. Урок 3 показав чому.</p>' +
        '<p>Призначте функцію змінній — і це вираз. Тоді вона є просто значенням, а змінна порожня, доки не виконається рядок; викличете зарано — дістанете «не є функцією».</p>' +
        '<p>Вираз теж може мати ім’я. Це ім’я видно лише всередині самої функції, а не назовні. Найкорисніше воно в повідомленнях про помилки і коли функції треба викликати саму себе.</p>',

      's.arrow.t': 'Форми стрілки',
      's.arrow.d':
        '<p>Стрілкова функція має кілька скорочених форм, і вони поєднуються. Якщо тіло є одним виразом, він повертається без <code>return</code>. Якщо параметр рівно один, дужки можна опустити. Якщо параметрів немає, дужки обов’язкові.</p>' +
        '<p>З неявного повернення випливає одна пастка: фігурні дужки читаються як тіло, а не як об’єкт. <code>() =&gt; { name: &#39;Ada&#39; }</code> повертає <code>undefined</code> — вміст прочитано як мітку і відкинуте значення. Щоб повернути об’єкт, загорніть його у звичайні дужки.</p>' +
        '<p>Стрілки анонімні, але ім’я зазвичай усе одно дістають: призначте таку змінній або властивості — і вона позичить ім’я звідти. Саме тому вони й далі з’являються з іменем у повідомленні про помилку.</p>',

      's.this.t': 'Відмінність, яка вирішує вибір',
      's.this.d':
        '<p>Звичайна функція дістає власний <code>this</code>, і те, на що він вказує, визначається способом виклику. Стрілкова функція не дістає власного взагалі — вона бере той, що діяв там, де її написали.</p>' +
        '<p>Саме тому зворотний виклик усередині методу майже завжди має бути стрілкою. Напишіть там <code>function</code> — і вона дістане власний <code>this</code>, який не є вашим об’єктом, і доступ до нього буде втрачено.</p>' +
        '<p>І навпаки: метод об’єкта стрілкою бути <em>не</em> повинен. Він узяв би <code>this</code> ззовні об’єкта, а це зовсім інша річ.</p>' +
        '<p>Стрілку також неможливо переконати. <code>call</code>, <code>apply</code> і <code>bind</code> не роблять нічого з <code>this</code> у стрілці; його визначили, коли функцію писали, і він лишається.</p>' +
        '<p>На що саме вказує <code>this</code> у кожному випадку — це наступний урок. Тут досить знати, що ці дві форми його не поділяють.</p>',

      's.args.t': 'У стрілці немає arguments',
      's.args.d':
        '<p>Звичайна функція завжди має <code>arguments</code>: перелік усього, що справді передали, незалежно від того, скільки параметрів вона оголосила.</p>' +
        '<p>У стрілки власного немає. Стоячи всередині звичайної функції, вона бачить натомість її <code>arguments</code> — і це дає відповіді, які важко пояснити: стрілка, викликана з трьома аргументами, може повідомити два, бо стільки дістала функція навколо.</p>' +
        '<p>Якщо навколо стрілки функції немає взагалі, <code>arguments</code> не існує, і ви дістанете <code>ReferenceError</code>.</p>' +
        '<p>Заміна працює в обох формах і краща за оригінал: <code>...</code> перед останнім параметром збирає решту в справжній масив. <code>arguments</code> ніколи не був масивом, лише чимось схожим.</p>',

      's.new.t': 'Стрілка не може створювати об’єкти',
      's.new.d':
        '<p>Звичайну функцію можна вжити з <code>new</code>. Вона має властивість <code>prototype</code>, від якої успадковують нові об’єкти.</p>' +
        '<p>У стрілки її немає, і <code>new</code> на стрілці дає <code>TypeError</code>. Це навмисно: стрілки задумували для коротких функцій, які передають далі, а не для побудови об’єктів.</p>' +
        '<p>На практиці ви натрапите на це рідко, бо цю роботу перебрав <code>class</code>. Але це пояснює повідомлення про помилку того дня, коли ви переробите стару функцію-конструктор на стрілку і все перестане працювати.</p>',

      's.params.t': 'Параметри',
      's.params.d':
        '<p>Типові значення, решткові параметри й розпакування працюють однаково в обох формах, і ними варто користуватися.</p>' +
        '<p>Типове значення спрацьовує лише на <code>undefined</code>. Передасте <code>null</code> або <code>0</code> — це справжні значення, тож типове не використають: та сама відмінність, що й <code>??</code> проти <code>||</code> в уроці 4.</p>' +
        '<p>І наостанок дрібниця з практичною користю: <code>length</code> функції рахує лише параметри до першого, що має типове значення або є ростковим. Бібліотеки подеколи вгадують за ним, як викликати вашу функцію, і тоді корисно знати, чому число не таке, як ви гадали.</p>',

      's.choose.t': 'Що і коли',
      's.choose.d':
        '<p>Правило коротке: стрілка за замовчуванням, <code>function</code> — коли щось потребує власного <code>this</code>.</p>' +
        '<p>Усе, що ви передаєте далі — у <code>map</code>, слухачеві подій, таймеру — майже завжди краще як стрілка. Вона коротша і зберігає <code>this</code> звідти, де ви її написали, а це саме те, чого ви очікуєте.</p>' +
        '<p>Методи об’єкта пишіть короткою синтаксою методів. Вона поводиться як <code>function</code> і дістає <code>this</code>, що вказує на об’єкт.</p>' +
        '<p>Одна помилка, яку варто впізнавати миттєво: стрілка як метод, що вживає <code>this</code>. Вона компілюється, вона виконується — і дає <code>undefined</code>.</p>',

      's.note':
        '<p>Коротко. Оголошення піднімаються, вирази — ні. У стрілок неявне повернення — об’єкт беріть у дужки. У стрілок немає власного <code>this</code>, немає <code>arguments</code> і немає <code>new</code>. Беріть стрілку для всього, що передаєте далі, і <code>function</code> для методів. І вживайте росткові параметри замість <code>arguments</code>, хоч би яку форму обрали.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva returnerer <code>() =&gt; { navn: &#39;Ada&#39; }</code>?',
        answer: 2,
        options: [
          {
            text: 'Objektet <code>{ navn: &#39;Ada&#39; }</code>',
            why: 'Det ville krevd parenteser rundt. Krøllparentesene leses som en kropp.',
          },
          {
            text: 'Teksten <code>&#39;Ada&#39;</code>',
            why: 'Ingenting returneres i det hele tatt &mdash; verdien blir liggende ubrukt inne i kroppen.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Krøllparentesene er en funksjonskropp, ikke et objekt. Inni leses <code>navn:</code> som en etikett og <code>&#39;Ada&#39;</code> som et uttrykk som kastes, og uten <code>return</code> blir svaret <code>undefined</code>. Skriv <code>() =&gt; ({ navn: &#39;Ada&#39; })</code>.',
          },
          {
            text: 'En SyntaxError',
            why: 'Det er helt gyldig kode. Det er nettopp derfor feilen er vond å finne.',
          },
        ],
      },
      {
        q: 'Et objekt har <code>{ n: 7, les: () =&gt; this.n }</code>. Hva gir <code>obj.les()</code>?',
        answer: 1,
        options: [
          {
            text: '<code>7</code>',
            why: 'Det ville vært svaret med en vanlig metode. En pil får ikke objektet som <code>this</code>.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Pilen har ingen egen <code>this</code>; den bruker den som gjaldt der den ble skrevet &mdash; utenfor objektet. Det er nettopp derfor metoder ikke skal være piler.',
          },
          {
            text: 'En TypeError',
            why: 'Ingen feil kastes. Det er det som gjør den ubehagelig: koden kjører og gir feil svar.',
          },
          {
            text: 'Selve objektet',
            why: '<code>this.n</code> ville uansett vært en egenskap, ikke objektet.',
          },
        ],
      },
      {
        q: '<code>function ytre(a, b) { const indre = () =&gt; arguments.length; return indre(1, 2, 3); }</code><br>Hva gir <code>ytre(&#39;x&#39;, &#39;y&#39;)</code>?',
        answer: 0,
        options: [
          {
            text: '<code>2</code>',
            why: 'Pilen har ingen egen <code>arguments</code>, så den ser den ytre funksjonens &mdash; og <code>ytre</code> fikk to. De tre den selv ble kalt med, telles ikke.',
          },
          {
            text: '<code>3</code>',
            why: 'Det ville vært svaret hvis pilen hadde sin egen. Den har ikke det.',
          },
          {
            text: '<code>0</code>',
            why: 'Det finnes en <code>arguments</code> å låne, og den er ikke tom.',
          },
          {
            text: 'En ReferenceError',
            why: 'Det skjer bare når det ikke finnes noen funksjon rundt å låne fra. Her er det en.',
          },
        ],
      },
      {
        q: 'Hva skjer med <code>new (() =&gt; {})()</code>?',
        answer: 3,
        options: [
          {
            text: 'Du får et tomt objekt.',
            why: 'Det er hva <code>new</code> på en vanlig funksjon gir.',
          },
          {
            text: 'Du får <code>undefined</code>.',
            why: 'Kallet kommer aldri så langt.',
          },
          {
            text: 'Det virker, men uten <code>prototype</code>.',
            why: 'Mangelen på <code>prototype</code> er nettopp grunnen til at det ikke virker i det hele tatt.',
          },
          {
            text: 'TypeError &mdash; en pil er ikke en konstruktør.',
            why: 'Piler har ingen <code>prototype</code>-egenskap og kan ikke brukes med <code>new</code>. Det var et bevisst valg da de ble laget.',
          },
        ],
      },
      {
        q: '<code>const f = (a, b = 10) =&gt; a + b;</code> Hva gir <code>f(1, null)</code>?',
        answer: 1,
        options: [
          {
            text: '<code>11</code>',
            why: 'Det ville krevd at standardverdien slo inn. Den gjør det bare på <code>undefined</code>.',
          },
          {
            text: '<code>1</code>',
            why: '<code>null</code> er en ekte verdi, så standarden brukes ikke, og <code>1 + null</code> er 1 (leksjon 4). Samme skille som mellom <code>??</code> og <code>||</code>.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Det ville vært <code>undefined</code> i regnestykket. <code>null</code> blir til 0.',
          },
          {
            text: 'En TypeError',
            why: 'Å sende <code>null</code> er helt lovlig.',
          },
        ],
      },
      {
        q: 'Du skriver en tilbakekalling inne i en metode, og trenger <code>this</code> fra objektet. Hvilken form?',
        answer: 2,
        options: [
          {
            text: '<code>function</code>, fordi den har sin egen <code>this</code>.',
            why: 'Den får sin egen, og det er problemet &mdash; den peker ikke på objektet ditt.',
          },
          {
            text: 'Begge virker like godt.',
            why: 'De gir forskjellig <code>this</code> her. Det er nettopp denne forskjellen som avgjør.',
          },
          {
            text: 'En pil, fordi den beholder <code>this</code> fra der den ble skrevet.',
            why: 'Pilen har ingen egen, så den bruker metodens. Det er den vanligste og beste grunnen til å velge pil.',
          },
          {
            text: 'Ingen av dem &mdash; du må bruke <code>bind</code>.',
            why: '<code>bind</code> løser det for en vanlig funksjon, men pilen gjør det uten ekstra arbeid.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'What does <code>() =&gt; { name: &#39;Ada&#39; }</code> return?',
        answer: 2,
        options: [
          {
            text: 'The object <code>{ name: &#39;Ada&#39; }</code>',
            why: 'That would need parentheses around it. The braces are read as a body.',
          },
          {
            text: 'The string <code>&#39;Ada&#39;</code>',
            why: 'Nothing is returned at all — the value sits unused inside the body.',
          },
          {
            text: '<code>undefined</code>',
            why: 'The braces are a function body, not an object. Inside, <code>name:</code> is read as a label and <code>&#39;Ada&#39;</code> as a discarded expression, and with no <code>return</code> the answer is <code>undefined</code>. Write <code>() =&gt; ({ name: &#39;Ada&#39; })</code>.',
          },
          {
            text: 'A SyntaxError',
            why: 'It is perfectly valid code. Which is exactly why the bug is hard to find.',
          },
        ],
      },
      {
        q: 'An object has <code>{ n: 7, read: () =&gt; this.n }</code>. What does <code>obj.read()</code> give?',
        answer: 1,
        options: [
          {
            text: '<code>7</code>',
            why: 'That would be the answer with an ordinary method. An arrow does not get the object as <code>this</code>.',
          },
          {
            text: '<code>undefined</code>',
            why: 'The arrow has no <code>this</code> of its own; it uses the one that applied where it was written — outside the object. Which is precisely why methods should not be arrows.',
          },
          {
            text: 'A TypeError',
            why: 'No error is thrown. That is what makes it unpleasant: the code runs and gives the wrong answer.',
          },
          {
            text: 'The object itself',
            why: '<code>this.n</code> would be a property either way, not the object.',
          },
        ],
      },
      {
        q: '<code>function outer(a, b) { const inner = () =&gt; arguments.length; return inner(1, 2, 3); }</code><br>What does <code>outer(&#39;x&#39;, &#39;y&#39;)</code> give?',
        answer: 0,
        options: [
          {
            text: '<code>2</code>',
            why: 'The arrow has no <code>arguments</code> of its own, so it sees the outer function one — and <code>outer</code> received two. The three it was itself called with do not count.',
          },
          {
            text: '<code>3</code>',
            why: 'That would be the answer if the arrow had its own. It does not.',
          },
          {
            text: '<code>0</code>',
            why: 'There is an <code>arguments</code> to borrow, and it is not empty.',
          },
          {
            text: 'A ReferenceError',
            why: 'That happens only when there is no surrounding function to borrow from. Here there is one.',
          },
        ],
      },
      {
        q: 'What happens with <code>new (() =&gt; {})()</code>?',
        answer: 3,
        options: [
          {
            text: 'You get an empty object.',
            why: 'That is what <code>new</code> on an ordinary function gives.',
          },
          {
            text: 'You get <code>undefined</code>.',
            why: 'The call never gets that far.',
          },
          {
            text: 'It works, but without a <code>prototype</code>.',
            why: 'The missing <code>prototype</code> is precisely why it does not work at all.',
          },
          {
            text: 'TypeError — an arrow is not a constructor.',
            why: 'Arrows have no <code>prototype</code> property and cannot be used with <code>new</code>. That was a deliberate choice when they were designed.',
          },
        ],
      },
      {
        q: '<code>const f = (a, b = 10) =&gt; a + b;</code> What does <code>f(1, null)</code> give?',
        answer: 1,
        options: [
          {
            text: '<code>11</code>',
            why: 'That would require the default to apply. It only applies to <code>undefined</code>.',
          },
          {
            text: '<code>1</code>',
            why: '<code>null</code> is a real value, so the default is not used, and <code>1 + null</code> is 1 (lesson 4). The same distinction as between <code>??</code> and <code>||</code>.',
          },
          {
            text: '<code>NaN</code>',
            why: 'That would be <code>undefined</code> in the arithmetic. <code>null</code> becomes 0.',
          },
          {
            text: 'A TypeError',
            why: 'Passing <code>null</code> is perfectly legal.',
          },
        ],
      },
      {
        q: 'You are writing a callback inside a method and need <code>this</code> from the object. Which form?',
        answer: 2,
        options: [
          {
            text: '<code>function</code>, because it has its own <code>this</code>.',
            why: 'It gets its own, and that is the problem — it does not point at your object.',
          },
          {
            text: 'Both work equally well.',
            why: 'They give different <code>this</code> here. That difference is exactly what decides it.',
          },
          {
            text: 'An arrow, because it keeps <code>this</code> from where it was written.',
            why: 'The arrow has none of its own, so it uses the method one. This is the commonest and best reason to choose an arrow.',
          },
          {
            text: 'Neither — you have to use <code>bind</code>.',
            why: '<code>bind</code> solves it for an ordinary function, but the arrow does it with no extra work.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Що поверне <code>() =&gt; { name: &#39;Ada&#39; }</code>?',
        answer: 2,
        options: [
          {
            text: 'Об’єкт <code>{ name: &#39;Ada&#39; }</code>',
            why: 'Для цього потрібні дужки навколо. Фігурні дужки читаються як тіло.',
          },
          {
            text: 'Рядок <code>&#39;Ada&#39;</code>',
            why: 'Не повертається нічого — значення лишається невикористаним усередині тіла.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Фігурні дужки є тілом функції, а не об’єктом. Усередині <code>name:</code> читається як мітка, а <code>&#39;Ada&#39;</code> як відкинутий вираз, і без <code>return</code> відповіддю буде <code>undefined</code>. Пишіть <code>() =&gt; ({ name: &#39;Ada&#39; })</code>.',
          },
          {
            text: 'SyntaxError',
            why: 'Це цілком дійсний код. Саме тому цю ваду важко знайти.',
          },
        ],
      },
      {
        q: 'Об’єкт має <code>{ n: 7, read: () =&gt; this.n }</code>. Що дасть <code>obj.read()</code>?',
        answer: 1,
        options: [
          {
            text: '<code>7</code>',
            why: 'Це була б відповідь для звичайного методу. Стрілка не дістає об’єкт як <code>this</code>.',
          },
          {
            text: '<code>undefined</code>',
            why: 'У стрілки немає власного <code>this</code>; вона бере той, що діяв там, де її написали — поза об’єктом. Саме тому методи не мають бути стрілками.',
          },
          {
            text: 'TypeError',
            why: 'Жодної помилки не кидають. Саме це й неприємно: код виконується і дає хибну відповідь.',
          },
          {
            text: 'Сам об’єкт',
            why: '<code>this.n</code> у будь-якому разі був би властивістю, а не об’єктом.',
          },
        ],
      },
      {
        q: '<code>function outer(a, b) { const inner = () =&gt; arguments.length; return inner(1, 2, 3); }</code><br>Що дасть <code>outer(&#39;x&#39;, &#39;y&#39;)</code>?',
        answer: 0,
        options: [
          {
            text: '<code>2</code>',
            why: 'У стрілки немає власного <code>arguments</code>, тож вона бачить зовнішній — а <code>outer</code> дістав два. Три, з якими викликали саму стрілку, не рахуються.',
          },
          {
            text: '<code>3</code>',
            why: 'Це була б відповідь, якби стрілка мала власний. Вона не має.',
          },
          {
            text: '<code>0</code>',
            why: '<code>arguments</code>, який можна позичити, існує, і він не порожній.',
          },
          {
            text: 'ReferenceError',
            why: 'Так стається лише тоді, коли навколо немає функції, у якої позичити. Тут вона є.',
          },
        ],
      },
      {
        q: 'Що станеться з <code>new (() =&gt; {})()</code>?',
        answer: 3,
        options: [
          {
            text: 'Ви дістанете порожній об’єкт.',
            why: 'Це те, що дає <code>new</code> на звичайній функції.',
          },
          {
            text: 'Ви дістанете <code>undefined</code>.',
            why: 'Виклик так далеко не заходить.',
          },
          {
            text: 'Спрацює, але без <code>prototype</code>.',
            why: 'Саме відсутність <code>prototype</code> і є причиною, чому це не працює взагалі.',
          },
          {
            text: 'TypeError — стрілка не є конструктором.',
            why: 'У стрілок немає властивості <code>prototype</code>, і їх не можна вживати з <code>new</code>. Це був свідомий вибір при їх створенні.',
          },
        ],
      },
      {
        q: '<code>const f = (a, b = 10) =&gt; a + b;</code> Що дасть <code>f(1, null)</code>?',
        answer: 1,
        options: [
          {
            text: '<code>11</code>',
            why: 'Для цього типове значення мало б спрацювати. Воно спрацьовує лише на <code>undefined</code>.',
          },
          {
            text: '<code>1</code>',
            why: '<code>null</code> є справжнім значенням, тож типове не використають, а <code>1 + null</code> дорівнює 1 (урок 4). Та сама відмінність, що й між <code>??</code> та <code>||</code>.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Це був би <code>undefined</code> в обчисленні. <code>null</code> стає нулем.',
          },
          {
            text: 'TypeError',
            why: 'Передати <code>null</code> цілком законно.',
          },
        ],
      },
      {
        q: 'Ви пишете зворотний виклик усередині методу і потребуєте <code>this</code> з об’єкта. Яка форма?',
        answer: 2,
        options: [
          {
            text: '<code>function</code>, бо вона має власний <code>this</code>.',
            why: 'Вона дістає власний, і в цьому проблема — він не вказує на ваш об’єкт.',
          },
          {
            text: 'Обидві працюють однаково добре.',
            why: 'Тут вони дають різний <code>this</code>. Саме ця відмінність усе й вирішує.',
          },
          {
            text: 'Стрілка, бо вона зберігає <code>this</code> звідти, де її написали.',
            why: 'У стрілки власного немає, тож вона бере <code>this</code> методу. Це найпоширеніша і найкраща причина обрати стрілку.',
          },
          {
            text: 'Жодна — треба вживати <code>bind</code>.',
            why: '<code>bind</code> розв’язує це для звичайної функції, але стрілка робить те саме без зайвої роботи.',
          },
        ],
      },
    ],
  },
});
