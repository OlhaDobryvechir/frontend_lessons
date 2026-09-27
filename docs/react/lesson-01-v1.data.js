/*
 * Content of React lesson 1 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Topic: Components in React. Export function. Properties of components.
 * Quiz answers use zero-based indexes.
 */

Lessons.init({
  translations: {
    no: {
      'doc.title': 'React: komponenter',
      'kicker': 'Leksjon 1 · React',
      'title': 'Komponenter i React',
      'lead': 'Bygg brukergrensesnitt av små funksjoner. Eksporter komponenten, bruk den som et element, og send data inn med properties (props).',
      'component.t': 'En komponent er en funksjon som returnerer UI',
      'component.d': '<p>En React-komponent er vanligvis en JavaScript-funksjon med et navn som starter med stor bokstav. Funksjonen returnerer JSX som beskriver det UI-et komponenten skal vise. <code>&lt;Welcome /&gt;</code> betyr at React bruker komponenten <code>Welcome</code>.</p><p>En komponent trenger ikke være stor. En liten komponent kan brukes flere steder, og hver bruk kan få sine egne props.</p>',
      'export.t': '<code>export function</code> gjør komponenten tilgjengelig',
      'export.d': '<p>Hvis en komponent skal importeres fra en annen modul, må den eksporteres. Med <code>export function Button() { ... }</code> får du en <em>named export</em>. Den importeres med samme navn: <code>import { Button } from &#39;./Button.js&#39;</code>.</p><p><code>export default App</code> er en annen form: modulen har én standardeksport, og importen bruker ikke krøllparenteser. I denne leksjonen er poenget å kjenne forskjellen.</p>',
      'props.t': 'Properties, eller props, sender data inn',
      'props.d': '<p>Props er data som sendes fra forelderen til komponenten. Når du skriver <code>&lt;Greeting name="Ada" /&gt;</code>, mottar funksjonen et objekt der <code>props.name</code> er <code>"Ada"</code>.</p><p>Props kan inneholde strenger, tall, boolske verdier, objekter, arrays, funksjoner og JSX. En prop med krøllparenteser evalueres som JavaScript; en prop uten krøllparenteser er tekst.</p>',
      'destructure.t': 'Du kan pakke ut props direkte',
      'destructure.d': '<p>I stedet for å skrive <code>props.name</code> og <code>props.city</code> kan parameteren destruktureres: <code>function Greeting({ name, city })</code>. Det er samme props-objekt, bare med egenskapene hentet ut direkte.</p><p>Navnene må passe med prop-navnene som sendes inn. <code>&lt;Greeting name="Ada" city="Bergen" /&gt;</code> gir <code>name</code> og <code>city</code> inne i funksjonen.</p>',
      'rules.t': 'Props er input, ikke lokale variabler',
      'rules.d': '<p>En komponent kan brukes flere ganger med forskjellige props. <code>&lt;Card title="React" /&gt;</code> gir teksten <code>React</code>, mens <code>&lt;Card title={2 + 3} /&gt;</code> gir tallet 5.</p><p>Props kommer fra komponenten som bruker komponenten. Ikke endre <code>props</code> inne i barnet for å «sende data tilbake». Når en verdi skal endres over tid, kommer state senere i React-kurset.</p>',
      'note': 'Én linje å ta med: en komponent er en funksjon som returnerer UI; <code>export function</code> gjør en named komponent tilgjengelig fra modulen, og props er input-data som sendes inn når komponenten brukes.',
      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },
    en: {
      'doc.title': 'React: components',
      'kicker': 'Lesson 1 · React',
      'title': 'Components in React',
      'lead': 'Build user interfaces from small functions. Export a component, use it as an element, and pass data in with properties (props).',
      'component.t': 'A component is a function that returns UI',
      'component.d': '<p>A React component is usually a JavaScript function whose name starts with a capital letter. The function returns JSX describing the UI the component should show. <code>&lt;Welcome /&gt;</code> means React uses the <code>Welcome</code> component.</p><p>A component does not need to be large. A small component can be used in several places, and each use can receive its own props.</p>',
      'export.t': '<code>export function</code> makes a component available',
      'export.d': '<p>If a component should be imported from another module, export it. With <code>export function Button() { ... }</code> you create a <em>named export</em>. Import it with the same name: <code>import { Button } from &#39;./Button.js&#39;</code>.</p><p><code>export default App</code> is a different form: the module has one default export, and the import does not use curly braces. In this lesson, the important point is knowing the difference.</p>',
      'props.t': 'Properties, or props, pass data in',
      'props.d': '<p>Props are data passed from the parent to the component. When you write <code>&lt;Greeting name="Ada" /&gt;</code>, the function receives an object whose <code>props.name</code> is <code>"Ada"</code>.</p><p>Props can contain strings, numbers, booleans, objects, arrays, functions, and JSX. A prop in curly braces is evaluated as JavaScript; a prop without curly braces is text.</p>',
      'destructure.t': 'You can destructure props directly',
      'destructure.d': '<p>Instead of writing <code>props.name</code> and <code>props.city</code>, destructure the parameter: <code>function Greeting({ name, city })</code>. It is the same props object, with its properties unpacked directly.</p><p>The names must match the prop names being passed. <code>&lt;Greeting name="Ada" city="Bergen" /&gt;</code> gives the function <code>name</code> and <code>city</code>.</p>',
      'rules.t': 'Props are input, not local variables',
      'rules.d': '<p>A component can be used multiple times with different props. <code>&lt;Card title="React" /&gt;</code> gives the text <code>React</code>, while <code>&lt;Card title={2 + 3} /&gt;</code> gives the number 5.</p><p>Props come from the component using the component. Do not change <code>props</code> inside the child to «send data back». When a value needs to change over time, state comes later in the React course.</p>',
      'note': 'One line to remember: a component is a function that returns UI; <code>export function</code> makes a named component available from the module, and props are input data passed when the component is used.',
      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },
    uk: {
      'doc.title': 'React: компоненти',
      'kicker': 'Урок 1 · React',
      'title': 'Компоненти в React',
      'lead': 'Будуйте інтерфейс із невеликих функцій. Експортуйте компонент, використовуйте його як елемент і передавайте дані через properties (props).',
      'component.t': 'Компонент — це функція, що повертає UI',
      'component.d': '<p>Компонент React зазвичай є JavaScript-функцією, назва якої починається з великої літери. Функція повертає JSX, що описує UI, який має показати компонент. <code>&lt;Welcome /&gt;</code> означає, що React використовує компонент <code>Welcome</code>.</p><p>Компонент не мусить бути великим. Маленький компонент можна використати в кількох місцях, і кожне використання може отримати власні props.</p>',
      'export.t': '<code>export function</code> робить компонент доступним',
      'export.d': '<p>Якщо компонент потрібно імпортувати з іншого модуля, його треба експортувати. Запис <code>export function Button() { ... }</code> створює <em>іменований експорт</em>. Імпортуйте його з тією самою назвою: <code>import { Button } from &#39;./Button.js&#39;</code>.</p><p><code>export default App</code> — інша форма: модуль має один експорт за замовчуванням, а під час імпорту фігурні дужки не використовуються. У цьому уроці важливо розрізняти ці два варіанти.</p>',
      'props.t': 'Properties, або props, передають дані всередину',
      'props.d': '<p>Props — це дані, які батьківський компонент передає дочірньому. Коли ви пишете <code>&lt;Greeting name="Ada" /&gt;</code>, функція отримує об’єкт, у якому <code>props.name</code> дорівнює <code>"Ada"</code>.</p><p>Props можуть містити рядки, числа, булеві значення, об’єкти, масиви, функції та JSX. Prop у фігурних дужках обчислюється як JavaScript; prop без фігурних дужок є текстом.</p>',
      'destructure.t': 'Props можна деструктурувати прямо в параметрі',
      'destructure.d': '<p>Замість <code>props.name</code> і <code>props.city</code> можна деструктурувати параметр: <code>function Greeting({ name, city })</code>. Це той самий об’єкт props, лише його властивості одразу дістаються окремо.</p><p>Назви мають збігатися з назвами props, які передаються. <code>&lt;Greeting name="Ada" city="Bergen" /&gt;</code> дає функції <code>name</code> і <code>city</code>.</p>',
      'rules.t': 'Props — це вхідні дані, а не локальні змінні',
      'rules.d': '<p>Компонент можна використовувати багато разів із різними props. <code>&lt;Card title="React" /&gt;</code> дає текст <code>React</code>, а <code>&lt;Card title={2 + 3} /&gt;</code> дає число 5.</p><p>Props надходять від компонента, який використовує дочірній компонент. Не змінюйте <code>props</code> усередині дочірнього компонента, щоб «передати дані назад». Коли значення має змінюватися з часом, стан (state) з’явиться далі в курсі React.</p>',
      'note': 'Один рядок на згадку: компонент — це функція, що повертає UI; <code>export function</code> робить іменований компонент доступним із модуля, а props — це вхідні дані, які передаються під час використання компонента.',
      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
        {
          q: 'Hva er en React-komponent i dette kurset?',
          answer: 0,
          options: [
            {
              text: 'En JavaScript-funksjon som returnerer UI.',
              why: 'En komponent er en funksjon som returnerer JSX/UI.',
            },
            {
              text: 'En CSS-klasse.',
              why: 'CSS-klasser beskriver stil, ikke en React-komponent.',
            },
            {
              text: 'En JSON-fil.',
              why: 'En JSON-fil er data, ikke selve komponentfunksjonen.',
            },
            {
              text: 'En nettleserhendelse.',
              why: 'Hendelser kan brukes av komponenter, men er ikke komponenten.',
            },
          ],
        },
        {
          q: 'Hvorfor starter komponentnavn vanligvis med stor bokstav?',
          answer: 1,
          options: [
            {
              text: 'Fordi alle JavaScript-funksjoner må starte med stor bokstav.',
              why: 'Vanlige JavaScript-funksjoner kan starte med liten bokstav.',
            },
            {
              text: 'For at JSX skal kunne skille en komponent fra et vanlig HTML-element.',
              why: 'Stor forbokstav signaliserer en komponent i JSX.',
            },
            {
              text: 'Fordi React ellers ikke kan bruke props.',
              why: 'Props kan brukes uavhengig av navnets første bokstav.',
            },
            {
              text: 'Fordi CSS krever det.',
              why: 'CSS har ingen slik regel.',
            },
          ],
        },
        {
          q: 'Hva gjør <code>&lt;Welcome /&gt;</code> i JSX?',
          answer: 2,
          options: [
            {
              text: 'Oppretter et HTML-element som heter Welcome.',
              why: 'Dette er ikke et vanlig HTML-element.',
            },
            {
              text: 'Kaller <code>Welcome</code> som en vanlig funksjon med parenteser.',
              why: 'JSX bruker komponent-syntaks her.',
            },
            {
              text: 'Bruker React-komponenten <code>Welcome</code>.',
              why: 'Dette er komponenten som JSX ber React om å bruke.',
            },
            {
              text: 'Eksporterer komponenten Welcome.',
              why: 'Eksport gjøres med <code>export</code>.',
            },
          ],
        },
        {
          q: 'Hva er en named export?',
          answer: 0,
          options: [
            {
              text: '<code>export function Button() { ... }</code>',
              why: 'Dette eksporterer funksjonen med navnet Button.',
            },
            {
              text: '<code>function Button() { ... }</code> uten export',
              why: 'Da er funksjonen ikke eksportert fra modulen.',
            },
            {
              text: '<code>export default Button</code>',
              why: 'Dette er en default export.',
            },
            {
              text: '<code>import { Button }</code>',
              why: 'Dette er import, ikke export.',
            },
          ],
        },
        {
          q: 'Hvordan importerer du en named export som heter <code>Button</code>?',
          answer: 3,
          options: [
            {
              text: '<code>import Button from &#39;./Button.js&#39;</code>',
              why: 'Dette er formen for default import.',
            },
            {
              text: '<code>import default Button from &#39;./Button.js&#39;</code>',
              why: 'Det er ikke gyldig import-syntaks.',
            },
            {
              text: '<code>include Button from &#39;./Button.js&#39;</code>',
              why: 'include er ikke JavaScript-import.',
            },
            {
              text: '<code>import { Button } from &#39;./Button.js&#39;</code>',
              why: 'Named exports importeres med krøllparenteser.',
            },
          ],
        },
        {
          q: 'Hva er <code>props</code>?',
          answer: 2,
          options: [
            {
              text: 'En kopi av CSS-reglene.',
              why: 'Props handler om data til komponenten.',
            },
            {
              text: 'En spesiell type state.',
              why: 'Props og state er forskjellige konsepter.',
            },
            {
              text: 'Data som sendes fra en komponent til komponenten den bruker.',
              why: 'Props er input-data til komponenten.',
            },
            {
              text: 'En måte å eksportere funksjoner på.',
              why: 'Eksport bruker <code>export</code>.',
            },
          ],
        },
        {
          q: 'Hva blir <code>props.name</code> i <code>&lt;Greeting name="Ada" /&gt;</code>?',
          answer: 1,
          options: [
            {
              text: '<code>name</code>',
              why: 'Det er prop-navnet, ikke verdien.',
            },
            {
              text: '<code>"Ada"</code>',
              why: 'Prop-en name får tekstverdien Ada.',
            },
            {
              text: '<code>undefined</code>',
              why: 'Prop-en er faktisk sendt inn.',
            },
            {
              text: '<code>{ name: "Ada" }</code>',
              why: 'Dette er objektformen, ikke selve name-verdien.',
            },
          ],
        },
        {
          q: 'Hva betyr <code>&lt;Card title={2 + 3} /&gt;</code>?',
          answer: 3,
          options: [
            {
              text: 'title blir teksten <code>"2 + 3"</code>.',
              why: 'Krøllparenteser betyr JavaScript-uttrykk.',
            },
            {
              text: 'title blir <code>"5"</code> som tekst.',
              why: 'Uttrykket evalueres til tallet 5.',
            },
            {
              text: 'title blir <code>null</code>.',
              why: 'Det sendes faktisk inn en verdi.',
            },
            {
              text: 'title blir tallet <code>5</code>.',
              why: 'Uttrykket <code>2 + 3</code> evalueres til 5.',
            },
          ],
        },
        {
          q: 'Hva er fordelen med <code>function Greeting({ name })</code>?',
          answer: 0,
          options: [
            {
              text: 'Du henter <code>name</code> direkte fra props-objektet.',
              why: 'Dette er destructuring av props-objektet.',
            },
            {
              text: 'Du eksporterer automatisk Greeting.',
              why: 'Destructuring eksporterer ingenting.',
            },
            {
              text: 'Du gjør name til state.',
              why: 'Det endrer ikke state.',
            },
            {
              text: 'Du gjør name til en CSS-klasse.',
              why: 'Det har ingen forbindelse til CSS.',
            },
          ],
        },
        {
          q: 'Hva bør du huske om props i denne leksjonen?',
          answer: 2,
          options: [
            {
              text: 'Props må alltid være strenger.',
              why: 'Props kan ha mange typer verdier.',
            },
            {
              text: 'Barnet skal endre props for å sende data tilbake.',
              why: 'Props er input-data og skal ikke behandles som barnets mutable state.',
            },
            {
              text: 'Props er input-data som kommer inn når komponenten brukes.',
              why: 'Det er hovedregelen for denne leksjonen.',
            },
            {
              text: 'Props erstatter alltid state.',
              why: 'State kommer senere og har en annen rolle.',
            },
          ],
        },
    ],
    en: [
        {
          q: 'What is a React component in this course?',
          answer: 0,
          options: [
            {
              text: 'A JavaScript function that returns UI.',
              why: 'A component is a function that returns JSX/UI.',
            },
            {
              text: 'A CSS class.',
              why: 'CSS classes describe styling, not a React component.',
            },
            {
              text: 'A JSON file.',
              why: 'JSON is data, not the component function itself.',
            },
            {
              text: 'A browser event.',
              why: 'Events can be used by components, but are not the component.',
            },
          ],
        },
        {
          q: 'Why do component names usually start with a capital letter?',
          answer: 1,
          options: [
            {
              text: 'Because all JavaScript functions must start with a capital letter.',
              why: 'Ordinary JavaScript functions can start with lowercase letters.',
            },
            {
              text: 'So JSX can distinguish a component from a built-in HTML element.',
              why: 'The capitalized name signals a component in JSX.',
            },
            {
              text: 'Because React otherwise cannot use props.',
              why: 'Props work independently of the first letter.',
            },
            {
              text: 'Because CSS requires it.',
              why: 'CSS has no such rule.',
            },
          ],
        },
        {
          q: 'What does <code>&lt;Welcome /&gt;</code> do in JSX?',
          answer: 2,
          options: [
            {
              text: 'Creates an HTML element named Welcome.',
              why: 'This is not a normal HTML element.',
            },
            {
              text: 'Calls <code>Welcome</code> as an ordinary function with parentheses.',
              why: 'JSX uses component syntax here.',
            },
            {
              text: 'Uses the React component <code>Welcome</code>.',
              why: 'This is the component JSX asks React to use.',
            },
            {
              text: 'Exports the Welcome component.',
              why: 'Exporting uses <code>export</code>.',
            },
          ],
        },
        {
          q: 'What is a named export?',
          answer: 0,
          options: [
            {
              text: '<code>export function Button() { ... }</code>',
              why: 'This exports the function under the name Button.',
            },
            {
              text: '<code>function Button() { ... }</code> without export',
              why: 'Then the function is not exported from the module.',
            },
            {
              text: '<code>export default Button</code>',
              why: 'This is a default export.',
            },
            {
              text: '<code>import { Button }</code>',
              why: 'This is an import, not an export.',
            },
          ],
        },
        {
          q: 'How do you import a named export called <code>Button</code>?',
          answer: 3,
          options: [
            {
              text: '<code>import Button from &#39;./Button.js&#39;</code>',
              why: 'That is the form for a default import.',
            },
            {
              text: '<code>import default Button from &#39;./Button.js&#39;</code>',
              why: 'This is not valid import syntax.',
            },
            {
              text: '<code>include Button from &#39;./Button.js&#39;</code>',
              why: 'include is not JavaScript import syntax.',
            },
            {
              text: '<code>import { Button } from &#39;./Button.js&#39;</code>',
              why: 'Named exports are imported with curly braces.',
            },
          ],
        },
        {
          q: 'What are <code>props</code>?',
          answer: 2,
          options: [
            {
              text: 'A copy of CSS rules.',
              why: 'Props are component data.',
            },
            {
              text: 'A special type of state.',
              why: 'Props and state are different concepts.',
            },
            {
              text: 'Data passed from one component to the component it uses.',
              why: 'Props are input data for a component.',
            },
            {
              text: 'A way to export functions.',
              why: 'Export uses <code>export</code>.',
            },
          ],
        },
        {
          q: 'What is <code>props.name</code> in <code>&lt;Greeting name="Ada" /&gt;</code>?',
          answer: 1,
          options: [
            {
              text: '<code>name</code>',
              why: 'That is the prop name, not its value.',
            },
            {
              text: '<code>"Ada"</code>',
              why: 'The name prop receives the text value Ada.',
            },
            {
              text: '<code>undefined</code>',
              why: 'The prop was provided.',
            },
            {
              text: '<code>{ name: "Ada" }</code>',
              why: 'That is the object shape, not the name value itself.',
            },
          ],
        },
        {
          q: 'What does <code>&lt;Card title={2 + 3} /&gt;</code> mean?',
          answer: 3,
          options: [
            {
              text: 'title becomes the text <code>"2 + 3"</code>.',
              why: 'Curly braces mean a JavaScript expression.',
            },
            {
              text: 'title becomes <code>"5"</code> as text.',
              why: 'The expression evaluates to the number 5.',
            },
            {
              text: 'title becomes <code>null</code>.',
              why: 'A value is actually passed.',
            },
            {
              text: 'title becomes the number <code>5</code>.',
              why: 'The expression <code>2 + 3</code> evaluates to 5.',
            },
          ],
        },
        {
          q: 'What is the benefit of <code>function Greeting({ name })</code>?',
          answer: 0,
          options: [
            {
              text: 'It takes <code>name</code> directly from the props object.',
              why: 'This is destructuring of the props object.',
            },
            {
              text: 'It automatically exports Greeting.',
              why: 'Destructuring does not export anything.',
            },
            {
              text: 'It turns name into state.',
              why: 'It does not change state.',
            },
            {
              text: 'It turns name into a CSS class.',
              why: 'It has nothing to do with CSS.',
            },
          ],
        },
        {
          q: 'What should you remember about props in this lesson?',
          answer: 2,
          options: [
            {
              text: 'Props must always be strings.',
              why: 'Props can contain many types of values.',
            },
            {
              text: 'The child should change props to send data back.',
              why: 'Props are input data, not the child&#39;s mutable state.',
            },
            {
              text: 'Props are input data provided when the component is used.',
              why: 'That is the main rule of this lesson.',
            },
            {
              text: 'Props always replace state.',
              why: 'State comes later and has a different role.',
            },
          ],
        },
    ],
    uk: [
        {
          q: 'Що таке компонент React у цьому курсі?',
          answer: 0,
          options: [
            {
              text: 'JavaScript-функція, що повертає UI.',
              why: 'Компонент — це функція, що повертає JSX/UI.',
            },
            {
              text: 'CSS-клас.',
              why: 'CSS-клас описує стилі, а не компонент React.',
            },
            {
              text: 'JSON-файл.',
              why: 'JSON — це дані, а не сама функція компонента.',
            },
            {
              text: 'Подія браузера.',
              why: 'Події можуть використовуватися компонентами, але не є компонентом.',
            },
          ],
        },
        {
          q: 'Чому назви компонентів зазвичай починаються з великої літери?',
          answer: 1,
          options: [
            {
              text: 'Тому що всі JavaScript-функції мають починатися з великої літери.',
              why: 'Звичайні JavaScript-функції можуть починатися з малої.',
            },
            {
              text: 'Щоб JSX міг відрізнити компонент від звичайного HTML-елемента.',
              why: 'Велика літера сигналізує JSX, що це компонент.',
            },
            {
              text: 'Інакше React не може використовувати props.',
              why: 'Props не залежать від першої літери назви.',
            },
            {
              text: 'Цього вимагає CSS.',
              why: 'У CSS немає такого правила.',
            },
          ],
        },
        {
          q: 'Що робить <code>&lt;Welcome /&gt;</code> у JSX?',
          answer: 2,
          options: [
            {
              text: 'Створює HTML-елемент із назвою Welcome.',
              why: 'Це не звичайний HTML-елемент.',
            },
            {
              text: 'Викликає <code>Welcome</code> як звичайну функцію з дужками.',
              why: 'У JSX тут використовується синтаксис компонента.',
            },
            {
              text: 'Використовує компонент React <code>Welcome</code>.',
              why: 'Це компонент, який JSX просить React використати.',
            },
            {
              text: 'Експортує компонент Welcome.',
              why: 'Експорт робиться через <code>export</code>.',
            },
          ],
        },
        {
          q: 'Що таке named export?',
          answer: 0,
          options: [
            {
              text: '<code>export function Button() { ... }</code>',
              why: 'Це експортує функцію під іменем Button.',
            },
            {
              text: '<code>function Button() { ... }</code> без export',
              why: 'Тоді функція не експортується з модуля.',
            },
            {
              text: '<code>export default Button</code>',
              why: 'Це default export.',
            },
            {
              text: '<code>import { Button }</code>',
              why: 'Це імпорт, а не експорт.',
            },
          ],
        },
        {
          q: 'Як імпортувати named export з назвою <code>Button</code>?',
          answer: 3,
          options: [
            {
              text: '<code>import Button from &#39;./Button.js&#39;</code>',
              why: 'Це форма default import.',
            },
            {
              text: '<code>import default Button from &#39;./Button.js&#39;</code>',
              why: 'Це некоректний синтаксис імпорту.',
            },
            {
              text: '<code>include Button from &#39;./Button.js&#39;</code>',
              why: 'include не є синтаксисом імпорту JavaScript.',
            },
            {
              text: '<code>import { Button } from &#39;./Button.js&#39;</code>',
              why: 'Named exports імпортуються у фігурних дужках.',
            },
          ],
        },
        {
          q: 'Що таке <code>props</code>?',
          answer: 2,
          options: [
            {
              text: 'Копія CSS-правил.',
              why: 'Props — це дані компонента.',
            },
            {
              text: 'Особливий тип state.',
              why: 'Props і state — різні поняття.',
            },
            {
              text: 'Дані, які один компонент передає компоненту, який він використовує.',
              why: 'Props — це вхідні дані компонента.',
            },
            {
              text: 'Спосіб експортувати функції.',
              why: 'Для експорту використовується <code>export</code>.',
            },
          ],
        },
        {
          q: 'Чому дорівнює <code>props.name</code> у <code>&lt;Greeting name="Ada" /&gt;</code>?',
          answer: 1,
          options: [
            {
              text: '<code>name</code>',
              why: 'Це назва prop, а не його значення.',
            },
            {
              text: '<code>"Ada"</code>',
              why: 'Prop name отримує текстове значення Ada.',
            },
            {
              text: '<code>undefined</code>',
              why: 'Prop було передано.',
            },
            {
              text: '<code>{ name: "Ada" }</code>',
              why: 'Це форма об’єкта, а не саме значення name.',
            },
          ],
        },
        {
          q: 'Що означає <code>&lt;Card title={2 + 3} /&gt;</code>?',
          answer: 3,
          options: [
            {
              text: 'title стає текстом <code>"2 + 3"</code>.',
              why: 'Фігурні дужки означають JavaScript-вираз.',
            },
            {
              text: 'title стає текстом <code>"5"</code>.',
              why: 'Вираз обчислюється як число 5.',
            },
            {
              text: 'title стає <code>null</code>.',
              why: 'Насправді передається значення.',
            },
            {
              text: 'title стає числом <code>5</code>.',
              why: 'Вираз <code>2 + 3</code> обчислюється як 5.',
            },
          ],
        },
        {
          q: 'Яка перевага запису <code>function Greeting({ name })</code>?',
          answer: 0,
          options: [
            {
              text: 'Ви дістаєте <code>name</code> безпосередньо з об’єкта props.',
              why: 'Це деструктуризація об’єкта props.',
            },
            {
              text: 'Greeting автоматично експортується.',
              why: 'Деструктуризація нічого не експортує.',
            },
            {
              text: 'name стає state.',
              why: 'Це не змінює state.',
            },
            {
              text: 'name стає CSS-класом.',
              why: 'Це не пов’язано з CSS.',
            },
          ],
        },
        {
          q: 'Що слід запам’ятати про props у цьому уроці?',
          answer: 2,
          options: [
            {
              text: 'Props завжди мають бути рядками.',
              why: 'Props можуть містити багато типів значень.',
            },
            {
              text: 'Дочірній компонент має змінювати props, щоб передати дані назад.',
              why: 'Props — це вхідні дані, а не змінюваний state дочірнього компонента.',
            },
            {
              text: 'Props — це вхідні дані, які передаються під час використання компонента.',
              why: 'Це головне правило цього уроку.',
            },
            {
              text: 'Props завжди замінюють state.',
              why: 'State буде далі в курсі й має іншу роль.',
            },
          ],
        },
    ],
  },
});
