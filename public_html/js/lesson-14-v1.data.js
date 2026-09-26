/*
 * Content of JS lesson 14 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: storage. It leans on lesson 1 (string vs number), lesson 7
 * (JSON), lesson 12 (events) and lesson 13 (origin).
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'localStorage, sessionStorage',
      kicker: 'Leksjon 14 &middot; Javascript',
      title: 'localStorage, sessionStorage',
      lead: 'To skuffer i nettleseren som husker for deg. Begge har bare plass til tekst, og forskjellen på dem er ett spørsmål: hvor lenge, og for hvem?',

      's.set.t': 'Alt som går inn, blir tekst',
      's.set.d':
        '<p>De to skuffene har nøyaktig de samme metodene: <code>setItem</code>, <code>getItem</code>, <code>removeItem</code>, <code>clear</code>, <code>key</code> og <code>length</code>. Alt i denne leksjonen gjelder begge, helt til vi kommer til hvem som ser hva.</p>' +
        '<p>Den ene regelen som forklarer nesten alle feil her: nøkler og verdier er strenger. Ikke «blir gjort om til strenger når det passer» &mdash; alltid. <code>setItem(&#39;n&#39;, 5)</code> lagrer <code>&#39;5&#39;</code>, <code>false</code> blir <code>&#39;false&#39;</code>, <code>undefined</code> blir <code>&#39;undefined&#39;</code>, og et objekt blir <code>&#39;[object Object]&#39;</code> &mdash; alt sammen målt.</p>' +
        '<p>Du kan også skrive <code>localStorage.c = &#39;3&#39;</code>, og det virker. Men skuffen har sine egne navn, og de vinner: <code>localStorage.length = 99</code> ble bare ignorert, og <code>getItem(&#39;length&#39;)</code> ga <code>null</code>. Med <code>setItem</code> kan en nøkkel hete hva som helst. Det er den eneste grunnen du trenger til å bruke metodene.</p>' +
        '<p>Resten er rolig: <code>key(9)</code> på en skuff med to ting ga <code>null</code>, og <code>removeItem</code> på en nøkkel som ikke finnes ga <code>undefined</code> uten å klage.</p>',

      's.get.t': 'Alt som kommer ut, er tekst',
      's.get.d':
        '<p><code>getItem</code> gir <code>null</code> når nøkkelen ikke finnes &mdash; samme svar som <code>getElementById</code> i leksjon 11 og <code>searchParams.get</code> i leksjon 13. Det er verdt å legge merke til, fordi <code>null</code> og «tom streng» betyr to forskjellige ting: den ene var aldri der, den andre ble lagret tom.</p>' +
        '<p>Ellers er det leksjon 1 om igjen, bare med en ny kilde. <code>getItem(&#39;n&#39;) + 1</code> ble <code>&#39;51&#39;</code>, fordi pluss mellom to strenger limer. <code>Number(getItem(&#39;n&#39;)) + 1</code> ble 6.</p>' +
        '<p>Verre er <code>false</code>. Den kommer ut som strengen <code>&#39;false&#39;</code>, og en ikke-tom streng er sann. En <code>if</code> rett på verdien blir altså alltid sann, uansett hva du lagret. Sammenlign med <code>=== &#39;true&#39;</code> i stedet.</p>' +
        '<p>Og <code>getItem(&#39;n&#39;) === 5</code> er alltid <code>false</code>: en streng er aldri identisk med et tall (leksjon 2).</p>',

      's.json.t': 'JSON er hele broen',
      's.json.d':
        '<p>Skal du lagre noe som ikke er en streng, er det bare én vei: <code>JSON.stringify</code> inn og <code>JSON.parse</code> ut. Det er ingen egen metode for objekter, og det kommer aldri til å bli en.</p>' +
        '<p>Da gjelder alt fra leksjon 7 igjen. En <code>Date</code> kom tilbake som tekst, og funksjonen og <code>undefined</code>-feltet var borte uten et ord &mdash; objektet som gikk inn med fire felter, kom ut med to.</p>' +
        '<p>To ting kan kaste når du leser. <code>JSON.parse</code> av en verdi som ikke finnes går bra, fordi <code>null</code> blir teksten <code>&#39;null&#39;</code> og parses til <code>null</code>. Men lagret du <code>undefined</code> ved et uhell, ligger det <code>&#39;undefined&#39;</code> der, og det er ikke gyldig JSON &mdash; det ble en <code>SyntaxError</code>, akkurat som <code>&#39;[object Object]&#39;</code>.</p>' +
        '<p>Derfor hører lesingen hjemme i én liten funksjon med <code>try</code> og en reserveverdi. Skriv den én gang i prosjektet, og bruk den overalt.</p>',

      's.local.t': 'localStorage: til det blir slettet',
      's.local.d':
        '<p><code>localStorage</code> har ingen utløpstid. Den overlever at fanen lukkes, at nettleseren startes på nytt og at maskinen skrus av. Den blir liggende til noen sletter den &mdash; koden din, brukeren, eller nettleserens opprydding.</p>' +
        '<p>Den deles av alle faner på samme opphav. I testen skrev fane 1 en verdi, og fane 2 leste den med en gang.</p>' +
        '<p>«Samme opphav» er nøyaktig det fra leksjon 13: protokoll, vert og port. Samme server på <code>localhost</code> i stedet for <code>127.0.0.1</code> er et annet opphav, og der var verdien <code>null</code>. En annen nettleserprofil ser heller ingenting. En <code>iframe</code> med samme opphav er derimot på innsiden og deler alt.</p>' +
        '<p>Bruk den til valg som skal vare: språk, mørk modus, hvilke kolonner brukeren har skrudd av i en tabell.</p>',

      's.session.t': 'sessionStorage: denne fanen, denne oppgaven',
      's.session.d':
        '<p><code>sessionStorage</code> er den samme skuffen med en kortere hukommelse. Den hører til én fane. I testen leste fane 2 <code>null</code> på en nøkkel fane 1 nettopp hadde skrevet.</p>' +
        '<p>Den overlever en vanlig oppdatering &mdash; etter F5 lå verdien der &mdash; men forsvinner når fanen lukkes.</p>' +
        '<p>Ett unntak er verdt å kjenne: åpner du en ny fane med <code>window.open</code>, får barnet en <em>kopi</em> av det som lå der. Målt leste barnet den samme verdien, og da barnet endret den, hadde forelderen fortsatt sin gamle. Det er en kopi, ikke en deling.</p>' +
        '<p>Bruk den til noe som bare angår denne fanen: et halvutfylt skjema, hvilket steg i en veiviser brukeren er på, hvor langt ned en liste var rullet.</p>',

      's.event.t': 'Beskjed til de andre fanene',
      's.event.d':
        '<p><code>storage</code>-hendelsen sier fra når skuffen endrer seg. Den viktige detaljen er hvem som får den: <em>ikke</em> fanen som skrev. Målt så den skrivende fanen ingenting, mens den andre fanen fikk nøkkelen, den gamle verdien og den nye.</p>' +
        '<p>Det er med vilje. Fanen som skrev, vet jo allerede hva den gjorde. Hendelsen finnes for å holde de andre fanene i takt &mdash; logger brukeren ut i én fane, kan de andre reagere.</p>' +
        '<p><code>removeItem</code> gir <code>newValue: null</code>. <code>clear()</code> gir <code>null</code> i alle tre feltene, så det er slik du kjenner den igjen.</p>' +
        '<p>Og den fyrer bare når noe faktisk endret seg. Å skrive den samme verdien om igjen ga ingen hendelse, og <code>clear()</code> på en tom skuff ga heller ingen.</p>',

      's.limit.t': 'Hvor mye, og hvor trygt',
      's.limit.d':
        '<p>Skuffen er ikke stor. I denne nettleseren kastet den <code>QuotaExceededError</code> etter omtrent 5,2 millioner tegn; grensen varierer mellom nettlesere, og tallet du ofte ser nevnt er noen få megabyte. Det viktige er at den <em>kaster</em>, og at alt som ble skrevet før feilen fortsatt lå der &mdash; du får en halvfull skuff og et unntak.</p>' +
        '<p>Skrivingen er dessuten synkron. Den skjer på hovedtråden mens siden venter: tjue skrivinger av 200 000 tegn tok mellom 6 og 17 ms fra gang til gang. Små verdier merkes ikke, men et helt API-svar lagret ved hvert tastetrykk gjør det.</p>' +
        '<p>Og alt ligger i klartekst, lesbart for hvilket som helst skript på siden. Det er greit for språkvalg. Det er ikke greit for en token, et fødselsnummer eller en kundeliste &mdash; i et Prov-grensesnitt hører slikt hjemme i minnet, i en <code>httpOnly</code>-informasjonskapsel, eller ingen steder.</p>',

      's.note':
        'Én linje å ta med: lagre små, ikke-hemmelige valg som tekst, gjennom <code>JSON.stringify</code>, og les dem med en <code>try</code> og en reserveverdi. Velg <code>localStorage</code> når valget skal følge brukeren, og <code>sessionStorage</code> når det bare gjelder akkurat denne fanen.',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'localStorage, sessionStorage',
      kicker: 'Lesson 14 &middot; Javascript',
      title: 'localStorage, sessionStorage',
      lead: 'Two drawers in the browser that remember for you. Both hold nothing but text, and the difference between them is one question: for how long, and for whom?',

      's.set.t': 'Everything that goes in becomes text',
      's.set.d':
        '<p>The two drawers have exactly the same methods: <code>setItem</code>, <code>getItem</code>, <code>removeItem</code>, <code>clear</code>, <code>key</code> and <code>length</code>. Everything in this lesson applies to both, right up until we get to who can see what.</p>' +
        '<p>The one rule that explains nearly every bug here: keys and values are strings. Not &laquo;converted to strings when convenient&raquo; &mdash; always. <code>setItem(&#39;n&#39;, 5)</code> stores <code>&#39;5&#39;</code>, <code>false</code> becomes <code>&#39;false&#39;</code>, <code>undefined</code> becomes <code>&#39;undefined&#39;</code>, and an object becomes <code>&#39;[object Object]&#39;</code> &mdash; all measured.</p>' +
        '<p>You can also write <code>localStorage.c = &#39;3&#39;</code>, and it works. But the drawer has names of its own, and they win: <code>localStorage.length = 99</code> was simply ignored, and <code>getItem(&#39;length&#39;)</code> gave <code>null</code>. With <code>setItem</code> a key can be called anything at all. That is the only reason you need to use the methods.</p>' +
        '<p>The rest is quiet: <code>key(9)</code> on a drawer holding two things gave <code>null</code>, and <code>removeItem</code> on a key that is not there gave <code>undefined</code> without complaining.</p>',

      's.get.t': 'Everything that comes out is text',
      's.get.d':
        '<p><code>getItem</code> gives <code>null</code> when the key is missing &mdash; the same answer as <code>getElementById</code> in lesson 11 and <code>searchParams.get</code> in lesson 13. Worth noticing, because <code>null</code> and &laquo;empty string&raquo; mean two different things: one was never there, the other was stored empty.</p>' +
        '<p>Otherwise this is lesson 1 again, with a new source. <code>getItem(&#39;n&#39;) + 1</code> came out as <code>&#39;51&#39;</code>, because plus between two strings glues. <code>Number(getItem(&#39;n&#39;)) + 1</code> came out as 6.</p>' +
        '<p><code>false</code> is worse. It comes back as the string <code>&#39;false&#39;</code>, and a non-empty string is truthy. So an <code>if</code> straight on the value is always true, whatever you stored. Compare with <code>=== &#39;true&#39;</code> instead.</p>' +
        '<p>And <code>getItem(&#39;n&#39;) === 5</code> is always <code>false</code>: a string is never identical to a number (lesson 2).</p>',

      's.json.t': 'JSON is the whole bridge',
      's.json.d':
        '<p>To store anything that is not a string there is only one road: <code>JSON.stringify</code> on the way in and <code>JSON.parse</code> on the way out. There is no separate method for objects, and there never will be.</p>' +
        '<p>Which means everything from lesson 7 applies again. A <code>Date</code> came back as text, and the function and the <code>undefined</code> field were gone without a word &mdash; the object went in with four fields and came out with two.</p>' +
        '<p>Two things can throw when you read. <code>JSON.parse</code> of a value that is not there is fine, because <code>null</code> becomes the text <code>&#39;null&#39;</code> and parses back to <code>null</code>. But if you stored <code>undefined</code> by accident, the text <code>&#39;undefined&#39;</code> is sitting there, and that is not valid JSON &mdash; it was a <code>SyntaxError</code>, just like <code>&#39;[object Object]&#39;</code>.</p>' +
        '<p>So the reading belongs in one small function with a <code>try</code> and a fallback. Write it once in the project and use it everywhere.</p>',

      's.local.t': 'localStorage: until someone deletes it',
      's.local.d':
        '<p><code>localStorage</code> has no expiry. It survives the tab closing, the browser restarting and the machine being switched off. It stays until someone removes it &mdash; your code, the user, or the browser&#39;s own cleanup.</p>' +
        '<p>It is shared by every tab on the same origin. In the test tab 1 wrote a value and tab 2 read it straight away.</p>' +
        '<p>&laquo;Same origin&raquo; is exactly the one from lesson 13: protocol, host and port. The same server reached at <code>localhost</code> instead of <code>127.0.0.1</code> is a different origin, and there the value was <code>null</code>. Another browser profile sees nothing either. A same-origin <code>iframe</code>, on the other hand, is on the inside and shares everything.</p>' +
        '<p>Use it for choices that should last: language, dark mode, which columns the user turned off in a table.</p>',

      's.session.t': 'sessionStorage: this tab, this task',
      's.session.d':
        '<p><code>sessionStorage</code> is the same drawer with a shorter memory. It belongs to one tab. In the test tab 2 read <code>null</code> for a key tab 1 had just written.</p>' +
        '<p>It survives an ordinary reload &mdash; after F5 the value was there &mdash; but disappears when the tab closes.</p>' +
        '<p>One exception is worth knowing: open a new tab with <code>window.open</code> and the child gets a <em>copy</em> of what was there. Measured, the child read the same value, and when the child changed it the parent still had its old one. It is a copy, not a sharing.</p>' +
        '<p>Use it for something that concerns this tab only: a half-filled form, which step of a wizard the user is on, how far down a list was scrolled.</p>',

      's.event.t': 'Telling the other tabs',
      's.event.d':
        '<p>The <code>storage</code> event announces that the drawer changed. The important detail is who gets it: <em>not</em> the tab that wrote. Measured, the writing tab saw nothing, while the other tab got the key, the old value and the new one.</p>' +
        '<p>That is deliberate. The tab that wrote already knows what it did. The event exists to keep the other tabs in step &mdash; if the user logs out in one tab, the others can react.</p>' +
        '<p><code>removeItem</code> gives <code>newValue: null</code>. <code>clear()</code> gives <code>null</code> in all three fields, which is how you recognise it.</p>' +
        '<p>And it only fires when something actually changed. Writing the same value again produced no event, and <code>clear()</code> on an empty drawer produced none either.</p>',

      's.limit.t': 'How much, and how safe',
      's.limit.d':
        '<p>The drawer is not large. In this browser it threw <code>QuotaExceededError</code> after about 5.2 million characters; the limit varies between browsers, and the figure usually quoted is a few megabytes. What matters is that it <em>throws</em>, and that everything written before the failure was still there &mdash; you get a half-full drawer and an exception.</p>' +
        '<p>Writing is also synchronous. It happens on the main thread while the page waits: twenty writes of 200,000 characters took between 6 and 17 ms from run to run. Small values go unnoticed, but a whole API response stored on every keystroke does not.</p>' +
        '<p>And it all sits in plain text, readable by any script on the page. That is fine for a language choice. It is not fine for a token, a national ID number or a customer list &mdash; in a Prov interface those belong in memory, in an <code>httpOnly</code> cookie, or nowhere.</p>',

      's.note':
        'One line to take away: store small, non-secret choices as text, through <code>JSON.stringify</code>, and read them back with a <code>try</code> and a fallback. Pick <code>localStorage</code> when the choice should follow the user, and <code>sessionStorage</code> when it only concerns this one tab.',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'localStorage, sessionStorage',
      kicker: 'Урок 14 &middot; Javascript',
      title: 'localStorage, sessionStorage',
      lead: 'Дві шухляди в браузері, які запам&#39;ятовують за вас. В обох міститься лише текст, а різниця між ними &mdash; одне питання: як довго і для кого?',

      's.set.t': 'Усе, що заходить, стає текстом',
      's.set.d':
        '<p>У цих двох шухляд рівно однакові методи: <code>setItem</code>, <code>getItem</code>, <code>removeItem</code>, <code>clear</code>, <code>key</code> і <code>length</code>. Усе в цьому уроці стосується обох &mdash; аж доки ми не дійдемо до того, хто що бачить.</p>' +
        '<p>Єдине правило, яке пояснює майже всі помилки тут: ключі й значення &mdash; це рядки. Не «перетворюються на рядки, коли зручно», а завжди. <code>setItem(&#39;n&#39;, 5)</code> зберігає <code>&#39;5&#39;</code>, <code>false</code> стає <code>&#39;false&#39;</code>, <code>undefined</code> стає <code>&#39;undefined&#39;</code>, а об&#39;єкт стає <code>&#39;[object Object]&#39;</code> &mdash; усе виміряно.</p>' +
        '<p>Можна написати й <code>localStorage.c = &#39;3&#39;</code>, і це працює. Але в шухляди є власні імена, і вони перемагають: <code>localStorage.length = 99</code> просто проігнорували, а <code>getItem(&#39;length&#39;)</code> дав <code>null</code>. Через <code>setItem</code> ключ може називатися будь-як. Це єдина причина, щоб користуватися методами.</p>' +
        '<p>Решта спокійна: <code>key(9)</code> на шухляді з двома речами дав <code>null</code>, а <code>removeItem</code> на неіснуючому ключі дав <code>undefined</code> і не поскаржився.</p>',

      's.get.t': 'Усе, що виходить, &mdash; текст',
      's.get.d':
        '<p><code>getItem</code> дає <code>null</code>, коли ключа немає &mdash; та сама відповідь, що й у <code>getElementById</code> з уроку 11 та <code>searchParams.get</code> з уроку 13. Це варто помітити, бо <code>null</code> і «порожній рядок» означають різне: одного ніколи не було, інше зберегли порожнім.</p>' +
        '<p>Далі це урок 1 наново, просто з новим джерелом. <code>getItem(&#39;n&#39;) + 1</code> дало <code>&#39;51&#39;</code>, бо плюс між двома рядками склеює. <code>Number(getItem(&#39;n&#39;)) + 1</code> дало 6.</p>' +
        '<p>Гірше з <code>false</code>. Воно повертається рядком <code>&#39;false&#39;</code>, а непорожній рядок є істинним. Тобто <code>if</code> прямо на значенні завжди істинний, хоч би що ви зберегли. Порівнюйте натомість із <code>=== &#39;true&#39;</code>.</p>' +
        '<p>А <code>getItem(&#39;n&#39;) === 5</code> завжди <code>false</code>: рядок ніколи не тотожний числу (урок 2).</p>',

      's.json.t': 'JSON &mdash; це весь міст',
      's.json.d':
        '<p>Щоб зберегти щось, що не є рядком, дорога одна: <code>JSON.stringify</code> на вхід і <code>JSON.parse</code> на вихід. Окремого методу для об&#39;єктів немає і не буде.</p>' +
        '<p>А отже, все з уроку 7 знову в силі. <code>Date</code> повернувся текстом, а функція і поле з <code>undefined</code> зникли без жодного слова &mdash; об&#39;єкт зайшов із чотирма полями, а вийшов із двома.</p>' +
        '<p>Дві речі можуть кинути помилку під час читання. <code>JSON.parse</code> від значення, якого немає, проходить добре, бо <code>null</code> стає текстом <code>&#39;null&#39;</code> і розбирається назад у <code>null</code>. Але якщо ви випадково зберегли <code>undefined</code>, там лежить текст <code>&#39;undefined&#39;</code>, а це не коректний JSON &mdash; вийшов <code>SyntaxError</code>, так само як і з <code>&#39;[object Object]&#39;</code>.</p>' +
        '<p>Тому читання має жити в одній маленькій функції з <code>try</code> і запасним значенням. Напишіть її раз на проєкт і користуйтеся скрізь.</p>',

      's.local.t': 'localStorage: доки хтось не видалить',
      's.local.d':
        '<p>У <code>localStorage</code> немає терміну придатності. Він переживає закриття вкладки, перезапуск браузера і вимкнення комп&#39;ютера. Він лежить, доки його хтось не прибере &mdash; ваш код, користувач або власне прибирання браузера.</p>' +
        '<p>Його ділять усі вкладки того самого походження. У тесті вкладка 1 записала значення, а вкладка 2 одразу його прочитала.</p>' +
        '<p>«Те саме походження» &mdash; це рівно те з уроку 13: протокол, хост і порт. Той самий сервер за адресою <code>localhost</code> замість <code>127.0.0.1</code> &mdash; це інше походження, і там значення було <code>null</code>. Інший профіль браузера теж не бачить нічого. А от <code>iframe</code> того самого походження &mdash; всередині і ділить усе.</p>' +
        '<p>Використовуйте для виборів, які мають тривати: мова, темний режим, які колонки користувач вимкнув у таблиці.</p>',

      's.session.t': 'sessionStorage: ця вкладка, це завдання',
      's.session.d':
        '<p><code>sessionStorage</code> &mdash; та сама шухляда з коротшою пам&#39;яттю. Вона належить одній вкладці. У тесті вкладка 2 прочитала <code>null</code> на ключі, який вкладка 1 щойно записала.</p>' +
        '<p>Вона переживає звичайне перезавантаження &mdash; після F5 значення було на місці &mdash; але зникає, коли вкладку закривають.</p>' +
        '<p>Один виняток варто знати: якщо відкрити нову вкладку через <code>window.open</code>, дитина отримає <em>копію</em> того, що там було. Виміряно: дитина прочитала те саме значення, а коли дитина його змінила, у батька залишилося старе. Це копія, а не спільне володіння.</p>' +
        '<p>Використовуйте для того, що стосується лише цієї вкладки: наполовину заповнена форма, крок майстра, на якому спинився користувач, глибина прокрутки списку.</p>',

      's.event.t': 'Повідомити інші вкладки',
      's.event.d':
        '<p>Подія <code>storage</code> сповіщає, що шухляда змінилася. Найважливіша деталь &mdash; хто її отримує: <em>не</em> та вкладка, що записувала. Виміряно: вкладка, яка писала, не побачила нічого, а друга отримала ключ, старе значення і нове.</p>' +
        '<p>Це навмисно. Вкладка, яка писала, і так знає, що зробила. Подія існує, щоб тримати в такт інші вкладки &mdash; якщо користувач вийшов із системи в одній, решта може зреагувати.</p>' +
        '<p><code>removeItem</code> дає <code>newValue: null</code>. <code>clear()</code> дає <code>null</code> в усіх трьох полях &mdash; так ви його і впізнаєте.</p>' +
        '<p>І вона спрацьовує лише тоді, коли щось справді змінилося. Запис того самого значення не породив події, і <code>clear()</code> на порожній шухляді теж.</p>',

      's.limit.t': 'Скільки влізе і наскільки це безпечно',
      's.limit.d':
        '<p>Шухляда невелика. У цьому браузері вона кинула <code>QuotaExceededError</code> приблизно після 5,2 мільйона символів; межа різниться між браузерами, а цифра, яку зазвичай називають, &mdash; кілька мегабайтів. Важливо те, що вона <em>кидає</em> помилку і що все записане до збою залишилося на місці &mdash; ви отримуєте напівповну шухляду і виняток.</p>' +
        '<p>До того ж запис синхронний. Він відбувається в головному потоці, доки сторінка чекає: двадцять записів по 200 000 символів зайняли від 6 до 17 мс від разу до разу. Маленькі значення непомітні, а от ціла відповідь API, збережена на кожне натискання клавіші, &mdash; ще й як.</p>' +
        '<p>І все лежить відкритим текстом, доступним будь-якому скрипту на сторінці. Для вибору мови це нормально. Для токена, ідентифікаційного номера чи списку клієнтів &mdash; ні: в інтерфейсі Prov таким речам місце в пам&#39;яті, у кукі з <code>httpOnly</code> або ніде.</p>',

      's.note':
        'Один рядок на згадку: зберігайте маленькі несекретні вибори як текст, через <code>JSON.stringify</code>, і читайте їх із <code>try</code> та запасним значенням. Беріть <code>localStorage</code>, коли вибір має йти за користувачем, і <code>sessionStorage</code>, коли він стосується тільки цієї вкладки.',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du kjører <code>localStorage.setItem(&#39;n&#39;, 5)</code> og senere <code>localStorage.getItem(&#39;n&#39;) + 1</code>. Hva får du?',
        answer: 1,
        options: [
          {
            text: '<code>6</code>',
            why: 'Det ville krevd et tall. <code>Number(getItem(&#39;n&#39;)) + 1</code> gir 6 &mdash; det ble målt &mdash; men uten <code>Number</code> er det ikke et tall.',
          },
          {
            text: '<code>&#39;51&#39;</code>',
            why: 'Målt. <code>setItem</code> lagret <code>&#39;5&#39;</code> som tekst, og pluss mellom en streng og et tall limer i stedet for å regne (leksjon 1). Alt som kommer ut av skuffen er en streng.',
          },
          {
            text: '<code>NaN</code>',
            why: '<code>NaN</code> kommer når man prøver å regne med noe som ikke er et tall. Her regnes det ikke i det hele tatt &mdash; det limes.',
          },
          {
            text: 'En <code>TypeError</code>.',
            why: 'Pluss mellom en streng og et tall er helt lovlig. Det er nettopp derfor feilen er stille.',
          },
        ],
      },
      {
        q: 'Hva gir <code>localStorage.getItem(&#39;finnesikke&#39;)</code>?',
        answer: 0,
        options: [
          {
            text: '<code>null</code>',
            why: 'Målt. Samme svar som <code>getElementById</code> i leksjon 11 og <code>searchParams.get</code> i leksjon 13. Merk at det er noe annet enn en tom streng: tom streng betyr at nøkkelen finnes, men ble lagret uten innhold.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Nær, men nei. Forskjellen merkes når du sjekker med <code>===</code>.',
          },
          {
            text: 'En tom streng.',
            why: 'Tom streng betyr at nøkkelen er der. Denne er ikke der i det hele tatt.',
          },
          {
            text: 'Den kaster.',
            why: 'Den kaster ikke. <code>removeItem</code> på noe som ikke finnes klager heller ikke.',
          },
        ],
      },
      {
        q: 'Du kjører <code>localStorage.setItem(&#39;bruker&#39;, { navn: &#39;Åse&#39; })</code>. Hva ligger i skuffen?',
        answer: 3,
        options: [
          {
            text: 'Objektet, slik det er.',
            why: 'Skuffen har ikke plass til objekter. Bare tekst, både i nøkkel og verdi.',
          },
          {
            text: '<code>{"navn":"Åse"}</code> &mdash; den gjør JSON selv.',
            why: 'Den gjør ingen JSON. Det må du gjøre selv med <code>JSON.stringify</code>.',
          },
          {
            text: 'Ingenting &mdash; kallet kaster.',
            why: 'Det kaster ikke. Det er derfor feilen oppdages først når du leser.',
          },
          {
            text: 'Strengen <code>&#39;[object Object]&#39;</code>.',
            why: 'Målt. Verdien ble gjort om til tekst på den vanlige måten, og et objekt blir <code>&#39;[object Object]&#39;</code>. Leser du den med <code>JSON.parse</code>, får du en <code>SyntaxError</code>. Riktig vei er <code>JSON.stringify</code> inn og <code>JSON.parse</code> ut.',
          },
        ],
      },
      {
        q: 'Fane 1 kjører <code>localStorage.setItem(&#39;k&#39;, &#39;v2&#39;)</code>. To faner på samme opphav er åpne. Hvem får <code>storage</code>-hendelsen?',
        answer: 2,
        options: [
          {
            text: 'Begge fanene.',
            why: 'Bare den ene. Fanen som skrev, vet allerede hva den gjorde.',
          },
          {
            text: 'Bare fane 1, som gjorde endringen.',
            why: 'Stikk motsatt. Målt så den skrivende fanen ingenting.',
          },
          {
            text: 'Bare fane 2 &mdash; alle unntatt den som skrev.',
            why: 'Målt: fane 1 fikk ingenting, fane 2 fikk <code>{key:&#39;k&#39;, oldValue:&#39;v1&#39;, newValue:&#39;v2&#39;}</code>. Derfor er hendelsen nyttig til å holde faner i takt, for eksempel ved utlogging. <code>clear()</code> gir <code>null</code> i alle tre feltene.',
          },
          {
            text: 'Ingen &mdash; hendelsen gjelder bare <code>sessionStorage</code>.',
            why: 'Omvendt: <code>sessionStorage</code> deles ikke mellom faner, så der er det ingen andre å si fra til.',
          },
        ],
      },
      {
        q: 'Fane 1 skriver noe i <code>sessionStorage</code>. Brukeren åpner en helt ny fane på samme side. Hva ser den?',
        answer: 1,
        options: [
          {
            text: 'Den samme verdien &mdash; det er samme nettsted.',
            why: 'Det gjelder <code>localStorage</code>. <code>sessionStorage</code> hører til én fane.',
          },
          {
            text: '<code>null</code> &mdash; skuffen er tom i den nye fanen.',
            why: 'Målt. <code>sessionStorage</code> er per fane. Den overlever en oppdatering av siden, men ikke at fanen lukkes. Ett unntak: åpnes den nye fanen med <code>window.open</code>, får den en <em>kopi</em> &mdash; og deretter lever de to hver sitt liv.',
          },
          {
            text: 'Verdien, men bare til fane 1 lukkes.',
            why: 'Det finnes ingen slik deling. Den nye fanen har sin egen skuff fra første stund.',
          },
          {
            text: 'En <code>storage</code>-hendelse med verdien.',
            why: 'Ingen hendelse fyrer her, og det ville uansett ikke lagt noe i den nye fanens skuff.',
          },
        ],
      },
      {
        q: 'Du lagrer mer enn det er plass til. Hva skjer?',
        answer: 0,
        options: [
          {
            text: 'Kallet kaster <code>QuotaExceededError</code>, og det som alt lå der, blir liggende.',
            why: 'Målt: den kastet etter omtrent 5,2 millioner tegn, og alt som ble skrevet før feilen var fortsatt der. Du får en halvfull skuff og et unntak &mdash; derfor hører store skrivinger hjemme i en <code>try</code>.',
          },
          {
            text: 'Nettleseren sletter de eldste verdiene og fortsetter.',
            why: 'Den rydder ikke for deg. Den sier fra.',
          },
          {
            text: 'Kallet returnerer <code>false</code>.',
            why: '<code>setItem</code> returnerer ikke noe svar du kan sjekke. Den kaster.',
          },
          {
            text: 'Alt i skuffen tømmes.',
            why: 'Ingenting tømmes. Det ble målt &mdash; verdiene fra før lå der etterpå.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You run <code>localStorage.setItem(&#39;n&#39;, 5)</code> and later <code>localStorage.getItem(&#39;n&#39;) + 1</code>. What do you get?',
        answer: 1,
        options: [
          {
            text: '<code>6</code>',
            why: 'That would need a number. <code>Number(getItem(&#39;n&#39;)) + 1</code> gives 6 &mdash; that was measured &mdash; but without <code>Number</code> it is not a number.',
          },
          {
            text: '<code>&#39;51&#39;</code>',
            why: 'Measured. <code>setItem</code> stored <code>&#39;5&#39;</code> as text, and plus between a string and a number glues instead of adding (lesson 1). Everything that comes out of the drawer is a string.',
          },
          {
            text: '<code>NaN</code>',
            why: '<code>NaN</code> shows up when you try to calculate with something that is not a number. Here nothing is calculated at all &mdash; it is glued.',
          },
          {
            text: 'A <code>TypeError</code>.',
            why: 'Plus between a string and a number is perfectly legal. That is exactly why the bug is silent.',
          },
        ],
      },
      {
        q: 'What does <code>localStorage.getItem(&#39;finnesikke&#39;)</code> give?',
        answer: 0,
        options: [
          {
            text: '<code>null</code>',
            why: 'Measured. The same answer as <code>getElementById</code> in lesson 11 and <code>searchParams.get</code> in lesson 13. Note that it is not the same as an empty string: an empty string means the key exists but was stored with no content.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Close, but no. The difference shows when you check with <code>===</code>.',
          },
          {
            text: 'An empty string.',
            why: 'An empty string means the key is there. This one is not there at all.',
          },
          {
            text: 'It throws.',
            why: 'It does not throw. <code>removeItem</code> on something that is not there does not complain either.',
          },
        ],
      },
      {
        q: 'You run <code>localStorage.setItem(&#39;bruker&#39;, { navn: &#39;Åse&#39; })</code>. What is in the drawer?',
        answer: 3,
        options: [
          {
            text: 'The object, as it is.',
            why: 'The drawer has no room for objects. Text only, in both the key and the value.',
          },
          {
            text: '<code>{"navn":"Åse"}</code> &mdash; it does the JSON itself.',
            why: 'It does no JSON at all. That is yours to do, with <code>JSON.stringify</code>.',
          },
          {
            text: 'Nothing &mdash; the call throws.',
            why: 'It does not throw. That is why the bug is only discovered when you read.',
          },
          {
            text: 'The string <code>&#39;[object Object]&#39;</code>.',
            why: 'Measured. The value was turned into text the ordinary way, and an object becomes <code>&#39;[object Object]&#39;</code>. Read it with <code>JSON.parse</code> and you get a <code>SyntaxError</code>. The right road is <code>JSON.stringify</code> in and <code>JSON.parse</code> out.',
          },
        ],
      },
      {
        q: 'Tab 1 runs <code>localStorage.setItem(&#39;k&#39;, &#39;v2&#39;)</code>. Two tabs on the same origin are open. Who gets the <code>storage</code> event?',
        answer: 2,
        options: [
          {
            text: 'Both tabs.',
            why: 'Only one of them. The tab that wrote already knows what it did.',
          },
          {
            text: 'Only tab 1, which made the change.',
            why: 'Exactly backwards. Measured, the writing tab saw nothing.',
          },
          {
            text: 'Only tab 2 &mdash; everyone except the writer.',
            why: 'Measured: tab 1 got nothing, tab 2 got <code>{key:&#39;k&#39;, oldValue:&#39;v1&#39;, newValue:&#39;v2&#39;}</code>. That is why the event is useful for keeping tabs in step, for example on logout. <code>clear()</code> gives <code>null</code> in all three fields.',
          },
          {
            text: 'Nobody &mdash; the event only applies to <code>sessionStorage</code>.',
            why: 'The other way round: <code>sessionStorage</code> is not shared between tabs, so there is nobody else to tell.',
          },
        ],
      },
      {
        q: 'Tab 1 writes something into <code>sessionStorage</code>. The user opens a brand new tab on the same site. What does it see?',
        answer: 1,
        options: [
          {
            text: 'The same value &mdash; it is the same site.',
            why: 'That is <code>localStorage</code>. <code>sessionStorage</code> belongs to one tab.',
          },
          {
            text: '<code>null</code> &mdash; the drawer is empty in the new tab.',
            why: 'Measured. <code>sessionStorage</code> is per tab. It survives a page reload but not the tab closing. One exception: if the new tab is opened with <code>window.open</code> it gets a <em>copy</em> &mdash; and from then on the two live separate lives.',
          },
          {
            text: 'The value, but only until tab 1 closes.',
            why: 'There is no such sharing. The new tab has its own drawer from the very first moment.',
          },
          {
            text: 'A <code>storage</code> event carrying the value.',
            why: 'No event fires here, and it would not have put anything in the new tab&#39;s drawer anyway.',
          },
        ],
      },
      {
        q: 'You store more than there is room for. What happens?',
        answer: 0,
        options: [
          {
            text: 'The call throws <code>QuotaExceededError</code>, and what was already there stays.',
            why: 'Measured: it threw after about 5.2 million characters, and everything written before the failure was still there. You get a half-full drawer and an exception &mdash; which is why large writes belong in a <code>try</code>.',
          },
          {
            text: 'The browser deletes the oldest values and carries on.',
            why: 'It does not tidy up for you. It tells you.',
          },
          {
            text: 'The call returns <code>false</code>.',
            why: '<code>setItem</code> gives you no answer to check. It throws.',
          },
          {
            text: 'Everything in the drawer is emptied.',
            why: 'Nothing is emptied. That was measured &mdash; the earlier values were still there afterwards.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви виконуєте <code>localStorage.setItem(&#39;n&#39;, 5)</code>, а згодом <code>localStorage.getItem(&#39;n&#39;) + 1</code>. Що вийде?',
        answer: 1,
        options: [
          {
            text: '<code>6</code>',
            why: 'Для цього потрібне число. <code>Number(getItem(&#39;n&#39;)) + 1</code> дає 6 &mdash; це виміряно &mdash; але без <code>Number</code> це не число.',
          },
          {
            text: '<code>&#39;51&#39;</code>',
            why: 'Виміряно. <code>setItem</code> зберіг <code>&#39;5&#39;</code> текстом, а плюс між рядком і числом склеює замість додавати (урок 1). Усе, що виходить із шухляди, &mdash; рядок.',
          },
          {
            text: '<code>NaN</code>',
            why: '<code>NaN</code> з&#39;являється, коли рахують із тим, що не є числом. Тут не рахують узагалі &mdash; тут склеюють.',
          },
          {
            text: '<code>TypeError</code>.',
            why: 'Плюс між рядком і числом цілком законний. Саме тому помилка тиха.',
          },
        ],
      },
      {
        q: 'Що поверне <code>localStorage.getItem(&#39;finnesikke&#39;)</code>?',
        answer: 0,
        options: [
          {
            text: '<code>null</code>',
            why: 'Виміряно. Та сама відповідь, що й у <code>getElementById</code> з уроку 11 та <code>searchParams.get</code> з уроку 13. Зверніть увагу: це не те саме, що порожній рядок &mdash; порожній рядок означає, що ключ є, але його зберегли без вмісту.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Близько, але ні. Різниця видно, коли ви перевіряєте через <code>===</code>.',
          },
          {
            text: 'Порожній рядок.',
            why: 'Порожній рядок означає, що ключ є. А цього немає взагалі.',
          },
          {
            text: 'Кине помилку.',
            why: 'Не кине. <code>removeItem</code> на неіснуючому теж не скаржиться.',
          },
        ],
      },
      {
        q: 'Ви виконуєте <code>localStorage.setItem(&#39;bruker&#39;, { navn: &#39;Åse&#39; })</code>. Що лежить у шухляді?',
        answer: 3,
        options: [
          {
            text: 'Об&#39;єкт, як він є.',
            why: 'У шухляді немає місця для об&#39;єктів. Лише текст &mdash; і в ключі, і в значенні.',
          },
          {
            text: '<code>{"navn":"Åse"}</code> &mdash; вона сама робить JSON.',
            why: 'Жодного JSON вона не робить. Це ваша справа, через <code>JSON.stringify</code>.',
          },
          {
            text: 'Нічого &mdash; виклик кине помилку.',
            why: 'Не кине. Тому помилку помічають аж під час читання.',
          },
          {
            text: 'Рядок <code>&#39;[object Object]&#39;</code>.',
            why: 'Виміряно. Значення перетворили на текст звичайним способом, а об&#39;єкт стає <code>&#39;[object Object]&#39;</code>. Прочитайте це через <code>JSON.parse</code> &mdash; отримаєте <code>SyntaxError</code>. Правильний шлях: <code>JSON.stringify</code> на вхід і <code>JSON.parse</code> на вихід.',
          },
        ],
      },
      {
        q: 'Вкладка 1 виконує <code>localStorage.setItem(&#39;k&#39;, &#39;v2&#39;)</code>. Відкриті дві вкладки того самого походження. Хто отримає подію <code>storage</code>?',
        answer: 2,
        options: [
          {
            text: 'Обидві вкладки.',
            why: 'Лише одна. Вкладка, яка писала, і так знає, що зробила.',
          },
          {
            text: 'Лише вкладка 1, яка внесла зміну.',
            why: 'Рівно навпаки. Виміряно: вкладка, яка писала, не побачила нічого.',
          },
          {
            text: 'Лише вкладка 2 &mdash; усі, крім тієї, що писала.',
            why: 'Виміряно: вкладка 1 не отримала нічого, вкладка 2 отримала <code>{key:&#39;k&#39;, oldValue:&#39;v1&#39;, newValue:&#39;v2&#39;}</code>. Тому подія корисна, щоб тримати вкладки в такт &mdash; наприклад, при виході з системи. <code>clear()</code> дає <code>null</code> в усіх трьох полях.',
          },
          {
            text: 'Ніхто &mdash; подія стосується лише <code>sessionStorage</code>.',
            why: 'Навпаки: <code>sessionStorage</code> не ділиться між вкладками, тож там і сповіщати нема кого.',
          },
        ],
      },
      {
        q: 'Вкладка 1 щось записує в <code>sessionStorage</code>. Користувач відкриває зовсім нову вкладку того самого сайту. Що вона побачить?',
        answer: 1,
        options: [
          {
            text: 'Те саме значення &mdash; сайт же той самий.',
            why: 'Це про <code>localStorage</code>. <code>sessionStorage</code> належить одній вкладці.',
          },
          {
            text: '<code>null</code> &mdash; у новій вкладці шухляда порожня.',
            why: 'Виміряно. <code>sessionStorage</code> існує окремо для кожної вкладки. Він переживає перезавантаження сторінки, але не закриття вкладки. Один виняток: якщо нову вкладку відкрити через <code>window.open</code>, вона отримає <em>копію</em> &mdash; і далі ці двоє живуть окремим життям.',
          },
          {
            text: 'Значення, але лише доки не закриють вкладку 1.',
            why: 'Такого спільного володіння не буває. У нової вкладки з першої ж миті власна шухляда.',
          },
          {
            text: 'Подію <code>storage</code> зі значенням.',
            why: 'Тут не спрацює жодна подія, та й вона все одно нічого не поклала б у шухляду нової вкладки.',
          },
        ],
      },
      {
        q: 'Ви зберігаєте більше, ніж туди влізе. Що станеться?',
        answer: 0,
        options: [
          {
            text: 'Виклик кине <code>QuotaExceededError</code>, а те, що вже лежало, залишиться.',
            why: 'Виміряно: помилка виникла приблизно після 5,2 мільйона символів, і все записане до збою залишилося на місці. Ви отримуєте напівповну шухляду і виняток &mdash; тому великим записам місце в <code>try</code>.',
          },
          {
            text: 'Браузер видалить найстаріші значення і продовжить.',
            why: 'Він не прибирає за вас. Він повідомляє.',
          },
          {
            text: 'Виклик поверне <code>false</code>.',
            why: '<code>setItem</code> не повертає відповіді, яку можна перевірити. Він кидає помилку.',
          },
          {
            text: 'Уся шухляда очиститься.',
            why: 'Нічого не очиститься. Це виміряно &mdash; попередні значення були на місці й потому.',
          },
        ],
      },
    ],
  },
});
