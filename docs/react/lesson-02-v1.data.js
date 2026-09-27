/*
 * Content of JS lesson 2 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Topic: className, onClick, style on div and span elements in React.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'React: className, onClick, style',
      kicker: 'Leksjon 2 &middot; React',
      title: 'className, onClick, style',
      lead: 'Tre grunnleggende verktøy for React-elementer: gi dem CSS-klasser, reager på klikk og legg til stil direkte på elementet.',

      's.class.t': 'className gir elementet en CSS-klasse',
      's.class.d':
        '<p>I React bruker du <code>className</code> for å angi HTML-elementets <code>class</code>-attributt. Dette gjelder både <code>div</code> og <code>span</code>.</p>' +
        '<p>Verdien kan være en vanlig streng, for eksempel <code>className="card"</code>. Klassen bestemmer ikke selv hvordan elementet ser ut; CSS-regelen for klassen gjør det.</p>' +
        '<p>Navnet er <code>className</code>, ikke <code>class</code>, fordi <code>class</code> har en annen betydning i JavaScript-syntaks.</p>',

      's.click.t': 'onClick reagerer på klikk',
      's.click.d':
        '<p><code>onClick</code> brukes når et React-element skal reagere på et klikk. Verdien skal være en funksjon som React kan kjøre når brukeren klikker.</p>' +
        '<p>Du kan sende inn en navngitt funksjon, som <code>onClick={handleClick}</code>, eller en funksjon direkte, som <code>onClick={() =&gt; console.log(&#39;clicked&#39;)}</code>.</p>' +
        '<p>Ikke kall funksjonen under rendering: <code>onClick={handleClick()}</code> kjører funksjonen med en gang, i stedet for ved klikk.</p>',

      's.style.t': 'style er et JavaScript-objekt',
      's.style.d':
        '<p>React lar deg sette inline-stil med <code>style</code>. I motsetning til et vanlig CSS-attributt er verdien et JavaScript-objekt: <code>style={{ padding: &#39;12px&#39; }}</code>.</p>' +
        '<p>CSS-egenskaper skrives som JavaScript-egenskaper. Derfor blir <code>background-color</code> til <code>backgroundColor</code>, og <code>font-size</code> til <code>fontSize</code>.</p>' +
        '<p>Du kan bruke <code>style</code> på både <code>div</code> og <code>span</code>. Det er nyttig når en stil skal være direkte knyttet til elementet.</p>',

      's.div.t': 'div kan bruke alle tre',
      's.div.d':
        '<p>En <code>div</code> kan ha <code>className</code>, <code>onClick</code> og <code>style</code> samtidig. Det er vanlig for kort, paneler, beholdere og andre større deler av brukergrensesnittet.</p>' +
        '<p>Eksempelet viser tre uavhengige ting: klassen velger CSS-regler, klikkfunksjonen håndterer handlingen, og <code>style</code>-objektet gir inline-stiler.</p>',

      's.span.t': 'span kan bruke de samme egenskapene',
      's.span.d':
        '<p>En <code>span</code> kan også bruke <code>className</code>, <code>onClick</code> og <code>style</code>. Det er praktisk når du vil style eller gjøre en mindre del av teksten klikkbar.</p>' +
        '<p>Husk at <code>span</code> normalt er et inline-element. Du trenger ikke bytte til <code>div</code> bare fordi du vil bruke disse React-egenskapene.</p>',

      's.together.t': 'Kombiner dem når det gir mening',
      's.together.d':
        '<p>I et ekte komponenttre kan egenskapene brukes sammen. <code>className</code> kan stå for den generelle CSS-stilen, <code>style</code> kan gi en konkret verdi, og <code>onClick</code> kan gjøre elementet interaktivt.</p>' +
        '<p>Det viktigste er å vite hva hver egenskap gjør: <code>className</code> kobler elementet til CSS, <code>onClick</code> kobler et klikk til en funksjon, og <code>style</code> sender et stilobjekt til elementet.</p>',

      's.note':
        'Én linje å ta med: <code>className</code> kobler et React-element til CSS, <code>onClick</code> tar imot en funksjon som skal kjøres ved klikk, og <code>style</code> tar imot et JavaScript-objekt med stilverdier. Alle tre kan brukes på både <code>div</code> og <code>span</code>.',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'React: className, onClick, style',
      kicker: 'Lesson 2 &middot; React',
      title: 'className, onClick, style',
      lead: 'Three basic tools for React elements: give them CSS classes, respond to clicks, and apply styles directly to the element.',

      's.class.t': 'className gives the element a CSS class',
      's.class.d':
        '<p>In React, use <code>className</code> to set the HTML element&#39;s <code>class</code> attribute. This works for both <code>div</code> and <code>span</code>.</p>' +
        '<p>The value can be an ordinary string, for example <code>className="card"</code>. The class does not decide how the element looks by itself; the CSS rule for the class does that.</p>' +
        '<p>The name is <code>className</code>, not <code>class</code>, because <code>class</code> has another meaning in JavaScript syntax.</p>',

      's.click.t': 'onClick responds to clicks',
      's.click.d':
        '<p>Use <code>onClick</code> when a React element should react to a click. Its value should be a function that React can run when the user clicks.</p>' +
        '<p>You can pass a named function, such as <code>onClick={handleClick}</code>, or a function directly, such as <code>onClick={() =&gt; console.log(&#39;clicked&#39;)}</code>.</p>' +
        '<p>Do not call the function while rendering: <code>onClick={handleClick()}</code> runs the function immediately instead of on the click.</p>',

      's.style.t': 'style is a JavaScript object',
      's.style.d':
        '<p>React lets you set inline styles with <code>style</code>. Unlike an ordinary CSS attribute, the value is a JavaScript object: <code>style={{ padding: &#39;12px&#39; }}</code>.</p>' +
        '<p>CSS properties are written as JavaScript properties. So <code>background-color</code> becomes <code>backgroundColor</code>, and <code>font-size</code> becomes <code>fontSize</code>.</p>' +
        '<p>You can use <code>style</code> on both <code>div</code> and <code>span</code>. It is useful when a style should be directly tied to the element.</p>',

      's.div.t': 'div can use all three',
      's.div.d':
        '<p>A <code>div</code> can have <code>className</code>, <code>onClick</code>, and <code>style</code> at the same time. This is common for cards, panels, containers, and other larger parts of a user interface.</p>' +
        '<p>The example shows three independent things: the class selects CSS rules, the click function handles the action, and the <code>style</code> object supplies inline styles.</p>',

      's.span.t': 'span can use the same properties',
      's.span.d':
        '<p>A <code>span</code> can also use <code>className</code>, <code>onClick</code>, and <code>style</code>. This is useful when you want to style or make a smaller part of the text clickable.</p>' +
        '<p>Remember that <code>span</code> is normally an inline element. You do not need to switch to <code>div</code> just because you want to use these React properties.</p>',

      's.together.t': 'Combine them when it makes sense',
      's.together.d':
        '<p>In a real component tree, these properties can be used together. <code>className</code> can provide the general CSS styling, <code>style</code> can provide a specific value, and <code>onClick</code> can make the element interactive.</p>' +
        '<p>The important thing is to know what each property does: <code>className</code> connects the element to CSS, <code>onClick</code> connects a click to a function, and <code>style</code> supplies a style object to the element.</p>',

      's.note':
        'One line to take away: <code>className</code> connects a React element to CSS, <code>onClick</code> receives a function to run on a click, and <code>style</code> receives a JavaScript object with style values. All three can be used on both <code>div</code> and <code>span</code>.',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'React: className, onClick, style',
      kicker: 'Урок 2 &middot; React',
      title: 'className, onClick, style',
      lead: 'Три базові інструменти для елементів React: додавати CSS-класи, реагувати на кліки та задавати стилі безпосередньо елементу.',

      's.class.t': 'className задає CSS-клас елементу',
      's.class.d':
        '<p>У React використовуйте <code>className</code>, щоб задати HTML-елементу атрибут <code>class</code>. Це працює і для <code>div</code>, і для <code>span</code>.</p>' +
        '<p>Значенням може бути звичайний рядок, наприклад <code>className="card"</code>. Сам клас не визначає вигляд елементу; це робить CSS-правило для цього класу.</p>' +
        '<p>Назва саме <code>className</code>, а не <code>class</code>, тому що <code>class</code> має інше значення в синтаксисі JavaScript.</p>',

      's.click.t': 'onClick реагує на кліки',
      's.click.d':
        '<p>Використовуйте <code>onClick</code>, коли React-елемент має реагувати на клік. Його значенням має бути функція, яку React зможе виконати, коли користувач клацне.</p>' +
        '<p>Можна передати іменовану функцію, наприклад <code>onClick={handleClick}</code>, або функцію безпосередньо: <code>onClick={() =&gt; console.log(&#39;clicked&#39;)}</code>.</p>' +
        '<p>Не викликайте функцію під час рендерингу: <code>onClick={handleClick()}</code> виконає її одразу, а не під час кліку.</p>',

      's.style.t': 'style є JavaScript-об’єктом',
      's.style.d':
        '<p>React дозволяє задавати inline-стилі через <code>style</code>. На відміну від звичайного CSS-атрибуту, значенням є JavaScript-об’єкт: <code>style={{ padding: &#39;12px&#39; }}</code>.</p>' +
        '<p>CSS-властивості записуються як властивості JavaScript. Тому <code>background-color</code> стає <code>backgroundColor</code>, а <code>font-size</code> — <code>fontSize</code>.</p>' +
        '<p><code>style</code> можна використовувати і на <code>div</code>, і на <code>span</code>. Це зручно, коли стиль має бути безпосередньо пов’язаний з елементом.</p>',

      's.div.t': 'div може використовувати всі три',
      's.div.d':
        '<p><code>div</code> може одночасно мати <code>className</code>, <code>onClick</code> та <code>style</code>. Це часто використовують для карток, панелей, контейнерів та інших великих частин інтерфейсу.</p>' +
        '<p>У прикладі показано три незалежні речі: клас вибирає CSS-правила, функція кліку обробляє дію, а об’єкт <code>style</code> задає inline-стилі.</p>',

      's.span.t': 'span може використовувати ті самі властивості',
      's.span.d':
        '<p><code>span</code> також може мати <code>className</code>, <code>onClick</code> та <code>style</code>. Це зручно, коли потрібно стилізувати або зробити клікабельною меншу частину тексту.</p>' +
        '<p>Пам’ятайте, що <code>span</code> зазвичай є inline-елементом. Не потрібно переходити на <code>div</code> лише тому, що ви хочете використати ці властивості React.</p>',

      's.together.t': 'Поєднуйте їх, коли це має сенс',
      's.together.d':
        '<p>У справжньому дереві компонентів ці властивості можна використовувати разом. <code>className</code> може задавати загальні CSS-стилі, <code>style</code> — конкретне значення, а <code>onClick</code> — зробити елемент інтерактивним.</p>' +
        '<p>Важливо розуміти призначення кожної властивості: <code>className</code> пов’язує елемент із CSS, <code>onClick</code> пов’язує клік із функцією, а <code>style</code> передає елементу об’єкт стилів.</p>',

      's.note':
        'Один рядок на згадку: <code>className</code> пов’язує React-елемент із CSS, <code>onClick</code> отримує функцію, яку треба виконати під час кліку, а <code>style</code> отримує JavaScript-об’єкт зі значеннями стилів. Усі три можна використовувати і з <code>div</code>, і зі <code>span</code>.',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      { q: 'Hva bruker du i React for å sette HTML-elementets <code>class</code>-attributt?', answer: 1, options: [
        { text: '<code>class</code>', why: 'I JSX bruker du <code>className</code> for HTML-attributtet <code>class</code>.' },
        { text: '<code>className</code>', why: 'Riktig. React bruker <code>className</code> i JSX, og det tilsvarer <code>class</code> i HTML.' },
        { text: '<code>cssClass</code>', why: 'Dette er ikke standardegenskapen i React JSX.' },
        { text: '<code>styleClass</code>', why: 'Dette er ikke standardegenskapen i React JSX.' },
      ] },
      { q: 'Hva skal normalt være verdien til <code>onClick</code>?', answer: 2, options: [
        { text: 'En CSS-klasse', why: '<code>className</code> brukes for CSS-klasser.' },
        { text: 'Resultatet av å kjøre funksjonen', why: 'Du vil gi React en funksjon som kan kjøres senere, ikke resultatet av et kall under rendering.' },
        { text: 'En funksjon som React kan kjøre ved klikk', why: 'Riktig. <code>onClick</code> skal få en funksjon.' },
        { text: 'Et style-objekt', why: '<code>style</code> bruker et objekt; <code>onClick</code> bruker en funksjon.' },
      ] },
      { q: 'Hva er problemet med <code>onClick={handleClick()}</code>?', answer: 0, options: [
        { text: 'Funksjonen kjøres under rendering i stedet for ved klikk.', why: 'Riktig. Parentesene kaller funksjonen med en gang.' },
        { text: 'React kan ikke bruke funksjoner i <code>onClick</code>.', why: 'React forventer nettopp en funksjon i <code>onClick</code>.' },
        { text: 'Det gjør elementet usynlig.', why: 'Dette har ikke med synlighet å gjøre.' },
        { text: 'Det gjør CSS-klassen ugyldig.', why: '<code>onClick</code> og <code>className</code> er separate egenskaper.' },
      ] },
      { q: 'Hvordan skrives <code>background-color</code> i et React <code>style</code>-objekt?', answer: 3, options: [
        { text: '<code>background-color</code>', why: 'Det er CSS-syntaks, ikke JavaScript-egenskapssyntaks.' },
        { text: '<code>background_color</code>', why: 'Underscore brukes ikke her.' },
        { text: '<code>BackgroundColor</code>', why: 'Første bokstav skal ikke gjøres stor.' },
        { text: '<code>backgroundColor</code>', why: 'Riktig. CSS-navn med bindestrek blir camelCase i style-objektet.' },
      ] },
      { q: 'Hvilket eksempel viser et korrekt inline-style i React?', answer: 1, options: [
        { text: '<code>style="padding: 12px"</code>', why: 'Det er en HTML-lignende streng, ikke formen som brukes for Reacts style-prop.' },
        { text: '<code>style={{ padding: "12px" }}</code>', why: 'Riktig. Den ytre delen er JSX-uttrykk, og den indre delen er JavaScript-objektet.' },
        { text: '<code>style={padding: "12px"}</code>', why: 'Dette er ikke et gyldig JavaScript-objektuttrykk.' },
        { text: '<code>style={[padding: "12px"]}</code>', why: 'Style-prop forventer et objekt, ikke denne array-syntaksen.' },
      ] },
      { q: 'Kan en <code>span</code> ha <code>className</code>, <code>onClick</code> og <code>style</code>?', answer: 0, options: [
        { text: 'Ja, alle tre kan brukes.', why: 'Riktig. <code>span</code> kan bruke de samme React-propsene som vises i denne leksjonen.' },
        { text: 'Bare <code>className</code>.', why: '<code>span</code> kan også ha <code>onClick</code> og <code>style</code>.' },
        { text: 'Bare <code>style</code>.', why: 'Det er ingen slik begrensning.' },
        { text: 'Nei, bare <code>div</code> støtter dem.', why: 'Både <code>div</code> og <code>span</code> kan bruke disse egenskapene.' },
      ] },
      { q: 'Hva gjør <code>className="card"</code>?', answer: 2, options: [
        { text: 'Det kjører funksjonen <code>card</code>.', why: '<code>className</code> handler om CSS-klassen, ikke om funksjonskall.' },
        { text: 'Det setter et inline-style.', why: 'Inline-stil settes med <code>style</code>.' },
        { text: 'Det kobler elementet til CSS-klassen <code>card</code>.', why: 'Riktig. CSS-regler for <code>.card</code> kan deretter style elementet.' },
        { text: 'Det legger til en klikkhendelse.', why: 'Klikk håndteres med <code>onClick</code>.' },
      ] },
      { q: 'Hva er hovedforskjellen mellom <code>className</code> og <code>style</code>?', answer: 3, options: [
        { text: 'De gjør nøyaktig det samme.', why: 'De kan begge påvirke utseendet, men på ulike måter.' },
        { text: '<code>style</code> brukes bare på <code>span</code>.', why: 'Begge kan brukes på både <code>div</code> og <code>span</code>.' },
        { text: '<code>className</code> håndterer klikk.', why: 'Klikk håndteres av <code>onClick</code>.' },
        { text: '<code>className</code> kobler til CSS, mens <code>style</code> gir et style-objekt direkte.', why: 'Riktig. Dette er hovedforskjellen i denne leksjonen.' },
      ] },
      { q: 'Hvilket eksempel bruker en navngitt funksjon riktig med <code>onClick</code>?', answer: 1, options: [
        { text: '<code>onClick={handleClick()}</code>', why: 'Dette kaller funksjonen med en gang.' },
        { text: '<code>onClick={handleClick}</code>', why: 'Riktig. Funksjonen sendes inn uten å kalles.' },
        { text: '<code>onClick="handleClick"</code>', why: 'Her sendes en streng, ikke en funksjon.' },
        { text: '<code>onClick={{ handleClick }}</code>', why: 'Dette er ikke riktig form for en event handler.' },
      ] },
      { q: 'Hvilket utsagn oppsummerer leksjonen best?', answer: 0, options: [
        { text: '<code>className</code> gir CSS-kobling, <code>onClick</code> tar en funksjon, og <code>style</code> tar et JavaScript-objekt.', why: 'Riktig. Dette er de tre sentrale punktene i leksjonen.' },
        { text: 'Alle tre egenskapene må være CSS-strenger.', why: '<code>onClick</code> tar en funksjon, og <code>style</code> tar et objekt.' },
        { text: 'Bare <code>div</code> kan bruke disse egenskapene.', why: '<code>span</code> kan også bruke dem.' },
        { text: '<code>style</code> skal alltid bruke CSS-navn med bindestrek.', why: 'I et style-objekt bruker du JavaScript-egenskapsnavn, som <code>backgroundColor</code>.' },
      ] },
    ],

    en: [
      { q: 'What do you use in React to set the HTML element&#39;s <code>class</code> attribute?', answer: 1, options: [
        { text: '<code>class</code>', why: 'In JSX, use <code>className</code> for the HTML <code>class</code> attribute.' },
        { text: '<code>className</code>', why: 'Correct. React uses <code>className</code> in JSX, corresponding to HTML <code>class</code>.' },
        { text: '<code>cssClass</code>', why: 'This is not the standard React JSX property.' },
        { text: '<code>styleClass</code>', why: 'This is not the standard React JSX property.' },
      ] },
      { q: 'What should normally be the value of <code>onClick</code>?', answer: 2, options: [
        { text: 'A CSS class', why: '<code>className</code> is used for CSS classes.' },
        { text: 'The result of calling the function', why: 'You want to give React a function to run later, not the result of calling it during rendering.' },
        { text: 'A function React can run on a click', why: 'Correct. <code>onClick</code> should receive a function.' },
        { text: 'A style object', why: '<code>style</code> uses an object; <code>onClick</code> uses a function.' },
      ] },
      { q: 'What is the problem with <code>onClick={handleClick()}</code>?', answer: 0, options: [
        { text: 'The function runs during rendering instead of on the click.', why: 'Correct. The parentheses call the function immediately.' },
        { text: 'React cannot use functions in <code>onClick</code>.', why: 'React expects a function in <code>onClick</code>.' },
        { text: 'It makes the element invisible.', why: 'This has nothing to do with visibility.' },
        { text: 'It makes the CSS class invalid.', why: '<code>onClick</code> and <code>className</code> are separate properties.' },
      ] },
      { q: 'How is <code>background-color</code> written in a React <code>style</code> object?', answer: 3, options: [
        { text: '<code>background-color</code>', why: 'That is CSS syntax, not JavaScript property syntax.' },
        { text: '<code>background_color</code>', why: 'Underscore is not used here.' },
        { text: '<code>BackgroundColor</code>', why: 'The first letter should not be uppercase.' },
        { text: '<code>backgroundColor</code>', why: 'Correct. Hyphenated CSS names become camelCase in a style object.' },
      ] },
      { q: 'Which example shows a correct inline style in React?', answer: 1, options: [
        { text: '<code>style="padding: 12px"</code>', why: 'That is an HTML-like string, not the React style prop form.' },
        { text: '<code>style={{ padding: "12px" }}</code>', why: 'Correct. The outer braces make a JSX expression and the inner braces make the JavaScript object.' },
        { text: '<code>style={padding: "12px"}</code>', why: 'This is not a valid JavaScript object expression.' },
        { text: '<code>style={[padding: "12px"]}</code>', why: 'The style prop expects an object, not this array syntax.' },
      ] },
      { q: 'Can a <code>span</code> have <code>className</code>, <code>onClick</code>, and <code>style</code>?', answer: 0, options: [
        { text: 'Yes, all three can be used.', why: 'Correct. A <code>span</code> can use the same React props shown in this lesson.' },
        { text: 'Only <code>className</code>.', why: 'A <code>span</code> can also have <code>onClick</code> and <code>style</code>.' },
        { text: 'Only <code>style</code>.', why: 'There is no such restriction.' },
        { text: 'No, only <code>div</code> supports them.', why: 'Both <code>div</code> and <code>span</code> can use these properties.' },
      ] },
      { q: 'What does <code>className="card"</code> do?', answer: 2, options: [
        { text: 'It runs the <code>card</code> function.', why: '<code>className</code> is about the CSS class, not a function call.' },
        { text: 'It sets an inline style.', why: 'Inline styles are set with <code>style</code>.' },
        { text: 'It connects the element to the CSS class <code>card</code>.', why: 'Correct. CSS rules for <code>.card</code> can then style the element.' },
        { text: 'It adds a click handler.', why: 'Clicks are handled with <code>onClick</code>.' },
      ] },
      { q: 'What is the main difference between <code>className</code> and <code>style</code>?', answer: 3, options: [
        { text: 'They do exactly the same thing.', why: 'Both can affect appearance, but in different ways.' },
        { text: '<code>style</code> is only used on <code>span</code>.', why: 'Both can be used on <code>div</code> and <code>span</code>.' },
        { text: '<code>className</code> handles clicks.', why: 'Clicks are handled by <code>onClick</code>.' },
        { text: '<code>className</code> connects to CSS, while <code>style</code> supplies a style object directly.', why: 'Correct. This is the main distinction in the lesson.' },
      ] },
      { q: 'Which example correctly uses a named function with <code>onClick</code>?', answer: 1, options: [
        { text: '<code>onClick={handleClick()}</code>', why: 'This calls the function immediately.' },
        { text: '<code>onClick={handleClick}</code>', why: 'Correct. The function is passed without being called.' },
        { text: '<code>onClick="handleClick"</code>', why: 'This passes a string, not a function.' },
        { text: '<code>onClick={{ handleClick }}</code>', why: 'This is not the correct form for an event handler.' },
      ] },
      { q: 'Which statement best summarizes the lesson?', answer: 0, options: [
        { text: '<code>className</code> connects to CSS, <code>onClick</code> receives a function, and <code>style</code> receives a JavaScript object.', why: 'Correct. These are the three central points of the lesson.' },
        { text: 'All three properties must be CSS strings.', why: '<code>onClick</code> receives a function and <code>style</code> receives an object.' },
        { text: 'Only <code>div</code> can use these properties.', why: '<code>span</code> can use them too.' },
        { text: '<code>style</code> must always use hyphenated CSS names.', why: 'A style object uses JavaScript property names such as <code>backgroundColor</code>.' },
      ] },
    ],

    uk: [
      { q: 'Що використовують у React, щоб задати HTML-елементу атрибут <code>class</code>?', answer: 1, options: [
        { text: '<code>class</code>', why: 'У JSX для HTML-атрибуту <code>class</code> використовуйте <code>className</code>.' },
        { text: '<code>className</code>', why: 'Правильно. У JSX React використовує <code>className</code>, що відповідає HTML-атрибуту <code>class</code>.' },
        { text: '<code>cssClass</code>', why: 'Це не стандартна властивість React JSX.' },
        { text: '<code>styleClass</code>', why: 'Це не стандартна властивість React JSX.' },
      ] },
      { q: 'Що зазвичай має бути значенням <code>onClick</code>?', answer: 2, options: [
        { text: 'CSS-клас', why: 'Для CSS-класів використовується <code>className</code>.' },
        { text: 'Результат виконання функції', why: 'React потрібно передати функцію для подальшого виконання, а не результат її виклику під час рендерингу.' },
        { text: 'Функція, яку React може виконати під час кліку', why: 'Правильно. <code>onClick</code> має отримати функцію.' },
        { text: 'Об’єкт стилів', why: '<code>style</code> використовує об’єкт, а <code>onClick</code> — функцію.' },
      ] },
      { q: 'У чому проблема з <code>onClick={handleClick()}</code>?', answer: 0, options: [
        { text: 'Функція виконується під час рендерингу, а не під час кліку.', why: 'Правильно. Дужки одразу викликають функцію.' },
        { text: 'React не може використовувати функції в <code>onClick</code>.', why: 'React саме й очікує функцію в <code>onClick</code>.' },
        { text: 'Елемент стає невидимим.', why: 'Це не пов’язано з видимістю.' },
        { text: 'CSS-клас стає недійсним.', why: '<code>onClick</code> і <code>className</code> — окремі властивості.' },
      ] },
      { q: 'Як записується <code>background-color</code> в React-об’єкті <code>style</code>?', answer: 3, options: [
        { text: '<code>background-color</code>', why: 'Це синтаксис CSS, а не синтаксис властивості JavaScript.' },
        { text: '<code>background_color</code>', why: 'Підкреслення тут не використовується.' },
        { text: '<code>BackgroundColor</code>', why: 'Перша літера не має бути великою.' },
        { text: '<code>backgroundColor</code>', why: 'Правильно. CSS-назви з дефісами перетворюються на camelCase в об’єкті стилів.' },
      ] },
      { q: 'Який приклад правильно показує inline-стиль у React?', answer: 1, options: [
        { text: '<code>style="padding: 12px"</code>', why: 'Це рядок у стилі HTML, а не форма prop <code>style</code> у React.' },
        { text: '<code>style={{ padding: "12px" }}</code>', why: 'Правильно. Зовнішні фігурні дужки створюють JSX-вираз, а внутрішні — JavaScript-об’єкт.' },
        { text: '<code>style={padding: "12px"}</code>', why: 'Це не коректний JavaScript-вираз об’єкта.' },
        { text: '<code>style={[padding: "12px"]}</code>', why: 'Prop <code>style</code> очікує об’єкт, а не такий масив.' },
      ] },
      { q: 'Чи може <code>span</code> мати <code>className</code>, <code>onClick</code> і <code>style</code>?', answer: 0, options: [
        { text: 'Так, усі три можна використовувати.', why: 'Правильно. <code>span</code> може використовувати ті самі React-властивості, що показані в цьому уроці.' },
        { text: 'Лише <code>className</code>.', why: '<code>span</code> також може мати <code>onClick</code> і <code>style</code>.' },
        { text: 'Лише <code>style</code>.', why: 'Такого обмеження немає.' },
        { text: 'Ні, їх підтримує лише <code>div</code>.', why: 'І <code>div</code>, і <code>span</code> можуть використовувати ці властивості.' },
      ] },
      { q: 'Що робить <code>className="card"</code>?', answer: 2, options: [
        { text: 'Запускає функцію <code>card</code>.', why: '<code>className</code> стосується CSS-класу, а не виклику функції.' },
        { text: 'Задає inline-стиль.', why: 'Inline-стиль задається через <code>style</code>.' },
        { text: 'Пов’язує елемент із CSS-класом <code>card</code>.', why: 'Правильно. CSS-правила для <code>.card</code> можуть після цього стилізувати елемент.' },
        { text: 'Додає обробник кліку.', why: 'Клік обробляється через <code>onClick</code>.' },
      ] },
      { q: 'Яка головна різниця між <code>className</code> і <code>style</code>?', answer: 3, options: [
        { text: 'Вони роблять абсолютно те саме.', why: 'Обидва можуть впливати на вигляд, але різними способами.' },
        { text: '<code>style</code> використовується лише для <code>span</code>.', why: 'Обидва можна використовувати для <code>div</code> і <code>span</code>.' },
        { text: '<code>className</code> обробляє кліки.', why: 'Кліки обробляє <code>onClick</code>.' },
        { text: '<code>className</code> пов’язує з CSS, а <code>style</code> безпосередньо передає об’єкт стилів.', why: 'Правильно. Це головна відмінність у цьому уроці.' },
      ] },
      { q: 'Який приклад правильно використовує іменовану функцію з <code>onClick</code>?', answer: 1, options: [
        { text: '<code>onClick={handleClick()}</code>', why: 'Це одразу викликає функцію.' },
        { text: '<code>onClick={handleClick}</code>', why: 'Правильно. Функція передається без виклику.' },
        { text: '<code>onClick="handleClick"</code>', why: 'Тут передається рядок, а не функція.' },
        { text: '<code>onClick={{ handleClick }}</code>', why: 'Це неправильна форма для обробника події.' },
      ] },
      { q: 'Яке твердження найкраще підсумовує урок?', answer: 0, options: [
        { text: '<code>className</code> пов’язує з CSS, <code>onClick</code> отримує функцію, а <code>style</code> отримує JavaScript-об’єкт.', why: 'Правильно. Це три центральні ідеї уроку.' },
        { text: 'Усі три властивості мають бути CSS-рядками.', why: '<code>onClick</code> отримує функцію, а <code>style</code> — об’єкт.' },
        { text: 'Лише <code>div</code> може використовувати ці властивості.', why: '<code>span</code> також може їх використовувати.' },
        { text: '<code>style</code> завжди має використовувати CSS-назви з дефісами.', why: 'В об’єкті стилів використовуються назви властивостей JavaScript, наприклад <code>backgroundColor</code>.' },
      ] },
    ],
  },
});
