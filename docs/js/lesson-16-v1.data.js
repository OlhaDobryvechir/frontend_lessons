/*
 * Content of JS lesson 16 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: spread syntax, object spread, rest parameters and destructuring rest.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'spread og rest i Javascript',
      kicker: 'Leksjon 16 &middot; Javascript',
      title: 'spread og rest',
      lead: 'To tegn med tre prikker som gjør to motsatte jobber: spread pakker ut en verdi, mens rest samler det som blir igjen.',

      's.spread.t': 'Spread: pakk ut en verdi',
      's.spread.d': 
        '<p><code>...a</code> åpner en itererbar verdi og legger elementene inn på stedet der uttrykket står. Med et array lager du derfor enkelt et nytt array: <code>[...a]</code>. Det nye arrayet er ikke det samme objektet som <code>a</code>.</p><p>Spread er nyttig når du vil legge til elementer før eller etter en eksisterende samling, eller kombinere flere arrays. Det endrer ikke selve arrayet du sprer.</p>',

      's.object.t': 'Objekt-spread: kopier egenskaper',
      's.object.d': 
        '<p><code>{ ...user }</code> lager et nytt objekt med egenskapene fra <code>user</code>. Du kan samtidig legge til eller endre egenskaper: <code>{ ...user, age: 31 }</code>.</p><p>Hvis samme egenskapsnavn finnes flere ganger, vinner den som kommer sist. Derfor gir <code>{ ...user, age: 31 }</code> en ny alder, mens <code>{ age: 31, ...user }</code> lar den gamle alderen fra <code>user</code> vinne.</p>',

      's.args.t': 'Rest i funksjoner: samle argumenter',
      's.args.d': 
        '<p><code>function f(...args)</code> samler alle argumentene som ikke allerede er tatt av tidligere parametere i arrayet <code>args</code>. Det er et vanlig array, så du kan bruke metoder som <code>map</code>, <code>reduce</code> og <code>length</code>.</p><p>Med <code>function show(first, ...rest)</code> går første argument til <code>first</code>, mens alle de resterende går inn i <code>rest</code>. Rest-parameteren må være sist.</p>',

      's.arrayrest.t': 'Rest i arrays: ta resten',
      's.arrayrest.d': 
        '<p>I destructuring kan <code>...rest</code> samle alle elementene som ikke allerede er tatt ut. I <code>const [first, ...rest] = a</code> får <code>first</code> det første elementet og <code>rest</code> et nytt array med resten.</p><p>Du kan hente ut flere elementer før rest, men rest må stå sist. Det er nettopp det som gjør navnet meningsfullt: den samler det som er igjen.</p>',

      's.objrest.t': 'Rest i objekter: ta resten av egenskapene',
      's.objrest.d': 
        '<p>I objekt-destructuring samler <code>...rest</code> alle egenskapene du ikke allerede har hentet ut. I <code>const { name, ...details } = user</code> blir <code>name</code> hentet ut, mens <code>details</code> får et nytt objekt med de andre egenskapene.</p><p>Dette er nyttig når du vil fjerne én kjent egenskap fra et objekt uten å endre originalen.</p>',

      's.combine.t': 'Spread og rest sammen',
      's.combine.d': 
        '<p>Spread og rest er motsatte bevegelser. Spread sender elementene ut: <code>f(...a)</code>. Rest tar imot og samler dem: <code>function f(...args)</code>. Derfor passer de naturlig sammen.</p><p>Det samme mønsteret brukes med arrays og objekter: du kan spre en eksisterende samling inn i en ny, og senere destrukturere eller motta verdiene med rest.</p>',

      's.note': 'Én linje å ta med: <code>...</code> betyr «pakk ut her» når det brukes som spread, og «samle resten her» når det brukes som rest. Spread lager nye arrays/objekter i de vanlige kopimønstrene; rest samler til et nytt array eller objekt.',
      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },
    en: {
      'doc.title': 'spread and rest in JavaScript',
      kicker: 'Lesson 16 &middot; Javascript',
      title: 'spread and rest',
      lead: 'Three dots with two opposite jobs: spread opens a value up, while rest collects what is left.',

      's.spread.t': 'Spread: open a value up',
      's.spread.d': 
        '<p><code>...a</code> opens an iterable value and puts its elements where the expression appears. With an array, <code>[...a]</code> therefore makes a new array. The new array is not the same object as <code>a</code>.</p><p>Spread is useful when you want to put elements before or after an existing collection, or combine several arrays. It does not change the array being spread.</p>',

      's.object.t': 'Object spread: copy properties',
      's.object.d': 
        '<p><code>{ ...user }</code> makes a new object with the properties from <code>user</code>. You can add or change properties at the same time: <code>{ ...user, age: 31 }</code>.</p><p>If the same property name occurs more than once, the last one wins. So <code>{ ...user, age: 31 }</code> gives the new age, while <code>{ age: 31, ...user }</code> lets the old age from <code>user</code> win.</p>',

      's.args.t': 'Rest in functions: collect arguments',
      's.args.d': 
        '<p><code>function f(...args)</code> collects all arguments not already taken by earlier parameters into the array <code>args</code>. It is a normal array, so you can use methods such as <code>map</code>, <code>reduce</code> and <code>length</code>.</p><p>With <code>function show(first, ...rest)</code>, the first argument goes to <code>first</code>, while all remaining arguments go into <code>rest</code>. The rest parameter must be last.</p>',

      's.arrayrest.t': 'Rest in arrays: take the remainder',
      's.arrayrest.d': 
        '<p>In destructuring, <code>...rest</code> collects all elements that were not already taken. In <code>const [first, ...rest] = a</code>, <code>first</code> gets the first element and <code>rest</code> gets a new array containing the remainder.</p><p>You can take several elements before rest, but rest must be last. That is exactly what the name means: it collects what is left.</p>',

      's.objrest.t': 'Rest in objects: take the remaining properties',
      's.objrest.d': 
        '<p>In object destructuring, <code>...rest</code> collects all properties you did not already take out. In <code>const { name, ...details } = user</code>, <code>name</code> is extracted while <code>details</code> gets a new object with the other properties.</p><p>This is useful when you want to remove one known property from an object without changing the original.</p>',

      's.combine.t': 'Spread and rest together',
      's.combine.d': 
        '<p>Spread and rest are opposite movements. Spread sends elements out: <code>f(...a)</code>. Rest receives and collects them: <code>function f(...args)</code>. That is why they fit together naturally.</p><p>The same pattern works with arrays and objects: you can spread an existing collection into a new one, then destructure or receive the values with rest.</p>',

      's.note': 'One line to remember: <code>...</code> means “open it up here” when it is spread, and “collect the rest here” when it is rest. Spread makes new arrays/objects in the usual copy patterns; rest collects into a new array or object.',
      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },
    uk: {
      'doc.title': 'spread і rest у JavaScript',
      kicker: 'Урок 16 &middot; Javascript',
      title: 'spread і rest',
      lead: 'Три крапки з двома протилежними ролями: spread розгортає значення, а rest збирає те, що залишилося.',

      's.spread.t': 'Spread: розгорнути значення',
      's.spread.d': 
        '<p><code>...a</code> розгортає ітероване значення й вставляє його елементи там, де стоїть вираз. Для масиву <code>[...a]</code> створює новий масив. Новий масив не є тим самим об&#39;єктом, що й <code>a</code>.</p><p>Spread зручний, коли треба додати елементи перед або після наявної колекції чи поєднати кілька масивів. Сам масив, який розгортають, він не змінює.</p>',

      's.object.t': 'Spread для об&#39;єктів: копіювати властивості',
      's.object.d': 
        '<p><code>{ ...user }</code> створює новий об&#39;єкт із властивостями <code>user</code>. Одночасно можна додати або змінити властивість: <code>{ ...user, age: 31 }</code>.</p><p>Якщо одна назва властивості трапляється кілька разів, перемагає остання. Тому в <code>{ ...user, age: 31 }</code> буде новий вік, а в <code>{ age: 31, ...user }</code> старий вік із <code>user</code> перезапише 31.</p>',

      's.args.t': 'Rest у функціях: зібрати аргументи',
      's.args.d': 
        '<p><code>function f(...args)</code> збирає всі аргументи, які не були взяті попередніми параметрами, у масив <code>args</code>. Це звичайний масив, тому можна використовувати <code>map</code>, <code>reduce</code> і <code>length</code>.</p><p>У <code>function show(first, ...rest)</code> перший аргумент потрапляє в <code>first</code>, а всі наступні — у <code>rest</code>. Параметр rest має бути останнім.</p>',

      's.arrayrest.t': 'Rest у масивах: взяти решту',
      's.arrayrest.d': 
        '<p>У деструктуризації <code>...rest</code> збирає всі елементи, які ще не були взяті. У <code>const [first, ...rest] = a</code> <code>first</code> отримує перший елемент, а <code>rest</code> — новий масив із рештою.</p><p>Перед rest можна взяти кілька елементів, але rest має стояти останнім. Саме це й означає назва: він збирає те, що залишилося.</p>',

      's.objrest.t': 'Rest в об&#39;єктах: взяти решту властивостей',
      's.objrest.d': 
        '<p>У деструктуризації об&#39;єкта <code>...rest</code> збирає всі властивості, які ви ще не витягнули. У <code>const { name, ...details } = user</code> <code>name</code> витягується, а <code>details</code> отримує новий об&#39;єкт з іншими властивостями.</p><p>Це зручно, коли треба прибрати одну відому властивість з об&#39;єкта, не змінюючи оригінал.</p>',

      's.combine.t': 'Spread і rest разом',
      's.combine.d': 
        '<p>Spread і rest виконують протилежні рухи. Spread передає елементи назовні: <code>f(...a)</code>. Rest приймає їх і збирає: <code>function f(...args)</code>. Тому вони природно працюють разом.</p><p>Та сама схема працює з масивами й об&#39;єктами: можна розгорнути наявну колекцію в нову, а потім деструктурувати або прийняти значення через rest.</p>',

      's.note': 'Один рядок для пам&#39;яті: <code>...</code> означає «розгорнути тут», коли це spread, і «зібрати решту тут», коли це rest. Spread у звичайних шаблонах копіювання створює нові масиви/об&#39;єкти; rest збирає значення в новий масив або об&#39;єкт.',
      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva blir resultatet av <code>const a = [1, 2]; const b = [...a, 3]</code>? ',
        answer: 1,
        options: [
          { text: '<code>[1, 2]</code>', why: '<code>3</code> legges til som et nytt element etter at <code>a</code> er spredd.' },
          { text: '<code>[1, 2, 3]</code>', why: 'Spread legger elementene i <code>a</code> inn i det nye arrayet.' },
          { text: '<code>[[1, 2], 3]</code>', why: 'Det ville vært en nøstet array.' },
          { text: 'En feil', why: 'Denne syntaksen er gyldig JavaScript.' },
        ],
      },
      {
        q: 'Hva er forskjellen mellom <code>const b = [...a]</code> og <code>const b = a</code>? ',
        answer: 2,
        options: [
          { text: 'Ingen forskjell.', why: 'Spread lager et nytt array med de samme elementene.' },
          { text: 'Den første lager et objekt, den andre et array.', why: 'Begge er arrays.' },
          { text: '<code>[...a]</code> lager et nytt array; <code>b = a</code> peker på samme array.', why: 'Ved direkte tilordning er det samme array-objekt.' },
          { text: '<code>b = a</code> kopierer alle elementene dypt.', why: 'Spread er ikke en deep copy.' },
        ],
      },
      {
        q: 'I <code>{ ...user, age: 31 }</code>, hvilken <code>age</code> vinner hvis <code>user.age</code> er 30? ',
        answer: 2,
        options: [
          { text: '30', why: 'Den tidligere egenskapen blir overskrevet av den senere.' },
          { text: 'Ingen av dem', why: 'Objektet får en <code>age</code>-egenskap.' },
          { text: '31', why: 'Senere egenskaper vinner ved samme navn.' },
          { text: 'Det blir <code>undefined</code>', why: 'Det oppstår ingen slik verdi.' },
        ],
      },
      {
        q: 'Hva samler <code>function f(...args)</code> i <code>args</code>? ',
        answer: 1,
        options: [
          { text: 'Bare det første argumentet', why: 'Uten tidligere parametere blir alle argumentene samlet.' },
          { text: 'Alle argumentene som ikke allerede er tatt av tidligere parametere', why: 'Rest samler de gjenværende argumentene i et array.' },
          { text: 'Selve funksjonen', why: 'Funksjonen lagres ikke der.' },
          { text: 'Et objekt med parameter-navn', why: 'Det er et array, ikke et parameterobjekt.' },
        ],
      },
      {
        q: 'Hva er verdien av <code>rest</code> her? <code>const [first, ...rest] = [10, 20, 30]</code> ',
        answer: 0,
        options: [
          { text: '<code>[20, 30]</code>', why: 'Rest samler elementene som kommer etter <code>first</code>.' },
          { text: '<code>20</code>', why: '<code>20</code> ligger i rest-arrayet.' },
          { text: '<code>[10, 20]</code>', why: '<code>10</code> er allerede tatt av <code>first</code>.' },
          { text: '<code>30</code>', why: '<code>30</code> er også med i rest, men alene er ikke riktig.' },
        ],
      },
      {
        q: 'Hvor må en rest-parameter som <code>...args</code> stå i en funksjons parameterliste? ',
        answer: 0,
        options: [
          { text: 'Sist', why: 'Rest må være den siste parameteren.' },
          { text: 'Først', why: 'Den kan komme etter vanlige parametere.' },
          { text: 'Hvor som helst', why: 'Den har en bestemt plassering.' },
          { text: 'Rett før første parameter', why: 'Tidligere parametere kan ta sine egne argumenter før rest.' },
        ],
      },
      {
        q: 'Hva blir <code>details</code>? <code>const { name, ...details } = {name: &#39;Ada&#39;, age: 30, city: &#39;Oslo&#39;}</code> ',
        answer: 3,
        options: [
          { text: '<code>{ name: &#39;Ada&#39; }</code>', why: '<code>name</code> er tatt ut separat.' },
          { text: '<code>[&#39;age&#39;, &#39;city&#39;]</code>', why: 'Rest i objekter lager et objekt, ikke et array.' },
          { text: '<code>{ name, age, city }</code>', why: 'Det inneholder bare egenskapene som er igjen.' },
          { text: '<code>{ age: 30, city: &#39;Oslo&#39; }</code>', why: 'Rest samler <code>age</code> og <code>city</code>.' },
        ],
      },
      {
        q: 'Hva skjer med originalobjektet når du gjør <code>const copy = { ...user }</code>? ',
        answer: 1,
        options: [
          { text: 'Det tømmes', why: 'Spread i dette mønsteret leser egenskapene uten å endre originalen.' },
          { text: 'Det endres ikke', why: '<code>copy</code> er et nytt objekt.' },
          { text: 'Det blir slettet', why: 'Originalen slettes ikke.' },
          { text: 'Alle nestede objekter kopieres dypt', why: 'Dette er en shallow copy, ikke en deep copy.' },
        ],
      },
      {
        q: 'Hva gir <code>function show(first, ...rest) { return [first, rest] } show(&#39;a&#39;,&#39;b&#39;,&#39;c&#39;)</code>? ',
        answer: 2,
        options: [
          { text: '<code>[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code>', why: '<code>first</code> tar &#39;a&#39;, og rest samler &#39;b&#39; og &#39;c&#39;.' },
          { text: '<code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</code> som ett flatt array', why: 'Dette beskriver ikke funksjonens returnerte struktur.' },
          { text: '<code>[&#39;a&#39;, [&#39;b&#39;,&#39;c&#39;]]</code>', why: 'Rest er et eget array inne i resultatet.' },
          { text: '<code>[[&#39;a&#39;,&#39;b&#39;], &#39;c&#39;]</code>', why: '&#39;c&#39; går også til rest.' },
        ],
      },
      {
        q: 'Hva er hovedforskjellen mellom spread og rest? ',
        answer: 3,
        options: [
          { text: 'Begge samler verdier', why: 'Spread sender elementer eller egenskaper ut i en ny sammenheng.' },
          { text: 'Begge lager alltid deep copies', why: 'De to syntaksene har ulike roller.' },
          { text: 'Spread virker bare på objekter, rest bare på arrays', why: 'Spread brukes også med arrays og rest også i funksjoner/objekter.' },
          { text: 'Spread pakker ut; rest samler det som blir igjen', why: 'Dette er kjernen i forskjellen.' },
        ],
      },
    ],

    en: [
      {
        q: 'What is the result of <code>const a = [1, 2]; const b = [...a, 3]</code>? ',
        answer: 1,
        options: [
          { text: '<code>[1, 2]</code>', why: '<code>3</code> is added as a new element after <code>a</code> is spread.' },
          { text: '<code>[1, 2, 3]</code>', why: 'Spread puts the elements of <code>a</code> into the new array.' },
          { text: '<code>[[1, 2], 3]</code>', why: 'That would be a nested array.' },
          { text: 'An error', why: 'This syntax is valid JavaScript.' },
        ],
      },
      {
        q: 'What is the difference between <code>const b = [...a]</code> and <code>const b = a</code>? ',
        answer: 2,
        options: [
          { text: 'No difference.', why: 'Spread makes a new array containing the same elements.' },
          { text: 'The first makes an object, the second an array.', why: 'Both are arrays.' },
          { text: '<code>[...a]</code> makes a new array; <code>b = a</code> refers to the same array.', why: 'Direct assignment keeps the same array object.' },
          { text: '<code>b = a</code> makes a deep copy of every element.', why: 'Spread is not a deep copy.' },
        ],
      },
      {
        q: 'In <code>{ ...user, age: 31 }</code>, which <code>age</code> wins if <code>user.age</code> is 30? ',
        answer: 2,
        options: [
          { text: '30', why: 'The earlier property is overwritten by the later one.' },
          { text: 'Neither', why: 'The object has an <code>age</code> property.' },
          { text: '31', why: 'Later properties win when names collide.' },
          { text: 'It becomes <code>undefined</code>', why: 'There is a defined value here.' },
        ],
      },
      {
        q: 'What does <code>function f(...args)</code> collect in <code>args</code>? ',
        answer: 1,
        options: [
          { text: 'Only the first argument', why: 'With no earlier parameters, all arguments are collected.' },
          { text: 'All arguments not already taken by earlier parameters', why: 'Rest collects the remaining arguments into an array.' },
          { text: 'The function itself', why: 'The function is not stored there.' },
          { text: 'An object containing parameter names', why: 'It is an array, not a parameter object.' },
        ],
      },
      {
        q: 'What is <code>rest</code> here? <code>const [first, ...rest] = [10, 20, 30]</code> ',
        answer: 0,
        options: [
          { text: '<code>[20, 30]</code>', why: 'Rest collects the elements after <code>first</code>.' },
          { text: '<code>20</code>', why: '<code>20</code> is inside the rest array.' },
          { text: '<code>[10, 20]</code>', why: '<code>10</code> has already been taken by <code>first</code>.' },
          { text: '<code>30</code>', why: '<code>30</code> is also in rest, but not alone.' },
        ],
      },
      {
        q: 'Where must a rest parameter such as <code>...args</code> appear in a function parameter list? ',
        answer: 0,
        options: [
          { text: 'Last', why: 'Rest must be the last parameter.' },
          { text: 'First', why: 'It can follow ordinary parameters.' },
          { text: 'Anywhere', why: 'Its position is constrained.' },
          { text: 'Right before the first parameter', why: 'Earlier parameters can receive their own arguments before rest.' },
        ],
      },
      {
        q: 'What is <code>details</code>? <code>const { name, ...details } = {name: &#39;Ada&#39;, age: 30, city: &#39;Oslo&#39;}</code> ',
        answer: 3,
        options: [
          { text: '<code>{ name: &#39;Ada&#39; }</code>', why: '<code>name</code> is extracted separately.' },
          { text: '<code>[&#39;age&#39;, &#39;city&#39;]</code>', why: 'Object rest creates an object, not an array.' },
          { text: '<code>{ name, age, city }</code>', why: 'It contains only the remaining properties.' },
          { text: '<code>{ age: 30, city: &#39;Oslo&#39; }</code>', why: 'Rest collects <code>age</code> and <code>city</code>.' },
        ],
      },
      {
        q: 'What happens to the original object when you do <code>const copy = { ...user }</code>? ',
        answer: 1,
        options: [
          { text: 'It is emptied', why: 'Spread in this pattern reads the properties without changing the original.' },
          { text: 'It is not changed', why: '<code>copy</code> is a new object.' },
          { text: 'It is deleted', why: 'The original is not deleted.' },
          { text: 'All nested objects are copied deeply', why: 'This is a shallow copy, not a deep copy.' },
        ],
      },
      {
        q: 'What does <code>function show(first, ...rest) { return [first, rest] } show(&#39;a&#39;,&#39;b&#39;,&#39;c&#39;)</code> return? ',
        answer: 2,
        options: [
          { text: '<code>[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code>', why: '<code>first</code> gets &#39;a&#39;, while rest collects &#39;b&#39; and &#39;c&#39;.' },
          { text: '<code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</code> as one flat array', why: 'That is not the returned structure.' },
          { text: '<code>[&#39;a&#39;, [&#39;b&#39;,&#39;c&#39;]]</code>', why: 'Rest is a separate array inside the result.' },
          { text: '<code>[[&#39;a&#39;,&#39;b&#39;], &#39;c&#39;]</code>', why: '&#39;c&#39; also goes into rest.' },
        ],
      },
      {
        q: 'What is the main difference between spread and rest? ',
        answer: 3,
        options: [
          { text: 'Both collect values', why: 'Spread puts elements or properties into a new context.' },
          { text: 'Both always make deep copies', why: 'The two syntaxes have different roles.' },
          { text: 'Spread works only on objects, rest only on arrays', why: 'Spread also works with arrays, and rest also appears in functions and objects.' },
          { text: 'Spread opens values up; rest collects what remains', why: 'That is the core distinction.' },
        ],
      },
    ],

    uk: [
      {
        q: 'Який результат <code>const a = [1, 2]; const b = [...a, 3]</code>? ',
        answer: 1,
        options: [
          { text: '<code>[1, 2]</code>', why: '<code>3</code> додається як новий елемент після розгортання <code>a</code>.' },
          { text: '<code>[1, 2, 3]</code>', why: 'Spread вставляє елементи <code>a</code> у новий масив.' },
          { text: '<code>[[1, 2], 3]</code>', why: 'Це був би вкладений масив.' },
          { text: 'Помилка', why: 'Цей синтаксис коректний JavaScript.' },
        ],
      },
      {
        q: 'У чому різниця між <code>const b = [...a]</code> і <code>const b = a</code>? ',
        answer: 2,
        options: [
          { text: 'Різниці немає.', why: 'Spread створює новий масив із тими самими елементами.' },
          { text: 'Перше створює об&#39;єкт, друге — масив.', why: 'Обидва значення є масивами.' },
          { text: '<code>[...a]</code> створює новий масив; <code>b = a</code> посилається на той самий масив.', why: 'Присвоєння напряму залишає той самий об&#39;єкт масиву.' },
          { text: '<code>b = a</code> робить глибоку копію всіх елементів.', why: 'Spread не є deep copy.' },
        ],
      },
      {
        q: 'У <code>{ ...user, age: 31 }</code> яке <code>age</code> переможе, якщо <code>user.age</code> дорівнює 30? ',
        answer: 2,
        options: [
          { text: '30', why: 'Раніше властивість перезаписується пізнішою.' },
          { text: 'Жодне', why: 'Об&#39;єкт має властивість <code>age</code>.' },
          { text: '31', why: 'За однакової назви перемагає властивість, що стоїть пізніше.' },
          { text: 'Буде <code>undefined</code>', why: 'Тут є визначене значення.' },
        ],
      },
      {
        q: 'Що збирає <code>function f(...args)</code> у <code>args</code>? ',
        answer: 1,
        options: [
          { text: 'Лише перший аргумент', why: 'Якщо попередніх параметрів немає, збираються всі аргументи.' },
          { text: 'Усі аргументи, які не були взяті попередніми параметрами', why: 'Rest збирає решту аргументів у масив.' },
          { text: 'Саму функцію', why: 'Функція там не зберігається.' },
          { text: 'Об&#39;єкт із назвами параметрів', why: 'Це масив, а не об&#39;єкт параметрів.' },
        ],
      },
      {
        q: 'Чому дорівнює <code>rest</code>? <code>const [first, ...rest] = [10, 20, 30]</code> ',
        answer: 0,
        options: [
          { text: '<code>[20, 30]</code>', why: 'Rest збирає елементи після <code>first</code>.' },
          { text: '<code>20</code>', why: '<code>20</code> знаходиться всередині масиву rest.' },
          { text: '<code>[10, 20]</code>', why: '<code>10</code> уже взяв <code>first</code>.' },
          { text: '<code>30</code>', why: '<code>30</code> також у rest, але не самостійно.' },
        ],
      },
      {
        q: 'Де має стояти rest-параметр на кшталт <code>...args</code> у списку параметрів функції? ',
        answer: 0,
        options: [
          { text: 'Останнім', why: 'Rest має бути останнім параметром.' },
          { text: 'Першим', why: 'Перед ним можуть стояти звичайні параметри.' },
          { text: 'Де завгодно', why: 'Його позиція обмежена.' },
          { text: 'Безпосередньо перед першим параметром', why: 'Попередні параметри отримують свої аргументи до rest.' },
        ],
      },
      {
        q: 'Що таке <code>details</code>? <code>const { name, ...details } = {name: &#39;Ada&#39;, age: 30, city: &#39;Oslo&#39;}</code> ',
        answer: 3,
        options: [
          { text: '<code>{ name: &#39;Ada&#39; }</code>', why: '<code>name</code> витягнуто окремо.' },
          { text: '<code>[&#39;age&#39;, &#39;city&#39;]</code>', why: 'Rest для об&#39;єкта створює об&#39;єкт, а не масив.' },
          { text: '<code>{ name, age, city }</code>', why: 'Там лише властивості, що залишилися.' },
          { text: '<code>{ age: 30, city: &#39;Oslo&#39; }</code>', why: 'Rest збирає <code>age</code> і <code>city</code>.' },
        ],
      },
      {
        q: 'Що відбувається з початковим об&#39;єктом при <code>const copy = { ...user }</code>? ',
        answer: 1,
        options: [
          { text: 'Він очищується', why: 'Spread у цьому шаблоні читає властивості, не змінюючи оригінал.' },
          { text: 'Він не змінюється', why: '<code>copy</code> — новий об&#39;єкт.' },
          { text: 'Його видаляють', why: 'Оригінал не видаляється.' },
          { text: 'Усі вкладені об&#39;єкти копіюються глибоко', why: 'Це shallow copy, а не deep copy.' },
        ],
      },
      {
        q: 'Що поверне <code>function show(first, ...rest) { return [first, rest] } show(&#39;a&#39;,&#39;b&#39;,&#39;c&#39;)</code>? ',
        answer: 2,
        options: [
          { text: '<code>[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code>', why: '<code>first</code> отримує &#39;a&#39;, а rest збирає &#39;b&#39; і &#39;c&#39;.' },
          { text: '<code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</code> як один плоский масив', why: 'Це не структура результату функції.' },
          { text: '<code>[&#39;a&#39;, [&#39;b&#39;,&#39;c&#39;]]</code>', why: 'Rest — окремий масив усередині результату.' },
          { text: '<code>[[&#39;a&#39;,&#39;b&#39;], &#39;c&#39;]</code>', why: '&#39;c&#39; також потрапляє в rest.' },
        ],
      },
      {
        q: 'Яка головна різниця між spread і rest? ',
        answer: 3,
        options: [
          { text: 'Обидва збирають значення', why: 'Spread поміщає елементи або властивості в новий контекст.' },
          { text: 'Обидва завжди роблять глибокі копії', why: 'У двох синтаксисів різні ролі.' },
          { text: 'Spread працює лише з об&#39;єктами, rest — лише з масивами', why: 'Spread працює і з масивами, а rest — і у функціях, і в об&#39;єктах.' },
          { text: 'Spread розгортає значення, а rest збирає те, що залишилося', why: 'Це головна відмінність.' },
        ],
      },
    ],

  },
});
