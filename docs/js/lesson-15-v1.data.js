/*
 * Content of JS lesson 15 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: Map, Set, Array and Object; choosing the right data structure.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */

Lessons.init({
  translations: {
    no: {
      'doc.title': 'Map og Set',
      'kicker': 'Leksjon 15 &middot; Javascript',
      'title': 'Map og Set',
      'lead': 'Fire måter å holde data på. Array har plasser, Object har felter, Map har nøkler og verdier, og Set har unike verdier.',
      's.map.t': 'Map: nøkkel → verdi',
      's.map.d': '<p><code>Map</code> er laget for par av nøkkel og verdi. Du bruker <code>set</code>, <code>get</code>, <code>has</code> og <code>delete</code>, og <code>size</code> forteller hvor mange oppføringer den har.</p><p>En Map kan bruke hva som helst som nøkkel &mdash; også et objekt, en funksjon eller et tall. Nøkkelen beholdes som den verdien den er.</p><p>Bruk Map når dataene dine faktisk er oppslag mellom nøkler og verdier, særlig når nøklene ikke bare er tekst.</p>',
      's.set.t': 'Set: hver verdi bare én gang',
      's.set.d': '<p><code>Set</code> lagrer verdier uten duplikater. Legger du samme verdi inn flere ganger, finnes den fortsatt bare én gang. <code>size</code> viser antallet unike verdier.</p><p><code>has</code> tester medlemskap, <code>add</code> legger til og <code>delete</code> fjerner. <code>for...of</code> gir verdiene i innsettingsrekkefølge.</p><p>Set passer når spørsmålet er «finnes denne verdien?» eller «hvilke forskjellige verdier har vi?».</p>',
      's.object.t': 'Object: navngitte felter',
      's.object.d': '<p>Et vanlig <code>Object</code> passer godt når dataene er en enkel post med kjente feltnavn, som <code>name</code>, <code>age</code> og <code>email</code>.</p><p>Vanlige objekt-egenskaper har nøkler som er strenger eller symboler. Et tall brukt som egenskapstast behandles derfor som en strengnøkkel. En <code>Map</code> beholder derimot tallet som et tall.</p><p>Object har også prototype-egenskaper. Map er en egen datastruktur med et API laget for oppslag og iterasjon.</p>',
      's.array.t': 'Array: rekkefølge og indekser',
      's.array.d': '<p>En <code>Array</code> er riktig når plasseringen betyr noe. Elementene har numeriske indekser fra 0, og <code>length</code> forteller lengden.</p><p>Arrays kan inneholde duplikater, og rekkefølgen er en del av dataene. Når du lager en Set fra en Array, endrer du modellen til «unik samling».</p>',
      's.iter.t': 'Iterasjon: hva kommer ut?',
      's.iter.d': '<p><code>Array</code> gir verdier i rekkefølge, og <code>Set</code> gir sine unike verdier. En <code>Map</code> gir oppføringer som parene <code>[key, value]</code>.</p><p>For Map kan du også bruke <code>keys()</code> eller <code>values()</code> når du bare trenger én side av paret.</p>',
      's.convert.t': 'Konvertering mellom Array og Set',
      's.convert.d': '<p>En vanlig oppskrift er <code>new Set(array)</code> for å fjerne duplikater. Spread, <code>[...set]</code>, lager deretter en ny Array.</p><p>Map kan bygges fra en samling av to-elementers arrays: <code>new Map([[&#39;a&#39;, 1], [&#39;b&#39;, 2]])</code>.</p>',
      's.compare.t': 'Hvilken skal du bruke?',
      's.compare.d': '<p>De fire strukturene modellerer forskjellige ting. <code>Array</code> passer når posisjon og rekkefølge er data. <code>Set</code> passer når unikhet og medlemskap er data.</p><p><code>Map</code> passer for nøkkel → verdi-oppslag, særlig med nøkler som ikke bare er tekst. <code>Object</code> passer for en enkel post med navngitte felter.</p>',
      's.note': 'Én linje å ta med: <code>Array</code> = ordnede elementer, <code>Set</code> = unike verdier, <code>Map</code> = nøkler til verdier, <code>Object</code> = navngitte felter. For arbeid med JSON brukes spesifikt <code>Object</code> og <code>Array</code>. Velg etter hva dataene betyr.',
      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },
    en: {
      'doc.title': 'Map and Set',
      'kicker': 'Lesson 15 &middot; Javascript',
      'title': 'Map and Set',
      'lead': 'Four ways to hold data. Array has positions, Object has fields, Map has keys and values, and Set has unique values.',
      's.map.t': 'Map: key → value',
      's.map.d': '<p><code>Map</code> is built for key and value pairs. You use <code>set</code>, <code>get</code>, <code>has</code> and <code>delete</code>, and <code>size</code> tells you how many entries it has.</p><p>A Map can use anything as a key &mdash; including an object, a function or a number. The key remains that value, with its type.</p><p>Use Map when your data really is a collection of key → value lookups, especially when the keys are not just text.</p>',
      's.set.t': 'Set: each value only once',
      's.set.d': '<p><code>Set</code> stores values without duplicates. Add the same value several times and it still exists only once. <code>size</code> tells you the number of unique values.</p><p><code>has</code> tests membership, <code>add</code> inserts and <code>delete</code> removes. <code>for...of</code> yields values in insertion order.</p><p>Set fits when the question is &laquo;does this value exist?&raquo; or &laquo;which different values do we have?&raquo;.</p>',
      's.object.t': 'Object: named fields',
      's.object.d': '<p>A normal <code>Object</code> fits well when the data is a simple record with known field names such as <code>name</code>, <code>age</code> and <code>email</code>.</p><p>Ordinary object property keys are strings or symbols. A number used as a property key is therefore handled as a string key. A <code>Map</code>, by contrast, keeps the number as a number.</p><p>Object also has prototype-related behavior. Map is a separate data structure with an API designed for lookups and iteration.</p>',
      's.array.t': 'Array: order and indexes',
      's.array.d': '<p>An <code>Array</code> is the natural choice when position matters. Elements have numeric indexes starting at 0, and <code>length</code> gives the length.</p><p>Arrays can contain duplicates, and order is part of the data. Turning an Array into a Set changes the model into a unique collection.</p>',
      's.iter.t': 'Iteration: what comes out?',
      's.iter.d': '<p><code>Array</code> yields values in order, and <code>Set</code> yields its unique values. A <code>Map</code> yields entries as <code>[key, value]</code> pairs.</p><p>For Map you can also use <code>keys()</code> or <code>values()</code> when you need only one side of the pair.</p>',
      's.convert.t': 'Converting between Array and Set',
      's.convert.d': '<p>A common recipe is <code>new Set(array)</code> to remove duplicates. Spread, <code>[...set]</code>, then creates a new Array.</p><p>Map can be built from a collection of two-element arrays: <code>new Map([[&#39;a&#39;, 1], [&#39;b&#39;, 2]])</code>.</p>',
      's.compare.t': 'Which one should you use?',
      's.compare.d': '<p>The four structures model different things. <code>Array</code> fits when position and order are data. <code>Set</code> fits when uniqueness and membership are data.</p><p><code>Map</code> fits key → value lookups, especially with keys that are not just strings. <code>Object</code> fits a simple record with named fields.</p>',
      's.note': 'One line to take away: <code>Array</code> = ordered elements, <code>Set</code> = unique values, <code>Map</code> = keys to values, <code>Object</code> = named fields. For work with JSON, namely <code>Object</code> and <code>Array</code> are used. Choose based on what the data means.',
      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },
    uk: {
      'doc.title': 'Map і Set',
      'kicker': 'Урок 15 &middot; Javascript',
      'title': 'Map і Set',
      'lead': 'Чотири способи зберігати дані. Array має позиції, Object має поля, Map має ключі та значення, а Set має унікальні значення.',
      's.map.t': 'Map: ключ → значення',
      's.map.d': '<p><code>Map</code> створений для пар ключ → значення. Використовуються <code>set</code>, <code>get</code>, <code>has</code> і <code>delete</code>, а <code>size</code> показує кількість записів.</p><p>Map може використовувати як ключ будь-яке значення &mdash; об&#39;єкт, функцію або число. Ключ зберігається саме як це значення і зберігає свій тип.</p><p>Використовуйте Map, коли дані справді є набором пошуків ключ → значення, особливо якщо ключі не обмежуються текстом.</p>',
      's.set.t': 'Set: кожне значення лише один раз',
      's.set.d': '<p><code>Set</code> зберігає значення без дублікатів. Якщо додати те саме значення кілька разів, воно все одно буде лише одне. <code>size</code> показує кількість унікальних значень.</p><p><code>has</code> перевіряє наявність, <code>add</code> додає, а <code>delete</code> видаляє. <code>for...of</code> повертає значення в порядку додавання.</p><p>Set підходить для запитань «чи є це значення?» та «які різні значення ми маємо?».</p>',
      's.object.t': 'Object: іменовані поля',
      's.object.d': '<p>Звичайний <code>Object</code> добре підходить для простого запису з відомими назвами полів, наприклад <code>name</code>, <code>age</code> і <code>email</code>.</p><p>Звичайні ключі властивостей об&#39;єкта &mdash; рядки або символи. Число, використане як ключ властивості, тому обробляється як рядковий ключ. <code>Map</code>, навпаки, зберігає число саме як число.</p><p>Object також має поведінку, пов&#39;язану з прототипом. Map &mdash; окрема структура зі своїм API для пошуку та перебору.</p>',
      's.array.t': 'Array: порядок та індекси',
      's.array.d': '<p><code>Array</code> природно використовувати, коли важлива позиція. Елементи мають числові індекси від 0, а <code>length</code> показує довжину.</p><p>Масиви можуть містити дублікати, а порядок є частиною даних. Перетворення Array на Set змінює модель на унікальну колекцію.</p>',
      's.iter.t': 'Перебір: що виходить?',
      's.iter.d': '<p><code>Array</code> дає значення по порядку, <code>Set</code> дає свої унікальні значення, а <code>Map</code> дає записи як пари <code>[key, value]</code>.</p><p>Для Map можна також використати <code>keys()</code> або <code>values()</code>, якщо потрібна лише одна сторона пари.</p>',
      's.convert.t': 'Перетворення між Array і Set',
      's.convert.d': '<p>Поширений прийом &mdash; <code>new Set(array)</code> для видалення дублікатів. Spread, <code>[...set]</code>, потім створює новий Array.</p><p>Map можна створити з колекції двоелементних масивів: <code>new Map([[&#39;a&#39;, 1], [&#39;b&#39;, 2]])</code>.</p>',
      's.compare.t': 'Що вибрати?',
      's.compare.d': '<p>Чотири структури моделюють різні речі. <code>Array</code> підходить, коли даними є позиція та порядок. <code>Set</code> підходить, коли даними є унікальність і належність.</p><p><code>Map</code> підходить для пошуку ключ → значення, особливо з ключами, які не є лише рядками. <code>Object</code> підходить для простого запису з іменованими полями.</p>',
      's.note': 'Один рядок для пам&#39;яті: <code>Array</code> = впорядковані елементи, <code>Set</code> = унікальні значення, <code>Map</code> = ключі до значень, <code>Object</code> = іменовані поля. При роботі з JSON використовується саме <code>Object</code> і <code>Array</code>. Вибирайте за змістом даних.',
      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du har <code>new Map()</code>. Hva er hovedideen bak strukturen?',
        answer: 1,
        options: [
          {
            text: 'En liste med numeriske indekser.',
            why: 'Det er hovedbruken til Array.',
          },
          {
            text: 'En samling nøkkel → verdi-par der nøkler kan være vilkårlige verdier.',
            why: 'Det er riktig. Map lagrer par og begrenser ikke nøklene til strenger.',
          },
          {
            text: 'En samling bare med unike primitive verdier.',
            why: 'Set er laget for unike verdier, selv om det også kan inneholde objekter.',
          },
          {
            text: 'Et objekt der egenskapene bare kan leses.',
            why: 'Map kan endres og har metoder som set og delete.',
          },
        ],
      },
      {
        q: 'Hva blir <code>new Set([&#39;js&#39;, &#39;css&#39;, &#39;js&#39;]).size</code>?',
        answer: 2,
        options: [
          {
            text: '3',
            why: 'Den gjentatte &#39;js&#39; lagres ikke to ganger.',
          },
          {
            text: '1',
            why: 'Det finnes to forskjellige verdier: &#39;js&#39; og &#39;css&#39;.',
          },
          {
            text: '2',
            why: 'Riktig. Set beholder hver verdi bare én gang.',
          },
          {
            text: 'undefined',
            why: 'Set har egenskapen size.',
          },
        ],
      },
      {
        q: 'Hva returnerer <code>map.get(key)</code> når nøkkelen ikke finnes?',
        answer: 0,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Riktig. En manglende Map-nøkkel gir undefined.',
          },
          {
            text: '<code>null</code>',
            why: 'En manglende nøkkel gir ikke null.',
          },
          {
            text: 'Det kaster en feil.',
            why: 'En manglende nøkkel gir ikke feil av seg selv.',
          },
          {
            text: 'Nøkkelen blir lagt til automatisk.',
            why: 'get leser bare; den setter ikke inn en ny nøkkel.',
          },
        ],
      },
      {
        q: 'Hvilken struktur passer naturlig når du vil fjerne duplikate verdier?',
        answer: 3,
        options: [
          {
            text: 'Object',
            why: 'Object er ikke laget for en samling unike verdier.',
          },
          {
            text: 'Map',
            why: 'Map er laget for nøkkel → verdi-par.',
          },
          {
            text: 'Array',
            why: 'Array kan inneholde duplikater; fjerning krever ekstra logikk.',
          },
          {
            text: 'Set',
            why: 'Riktig. Set lagrer hver verdi høyst én gang.',
          },
        ],
      },
      {
        q: 'Hva er den viktige forskjellen mellom en vanlig objekt-nøkkel og en Map-nøkkel?',
        answer: 1,
        options: [
          {
            text: 'Object kan bruke arrays som nøkler, men Map kan ikke.',
            why: 'Map kan ha arrays og andre objekter som nøkler.',
          },
          {
            text: 'Map-nøkler kan være verdier av hvilken som helst type; vanlige objekt-nøkler er strenger eller symboler.',
            why: 'Riktig. Map beholder nøkkelverdien og typen.',
          },
          {
            text: 'Object-nøkler er alltid tall.',
            why: 'Objekt-nøkler er ikke alltid tall.',
          },
          {
            text: 'Det er ingen forskjell.',
            why: 'Det er en grunnleggende forskjell i nøkkelbehandlingen.',
          },
        ],
      },
      {
        q: 'Hvilken egenskap gir antallet oppføringer i en Map?',
        answer: 0,
        options: [
          {
            text: '<code>map.size</code>',
            why: 'Riktig. Map har egenskapen size.',
          },
          {
            text: '<code>map.length</code>',
            why: 'length hører til arrays, ikke Map.',
          },
          {
            text: '<code>Object.keys(map).length</code>',
            why: 'Dette teller ikke Map-oppføringer på denne måten.',
          },
          {
            text: '<code>map.count</code>',
            why: 'Map har ingen count-egenskap.',
          },
        ],
      },
      {
        q: 'Hva får du i hver runde med <code>for (const [key, value] of map)</code>?',
        answer: 2,
        options: [
          {
            text: 'Bare nøkkelen.',
            why: 'Da ville du brukt en keys-orientert iterasjon.',
          },
          {
            text: 'Bare verdien.',
            why: 'Da ville du brukt values-orientert iterasjon.',
          },
          {
            text: 'Et todelt array med nøkkelen og verdien.',
            why: 'Riktig. Map gir [key, value]-par ved vanlig iterasjon.',
          },
          {
            text: 'Selve Map-objektet.',
            why: 'Iteratoren gir oppføringer, ikke selve Map-objektet.',
          },
        ],
      },
      {
        q: 'Hva gir en <code>for...of</code>-løkke over en Set?',
        answer: 3,
        options: [
          {
            text: 'Numeriske indekser.',
            why: 'Set har ikke numeriske indekser som en Array.',
          },
          {
            text: '[key, value]-par.',
            why: 'Dette er formen på en Map-oppføring.',
          },
          {
            text: 'Objekt-egenskapsnavn.',
            why: 'Set er ikke et vanlig Object.',
          },
          {
            text: 'Verdiene som ligger i Set-en.',
            why: 'Riktig. Set gir verdiene som er lagret.',
          },
        ],
      },
      {
        q: 'Hvilken struktur passer vanligvis best for en enkel post som <code>{ name: &#39;Åse&#39;, age: 42 }</code>?',
        answer: 1,
        options: [
          {
            text: 'Set',
            why: 'Set er for unike verdier, ikke navngitte felter.',
          },
          {
            text: 'Object',
            why: 'Riktig. Object er naturlig for en post med navngitte felter.',
          },
          {
            text: 'Map',
            why: 'Map kan representere dette, men en enkel post er vanligvis tydeligere som Object.',
          },
          {
            text: 'Array',
            why: 'Array ville gjort feltnavnene implisitte eller krevd ekstra struktur.',
          },
        ],
      },
      {
        q: 'Hva gir <code>[...new Set([1, 2, 2, 3, 3])]</code>?',
        answer: 0,
        options: [
          {
            text: '<code>[1, 2, 3]</code>',
            why: 'Riktig. Set fjerner duplikater, og spread lager en Array igjen.',
          },
          {
            text: '<code>[1, 2, 2, 3, 3]</code>',
            why: 'Set har allerede fjernet duplikatene før spread.',
          },
          {
            text: '<code>{1, 2, 3}</code>',
            why: 'Spread-uttrykket her lager en Array.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Uttrykket er gyldig og lager en Array.',
          },
        ],
      },
      {
        q: 'Kan vi bruke Map og Set når vi oppretter JSON?',
        answer: 0,
        options: [
          {
            text: 'Nei, de blir ikke serialisert korrekt til JSON, ikke slik som i Java.',
            why: 'Map og Set kan ikke brukes. Map og Set må konverteres manuelt til Object og Array. Hvis vi ikke gjør det, vil de bli konvertert til tomme objekter.',
          },
          {                                                                                                                                            
            text: 'Map kan brukes, men ikke Set',
            why: 'Ikke riktig. Både Map og Set serialiseres til tomme objekter hvis de ikke brukes som enkle objekter.',
          },
          {
            text: 'Set kan brukes, men ikke Map',
            why: 'Ikke riktig. Både Map og Set serialiseres til tomme objekter hvis de ikke brukes som enkle objekter.',
          },
          {
            text: 'Ja, begge blir korrekt serialisert til Array og Object.',
            why: 'Ikke riktig. Både Map og Set serialiseres til tomme objekter hvis de ikke brukes som enkle objekter.',
          },
        ],
      },
    ],
    en: [
      {
        q: 'You have <code>new Map()</code>. What is the main idea behind the structure?',
        answer: 1,
        options: [
          {
            text: 'An indexed list.',
            why: 'That is the main use of an Array.',
          },
          {
            text: 'A collection of key → value pairs where keys can be any value.',
            why: 'Correct. Map stores pairs and does not restrict keys to strings.',
          },
          {
            text: 'A collection of unique primitive values only.',
            why: 'Set is for unique values, although it can also contain objects.',
          },
          {
            text: 'An object whose properties can only be read.',
            why: 'Map is mutable and has methods such as set and delete.',
          },
        ],
      },
      {
        q: 'What is the result of <code>new Set([&#39;js&#39;, &#39;css&#39;, &#39;js&#39;]).size</code>?',
        answer: 2,
        options: [
          {
            text: '3',
            why: 'The repeated &#39;js&#39; is not stored twice.',
          },
          {
            text: '1',
            why: 'There are two different values: &#39;js&#39; and &#39;css&#39;.',
          },
          {
            text: '2',
            why: 'Correct. Set keeps each value only once.',
          },
          {
            text: 'undefined',
            why: 'Set has a size property.',
          },
        ],
      },
      {
        q: 'What does <code>map.get(key)</code> return when the key is not present?',
        answer: 0,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Correct. A missing Map key gives undefined.',
          },
          {
            text: '<code>null</code>',
            why: 'A missing key does not give null.',
          },
          {
            text: 'It throws an exception.',
            why: 'A missing key does not itself cause an exception.',
          },
          {
            text: 'It adds the key automatically.',
            why: 'get only reads; it does not insert a new key.',
          },
        ],
      },
      {
        q: 'Which structure is a natural choice when you want to remove duplicate values?',
        answer: 3,
        options: [
          {
            text: 'Object',
            why: 'Object is not designed as a unique-value collection.',
          },
          {
            text: 'Map',
            why: 'Map is designed for key → value pairs.',
          },
          {
            text: 'Array',
            why: 'Array can contain duplicates; removing them needs extra logic.',
          },
          {
            text: 'Set',
            why: 'Correct. Set stores each value at most once.',
          },
        ],
      },
      {
        q: 'What is the important difference between an ordinary object key and a Map key?',
        answer: 1,
        options: [
          {
            text: 'Object keys can be arrays, but Map keys cannot.',
            why: 'Map keys can be arrays and other objects.',
          },
          {
            text: 'Map keys can be values of any type; ordinary object property keys are strings or symbols.',
            why: 'Correct. Map preserves the key value and its type.',
          },
          {
            text: 'Object keys are always numbers.',
            why: 'Object property keys are not always numbers.',
          },
          {
            text: 'There is no difference.',
            why: 'There is a fundamental difference in key handling.',
          },
        ],
      },
      {
        q: 'Which property gives the number of entries in a Map?',
        answer: 0,
        options: [
          {
            text: '<code>map.size</code>',
            why: 'Correct. Map has the size property.',
          },
          {
            text: '<code>map.length</code>',
            why: 'length belongs to arrays, not Map.',
          },
          {
            text: '<code>Object.keys(map).length</code>',
            why: 'That does not count Map entries this way.',
          },
          {
            text: '<code>map.count</code>',
            why: 'Map has no count property.',
          },
        ],
      },
      {
        q: 'What do you get on each iteration of <code>for (const [key, value] of map)</code>?',
        answer: 2,
        options: [
          {
            text: 'Only the key.',
            why: 'You would use a keys-oriented iteration for that.',
          },
          {
            text: 'Only the value.',
            why: 'You would use a values-oriented iteration for that.',
          },
          {
            text: 'A two-item array containing the key and the value.',
            why: 'Correct. Map iteration yields [key, value] pairs.',
          },
          {
            text: 'The Map object itself.',
            why: 'The iterator yields entries, not the Map object itself.',
          },
        ],
      },
      {
        q: 'What does a <code>for...of</code> loop over a Set produce?',
        answer: 3,
        options: [
          {
            text: 'Numeric indexes.',
            why: 'Set has no numeric indexes like an Array.',
          },
          {
            text: '[key, value] pairs.',
            why: 'That is the shape of a Map entry.',
          },
          {
            text: 'Object property names.',
            why: 'Set is not an ordinary Object.',
          },
          {
            text: 'The values stored in the Set.',
            why: 'Correct. Set yields the values stored in it.',
          },
        ],
      },
      {
        q: 'Which structure usually fits a simple record such as <code>{ name: &#39;Åse&#39;, age: 42 }</code> best?',
        answer: 1,
        options: [
          {
            text: 'Set',
            why: 'Set is for unique values, not named fields.',
          },
          {
            text: 'Object',
            why: 'Correct. Object is natural for a record with named fields.',
          },
          {
            text: 'Map',
            why: 'Map can represent it, but a simple record is usually clearer as Object.',
          },
          {
            text: 'Array',
            why: 'An Array would make the field names implicit or require extra structure.',
          },
        ],
      },
      {
        q: 'What does <code>[...new Set([1, 2, 2, 3, 3])]</code> produce?',
        answer: 0,
        options: [
          {
            text: '<code>[1, 2, 3]</code>',
            why: 'Correct. Set removes duplicates and spread creates an Array again.',
          },
          {
            text: '<code>[1, 2, 2, 3, 3]</code>',
            why: 'The Set has already removed duplicates before spread.',
          },
          {
            text: '<code>{1, 2, 3}</code>',
            why: 'The spread expression here creates an Array.',
          },
          {
            text: '<code>undefined</code>',
            why: 'The expression is valid and produces an Array.',
          },
        ],
      },
      {
        q: 'Can we use Map and Set when we create JSON?',
        answer: 0,
        options: [
          {
            text: 'No, they are not properly serialized into JSON, not like in Java',
            why: 'Map and Set cannot be used directly. Map and Set must be manually converted into Object and Array. If we do not do so, they will be converted into empty objects.',
          },
          {                                                                                                                                            
            text: 'Map can be used, but Set cannot',
            why: 'Wrong. Both Map and Set are serialized into empty objects, if not used as simple objects.',
          },
          {
            text: 'Set can be used, but Map cannot',
            why: 'Wrong. Both Map and Set are serialized into empty objects, if not used as simple Objects.',
          },
          {
            text: 'Yes, they are both serialized into Array and Object properly',
            why: 'Wrong. Both Map and Set are serialized into empty objects, if not used as simple Objects.',
          },
        ],
      },
    ],
    uk: [
      {
        q: 'У вас є <code>new Map()</code>. Яка головна ідея цієї структури?',
        answer: 1,
        options: [
          {
            text: 'Впорядкований список з індексами.',
            why: 'Це основне призначення Array.',
          },
          {
            text: 'Набір пар ключ → значення, де ключем може бути будь-яке значення.',
            why: 'Правильно. Map зберігає пари й не обмежує ключі строковими значеннями.',
          },
          {
            text: 'Набір лише унікальних примітивних значень.',
            why: 'Set призначений для унікальних значень, хоча також може містити об&#39;єкти.',
          },
          {
            text: 'Об&#39;єкт, властивості якого можна лише читати.',
            why: 'Map можна змінювати; він має методи set і delete.',
          },
        ],
      },
      {
        q: 'Що дасть <code>new Set([&#39;js&#39;, &#39;css&#39;, &#39;js&#39;]).size</code>?',
        answer: 2,
        options: [
          {
            text: '3',
            why: 'Повторний &#39;js&#39; не зберігається двічі.',
          },
          {
            text: '1',
            why: 'Є два різні значення: &#39;js&#39; і &#39;css&#39;.',
          },
          {
            text: '2',
            why: 'Правильно. Set зберігає кожне значення лише один раз.',
          },
          {
            text: 'undefined',
            why: 'Set має властивість size.',
          },
        ],
      },
      {
        q: 'Що повертає <code>map.get(key)</code>, якщо ключа немає?',
        answer: 0,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Правильно. Для відсутнього ключа Map повертає undefined.',
          },
          {
            text: '<code>null</code>',
            why: 'Відсутній ключ не дає null.',
          },
          {
            text: 'Кидає виняток.',
            why: 'Відсутність ключа сама по собі не спричиняє виняток.',
          },
          {
            text: 'Ключ автоматично додається.',
            why: 'get лише читає і не додає новий ключ.',
          },
        ],
      },
      {
        q: 'Яка структура природно підходить для видалення дублікатів значень?',
        answer: 3,
        options: [
          {
            text: 'Object',
            why: 'Object не призначений для колекції унікальних значень.',
          },
          {
            text: 'Map',
            why: 'Map призначений для пар ключ → значення.',
          },
          {
            text: 'Array',
            why: 'Array може містити дублікати; для їх видалення потрібна додаткова логіка.',
          },
          {
            text: 'Set',
            why: 'Правильно. Set зберігає кожне значення не більше одного разу.',
          },
        ],
      },
      {
        q: 'Яка важлива різниця між звичайним ключем Object і ключем Map?',
        answer: 1,
        options: [
          {
            text: 'Object може мати масиви ключами, а Map не може.',
            why: 'Map може мати масиви та інші об&#39;єкти як ключі.',
          },
          {
            text: 'Ключі Map можуть бути значеннями будь-якого типу; звичайні ключі властивостей Object є строками або символами.',
            why: 'Правильно. Map зберігає значення ключа та його тип.',
          },
          {
            text: 'Ключі Object завжди числа.',
            why: 'Ключі властивостей Object не завжди числа.',
          },
          {
            text: 'Різниці немає.',
            why: 'Є фундаментальна різниця в обробці ключів.',
          },
        ],
      },
      {
        q: 'Яка властивість показує кількість записів у Map?',
        answer: 0,
        options: [
          {
            text: '<code>map.size</code>',
            why: 'Правильно. Map має властивість size.',
          },
          {
            text: '<code>map.length</code>',
            why: 'length характерний для масивів, а не для Map.',
          },
          {
            text: '<code>Object.keys(map).length</code>',
            why: 'Так не підраховуються записи Map.',
          },
          {
            text: '<code>map.count</code>',
            why: 'У Map немає властивості count.',
          },
        ],
      },
      {
        q: 'Що ви отримуєте на кожній ітерації <code>for (const [key, value] of map)</code>?',
        answer: 2,
        options: [
          {
            text: 'Лише ключ.',
            why: 'Для цього використовують ітерацію keys.',
          },
          {
            text: 'Лише значення.',
            why: 'Для цього використовують values.',
          },
          {
            text: 'Двохелементний масив із ключем і значенням.',
            why: 'Правильно. Map під час звичайного перебору дає пари [key, value].',
          },
          {
            text: 'Сам об&#39;єкт Map.',
            why: 'Ітератор повертає записи, а не сам Map.',
          },
        ],
      },
      {
        q: 'Що повертає <code>for...of</code> під час перебору Set?',
        answer: 3,
        options: [
          {
            text: 'Числові індекси.',
            why: 'У Set немає числових індексів як у Array.',
          },
          {
            text: '[key, value] пари.',
            why: 'Це форма запису Map.',
          },
          {
            text: 'Імена властивостей Object.',
            why: 'Set не є звичайним Object.',
          },
          {
            text: 'Значення, що зберігаються в Set.',
            why: 'Правильно. Set повертає збережені в ньому значення.',
          },
        ],
      },
      {
        q: 'Яка структура зазвичай найкраще підходить для простого запису на кшталт <code>{ name: &#39;Åse&#39;, age: 42 }</code>?',
        answer: 1,
        options: [
          {
            text: 'Set',
            why: 'Set призначений для унікальних значень, а не іменованих полів.',
          },
          {
            text: 'Object',
            why: 'Правильно. Object природно представляє запис з іменованими полями.',
          },
          {
            text: 'Map',
            why: 'Map може це представити, але простий запис зазвичай ясніше виразити Object.',
          },
          {
            text: 'Array',
            why: 'Array зробить назви полів неявними або потребуватиме додаткової структури.',
          },
        ],
      },
      {
        q: 'Що дасть <code>[...new Set([1, 2, 2, 3, 3])]</code>?',
        answer: 0,
        options: [
          {
            text: '<code>[1, 2, 3]</code>',
            why: 'Правильно. Set прибирає дублікати, а spread створює Array знову.',
          },
          {
            text: '<code>[1, 2, 2, 3, 3]</code>',
            why: 'Set уже прибрав дублікати до виконання spread.',
          },
          {
            text: '<code>{1, 2, 3}</code>',
            why: 'Цей spread-вираз створює Array.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Це коректний вираз, який створює Array.',
          },
        ],
      },
      {
        q: 'Чи можна використовувати Map і Set при формуванні JSON?',
        answer: 0,
        options: [
          {
            text: 'Ні, вони самі не серіалізуються правильно в JSON, як це діє в Java. ',
            why: 'Правильно. Map і Set потрібно вручну перетворити в Object та Array. Якщо цього не зробити, то на їх місцях будуть пусті об´єкти',
          },
          {
            text: 'Map можна, а Set не можна',
            why: 'Ні. В містах використання Map i Set будуть просто пусті об´єкти.',
          },
          {
            text: 'Set можна, а Map не можна',
            why: 'Ні. В містах використання Map i Set будуть просто пусті об´єкти.',
          },
          {
            text: 'Так, вони автоматично серіалізуються в Array та Object',
            why: 'Ні. В містах використання Map i Set будуть просто пусті об´єкти.',
          },
        ],
      },
    ],
  },
});