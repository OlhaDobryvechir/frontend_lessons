/*
 * Content of JS lesson 06 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson uses await pragmatically as "wait here" and owns
 * JSON, methods, Content-Type and CORS. Promises and the event loop are
 * lesson 7, which is where await is actually explained.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'HTTP-kall, json, fetch(), metoder, content-type, CORS',
      kicker: 'Leksjon 6 &middot; Javascript',
      title: 'HTTP-kall, json, fetch(), metoder, content-type, CORS',
      lead: 'Å hente data fra en server. Tre linjer kode, og fire ting som kan gå galt uten at noen sier fra. Vi bruker <code>await</code> her som «vent her» &mdash; hvordan det virker, er neste leksjon.',

      's.req.t': 'Hva et kall faktisk er',
      's.req.d':
        '<p>En HTTP-forespørsel er fire ting: en metode, en adresse, noen headere og eventuelt en kropp. Svaret har samme form, men med et statusnummer i stedet for en metode.</p>' +
        '<p>Adressen kjenner du fra leksjon 8 i HTML-sporet &mdash; og merk at fragmentet etter <code>#</code> aldri sendes. Serveren ser stien og spørrestrengen, ikke resten.</p>' +
        '<p>Alt <code>fetch()</code> gjør, er å sette sammen denne pakken og ta imot svaret. Kjenner du formen, er resten av leksjonen bare navn på feltene.</p>',

      's.fetch.t': 'Det korteste nyttige kallet',
      's.fetch.d':
        '<p><code>fetch()</code> tar en adresse og eventuelt et objekt med innstillinger. Uten innstillinger blir det en <code>GET</code>.</p>' +
        '<p>Legg merke til at det står <code>await</code> to ganger. Det er ikke en dobbeltsjekk: det er to forskjellige ventinger. Den første venter til svaret begynner å komme &mdash; status og headere er på plass. Den andre venter til kroppen er lest ferdig og tolket.</p>' +
        '<p>Det betyr at du kan se på <code>res.status</code> før du i det hele tatt har lastet ned innholdet. På et stort svar er det forskjellen på å oppdage en feil med én gang og å laste ned en megabyte først.</p>' +
        '<p><code>await</code> brukes her uten forklaring. Det betyr «vent til dette er ferdig, og gi meg resultatet». Hva som skjer under, og hvorfor funksjonen må være <code>async</code>, er hele neste leksjon.</p>',

      's.ok.t': 'Den linjen alle glemmer',
      's.ok.d':
        '<p>Dette er den viktigste seksjonen i leksjonen. <code>fetch()</code> feiler ikke når serveren svarer 404 eller 500.</p>' +
        '<p>Tenk på hvorfor: kallet lykkes. Du spurte, du fikk svar, svaret kom fram. At svaret var «finnes ikke», er informasjon &mdash; ikke en feil i overføringen. Derfor går koden din videre som om alt gikk bra, og prøver å lese en kundeliste ut av en feilmelding.</p>' +
        '<p><code>fetch()</code> avviser bare når det ikke kom noe svar i det hele tatt: ingen nettforbindelse, ukjent vertsnavn, eller et kall nettleseren stoppet av CORS-grunner.</p>' +
        '<p>Derfor hører <code>if (!res.ok)</code> hjemme i hvert eneste kall. <code>res.ok</code> er sann for statuser fra 200 til 299, og ikke ellers.</p>',

      's.json.t': 'JSON er mindre enn Javascript',
      's.json.d':
        '<p>JSON ser ut som Javascript og er et mindre format. Det kan bare holde tekst, tall, boolske verdier, <code>null</code>, lister og enkle objekter &mdash; og alt annet blir borte på veien.</p>' +
        '<p><code>undefined</code> og funksjoner forsvinner fra objekter helt lydløst. I en liste kan de ikke forsvinne, for det ville flyttet på de andre, så de blir til <code>null</code>. <code>NaN</code> og <code>Infinity</code> blir også <code>null</code>.</p>' +
        '<p>To tilfeller er verdt å kjenne særskilt. Et <code>Map</code> eller et <code>Set</code> blir til <code>{}</code> &mdash; tomt, uten en eneste advarsel. Og en <code>BigInt</code> kaster i stedet.</p>' +
        '<p>Til slutt: ingenting gjenopprettes på vei tilbake. En dato ble til tekst da den ble sendt, og den er fortsatt tekst når den kommer fram. Vil du ha en dato igjen, må du lage den selv.</p>' +
        '<p>Og formatet er strengere enn språket: nøkler må stå i doble anførselstegn, og et komma til slutt er en feil.</p>',

      's.methods.t': 'Metodene, og hva de lover',
      's.methods.d':
        '<p>Metoden sier hva slags handling dette er. Serveren kan velge å ignorere skillet, men resten av verden &mdash; nettlesere, mellomlagre, proxyer, verktøy &mdash; gjør det ikke.</p>' +
        '<p><code>GET</code> henter og skal ikke endre noe. Derfor kan den mellomlagres og gjentas fritt, og derfor kan den ikke ha en kropp i det hele tatt: prøver du, får du en feil før kallet sendes.</p>' +
        '<p>Det praktisk viktigste skillet er om det gjør noe nytt å gjenta kallet. <code>PUT</code> og <code>DELETE</code> er idempotente: send dem to ganger, og resultatet er som om du sendte dem én gang. <code>POST</code> er det ikke &mdash; to kall lager to kunder. Det er derfor et dobbeltklikk på en send-knapp er et ekte problem og ikke bare et kosmetisk et.</p>' +
        '<p><code>OPTIONS</code> er den du sjelden skriver selv. Nettleseren sender den på egen hånd, og den er tema i siste seksjon.</p>',

      's.ct.t': 'Å si hva du sender',
      's.ct.d':
        '<p>En kropp er bare bytes. <code>Content-Type</code> er det som forteller mottakeren hvordan de skal leses.</p>' +
        '<p>Den vanligste feilen i hele leksjonen er å sende <code>JSON.stringify(...)</code> uten å sette headeren. Kroppen er riktig, men serveren tror det er ren tekst, og avviser den som ugyldig. Feilmeldingen peker som regel på innholdet, ikke på headeren, og da leter man lenge.</p>' +
        '<p>Det finnes ett tilfelle der du skal la være å sette den: sender du et <code>FormData</code>, setter nettleseren headeren selv &mdash; inkludert en tilfeldig grensemarkør som skiller feltene, og som du umulig kan vite på forhånd. Setter du headeren manuelt der, ødelegger du kallet.</p>' +
        '<p><code>Accept</code> er den andre veien: den sier hva du helst vil ha tilbake.</p>',

      's.cors.t': 'Hvorfor nettleseren spør først',
      's.cors.d':
        '<p>Samme opphav betyr samme protokoll, vert og port &mdash; nøyaktig som for rammer i leksjon 9 i HTML-sporet. Går kallet et annet sted, blander nettleseren seg inn.</p>' +
        '<p>Grunnen er at kallet ditt går ut med brukerens informasjonskapsler. Uten en regel kunne en hvilken som helst side bedt nettleseren din om å hente kontoutskriften din fra banken og lese svaret. CORS er serverens mulighet til å si hvem som får lov.</p>' +
        '<p>For alt utenom de enkleste kallene sender nettleseren først en <code>OPTIONS</code>-forespørsel og spør. Kommer det ikke et tydelig ja, blir det egentlige kallet aldri sendt.</p>' +
        '<p>Det som utløser den ekstra runden, overrasker mange: <code>Content-Type: application/json</code> holder. Det er ikke en av de tre typene som regnes som enkle, så et helt vanlig JSON-kall koster to turer til serveren. Det samme gjelder <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code> og enhver header du setter selv.</p>' +
        '<p>Og skal informasjonskapslene med, holder det ikke at serveren sier <code>*</code>. Da må den navngi opphavet ditt. Det er med vilje: en tillatelse som gjelder alle, skal ikke kunne gjelde noens innlogging.</p>' +
        '<p>Til slutt, siden det koster mange timer hvert år: CORS er en regel i nettleseren, ikke i serveren. Det samme kallet fra et terminalvindu virker utmerket. At <code>curl</code> får svar, betyr ikke at siden din vil få det.</p>',

      's.note':
        '<p>Kortversjonen. Sjekk alltid <code>res.ok</code> &mdash; en 404 er ikke en feil for <code>fetch</code>. JSON mister <code>undefined</code>, funksjoner, <code>Map</code> og <code>Set</code>, og gir deg aldri datoene tilbake. <code>GET</code> kan ikke ha kropp; <code>POST</code> kan gjentas ved uhell. Sett <code>Content-Type</code> når du sender JSON, og la være når du sender <code>FormData</code>. Og CORS skjer i nettleseren: <code>curl</code> beviser ingenting.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Http requests, json, fetch(), methods, content-type, CORS',
      kicker: 'Lesson 6 &middot; Javascript',
      title: 'Http requests, json, fetch(), methods, content-type, CORS',
      lead: 'Getting data from a server. Three lines of code, and four things that can go wrong without anyone telling you. We use <code>await</code> here as "wait here" — how it works is the next lesson.',

      's.req.t': 'What a request actually is',
      's.req.d':
        '<p>An HTTP request is four things: a method, an address, some headers and possibly a body. The response has the same shape, but with a status number instead of a method.</p>' +
        '<p>You know the address from lesson 8 of the HTML track — and note that the fragment after <code>#</code> is never sent. The server sees the path and the query, not the rest.</p>' +
        '<p>All <code>fetch()</code> does is assemble this package and receive the answer. Once you know the shape, the rest of the lesson is just names for the fields.</p>',

      's.fetch.t': 'The shortest useful call',
      's.fetch.d':
        '<p><code>fetch()</code> takes an address and optionally an object of settings. With no settings you get a <code>GET</code>.</p>' +
        '<p>Notice that <code>await</code> appears twice. That is not a double check: they are two different waits. The first waits until the response starts arriving — status and headers are in. The second waits until the body has been read to the end and parsed.</p>' +
        '<p>Which means you can look at <code>res.status</code> before you have downloaded the content at all. On a large response that is the difference between spotting a failure immediately and downloading a megabyte first.</p>' +
        '<p><code>await</code> is used here without explanation. It means "wait until this is finished, and give me the result". What happens underneath, and why the function has to be <code>async</code>, is the whole of the next lesson.</p>',

      's.ok.t': 'The line everyone forgets',
      's.ok.d':
        '<p>This is the most important section in the lesson. <code>fetch()</code> does not fail when the server answers 404 or 500.</p>' +
        '<p>Think about why: the call succeeded. You asked, you got an answer, the answer arrived. That the answer was "not found" is information — not a failure of the transfer. So your code carries on as though all was well, and tries to read a customer list out of an error message.</p>' +
        '<p><code>fetch()</code> only rejects when no answer came at all: no network, an unknown host name, or a call the browser refused on CORS grounds.</p>' +
        '<p>Which is why <code>if (!res.ok)</code> belongs in every single call. <code>res.ok</code> is true for statuses from 200 to 299, and not otherwise.</p>',

      's.json.t': 'JSON is smaller than Javascript',
      's.json.d':
        '<p>JSON looks like Javascript and is a smaller format. It can hold only text, numbers, booleans, <code>null</code>, lists and plain objects — and everything else is lost on the way.</p>' +
        '<p><code>undefined</code> and functions disappear from objects entirely silently. In a list they cannot disappear, because that would shift the others, so they become <code>null</code>. <code>NaN</code> and <code>Infinity</code> also become <code>null</code>.</p>' +
        '<p>Two cases are worth knowing specifically. A <code>Map</code> or a <code>Set</code> becomes <code>{}</code> — empty, without a single warning. And a <code>BigInt</code> throws instead.</p>' +
        '<p>Finally: nothing is restored on the way back. A date became text when it was sent, and it is still text when it arrives. If you want a date again, you have to make one.</p>' +
        '<p>And the format is stricter than the language: keys must be in double quotes, and a trailing comma is an error.</p>',

      's.methods.t': 'The methods, and what they promise',
      's.methods.d':
        '<p>The method says what kind of action this is. A server may choose to ignore the distinction, but the rest of the world — browsers, caches, proxies, tooling — does not.</p>' +
        '<p><code>GET</code> fetches and is not meant to change anything. That is why it can be cached and repeated freely, and why it cannot have a body at all: try it and you get an error before the call is even sent.</p>' +
        '<p>The distinction that matters most in practice is whether repeating the call does anything new. <code>PUT</code> and <code>DELETE</code> are idempotent: send them twice and the result is as if you sent them once. <code>POST</code> is not — two calls create two customers. Which is why a double click on a submit button is a real problem and not merely a cosmetic one.</p>' +
        '<p><code>OPTIONS</code> is the one you rarely write yourself. The browser sends it on its own, and it is the subject of the last section.</p>',

      's.ct.t': 'Saying what you are sending',
      's.ct.d':
        '<p>A body is just bytes. <code>Content-Type</code> is what tells the recipient how to read them.</p>' +
        '<p>The commonest mistake in this whole lesson is sending <code>JSON.stringify(...)</code> without setting the header. The body is correct, but the server thinks it is plain text and rejects it as invalid. The error message usually points at the content rather than the header, so people search for a long time.</p>' +
        '<p>There is one case where you should leave it out: when sending a <code>FormData</code>, the browser sets the header itself — including a random boundary marker separating the fields, which you could not possibly know in advance. Set the header manually there and you break the call.</p>' +
        '<p><code>Accept</code> is the other direction: it says what you would prefer to get back.</p>',

      's.cors.t': 'Why the browser asks first',
      's.cors.d':
        '<p>Same origin means same scheme, host and port — exactly as for frames in lesson 9 of the HTML track. If the call goes anywhere else, the browser gets involved.</p>' +
        '<p>The reason is that your call goes out carrying the user cookies. Without a rule, any page could ask your browser to fetch your bank statement and read the answer. CORS is the server chance to say who is allowed.</p>' +
        '<p>For anything beyond the simplest calls, the browser first sends an <code>OPTIONS</code> request and asks. If a clear yes does not come back, the real call is never sent at all.</p>' +
        '<p>What triggers that extra round trip surprises people: <code>Content-Type: application/json</code> is enough. It is not one of the three types counted as simple, so a perfectly ordinary JSON call costs two trips to the server. The same goes for <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code> and any header you set yourself.</p>' +
        '<p>And if cookies are to go along, the server saying <code>*</code> is not enough. It has to name your origin. That is deliberate: a permission granted to everyone must not be able to cover someone login.</p>' +
        '<p>Finally, because it costs many hours every year: CORS is a rule in the browser, not in the server. The same call from a terminal works perfectly. That <code>curl</code> gets an answer does not mean your page will.</p>',

      's.note':
        '<p>The short version. Always check <code>res.ok</code> — a 404 is not an error to <code>fetch</code>. JSON loses <code>undefined</code>, functions, <code>Map</code> and <code>Set</code>, and never gives your dates back. <code>GET</code> cannot have a body; <code>POST</code> can be repeated by accident. Set <code>Content-Type</code> when sending JSON, and leave it alone when sending <code>FormData</code>. And CORS happens in the browser: <code>curl</code> proves nothing.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'HTTP-запити, json, fetch(), методи, content-type, CORS',
      kicker: 'Урок 6 &middot; Javascript',
      title: 'HTTP-запити, json, fetch(), методи, content-type, CORS',
      lead: 'Отримати дані з сервера. Три рядки коду і чотири речі, які можуть піти не так, і ніхто про це не скаже. <code>await</code> ми тут вживаємо як «зачекай тут» — як він працює, буде в наступному уроці.',

      's.req.t': 'Чим насправді є запит',
      's.req.d':
        '<p>HTTP-запит — це чотири речі: метод, адреса, кілька заголовків і, можливо, тіло. Відповідь має ту саму форму, але з номером статусу замість методу.</p>' +
        '<p>Адресу ви знаєте з уроку 8 у треку HTML — і зверніть увагу, що фрагмент після <code>#</code> ніколи не надсилається. Сервер бачить шлях і рядок запиту, а не решту.</p>' +
        '<p>Усе, що робить <code>fetch()</code>, — це збирає цей пакет і приймає відповідь. Щойно ви знаєте форму, решта уроку — просто назви полів.</p>',

      's.fetch.t': 'Найкоротший корисний виклик',
      's.fetch.d':
        '<p><code>fetch()</code> приймає адресу і, за потреби, об’єкт налаштувань. Без налаштувань вийде <code>GET</code>.</p>' +
        '<p>Зверніть увагу, що <code>await</code> трапляється двічі. Це не подвійна перевірка: це два різні очікування. Перше чекає, доки відповідь почне надходити — статус і заголовки на місці. Друге чекає, доки тіло буде прочитане до кінця і розібране.</p>' +
        '<p>Отже, ви можете подивитися на <code>res.status</code> ще до того, як завантажили вміст. На великій відповіді це різниця між тим, щоб одразу помітити помилку, і тим, щоб спершу завантажити мегабайт.</p>' +
        '<p><code>await</code> вжито тут без пояснень. Він означає «зачекай, доки це завершиться, і дай мені результат». Що відбувається під капотом і чому функція має бути <code>async</code> — це весь наступний урок.</p>',

      's.ok.t': 'Рядок, який забувають усі',
      's.ok.d':
        '<p>Це найважливіший розділ уроку. <code>fetch()</code> не падає, коли сервер відповідає 404 або 500.</p>' +
        '<p>Подумайте чому: виклик удався. Ви запитали, ви отримали відповідь, відповідь дійшла. Те, що відповіддю було «не знайдено», є інформацією, а не збоєм передавання. Тож ваш код іде далі, ніби все гаразд, і намагається вичитати список клієнтів із повідомлення про помилку.</p>' +
        '<p><code>fetch()</code> відхиляється лише тоді, коли відповіді не було взагалі: немає мережі, невідоме ім’я хоста або браузер відмовив із причин CORS.</p>' +
        '<p>Саме тому <code>if (!res.ok)</code> має бути в кожному без винятку виклику. <code>res.ok</code> істинний для статусів від 200 до 299 і ні для яких інших.</p>',

      's.json.t': 'JSON менший за Javascript',
      's.json.d':
        '<p>JSON виглядає як Javascript і є меншим форматом. Він може вмістити лише текст, числа, булеві значення, <code>null</code>, списки та прості об’єкти — а все інше губиться дорогою.</p>' +
        '<p><code>undefined</code> і функції зникають з об’єктів цілком мовчки. У списку вони зникнути не можуть, бо це зсунуло б інші, тож вони стають <code>null</code>. <code>NaN</code> та <code>Infinity</code> теж стають <code>null</code>.</p>' +
        '<p>Два випадки варто знати окремо. <code>Map</code> або <code>Set</code> перетворюється на <code>{}</code> — порожній, без жодного попередження. А <code>BigInt</code> натомість кидає помилку.</p>' +
        '<p>І нарешті: у зворотний бік нічого не відновлюється. Дата стала текстом, коли її надсилали, і лишається текстом, коли надходить. Якщо потрібна дата — створіть її самі.</p>' +
        '<p>А формат суворіший за мову: ключі мають бути в подвійних лапках, а кома наприкінці є помилкою.</p>',

      's.methods.t': 'Методи і те, що вони обіцяють',
      's.methods.d':
        '<p>Метод каже, якою дією це є. Сервер може знехтувати цією різницею, але решта світу — браузери, кеші, проксі, інструменти — ні.</p>' +
        '<p><code>GET</code> отримує і не має нічого змінювати. Саме тому його можна кешувати й вільно повторювати, і саме тому він узагалі не може мати тіла: спробуєте — дістанете помилку ще до надсилання.</p>' +
        '<p>Найважливіша на практиці відмінність — чи робить повторення виклику щось нове. <code>PUT</code> і <code>DELETE</code> ідемпотентні: надішліть двічі, і результат такий самий, як від одного разу. <code>POST</code> — ні: два виклики створять двох клієнтів. Ось чому подвійний клік на кнопці надсилання є справжньою проблемою, а не лише косметичною.</p>' +
        '<p><code>OPTIONS</code> — той, який ви рідко пишете самі. Браузер надсилає його сам, і про це останній розділ.</p>',

      's.ct.t': 'Сказати, що саме ви надсилаєте',
      's.ct.d':
        '<p>Тіло — це просто байти. <code>Content-Type</code> — те, що каже отримувачу, як їх читати.</p>' +
        '<p>Найпоширеніша помилка в усьому цьому уроці — надіслати <code>JSON.stringify(...)</code>, не задавши заголовка. Тіло правильне, але сервер вважає його звичайним текстом і відхиляє як недійсне. Повідомлення про помилку зазвичай указує на вміст, а не на заголовок, тож шукають довго.</p>' +
        '<p>Є один випадок, коли заголовок ставити не треба: надсилаючи <code>FormData</code>, браузер задає його сам — разом із випадковою межовою позначкою, що розділяє поля і якої ви наперед знати не можете. Задасте заголовок вручну — зламаєте виклик.</p>' +
        '<p><code>Accept</code> — це у зворотний бік: він каже, що ви хотіли б дістати у відповідь.</p>',

      's.cors.t': 'Чому браузер питає спершу',
      's.cors.d':
        '<p>Те саме джерело означає ту саму схему, хост і порт — точно як для рамок в уроці 9 треку HTML. Якщо виклик іде кудись інде, браузер втручається.</p>' +
        '<p>Причина в тому, що ваш виклик іде разом із куками користувача. Без правила будь-яка сторінка могла б попросити ваш браузер дістати вашу банківську виписку і прочитати відповідь. CORS — це нагода сервера сказати, кому дозволено.</p>' +
        '<p>Для всього, крім найпростіших викликів, браузер спершу надсилає запит <code>OPTIONS</code> і питає. Якщо ясного «так» не надійде, справжній виклик не надсилається взагалі.</p>' +
        '<p>Те, що спричиняє цей додатковий обмін, багатьох дивує: досить <code>Content-Type: application/json</code>. Це не один із трьох типів, які вважають простими, тож цілком звичайний виклик JSON коштує двох походів до сервера. Те саме стосується <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code> і будь-якого заголовка, який ви задали самі.</p>' +
        '<p>А якщо мають піти куки, сервера з <code>*</code> недостатньо. Він має назвати саме ваше джерело. Це навмисно: дозвіл, виданий усім, не повинен мати змоги покрити чийсь вхід у систему.</p>' +
        '<p>І нарешті, бо це коштує багатьох годин щороку: CORS — це правило в браузері, а не в сервері. Той самий виклик із термінала працює чудово. Те, що <code>curl</code> дістає відповідь, не означає, що її дістане ваша сторінка.</p>',

      's.note':
        '<p>Коротко. Завжди перевіряйте <code>res.ok</code> — для <code>fetch</code> 404 не є помилкою. JSON втрачає <code>undefined</code>, функції, <code>Map</code> і <code>Set</code>, і ніколи не повертає ваших дат. <code>GET</code> не може мати тіла; <code>POST</code> можна повторити випадково. Задавайте <code>Content-Type</code> для JSON і не чіпайте його для <code>FormData</code>. А CORS стається в браузері: <code>curl</code> нічого не доводить.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Serveren svarer <code>404</code>. Hva gjør <code>await fetch(url)</code>?',
        answer: 1,
        options: [
          {
            text: 'Kaster en feil du kan fange med <code>try</code>.',
            why: 'Det er antakelsen som skaper mest feilsøking i denne leksjonen. Et svar kom fram, så kallet lyktes.',
          },
          {
            text: 'Returnerer et svar med <code>ok === false</code> og <code>status === 404</code>.',
            why: 'Overføringen gikk bra; det var innholdet du ikke likte. Derfor må du sjekke <code>res.ok</code> selv i hvert eneste kall.',
          },
          {
            text: 'Returnerer <code>null</code>.',
            why: 'Du får alltid et svarobjekt når serveren svarte.',
          },
          {
            text: 'Prøver på nytt automatisk.',
            why: '<code>fetch</code> prøver aldri på nytt av seg selv. Det må du eventuelt skrive.',
          },
        ],
      },
      {
        q: 'Hva blir <code>JSON.stringify({ m: new Map([[&#39;a&#39;, 1]]) })</code>?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;{"m":{"a":1}}&#39;</code>',
            why: 'Det ville krevd at <code>Map</code> ble oversatt til et objekt. JSON kjenner ikke <code>Map</code>.',
          },
          {
            text: 'En TypeError.',
            why: 'Det er hva <code>BigInt</code> gjør. <code>Map</code> feiler ikke &mdash; den forsvinner stille, som er verre.',
          },
          {
            text: '<code>&#39;{"m":{}}&#39;</code>',
            why: 'Et <code>Map</code> har ingen vanlige egenskaper, så det serialiseres som et tomt objekt. Ingen advarsel. Konverter selv, for eksempel med <code>Object.fromEntries()</code>.',
          },
          {
            text: '<code>&#39;{"m":[["a",1]]}&#39;</code>',
            why: 'Det er hva du får hvis du først gjør om til et array selv. JSON gjør det ikke for deg.',
          },
        ],
      },
      {
        q: 'Du sender <code>body: JSON.stringify(data)</code> og glemmer headeren. Hva skjer typisk?',
        answer: 0,
        options: [
          {
            text: 'Serveren leser kroppen som tekst og avviser den som ugyldig.',
            why: 'Kroppen er riktig, men uten <code>Content-Type: application/json</code> vet ikke serveren at den skal tolkes som JSON. Feilmeldingen peker som regel på innholdet, ikke på headeren.',
          },
          {
            text: '<code>fetch</code> kaster før kallet sendes.',
            why: 'Kallet sendes helt fint. Headeren er ikke påkrevd av nettleseren.',
          },
          {
            text: 'Nettleseren setter headeren selv.',
            why: 'Den gjør det for <code>FormData</code>, men ikke for en tekststreng du har laget.',
          },
          {
            text: 'Kroppen blir tom.',
            why: 'Kroppen sendes uendret. Det er tolkningen i den andre enden som svikter.',
          },
        ],
      },
      {
        q: 'Hvilket av disse kallene utløser en <code>OPTIONS</code>-forespørsel til et annet opphav?',
        answer: 3,
        options: [
          {
            text: 'En vanlig <code>GET</code> uten egne headere.',
            why: 'Det regnes som et enkelt kall og sendes direkte.',
          },
          {
            text: 'En <code>POST</code> med <code>Content-Type: text/plain</code>.',
            why: '<code>text/plain</code> er en av de tre enkle typene, så den slipper unna.',
          },
          {
            text: 'En <code>POST</code> med et skjema som <code>FormData</code>.',
            why: '<code>multipart/form-data</code> er også en av de enkle typene.',
          },
          {
            text: 'En <code>POST</code> med <code>Content-Type: application/json</code>.',
            why: 'Nettopp den overrasker folk. <code>application/json</code> er ikke en enkel type, så et helt alminnelig JSON-kall koster to turer til serveren.',
          },
        ],
      },
      {
        q: 'Kallet virker med <code>curl</code>, men nettleseren blokkerer det med en CORS-feil. Hva forteller det deg?',
        answer: 2,
        options: [
          {
            text: 'Serveren er nede.',
            why: '<code>curl</code> fikk jo svar. Serveren svarer utmerket.',
          },
          {
            text: 'Adressen er feil.',
            why: 'Samme adresse virket fra terminalen.',
          },
          {
            text: 'Ingenting om serveren &mdash; CORS håndheves bare av nettleseren.',
            why: '<code>curl</code> bryr seg ikke om opphav og sender uten å spørre. At det virker der, sier bare at serveren svarer &mdash; ikke at den har gitt nettleseren din lov.',
          },
          {
            text: 'At du må bruke <code>POST</code> i stedet.',
            why: 'Metoden er ikke problemet. Tillatelsen er.',
          },
        ],
      },
      {
        q: 'Hvorfor er et dobbeltklikk på en «Lagre»-knapp farligere med <code>POST</code> enn med <code>PUT</code>?',
        answer: 1,
        options: [
          {
            text: 'Fordi <code>POST</code> er tregere.',
            why: 'Hastigheten har ingenting med saken å gjøre.',
          },
          {
            text: 'Fordi <code>POST</code> ikke er idempotent &mdash; to kall lager to ting.',
            why: '<code>PUT</code> setter ressursen til en bestemt tilstand, så to like kall gir samme resultat som ett. <code>POST</code> oppretter noe nytt hver gang.',
          },
          {
            text: 'Fordi <code>POST</code> ikke kan ha en kropp.',
            why: 'Det er <code>GET</code> som ikke kan ha kropp. <code>POST</code> er nettopp den som har en.',
          },
          {
            text: 'Fordi <code>POST</code> ikke mellomlagres.',
            why: 'Det stemmer, men det er ikke grunnen. Problemet er at handlingen gjentas.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'The server answers <code>404</code>. What does <code>await fetch(url)</code> do?',
        answer: 1,
        options: [
          {
            text: 'Throws an error you can catch with <code>try</code>.',
            why: 'That assumption causes more debugging than anything else in this lesson. A response arrived, so the call succeeded.',
          },
          {
            text: 'Returns a response with <code>ok === false</code> and <code>status === 404</code>.',
            why: 'The transfer went fine; it was the content you did not like. Which is why you have to check <code>res.ok</code> yourself in every single call.',
          },
          {
            text: 'Returns <code>null</code>.',
            why: 'You always get a response object when the server answered.',
          },
          {
            text: 'Retries automatically.',
            why: '<code>fetch</code> never retries on its own. You would have to write that.',
          },
        ],
      },
      {
        q: 'What is <code>JSON.stringify({ m: new Map([[&#39;a&#39;, 1]]) })</code>?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;{"m":{"a":1}}&#39;</code>',
            why: 'That would require <code>Map</code> to be translated into an object. JSON does not know <code>Map</code>.',
          },
          {
            text: 'A TypeError.',
            why: 'That is what <code>BigInt</code> does. <code>Map</code> does not fail — it disappears silently, which is worse.',
          },
          {
            text: '<code>&#39;{"m":{}}&#39;</code>',
            why: 'A <code>Map</code> has no ordinary properties, so it serialises as an empty object. No warning. Convert it yourself, for instance with <code>Object.fromEntries()</code>.',
          },
          {
            text: '<code>&#39;{"m":[["a",1]]}&#39;</code>',
            why: 'That is what you get if you convert to an array first. JSON will not do it for you.',
          },
        ],
      },
      {
        q: 'You send <code>body: JSON.stringify(data)</code> and forget the header. What typically happens?',
        answer: 0,
        options: [
          {
            text: 'The server reads the body as text and rejects it as invalid.',
            why: 'The body is correct, but without <code>Content-Type: application/json</code> the server does not know to parse it as JSON. The error usually points at the content rather than the header.',
          },
          {
            text: '<code>fetch</code> throws before the call is sent.',
            why: 'The call is sent perfectly happily. The browser does not require the header.',
          },
          {
            text: 'The browser sets the header itself.',
            why: 'It does that for <code>FormData</code>, but not for a string you built.',
          },
          {
            text: 'The body arrives empty.',
            why: 'The body is sent unchanged. It is the interpretation at the other end that fails.',
          },
        ],
      },
      {
        q: 'Which of these calls to another origin triggers an <code>OPTIONS</code> request?',
        answer: 3,
        options: [
          {
            text: 'An ordinary <code>GET</code> with no custom headers.',
            why: 'That counts as a simple call and is sent directly.',
          },
          {
            text: 'A <code>POST</code> with <code>Content-Type: text/plain</code>.',
            why: '<code>text/plain</code> is one of the three simple types, so it gets through.',
          },
          {
            text: 'A <code>POST</code> with a form as <code>FormData</code>.',
            why: '<code>multipart/form-data</code> is also one of the simple types.',
          },
          {
            text: 'A <code>POST</code> with <code>Content-Type: application/json</code>.',
            why: 'This is the one that surprises people. <code>application/json</code> is not a simple type, so a perfectly ordinary JSON call costs two trips to the server.',
          },
        ],
      },
      {
        q: 'The call works with <code>curl</code> but the browser blocks it with a CORS error. What does that tell you?',
        answer: 2,
        options: [
          {
            text: 'The server is down.',
            why: '<code>curl</code> got an answer. The server is responding perfectly well.',
          },
          {
            text: 'The address is wrong.',
            why: 'The same address worked from the terminal.',
          },
          {
            text: 'Nothing about the server — CORS is enforced only by the browser.',
            why: '<code>curl</code> does not care about origins and sends without asking. That it works there only says the server responds — not that it has given your browser permission.',
          },
          {
            text: 'That you should use <code>POST</code> instead.',
            why: 'The method is not the problem. The permission is.',
          },
        ],
      },
      {
        q: 'Why is a double click on a Save button more dangerous with <code>POST</code> than with <code>PUT</code>?',
        answer: 1,
        options: [
          {
            text: 'Because <code>POST</code> is slower.',
            why: 'Speed has nothing to do with it.',
          },
          {
            text: 'Because <code>POST</code> is not idempotent — two calls create two things.',
            why: '<code>PUT</code> sets the resource to a particular state, so two identical calls give the same result as one. <code>POST</code> creates something new each time.',
          },
          {
            text: 'Because <code>POST</code> cannot have a body.',
            why: 'It is <code>GET</code> that cannot have a body. <code>POST</code> is precisely the one that does.',
          },
          {
            text: 'Because <code>POST</code> is not cached.',
            why: 'True, but not the reason. The problem is that the action is repeated.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Сервер відповідає <code>404</code>. Що зробить <code>await fetch(url)</code>?',
        answer: 1,
        options: [
          {
            text: 'Кине помилку, яку можна зловити через <code>try</code>.',
            why: 'Це припущення спричиняє більше налагодження, ніж будь-що інше в цьому уроці. Відповідь надійшла, отже виклик удався.',
          },
          {
            text: 'Поверне відповідь із <code>ok === false</code> і <code>status === 404</code>.',
            why: 'Передавання пройшло добре; вам не сподобався вміст. Саме тому <code>res.ok</code> треба перевіряти самому в кожному виклику.',
          },
          {
            text: 'Поверне <code>null</code>.',
            why: 'Коли сервер відповів, ви завжди дістаєте об’єкт відповіді.',
          },
          {
            text: 'Автоматично повторить спробу.',
            why: '<code>fetch</code> ніколи не повторює сам. Це довелося б написати вам.',
          },
        ],
      },
      {
        q: 'Чим буде <code>JSON.stringify({ m: new Map([[&#39;a&#39;, 1]]) })</code>?',
        answer: 2,
        options: [
          {
            text: '<code>&#39;{"m":{"a":1}}&#39;</code>',
            why: 'Для цього <code>Map</code> мав би перетворитися на об’єкт. JSON не знає <code>Map</code>.',
          },
          {
            text: 'TypeError.',
            why: 'Так робить <code>BigInt</code>. <code>Map</code> не падає — він тихо зникає, і це гірше.',
          },
          {
            text: '<code>&#39;{"m":{}}&#39;</code>',
            why: 'У <code>Map</code> немає звичайних властивостей, тож він серіалізується як порожній об’єкт. Без попередження. Перетворюйте самі, наприклад через <code>Object.fromEntries()</code>.',
          },
          {
            text: '<code>&#39;{"m":[["a",1]]}&#39;</code>',
            why: 'Це те, що ви дістанете, якщо спершу самі перетворите на масив. JSON цього за вас не зробить.',
          },
        ],
      },
      {
        q: 'Ви надсилаєте <code>body: JSON.stringify(data)</code> і забуваєте заголовок. Що зазвичай стається?',
        answer: 0,
        options: [
          {
            text: 'Сервер читає тіло як текст і відхиляє його як недійсне.',
            why: 'Тіло правильне, але без <code>Content-Type: application/json</code> сервер не знає, що це треба розбирати як JSON. Повідомлення про помилку зазвичай указує на вміст, а не на заголовок.',
          },
          {
            text: '<code>fetch</code> кине помилку ще до надсилання.',
            why: 'Виклик надсилається цілком спокійно. Браузер цього заголовка не вимагає.',
          },
          {
            text: 'Браузер задасть заголовок сам.',
            why: 'Він робить це для <code>FormData</code>, але не для рядка, який ви побудували.',
          },
          {
            text: 'Тіло надійде порожнім.',
            why: 'Тіло надсилається без змін. Збій стається саме в тлумаченні на іншому кінці.',
          },
        ],
      },
      {
        q: 'Який із цих викликів до іншого джерела спричинить запит <code>OPTIONS</code>?',
        answer: 3,
        options: [
          {
            text: 'Звичайний <code>GET</code> без власних заголовків.',
            why: 'Це вважається простим викликом і надсилається напряму.',
          },
          {
            text: '<code>POST</code> із <code>Content-Type: text/plain</code>.',
            why: '<code>text/plain</code> — один із трьох простих типів, тож він проходить.',
          },
          {
            text: '<code>POST</code> із формою як <code>FormData</code>.',
            why: '<code>multipart/form-data</code> теж один із простих типів.',
          },
          {
            text: '<code>POST</code> із <code>Content-Type: application/json</code>.',
            why: 'Саме це людей і дивує. <code>application/json</code> не є простим типом, тож цілком звичайний виклик JSON коштує двох походів до сервера.',
          },
        ],
      },
      {
        q: 'Виклик працює через <code>curl</code>, але браузер блокує його з помилкою CORS. Про що це вам каже?',
        answer: 2,
        options: [
          {
            text: 'Сервер лежить.',
            why: '<code>curl</code> дістав відповідь. Сервер відповідає чудово.',
          },
          {
            text: 'Адреса неправильна.',
            why: 'Та сама адреса спрацювала з термінала.',
          },
          {
            text: 'Нічого про сервер — CORS запроваджує лише браузер.',
            why: '<code>curl</code> не переймається джерелами і надсилає, не питаючи. Те, що там працює, каже лише, що сервер відповідає, а не що він дав дозвіл вашому браузеру.',
          },
          {
            text: 'Що треба використати <code>POST</code>.',
            why: 'Проблема не в методі, а в дозволі.',
          },
        ],
      },
      {
        q: 'Чому подвійний клік на кнопці «Зберегти» небезпечніший із <code>POST</code>, ніж із <code>PUT</code>?',
        answer: 1,
        options: [
          {
            text: 'Бо <code>POST</code> повільніший.',
            why: 'Швидкість тут ні до чого.',
          },
          {
            text: 'Бо <code>POST</code> не ідемпотентний — два виклики створюють дві речі.',
            why: '<code>PUT</code> переводить ресурс у певний стан, тож два однакові виклики дають той самий результат, що й один. <code>POST</code> щоразу створює щось нове.',
          },
          {
            text: 'Бо <code>POST</code> не може мати тіла.',
            why: 'Тіла не може мати <code>GET</code>. <code>POST</code> — саме той, що його має.',
          },
          {
            text: 'Бо <code>POST</code> не кешується.',
            why: 'Це правда, але причина не в цьому. Проблема в тому, що дія повторюється.',
          },
        ],
      },
    ],
  },
});
