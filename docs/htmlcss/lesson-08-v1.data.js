/*
 * Content of lesson 08 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'URL, søk, # i <a>, id',
      kicker: 'Leksjon 8 &middot; HTML &amp; CSS',
      title: 'URL, søk, # i &lt;a&gt;, id',
      lead: 'En adresse er ikke én streng, men seks deler, og hver del leses av sin egen mottaker. Den siste av dem — alt etter emneknaggen — er den eneste serveren aldri ser, og nettopp det forklarer hvordan lenker inne i en side virker.',

      's.parts.t': 'Delene i en adresse',
      's.parts.d':
        '<p>En URL ser ut som én lang streng, men den har en fast grammatikk, og hvert stykke har sitt eget publikum.</p>' +
        '<p>Nettleseren bruker protokoll, vert og port til å finne en maskin og åpne en forbindelse. Serveren mottar stien og spørrestrengen og bestemmer hva den skal svare. Fragmentet forlater aldri nettleseren. Holder du den delingen i hodet, svarer den på de fleste spørsmål om adresser før du rekker å stille dem.</p>',

      's.rel.t': 'Absolutt, rot-relativ, relativ',
      's.rel.d':
        '<p>En adresse skrevet i sin helhet virker overalt. De fleste lenker skrives ikke i sin helhet, og hvor de peker, avhenger av hvor de står.</p>' +
        '<p>En sti som begynner med <code>/</code> måles fra roten av nettstedet. En sti uten skråstrek foran måles fra mappen til det gjeldende dokumentet, og <code>../</code> går opp ett nivå. Setter dokumentet en <code>&lt;base&gt;</code>, som i leksjon 2, erstatter den basen den gjeldende mappen som utgangspunkt.</p>',

      's.query.t': 'Spørrestrengen, eller søket',
      's.query.d':
        '<p>Alt etter det første <code>?</code> er spørrestrengen. Det er en liste med <code>navn=verdi</code>-par bundet sammen av <code>&amp;</code>, og nettleseren kaller den <em>search</em> — <code>location.search</code> gir deg nøyaktig den delen.</p>' +
        '<p>Du har allerede laget en uten å tenke over det. Et <code>&lt;form method="get"&gt;</code> fra leksjon 5 samler feltene sine og skriver akkurat dette: hvert feltnavn, et likhetstegn, verdien, bundet sammen med og-tegn. Det er også grunnen til at leksjon 5 sa at et passord ikke skal sendes slik — spørrestrengen er en del av adressen, så den havner i historikken, i bokmerkene og i serverloggene.</p>',

      's.pct.t': 'Prosentkoding',
      's.pct.d':
        '<p>Grammatikken over tillater bare et begrenset sett med tegn. Et mellomrom, en <code>æ</code>, eller et <code>&amp;</code> som hører hjemme inne i en verdi og ikke mellom par, må alle skrives på en annen måte: et <code>%</code> etterfulgt av byten i heksadesimal form.</p>' +
        '<p>De bytene er UTF-8-bytene fra leksjon 6, og det er derfor <code>æ</code> blir <code>%C3%A6</code> — de samme to bytene, i en annen notasjon. Et mellomrom er <code>%20</code>, et bokstavelig og-tegn inne i en verdi er <code>%26</code>, og en bokstavelig emneknagg er <code>%23</code>.</p>' +
        '<p>Så kommer delen som lurer alle. Så snart adressen skrives inn i en <code>href</code>, er <code>&amp;</code>-skilletegnene HTML, og leksjon 7 gjelder: de må skrives om én gang til, som <code>&amp;amp;</code>. To kodinger oppå hverandre, for to forskjellige lesere — URL-tolkeren og HTML-tolkeren.</p>',

      's.hash.t': 'Fragmentet: delen serveren aldri ser',
      's.hash.d':
        '<p>Alt etter det første <code>#</code> er fragmentet, og det er av en annen art enn alt foran det. Nettleseren klipper det av før forespørselen sendes. En server kan ikke lese det, ikke logge det og ikke handle på det — ikke fordi den lar være, men fordi det aldri kommer fram.</p>' +
        '<p>Nettleseren beholder det og gjør én ting med det: den leter etter et element i dokumentet med en <code>id</code> som stemmer, og ruller dit. Å endre bare fragmentet laster derfor ingenting på nytt; det er en bevegelse inne i en side som allerede er der.</p>' +
        '<p>Et tomt fragment, eller navnet <code>top</code> når ingen element gjør krav på det, betyr toppen av dokumentet.</p>',

      's.id.t': 'Målet',
      's.id.d':
        '<p><code>id</code> gir ett element et navn, og det navnet er det et fragment leter etter.</p>' +
        '<p>Den må være unik i dokumentet. Ingenting håndhever det, og ingenting går synlig i stykker når det brytes — nettleseren bruker rett og slett den første treffet, og resten av siden din er stille uenig med seg selv. Den kan heller ikke være tom eller inneholde mellomrom, og den skiller store og små bokstaver: <code>Priser</code> og <code>priser</code> er to forskjellige navn.</p>' +
        '<p>Det samme attributtet gjør flere jobber samtidig. Det er dette <code>&lt;label for&gt;</code> pekte på i leksjon 5, det <code>#navn</code> velger i CSS, og det skript bruker for å finne et element.</p>',

      's.link.t': 'Å lenke inne i en side',
      's.link.d':
        '<p>En <code>href</code> som bare er et fragment, blir værende på den gjeldende siden. En som har en sti foran seg, laster den siden først og hopper etterpå.</p>' +
        '<p>To ting å se opp for. En naken <code>href="#"</code> er ingen plassholder: den hopper til toppen av dokumentet og skriver en <code>#</code> inn i adressefeltet. Trenger du noe klikkbart som bare kjører JavaScript, ga leksjon 5 deg allerede svaret — en <code>&lt;button type="button"&gt;</code>. Og har siden din en fast topplinje, ruller nettleseren målet rett inn under den; <code>scroll-margin-top</code> på målelementet reserverer avstanden.</p>',

      's.note':
        '<p>Hele leksjonen på én linje: serveren ser stien og spørrestrengen, nettleseren alene ser fragmentet. Prosentkod det som skal inn i en URL, skriv så om og-tegnene én gang til for HTML-en, og gi hvert hoppmål en unik <code>id</code>.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'URL, search, # in <a>, id',
      kicker: 'Lesson 8 &middot; HTML &amp; CSS',
      title: 'URL, search, # in &lt;a&gt;, id',
      lead: 'An address is not one string but six parts, each read by a different party. The last of them — everything after the hash — is the only part the server never sees, and that single fact explains how links inside a page work.',

      's.parts.t': 'The parts of an address',
      's.parts.d':
        '<p>A URL looks like one long string, but it has a fixed grammar, and each piece has its own audience.</p>' +
        '<p>The browser uses the scheme, host and port to find a machine and open a connection. The server receives the path and the query and decides what to answer. The fragment never leaves the browser. Keep that division in mind and it answers most questions about addresses before you ask them.</p>',

      's.rel.t': 'Absolute, root-relative, relative',
      's.rel.d':
        '<p>An address written in full works from anywhere. Most links are not written in full, and where they point depends on where they are written.</p>' +
        '<p>A path beginning with <code>/</code> is measured from the root of the site. A path with no leading slash is measured from the folder of the current document, and <code>../</code> steps up one level. If the document sets a <code>&lt;base&gt;</code>, as in lesson 2, that base replaces the current folder as the starting point.</p>',

      's.query.t': 'The query, or the search',
      's.query.d':
        '<p>Everything after the first <code>?</code> is the query string. It is a list of <code>name=value</code> pairs joined by <code>&amp;</code>, and the browser calls it the <em>search</em> — <code>location.search</code> hands you exactly that part.</p>' +
        '<p>You have already built one without thinking about it. A <code>&lt;form method="get"&gt;</code> from lesson 5 collects its fields and writes precisely this: each field name, an equals sign, its value, joined by ampersands. It is also the reason lesson 5 said not to send a password this way — the query is part of the address, so it lands in the history, in bookmarks and in server logs.</p>',

      's.pct.t': 'Percent-encoding',
      's.pct.d':
        '<p>The grammar above permits only a limited set of characters. A space, an <code>æ</code>, or an <code>&amp;</code> that belongs inside a value rather than between pairs, all have to be written another way: a <code>%</code> followed by the byte in hexadecimal.</p>' +
        '<p>Those bytes are the UTF-8 bytes from lesson 6, which is why <code>æ</code> becomes <code>%C3%A6</code> — the same two bytes in a different notation. A space is <code>%20</code>, a literal ampersand inside a value is <code>%26</code>, and a literal hash is <code>%23</code>.</p>' +
        '<p>Then comes the part that catches everyone. Once that address is written into an <code>href</code>, the <code>&amp;</code> separators are HTML, and lesson 7 applies: they have to be escaped again as <code>&amp;amp;</code>. Two encodings stacked, for two different readers — the URL parser and the HTML parser.</p>',

      's.hash.t': 'The fragment: the part the server never sees',
      's.hash.d':
        '<p>Everything after the first <code>#</code> is the fragment, and it is different in kind from everything before it. The browser strips it off before sending the request. A server cannot read it, cannot log it and cannot act on it — not because it chooses not to, but because it never arrives.</p>' +
        '<p>The browser keeps it and does one thing with it: it looks for an element in the document whose <code>id</code> matches, and scrolls there. Changing only the fragment therefore reloads nothing; it is a movement inside a page that is already loaded.</p>' +
        '<p>An empty fragment, or the name <code>top</code> when no element claims it, means the top of the document.</p>',

      's.id.t': 'The target',
      's.id.d':
        '<p><code>id</code> gives one element a name, and that name is what a fragment looks for.</p>' +
        '<p>It must be unique in the document. Nothing enforces this, and nothing visibly breaks when it is violated — the browser simply uses the first match, and the rest of your page quietly disagrees with itself. It also must not be empty and must not contain spaces, and it is case-sensitive: <code>Priser</code> and <code>priser</code> are two different names.</p>' +
        '<p>The same attribute is doing several jobs at once. It is what <code>&lt;label for&gt;</code> pointed at in lesson 5, what <code>#name</code> selects in CSS, and what scripts use to find an element.</p>',

      's.link.t': 'Linking within a page',
      's.link.d':
        '<p>An <code>href</code> that is only a fragment stays on the current page. One with a path in front of it loads that page first and then jumps.</p>' +
        '<p>Two things to watch. A bare <code>href="#"</code> is not a placeholder: it jumps to the top of the document and writes a <code>#</code> into the address bar. If you need something clickable that only runs JavaScript, lesson 5 already gave you the answer — a <code>&lt;button type="button"&gt;</code>. And if your page has a fixed header, the browser will scroll the target right underneath it; <code>scroll-margin-top</code> on the target element reserves the gap.</p>',

      's.note':
        '<p>The whole lesson in one line: the server sees the path and the query, the browser alone sees the fragment. Percent-encode what goes into a URL, then escape the ampersands again for the HTML, and give every jump target a unique <code>id</code>.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'URL, пошук, # у <a>, id',
      kicker: 'Урок 8 &middot; HTML &amp; CSS',
      title: 'URL, пошук, # у &lt;a&gt;, id',
      lead: 'Адреса — це не один рядок, а шість частин, і кожну читає свій адресат. Остання з них — усе після решітки — єдина, якої сервер ніколи не бачить, і саме цей факт пояснює, як працюють посилання всередині сторінки.',

      's.parts.t': 'Частини адреси',
      's.parts.d':
        '<p>URL виглядає як один довгий рядок, але має сталу граматику, і в кожної частини своя аудиторія.</p>' +
        '<p>Браузер використовує схему, хост і порт, щоб знайти машину і відкрити з’єднання. Сервер отримує шлях і рядок запиту та вирішує, що відповісти. Фрагмент не залишає браузера взагалі. Тримайте цей поділ у голові — і він відповість на більшість питань про адреси ще до того, як ви їх поставите.</p>',

      's.rel.t': 'Абсолютна, коренева, відносна',
      's.rel.d':
        '<p>Адреса, написана повністю, працює звідусіль. Більшість посилань пишуть не повністю, і те, куди вони ведуть, залежить від того, де вони написані.</p>' +
        '<p>Шлях, що починається з <code>/</code>, відлічується від кореня сайту. Шлях без початкової скісної риски відлічується від теки поточного документа, а <code>../</code> піднімає на рівень вище. Якщо документ задає <code>&lt;base&gt;</code>, як в уроці 2, ця база замінює поточну теку як відправну точку.</p>',

      's.query.t': 'Рядок запиту, або пошук',
      's.query.d':
        '<p>Усе після першого <code>?</code> — це рядок запиту. Це перелік пар <code>назва=значення</code>, з’єднаних <code>&amp;</code>, і браузер називає його <em>search</em> — <code>location.search</code> віддає саме цю частину.</p>' +
        '<p>Ви вже створювали такий, не замислюючись. <code>&lt;form method="get"&gt;</code> з уроку 5 збирає свої поля і пише рівно це: назву кожного поля, знак рівності, значення, з’єднані амперсандами. Це ж і причина, чому урок 5 казав не надсилати так пароль: рядок запиту є частиною адреси, тож він потрапляє в історію, в закладки та в журнали сервера.</p>',

      's.pct.t': 'Відсоткове кодування',
      's.pct.d':
        '<p>Наведена граматика дозволяє лише обмежений набір символів. Пробіл, <code>æ</code> або <code>&amp;</code>, який належить усередині значення, а не між парами, — усе це доводиться писати інакше: <code>%</code> і далі байт у шістнадцятковому вигляді.</p>' +
        '<p>Ці байти — ті самі байти UTF-8 з уроку 6, і саме тому <code>æ</code> стає <code>%C3%A6</code>: ті самі два байти в іншому записі. Пробіл — це <code>%20</code>, буквальний амперсанд усередині значення — <code>%26</code>, а буквальна решітка — <code>%23</code>.</p>' +
        '<p>А далі те, що підводить усіх. Щойно ця адреса потрапляє в <code>href</code>, роздільники <code>&amp;</code> стають HTML, і діє урок 7: їх треба екранувати ще раз, як <code>&amp;amp;</code>. Два кодування одне на одному, для двох різних читачів — розбирача URL і розбирача HTML.</p>',

      's.hash.t': 'Фрагмент: частина, якої сервер ніколи не бачить',
      's.hash.d':
        '<p>Усе після першої <code>#</code> — це фрагмент, і він іншої природи, ніж усе перед ним. Браузер відрізає його ще до надсилання запиту. Сервер не може його прочитати, не може записати в журнал і не може на нього зреагувати — не тому, що не хоче, а тому, що фрагмент до нього не доходить.</p>' +
        '<p>Браузер лишає його собі й робить із ним одну річ: шукає в документі елемент, чий <code>id</code> збігається, і прокручує туди. Тому зміна самого лише фрагмента нічого не перезавантажує; це рух усередині сторінки, яка вже завантажена.</p>' +
        '<p>Порожній фрагмент або назва <code>top</code>, якщо на неї не претендує жоден елемент, означає початок документа.</p>',

      's.id.t': 'Ціль',
      's.id.d':
        '<p><code>id</code> дає одному елементу ім’я, і саме це ім’я шукає фрагмент.</p>' +
        '<p>Воно має бути унікальним у документі. Ніщо цього не перевіряє, і ніщо помітно не ламається, коли правило порушено: браузер просто бере перший збіг, а решта сторінки тихо суперечить сама собі. Воно також не може бути порожнім і не може містити пробілів, і воно чутливе до регістру: <code>Priser</code> і <code>priser</code> — два різні імена.</p>' +
        '<p>Той самий атрибут виконує одразу кілька робіт. Це те, на що вказував <code>&lt;label for&gt;</code> в уроці 5, те, що <code>#назва</code> обирає в CSS, і те, за чим скрипти знаходять елемент.</p>',

      's.link.t': 'Посилання всередині сторінки',
      's.link.d':
        '<p><code>href</code>, який складається лише з фрагмента, залишається на поточній сторінці. Той, перед яким стоїть шлях, спершу завантажує ту сторінку, а потім переходить.</p>' +
        '<p>Дві речі, за якими варто стежити. Голий <code>href="#"</code> — це не заповнювач: він переходить на початок документа й записує <code>#</code> в адресний рядок. Якщо потрібне щось клікабельне, що лише запускає JavaScript, урок 5 уже дав відповідь — <code>&lt;button type="button"&gt;</code>. А якщо у вашої сторінки є закріплена шапка, браузер прокрутить ціль просто під неї; <code>scroll-margin-top</code> на цільовому елементі резервує цей проміжок.</p>',

      's.note':
        '<p>Увесь урок в одному рядку: сервер бачить шлях і рядок запиту, фрагмент бачить лише браузер. Кодуйте відсотками те, що йде в URL, потім екрануйте амперсанди ще раз для HTML і давайте кожній цілі переходу унікальний <code>id</code>.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hvilken del av en adresse når aldri fram til serveren?',
        answer: 1,
        options: [
          {
            text: 'Spørrestrengen, etter <code>?</code>',
            why: 'Spørrestrengen sendes med forespørselen. Det er nettopp derfor leksjon 5 sa at et passord ikke hører hjemme der.',
          },
          {
            text: 'Fragmentet, etter <code>#</code>',
            why: 'Nettleseren klipper det av før den sender. En server kan verken lese det eller logge det, fordi det aldri kommer fram.',
          },
          {
            text: 'Stien',
            why: 'Stien er nettopp det serveren mottar; det er slik den vet hva du ba om.',
          },
          {
            text: 'Porten',
            why: 'Porten er måten nettleseren når serveren i det hele tatt.',
          },
        ],
      },
      {
        q: 'Du vil ha en lenke der spørrestrengen er <code>q=Bræ hytte</code> og <code>side=2</code>. Hvilken <code>href</code> er riktig?',
        answer: 1,
        options: [
          {
            text: '<code>href="?q=Bræ hytte&amp;side=2"</code>',
            why: 'To problemer: mellomrommet og æ-en er ikke tillatt rått i en URL, og det nakne <code>&amp;</code> er et HTML-og-tegn som skal skrives om.',
          },
          {
            text: '<code>href="?q=Br%C3%A6%20hytte&amp;amp;side=2"</code>',
            why: 'Prosentkoding for URL-tolkeren — <code>%C3%A6</code> er UTF-8-bytene til æ, <code>%20</code> er mellomrommet — og deretter <code>&amp;amp;</code> for HTML-tolkeren. To kodinger for to lesere.',
          },
          {
            text: '<code>href="?q=Br&amp;aelig;%20hytte&amp;amp;side=2"</code>',
            why: 'En HTML-entitet inne i en URL blir de bokstavelige tegnene i spørrestrengen, ikke en æ. Tegn i en URL prosentkodes, de skrives ikke om til entiteter.',
          },
          {
            text: '<code>href="?q=Br%C3%A6%20hytte&amp;side=2"</code>',
            why: 'Prosentkodingen er riktig, men skilletegnet er fortsatt et nakent <code>&amp;</code> i HTML. Skriv det om som <code>&amp;amp;</code>.',
          },
        ],
      },
      {
        q: 'Du klikker på <code>&lt;a href="#priser"&gt;</code>, og ingenting skjer. Hva er den mest sannsynlige grunnen?',
        answer: 0,
        options: [
          {
            text: 'Ingen element i dokumentet har <code>id="priser"</code>.',
            why: 'Fragmentet matches mot id-er. Uten noe å matche har nettleseren ingen steder å rulle, og blir stående. Se etter en skrivefeil, eller ulik bruk av store bokstaver — id-er skiller på det.',
          },
          {
            text: 'Lenken trenger <code>target="_blank"</code>.',
            why: 'Det ville åpnet en ny fane, som er det motsatte av hva et hopp inne i siden vil.',
          },
          {
            text: 'Serveren svarte ikke.',
            why: 'Serveren er ikke involvert. Et fragment forlater aldri nettleseren.',
          },
          {
            text: 'Siden må lastes på nytt først.',
            why: 'Å endre bare fragmentet laster med vilje ingenting på nytt. Det er en bevegelse inne i en side som allerede er der.',
          },
        ],
      },
      {
        q: 'Det gjeldende dokumentet er <code>/lessons/htmlcss/lesson-08-v1.html</code>. Hvor fører <code>href="../styles.css"</code>?',
        answer: 1,
        options: [
          {
            text: '<code>/styles.css</code>',
            why: 'Det ville vært svaret for <code>/styles.css</code>, målt fra roten. <code>../</code> går bare opp ett nivå.',
          },
          {
            text: '<code>/lessons/styles.css</code>',
            why: 'Dokumentet ligger i <code>/lessons/htmlcss/</code>; <code>../</code> går opp til <code>/lessons/</code>, og filnavnet legges til der.',
          },
          {
            text: '<code>/lessons/htmlcss/styles.css</code>',
            why: 'Det er dit <code>styles.css</code> uten <code>../</code> ville pekt.',
          },
          {
            text: 'Det kommer an på serveren.',
            why: 'Relative adresser løses av nettleseren, før noen forespørsel sendes.',
          },
        ],
      },
      {
        q: 'To elementer på siden din har begge <code>id="priser"</code>. Hva skjer?',
        answer: 2,
        options: [
          {
            text: 'Nettleseren melder en feil og stopper.',
            why: 'Ingenting meldes. Det er nettopp det som gjør feilen vanskelig å finne.',
          },
          {
            text: 'Begge rulles fram etter tur.',
            why: 'Det går bare an å rulle til ett sted.',
          },
          {
            text: 'Det er ugyldig, men ingenting klager: nettleseren bruker den første.',
            why: 'En id må være unik. Brytes det, kan et hopp, en CSS-regel og et skript hver for seg ende opp med å mene et annet element enn du tenkte — uten en eneste advarsel.',
          },
          {
            text: 'Den andre erstatter stille den første.',
            why: 'Begge elementene blir stående nøyaktig som de er. Det er oppslaget som velger ett — det første.',
          },
        ],
      },
      {
        q: 'Du trenger noe klikkbart som bare kjører JavaScript og ikke skal navigere noe sted. Er <code>&lt;a href="#"&gt;</code> riktig verktøy?',
        answer: 1,
        options: [
          {
            text: 'Ja — <code>#</code> betyr «ingen steder».',
            why: 'Det gjør det ikke. Det betyr toppen av dokumentet, og det skriver en <code>#</code> inn i adressefeltet.',
          },
          {
            text: 'Nei — bruk <code>&lt;button type="button"&gt;</code>.',
            why: 'En lenke er for å gå et sted; en knapp er for å gjøre noe. Og som leksjon 5 advarte om, betyr <code>type</code> noe: uten den sender en knapp inne i et skjema.',
          },
          {
            text: 'Ja, så lenge du utelater <code>href</code>.',
            why: 'En <code>&lt;a&gt;</code> uten <code>href</code> er ikke en lenke i det hele tatt: den kan ikke få fokus og nås ikke med tastaturet.',
          },
          {
            text: 'Nei — bruk <code>&lt;a href="javascript:void(0)"&gt;</code>.',
            why: 'Det er den eldre omveien rundt samme problem, og det er fortsatt en lenke som later som den er en knapp. Knappelementet finnes nettopp til dette.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'Which part of an address never reaches the server?',
        answer: 1,
        options: [
          {
            text: 'The query, after the <code>?</code>',
            why: 'The query is sent with the request. That is exactly why lesson 5 said a password does not belong in it.',
          },
          {
            text: 'The fragment, after the <code>#</code>',
            why: 'The browser strips it before sending. A server can neither read it nor log it, because it never arrives.',
          },
          {
            text: 'The path',
            why: 'The path is the main thing the server receives; it is how it knows what you asked for.',
          },
          {
            text: 'The port',
            why: 'The port is how the browser reaches the server in the first place.',
          },
        ],
      },
      {
        q: 'You want a link whose query is <code>q=Bræ hytte</code> and <code>side=2</code>. Which <code>href</code> is right?',
        answer: 1,
        options: [
          {
            text: '<code>href="?q=Bræ hytte&amp;side=2"</code>',
            why: 'Two problems: the space and the æ are not allowed raw in a URL, and the bare <code>&amp;</code> is an HTML ampersand that should be escaped.',
          },
          {
            text: '<code>href="?q=Br%C3%A6%20hytte&amp;amp;side=2"</code>',
            why: 'Percent-encoding for the URL parser — <code>%C3%A6</code> is the UTF-8 bytes of æ, <code>%20</code> is the space — then <code>&amp;amp;</code> for the HTML parser. Two encodings for two readers.',
          },
          {
            text: '<code>href="?q=Br&amp;aelig;%20hytte&amp;amp;side=2"</code>',
            why: 'An HTML entity inside a URL ends up as those literal characters in the query, not as an æ. Characters in a URL are percent-encoded, not entity-escaped.',
          },
          {
            text: '<code>href="?q=Br%C3%A6%20hytte&amp;side=2"</code>',
            why: 'The percent-encoding is right, but the separator is still a bare <code>&amp;</code> in HTML. Escape it as <code>&amp;amp;</code>.',
          },
        ],
      },
      {
        q: 'You click <code>&lt;a href="#priser"&gt;</code> and nothing happens. What is the most likely reason?',
        answer: 0,
        options: [
          {
            text: 'No element in the document has <code>id="priser"</code>.',
            why: 'The fragment is matched against ids. With nothing to match, the browser has nowhere to scroll and stays put. Look for a typo, or a difference in capitalisation — ids are case-sensitive.',
          },
          {
            text: 'The link needs <code>target="_blank"</code>.',
            why: 'That would open a new tab, which is the opposite of what an in-page jump wants.',
          },
          {
            text: 'The server did not respond.',
            why: 'The server is not involved. A fragment never leaves the browser.',
          },
          {
            text: 'The page has to reload first.',
            why: 'Changing only the fragment deliberately reloads nothing. It is a move inside a page that is already there.',
          },
        ],
      },
      {
        q: 'The current document is <code>/lessons/htmlcss/lesson-08-v1.html</code>. Where does <code>href="../styles.css"</code> lead?',
        answer: 1,
        options: [
          {
            text: '<code>/styles.css</code>',
            why: 'That would be the answer for <code>/styles.css</code>, measured from the root. <code>../</code> steps up only one level.',
          },
          {
            text: '<code>/lessons/styles.css</code>',
            why: 'The document sits in <code>/lessons/htmlcss/</code>; <code>../</code> steps up to <code>/lessons/</code>, and the file name is added there.',
          },
          {
            text: '<code>/lessons/htmlcss/styles.css</code>',
            why: 'That is where <code>styles.css</code> without the <code>../</code> would point.',
          },
          {
            text: 'It depends on the server.',
            why: 'Relative addresses are resolved by the browser, before any request is sent.',
          },
        ],
      },
      {
        q: 'Two elements on your page both have <code>id="priser"</code>. What happens?',
        answer: 2,
        options: [
          {
            text: 'The browser reports an error and stops.',
            why: 'Nothing is reported. That is exactly what makes the mistake hard to find.',
          },
          {
            text: 'Both scroll into view in turn.',
            why: 'Only one place can be scrolled to.',
          },
          {
            text: 'It is invalid, but nothing complains: the browser uses the first one.',
            why: 'An id has to be unique. Break that and a jump, a CSS rule and a script can each end up meaning a different element than you intended, with no warning at all.',
          },
          {
            text: 'The second silently replaces the first.',
            why: 'Both elements stay exactly as they are. It is the lookup that picks one — the first.',
          },
        ],
      },
      {
        q: 'You need something clickable that only runs JavaScript and should not navigate anywhere. Is <code>&lt;a href="#"&gt;</code> the right tool?',
        answer: 1,
        options: [
          {
            text: 'Yes — <code>#</code> means "go nowhere".',
            why: 'It does not. It means the top of the document, and it writes a <code>#</code> into the address bar.',
          },
          {
            text: 'No — use <code>&lt;button type="button"&gt;</code>.',
            why: 'A link is for going somewhere; a button is for doing something. And as lesson 5 warned, the <code>type</code> matters: without it, a button inside a form submits.',
          },
          {
            text: 'Yes, as long as you leave out the <code>href</code>.',
            why: 'An <code>&lt;a&gt;</code> without <code>href</code> is not a link at all: it cannot take focus and cannot be reached by keyboard.',
          },
          {
            text: 'No — use <code>&lt;a href="javascript:void(0)"&gt;</code>.',
            why: 'That is the older workaround for the same problem, and it is still a link pretending to be a button. The button element exists precisely for this.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Яка частина адреси ніколи не доходить до сервера?',
        answer: 1,
        options: [
          {
            text: 'Рядок запиту, після <code>?</code>',
            why: 'Рядок запиту надсилається разом із запитом. Саме тому урок 5 казав, що паролю там не місце.',
          },
          {
            text: 'Фрагмент, після <code>#</code>',
            why: 'Браузер відрізає його перед надсиланням. Сервер не може ні прочитати його, ні записати в журнал, бо той до нього не доходить.',
          },
          {
            text: 'Шлях',
            why: 'Шлях — це головне, що отримує сервер; саме так він розуміє, чого ви просили.',
          },
          {
            text: 'Порт',
            why: 'Порт — це те, як браузер узагалі дістається сервера.',
          },
        ],
      },
      {
        q: 'Вам потрібне посилання, рядок запиту якого — <code>q=Bræ hytte</code> і <code>side=2</code>. Який <code>href</code> правильний?',
        answer: 1,
        options: [
          {
            text: '<code>href="?q=Bræ hytte&amp;side=2"</code>',
            why: 'Дві проблеми: пробіл і æ не дозволені в URL у сирому вигляді, а голий <code>&amp;</code> — це амперсанд HTML, який треба екранувати.',
          },
          {
            text: '<code>href="?q=Br%C3%A6%20hytte&amp;amp;side=2"</code>',
            why: 'Відсоткове кодування для розбирача URL — <code>%C3%A6</code> це байти UTF-8 літери æ, <code>%20</code> це пробіл — а потім <code>&amp;amp;</code> для розбирача HTML. Два кодування для двох читачів.',
          },
          {
            text: '<code>href="?q=Br&amp;aelig;%20hytte&amp;amp;side=2"</code>',
            why: 'Сутність HTML усередині URL перетвориться на ті самі буквальні символи в рядку запиту, а не на æ. Символи в URL кодують відсотками, а не екранують сутностями.',
          },
          {
            text: '<code>href="?q=Br%C3%A6%20hytte&amp;side=2"</code>',
            why: 'Відсоткове кодування правильне, але роздільник усе ще є голим <code>&amp;</code> у HTML. Екрануйте його як <code>&amp;amp;</code>.',
          },
        ],
      },
      {
        q: 'Ви натискаєте <code>&lt;a href="#priser"&gt;</code>, і нічого не відбувається. Яка найімовірніша причина?',
        answer: 0,
        options: [
          {
            text: 'Жоден елемент документа не має <code>id="priser"</code>.',
            why: 'Фрагмент зіставляється з ідентифікаторами. Якщо зіставляти нема з чим, браузеру нікуди прокручувати, і він лишається на місці. Шукайте одруку або різницю у великих літерах — id чутливі до регістру.',
          },
          {
            text: 'Посиланню потрібен <code>target="_blank"</code>.',
            why: 'Це відкрило б нову вкладку, що є протилежністю того, чого хоче перехід усередині сторінки.',
          },
          {
            text: 'Сервер не відповів.',
            why: 'Сервер тут не задіяний. Фрагмент ніколи не залишає браузера.',
          },
          {
            text: 'Спершу треба перезавантажити сторінку.',
            why: 'Зміна самого лише фрагмента навмисно нічого не перезавантажує. Це рух усередині сторінки, яка вже є.',
          },
        ],
      },
      {
        q: 'Поточний документ — <code>/lessons/htmlcss/lesson-08-v1.html</code>. Куди веде <code>href="../styles.css"</code>?',
        answer: 1,
        options: [
          {
            text: '<code>/styles.css</code>',
            why: 'Це була б відповідь для <code>/styles.css</code>, відлічуваного від кореня. <code>../</code> піднімає лише на один рівень.',
          },
          {
            text: '<code>/lessons/styles.css</code>',
            why: 'Документ лежить у <code>/lessons/htmlcss/</code>; <code>../</code> піднімає до <code>/lessons/</code>, і туди додається назва файлу.',
          },
          {
            text: '<code>/lessons/htmlcss/styles.css</code>',
            why: 'Саме туди вказував би <code>styles.css</code> без <code>../</code>.',
          },
          {
            text: 'Залежить від сервера.',
            why: 'Відносні адреси розв’язує браузер, ще до того, як буде надіслано будь-який запит.',
          },
        ],
      },
      {
        q: 'Два елементи на вашій сторінці мають однаковий <code>id="priser"</code>. Що станеться?',
        answer: 2,
        options: [
          {
            text: 'Браузер повідомить про помилку і зупиниться.',
            why: 'Ніхто ні про що не повідомляє. Саме це й робить помилку важкою для пошуку.',
          },
          {
            text: 'Обидва по черзі прокрутяться у вікно.',
            why: 'Прокрутити можна лише до одного місця.',
          },
          {
            text: 'Це недійсно, але ніхто не скаржиться: браузер бере перший.',
            why: 'Id має бути унікальним. Порушіть це — і перехід, правило CSS і скрипт можуть кожне мати на увазі інший елемент, ніж ви задумали, без жодного попередження.',
          },
          {
            text: 'Другий тихо замінює перший.',
            why: 'Обидва елементи лишаються точно такими, як є. Це пошук обирає один — перший.',
          },
        ],
      },
      {
        q: 'Вам потрібне щось клікабельне, що лише запускає JavaScript і не має нікуди переходити. Чи <code>&lt;a href="#"&gt;</code> — правильний інструмент?',
        answer: 1,
        options: [
          {
            text: 'Так — <code>#</code> означає «нікуди».',
            why: 'Не означає. Він означає початок документа, і він записує <code>#</code> в адресний рядок.',
          },
          {
            text: 'Ні — використайте <code>&lt;button type="button"&gt;</code>.',
            why: 'Посилання призначене, щоб кудись іти; кнопка — щоб щось робити. І, як застерігав урок 5, <code>type</code> має значення: без нього кнопка всередині форми надсилає форму.',
          },
          {
            text: 'Так, якщо взагалі не писати <code>href</code>.',
            why: '<code>&lt;a&gt;</code> без <code>href</code> — це взагалі не посилання: воно не отримує фокус і недосяжне з клавіатури.',
          },
          {
            text: 'Ні — використайте <code>&lt;a href="javascript:void(0)"&gt;</code>.',
            why: 'Це старіший обхід тієї самої проблеми, і це все одно посилання, яке вдає кнопку. Елемент кнопки існує саме для цього.',
          },
        ],
      },
    ],
  },
});
