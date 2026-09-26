/*
 * Content of lesson 25 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      "doc.title": "HTML & CSS: Adaptivt design",
      "kicker": "Leksjon 25 &middot; HTML &amp; CSS",
      "title": "HTML &amp; CSS: Adaptivt design",
      "lead": "Et adaptivt nettsted tilpasser innhold og layout til skjermstørrelsen. Med viewport, fleksible størrelser og media queries kan samme side fungere godt på mobil, nettbrett og store skjermer.",
      "s.viewport.t": "Viewport: nettleserens visningsområde",
      "s.viewport.d": "<p>På mobile enheter bør du fortelle nettleseren at sidens layout skal bruke enhetens faktiske bredde. Det gjør du med <code>&lt;meta name=\"viewport\"&gt;</code>.</p><p><code>width=device-width</code> gjør layoutbredden lik bredden på enheten, mens <code>initial-scale=1</code> starter siden uten en ekstra zoom.</p>",
      "s.fluid.t": "Fleksible størrelser",
      "s.fluid.d": "<p>Unngå å bygge hele layouten med faste pikselbredder. Prosent, <code>max-width</code>, <code>min()</code>, <code>max()</code> og <code>clamp()</code> kan gjøre størrelser mer fleksible.</p><p>For bilder er <code>max-width: 100%</code> en enkel måte å hindre at bildet blir bredere enn containeren. <code>height: auto</code> bevarer proporsjonene.</p>",
      "s.media.t": "Media queries",
      "s.media.d": "<p>En <code>@media</code>-regel lar deg bruke andre CSS-regler når bestemte forhold gjelder, for eksempel når viewporten er smalere enn 700 piksler.</p><p>Du kan dermed endre antall kolonner, avstander, skriftstørrelser eller andre deler av layouten uten å lage en egen HTML-side for mobilen.</p>",
      "s.layout.t": "Flexbox og Grid",
      "s.layout.d": "<p>Flexbox er nyttig når du organiserer elementer langs én hovedakse, for eksempel en navigasjonsrad. <code>flex-wrap: wrap</code> lar elementene flytte seg til neste linje når det ikke er nok plass.</p><p>CSS Grid passer godt for todimensjonale oppsett som kort og produktlister. Kombinasjonen <code>auto-fit</code> og <code>minmax()</code> kan la antallet kolonner tilpasses tilgjengelig plass.</p>",
      "s.first.t": "Mobile-first",
      "s.first.d": "<p>Med mobile-first lager du først en enkel layout som fungerer på små skjermer. Deretter bruker du media queries med <code>min-width</code> for å legge til mer plass og flere kolonner på større skjermer.</p><p>Fordelen er at grunnreglene er enkle, og at større skjermer får ekstra layoutregler bare når de trenger dem.</p>",
      "btn.index": "Innhold",
      "btn.test": "Test",
      "btn.next": "Neste leksjon"
},
    en: {
      "doc.title": "HTML & CSS: Responsive design",
      "kicker": "Lesson 25 &middot; HTML &amp; CSS",
      "title": "HTML &amp; CSS: Responsive design",
      "lead": "A responsive web page adapts its content and layout to the available screen size. With a viewport, flexible sizes, and media queries, the same page can work well on phones, tablets, and large screens.",
      "s.viewport.t": "The viewport",
      "s.viewport.d": "<p>On mobile devices, you should tell the browser that the page layout should use the device’s actual width. You do this with <code>&lt;meta name=\"viewport\"&gt;</code>.</p><p><code>width=device-width</code> makes the layout width match the device width, while <code>initial-scale=1</code> starts the page without an extra zoom.</p>",
      "s.fluid.t": "Flexible sizes",
      "s.fluid.d": "<p>Avoid building the entire layout with fixed pixel widths. Percentages, <code>max-width</code>, <code>min()</code>, <code>max()</code>, and <code>clamp()</code> can make sizes more flexible.</p><p>For images, <code>max-width: 100%</code> is a simple way to prevent an image from becoming wider than its container. <code>height: auto</code> preserves its proportions.</p>",
      "s.media.t": "Media queries",
      "s.media.d": "<p>An <code>@media</code> rule lets you apply different CSS rules when specific conditions are true, for example when the viewport is narrower than 700 pixels.</p><p>You can change the number of columns, spacing, font sizes, or other layout details without creating a separate HTML page for mobile.</p>",
      "s.layout.t": "Flexbox and Grid",
      "s.layout.d": "<p>Flexbox is useful when you arrange elements along one main axis, such as a navigation row. <code>flex-wrap: wrap</code> lets items move to the next line when there is not enough space.</p><p>CSS Grid works well for two-dimensional layouts such as cards and product lists. Combining <code>auto-fit</code> with <code>minmax()</code> can let the number of columns adapt to the available space.</p>",
      "s.first.t": "Mobile-first",
      "s.first.d": "<p>With a mobile-first approach, you first create a simple layout that works on small screens. Then you use <code>min-width</code> media queries to add space and columns on larger screens.</p><p>The benefit is that the base rules stay simple, while larger screens receive additional layout rules only when needed.</p>",
      "btn.index": "Index",
      "btn.test": "Test",
      "btn.next": "Next lesson"
},
    uk: {
      "doc.title": "HTML & CSS: Адаптивний дизайн",
      "kicker": "Урок 25 &middot; HTML &amp; CSS",
      "title": "HTML &amp; CSS: Адаптивний дизайн",
      "lead": "Адаптивна вебсторінка підлаштовує вміст і макет під доступний розмір екрана. За допомогою viewport, гнучких розмірів і media queries одна й та сама сторінка може добре працювати на телефоні, планшеті та великому екрані.",
      "s.viewport.t": "Viewport: область перегляду",
      "s.viewport.d": "<p>На мобільних пристроях варто повідомити браузеру, що ширина макета має відповідати фактичній ширині пристрою. Для цього використовують <code>&lt;meta name=\"viewport\"&gt;</code>.</p><p><code>width=device-width</code> робить ширину макета рівною ширині пристрою, а <code>initial-scale=1</code> відкриває сторінку без додаткового масштабування.</p>",
      "s.fluid.t": "Гнучкі розміри",
      "s.fluid.d": "<p>Не варто будувати весь макет на фіксованих ширинах у пікселях. Відсотки, <code>max-width</code>, <code>min()</code>, <code>max()</code> і <code>clamp()</code> допомагають зробити розміри гнучкішими.</p><p>Для зображень <code>max-width: 100%</code> — простий спосіб не дозволити зображенню бути ширшим за контейнер. <code>height: auto</code> зберігає пропорції.</p>",
      "s.media.t": "Media queries",
      "s.media.d": "<p>Правило <code>@media</code> дає змогу застосовувати інші CSS-правила, коли виконуються певні умови, наприклад коли viewport вужчий за 700 пікселів.</p><p>Так можна змінювати кількість колонок, відступи, розміри шрифту та інші частини макета без створення окремої HTML-сторінки для мобільного пристрою.</p>",
      "s.layout.t": "Flexbox і Grid",
      "s.layout.d": "<p>Flexbox зручно використовувати, коли елементи розташовуються вздовж однієї основної осі, наприклад у рядку навігації. <code>flex-wrap: wrap</code> дозволяє елементам перейти на наступний рядок, коли місця недостатньо.</p><p>CSS Grid добре підходить для двовимірних макетів, наприклад карток і списків товарів. Поєднання <code>auto-fit</code> і <code>minmax()</code> може автоматично підлаштовувати кількість колонок під доступну ширину.</p>",
      "s.first.t": "Mobile-first",
      "s.first.d": "<p>У підході mobile-first спочатку створюють простий макет, який працює на малих екранах. Потім за допомогою media queries з <code>min-width</code> додають більше простору та колонок для великих екранів.</p><p>Перевага в тому, що базові правила залишаються простими, а більші екрани отримують додаткові правила лише тоді, коли вони потрібні.</p>",
      "btn.index": "Зміст",
      "btn.test": "Тест",
      "btn.next": "Наступний урок"
}
  },

  quiz: {
    no: [
      {
        q: "Hva gjør <code>width=device-width</code> i viewport-meta-taggen?",
        answer: 1,
        options: [
          {
            text: "Den setter alltid bredden til 700 piksler.",
            why: "Nei. Denne verdien gjør ikke bredden fast til 700 piksler.",
          },
          {
            text: "Den gjør layoutbredden lik bredden på enheten.",
            why: "Riktig. Layoutbredden følger bredden på enheten.",
          },
          {
            text: "Den skjuler siden på små skjermer.",
            why: "Nei. Viewport-innstillingen skjuler ikke siden.",
          },
          {
            text: "Den endrer CSS til Grid.",
            why: "Nei. Viewport-meta-taggen endrer ikke layoutsystemet til Grid.",
          }
        ],
      },
      {
        q: "Hva er hensikten med <code>initial-scale=1</code>?",
        answer: 3,
        options: [
          {
            text: "Å sette maksimal bredde til 1 piksel.",
            why: "Nei. Verdien 1 betyr ikke én piksel.",
          },
          {
            text: "Å slå av all responsiv CSS.",
            why: "Nei. Den slår ikke av media queries eller annen responsiv CSS.",
          },
          {
            text: "Å tvinge siden til liggende visning.",
            why: "Nei. Innstillingen bestemmer ikke skjermens orientering.",
          },
          {
            text: "Å starte siden uten en ekstra zoom.",
            why: "Riktig. Siden starter med en skala på 1, altså uten ekstra zoom.",
          }
        ],
      },
      {
        q: "Hvilken regel hindrer et bilde i å bli bredere enn containeren?",
        answer: 0,
        options: [
          {
            text: "<code>max-width: 100%</code>",
            why: "Riktig. Bildet kan ikke bli bredere enn foreldreelementet.",
          },
          {
            text: "<code>width: 1000px</code>",
            why: "Nei. En fast bredde på 1000 px kan bli for stor på små skjermer.",
          },
          {
            text: "<code>min-width: 100%</code>",
            why: "Nei. min-width setter en nedre grense og kan derfor gjøre bildet for stort.",
          },
          {
            text: "<code>height: 100%</code>",
            why: "Nei. height styrer høyden, ikke den maksimale bredden.",
          }
        ],
      },
      {
        q: "Hva brukes en <code>@media</code>-regel til?",
        answer: 3,
        options: [
          {
            text: "Å laste JavaScript.",
            why: "Nei. JavaScript lastes ikke av en media query.",
          },
          {
            text: "Å lage HTML-elementer.",
            why: "Nei. HTML-elementer opprettes ikke av @media.",
          },
          {
            text: "Å endre URL-en.",
            why: "Nei. @media endrer ikke adressen til siden.",
          },
          {
            text: "Å bruke CSS-regler når bestemte forhold gjelder.",
            why: "Riktig. @media aktiverer CSS-regler når betingelsen er oppfylt.",
          }
        ],
      },
      {
        q: "Viewporten er 600 px bred. Hvilken regel gjelder for <code>@media (max-width: 700px)</code>?",
        answer: 1,
        options: [
          {
            text: "Regelen gjelder ikke.",
            why: "Nei. 600 px er mindre enn 700 px, så max-width-betingelsen er oppfylt.",
          },
          {
            text: "Regelen gjelder.",
            why: "Riktig. 600 px er mindre enn eller lik 700 px.",
          },
          {
            text: "Regelen gjelder bare ved 700 px nøyaktig.",
            why: "Nei. Betingelsen gjelder også bredder under 700 px.",
          },
          {
            text: "Regelen gjelder bare over 700 px.",
            why: "Nei. max-width betyr 700 px eller mindre, ikke over 700 px.",
          }
        ],
      },
      {
        q: "Hva gjør <code>flex-wrap: wrap</code>?",
        answer: 3,
        options: [
          {
            text: "Den gjør alle elementer usynlige.",
            why: "Nei. wrap skjuler ikke elementene.",
          },
          {
            text: "Den tvinger alle elementer til én rad.",
            why: "Nei. wrap gjør det mulig å bryte til flere linjer.",
          },
          {
            text: "Den endrer Flexbox til Grid.",
            why: "Nei. Flexbox forblir Flexbox.",
          },
          {
            text: "Den lar elementer gå til neste linje når det ikke er nok plass.",
            why: "Riktig. Elementene kan flyttes til neste linje når hovedlinjen ikke har nok plass.",
          }
        ],
      },
      {
        q: "Hva er CSS Grid spesielt godt egnet til?",
        answer: 0,
        options: [
          {
            text: "Todimensjonale oppsett som kort og produktlister.",
            why: "Riktig. Grid er godt egnet til rader og kolonner samtidig.",
          },
          {
            text: "Å kjøre JavaScript.",
            why: "Nei. JavaScript kjøres ikke av Grid.",
          },
          {
            text: "Å definere sidens URL.",
            why: "Nei. Grid bestemmer ikke URL-en.",
          },
          {
            text: "Å erstatte HTML.",
            why: "Nei. Grid er et CSS-layoutsystem og erstatter ikke HTML.",
          }
        ],
      },
      {
        q: "Hva er hovedideen i mobile-first?",
        answer: 3,
        options: [
          {
            text: "Å lage en egen HTML-side for mobil.",
            why: "Nei. Mobile-first betyr ikke nødvendigvis en separat HTML-side.",
          },
          {
            text: "Å bruke bare piksler.",
            why: "Nei. Responsive størrelser kan bruke mange enheter, ikke bare px.",
          },
          {
            text: "Å starte med desktop-layout og skjule alt på mobil.",
            why: "Nei. Mobile-first starter med små skjermer, ikke desktop.",
          },
          {
            text: "Å lage grunnlayouten for små skjermer og utvide den for større skjermer.",
            why: "Riktig. Først lager du en fungerende liten layout og utvider den for større skjermer.",
          }
        ],
      },
      {
        q: "Hvilken media query passer med mobile-first for å legge til regler fra 800 px og oppover?",
        answer: 2,
        options: [
          {
            text: "<code>@media (max-width: 800px)</code>",
            why: "Nei. max-width gjelder 800 px og under, som er motsatt av målet.",
          },
          {
            text: "<code>@media (width: 800px)</code>",
            why: "Nei. width: 800px treffer bare en bestemt bredde.",
          },
          {
            text: "<code>@media (min-width: 800px)</code>",
            why: "Riktig. min-width: 800px gjelder fra 800 px og oppover.",
          },
          {
            text: "<code>@media (min-height: 800px)</code>",
            why: "Nei. min-height måler høyden, ikke bredden.",
          }
        ],
      },
      {
        q: "Hvorfor kan <code>auto-fit</code> og <code>minmax()</code> være nyttig i et Grid-oppsett?",
        answer: 1,
        options: [
          {
            text: "De gjør alle kort like høye.",
            why: "Nei. Disse funksjonene handler ikke om å gjøre kortene like høye.",
          },
          {
            text: "De kan la antallet kolonner tilpasses tilgjengelig plass.",
            why: "Riktig. Grid kan bruke dem til å tilpasse antall kolonner etter tilgjengelig bredde.",
          },
          {
            text: "De fjerner behovet for HTML.",
            why: "Nei. HTML er fortsatt nødvendig for innholdet.",
          },
          {
            text: "De gjør Grid om til Flexbox.",
            why: "Nei. Layouten er fortsatt CSS Grid.",
          }
        ],
      }
    ],
    en: [
      {
        q: "What does <code>width=device-width</code> do in the viewport meta tag?",
        answer: 1,
        options: [
          {
            text: "It always sets the width to 700 pixels.",
            why: "No. This value does not fix the width at 700 pixels.",
          },
          {
            text: "It makes the layout width match the device width.",
            why: "Correct. The layout width follows the device width.",
          },
          {
            text: "It hides the page on small screens.",
            why: "No. The viewport setting does not hide the page.",
          },
          {
            text: "It changes CSS to Grid.",
            why: "No. The viewport meta tag does not change the layout system to Grid.",
          }
        ],
      },
      {
        q: "What is the purpose of <code>initial-scale=1</code>?",
        answer: 3,
        options: [
          {
            text: "To set the maximum width to 1 pixel.",
            why: "No. The value 1 does not mean one pixel.",
          },
          {
            text: "To disable all responsive CSS.",
            why: "No. It does not disable media queries or other responsive CSS.",
          },
          {
            text: "To force landscape orientation.",
            why: "No. It does not determine the screen orientation.",
          },
          {
            text: "To start the page without an extra zoom.",
            why: "Correct. The page starts at a scale of 1, without an extra zoom.",
          }
        ],
      },
      {
        q: "Which rule prevents an image from becoming wider than its container?",
        answer: 0,
        options: [
          {
            text: "<code>max-width: 100%</code>",
            why: "Correct. The image cannot become wider than its containing element.",
          },
          {
            text: "<code>width: 1000px</code>",
            why: "No. A fixed width of 1000 px can be too wide on small screens.",
          },
          {
            text: "<code>min-width: 100%</code>",
            why: "No. min-width sets a lower limit and can therefore make the image too large.",
          },
          {
            text: "<code>height: 100%</code>",
            why: "No. height controls height, not the maximum width.",
          }
        ],
      },
      {
        q: "What is a <code>@media</code> rule used for?",
        answer: 3,
        options: [
          {
            text: "Loading JavaScript.",
            why: "No. JavaScript is not loaded by a media query.",
          },
          {
            text: "Creating HTML elements.",
            why: "No. HTML elements are not created by @media.",
          },
          {
            text: "Changing the URL.",
            why: "No. @media does not change the page URL.",
          },
          {
            text: "Applying CSS rules when specific conditions are true.",
            why: "Correct. @media applies CSS rules when its condition is met.",
          }
        ],
      },
      {
        q: "The viewport is 600 px wide. Which is true for <code>@media (max-width: 700px)</code>?",
        answer: 1,
        options: [
          {
            text: "The rule does not apply.",
            why: "No. 600 px is less than 700 px, so the max-width condition is met.",
          },
          {
            text: "The rule applies.",
            why: "Correct. 600 px is less than or equal to 700 px.",
          },
          {
            text: "The rule applies only at exactly 700 px.",
            why: "No. The condition also applies below 700 px.",
          },
          {
            text: "The rule applies only above 700 px.",
            why: "No. max-width means 700 px or less, not above 700 px.",
          }
        ],
      },
      {
        q: "What does <code>flex-wrap: wrap</code> do?",
        answer: 3,
        options: [
          {
            text: "It makes all elements invisible.",
            why: "No. wrap does not hide the elements.",
          },
          {
            text: "It forces all elements onto one row.",
            why: "No. wrap allows the items to break onto multiple lines.",
          },
          {
            text: "It changes Flexbox into Grid.",
            why: "No. Flexbox remains Flexbox.",
          },
          {
            text: "It lets items move to the next line when there is not enough space.",
            why: "Correct. Items can move to the next line when there is not enough space on the current line.",
          }
        ],
      },
      {
        q: "What is CSS Grid especially well suited for?",
        answer: 0,
        options: [
          {
            text: "Two-dimensional layouts such as cards and product lists.",
            why: "Correct. Grid is well suited to rows and columns at the same time.",
          },
          {
            text: "Running JavaScript.",
            why: "No. JavaScript is not executed by Grid.",
          },
          {
            text: "Defining the page URL.",
            why: "No. Grid does not define the page URL.",
          },
          {
            text: "Replacing HTML.",
            why: "No. Grid is a CSS layout system and does not replace HTML.",
          }
        ],
      },
      {
        q: "What is the main idea of mobile-first?",
        answer: 3,
        options: [
          {
            text: "Create a separate HTML page for mobile.",
            why: "No. Mobile-first does not require a separate HTML page.",
          },
          {
            text: "Use only pixels.",
            why: "No. Responsive layouts can use many units, not only pixels.",
          },
          {
            text: "Start with a desktop layout and hide everything on mobile.",
            why: "No. Mobile-first starts with small screens, not desktop.",
          },
          {
            text: "Create the base layout for small screens and extend it for larger screens.",
            why: "Correct. You create the base layout for small screens and extend it for larger screens.",
          }
        ],
      },
      {
        q: "Which media query fits a mobile-first rule that adds styles from 800 px and above?",
        answer: 2,
        options: [
          {
            text: "<code>@media (max-width: 800px)</code>",
            why: "No. max-width: 800px applies at 800 px and below, which is the opposite of the goal.",
          },
          {
            text: "<code>@media (width: 800px)</code>",
            why: "No. width: 800px targets one specific width.",
          },
          {
            text: "<code>@media (min-width: 800px)</code>",
            why: "Correct. min-width: 800px applies from 800 px and above.",
          },
          {
            text: "<code>@media (min-height: 800px)</code>",
            why: "No. min-height measures height, not width.",
          }
        ],
      },
      {
        q: "Why can <code>auto-fit</code> and <code>minmax()</code> be useful in a Grid layout?",
        answer: 1,
        options: [
          {
            text: "They make all cards the same height.",
            why: "No. These functions are not specifically about making cards the same height.",
          },
          {
            text: "They can let the number of columns adapt to available space.",
            why: "Correct. Grid can use them to adapt the number of columns to the available width.",
          },
          {
            text: "They remove the need for HTML.",
            why: "No. HTML is still needed for the content.",
          },
          {
            text: "They turn Grid into Flexbox.",
            why: "No. The layout is still CSS Grid.",
          }
        ],
      }
    ],
    uk: [
      {
        q: "Що робить <code>width=device-width</code> у meta-тезі viewport?",
        answer: 1,
        options: [
          {
            text: "Завжди встановлює ширину 700 пікселів.",
            why: "Ні. Це значення не фіксує ширину на 700 пікселів.",
          },
          {
            text: "Робить ширину макета рівною ширині пристрою.",
            why: "Правильно. Ширина макета відповідає ширині пристрою.",
          },
          {
            text: "Приховує сторінку на малих екранах.",
            why: "Ні. Налаштування viewport не приховує сторінку.",
          },
          {
            text: "Змінює CSS на Grid.",
            why: "Ні. meta-тег viewport не змінює систему макета на Grid.",
          }
        ],
      },
      {
        q: "Яке призначення <code>initial-scale=1</code>?",
        answer: 3,
        options: [
          {
            text: "Встановити максимальну ширину 1 піксель.",
            why: "Ні. Значення 1 не означає один піксель.",
          },
          {
            text: "Вимкнути весь адаптивний CSS.",
            why: "Ні. Воно не вимикає media queries чи інший адаптивний CSS.",
          },
          {
            text: "Примусово встановити альбомну орієнтацію.",
            why: "Ні. Воно не визначає орієнтацію екрана.",
          },
          {
            text: "Відкрити сторінку без додаткового масштабування.",
            why: "Правильно. Сторінка відкривається з масштабом 1, без додаткового збільшення.",
          }
        ],
      },
      {
        q: "Яке правило не дозволяє зображенню стати ширшим за контейнер?",
        answer: 0,
        options: [
          {
            text: "<code>max-width: 100%</code>",
            why: "Правильно. Зображення не може стати ширшим за батьківський елемент.",
          },
          {
            text: "<code>width: 1000px</code>",
            why: "Ні. Фіксована ширина 1000 px може бути завеликою для малого екрана.",
          },
          {
            text: "<code>min-width: 100%</code>",
            why: "Ні. min-width задає нижню межу і тому може зробити зображення завеликим.",
          },
          {
            text: "<code>height: 100%</code>",
            why: "Ні. height керує висотою, а не максимальною шириною.",
          }
        ],
      },
      {
        q: "Для чого використовують правило <code>@media</code>?",
        answer: 3,
        options: [
          {
            text: "Для завантаження JavaScript.",
            why: "Ні. JavaScript не завантажується за допомогою media query.",
          },
          {
            text: "Для створення HTML-елементів.",
            why: "Ні. HTML-елементи не створюються правилом @media.",
          },
          {
            text: "Для зміни URL.",
            why: "Ні. @media не змінює URL сторінки.",
          },
          {
            text: "Для застосування CSS-правил за певних умов.",
            why: "Правильно. @media застосовує CSS-правила, коли його умова виконується.",
          }
        ],
      },
      {
        q: "Viewport має ширину 600 px. Що відбувається з <code>@media (max-width: 700px)</code>?",
        answer: 1,
        options: [
          {
            text: "Правило не застосовується.",
            why: "Ні. 600 px менше за 700 px, тому умова max-width виконується.",
          },
          {
            text: "Правило застосовується.",
            why: "Правильно. 600 px менше або дорівнює 700 px.",
          },
          {
            text: "Правило застосовується лише рівно при 700 px.",
            why: "Ні. Умова діє також для ширини меншої за 700 px.",
          },
          {
            text: "Правило застосовується лише понад 700 px.",
            why: "Ні. max-width означає 700 px або менше, а не більше 700 px.",
          }
        ],
      },
      {
        q: "Що робить <code>flex-wrap: wrap</code>?",
        answer: 3,
        options: [
          {
            text: "Робить усі елементи невидимими.",
            why: "Ні. wrap не приховує елементи.",
          },
          {
            text: "Змушує всі елементи залишатися в одному рядку.",
            why: "Ні. wrap дозволяє переносити елементи на кілька рядків.",
          },
          {
            text: "Перетворює Flexbox на Grid.",
            why: "Ні. Flexbox залишається Flexbox.",
          },
          {
            text: "Дозволяє елементам перейти на наступний рядок, коли місця недостатньо.",
            why: "Правильно. Елементи можуть перейти на наступний рядок, коли на поточному недостатньо місця.",
          }
        ],
      },
      {
        q: "Для чого особливо добре підходить CSS Grid?",
        answer: 0,
        options: [
          {
            text: "Для двовимірних макетів, наприклад карток і списків товарів.",
            why: "Правильно. Grid добре підходить для одночасного розташування в рядках і колонках.",
          },
          {
            text: "Для виконання JavaScript.",
            why: "Ні. Grid не виконує JavaScript.",
          },
          {
            text: "Для визначення URL сторінки.",
            why: "Ні. Grid не визначає URL сторінки.",
          },
          {
            text: "Для заміни HTML.",
            why: "Ні. Grid — це CSS-система макета, а не заміна HTML.",
          }
        ],
      },
      {
        q: "У чому головна ідея mobile-first?",
        answer: 3,
        options: [
          {
            text: "Створити окрему HTML-сторінку для мобільних пристроїв.",
            why: "Ні. Mobile-first не вимагає окремої HTML-сторінки.",
          },
          {
            text: "Використовувати лише пікселі.",
            why: "Ні. Адаптивні макети можуть використовувати різні одиниці, не лише пікселі.",
          },
          {
            text: "Почати з desktop-макета і приховати все на мобільному.",
            why: "Ні. Mobile-first починається з малих екранів, а не з desktop.",
          },
          {
            text: "Створити базовий макет для малих екранів і розширювати його для більших.",
            why: "Правильно. Спочатку створюють базовий макет для малих екранів, а потім розширюють його для більших.",
          }
        ],
      },
      {
        q: "Який media query відповідає mobile-first правилу для екранів від 800 px і ширше?",
        answer: 2,
        options: [
          {
            text: "<code>@media (max-width: 800px)</code>",
            why: "Ні. max-width: 800px діє при 800 px і менше, тобто це протилежна умова.",
          },
          {
            text: "<code>@media (width: 800px)</code>",
            why: "Ні. width: 800px стосується лише певної ширини.",
          },
          {
            text: "<code>@media (min-width: 800px)</code>",
            why: "Правильно. min-width: 800px діє від 800 px і вище.",
          },
          {
            text: "<code>@media (min-height: 800px)</code>",
            why: "Ні. min-height вимірює висоту, а не ширину.",
          }
        ],
      },
      {
        q: "Чому <code>auto-fit</code> і <code>minmax()</code> можуть бути корисними в Grid-макеті?",
        answer: 1,
        options: [
          {
            text: "Вони роблять усі картки однакової висоти.",
            why: "Ні. Ці функції не призначені спеціально для однакової висоти карток.",
          },
          {
            text: "Вони можуть дозволити кількості колонок підлаштовуватися під доступний простір.",
            why: "Правильно. Grid може використовувати їх, щоб підлаштовувати кількість колонок під доступну ширину.",
          },
          {
            text: "Вони усувають потребу в HTML.",
            why: "Ні. HTML усе одно потрібен для вмісту.",
          },
          {
            text: "Вони перетворюють Grid на Flexbox.",
            why: "Ні. Макет залишається CSS Grid.",
          }
        ],
      }
    ]
  },
});
