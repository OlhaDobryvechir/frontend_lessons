/*
 * Content of JS lesson 13 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: addresses. It picks up the # from HTML lesson 8 and the
 * UTF-8 bytes from HTML lesson 6; storage is lesson 14.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'window.location.href, URL, encodeURI, encodeURIComponent',
      kicker: 'Leksjon 13 &middot; Javascript',
      title: 'window.location.href, URL, encodeURI, encodeURIComponent',
      lead: 'Å lese adressen du står på, bygge en ny, og pakke inn tekst som skal ligge inni den &mdash; uten at den ødelegger adressen rundt seg.',

      's.loc.t': 'Adressen du står på',
      's.loc.d':
        '<p><code>window.location</code> er et objekt som beskriver siden du er på. <code>location.href</code> er hele adressen som tekst; resten er den samme adressen delt opp, så du slipper å klippe i strenger selv.</p>' +
        '<p>To detaljer som overrasker: <code>search</code> og <code>hash</code> har med tegnet foran seg, altså <code>?q=test&amp;side=2</code> og <code>#midt</code>, og <code>port</code> er en streng &mdash; <code>&#39;8099&#39;</code>, ikke tallet, og tom streng når det ikke står noe port i adressen.</p>' +
        '<p><code>host</code> har med porten, <code>hostname</code> har det ikke. <code>origin</code> er protokoll, vert og port til sammen, og det er nettopp den verdien som avgjør hva du får lov til å snakke med (leksjon 6 og leksjon 9 i HTML-sporet).</p>',

      's.nav.t': 'Å flytte seg',
      's.nav.d':
        '<p>Å skrive til <code>location.href</code> er å navigere. <code>location.assign()</code> gjør det samme. Begge legger igjen en oppføring i historikken: målt gikk <code>history.length</code> fra 3 til 4, og Tilbake tok deg til siden du kom fra.</p>' +
        '<p><code>location.replace()</code> bytter ut oppføringen i stedet. Målt ble <code>history.length</code> stående på 3, og Tilbake hoppet rett forbi siden du nettopp forlot. Det er riktig valg etter en innlogging eller en omdirigering, der det ville vært rart å kunne gå tilbake.</p>' +
        '<p>Delene kan skrives til hver for seg, og her er det én viktig forskjell. <code>location.hash = &#39;seksjon-3&#39;</code> laster ikke siden på nytt &mdash; i testen overlevde en variabel på <code>window</code> &mdash; og utløser en <code>hashchange</code>-hendelse. <code>location.search</code> og <code>location.pathname</code> laster derimot hele siden på nytt; der var variabelen borte.</p>' +
        '<p><code>location.origin</code> kan ikke skrives til. Forsøket gikk stille forbi, og adressen ble stående. Nettleseren lar deg ikke bytte hvem du er.</p>',

      's.url.t': 'URL: å lese og bygge uten å klippe',
      's.url.d':
        '<p><code>new URL(...)</code> gir deg det samme oppdelte objektet for en hvilken som helst adresse, ikke bare den du står på. Det er verktøyet for å lese en adresse du har fått, og for å bygge en du skal sende fra deg.</p>' +
        '<p>Den vil ha en fullstendig adresse. <code>new URL(&#39;/kunder/12&#39;)</code> kaster en <code>TypeError</code>. Gir du den et grunnlag som andre argument, regner den ut resten selv: <code>new URL(&#39;../b&#39;, &#39;https://a.no/x/y/z&#39;)</code> ble til <code>https://a.no/x/b</code>. Er du usikker på om strengen er brukbar, spør <code>URL.canParse()</code> først &mdash; på <code>&#39;/x&#39;</code> svarte den <code>false</code>.</p>' +
        '<p>Den rydder også litt av seg selv: et mellomrom i strengen kom ut som <code>%20</code> i <code>search</code>.</p>' +
        '<p>Og merk at et <code>URL</code>-objekt bare er en notis. Endrer du <code>u.pathname</code>, skjer det ingenting med siden &mdash; det ble målt. Først når du gir den til <code>location.href</code>, flytter du deg.</p>',

      's.params.t': 'searchParams: spørringen som oppslag',
      's.params.d':
        '<p><code>u.searchParams</code> lar deg behandle <code>?q=hei&amp;side=2</code> som et oppslagsverk i stedet for en streng. <code>get</code> gir deg verdien ferdig dekodet, og <code>null</code> når nøkkelen ikke finnes &mdash; ikke <code>undefined</code>, som i leksjon 11.</p>' +
        '<p>Samme navn kan stå flere ganger. <code>getAll</code> gir deg alle; <code>get</code> gir bare den første.</p>' +
        '<p>Det viktigste er at <code>set</code> og <code>append</code> koder for deg. Setter du <code>q</code> til <code>a&amp;b=c#d e</code>, blir adressen <code>?q=a%26b%3Dc%23d+e</code>, og leser du <code>q</code> igjen, får du nøyaktig det du la inn. Det er derfor rådet i denne leksjonen er så kort: bygg adresser med <code>URL</code> og <code>searchParams</code>, så slipper du å velge riktig kodefunksjon i det hele tatt.</p>',

      's.comp.t': 'encodeURIComponent: én verdi',
      's.comp.d':
        '<p>Skal du likevel sette sammen en adresse selv, er dette funksjonen du trenger i nesten alle tilfeller. Den pakker inn <em>én bit</em> &mdash; en søketekst, et navn, en id &mdash; slik at den kan ligge inni en adresse uten å bli lest som en del av den.</p>' +
        '<p>Den lar bare disse stå: bokstavene A&ndash;Z og a&ndash;z, sifrene, og <code>- _ . ! ~ * &#39; ( )</code>. Alt annet blir prosenttegn og tall.</p>' +
        '<p>Tallene er UTF-8-bytene fra leksjon 6 i HTML-sporet, skrevet på en ny måte. <code>æ</code> blir <code>%C3%A6</code>, fordi æ er to byte. <code>€</code> blir tre byte og et emoji fire. Ser du <code>%C3%A6</code> i en logg, ser du på UTF-8, ikke på noe nytt.</p>',

      's.uri.t': 'encodeURI: hele adressen',
      's.uri.d':
        '<p><code>encodeURI</code> er laget for noe annet: den tar en hel adresse som allerede er satt sammen, og rydder opp i tegn som ikke har lov til å stå der &mdash; først og fremst mellomrom. Adressen fungerer fortsatt etterpå.</p>' +
        '<p>Hele forskjellen på de to er elleve tegn: <code>; / ? : @ &amp; = + $ , #</code>. <code>encodeURI</code> lar dem stå, fordi det er de som holder adressen sammen. <code>encodeURIComponent</code> koder dem, fordi inni en verdi er de bare tekst.</p>' +
        '<p>Derfor er <code>encodeURI</code> feil verktøy for en søketekst: skriver brukeren <code>a&amp;b=c</code>, slipper <code>encodeURI</code> både <code>&amp;</code> og <code>=</code> gjennom, og du har fått et nytt parameter du ikke ba om. Målt på adressen <code>?q=a&amp;b=c#d e</code> leste mottakeren <code>q</code> som bare <code>&#39;a&#39;</code>. Med <code>encodeURIComponent</code> kom hele teksten fram.</p>' +
        '<p>Og så er det plusstegnet. <code>encodeURI(&#39;+&#39;)</code> gir <code>+</code>, som mange servere leser som et mellomrom; <code>encodeURIComponent(&#39;+&#39;)</code> gir <code>%2B</code>, som er et virkelig plusstegn. Et telefonnummer som <code>+47</code> er den vanligste måten å møte dette på.</p>',

      's.dec.t': 'Å pakke ut igjen',
      's.dec.d':
        '<p><code>decodeURIComponent</code> går andre veien. Den kaster en <code>URIError</code> hvis strengen ikke gir mening &mdash; <code>&#39;100%&#39;</code> alene er nok, fordi et prosenttegn skal følges av to tegn til. Kommer teksten utenfra, hører kallet hjemme i en <code>try</code>.</p>' +
        '<p>Den kjenner heller ikke til plusstegnet: <code>decodeURIComponent(&#39;a+b&#39;)</code> gir <code>&#39;a+b&#39;</code>, mens <code>new URLSearchParams(&#39;q=a+b&#39;).get(&#39;q&#39;)</code> gir <code>&#39;a b&#39;</code>. Det er to forskjellige tradisjoner for mellomrom i samme adresse, og <code>URLSearchParams</code> er den som kjenner begge.</p>' +
        '<p>Koder du to ganger, blir prosenttegnet selv kodet: <code>hei du</code> ble <code>hei%2520du</code>, og mottakeren pakker ut ett lag og sitter igjen med <code>hei%20du</code> som synlig tekst. Ser du <code>%25</code> noe sted, har noe blitt kodet en gang for mye.</p>' +
        '<p>Til slutt: alt etter <code>#</code> blir aldri sendt. I testen fikk serveren <code>?q=hei%20du</code> og ingenting mer, mens siden selv leste <code>#topp</code> som før. Hash er nettleserens egen notis (leksjon 8 i HTML-sporet).</p>',

      's.note':
        'Én regel dekker hele leksjonen: ikke lim sammen adresser med <code>+</code>. Lag en <code>URL</code>, bruk <code>searchParams.set</code>, og la nettleseren kode. Må du likevel lime, er det <code>encodeURIComponent</code> på hver enkelt verdi &mdash; aldri på hele adressen, og <code>encodeURI</code> nesten aldri.',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'window.location.href, URL, encodeURI, encodeURIComponent',
      kicker: 'Lesson 13 &middot; Javascript',
      title: 'window.location.href, URL, encodeURI, encodeURIComponent',
      lead: 'Reading the address you are on, building a new one, and wrapping up text that has to sit inside it &mdash; without breaking the address around it.',

      's.loc.t': 'The address you are on',
      's.loc.d':
        '<p><code>window.location</code> is an object describing the page you are on. <code>location.href</code> is the whole address as text; the rest is that same address taken apart, so you never have to cut up strings yourself.</p>' +
        '<p>Two details that surprise people: <code>search</code> and <code>hash</code> include the character in front of them, so <code>?q=test&amp;side=2</code> and <code>#midt</code>, and <code>port</code> is a string &mdash; <code>&#39;8099&#39;</code>, not the number, and an empty string when the address has no port.</p>' +
        '<p><code>host</code> includes the port, <code>hostname</code> does not. <code>origin</code> is protocol, host and port together, and that is exactly the value that decides who you are allowed to talk to (lessons 6 and 9 of the HTML track).</p>',

      's.nav.t': 'Moving',
      's.nav.d':
        '<p>Writing to <code>location.href</code> is navigating. <code>location.assign()</code> does the same. Both leave an entry in the history: measured, <code>history.length</code> went from 3 to 4, and Back took you to the page you came from.</p>' +
        '<p><code>location.replace()</code> swaps the entry out instead. Measured, <code>history.length</code> stayed at 3, and Back jumped straight past the page you had just left. That is the right choice after a login or a redirect, where being able to go back would be strange.</p>' +
        '<p>The parts can be written to one at a time, and here there is one important difference. <code>location.hash = &#39;seksjon-3&#39;</code> does not reload the page &mdash; in the test a variable on <code>window</code> survived &mdash; and fires a <code>hashchange</code> event. <code>location.search</code> and <code>location.pathname</code>, on the other hand, reload the whole page; there the variable was gone.</p>' +
        '<p><code>location.origin</code> cannot be written to. The attempt passed silently and the address stayed put. The browser will not let you change who you are.</p>',

      's.url.t': 'URL: reading and building without cutting',
      's.url.d':
        '<p><code>new URL(...)</code> gives you that same taken-apart object for any address, not just the one you are on. It is the tool for reading an address you were given, and for building one you are about to send.</p>' +
        '<p>It wants a complete address. <code>new URL(&#39;/kunder/12&#39;)</code> throws a <code>TypeError</code>. Give it a base as a second argument and it works the rest out: <code>new URL(&#39;../b&#39;, &#39;https://a.no/x/y/z&#39;)</code> became <code>https://a.no/x/b</code>. If you are unsure whether the string is usable, ask <code>URL.canParse()</code> first &mdash; on <code>&#39;/x&#39;</code> it answered <code>false</code>.</p>' +
        '<p>It also tidies up after itself a little: a space in the string came out as <code>%20</code> in <code>search</code>.</p>' +
        '<p>And note that a <code>URL</code> object is only a note. Change <code>u.pathname</code> and nothing happens to the page &mdash; that was measured. Only when you hand it to <code>location.href</code> do you move.</p>',

      's.params.t': 'searchParams: the query as a lookup',
      's.params.d':
        '<p><code>u.searchParams</code> lets you treat <code>?q=hei&amp;side=2</code> as a lookup rather than a string. <code>get</code> gives you the value already decoded, and <code>null</code> when the key is missing &mdash; not <code>undefined</code>, as in lesson 11.</p>' +
        '<p>The same name can appear more than once. <code>getAll</code> gives you all of them; <code>get</code> gives only the first.</p>' +
        '<p>The important part is that <code>set</code> and <code>append</code> encode for you. Set <code>q</code> to <code>a&amp;b=c#d e</code> and the address becomes <code>?q=a%26b%3Dc%23d+e</code>, and reading <code>q</code> back gives exactly what you put in. That is why the advice in this lesson is so short: build addresses with <code>URL</code> and <code>searchParams</code> and you never have to pick the right encoding function at all.</p>',

      's.comp.t': 'encodeURIComponent: one value',
      's.comp.d':
        '<p>If you do put an address together by hand, this is the function you want in almost every case. It wraps up <em>one piece</em> &mdash; a search text, a name, an id &mdash; so it can sit inside an address without being read as part of it.</p>' +
        '<p>It leaves only these alone: the letters A&ndash;Z and a&ndash;z, the digits, and <code>- _ . ! ~ * &#39; ( )</code>. Everything else becomes percent signs and numbers.</p>' +
        '<p>Those numbers are the UTF-8 bytes from lesson 6 of the HTML track, written another way. <code>æ</code> becomes <code>%C3%A6</code>, because æ is two bytes. <code>€</code> becomes three bytes and an emoji four. When you see <code>%C3%A6</code> in a log, you are looking at UTF-8, not at anything new.</p>',

      's.uri.t': 'encodeURI: the whole address',
      's.uri.d':
        '<p><code>encodeURI</code> is built for something else: it takes a whole address that has already been put together and cleans up characters that are not allowed to be there &mdash; spaces above all. The address still works afterwards.</p>' +
        '<p>The entire difference between the two is eleven characters: <code>; / ? : @ &amp; = + $ , #</code>. <code>encodeURI</code> leaves them, because they are what holds the address together. <code>encodeURIComponent</code> encodes them, because inside a value they are just text.</p>' +
        '<p>That is why <code>encodeURI</code> is the wrong tool for a search text: if the user writes <code>a&amp;b=c</code>, <code>encodeURI</code> lets both the <code>&amp;</code> and the <code>=</code> through, and you have an extra parameter you never asked for. Measured on the address <code>?q=a&amp;b=c#d e</code>, the receiver read <code>q</code> as just <code>&#39;a&#39;</code>. With <code>encodeURIComponent</code> the whole text arrived.</p>' +
        '<p>Then there is the plus sign. <code>encodeURI(&#39;+&#39;)</code> gives <code>+</code>, which many servers read as a space; <code>encodeURIComponent(&#39;+&#39;)</code> gives <code>%2B</code>, which is a real plus. A phone number like <code>+47</code> is the most common way to run into this.</p>',

      's.dec.t': 'Unwrapping again',
      's.dec.d':
        '<p><code>decodeURIComponent</code> goes the other way. It throws a <code>URIError</code> if the string makes no sense &mdash; <code>&#39;100%&#39;</code> on its own is enough, because a percent sign must be followed by two more characters. If the text came from outside, the call belongs in a <code>try</code>.</p>' +
        '<p>It does not know about the plus sign either: <code>decodeURIComponent(&#39;a+b&#39;)</code> gives <code>&#39;a+b&#39;</code>, while <code>new URLSearchParams(&#39;q=a+b&#39;).get(&#39;q&#39;)</code> gives <code>&#39;a b&#39;</code>. There are two different traditions for spaces in the same address, and <code>URLSearchParams</code> is the one that knows both.</p>' +
        '<p>Encode twice and the percent sign itself gets encoded: <code>hei du</code> became <code>hei%2520du</code>, and the receiver unwraps one layer and is left with <code>hei%20du</code> as visible text. Whenever you see <code>%25</code>, something was encoded one time too many.</p>' +
        '<p>Finally: everything after <code>#</code> is never sent. In the test the server got <code>?q=hei%20du</code> and nothing more, while the page itself read <code>#topp</code> as before. The hash is the browser&#39;s own note (lesson 8 of the HTML track).</p>',

      's.note':
        'One rule covers the whole lesson: do not glue addresses together with <code>+</code>. Make a <code>URL</code>, use <code>searchParams.set</code>, and let the browser encode. If you must glue, it is <code>encodeURIComponent</code> on each individual value &mdash; never on the whole address, and <code>encodeURI</code> almost never.',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'window.location.href, URL, encodeURI, encodeURIComponent',
      kicker: 'Урок 13 &middot; Javascript',
      title: 'window.location.href, URL, encodeURI, encodeURIComponent',
      lead: 'Прочитати адресу, на якій ви є, побудувати нову і загорнути текст, який має лежати всередині неї &mdash; так, щоб він не зламав саму адресу.',

      's.loc.t': 'Адреса, на якій ви є',
      's.loc.d':
        '<p><code>window.location</code> &mdash; це об&#39;єкт, що описує поточну сторінку. <code>location.href</code> &mdash; уся адреса текстом; решта &mdash; та сама адреса, розібрана на частини, щоб вам не доводилося різати рядки самотужки.</p>' +
        '<p>Дві деталі, які дивують: <code>search</code> і <code>hash</code> містять символ перед собою, тобто <code>?q=test&amp;side=2</code> і <code>#midt</code>; а <code>port</code> &mdash; це рядок <code>&#39;8099&#39;</code>, не число, і порожній рядок, якщо порту в адресі немає.</p>' +
        '<p><code>host</code> містить порт, <code>hostname</code> &mdash; ні. <code>origin</code> &mdash; це протокол, хост і порт разом, і саме це значення вирішує, з ким вам дозволено говорити (уроки 6 і 9 у курсі HTML).</p>',

      's.nav.t': 'Переходи',
      's.nav.d':
        '<p>Записати щось у <code>location.href</code> &mdash; це перейти. <code>location.assign()</code> робить те саме. Обидва лишають запис в історії: виміряно, <code>history.length</code> зросла з 3 до 4, а «Назад» повернула на сторінку, з якої ви прийшли.</p>' +
        '<p><code>location.replace()</code> натомість підміняє запис. Виміряно: <code>history.length</code> залишилася 3, а «Назад» перескочила через сторінку, яку ви щойно покинули. Це правильний вибір після входу в систему або переадресації, де повертатися назад було б дивно.</p>' +
        '<p>Частини можна записувати по одній, і тут є важлива відмінність. <code>location.hash = &#39;seksjon-3&#39;</code> не перезавантажує сторінку &mdash; у тесті змінна на <code>window</code> вижила &mdash; і породжує подію <code>hashchange</code>. А от <code>location.search</code> і <code>location.pathname</code> перезавантажують усю сторінку; там змінної вже не було.</p>' +
        '<p>У <code>location.origin</code> записати не можна. Спроба пройшла мовчки, адреса лишилася тією самою. Браузер не дасть вам змінити, хто ви є.</p>',

      's.url.t': 'URL: читати і будувати без ножиць',
      's.url.d':
        '<p><code>new URL(...)</code> дає такий самий розібраний об&#39;єкт для будь-якої адреси, не лише для поточної. Це інструмент, щоб прочитати отриману адресу і щоб зібрати ту, яку ви збираєтеся надіслати.</p>' +
        '<p>Він хоче повну адресу. <code>new URL(&#39;/kunder/12&#39;)</code> кидає <code>TypeError</code>. Дайте другим аргументом базу &mdash; і він дорахує решту: <code>new URL(&#39;../b&#39;, &#39;https://a.no/x/y/z&#39;)</code> перетворилося на <code>https://a.no/x/b</code>. Якщо не певні, чи рядок придатний, спершу спитайте <code>URL.canParse()</code> &mdash; на <code>&#39;/x&#39;</code> він відповів <code>false</code>.</p>' +
        '<p>Він і сам трохи прибирає: пробіл у рядку вийшов як <code>%20</code> у <code>search</code>.</p>' +
        '<p>І зауважте: об&#39;єкт <code>URL</code> &mdash; це лише нотатка. Змініть <code>u.pathname</code> &mdash; зі сторінкою не станеться нічого, це виміряно. Перехід відбудеться тільки тоді, коли ви віддасте його в <code>location.href</code>.</p>',

      's.params.t': 'searchParams: запит як словник',
      's.params.d':
        '<p><code>u.searchParams</code> дозволяє поводитися з <code>?q=hei&amp;side=2</code> як зі словником, а не з рядком. <code>get</code> віддає значення вже декодованим, а якщо ключа немає &mdash; <code>null</code>, не <code>undefined</code>, як в уроці 11.</p>' +
        '<p>Те саме ім&#39;я може траплятися кілька разів. <code>getAll</code> віддасть усі; <code>get</code> &mdash; лише перше.</p>' +
        '<p>Найважливіше те, що <code>set</code> і <code>append</code> кодують за вас. Поставте <code>q</code> у <code>a&amp;b=c#d e</code> &mdash; адреса стане <code>?q=a%26b%3Dc%23d+e</code>, а читання <code>q</code> поверне рівно те, що ви поклали. Тому порада цього уроку така коротка: будуйте адреси через <code>URL</code> і <code>searchParams</code>, і вам узагалі не доведеться обирати функцію кодування.</p>',

      's.comp.t': 'encodeURIComponent: одне значення',
      's.comp.d':
        '<p>Якщо ви все ж складаєте адресу руками, це та функція, яка потрібна майже завжди. Вона загортає <em>один шматок</em> &mdash; текст пошуку, ім&#39;я, id &mdash; щоб він міг лежати всередині адреси і не читався як її частина.</p>' +
        '<p>Недоторканими вона лишає тільки: літери A&ndash;Z та a&ndash;z, цифри і <code>- _ . ! ~ * &#39; ( )</code>. Усе інше стає відсотками й числами.</p>' +
        '<p>Ці числа &mdash; це байти UTF-8 з уроку 6 курсу HTML, записані по-іншому. <code>æ</code> стає <code>%C3%A6</code>, бо æ &mdash; це два байти. <code>€</code> &mdash; три байти, емодзі &mdash; чотири. Побачивши <code>%C3%A6</code> в логах, ви дивитеся на UTF-8, а не на щось нове.</p>',

      's.uri.t': 'encodeURI: уся адреса',
      's.uri.d':
        '<p><code>encodeURI</code> зроблено для іншого: вона бере вже зібрану адресу цілком і прибирає символи, яким там не місце &mdash; передусім пробіли. Після цього адреса далі працює.</p>' +
        '<p>Уся різниця між цими двома &mdash; одинадцять символів: <code>; / ? : @ &amp; = + $ , #</code>. <code>encodeURI</code> лишає їх, бо саме вони тримають адресу вкупі. <code>encodeURIComponent</code> їх кодує, бо всередині значення це просто текст.</p>' +
        '<p>Тому <code>encodeURI</code> &mdash; неправильний інструмент для тексту пошуку: якщо користувач напише <code>a&amp;b=c</code>, <code>encodeURI</code> пропустить і <code>&amp;</code>, і <code>=</code>, і ви отримаєте зайвий параметр, якого не просили. Виміряно на адресі <code>?q=a&amp;b=c#d e</code>: одержувач прочитав <code>q</code> як просто <code>&#39;a&#39;</code>. З <code>encodeURIComponent</code> текст дійшов увесь.</p>' +
        '<p>І ще плюс. <code>encodeURI(&#39;+&#39;)</code> дає <code>+</code>, який багато серверів читають як пробіл; <code>encodeURIComponent(&#39;+&#39;)</code> дає <code>%2B</code>, тобто справжній плюс. Найчастіше з цим стикаються на номері телефону на кшталт <code>+47</code>.</p>',

      's.dec.t': 'Розгорнути назад',
      's.dec.d':
        '<p><code>decodeURIComponent</code> йде у зворотний бік. Вона кидає <code>URIError</code>, якщо рядок не має сенсу &mdash; досить самого <code>&#39;100%&#39;</code>, бо після відсотка мають іти ще два символи. Якщо текст прийшов ззовні, цьому виклику місце в <code>try</code>.</p>' +
        '<p>Про плюс вона теж не знає: <code>decodeURIComponent(&#39;a+b&#39;)</code> дає <code>&#39;a+b&#39;</code>, тоді як <code>new URLSearchParams(&#39;q=a+b&#39;).get(&#39;q&#39;)</code> дає <code>&#39;a b&#39;</code>. В одній адресі співіснують дві різні традиції запису пробілу, і <code>URLSearchParams</code> &mdash; та, що знає обидві.</p>' +
        '<p>Закодуєте двічі &mdash; закодується і сам відсоток: <code>hei du</code> стало <code>hei%2520du</code>, одержувач зніме один шар і матиме <code>hei%20du</code> як видимий текст. Якщо ви десь бачите <code>%25</code>, щось закодували на раз більше, ніж треба.</p>' +
        '<p>І наостанок: усе після <code>#</code> ніколи не надсилається. У тесті сервер отримав <code>?q=hei%20du</code> і більше нічого, а сама сторінка читала <code>#topp</code> як і раніше. Хеш &mdash; це власна нотатка браузера (урок 8 курсу HTML).</p>',

      's.note':
        'Одне правило покриває весь урок: не склеюйте адреси через <code>+</code>. Створіть <code>URL</code>, скористайтеся <code>searchParams.set</code> і дайте браузеру кодувати. Якщо склеювати таки доводиться &mdash; це <code>encodeURIComponent</code> на кожне окреме значення, ніколи на всю адресу, а <code>encodeURI</code> &mdash; майже ніколи.',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Brukeren søker etter <code>a&amp;b=c</code>. Du skal legge teksten inn som <code>?q=...</code>. Hvilken funksjon?',
        answer: 2,
        options: [
          {
            text: '<code>encodeURI</code>, den er laget for adresser.',
            why: 'Den er laget for hele adressen. Den lar <code>&amp;</code> og <code>=</code> stå, fordi de hører til adressens egen struktur &mdash; og da har du plutselig et parameter <code>b</code> du ikke ba om.',
          },
          {
            text: 'Ingen &mdash; teksten inneholder bare vanlige tegn.',
            why: 'Det er nettopp vanlige tegn i adressen som er problemet. Målt: mottakeren leste <code>q</code> som bare <code>&#39;a&#39;</code>.',
          },
          {
            text: '<code>encodeURIComponent</code>, eller enda heller <code>searchParams.set</code>.',
            why: 'Den koder <code>&amp;</code> til <code>%26</code> og <code>=</code> til <code>%3D</code>, og hele teksten kom fram i testen. Aller best er <code>u.searchParams.set(&#39;q&#39;, tekst)</code> &mdash; da gjør nettleseren det, og du kan ikke velge feil.',
          },
          {
            text: '<code>escape</code>, som er den korteste.',
            why: 'Den er avleggs og håndterer ikke UTF-8 riktig. Bruk den ikke.',
          },
        ],
      },
      {
        q: 'Hva gjør <code>new URL(&#39;/kunder/12&#39;)</code>?',
        answer: 0,
        options: [
          {
            text: 'Kaster en <code>TypeError</code> &mdash; den mangler et grunnlag.',
            why: 'Målt. <code>URL</code> vil ha en fullstendig adresse. Gi den et grunnlag som andre argument: <code>new URL(&#39;/kunder/12&#39;, location.href)</code>. Er du usikker, spør <code>URL.canParse()</code> først &mdash; på <code>&#39;/x&#39;</code> svarte den <code>false</code>.',
          },
          {
            text: 'Fyller inn dagens vert automatisk.',
            why: 'Det gjør den bare når du gir den et grunnlag å regne ut fra.',
          },
          {
            text: 'Gir <code>null</code>.',
            why: 'Den kaster. Det er <code>querySelector</code> som gir <code>null</code> (leksjon 11).',
          },
          {
            text: 'Lager et objekt der <code>origin</code> er tom.',
            why: 'Det blir ikke noe objekt i det hele tatt.',
          },
        ],
      },
      {
        q: 'Adressen er <code>?side=2</code>. Hva gir <code>params.get(&#39;q&#39;)</code>?',
        answer: 1,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Nær, men nei. Skillet betyr noe når du sjekker med <code>===</code>.',
          },
          {
            text: '<code>null</code>',
            why: 'Målt. <code>searchParams.get</code> svarer <code>null</code> for en nøkkel som ikke finnes &mdash; samme svar som <code>getElementById</code> i leksjon 11. Vil du bare vite om den er der, finnes <code>has</code>.',
          },
          {
            text: 'En tom streng.',
            why: 'Tom streng betyr at parameteret <em>står der</em> uten verdi, altså <code>?q=</code>. Det er noe annet enn at det mangler.',
          },
          {
            text: 'Den kaster.',
            why: 'Den kaster ikke. Den svarer pent.',
          },
        ],
      },
      {
        q: 'Du navigerer til <code>side.html?q=hei%20du#topp</code>. Hva ber nettleseren serveren om?',
        answer: 3,
        options: [
          {
            text: 'Hele adressen, inkludert <code>#topp</code>.',
            why: 'Hash blir aldri sendt. Den er nettleserens egen notis.',
          },
          {
            text: 'Bare <code>side.html</code> &mdash; spørringen er også lokal.',
            why: 'Spørringen sendes. Det er bare hashen som blir igjen.',
          },
          {
            text: '<code>side.html?q=hei du#topp</code>, ferdig dekodet.',
            why: 'Det som sendes er den kodede formen. Dekodingen skjer i den andre enden.',
          },
            {
            text: '<code>/side.html?q=hei%20du</code> &mdash; og ingenting mer.',
            why: 'Målt på nettverket. Serveren så aldri <code>#topp</code>, mens siden selv leste <code>location.hash</code> som <code>#topp</code>. Det er derfor et hash-bytte ikke laster siden på nytt: serveren har ingenting nytt å si.',
          },
        ],
      },
      {
        q: 'Etter en innlogging vil du ikke at Tilbake skal føre tilbake til innloggingssiden. Hva bruker du?',
        answer: 1,
        options: [
          {
            text: '<code>location.href = &#39;/start&#39;</code>',
            why: 'Den legger igjen en oppføring. Målt gikk <code>history.length</code> fra 3 til 4, og Tilbake tok deg rett tilbake dit du kom fra.',
          },
          {
            text: '<code>location.replace(&#39;/start&#39;)</code>',
            why: 'Målt: <code>history.length</code> ble stående på 3, og Tilbake hoppet forbi siden du forlot. Det er nettopp det <code>replace</code> er til for.',
          },
          {
            text: '<code>location.reload()</code>',
            why: 'Den laster den samme siden på nytt. Du kommer ingen vei.',
          },
          {
            text: '<code>location.hash = &#39;/start&#39;</code>',
            why: 'Det bytter bare hashen på samme side, uten å laste noe. Adressen blir <code>...#/start</code>.',
          },
        ],
      },
      {
        q: 'En verdi kommer fram som <code>hei%2520du</code>. Hva har skjedd?',
        answer: 2,
        options: [
          {
            text: 'Feil tegnsett et sted underveis.',
            why: 'Tegnsettfeil ser annerledes ut &mdash; da får du <code>Ã¦</code> og slikt (leksjon 6 i HTML-sporet).',
          },
          {
            text: 'Serveren kodet mellomrommet som <code>+</code>.',
            why: 'Da hadde du sett <code>+</code>, ikke <code>%25</code>.',
          },
          {
            text: 'Verdien ble kodet to ganger.',
            why: 'Målt: <code>encodeURIComponent</code> på <code>hei%20du</code> gjør <code>%</code> om til <code>%25</code>, og resultatet er <code>hei%2520du</code>. Mottakeren pakker ut ett lag og sitter igjen med <code>hei%20du</code> som synlig tekst. <code>%25</code> er alltid dette.',
          },
          {
            text: '<code>decodeURIComponent</code> ble glemt i den andre enden.',
            why: 'Da hadde du sett <code>hei%20du</code>, med ett lag, ikke to.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'The user searches for <code>a&amp;b=c</code>. You need to put that text in as <code>?q=...</code>. Which function?',
        answer: 2,
        options: [
          {
            text: '<code>encodeURI</code>, it is made for addresses.',
            why: 'It is made for the whole address. It leaves <code>&amp;</code> and <code>=</code> alone, because they belong to the address&#39;s own structure &mdash; and suddenly you have a parameter <code>b</code> you never asked for.',
          },
          {
            text: 'None &mdash; the text only contains ordinary characters.',
            why: 'Ordinary characters in an address are exactly the problem. Measured: the receiver read <code>q</code> as just <code>&#39;a&#39;</code>.',
          },
          {
            text: '<code>encodeURIComponent</code>, or better still <code>searchParams.set</code>.',
            why: 'It encodes <code>&amp;</code> to <code>%26</code> and <code>=</code> to <code>%3D</code>, and the whole text arrived in the test. Best of all is <code>u.searchParams.set(&#39;q&#39;, text)</code> &mdash; then the browser does it and you cannot pick wrong.',
          },
          {
            text: '<code>escape</code>, the shortest one.',
            why: 'It is obsolete and does not handle UTF-8 correctly. Do not use it.',
          },
        ],
      },
      {
        q: 'What does <code>new URL(&#39;/kunder/12&#39;)</code> do?',
        answer: 0,
        options: [
          {
            text: 'Throws a <code>TypeError</code> &mdash; it has no base.',
            why: 'Measured. <code>URL</code> wants a complete address. Give it a base as the second argument: <code>new URL(&#39;/kunder/12&#39;, location.href)</code>. If you are unsure, ask <code>URL.canParse()</code> first &mdash; on <code>&#39;/x&#39;</code> it answered <code>false</code>.',
          },
          {
            text: 'Fills in the current host automatically.',
            why: 'It only does that when you give it a base to work from.',
          },
          {
            text: 'Returns <code>null</code>.',
            why: 'It throws. <code>querySelector</code> is the one that returns <code>null</code> (lesson 11).',
          },
          {
            text: 'Makes an object whose <code>origin</code> is empty.',
            why: 'There is no object at all.',
          },
        ],
      },
      {
        q: 'The address is <code>?side=2</code>. What does <code>params.get(&#39;q&#39;)</code> give?',
        answer: 1,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Close, but no. The distinction matters when you check with <code>===</code>.',
          },
          {
            text: '<code>null</code>',
            why: 'Measured. <code>searchParams.get</code> answers <code>null</code> for a key that is not there &mdash; the same answer as <code>getElementById</code> in lesson 11. If you only want to know whether it is present, there is <code>has</code>.',
          },
          {
            text: 'An empty string.',
            why: 'An empty string means the parameter <em>is</em> there with no value, that is <code>?q=</code>. That is not the same as missing.',
          },
          {
            text: 'It throws.',
            why: 'It does not throw. It answers politely.',
          },
        ],
      },
      {
        q: 'You navigate to <code>side.html?q=hei%20du#topp</code>. What does the browser ask the server for?',
        answer: 3,
        options: [
          {
            text: 'The whole address, including <code>#topp</code>.',
            why: 'The hash is never sent. It is the browser&#39;s own note.',
          },
          {
            text: 'Only <code>side.html</code> &mdash; the query is local too.',
            why: 'The query is sent. Only the hash stays behind.',
          },
          {
            text: '<code>side.html?q=hei du#topp</code>, fully decoded.',
            why: 'What is sent is the encoded form. Decoding happens at the other end.',
          },
          {
            text: '<code>/side.html?q=hei%20du</code> &mdash; and nothing more.',
            why: 'Measured on the network. The server never saw <code>#topp</code>, while the page itself read <code>location.hash</code> as <code>#topp</code>. That is why changing the hash does not reload the page: the server has nothing new to say.',
          },
        ],
      },
      {
        q: 'After a login you do not want Back to lead to the login page again. What do you use?',
        answer: 1,
        options: [
          {
            text: '<code>location.href = &#39;/start&#39;</code>',
            why: 'It leaves an entry behind. Measured, <code>history.length</code> went from 3 to 4, and Back took you straight back where you came from.',
          },
          {
            text: '<code>location.replace(&#39;/start&#39;)</code>',
            why: 'Measured: <code>history.length</code> stayed at 3, and Back jumped past the page you left. That is exactly what <code>replace</code> is for.',
          },
          {
            text: '<code>location.reload()</code>',
            why: 'That loads the same page again. You get nowhere.',
          },
          {
            text: '<code>location.hash = &#39;/start&#39;</code>',
            why: 'That only changes the hash on the same page, without loading anything. The address becomes <code>...#/start</code>.',
          },
        ],
      },
      {
        q: 'A value arrives as <code>hei%2520du</code>. What happened?',
        answer: 2,
        options: [
          {
            text: 'The wrong character set somewhere along the way.',
            why: 'Character-set trouble looks different &mdash; you get <code>Ã¦</code> and friends (lesson 6 of the HTML track).',
          },
          {
            text: 'The server encoded the space as <code>+</code>.',
            why: 'Then you would have seen <code>+</code>, not <code>%25</code>.',
          },
          {
            text: 'The value was encoded twice.',
            why: 'Measured: <code>encodeURIComponent</code> on <code>hei%20du</code> turns the <code>%</code> into <code>%25</code>, giving <code>hei%2520du</code>. The receiver unwraps one layer and is left with <code>hei%20du</code> as visible text. <code>%25</code> is always this.',
          },
          {
            text: '<code>decodeURIComponent</code> was forgotten at the other end.',
            why: 'Then you would have seen <code>hei%20du</code>, one layer, not two.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Користувач шукає <code>a&amp;b=c</code>. Вам треба покласти цей текст як <code>?q=...</code>. Яка функція?',
        answer: 2,
        options: [
          {
            text: '<code>encodeURI</code>, вона ж для адрес.',
            why: 'Вона для адреси цілком. Вона лишає <code>&amp;</code> і <code>=</code>, бо це частина структури самої адреси &mdash; і раптом у вас з&#39;являється параметр <code>b</code>, якого ви не просили.',
          },
          {
            text: 'Жодна &mdash; у тексті лише звичайні символи.',
            why: 'Саме звичайні символи в адресі й є проблемою. Виміряно: одержувач прочитав <code>q</code> як просто <code>&#39;a&#39;</code>.',
          },
          {
            text: '<code>encodeURIComponent</code>, а ще краще <code>searchParams.set</code>.',
            why: 'Вона кодує <code>&amp;</code> у <code>%26</code> і <code>=</code> у <code>%3D</code>, і в тесті текст дійшов увесь. Найкраще ж &mdash; <code>u.searchParams.set(&#39;q&#39;, text)</code>: тоді кодує браузер і помилитися неможливо.',
          },
          {
            text: '<code>escape</code>, вона найкоротша.',
            why: 'Вона застаріла і неправильно працює з UTF-8. Не користуйтеся нею.',
          },
        ],
      },
      {
        q: 'Що робить <code>new URL(&#39;/kunder/12&#39;)</code>?',
        answer: 0,
        options: [
          {
            text: 'Кидає <code>TypeError</code> &mdash; немає бази.',
            why: 'Виміряно. <code>URL</code> хоче повну адресу. Дайте базу другим аргументом: <code>new URL(&#39;/kunder/12&#39;, location.href)</code>. Якщо не певні &mdash; спитайте спершу <code>URL.canParse()</code>: на <code>&#39;/x&#39;</code> він відповів <code>false</code>.',
          },
          {
            text: 'Автоматично підставляє поточний хост.',
            why: 'Він робить це лише тоді, коли ви даєте базу, від якої рахувати.',
          },
          {
            text: 'Повертає <code>null</code>.',
            why: 'Він кидає помилку. Це <code>querySelector</code> повертає <code>null</code> (урок 11).',
          },
          {
            text: 'Створює об&#39;єкт із порожнім <code>origin</code>.',
            why: 'Жодного об&#39;єкта не буде взагалі.',
          },
        ],
      },
      {
        q: 'Адреса &mdash; <code>?side=2</code>. Що поверне <code>params.get(&#39;q&#39;)</code>?',
        answer: 1,
        options: [
          {
            text: '<code>undefined</code>',
            why: 'Близько, але ні. Різниця важлива, коли ви перевіряєте через <code>===</code>.',
          },
          {
            text: '<code>null</code>',
            why: 'Виміряно. <code>searchParams.get</code> відповідає <code>null</code> на ключ, якого немає &mdash; та сама відповідь, що й у <code>getElementById</code> в уроці 11. Якщо треба лише знати, чи він є, є <code>has</code>.',
          },
          {
            text: 'Порожній рядок.',
            why: 'Порожній рядок означає, що параметр <em>є</em>, але без значення, тобто <code>?q=</code>. Це не те саме, що його відсутність.',
          },
          {
            text: 'Кине помилку.',
            why: 'Не кине. Відповість спокійно.',
          },
        ],
      },
      {
        q: 'Ви переходите на <code>side.html?q=hei%20du#topp</code>. Що браузер попросить у сервера?',
        answer: 3,
        options: [
          {
            text: 'Усю адресу, разом із <code>#topp</code>.',
            why: 'Хеш не надсилається ніколи. Це власна нотатка браузера.',
          },
          {
            text: 'Лише <code>side.html</code> &mdash; запит теж локальний.',
            why: 'Запит надсилається. Лишається на місці тільки хеш.',
          },
          {
            text: '<code>side.html?q=hei du#topp</code>, уже декодоване.',
            why: 'Надсилається саме закодована форма. Декодування відбувається на тому кінці.',
          },
          {
            text: '<code>/side.html?q=hei%20du</code> &mdash; і більше нічого.',
            why: 'Виміряно на мережі. Сервер не бачив <code>#topp</code> ніколи, а сама сторінка прочитала <code>location.hash</code> як <code>#topp</code>. Саме тому зміна хеша не перезавантажує сторінку: серверу нема чого сказати нового.',
          },
        ],
      },
      {
        q: 'Після входу в систему ви не хочете, щоб «Назад» вело знову на сторінку входу. Що використати?',
        answer: 1,
        options: [
          {
            text: '<code>location.href = &#39;/start&#39;</code>',
            why: 'Вона лишає запис в історії. Виміряно: <code>history.length</code> зросла з 3 до 4, і «Назад» повернула туди, звідки ви прийшли.',
          },
          {
            text: '<code>location.replace(&#39;/start&#39;)</code>',
            why: 'Виміряно: <code>history.length</code> залишилася 3, а «Назад» перескочила через покинуту сторінку. Саме для цього <code>replace</code> й існує.',
          },
          {
            text: '<code>location.reload()</code>',
            why: 'Вона перезавантажує ту саму сторінку. Ви нікуди не дінетеся.',
          },
          {
            text: '<code>location.hash = &#39;/start&#39;</code>',
            why: 'Це лише змінить хеш на тій самій сторінці, нічого не завантажуючи. Адреса стане <code>...#/start</code>.',
          },
        ],
      },
      {
        q: 'Значення приходить як <code>hei%2520du</code>. Що сталося?',
        answer: 2,
        options: [
          {
            text: 'Десь по дорозі не те кодування.',
            why: 'Проблеми з кодуванням виглядають інакше &mdash; там з&#39;являється <code>Ã¦</code> і подібне (урок 6 курсу HTML).',
          },
          {
            text: 'Сервер закодував пробіл як <code>+</code>.',
            why: 'Тоді ви побачили б <code>+</code>, а не <code>%25</code>.',
          },
          {
            text: 'Значення закодували двічі.',
            why: 'Виміряно: <code>encodeURIComponent</code> від <code>hei%20du</code> перетворює <code>%</code> на <code>%25</code>, і виходить <code>hei%2520du</code>. Одержувач зніме один шар і матиме <code>hei%20du</code> як видимий текст. <code>%25</code> &mdash; це завжди воно.',
          },
          {
            text: 'На тому кінці забули <code>decodeURIComponent</code>.',
            why: 'Тоді ви побачили б <code>hei%20du</code> &mdash; один шар, а не два.',
          },
        ],
      },
    ],
  },
});
