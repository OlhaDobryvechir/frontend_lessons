/*
 * Content of JS lesson 11 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson finds and makes elements. Events are lesson 12.
 * It leans on HTML lesson 8 (id), HTML lesson 11 (selectors) and
 * HTML lesson 7 (escaping).
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'document.getElementById, createElement, querySelector',
      kicker: 'Leksjon 11 &middot; Javascript',
      title: 'document.getElementById, createElement, querySelector',
      lead: 'Å finne elementer som finnes, og lage dem som ikke gjør det. Alt du senere gjør med hendelser og oppdateringer, begynner med disse tre.',

      's.byid.t': 'Den eldste og enkleste',
      's.byid.d':
        '<p><code>getElementById</code> gjør nøyaktig én ting: finner elementet med den <code>id</code>-en. Siden en <code>id</code> er unik i dokumentet (leksjon 8 i HTML-sporet), kan den bare gi ett svar.</p>' +
        '<p>Finnes den ikke, får du <code>null</code>. Ikke <code>undefined</code>, ikke en tom liste, ikke en feil &mdash; <code>null</code>. Den vanligste feilmeldingen i frontend, «cannot read properties of null», er nesten alltid dette svaret som ikke ble sjekket.</p>' +
        '<p>Merk at den tar id-en selv, ikke en velger. Skriver du <code>&#39;#priser&#39;</code>, leter den etter et element med id-en <code>#priser</code>, og finner ingenting. Den finnes dessuten bare på <code>document</code>.</p>',

      's.query.t': 'Hele CSS, som oppslag',
      's.query.d':
        '<p><code>querySelector</code> tar en hvilken som helst CSS-velger &mdash; nøyaktig de fra leksjon 11 i HTML-sporet &mdash; og gir deg det første elementet som passer, i dokumentrekkefølge. Ellers <code>null</code>.</p>' +
        '<p>Det gjør den til det ene verktøyet som dekker alt: id, klasse, attributt, kombinasjoner, etterkommere. Du trenger sjelden mer enn den og <code>querySelectorAll</code>.</p>' +
        '<p>Den finnes også på hvert enkelt element, og da leter den bare nedover i det. <code>kort.querySelector(&#39;p&#39;)</code> finner et avsnitt i akkurat dette kortet, ikke det første på hele siden. Det er som regel nettopp det du vil ha.</p>',

      's.all.t': 'To lister som ikke er like',
      's.all.d':
        '<p><code>querySelectorAll</code> gir deg en <code>NodeList</code>: et øyeblikksbilde av treffene da du spurte. Legger du til flere elementer etterpå, endrer ikke listen seg.</p>' +
        '<p>De eldre <code>getElementsByClassName</code> og <code>getElementsByTagName</code> gir en <code>HTMLCollection</code>, og den er levende. Den peker på dokumentet, ikke på et resultat &mdash; legger du til et element som passer, dukker det opp i listen du allerede har.</p>' +
        '<p>Målt på to elementer: etter at et tredje ble lagt til, sa den faste listen fortsatt 2, og den levende sa 3. En løkke som legger til elementer mens den går gjennom en levende liste, blir aldri ferdig &mdash; det er samme felle som i leksjon 5.</p>' +
        '<p>Og ingen av dem er et array. <code>NodeList</code> har <code>forEach</code>, men ikke <code>map</code>. <code>HTMLCollection</code> har ikke engang <code>forEach</code>. Skal du bruke array-metoder, spre den først: <code>[...treff].map(...)</code>.</p>',

      's.create.t': 'Et element uten hjem',
      's.create.d':
        '<p><code>createElement</code> lager et ekte element som ikke er noe sted. <code>parentNode</code> er <code>null</code>, og siden vet ingenting om det.</p>' +
        '<p>Det er en fordel. Du kan sette klasser, tekst og attributter i fred, uten at nettleseren tegner noe om for hver linje. Først når du setter det inn, skjer det en endring på siden &mdash; én, i stedet for én per egenskap.</p>',

      's.text.t': 'textContent eller innerHTML',
      's.text.d':
        '<p><code>textContent</code> setter tekst. Skriver du <code>&lt;b&gt;hei&lt;/b&gt;</code>, får leseren se de tegnene, akkurat slik. Elementet får ingen barn, fordi det ikke ble laget noe element.</p>' +
        '<p><code>innerHTML</code> tolker det samme som oppmerking og lager en <code>&lt;b&gt;</code>. Det er nyttig når du selv skrev innholdet, og farlig når noen andre gjorde det.</p>' +
        '<p>Én detalj er verdt å kjenne, fordi den gir falsk trygghet: en <code>&lt;script&gt;</code>-tagg satt inn med <code>innerHTML</code> kjører ikke. Det er riktig, og det beskytter deg ikke. En hendelsesbehandler på et bilde som ikke finnes, kjører utmerket. <code>innerHTML</code> med fremmed innhold er utrygt uansett hvordan du vrir på det.</p>' +
        '<p>Regelen er den samme som i leksjon 7 i HTML-sporet, sett fra den andre siden: kom innholdet fra en person, bruk <code>textContent</code>.</p>',

      's.append.t': 'Å sette det inn',
      's.append.d':
        '<p><code>append</code> er den moderne: den tar flere ting om gangen, og den tar tekst like gjerne som elementer. <code>appendChild</code> er den gamle: ett element, og den returnerer det du satte inn.</p>' +
        '<p>Forskjellen merkes først når du sender den en streng. <code>append</code> lager en tekstnode; <code>appendChild</code> kaster en <code>TypeError</code>.</p>' +
        '<p>Rundt dem ligger resten av familien: <code>prepend</code> setter først, <code>before</code> og <code>after</code> setter som søsken, og <code>replaceWith</code> bytter ut.</p>' +
        '<p>Skal du lage mange elementer, samle dem i et <code>DocumentFragment</code> og sett inn én gang. Fragmentet er ikke en del av siden, så alt arbeidet skjer utenfor &mdash; og når du setter det inn, forsvinner det selv og legger igjen barna sine. Hundre innsettinger blir til én.</p>',

      's.timing.t': 'Derfor er den null',
      's.timing.d':
        '<p>Et skript kan ikke finne noe som ikke er lest inn ennå. Står skriptet i <code>&lt;head&gt;</code>, kjører det før <code>&lt;body&gt;</code> finnes, og hvert eneste oppslag gir <code>null</code>.</p>' +
        '<p>Det er den vanligste årsaken til «null» i det hele tatt, og den ser ikke ut som et tidsproblem &mdash; den ser ut som en skrivefeil i en id.</p>' +
        '<p>Tre utveier. <code>defer</code> på skriptet lar det lastes med én gang og kjøre etter at dokumentet er lest &mdash; det beste valget. Eller legg skriptet nederst i <code>&lt;body&gt;</code>, som i leksjon 1 i HTML-sporet. Eller vent på <code>DOMContentLoaded</code>, som er nyttig når du ikke bestemmer hvor skriptet havner.</p>',

      's.note':
        '<p>Kortversjonen. Begge oppslagene gir <code>null</code> når de ikke finner noe &mdash; sjekk det. <code>querySelector</code> tar CSS og finnes også på elementer. <code>querySelectorAll</code> er et øyeblikksbilde, <code>getElementsBy...</code> er levende, og ingen av dem er arrays. Bygg elementer ferdig før du setter dem inn, og samle mange i et fragment. Bruk <code>textContent</code> til alt som kom fra en person. Og hvis alt er <code>null</code>, kjørte skriptet for tidlig.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'document.getElementById, createElement, querySelector',
      kicker: 'Lesson 11 &middot; Javascript',
      title: 'document.getElementById, createElement, querySelector',
      lead: 'Finding elements that exist, and making ones that do not. Everything you later do with events and updates starts with these three.',

      's.byid.t': 'The oldest and simplest',
      's.byid.d':
        '<p><code>getElementById</code> does exactly one thing: finds the element with that <code>id</code>. Since an <code>id</code> is unique in the document (lesson 8 of the HTML track), it can only ever give one answer.</p>' +
        '<p>If there is none, you get <code>null</code>. Not <code>undefined</code>, not an empty list, not an error — <code>null</code>. The commonest error message in frontend work, "cannot read properties of null", is nearly always this answer left unchecked.</p>' +
        '<p>Note that it takes the id itself, not a selector. Write <code>&#39;#priser&#39;</code> and it looks for an element whose id is <code>#priser</code>, and finds nothing. It also exists only on <code>document</code>.</p>',

      's.query.t': 'All of CSS, as a lookup',
      's.query.d':
        '<p><code>querySelector</code> takes any CSS selector — exactly the ones from lesson 11 of the HTML track — and gives you the first element that matches, in document order. Otherwise <code>null</code>.</p>' +
        '<p>That makes it the one tool that covers everything: id, class, attribute, combinations, descendants. You rarely need more than it and <code>querySelectorAll</code>.</p>' +
        '<p>It also exists on every element, and there it searches only downward inside it. <code>card.querySelector(&#39;p&#39;)</code> finds a paragraph in this particular card, not the first one on the page. That is usually exactly what you want.</p>',

      's.all.t': 'Two lists that are not alike',
      's.all.d':
        '<p><code>querySelectorAll</code> gives you a <code>NodeList</code>: a snapshot of the matches at the moment you asked. Add more elements afterwards and the list does not change.</p>' +
        '<p>The older <code>getElementsByClassName</code> and <code>getElementsByTagName</code> give an <code>HTMLCollection</code>, and that one is live. It points at the document rather than at a result — add a matching element and it appears in the list you already hold.</p>' +
        '<p>Measured on two elements: after a third was added, the static list still said 2 and the live one said 3. A loop that adds elements while walking a live list never finishes — the same trap as in lesson 5.</p>' +
        '<p>And neither is an array. <code>NodeList</code> has <code>forEach</code> but not <code>map</code>. <code>HTMLCollection</code> does not even have <code>forEach</code>. To use array methods, spread it first: <code>[...matches].map(...)</code>.</p>',

      's.create.t': 'An element with no home',
      's.create.d':
        '<p><code>createElement</code> makes a real element that is nowhere. Its <code>parentNode</code> is <code>null</code>, and the page knows nothing about it.</p>' +
        '<p>That is an advantage. You can set classes, text and attributes in peace, without the browser redoing any layout for each line. Only when you insert it does the page change — once, instead of once per property.</p>',

      's.text.t': 'textContent or innerHTML',
      's.text.d':
        '<p><code>textContent</code> sets text. Write <code>&lt;b&gt;hei&lt;/b&gt;</code> and the reader sees those characters, exactly so. The element gets no children, because no element was created.</p>' +
        '<p><code>innerHTML</code> reads the same thing as markup and makes a <code>&lt;b&gt;</code>. That is useful when you wrote the content yourself, and dangerous when somebody else did.</p>' +
        '<p>One detail is worth knowing because it gives false comfort: a <code>&lt;script&gt;</code> tag inserted with <code>innerHTML</code> does not run. That is true, and it does not protect you. An event handler on an image that does not exist runs perfectly well. <code>innerHTML</code> with foreign content is unsafe however you turn it.</p>' +
        '<p>The rule is the same as lesson 7 of the HTML track, seen from the other side: if the content came from a person, use <code>textContent</code>.</p>',

      's.append.t': 'Putting it in',
      's.append.d':
        '<p><code>append</code> is the modern one: it takes several things at once, and it takes text as happily as elements. <code>appendChild</code> is the old one: a single element, and it returns what you inserted.</p>' +
        '<p>The difference only shows when you hand it a string. <code>append</code> makes a text node; <code>appendChild</code> throws a <code>TypeError</code>.</p>' +
        '<p>Around them sits the rest of the family: <code>prepend</code> puts it first, <code>before</code> and <code>after</code> put it alongside, and <code>replaceWith</code> swaps it out.</p>' +
        '<p>When building many elements, collect them in a <code>DocumentFragment</code> and insert once. The fragment is not part of the page, so all the work happens outside it — and when you insert the fragment it disappears itself and leaves its children behind. A hundred insertions become one.</p>',

      's.timing.t': 'This is why it is null',
      's.timing.d':
        '<p>A script cannot find something that has not been read yet. If the script sits in <code>&lt;head&gt;</code> it runs before <code>&lt;body&gt;</code> exists, and every single lookup gives <code>null</code>.</p>' +
        '<p>It is the commonest cause of "null" there is, and it does not look like a timing problem — it looks like a typo in an id.</p>' +
        '<p>Three ways out. <code>defer</code> on the script lets it download immediately and run after the document is parsed — the best choice. Or put the script at the end of <code>&lt;body&gt;</code>, as in lesson 1 of the HTML track. Or wait for <code>DOMContentLoaded</code>, which helps when you do not control where the script ends up.</p>',

      's.note':
        '<p>The short version. Both lookups give <code>null</code> when they find nothing — check it. <code>querySelector</code> takes CSS and exists on elements too. <code>querySelectorAll</code> is a snapshot, <code>getElementsBy...</code> is live, and neither is an array. Finish building elements before inserting them, and collect many in a fragment. Use <code>textContent</code> for anything that came from a person. And if everything is <code>null</code>, the script ran too early.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'document.getElementById, createElement, querySelector',
      kicker: 'Урок 11 &middot; Javascript',
      title: 'document.getElementById, createElement, querySelector',
      lead: 'Знаходити елементи, які є, і створювати ті, яких немає. Усе, що ви згодом робитимете з подіями та оновленнями, починається з цих трьох.',

      's.byid.t': 'Найдавніший і найпростіший',
      's.byid.d':
        '<p><code>getElementById</code> робить рівно одну річ: знаходить елемент із цим <code>id</code>. Оскільки <code>id</code> унікальний у документі (урок 8 треку HTML), відповідь може бути лише одна.</p>' +
        '<p>Якщо такого немає, ви дістанете <code>null</code>. Не <code>undefined</code>, не порожній список, не помилку — <code>null</code>. Найпоширеніше повідомлення про помилку у фронтенді, «cannot read properties of null», майже завжди є цією неперевіреною відповіддю.</p>' +
        '<p>Зверніть увагу: він приймає сам id, а не селектор. Напишете <code>&#39;#priser&#39;</code> — і він шукатиме елемент, чий id дорівнює <code>#priser</code>, і не знайде нічого. До того ж він існує лише на <code>document</code>.</p>',

      's.query.t': 'Увесь CSS як пошук',
      's.query.d':
        '<p><code>querySelector</code> приймає будь-який селектор CSS — саме ті, що з уроку 11 треку HTML — і віддає перший відповідний елемент у порядку документа. Інакше <code>null</code>.</p>' +
        '<p>Це робить його єдиним інструментом, який покриває все: id, клас, атрибут, поєднання, нащадків. Більше за нього і <code>querySelectorAll</code> потрібно рідко.</p>' +
        '<p>Він також існує на кожному елементі, і там шукає лише вниз усередині нього. <code>card.querySelector(&#39;p&#39;)</code> знайде абзац саме в цій картці, а не перший на сторінці. Зазвичай це саме те, що потрібно.</p>',

      's.all.t': 'Два списки, які не однакові',
      's.all.d':
        '<p><code>querySelectorAll</code> дає <code>NodeList</code>: знімок збігів на ту мить, коли ви спитали. Додасте елементи потім — список не зміниться.</p>' +
        '<p>Давніші <code>getElementsByClassName</code> і <code>getElementsByTagName</code> дають <code>HTMLCollection</code>, і він живий. Він указує на документ, а не на результат: додайте відповідний елемент — і він з’явиться у списку, який ви вже тримаєте.</p>' +
        '<p>Виміряно на двох елементах: після додавання третього статичний список і далі казав 2, а живий — 3. Цикл, що додає елементи, обходячи живий список, ніколи не завершиться — та сама пастка, що й в уроці 5.</p>' +
        '<p>І жоден із них не є масивом. У <code>NodeList</code> є <code>forEach</code>, але немає <code>map</code>. У <code>HTMLCollection</code> немає навіть <code>forEach</code>. Щоб уживати методи масиву, спершу розгорніть: <code>[...matches].map(...)</code>.</p>',

      's.create.t': 'Елемент без домівки',
      's.create.d':
        '<p><code>createElement</code> створює справжній елемент, якого ніде немає. Його <code>parentNode</code> є <code>null</code>, і сторінка про нього нічого не знає.</p>' +
        '<p>Це перевага. Ви можете спокійно задати класи, текст і атрибути, і браузер не перераховуватиме розкладку на кожному рядку. Сторінка змінюється лише тоді, коли ви елемент вставляєте — один раз, а не по разу на кожну властивість.</p>',

      's.text.t': 'textContent чи innerHTML',
      's.text.d':
        '<p><code>textContent</code> задає текст. Напишете <code>&lt;b&gt;hei&lt;/b&gt;</code> — і читач побачить саме ці символи. Елемент не дістане нащадків, бо жодного елемента не створено.</p>' +
        '<p><code>innerHTML</code> читає те саме як розмітку і створює <code>&lt;b&gt;</code>. Це корисно, коли вміст написали ви, і небезпечно, коли хтось інший.</p>' +
        '<p>Одну деталь варто знати, бо вона дає оманливий спокій: тег <code>&lt;script&gt;</code>, вставлений через <code>innerHTML</code>, не виконується. Це правда, і це вас не захищає. Обробник події на зображенні, якого не існує, виконується чудово. <code>innerHTML</code> із чужим вмістом небезпечний, хоч як його крути.</p>' +
        '<p>Правило те саме, що й в уроці 7 треку HTML, але з іншого боку: якщо вміст надійшов від людини, беріть <code>textContent</code>.</p>',

      's.append.t': 'Вставити це',
      's.append.d':
        '<p><code>append</code> сучасний: він бере кілька речей за раз і так само радо бере текст, як і елементи. <code>appendChild</code> давній: один елемент, і він повертає те, що ви вставили.</p>' +
        '<p>Різниця виявляється, щойно ви передасте рядок. <code>append</code> створить текстовий вузол; <code>appendChild</code> кине <code>TypeError</code>.</p>' +
        '<p>Навколо них решта родини: <code>prepend</code> ставить першим, <code>before</code> і <code>after</code> ставлять поруч, а <code>replaceWith</code> замінює.</p>' +
        '<p>Коли створюєте багато елементів, зберіть їх у <code>DocumentFragment</code> і вставте один раз. Фрагмент не є частиною сторінки, тож уся робота відбувається поза нею — а коли ви вставляєте фрагмент, він зникає сам і лишає своїх нащадків. Сто вставок стають однією.</p>',

      's.timing.t': 'Ось чому воно null',
      's.timing.d':
        '<p>Скрипт не може знайти те, що ще не прочитано. Якщо скрипт стоїть у <code>&lt;head&gt;</code>, він виконується до того, як з’явиться <code>&lt;body&gt;</code>, і кожен пошук дає <code>null</code>.</p>' +
        '<p>Це найпоширеніша причина «null» узагалі, і вона не виглядає як проблема часу — вона виглядає як одрук в id.</p>' +
        '<p>Три виходи. <code>defer</code> на скрипті дає йому завантажитися одразу і виконатися після розбору документа — найкращий вибір. Або поставте скрипт у кінці <code>&lt;body&gt;</code>, як в уроці 1 треку HTML. Або дочекайтеся <code>DOMContentLoaded</code>, що допомагає, коли ви не керуєте тим, куди потрапить скрипт.</p>',

      's.note':
        '<p>Коротко. Обидва пошуки дають <code>null</code>, коли нічого не знайшли — перевіряйте. <code>querySelector</code> приймає CSS і існує також на елементах. <code>querySelectorAll</code> — знімок, <code>getElementsBy...</code> — живий, і жоден не є масивом. Доробляйте елементи до вставляння і збирайте багато у фрагмент. Для всього, що надійшло від людини, беріть <code>textContent</code>. А якщо все є <code>null</code>, скрипт виконався зарано.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva gir <code>document.getElementById(&#39;finnesikke&#39;)</code>?',
        answer: 1,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Nær, men ikke det samme. Skillet betyr noe når du sjekker med <code>===</code>.',
          },
          {
            text: '<code>null</code>',
            why: 'Begge oppslagene gir <code>null</code> når de ikke finner noe. Det er derfor «cannot read properties of null» er den vanligste feilmeldingen i frontend &mdash; svaret ble ikke sjekket.',
          },
          {
            text: 'En tom liste',
            why: 'Det er hva <code>querySelectorAll</code> gir. Denne gir ett element eller ingenting.',
          },
          {
            text: 'En feilmelding',
            why: 'Den kaster ikke. Den svarer pent at den ikke fant noe.',
          },
        ],
      },
      {
        q: 'Du henter <code>querySelectorAll(&#39;.x&#39;)</code> og legger så til et nytt element med klassen <code>x</code>. Hva sier listen?',
        answer: 0,
        options: [
          {
            text: 'Samme antall som før &mdash; den er et øyeblikksbilde.',
            why: 'Målt: 2 før og 2 etter. <code>querySelectorAll</code> gir en <code>NodeList</code> som ikke oppdaterer seg. <code>getElementsByClassName</code> gikk fra 2 til 3 i samme test.',
          },
          {
            text: 'Ett mer &mdash; listen er levende.',
            why: 'Det gjelder <code>getElementsByClassName</code>, ikke <code>querySelectorAll</code>.',
          },
          {
            text: 'Den kaster, fordi listen er låst.',
            why: 'Den er ikke låst, bare uendret.',
          },
          {
            text: 'Det kommer an på hvor du la elementet.',
            why: 'Plasseringen har ingenting å si. Listen ble laget ferdig da du spurte.',
          },
        ],
      },
      {
        q: 'Du setter <code>el.textContent = &#39;&lt;b&gt;hei&lt;/b&gt;&#39;</code>. Hva ser brukeren?',
        answer: 2,
        options: [
          {
            text: 'Ordet «hei» i fet skrift.',
            why: 'Det ville krevd <code>innerHTML</code>. <code>textContent</code> lager ikke elementer.',
          },
          {
            text: 'Ingenting &mdash; taggen blir fjernet.',
            why: 'Ingenting fjernes. Alle tegnene blir stående.',
          },
          {
            text: 'Tegnene <code>&lt;b&gt;hei&lt;/b&gt;</code>, slik de står.',
            why: 'Teksten settes som tekst. <code>el.children.length</code> er 0, og <code>innerHTML</code> viser det hele omskrevet med entiteter. Det er nettopp derfor <code>textContent</code> er trygt for fremmed innhold.',
          },
          {
            text: 'En feilmelding om ugyldig oppmerking.',
            why: 'Ingenting tolkes som oppmerking, så det finnes ingenting å klage på.',
          },
        ],
      },
      {
        q: 'Er <code>innerHTML</code> trygt fordi en <code>&lt;script&gt;</code>-tagg ikke kjører?',
        answer: 3,
        options: [
          {
            text: 'Ja &mdash; skript er den eneste måten å kjøre kode på.',
            why: 'Det er ikke den eneste måten, og det er hele problemet.',
          },
          {
            text: 'Ja, så lenge du fjerner <code>&lt;script&gt;</code> først.',
            why: 'Du trenger ikke fjerne den &mdash; den kjører uansett ikke. Og det hjelper ikke.',
          },
          {
            text: 'Nei, fordi <code>&lt;script&gt;</code> faktisk kjører.',
            why: 'Den kjører ikke. Påstanden i seg selv er riktig; det er konklusjonen som ikke holder.',
          },
          {
            text: 'Nei &mdash; en hendelsesbehandler, for eksempel <code>onerror</code> på et bilde, kjører utmerket.',
            why: 'At <code>&lt;script&gt;</code> ikke kjører, er sant og gir falsk trygghet. <code>&lt;img src=x onerror=...&gt;</code> kjører. Kom innholdet fra en person, bruk <code>textContent</code>.',
          },
        ],
      },
      {
        q: 'Hva er forskjellen på <code>append</code> og <code>appendChild</code> når du sender inn en tekststreng?',
        answer: 1,
        options: [
          {
            text: 'Begge lager en tekstnode.',
            why: 'Bare den ene gjør det.',
          },
          {
            text: '<code>append</code> lager en tekstnode; <code>appendChild</code> kaster en TypeError.',
            why: '<code>append</code> tar både noder og tekst, og flere om gangen. <code>appendChild</code> tar nøyaktig én node, og returnerer den.',
          },
          {
            text: 'Begge kaster &mdash; du må lage noden selv.',
            why: 'Det måtte du før. <code>append</code> gjør det for deg.',
          },
          {
            text: '<code>appendChild</code> gjør om teksten til HTML.',
            why: 'Ingen av dem tolker tekst som oppmerking. Det er <code>innerHTML</code> som gjør det.',
          },
        ],
      },
      {
        q: 'Et skript i <code>&lt;head&gt;</code> finner ingenting &mdash; alle oppslag gir <code>null</code>. Hva er den beste løsningen?',
        answer: 2,
        options: [
          {
            text: 'Vente med <code>setTimeout(fn, 0)</code>.',
            why: 'Det virker som regel ved et uhell, og det er ikke en garanti. Det finnes tre ordentlige svar.',
          },
          {
            text: 'Bytte <code>getElementById</code> med <code>querySelector</code>.',
            why: 'Begge gir <code>null</code> like fullt. Problemet er ikke oppslaget, men tidspunktet.',
          },
          {
            text: 'Legge til <code>defer</code> på skriptet.',
            why: 'Da lastes det med én gang, men kjøres først når dokumentet er lest ferdig. Alternativene er skriptet nederst i <code>&lt;body&gt;</code>, eller å vente på <code>DOMContentLoaded</code>.',
          },
          {
            text: 'Flytte elementene opp i <code>&lt;head&gt;</code>.',
            why: 'Synlig innhold hører hjemme i <code>&lt;body&gt;</code> (leksjon 1 i HTML-sporet).',
          },
        ],
      },
    ],

    en: [
      {
        q: 'What does <code>document.getElementById(&#39;nothere&#39;)</code> give?',
        answer: 1,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Close, but not the same. The distinction matters when you check with <code>===</code>.',
          },
          {
            text: '<code>null</code>',
            why: 'Both lookups give <code>null</code> when they find nothing. Which is why "cannot read properties of null" is the commonest error in frontend work — the answer was not checked.',
          },
          {
            text: 'An empty list',
            why: 'That is what <code>querySelectorAll</code> gives. This one gives one element or nothing.',
          },
          {
            text: 'An error',
            why: 'It does not throw. It politely reports that it found nothing.',
          },
        ],
      },
      {
        q: 'You take <code>querySelectorAll(&#39;.x&#39;)</code> and then add a new element with class <code>x</code>. What does the list say?',
        answer: 0,
        options: [
          {
            text: 'The same count as before — it is a snapshot.',
            why: 'Measured: 2 before and 2 after. <code>querySelectorAll</code> gives a <code>NodeList</code> that does not update. <code>getElementsByClassName</code> went from 2 to 3 in the same test.',
          },
          {
            text: 'One more — the list is live.',
            why: 'That applies to <code>getElementsByClassName</code>, not <code>querySelectorAll</code>.',
          },
          {
            text: 'It throws, because the list is frozen.',
            why: 'It is not frozen, merely unchanged.',
          },
          {
            text: 'It depends where you put the element.',
            why: 'Placement makes no difference. The list was finished the moment you asked.',
          },
        ],
      },
      {
        q: 'You set <code>el.textContent = &#39;&lt;b&gt;hei&lt;/b&gt;&#39;</code>. What does the user see?',
        answer: 2,
        options: [
          {
            text: 'The word "hei" in bold.',
            why: 'That would need <code>innerHTML</code>. <code>textContent</code> does not create elements.',
          },
          {
            text: 'Nothing — the tag is stripped.',
            why: 'Nothing is stripped. Every character stays.',
          },
          {
            text: 'The characters <code>&lt;b&gt;hei&lt;/b&gt;</code>, exactly as written.',
            why: 'The text is set as text. <code>el.children.length</code> is 0, and <code>innerHTML</code> shows the whole thing escaped as entities. Which is exactly why <code>textContent</code> is safe for foreign content.',
          },
          {
            text: 'An error about invalid markup.',
            why: 'Nothing is read as markup, so there is nothing to complain about.',
          },
        ],
      },
      {
        q: 'Is <code>innerHTML</code> safe because a <code>&lt;script&gt;</code> tag does not run?',
        answer: 3,
        options: [
          {
            text: 'Yes — scripts are the only way to run code.',
            why: 'They are not the only way, and that is the whole problem.',
          },
          {
            text: 'Yes, as long as you strip <code>&lt;script&gt;</code> first.',
            why: 'You do not need to strip it — it does not run anyway. And it does not help.',
          },
          {
            text: 'No, because <code>&lt;script&gt;</code> actually does run.',
            why: 'It does not run. The claim itself is correct; it is the conclusion that fails.',
          },
          {
            text: 'No — an event handler, such as <code>onerror</code> on an image, runs perfectly well.',
            why: 'That <code>&lt;script&gt;</code> does not run is true and gives false comfort. <code>&lt;img src=x onerror=...&gt;</code> executes. If the content came from a person, use <code>textContent</code>.',
          },
        ],
      },
      {
        q: 'What is the difference between <code>append</code> and <code>appendChild</code> when you pass a string?',
        answer: 1,
        options: [
          {
            text: 'Both make a text node.',
            why: 'Only one of them does.',
          },
          {
            text: '<code>append</code> makes a text node; <code>appendChild</code> throws a TypeError.',
            why: '<code>append</code> takes nodes and text, several at a time. <code>appendChild</code> takes exactly one node, and returns it.',
          },
          {
            text: 'Both throw — you have to make the node yourself.',
            why: 'You used to have to. <code>append</code> does it for you.',
          },
          {
            text: '<code>appendChild</code> turns the string into HTML.',
            why: 'Neither reads text as markup. That is <code>innerHTML</code>.',
          },
        ],
      },
      {
        q: 'A script in <code>&lt;head&gt;</code> finds nothing — every lookup gives <code>null</code>. What is the best fix?',
        answer: 2,
        options: [
          {
            text: 'Wait with <code>setTimeout(fn, 0)</code>.',
            why: 'It usually works by accident, and it is not a guarantee. There are three proper answers.',
          },
          {
            text: 'Swap <code>getElementById</code> for <code>querySelector</code>.',
            why: 'Both give <code>null</code> just the same. The problem is not the lookup but the moment.',
          },
          {
            text: 'Add <code>defer</code> to the script.',
            why: 'Then it downloads immediately but runs only once the document has been parsed. The alternatives are the script at the end of <code>&lt;body&gt;</code>, or waiting for <code>DOMContentLoaded</code>.',
          },
          {
            text: 'Move the elements up into <code>&lt;head&gt;</code>.',
            why: 'Visible content belongs in <code>&lt;body&gt;</code> (lesson 1 of the HTML track).',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Що дасть <code>document.getElementById(&#39;nothere&#39;)</code>?',
        answer: 1,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Близько, але не те саме. Ця відмінність важить, коли ви перевіряєте через <code>===</code>.',
          },
          {
            text: '<code>null</code>',
            why: 'Обидва пошуки дають <code>null</code>, коли нічого не знайшли. Саме тому «cannot read properties of null» — найпоширеніша помилка у фронтенді: відповідь не перевірили.',
          },
          {
            text: 'Порожній список',
            why: 'Це те, що дає <code>querySelectorAll</code>. Цей дає один елемент або нічого.',
          },
          {
            text: 'Помилку',
            why: 'Він не кидає. Він чемно повідомляє, що нічого не знайшов.',
          },
        ],
      },
      {
        q: 'Ви взяли <code>querySelectorAll(&#39;.x&#39;)</code>, а потім додали новий елемент із класом <code>x</code>. Що каже список?',
        answer: 0,
        options: [
          {
            text: 'Стільки ж, скільки й раніше — це знімок.',
            why: 'Виміряно: 2 до і 2 після. <code>querySelectorAll</code> дає <code>NodeList</code>, який не оновлюється. <code>getElementsByClassName</code> у тому самому тесті пішов з 2 на 3.',
          },
          {
            text: 'На один більше — список живий.',
            why: 'Це стосується <code>getElementsByClassName</code>, а не <code>querySelectorAll</code>.',
          },
          {
            text: 'Він кине помилку, бо список заморожено.',
            why: 'Він не заморожений, просто незмінний.',
          },
          {
            text: 'Залежить від того, куди ви поклали елемент.',
            why: 'Розташування не має значення. Список було створено остаточно тієї миті, коли ви спитали.',
          },
        ],
      },
      {
        q: 'Ви задаєте <code>el.textContent = &#39;&lt;b&gt;hei&lt;/b&gt;&#39;</code>. Що побачить користувач?',
        answer: 2,
        options: [
          {
            text: 'Слово «hei» жирним.',
            why: 'Для цього потрібен <code>innerHTML</code>. <code>textContent</code> не створює елементів.',
          },
          {
            text: 'Нічого — тег вирізали.',
            why: 'Нічого не вирізають. Усі символи лишаються.',
          },
          {
            text: 'Символи <code>&lt;b&gt;hei&lt;/b&gt;</code> саме так, як написано.',
            why: 'Текст задано як текст. <code>el.children.length</code> дорівнює 0, а <code>innerHTML</code> показує все екранованим сутностями. Саме тому <code>textContent</code> безпечний для чужого вмісту.',
          },
          {
            text: 'Помилку про недійсну розмітку.',
            why: 'Нічого не читається як розмітка, тож нема на що скаржитися.',
          },
        ],
      },
      {
        q: 'Чи безпечний <code>innerHTML</code> через те, що тег <code>&lt;script&gt;</code> не виконується?',
        answer: 3,
        options: [
          {
            text: 'Так — скрипти є єдиним способом виконати код.',
            why: 'Вони не єдиний спосіб, і в цьому вся проблема.',
          },
          {
            text: 'Так, якщо спершу вирізати <code>&lt;script&gt;</code>.',
            why: 'Вирізати не треба — він однаково не виконається. І це не допомагає.',
          },
          {
            text: 'Ні, бо <code>&lt;script&gt;</code> насправді виконується.',
            why: 'Він не виконується. Саме твердження правильне; хибний висновок.',
          },
          {
            text: 'Ні — обробник події, наприклад <code>onerror</code> на зображенні, виконується чудово.',
            why: 'Те, що <code>&lt;script&gt;</code> не виконується, — правда, яка дає оманливий спокій. <code>&lt;img src=x onerror=...&gt;</code> виконується. Якщо вміст надійшов від людини, беріть <code>textContent</code>.',
          },
        ],
      },
      {
        q: 'Яка різниця між <code>append</code> і <code>appendChild</code>, коли ви передаєте рядок?',
        answer: 1,
        options: [
          {
            text: 'Обидва створять текстовий вузол.',
            why: 'Це робить лише один із них.',
          },
          {
            text: '<code>append</code> створить текстовий вузол; <code>appendChild</code> кине TypeError.',
            why: '<code>append</code> бере і вузли, і текст, і кілька за раз. <code>appendChild</code> бере рівно один вузол і повертає його.',
          },
          {
            text: 'Обидва кинуть — вузол треба створити самому.',
            why: 'Колись доводилося. <code>append</code> робить це за вас.',
          },
          {
            text: '<code>appendChild</code> перетворить рядок на HTML.',
            why: 'Жоден із них не читає текст як розмітку. Це робить <code>innerHTML</code>.',
          },
        ],
      },
      {
        q: 'Скрипт у <code>&lt;head&gt;</code> нічого не знаходить — кожен пошук дає <code>null</code>. Яке виправлення найкраще?',
        answer: 2,
        options: [
          {
            text: 'Зачекати через <code>setTimeout(fn, 0)</code>.',
            why: 'Зазвичай спрацьовує випадково, і гарантією не є. Є три належні відповіді.',
          },
          {
            text: 'Замінити <code>getElementById</code> на <code>querySelector</code>.',
            why: 'Обидва однаково дадуть <code>null</code>. Проблема не в пошуку, а в моменті.',
          },
          {
            text: 'Додати <code>defer</code> до скрипта.',
            why: 'Тоді він завантажиться одразу, а виконається лише після розбору документа. Альтернативи — скрипт у кінці <code>&lt;body&gt;</code> або очікування <code>DOMContentLoaded</code>.',
          },
          {
            text: 'Перенести елементи вгору, у <code>&lt;head&gt;</code>.',
            why: 'Видимий вміст належить до <code>&lt;body&gt;</code> (урок 1 треку HTML).',
          },
        ],
      },
    ],
  },
});
