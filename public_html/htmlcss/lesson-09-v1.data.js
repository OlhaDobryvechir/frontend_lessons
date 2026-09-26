/*
 * Content of lesson 09 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'iframe og window.open',
      kicker: 'Leksjon 9 &middot; HTML &amp; CSS',
      title: 'iframe og window.open',
      lead: 'To måter å sette et annet dokument ved siden av ditt eget: ett rammet inn i siden, ett i sitt eget vindu. Begge reiser det samme spørsmålet — hvor mye får de to dokumentene lov til å vite om hverandre?',

      's.frame.t': 'Et helt dokument inne i en side',
      's.frame.d':
        '<p>En <code>&lt;iframe&gt;</code> er ikke en komponent eller en dings. Den er et andre, fullstendig dokument med sin egen adresse, sin egen <code>&lt;head&gt;</code> og <code>&lt;body&gt;</code>, sine egne stilark og sine egne skript, tegnet inne i et rektangel av ditt.</p>' +
        '<p>Leser du dette inne i Storybook, ser du på en akkurat nå: hver leksjon er en helt vanlig HTML-fil vist i en ramme. Det er nettopp derfor leksjonen kan ha sin egen <code>&lt;style&gt;</code> og <code>&lt;script&gt;</code> uten å kollidere med noe rundt seg.</p>',

      's.attrs.t': 'Attributtene du alltid skriver',
      's.attrs.d':
        '<p><code>src</code> er adressen til dokumentet som skal lastes, og følger reglene fra leksjon 8 — absolutt eller relativ, løst på samme måte.</p>' +
        '<p><code>title</code> er den folk glemmer. En ramme uten tittel meldes til en skjermleser som en navnløs ramme, og det forteller den besøkende ingenting om hvorvidt det er verdt å gå inn i den. Skriv en kort beskrivelse av hva som er der inne.</p>' +
        '<p><code>width</code> og <code>height</code> reserverer plassen, nøyaktig som på et bilde i leksjon 4, og CSS overtar vanligvis den endelige størrelsen. <code>loading="lazy"</code> utsetter en ramme til den besøkende scroller i nærheten, og det betyr mer her enn for bilder: en ramme er en hel side som skal hentes og kjøres.</p>',

      's.sandbox.t': 'Å ta bort rettigheter, og gi noen tilbake',
      's.sandbox.d':
        '<p><code>sandbox</code> skrevet alene fjerner nesten alt: rammen kan ikke kjøre skript, ikke sende skjemaer, ikke åpne vinduer, ikke navigere siden rundt seg, og behandles som om den kommer fra et opphav som ikke stemmer med noe som helst.</p>' +
        '<p>Så gir du tilbake bare det innholdet faktisk trenger, ett nøkkelord om gangen: <code>allow-scripts</code>, <code>allow-forms</code>, <code>allow-popups</code>, <code>allow-same-origin</code>.</p>' +
        '<p>Én kombinasjon fortjener en advarsel. <code>allow-scripts</code> sammen med <code>allow-same-origin</code>, på innhold fra ditt eget opphav, gir rammen nok tilgang til å strekke seg ut og fjerne sitt eget <code>sandbox</code>-attributt. Da er begrensningen ren pynt. Sandkasser du innhold du ikke stoler på, skal du ikke gi begge.</p>',

      's.allow.t': 'Tillatelser for rammen',
      's.allow.d':
        '<p><code>sandbox</code> styrer hva rammen får gjøre med siden din. <code>allow</code> styrer hvilke enhetsfunksjoner den får nå: kameraet, mikrofonen, fullskjerm, autoavspilling og så videre.</p>' +
        '<p>En ramme får ingen av dem med mindre du lister dem opp, atskilt med semikolon. Dette er det en videoinnbygging trenger for å kunne gå i fullskjerm, og det en møtedings trenger før den i det hele tatt kan spørre om kamera.</p>',

      's.origin.t': 'Hva de to dokumentene får se av hverandre',
      's.origin.d':
        '<p>Om skriptet ditt får nå inn i rammen, koker ned til én sammenligning: samme opphav eller ikke. Et opphav er protokollen, verten og porten fra leksjon 8, og alle tre må stemme. En annen port er et annet opphav; <code>http</code> og <code>https</code> er ulike opphav; <code>altibox.no</code> og <code>www.altibox.no</code> er ulike opphav.</p>' +
        '<p>Samme opphav, og de to dokumentene kan lese og endre hverandre fritt. Ulikt opphav, og nettleseren nekter: du kan peke rammen mot en adresse, men du kan ikke lese hva som står i den. Det er derfor du kan bygge inn en video og ikke lese av hvem som er logget inn i den.</p>' +
        '<p>Det finnes en annen, helt egen regel som er verdt å kjenne. Et nettsted kan nekte å bli rammet inn i det hele tatt, med en svarheader. Det er derfor det å bygge inn en bank eller en innloggingsside bare gir en tom boks — det er ingenting galt med oppmerkingen din; det andre nettstedet sa nei.</p>',

      's.open.t': 'Å åpne et vindu fra skript',
      's.open.d':
        '<p><code>window.open(url, target, features)</code> åpner en ny fane eller et nytt vindu og gir deg en referanse til det tilbake — eller <code>null</code> hvis det ikke ble tillatt.</p>' +
        '<p>Det som overrasker folk, er når det blir tillatt. En nettleser tillater det bare mens den håndterer noe den besøkende gjorde — i praksis inne i en klikkbehandler. Kaller du det mens siden lastes, eller etter et <code>await</code> som brøt kjeden, stopper popup-blokkereren det, og du får <code>null</code> tilbake. Sjekk alltid returverdien.</p>' +
        '<p>Å sende med <code>noopener</code> er den samme beskyttelsen som <code>rel="noopener"</code> fra leksjon 4, og den har en synlig konsekvens: den kutter forbindelsen med vilje, så kallet returnerer <code>null</code> selv om vinduet faktisk åpnet seg. Trenger du referansen, kan du ikke få isolasjonen.</p>',

      's.msg.t': 'Å snakke over grensen',
      's.msg.d':
        '<p>Når de to dokumentene har ulikt opphav, er <code>postMessage</code> den ene døren som står åpen. Den virker både mot en ramme og mot et vindu fra <code>window.open</code>.</p>' +
        '<p>Avsenderen navngir opphavet den er villig til å snakke med. Mottakeren lytter etter en <code>message</code>-hendelse — og den første linjen i den behandleren må sjekke <code>event.origin</code>. Hopper du over den sjekken, har du skrevet en funksjon som hvilken som helst side på internett kan kalle med hvilke som helst argumenter, og det er hele sårbarheten.</p>',

      's.note':
        '<p>Kortversjonen. Gi hver ramme en <code>title</code>. Sandkasse alt du ikke har skrevet selv, og gi aldri <code>allow-scripts</code> og <code>allow-same-origin</code> sammen til innhold du ikke stoler på. Kall <code>window.open</code> bare fra et klikk, og sjekk hva det returnerer. Og når en <code>message</code> kommer inn, sjekk <code>event.origin</code> før du ser på noe annet.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'iframe and window.open',
      kicker: 'Lesson 9 &middot; HTML &amp; CSS',
      title: 'iframe and window.open',
      lead: 'Two ways to put another document beside your own: one framed inside the page, one in a window of its own. Both raise the same question — how much are the two documents allowed to know about each other?',

      's.frame.t': 'A whole document inside a page',
      's.frame.d':
        '<p>An <code>&lt;iframe&gt;</code> is not a component or a widget. It is a second, complete document with its own address, its own <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>, its own stylesheets and its own scripts, drawn inside a rectangle of yours.</p>' +
        '<p>If you are reading this inside Storybook, you are looking at one right now: each lesson is a plain HTML file shown in a frame. That is exactly why a lesson can carry its own <code>&lt;style&gt;</code> and <code>&lt;script&gt;</code> without colliding with anything around it.</p>',

      's.attrs.t': 'The attributes you always write',
      's.attrs.d':
        '<p><code>src</code> is the address of the document to load, and it follows the rules from lesson 8 — absolute or relative, resolved the same way.</p>' +
        '<p><code>title</code> is the one people forget. A frame with no title is announced to a screen reader as an unnamed frame, which tells the visitor nothing about whether it is worth entering. Write a short description of what is inside.</p>' +
        '<p><code>width</code> and <code>height</code> reserve the space, exactly as on an image in lesson 4, and CSS usually takes over the final sizing. <code>loading="lazy"</code> postpones a frame until the visitor scrolls near it, which matters more here than for images: a frame is a whole page to fetch and run.</p>',

      's.sandbox.t': 'Taking powers away, then handing some back',
      's.sandbox.d':
        '<p><code>sandbox</code> written on its own removes almost everything: the frame cannot run scripts, cannot submit forms, cannot open windows, cannot navigate the page around it, and is treated as coming from an origin that matches nothing.</p>' +
        '<p>You then hand back only what the content genuinely needs, one token at a time: <code>allow-scripts</code>, <code>allow-forms</code>, <code>allow-popups</code>, <code>allow-same-origin</code>.</p>' +
        '<p>One combination deserves a warning. <code>allow-scripts</code> together with <code>allow-same-origin</code>, on content from your own origin, gives the frame enough access to reach out and remove its own <code>sandbox</code> attribute. The restriction is then decoration. If you are sandboxing content you do not trust, do not grant both.</p>',

      's.allow.t': 'Permissions for the frame',
      's.allow.d':
        '<p><code>sandbox</code> controls what the frame may do to your page. <code>allow</code> controls which device features it may reach: the camera, the microphone, fullscreen, autoplay, and so on.</p>' +
        '<p>A frame gets none of them unless you list them, separated by semicolons. This is what a video embed needs in order to go fullscreen, and what a meeting widget needs before it can so much as ask for a camera.</p>',

      's.origin.t': 'What the two documents may see of each other',
      's.origin.d':
        '<p>Whether your script can reach inside the frame comes down to one comparison: same origin or not. An origin is the scheme, the host and the port from lesson 8, and all three must match. A different port is a different origin; <code>http</code> and <code>https</code> are different origins; <code>altibox.no</code> and <code>www.altibox.no</code> are different origins.</p>' +
        '<p>Same origin, and the two documents can read and change each other freely. Different origin, and the browser refuses: you can point the frame at an address, but you cannot read what is in it. That is why you can embed a video and cannot read who is logged into it.</p>' +
        '<p>There is a second, entirely separate rule worth knowing. A site can refuse to be framed at all, using a response header. That is why embedding a bank or a login page simply shows an empty box — nothing is wrong with your markup; the other site said no.</p>',

      's.open.t': 'Opening a window from script',
      's.open.d':
        '<p><code>window.open(url, target, features)</code> opens a new tab or window and hands back a reference to it — or <code>null</code> if it was not allowed.</p>' +
        '<p>What surprises people is when it is allowed. A browser only permits it while handling something the visitor did — inside a click handler, in practice. Call it as the page loads, or after an <code>await</code> that broke the chain, and the popup blocker stops it and you get <code>null</code> back. Always check the return value.</p>' +
        '<p>Passing <code>noopener</code> in the features is the same protection as <code>rel="noopener"</code> from lesson 4, and it has a visible consequence: it deliberately severs the connection, so the call returns <code>null</code> even though the window did open. If you need the reference, you cannot have the isolation.</p>',

      's.msg.t': 'Talking across the boundary',
      's.msg.d':
        '<p>When the two documents are different origins, <code>postMessage</code> is the one door left open. It works both towards a frame and towards a window from <code>window.open</code>.</p>' +
        '<p>The sender names the origin it is willing to talk to. The receiver listens for a <code>message</code> event — and the first line of that handler must check <code>event.origin</code>. Skip that check and you have written a function that any page on the internet can call with any arguments, which is the whole vulnerability.</p>',

      's.note':
        '<p>The short version. Give every frame a <code>title</code>. Sandbox anything you did not write, and never grant <code>allow-scripts</code> and <code>allow-same-origin</code> together to content you do not trust. Call <code>window.open</code> only from a click, and check what it returns. And whenever a <code>message</code> arrives, check <code>event.origin</code> before you look at anything else.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'iframe і window.open',
      kicker: 'Урок 9 &middot; HTML &amp; CSS',
      title: 'iframe і window.open',
      lead: 'Два способи поставити поруч зі своїм ще один документ: один вбудований у сторінку, другий у власному вікні. Обидва ставлять те саме питання — скільки цим двом документам дозволено знати одне про одного?',

      's.frame.t': 'Цілий документ усередині сторінки',
      's.frame.d':
        '<p><code>&lt;iframe&gt;</code> — це не компонент і не віджет. Це другий, повноцінний документ із власною адресою, власними <code>&lt;head&gt;</code> і <code>&lt;body&gt;</code>, власними файлами стилів і власними скриптами, намальований усередині вашого прямокутника.</p>' +
        '<p>Якщо ви читаєте це всередині Storybook, то саме зараз на нього й дивитеся: кожен урок — це звичайний файл HTML, показаний у рамці. Саме тому урок може мати власні <code>&lt;style&gt;</code> і <code>&lt;script&gt;</code>, не стикаючись ні з чим навколо.</p>',

      's.attrs.t': 'Атрибути, які пишуть завжди',
      's.attrs.d':
        '<p><code>src</code> — це адреса документа, який треба завантажити, і вона підкоряється правилам з уроку 8: абсолютна чи відносна, розв’язується так само.</p>' +
        '<p><code>title</code> — той, про який забувають. Рамку без заголовка читач екрана оголошує як безіменну рамку, і це нічого не каже відвідувачеві про те, чи варто в неї заходити. Напишіть короткий опис того, що всередині.</p>' +
        '<p><code>width</code> і <code>height</code> резервують місце — так само, як у зображення в уроці 4 — а остаточні розміри зазвичай перебирає CSS. <code>loading="lazy"</code> відкладає рамку, доки відвідувач не прокрутить до неї, і тут це важить більше, ніж для зображень: рамка — це ціла сторінка, яку треба завантажити й виконати.</p>',

      's.sandbox.t': 'Відібрати повноваження, а потім частину повернути',
      's.sandbox.d':
        '<p><code>sandbox</code>, написаний сам по собі, прибирає майже все: рамка не може виконувати скрипти, надсилати форми, відкривати вікна, переводити сторінку навколо себе, і вважається такою, що походить із джерела, яке не збігається ні з чим.</p>' +
        '<p>Далі ви повертаєте лише те, що вмісту справді потрібно, по одному ключовому слову: <code>allow-scripts</code>, <code>allow-forms</code>, <code>allow-popups</code>, <code>allow-same-origin</code>.</p>' +
        '<p>Одна комбінація заслуговує на попередження. <code>allow-scripts</code> разом із <code>allow-same-origin</code> для вмісту з вашого ж джерела дає рамці достатньо доступу, щоб дотягнутися і прибрати власний атрибут <code>sandbox</code>. Тоді обмеження стає просто прикрасою. Якщо ви ізолюєте вміст, якому не довіряєте, не давайте обидва.</p>',

      's.allow.t': 'Дозволи для рамки',
      's.allow.d':
        '<p><code>sandbox</code> керує тим, що рамці дозволено робити з вашою сторінкою. <code>allow</code> керує тим, до яких можливостей пристрою вона може дістатися: камери, мікрофона, повного екрана, автовідтворення тощо.</p>' +
        '<p>Рамка не отримує жодної з них, доки ви їх не перелічите через крапку з комою. Саме це потрібно вбудованому відео, щоб перейти в повний екран, і саме це потрібно віджету зустрічей, перш ніж він узагалі зможе попросити камеру.</p>',

      's.origin.t': 'Що ці два документи бачать одне в одному',
      's.origin.d':
        '<p>Чи зможе ваш скрипт дотягнутися всередину рамки — зводиться до одного порівняння: те саме джерело чи ні. Джерело — це схема, хост і порт з уроку 8, і всі три мають збігатися. Інший порт — інше джерело; <code>http</code> і <code>https</code> — різні джерела; <code>altibox.no</code> і <code>www.altibox.no</code> — різні джерела.</p>' +
        '<p>Те саме джерело — і два документи можуть вільно читати та змінювати одне одного. Різні джерела — і браузер відмовляє: ви можете скерувати рамку на адресу, але не можете прочитати, що в ній. Саме тому ви можете вбудувати відео і не можете прочитати, хто в нього увійшов.</p>' +
        '<p>Є ще одне, цілком окреме правило, яке варто знати. Сайт може взагалі відмовитися бути вбудованим — за допомогою заголовка відповіді. Саме тому спроба вбудувати банк чи сторінку входу дає просто порожню коробку: з вашою розміткою все гаразд, це інший сайт сказав «ні».</p>',

      's.open.t': 'Відкрити вікно зі скрипта',
      's.open.d':
        '<p><code>window.open(url, target, features)</code> відкриває нову вкладку або вікно і повертає посилання на нього — або <code>null</code>, якщо це не дозволили.</p>' +
        '<p>Дивує людей саме те, коли це дозволено. Браузер дозволяє лише тоді, коли він обробляє щось, що зробив відвідувач — на практиці всередині обробника кліку. Викличте його під час завантаження сторінки або після <code>await</code>, який розірвав ланцюжок, — і блокувальник спливайок його зупинить, а ви отримаєте <code>null</code>. Завжди перевіряйте те, що повернулося.</p>' +
        '<p>Передати <code>noopener</code> — це той самий захист, що й <code>rel="noopener"</code> з уроку 4, і він має видимий наслідок: він навмисно розриває зв’язок, тож виклик повертає <code>null</code>, хоча вікно таки відкрилося. Якщо вам потрібне посилання, ізоляції ви не отримаєте.</p>',

      's.msg.t': 'Розмова через межу',
      's.msg.d':
        '<p>Коли в документів різні джерела, <code>postMessage</code> — єдині двері, що лишаються відчиненими. Він працює і для рамки, і для вікна з <code>window.open</code>.</p>' +
        '<p>Відправник називає джерело, з яким готовий говорити. Отримувач слухає подію <code>message</code> — і перший рядок цього обробника має перевірити <code>event.origin</code>. Пропустіть цю перевірку — і ви написали функцію, яку будь-яка сторінка в інтернеті може викликати з будь-якими аргументами; у цьому й полягає вся вразливість.</p>',

      's.note':
        '<p>Коротко. Давайте кожній рамці <code>title</code>. Ізолюйте все, чого не писали самі, і ніколи не давайте <code>allow-scripts</code> і <code>allow-same-origin</code> разом вмісту, якому не довіряєте. Викликайте <code>window.open</code> лише з кліку і перевіряйте, що повернулося. А коли надходить <code>message</code>, перевірте <code>event.origin</code>, перш ніж дивитися на будь-що інше.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Siden din rammer inn en side fra et annet nettsted. Kan skriptet ditt lese innholdet inne i rammen?',
        answer: 1,
        options: [
          {
            text: 'Ja — rammen er en del av dokumentet ditt.',
            why: 'Elementet er det, men dokumentet inni er det ikke. Det er en egen side med sitt eget opphav.',
          },
          {
            text: 'Nei — ulikt opphav, så nettleseren nekter. Bruk <code>postMessage</code>.',
            why: 'Protokoll, vert og port må alle tre stemme. Gjør de ikke det, kan du peke rammen mot adressen, men ikke lese den. <code>postMessage</code> er den ene døren som står åpen.',
          },
          {
            text: 'Ja, hvis du legger til <code>allow-same-origin</code>.',
            why: '<code>allow-same-origin</code> tar bort en begrensning <code>sandbox</code> selv la på. Det gjør ikke et fremmed nettsted til ditt eget opphav.',
          },
          {
            text: 'Bare hvis rammen er synlig på skjermen.',
            why: 'Synlighet har ingenting med saken å gjøre. Det er opphavet som avgjør.',
          },
        ],
      },
      {
        q: 'Du kaller <code>window.open()</code> mens siden lastes, og den returnerer <code>null</code>. Hvorfor?',
        answer: 2,
        options: [
          {
            text: 'Adressen finnes ikke.',
            why: 'En adresse som ikke finnes gir deg fortsatt et vindu — med en feilside i.',
          },
          {
            text: '<code>window.open</code> returnerer alltid <code>null</code>.',
            why: 'Den returnerer en referanse til det nye vinduet når den får lov. <code>null</code> betyr at den ikke fikk lov.',
          },
          {
            text: 'Popup-blokkereren stoppet den: den tillates bare mens nettleseren håndterer noe den besøkende gjorde.',
            why: 'Flytt kallet inn i en klikkbehandler. Det samme skjer etter et <code>await</code> som har brutt kjeden fra klikket.',
          },
          {
            text: 'Du glemte <code>target="_blank"</code>.',
            why: '<code>target</code> avgjør hvor siden åpnes, ikke om den får lov til å åpnes.',
          },
        ],
      },
      {
        q: 'Du sandkasser innhold du ikke stoler på med <code>sandbox="allow-scripts allow-same-origin"</code>, fra ditt eget opphav. Hva er problemet?',
        answer: 0,
        options: [
          {
            text: 'Rammen kan nå fjerne sitt eget <code>sandbox</code>-attributt, så begrensningen er ren pynt.',
            why: 'Med skript tillatt og samme opphav har innholdet nok tilgang til å strekke seg ut i siden din og ta bort sin egen sandkasse. Gi aldri begge to til innhold du ikke stoler på.',
          },
          {
            text: 'Ingenting — det er den anbefalte kombinasjonen.',
            why: 'Det er nettopp kombinasjonen som anbefales mot, og av denne grunnen.',
          },
          {
            text: 'Rammen vil ikke kunne kjøre skript i det hele tatt.',
            why: '<code>allow-scripts</code> gir den nettopp den retten. Det er halvparten av problemet.',
          },
          {
            text: 'Det blokkerer kamera og mikrofon.',
            why: 'Enhetsfunksjoner styres av <code>allow</code>, ikke av <code>sandbox</code>.',
          },
        ],
      },
      {
        q: 'Hvilket attributt gjør at en skjermleser kan si hva en ramme inneholder?',
        answer: 2,
        options: [
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> hører til <code>&lt;img&gt;</code> fra leksjon 4. En ramme tar ikke imot det.',
          },
          {
            text: '<code>name</code>',
            why: '<code>name</code> gir rammen et navn å målrette lenker mot. Det leses ikke opp som en beskrivelse.',
          },
          {
            text: '<code>title</code>',
            why: 'Uten den meldes rammen som en navnløs ramme, og den besøkende har ingen måte å vite om det er verdt å gå inn i den.',
          },
          {
            text: '<code>sandbox</code>',
            why: '<code>sandbox</code> handler om rettigheter, ikke om beskrivelse.',
          },
        ],
      },
      {
        q: 'Du lytter etter <code>message</code>-hendelser fra en ramme. Hva må skje først i behandleren?',
        answer: 1,
        options: [
          {
            text: 'Les <code>event.data</code> og finn ut hva slags melding det er.',
            why: 'Da har du allerede begynt å stole på dataene. Sjekken må komme før du ser på dem.',
          },
          {
            text: 'Sjekk <code>event.origin</code> mot opphavet du forventer.',
            why: 'Hvem som helst kan sende deg en melding. Uten den sjekken har du skrevet en funksjon hvilken som helst side på internett kan kalle med hvilke som helst argumenter.',
          },
          {
            text: 'Sjekk at rammen fortsatt er synlig.',
            why: 'Synlighet sier ingenting om hvem som sendte meldingen.',
          },
          {
            text: 'Ingenting — nettleseren slipper bare igjennom meldinger fra rammen din.',
            why: 'Den gjør ikke det. Enhver side som har en referanse til vinduet ditt, kan sende.',
          },
        ],
      },
      {
        q: 'Du kaller <code>window.open(url, "_blank", "noopener")</code>. Vinduet åpner seg, men kallet returnerer <code>null</code>. Er noe galt?',
        answer: 1,
        options: [
          {
            text: 'Ja — <code>noopener</code> er skrevet feil.',
            why: 'Det er skrevet riktig. <code>null</code> er det forventede svaret her.',
          },
          {
            text: 'Nei — <code>noopener</code> kutter forbindelsen med vilje, så det finnes ingen referanse å gi tilbake.',
            why: 'Det er samme beskyttelse som <code>rel="noopener"</code> fra leksjon 4: den nye siden skal ikke kunne nå tilbake til din. Prisen er at du heller ikke kan nå den.',
          },
          {
            text: 'Ja — du må også sende <code>noreferrer</code>.',
            why: '<code>noreferrer</code> skjuler hvilken side du kom fra. Det endrer ikke returverdien.',
          },
          {
            text: 'Ja — vinduet ble egentlig ikke åpnet.',
            why: 'Det åpnet seg, som du ser. Bare referansen er holdt tilbake.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'Your page frames a page from another site. Can your script read the content inside the frame?',
        answer: 1,
        options: [
          {
            text: 'Yes — the frame is part of your document.',
            why: 'The element is, but the document inside it is not. That is a separate page with its own origin.',
          },
          {
            text: 'No — different origin, so the browser refuses. Use <code>postMessage</code>.',
            why: 'Scheme, host and port must all three match. If they do not, you can point the frame at the address but not read it. <code>postMessage</code> is the one door left open.',
          },
          {
            text: 'Yes, if you add <code>allow-same-origin</code>.',
            why: '<code>allow-same-origin</code> removes a restriction that <code>sandbox</code> itself imposed. It does not make a foreign site into your own origin.',
          },
          {
            text: 'Only if the frame is visible on screen.',
            why: 'Visibility has nothing to do with it. The origin decides.',
          },
        ],
      },
      {
        q: 'You call <code>window.open()</code> as the page loads and it returns <code>null</code>. Why?',
        answer: 2,
        options: [
          {
            text: 'The address does not exist.',
            why: 'An address that does not exist still gives you a window — with an error page in it.',
          },
          {
            text: '<code>window.open</code> always returns <code>null</code>.',
            why: 'It returns a reference to the new window when it is allowed. <code>null</code> means it was not allowed.',
          },
          {
            text: 'The popup blocker stopped it: it is only allowed while the browser is handling something the visitor did.',
            why: 'Move the call inside a click handler. The same thing happens after an <code>await</code> that has broken the chain from the click.',
          },
          {
            text: 'You forgot <code>target="_blank"</code>.',
            why: '<code>target</code> decides where the page opens, not whether it is allowed to open.',
          },
        ],
      },
      {
        q: 'You sandbox untrusted content with <code>sandbox="allow-scripts allow-same-origin"</code>, served from your own origin. What is the problem?',
        answer: 0,
        options: [
          {
            text: 'The frame can now remove its own <code>sandbox</code> attribute, so the restriction is decoration.',
            why: 'With scripts allowed and the same origin, the content has enough access to reach out into your page and take its own sandbox off. Never grant both to content you do not trust.',
          },
          {
            text: 'Nothing — that is the recommended combination.',
            why: 'It is precisely the combination that is recommended against, and for this reason.',
          },
          {
            text: 'The frame will not be able to run scripts at all.',
            why: '<code>allow-scripts</code> is exactly what gives it that right. That is half the problem.',
          },
          {
            text: 'It blocks the camera and microphone.',
            why: 'Device features are controlled by <code>allow</code>, not by <code>sandbox</code>.',
          },
        ],
      },
      {
        q: 'Which attribute lets a screen reader say what a frame contains?',
        answer: 2,
        options: [
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> belongs to <code>&lt;img&gt;</code> from lesson 4. A frame does not take one.',
          },
          {
            text: '<code>name</code>',
            why: '<code>name</code> gives the frame a name for links to target. It is not read out as a description.',
          },
          {
            text: '<code>title</code>',
            why: 'Without it the frame is announced as an unnamed frame, and the visitor has no way to know whether it is worth entering.',
          },
          {
            text: '<code>sandbox</code>',
            why: '<code>sandbox</code> is about permissions, not description.',
          },
        ],
      },
      {
        q: 'You are listening for <code>message</code> events from a frame. What has to happen first in the handler?',
        answer: 1,
        options: [
          {
            text: 'Read <code>event.data</code> and work out what kind of message it is.',
            why: 'By then you have already started trusting the data. The check has to come before you look at it.',
          },
          {
            text: 'Check <code>event.origin</code> against the origin you expect.',
            why: 'Anyone can send you a message. Without that check you have written a function any page on the internet can call with any arguments.',
          },
          {
            text: 'Check that the frame is still visible.',
            why: 'Visibility says nothing about who sent the message.',
          },
          {
            text: 'Nothing — the browser only lets through messages from your own frame.',
            why: 'It does not. Any page holding a reference to your window can send one.',
          },
        ],
      },
      {
        q: 'You call <code>window.open(url, "_blank", "noopener")</code>. The window opens, but the call returns <code>null</code>. Is something wrong?',
        answer: 1,
        options: [
          {
            text: 'Yes — <code>noopener</code> is misspelled.',
            why: 'It is spelled correctly. <code>null</code> is the expected answer here.',
          },
          {
            text: 'No — <code>noopener</code> deliberately severs the connection, so there is no reference to hand back.',
            why: 'It is the same protection as <code>rel="noopener"</code> from lesson 4: the new page must not be able to reach back into yours. The price is that you cannot reach it either.',
          },
          {
            text: 'Yes — you also have to pass <code>noreferrer</code>.',
            why: '<code>noreferrer</code> hides which page you came from. It does not change the return value.',
          },
          {
            text: 'Yes — the window did not really open.',
            why: 'It did open, as you can see. Only the reference is withheld.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ваша сторінка вбудовує сторінку з іншого сайту. Чи може ваш скрипт прочитати вміст усередині рамки?',
        answer: 1,
        options: [
          {
            text: 'Так — рамка є частиною вашого документа.',
            why: 'Елемент — так, але документ усередині — ні. Це окрема сторінка з власним джерелом.',
          },
          {
            text: 'Ні — різні джерела, тож браузер відмовляє. Використайте <code>postMessage</code>.',
            why: 'Схема, хост і порт мають збігатися всі три. Якщо ні, ви можете скерувати рамку на адресу, але не прочитати її. <code>postMessage</code> — єдині двері, що лишаються відчиненими.',
          },
          {
            text: 'Так, якщо додати <code>allow-same-origin</code>.',
            why: '<code>allow-same-origin</code> знімає обмеження, яке наклав сам <code>sandbox</code>. Це не робить чужий сайт вашим джерелом.',
          },
          {
            text: 'Лише якщо рамку видно на екрані.',
            why: 'Видимість тут ні до чого. Вирішує джерело.',
          },
        ],
      },
      {
        q: 'Ви викликаєте <code>window.open()</code> під час завантаження сторінки, і він повертає <code>null</code>. Чому?',
        answer: 2,
        options: [
          {
            text: 'Такої адреси не існує.',
            why: 'Адреса, якої не існує, все одно дасть вам вікно — зі сторінкою помилки в ньому.',
          },
          {
            text: '<code>window.open</code> завжди повертає <code>null</code>.',
            why: 'Він повертає посилання на нове вікно, коли це дозволено. <code>null</code> означає, що не дозволили.',
          },
          {
            text: 'Блокувальник спливайок його зупинив: це дозволено лише тоді, коли браузер обробляє дію відвідувача.',
            why: 'Перенесіть виклик в обробник кліку. Те саме стається після <code>await</code>, який розірвав ланцюжок від кліку.',
          },
          {
            text: 'Ви забули <code>target="_blank"</code>.',
            why: '<code>target</code> визначає, де відкриється сторінка, а не чи дозволено їй відкритися.',
          },
        ],
      },
      {
        q: 'Ви ізолюєте недовірений вміст через <code>sandbox="allow-scripts allow-same-origin"</code>, що віддається з вашого ж джерела. У чому проблема?',
        answer: 0,
        options: [
          {
            text: 'Рамка тепер може прибрати власний атрибут <code>sandbox</code>, тож обмеження — лише прикраса.',
            why: 'Коли скрипти дозволені й джерело те саме, вміст має достатньо доступу, щоб дотягнутися до вашої сторінки і зняти з себе пісочницю. Ніколи не давайте обидва вмісту, якому не довіряєте.',
          },
          {
            text: 'Нічого — це рекомендована комбінація.',
            why: 'Це саме та комбінація, від якої застерігають, і саме з цієї причини.',
          },
          {
            text: 'Рамка взагалі не зможе виконувати скрипти.',
            why: '<code>allow-scripts</code> якраз і дає їй це право. У цьому половина проблеми.',
          },
          {
            text: 'Це блокує камеру й мікрофон.',
            why: 'Можливостями пристрою керує <code>allow</code>, а не <code>sandbox</code>.',
          },
        ],
      },
      {
        q: 'Який атрибут дає читачеві екрана змогу сказати, що міститься в рамці?',
        answer: 2,
        options: [
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> належить до <code>&lt;img&gt;</code> з уроку 4. Рамка його не приймає.',
          },
          {
            text: '<code>name</code>',
            why: '<code>name</code> дає рамці ім’я, на яке можуть націлюватися посилання. Як опис він не озвучується.',
          },
          {
            text: '<code>title</code>',
            why: 'Без нього рамку оголошують як безіменну, і відвідувач ніяк не дізнається, чи варто в неї заходити.',
          },
          {
            text: '<code>sandbox</code>',
            why: '<code>sandbox</code> стосується повноважень, а не опису.',
          },
        ],
      },
      {
        q: 'Ви слухаєте події <code>message</code> від рамки. Що має статися першим в обробнику?',
        answer: 1,
        options: [
          {
            text: 'Прочитати <code>event.data</code> і з’ясувати, що це за повідомлення.',
            why: 'На цей момент ви вже почали довіряти даним. Перевірка має бути до того, як ви на них подивитеся.',
          },
          {
            text: 'Перевірити <code>event.origin</code> проти джерела, на яке ви очікуєте.',
            why: 'Надіслати вам повідомлення може будь-хто. Без цієї перевірки ви написали функцію, яку будь-яка сторінка в інтернеті може викликати з будь-якими аргументами.',
          },
          {
            text: 'Перевірити, чи рамка досі видима.',
            why: 'Видимість нічого не каже про те, хто надіслав повідомлення.',
          },
          {
            text: 'Нічого — браузер пропускає лише повідомлення з вашої рамки.',
            why: 'Не пропускає. Надіслати може будь-яка сторінка, що має посилання на ваше вікно.',
          },
        ],
      },
      {
        q: 'Ви викликаєте <code>window.open(url, "_blank", "noopener")</code>. Вікно відкривається, але виклик повертає <code>null</code>. Щось не так?',
        answer: 1,
        options: [
          {
            text: 'Так — <code>noopener</code> написано з помилкою.',
            why: 'Написано правильно. <code>null</code> тут і є очікуваною відповіддю.',
          },
          {
            text: 'Ні — <code>noopener</code> навмисно розриває зв’язок, тож повертати нема чого.',
            why: 'Це той самий захист, що й <code>rel="noopener"</code> з уроку 4: нова сторінка не повинна мати змоги дотягнутися до вашої. Ціна — ви теж не дотягнетеся до неї.',
          },
          {
            text: 'Так — треба ще передати <code>noreferrer</code>.',
            why: '<code>noreferrer</code> приховує, з якої сторінки ви прийшли. На те, що повертається, він не впливає.',
          },
          {
            text: 'Так — вікно насправді не відкрилося.',
            why: 'Воно відкрилося, як ви й бачите. Просто посилання вам не віддали.',
          },
        ],
      },
    ],
  },
});
