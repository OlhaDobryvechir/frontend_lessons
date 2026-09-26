/*
 * Content of JS lesson 02 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson owns reference-vs-value and identity equality.
 * Syntax forms belong to lesson 8; the Map/Set comparison to lesson 15;
 * shallow copying with spread to lesson 16.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Typer: function, array, object',
      kicker: 'Leksjon 2 &middot; Javascript',
      title: 'Typer: function, array, object',
      lead: 'Leksjon 1 handlet om verdiene som kopieres. Disse tre deles i stedet — og den ene forskjellen forklarer nesten alt som overrasker folk senere.',

      's.one.t': 'Egentlig bare én type',
      's.one.d':
        '<p>Alt som ikke er en primitiv fra forrige leksjon, er et objekt. Et array er et objekt. En funksjon er et objekt. Det finnes ikke tre typer her, men én type med tre praktiske utgaver.</p>' +
        '<p>Et vanlig objekt har navngitte plasser. Et array har nummererte plasser i rekkefølge, og en del metoder som forutsetter den rekkefølgen. En funksjon er et objekt du i tillegg kan kalle.</p>' +
        '<p>At de deler natur er ikke en kuriositet. Det er derfor et array kan få en egenskap som ikke er et tall, og derfor en funksjon kan ha egenskaper i det hele tatt.</p>',

      's.typeof.t': 'Hva typeof kan og ikke kan si',
      's.typeof.d':
        '<p><code>typeof</code> var nyttig på primitivene. Her slutter den nesten å hjelpe: både et objekt og et array gir <code>&#39;object&#39;</code>, og det gjør <code>null</code> også.</p>' +
        '<p>Funksjoner er det eneste unntaket. De gir <code>&#39;function&#39;</code>, selv om de er objekter &mdash; en praktisk løgn som språket har beholdt fordi den er nyttig.</p>' +
        '<p>Skal du vite om noe er et array, finnes det derfor et eget spørsmål: <code>Array.isArray()</code>. Det er ikke en omvei, det er det riktige verktøyet.</p>',

      's.ref.t': 'Kopiert eller delt',
      's.ref.d':
        '<p>Dette er hele leksjonen, og det som er verdt å huske hvis du bare husker én ting.</p>' +
        '<p>Gir du en primitiv videre, får mottakeren en kopi. Endrer hun den, skjer det ingenting hos deg. Gir du et objekt videre, får hun ikke en kopi &mdash; hun får det samme objektet. Endrer hun noe inni, endrer hun det hos deg også.</p>' +
        '<p>Det gjelder overalt: å tilordne til en ny variabel, å sende inn i en funksjon, å legge i et array. Ingen av delene lager en kopi. Den dagen du trenger en ekte kopi, må du be om den &mdash; og det er tema i en senere leksjon.</p>' +
        '<p>Her ligger også grunnen til at <code>const</code> forvirrer. <code>const</code> låser navnet, ikke innholdet. Du kan fylle på et <code>const</code>-objekt så mye du vil; det du ikke kan, er å peke navnet mot et annet objekt.</p>',

      's.array.t': 'Array: en liste som er et objekt',
      's.array.d':
        '<p>Et array holder verdier i rekkefølge, nummerert fra null. Det er den delen alle kan.</p>' +
        '<p>Det som er verdt å se, er at nummereringen er helt vanlige nøkler &mdash; og at de er tekst, som alle nøkler. <code>Object.keys([10, 20])</code> gir <code>[&#39;0&#39;, &#39;1&#39;]</code>, ikke tall.</p>' +
        '<p><code>length</code> er heller ikke en telling. Den er høyeste indeks pluss én. Setter du <code>a[10]</code> i et tomt array, blir lengden 11 selv om du bare har lagt inn én verdi. Og <code>length</code> kan skrives til: gir du den en lavere verdi, kuttes arrayet der.</p>',

      's.object.t': 'Objekt: navngitte plasser',
      's.object.d':
        '<p>Et objekt er en samling nøkler med verdier. Verdiene kan være hva som helst, også andre objekter, så strukturer nøstes naturlig.</p>' +
        '<p>Du når en verdi på to måter. Punktum når du vet navnet mens du skriver koden; klammer når navnet først finnes mens programmet kjører. Klammer er også eneste utvei når nøkkelen har et tegn som ikke passer etter et punktum.</p>' +
        '<p>Og alle nøkler er tekst. Skriver du <code>o[1]</code>, lagres nøkkelen som <code>&#39;1&#39;</code>, og <code>o[1]</code> og <code>o[&#39;1&#39;]</code> er samme plass. Vil du ha nøkler som ikke er tekst, finnes <code>Map</code> &mdash; og den kommer i en senere leksjon.</p>',

      's.function.t': 'Funksjon: en verdi du kan kalle',
      's.function.d':
        '<p>I mange språk er en funksjon noe eget. I Javascript er den en verdi som alle andre, og det er en av de viktigste tingene å ta innover seg.</p>' +
        '<p>Du kan legge en funksjon i en variabel, sende den som argument, returnere den fra en annen funksjon og lagre den i et array. Alt du senere kommer til å gjøre med hendelser, tidtakere og nettverkskall, hviler på dette ene.</p>' +
        '<p>Og siden den er et objekt, har den egenskaper: <code>name</code> er navnet den ble gitt, og <code>length</code> er hvor mange parametere den er erklært med.</p>' +
        '<p>Det finnes flere måter å skrive en funksjon på, og de oppfører seg ikke helt likt. Det er en leksjon for seg.</p>',

      's.equal.t': 'To objekter er aldri like',
      's.equal.d':
        '<p>Primitiver sammenlignes på innhold: to tekster med samme tegn er like. Objekter sammenlignes på identitet: spørsmålet er ikke om de ser like ut, men om det er det samme objektet.</p>' +
        '<p>Derfor er <code>[] === []</code> usant, og <code>[1, 2] === [1, 2]</code> også. Du har laget to objekter som tilfeldigvis ligner. Det er bare når to navn peker på det samme objektet at <code>===</code> blir sant.</p>' +
        '<p>Det høres strengt ut og er en lettelse: sammenligningen er alltid rask, og du slipper å lure på hvor dypt den gikk. Trenger du å vite om to strukturer har samme innhold, må du sammenligne dem selv &mdash; eller la være å trenge det.</p>',

      's.note':
        '<p>Kortversjonen. Array og funksjon er objekter; <code>typeof</code> skiller dem ikke, så bruk <code>Array.isArray()</code>. Primitiver kopieres, objekter deles &mdash; også inn i funksjoner. <code>const</code> låser navnet, ikke innholdet. Alle nøkler er tekst, også i et array. Funksjoner er verdier. Og <code>===</code> på objekter spør om identitet, ikke om innhold.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Types: function, array, object',
      kicker: 'Lesson 2 &middot; Javascript',
      title: 'Types: function, array, object',
      lead: 'Lesson 1 was about the values that get copied. These three get shared instead — and that single difference explains almost everything that surprises people later.',

      's.one.t': 'Really only one type',
      's.one.d':
        '<p>Anything that is not a primitive from the previous lesson is an object. An array is an object. A function is an object. There are not three types here, but one type in three convenient shapes.</p>' +
        '<p>A plain object has named slots. An array has numbered slots in order, plus a set of methods that assume that order. A function is an object you can additionally call.</p>' +
        '<p>Their shared nature is not a curiosity. It is why an array can be given a property that is not a number, and why a function can have properties at all.</p>',

      's.typeof.t': 'What typeof can and cannot tell you',
      's.typeof.d':
        '<p><code>typeof</code> was useful on the primitives. Here it almost stops helping: both an object and an array give <code>&#39;object&#39;</code>, and so does <code>null</code>.</p>' +
        '<p>Functions are the one exception. They give <code>&#39;function&#39;</code> even though they are objects — a convenient lie the language has kept because it is useful.</p>' +
        '<p>So to find out whether something is an array there is a separate question: <code>Array.isArray()</code>. It is not a workaround, it is the right tool.</p>',

      's.ref.t': 'Copied or shared',
      's.ref.d':
        '<p>This is the whole lesson, and the thing to remember if you remember only one.</p>' +
        '<p>Pass a primitive on and the receiver gets a copy. If she changes it, nothing happens at your end. Pass an object on and she does not get a copy — she gets the same object. If she changes something inside it, she has changed it for you too.</p>' +
        '<p>This applies everywhere: assigning to a new variable, passing into a function, putting into an array. None of them makes a copy. The day you need a real copy you have to ask for one — and that is a later lesson.</p>' +
        '<p>Here too is why <code>const</code> confuses people. <code>const</code> locks the name, not the contents. You can fill a <code>const</code> object as much as you like; what you cannot do is point the name at a different object.</p>',

      's.array.t': 'Array: a list that is an object',
      's.array.d':
        '<p>An array holds values in order, numbered from zero. That part everyone knows.</p>' +
        '<p>What is worth seeing is that the numbering is made of perfectly ordinary keys — and that they are text, like all keys. <code>Object.keys([10, 20])</code> gives <code>[&#39;0&#39;, &#39;1&#39;]</code>, not numbers.</p>' +
        '<p><code>length</code> is not a count either. It is the highest index plus one. Set <code>a[10]</code> on an empty array and the length becomes 11, even though you only put in one value. And <code>length</code> can be written to: give it a lower value and the array is cut off there.</p>',

      's.object.t': 'Object: named slots',
      's.object.d':
        '<p>An object is a set of keys with values. The values can be anything, including other objects, so structures nest naturally.</p>' +
        '<p>You reach a value in two ways. A dot when you know the name as you write the code; brackets when the name only exists while the program runs. Brackets are also the only way out when a key contains a character that will not sit after a dot.</p>' +
        '<p>And every key is text. Write <code>o[1]</code> and the key is stored as <code>&#39;1&#39;</code>, so <code>o[1]</code> and <code>o[&#39;1&#39;]</code> are the same slot. If you want keys that are not text, there is <code>Map</code> — and that comes in a later lesson.</p>',

      's.function.t': 'Function: a value you can call',
      's.function.d':
        '<p>In many languages a function is a thing apart. In Javascript it is a value like any other, and that is one of the most important things to take in.</p>' +
        '<p>You can put a function in a variable, pass it as an argument, return it from another function and store it in an array. Everything you will later do with events, timers and network calls rests on this one fact.</p>' +
        '<p>And since it is an object, it has properties: <code>name</code> is the name it was given, and <code>length</code> is how many parameters it was declared with.</p>' +
        '<p>There is more than one way to write a function, and they do not behave identically. That is a lesson of its own.</p>',

      's.equal.t': 'Two objects are never equal',
      's.equal.d':
        '<p>Primitives compare by content: two strings with the same characters are equal. Objects compare by identity: the question is not whether they look alike, but whether they are the same object.</p>' +
        '<p>So <code>[] === []</code> is false, and so is <code>[1, 2] === [1, 2]</code>. You have made two objects that happen to resemble each other. Only when two names point at the same object does <code>===</code> come out true.</p>' +
        '<p>That sounds strict and is a relief: the comparison is always fast, and you never have to wonder how deep it went. If you need to know whether two structures hold the same contents, you have to compare them yourself — or arrange not to need to.</p>',

      's.note':
        '<p>The short version. Arrays and functions are objects; <code>typeof</code> will not tell them apart, so use <code>Array.isArray()</code>. Primitives are copied, objects are shared — including into functions. <code>const</code> locks the name, not the contents. Every key is text, arrays included. Functions are values. And <code>===</code> on objects asks about identity, not contents.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Типи: function, array, object',
      kicker: 'Урок 2 &middot; Javascript',
      title: 'Типи: function, array, object',
      lead: 'Урок 1 був про значення, які копіюються. Ці три натомість розділяються — і саме ця одна відмінність пояснює майже все, що згодом дивує людей.',

      's.one.t': 'Насправді лише один тип',
      's.one.d':
        '<p>Усе, що не є примітивом із попереднього уроку, — це об’єкт. Масив є об’єктом. Функція є об’єктом. Тут не три типи, а один тип у трьох зручних подобах.</p>' +
        '<p>Звичайний об’єкт має іменовані комірки. Масив має пронумеровані комірки в порядку і набір методів, які на цей порядок спираються. Функція — це об’єкт, який до того ж можна викликати.</p>' +
        '<p>Їхня спільна природа — не дивина. Саме тому масиву можна дати властивість, яка не є числом, і саме тому функція взагалі може мати властивості.</p>',

      's.typeof.t': 'Що typeof може сказати, а що ні',
      's.typeof.d':
        '<p><code>typeof</code> був корисним на примітивах. Тут він майже перестає допомагати: і об’єкт, і масив дають <code>&#39;object&#39;</code>, і <code>null</code> теж.</p>' +
        '<p>Функції — єдиний виняток. Вони дають <code>&#39;function&#39;</code>, хоч і є об’єктами: зручна неправда, яку мова зберегла, бо вона корисна.</p>' +
        '<p>Тож щоб дізнатися, чи є щось масивом, існує окреме питання — <code>Array.isArray()</code>. Це не обхідний шлях, це правильний інструмент.</p>',

      's.ref.t': 'Скопійовано чи розділено',
      's.ref.d':
        '<p>Це і є весь урок, і саме це варто запам’ятати, якщо запам’ятаєте лише одне.</p>' +
        '<p>Передайте примітив — і отримувач дістане копію. Якщо він її змінить, у вас не станеться нічого. Передайте об’єкт — і він дістане не копію, а той самий об’єкт. Якщо він змінить щось усередині, він змінив це і у вас.</p>' +
        '<p>Це діє всюди: призначення новій змінній, передача у функцію, додавання в масив. Жодна з цих дій не робить копії. Того дня, коли вам знадобиться справжня копія, її доведеться попросити — і це тема пізнішого уроку.</p>' +
        '<p>Тут же й причина, чому <code>const</code> бентежить. <code>const</code> замикає ім’я, а не вміст. Ви можете наповнювати <code>const</code>-об’єкт скільки завгодно; чого не можна — це спрямувати ім’я на інший об’єкт.</p>',

      's.array.t': 'Масив: список, що є об’єктом',
      's.array.d':
        '<p>Масив тримає значення в порядку, пронумеровані від нуля. Цю частину знають усі.</p>' +
        '<p>Варто побачити, що нумерація складається з цілком звичайних ключів — і що вони є текстом, як і всі ключі. <code>Object.keys([10, 20])</code> дає <code>[&#39;0&#39;, &#39;1&#39;]</code>, а не числа.</p>' +
        '<p><code>length</code> теж не є підрахунком. Це найбільший індекс плюс один. Задайте <code>a[10]</code> у порожньому масиві — і довжина стане 11, хоч ви поклали одне значення. А в <code>length</code> можна ще й записувати: дайте менше значення, і масив обріжеться там.</p>',

      's.object.t': 'Об’єкт: іменовані комірки',
      's.object.d':
        '<p>Об’єкт — це набір ключів зі значеннями. Значення можуть бути чим завгодно, зокрема іншими об’єктами, тож структури природно вкладаються.</p>' +
        '<p>До значення дістаються двома способами. Крапкою, коли ви знаєте ім’я вже під час написання коду; дужками, коли ім’я з’являється лише під час роботи програми. Дужки також єдиний вихід, коли в ключі є символ, який не стане після крапки.</p>' +
        '<p>І кожен ключ є текстом. Напишіть <code>o[1]</code> — і ключ збережеться як <code>&#39;1&#39;</code>, тож <code>o[1]</code> і <code>o[&#39;1&#39;]</code> — та сама комірка. Якщо потрібні ключі, які не є текстом, є <code>Map</code> — і це пізніший урок.</p>',

      's.function.t': 'Функція: значення, яке можна викликати',
      's.function.d':
        '<p>У багатьох мовах функція — це щось окреме. У Javascript вона є значенням, як і будь-яке інше, і це одна з найважливіших речей, які варто засвоїти.</p>' +
        '<p>Функцію можна покласти у змінну, передати як аргумент, повернути з іншої функції і зберегти в масиві. Усе, що ви згодом робитимете з подіями, таймерами й мережевими запитами, спирається на цей один факт.</p>' +
        '<p>А оскільки вона є об’єктом, вона має властивості: <code>name</code> — ім’я, яке їй дали, а <code>length</code> — скільки параметрів для неї оголошено.</p>' +
        '<p>Написати функцію можна кількома способами, і поводяться вони не зовсім однаково. Це тема окремого уроку.</p>',

      's.equal.t': 'Два об’єкти ніколи не рівні',
      's.equal.d':
        '<p>Примітиви порівнюються за вмістом: два тексти з однаковими символами рівні. Об’єкти порівнюються за тотожністю: питання не в тому, чи вони схожі, а в тому, чи це той самий об’єкт.</p>' +
        '<p>Тож <code>[] === []</code> хибне, і <code>[1, 2] === [1, 2]</code> теж. Ви створили два об’єкти, які випадково схожі. <code>===</code> стане істинним лише тоді, коли два імені вказують на той самий об’єкт.</p>' +
        '<p>Це звучить суворо і насправді є полегшенням: порівняння завжди швидке, і вам не треба гадати, як глибоко воно зайшло. Якщо треба знати, чи дві структури мають однаковий вміст, доведеться порівняти їх самому — або влаштувати так, щоб цього не було потрібно.</p>',

      's.note':
        '<p>Коротко. Масиви й функції — це об’єкти; <code>typeof</code> їх не розрізнить, тож беріть <code>Array.isArray()</code>. Примітиви копіюються, об’єкти розділяються — зокрема й у функції. <code>const</code> замикає ім’я, а не вміст. Кожен ключ є текстом, і в масиві теж. Функції — це значення. А <code>===</code> на об’єктах питає про тотожність, а не про вміст.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva gir <code>typeof []</code>?',
        answer: 1,
        options: [
          {
            text: '<code>&#39;array&#39;</code>',
            why: 'Det ville vært nyttig, og finnes ikke. <code>typeof</code> har ingen egen verdi for array.',
          },
          {
            text: '<code>&#39;object&#39;</code>',
            why: 'Et array <em>er</em> et objekt. Derfor trenger du <code>Array.isArray()</code> for å skille dem &mdash; <code>typeof</code> gir samme svar for <code>[]</code>, <code>{}</code> og <code>null</code>.',
          },
          {
            text: '<code>&#39;function&#39;</code>',
            why: 'Det er svaret for funksjoner, som er det ene unntaket blant objektene.',
          },
          {
            text: '<code>&#39;undefined&#39;</code>',
            why: 'Arrayet finnes. Det er bare typen som ikke sier så mye.',
          },
        ],
      },
      {
        q: 'Du sender et array inn i en funksjon, og funksjonen gjør <code>push</code> på det. Hva skjer med arrayet ditt?',
        answer: 2,
        options: [
          {
            text: 'Ingenting &mdash; funksjonen fikk en kopi.',
            why: 'Det stemmer for primitiver. Objekter, og dermed arrays, sendes ikke som kopi.',
          },
          {
            text: 'Det blir en feil, fordi arrayet er <code>const</code>.',
            why: '<code>const</code> hindrer bare at navnet peker på noe annet. Innholdet kan endres fritt.',
          },
          {
            text: 'Det endres &mdash; funksjonen fikk det samme arrayet.',
            why: 'Objekter deles, ikke kopieres. Funksjonen og du har to navn på én og samme verdi, så en endring inni den ser begge.',
          },
          {
            text: 'Det kommer an på om arrayet er tomt.',
            why: 'Innholdet spiller ingen rolle. Det er typen som avgjør, og et array er et objekt.',
          },
        ],
      },
      {
        q: 'Hva blir <code>[1, 2] === [1, 2]</code>?',
        answer: 1,
        options: [
          {
            text: '<code>true</code> &mdash; innholdet er likt.',
            why: 'Innholdet er likt, men det er ikke det som sammenlignes. Objekter sammenlignes på identitet.',
          },
          {
            text: '<code>false</code> &mdash; det er to forskjellige objekter.',
            why: 'Du har laget to arrays som tilfeldigvis ligner. <code>===</code> spør om det er samme objekt, og det er det ikke. Bare to navn på ett array gir <code>true</code>.',
          },
          {
            text: '<code>true</code>, men bare for korte arrays.',
            why: 'Lengden har ingenting med saken å gjøre. Sammenligningen ser aldri på innholdet.',
          },
          {
            text: 'En feilmelding.',
            why: 'Sammenligningen er helt lovlig. Den gir bare <code>false</code>.',
          },
        ],
      },
      {
        q: '<code>const c = {};</code> Hvilken av disse linjene feiler?',
        answer: 3,
        options: [
          {
            text: '<code>c.navn = &#39;Ada&#39;;</code>',
            why: 'Helt lovlig. Du endrer innholdet i objektet, ikke hva navnet peker på.',
          },
          {
            text: '<code>c.liste = [1, 2];</code>',
            why: 'Også lovlig, av samme grunn.',
          },
          {
            text: '<code>delete c.navn;</code>',
            why: 'Lovlig. Å fjerne en nøkkel er også en endring av innholdet.',
          },
          {
            text: '<code>c = {};</code>',
            why: 'Dette er det eneste <code>const</code> faktisk stopper: å la navnet peke på et annet objekt. <code>const</code> låser bindingen, ikke verdien.',
          },
        ],
      },
      {
        q: 'Du skriver <code>const a = []; a[5] = 1;</code> Hva er <code>a.length</code>?',
        answer: 2,
        options: [
          {
            text: '<code>1</code> &mdash; du la inn én verdi.',
            why: '<code>length</code> teller ikke verdier. Den ser på indeksene.',
          },
          {
            text: '<code>5</code>',
            why: 'Nesten &mdash; men <code>length</code> er høyeste indeks pluss én, fordi tellingen starter på null.',
          },
          {
            text: '<code>6</code>',
            why: 'Høyeste indeks er 5, så lengden blir 6. Plassene 0 til 4 finnes ikke, men lengden regner som om de kunne gjort det.',
          },
          {
            text: '<code>0</code> &mdash; indeks 5 finnes ikke ennå.',
            why: 'Den finnes nå. Du opprettet den i det du skrev til den.',
          },
        ],
      },
      {
        q: 'Hvorfor kan du skrive <code>sum.name</code> på en funksjon?',
        answer: 0,
        options: [
          {
            text: 'Fordi en funksjon er et objekt, og objekter har egenskaper.',
            why: 'Det er hele poenget med leksjonen: funksjonen er en verdi som alle andre, med egenskaper som alle andre objekter. <code>name</code> og <code>length</code> er to av dem språket setter selv.',
          },
          {
            text: 'Fordi <code>name</code> er et reservert ord i Javascript.',
            why: 'Det er en helt vanlig egenskap, ikke et nøkkelord.',
          },
          {
            text: 'Fordi funksjonen er erklært med <code>function</code>.',
            why: 'Måten den er skrevet på endrer ikke at den er et objekt.',
          },
          {
            text: 'Det kan du ikke &mdash; det gir <code>undefined</code>.',
            why: 'Det gir navnet på funksjonen som tekst. Prøv i konsollen.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'What does <code>typeof []</code> give?',
        answer: 1,
        options: [
          {
            text: '<code>&#39;array&#39;</code>',
            why: 'That would be useful, and it does not exist. <code>typeof</code> has no separate value for arrays.',
          },
          {
            text: '<code>&#39;object&#39;</code>',
            why: 'An array <em>is</em> an object. Which is why you need <code>Array.isArray()</code> to tell them apart — <code>typeof</code> gives the same answer for <code>[]</code>, <code>{}</code> and <code>null</code>.',
          },
          {
            text: '<code>&#39;function&#39;</code>',
            why: 'That is the answer for functions, the one exception among objects.',
          },
          {
            text: '<code>&#39;undefined&#39;</code>',
            why: 'The array exists. It is the type that is unhelpful.',
          },
        ],
      },
      {
        q: 'You pass an array into a function, and the function calls <code>push</code> on it. What happens to your array?',
        answer: 2,
        options: [
          {
            text: 'Nothing — the function got a copy.',
            why: 'True for primitives. Objects, and therefore arrays, are not passed as copies.',
          },
          {
            text: 'It throws, because the array is <code>const</code>.',
            why: '<code>const</code> only stops the name pointing at something else. The contents can change freely.',
          },
          {
            text: 'It changes — the function got the same array.',
            why: 'Objects are shared, not copied. The function and you hold two names for one value, so a change inside it is seen by both.',
          },
          {
            text: 'It depends on whether the array was empty.',
            why: 'The contents make no difference. The type decides, and an array is an object.',
          },
        ],
      },
      {
        q: 'What is <code>[1, 2] === [1, 2]</code>?',
        answer: 1,
        options: [
          {
            text: '<code>true</code> — the contents match.',
            why: 'The contents do match, but that is not what is being compared. Objects compare by identity.',
          },
          {
            text: '<code>false</code> — they are two different objects.',
            why: 'You made two arrays that happen to resemble each other. <code>===</code> asks whether it is the same object, and it is not. Only two names for one array give <code>true</code>.',
          },
          {
            text: '<code>true</code>, but only for short arrays.',
            why: 'Length has nothing to do with it. The comparison never looks at the contents.',
          },
          {
            text: 'An error.',
            why: 'The comparison is perfectly legal. It simply gives <code>false</code>.',
          },
        ],
      },
      {
        q: '<code>const c = {};</code> Which of these lines fails?',
        answer: 3,
        options: [
          {
            text: '<code>c.name = &#39;Ada&#39;;</code>',
            why: 'Perfectly legal. You are changing the contents of the object, not what the name points at.',
          },
          {
            text: '<code>c.list = [1, 2];</code>',
            why: 'Also legal, for the same reason.',
          },
          {
            text: '<code>delete c.name;</code>',
            why: 'Legal. Removing a key is also a change to the contents.',
          },
          {
            text: '<code>c = {};</code>',
            why: 'This is the only thing <code>const</code> actually stops: pointing the name at a different object. <code>const</code> locks the binding, not the value.',
          },
        ],
      },
      {
        q: 'You write <code>const a = []; a[5] = 1;</code> What is <code>a.length</code>?',
        answer: 2,
        options: [
          {
            text: '<code>1</code> — you put in one value.',
            why: '<code>length</code> does not count values. It looks at the indexes.',
          },
          {
            text: '<code>5</code>',
            why: 'Close — but <code>length</code> is the highest index plus one, because counting starts at zero.',
          },
          {
            text: '<code>6</code>',
            why: 'The highest index is 5, so the length is 6. Slots 0 to 4 do not exist, but the length counts as though they could.',
          },
          {
            text: '<code>0</code> — index 5 does not exist yet.',
            why: 'It exists now. You created it the moment you wrote to it.',
          },
        ],
      },
      {
        q: 'Why can you write <code>sum.name</code> on a function?',
        answer: 0,
        options: [
          {
            text: 'Because a function is an object, and objects have properties.',
            why: 'That is the point of the lesson: a function is a value like any other, with properties like any other object. <code>name</code> and <code>length</code> are two the language sets itself.',
          },
          {
            text: 'Because <code>name</code> is a reserved word in Javascript.',
            why: 'It is an ordinary property, not a keyword.',
          },
          {
            text: 'Because the function was declared with <code>function</code>.',
            why: 'How it is written does not change the fact that it is an object.',
          },
          {
            text: 'You cannot — it gives <code>undefined</code>.',
            why: 'It gives the name of the function as text. Try it in the console.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Що дає <code>typeof []</code>?',
        answer: 1,
        options: [
          {
            text: '<code>&#39;array&#39;</code>',
            why: 'Це було б корисно, і такого немає. У <code>typeof</code> немає окремого значення для масивів.',
          },
          {
            text: '<code>&#39;object&#39;</code>',
            why: 'Масив <em>і є</em> об’єктом. Саме тому, щоб їх розрізнити, потрібен <code>Array.isArray()</code>: <code>typeof</code> дає ту саму відповідь для <code>[]</code>, <code>{}</code> і <code>null</code>.',
          },
          {
            text: '<code>&#39;function&#39;</code>',
            why: 'Це відповідь для функцій — єдиного винятку серед об’єктів.',
          },
          {
            text: '<code>&#39;undefined&#39;</code>',
            why: 'Масив існує. Це тип не дуже допомагає.',
          },
        ],
      },
      {
        q: 'Ви передаєте масив у функцію, і функція викликає на ньому <code>push</code>. Що станеться з вашим масивом?',
        answer: 2,
        options: [
          {
            text: 'Нічого — функція дістала копію.',
            why: 'Це правда для примітивів. Об’єкти, а отже й масиви, передаються не копією.',
          },
          {
            text: 'Буде помилка, бо масив оголошено через <code>const</code>.',
            why: '<code>const</code> лише не дає імені вказувати на щось інше. Вміст можна змінювати вільно.',
          },
          {
            text: 'Він зміниться — функція дістала той самий масив.',
            why: 'Об’єкти розділяються, а не копіюються. У функції і у вас два імені для одного значення, тож зміну всередині бачать обидва.',
          },
          {
            text: 'Залежить від того, чи масив був порожній.',
            why: 'Вміст не має значення. Вирішує тип, а масив є об’єктом.',
          },
        ],
      },
      {
        q: 'Чим буде <code>[1, 2] === [1, 2]</code>?',
        answer: 1,
        options: [
          {
            text: '<code>true</code> — вміст збігається.',
            why: 'Вміст справді збігається, але порівнюється не він. Об’єкти порівнюються за тотожністю.',
          },
          {
            text: '<code>false</code> — це два різні об’єкти.',
            why: 'Ви створили два масиви, які випадково схожі. <code>===</code> питає, чи це той самий об’єкт, а це не так. <code>true</code> дадуть лише два імені для одного масиву.',
          },
          {
            text: '<code>true</code>, але лише для коротких масивів.',
            why: 'Довжина тут ні до чого. Порівняння взагалі не дивиться на вміст.',
          },
          {
            text: 'Помилку.',
            why: 'Порівняння цілком законне. Воно просто дає <code>false</code>.',
          },
        ],
      },
      {
        q: '<code>const c = {};</code> Який із цих рядків упаде?',
        answer: 3,
        options: [
          {
            text: '<code>c.name = &#39;Ada&#39;;</code>',
            why: 'Цілком законно. Ви змінюєте вміст об’єкта, а не те, на що вказує ім’я.',
          },
          {
            text: '<code>c.list = [1, 2];</code>',
            why: 'Теж законно, з тієї самої причини.',
          },
          {
            text: '<code>delete c.name;</code>',
            why: 'Законно. Видалення ключа — це теж зміна вмісту.',
          },
          {
            text: '<code>c = {};</code>',
            why: 'Це єдине, що <code>const</code> справді спиняє: спрямувати ім’я на інший об’єкт. <code>const</code> замикає зв’язування, а не значення.',
          },
        ],
      },
      {
        q: 'Ви пишете <code>const a = []; a[5] = 1;</code> Чому дорівнює <code>a.length</code>?',
        answer: 2,
        options: [
          {
            text: '<code>1</code> — ви поклали одне значення.',
            why: '<code>length</code> не рахує значень. Він дивиться на індекси.',
          },
          {
            text: '<code>5</code>',
            why: 'Майже — але <code>length</code> це найбільший індекс плюс один, бо відлік починається з нуля.',
          },
          {
            text: '<code>6</code>',
            why: 'Найбільший індекс — 5, тож довжина 6. Комірок від 0 до 4 немає, але довжина рахує так, ніби вони могли б бути.',
          },
          {
            text: '<code>0</code> — індексу 5 ще немає.',
            why: 'Тепер він є. Ви створили його тієї миті, коли в нього записали.',
          },
        ],
      },
      {
        q: 'Чому на функції можна написати <code>sum.name</code>?',
        answer: 0,
        options: [
          {
            text: 'Бо функція є об’єктом, а об’єкти мають властивості.',
            why: 'У цьому й суть уроку: функція є значенням, як і будь-яке інше, з властивостями, як у будь-якого об’єкта. <code>name</code> і <code>length</code> — дві з тих, що мова задає сама.',
          },
          {
            text: 'Бо <code>name</code> є зарезервованим словом у Javascript.',
            why: 'Це звичайна властивість, а не ключове слово.',
          },
          {
            text: 'Бо функцію оголошено через <code>function</code>.',
            why: 'Спосіб написання не змінює того, що вона є об’єктом.',
          },
          {
            text: 'Не можна — це дасть <code>undefined</code>.',
            why: 'Це дасть ім’я функції як текст. Спробуйте в консолі.',
          },
        ],
      },
    ],
  },
});
