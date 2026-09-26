/*
 * Content of lesson 07 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Note on escaping: these strings are inserted with innerHTML, so a string that
 * should *display* the text "&amp;" has to be written here as "&amp;amp;".
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Spesialtegn: &amp; &lt; &gt; &quot; &#8364;',
      kicker: 'Leksjon 7 &middot; HTML &amp; CSS',
      title: 'Spesialtegn: &amp;amp; &amp;lt; &amp;gt; &amp;quot; &amp;#8364;',
      lead: 'En håndfull tegn kan ikke bare skrives rett inn på en side, fordi HTML allerede bruker dem til noe. Entiteter er måten du får dem tilbake på — og den samme mekanismen hindrer en besøkende i å gjøre et kommentarfelt om til et skript.',

      's.shape.t': 'Formen på en entitet',
      's.shape.d':
        '<p>En entitet begynner alltid med <code>&amp;</code> og slutter med <code>;</code>. Mellom dem står enten et navn eller et tall, og det finnes tre former av samme sak.</p>' +
        '<p>Navnet er den lesbare formen, og det finnes bare for en fast, publisert liste. De numeriske formene virker for et hvilket som helst tegn, fordi tallet rett og slett er tegnets Unicode-kodepunkt fra forrige leksjon — desimalt etter <code>#</code>, heksadesimalt etter <code>#x</code>.</p>' +
        '<p>Semikolonet til slutt er en del av entiteten. Nettlesere tilgir enkelte manglende semikolon av hensyn til svært gamle sider, men regelen du bør følge, er at det aldri er valgfritt.</p>',

      's.amp.t': 'Den som starter alle de andre',
      's.amp.d':
        '<p>Fordi <code>&amp;</code> åpner hver eneste entitet, er et bokstavelig og-tegn tvetydig: nettleseren må avgjøre om du mente tegnet eller starten på noe lengre.</p>' +
        '<p>Skriver du <code>&amp;amp;</code>, er det ingenting å avgjøre. Feilen biter hardest i adresser, der skilletegnet mellom parametere er et og-tegn og teksten etter det tilfeldigvis kan stave en ekte entitet.</p>' +
        '<p>Skriv om én gang. Viser en side <code>&amp;amp;</code> på skjermen der det skulle stått et og-tegn, har noe skrevet om tekst som allerede var skrevet om — <code>&amp;</code>-en i den første entiteten ble gjort til en entitet i seg selv.</p>',

      's.angle.t': 'Å vise oppmerking i stedet for å kjøre den',
      's.angle.d':
        '<p><code>&lt;</code> er det som begynner en tagg, så tekst som inneholder det, leses som oppmerking. En setning som forklarer hvordan <code>&lt;p&gt;</code> virker, skrevet bokstavelig, forklarer ingenting: den åpner et avsnitt.</p>' +
        '<p><code>&amp;lt;</code> og <code>&amp;gt;</code> er måten du viser vinkelparentesene som tegn. Strengt tatt er det bare den åpnende som må skrives om i vanlig tekst, men å skrive om begge er vanen verdt å ha — det holder paret symmetrisk og er riktig overalt. Hvert kodeeksempel i disse leksjonene er skrevet slik.</p>',

      's.quot.t': 'Bare et problem inne i et attributt',
      's.quot.d':
        '<p><code>&amp;quot;</code> er den snevreste av de fire. I vanlig tekst er et anførselstegn et helt vanlig tegn som ikke trenger noe.</p>' +
        '<p>Det betyr noe ett sted: inne i en attributtverdi omsluttet av doble anførselstegn, der et bokstavelig <code>"</code> avslutter verdien for tidlig og alt etter det blir forvirret oppmerking. Det samme gjelder <code>&amp;apos;</code> inne i verdier med enkle anførselstegn.</p>',

      's.num.t': 'Tall i stedet for navn',
      's.num.d':
        '<p><code>&amp;#8364;</code> er eurotegnet, og 8364 er ikke noe annet enn tegnets Unicode-kodepunkt skrevet desimalt. <code>&amp;#x20AC;</code> er nøyaktig samme tegn skrevet heksadesimalt, og det er formen som stemmer med hvordan kodepunkter vanligvis skrives.</p>' +
        '<p>Navngitte entiteter er begrenset til en publisert liste, så et tegn uten navn — de fleste emoji, for eksempel — kan likevel skrives numerisk. Før var det den eneste måten å nå slike tegn på. Med UTF-8 erklært, som i forrige leksjon, kan du skrive <code>€</code> rett inn i filen og hoppe over hele spørsmålet.</p>',

      's.nbsp.t': 'De du ikke kan se',
      's.nbsp.d':
        '<p>Her er tilfellet der en entitet fortsatt er det beste valget, selv om du kunne skrevet tegnet.</p>' +
        '<p><code>&amp;nbsp;</code> er et mellomrom som nekter å brekke over to linjer — riktig for å holde et tall sammen med enheten sin, en forkortelse med tallet sitt, eller et fornavn med det neste. Tegnet finnes og kan skrives, men i kildefilen din ser det nøyaktig ut som et vanlig mellomrom. Ingen som leser koden kan skille de to, og et søk-og-erstatt vil stille ødelegge det. Å skrive entiteten holder det synlig for den neste.</p>' +
        '<p>Det samme argumentet gjelder <code>&amp;shy;</code>, den myke bindestreken, som merker et sted et langt ord kan brekke og ikke viser noe som helst når det ikke gjør det.</p>',

      's.safe.t': 'Hvorfor dette er en sikkerhetsregel',
      's.safe.d':
        '<p>Alt over ser ut som typografi. Det er det ikke. Omskriving er grensen mellom tekst og oppmerking, og den grensen hindrer andre i å bestemme hva siden din inneholder.</p>' +
        '<p>Når tekst som kom fra en besøkende skrives ut på en side — en kommentar, et navn, et søkeord — må den skrives om på veien ut. Ellers skriver en besøkende som taster inn en <code>&lt;script&gt;</code>-tagg ikke tekst i det hele tatt: de skriver kode som siden din kjører, i nettleseren til den neste som leser den.</p>' +
        '<p>Løsningen er nøyaktig de fire tegnene over. Det er derfor alle seriøse malspråk skriver om som standard og tvinger deg til å be om rå utskrift.</p>',

      's.note':
        '<p>Tommelfingerregelen. Skriv alltid om <code>&amp;</code>; skriv om <code>&lt;</code> og <code>&gt;</code> i tekst; skriv om <code>"</code> inne i doble anførselstegn. Bruk numeriske entiteter bare for tegn du ikke kan skrive eller ikke kan se. Og skriv om alt som kom fra en besøkende, hver eneste gang.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Special characters: &amp; &lt; &gt; &quot; &#8364;',
      kicker: 'Lesson 7 &middot; HTML &amp; CSS',
      title: 'Special characters: &amp;amp; &amp;lt; &amp;gt; &amp;quot; &amp;#8364;',
      lead: 'A handful of characters cannot simply be typed into a page, because HTML is already using them for something. Entities are how you get them back — and the same mechanism is what stops a visitor turning a comment box into a script.',

      's.shape.t': 'The shape of an entity',
      's.shape.d':
        '<p>An entity always starts with <code>&amp;</code> and ends with <code>;</code>. Between them goes either a name or a number, and there are three forms of the same thing.</p>' +
        '<p>The name is the readable form, and it exists only for a fixed published list. The numeric forms work for any character at all, because the number is simply its Unicode code point from the previous lesson — decimal after <code>#</code>, hexadecimal after <code>#x</code>.</p>' +
        '<p>The closing semicolon is part of the entity. Browsers forgive some missing ones for the sake of very old pages, but the rule to follow is that it is never optional.</p>',

      's.amp.t': 'The one that starts all the others',
      's.amp.d':
        '<p>Because <code>&amp;</code> opens every entity, a literal ampersand is ambiguous: the browser has to decide whether you meant the character or the start of something longer.</p>' +
        '<p>Write <code>&amp;amp;</code> and there is nothing to decide. The mistake bites hardest in addresses, where the separator between parameters is an ampersand and the text after it can happen to spell a real entity.</p>' +
        '<p>Escape once. If a page shows <code>&amp;amp;</code> on screen where an ampersand belongs, something escaped text that was already escaped — the <code>&amp;</code> of the first entity was turned into an entity of its own.</p>',

      's.angle.t': 'Showing markup instead of running it',
      's.angle.d':
        '<p><code>&lt;</code> is what begins a tag, so text containing it is read as markup. A sentence explaining how <code>&lt;p&gt;</code> works, typed literally, explains nothing: it opens a paragraph.</p>' +
        '<p><code>&amp;lt;</code> and <code>&amp;gt;</code> are how you show the angle brackets as characters. Strictly only the opening one has to be escaped in ordinary text, but escaping both is the habit worth having — it keeps the pair symmetrical and stays correct everywhere. Every code sample in these lessons is written this way.</p>',

      's.quot.t': 'Only a problem inside an attribute',
      's.quot.d':
        '<p><code>&amp;quot;</code> is the narrowest of the four. In ordinary text a quotation mark is an ordinary character and needs nothing done to it.</p>' +
        '<p>It matters in one place: inside an attribute value wrapped in double quotes, where a literal <code>"</code> ends the value early and everything after it becomes confused markup. The same applies to <code>&amp;apos;</code> inside single-quoted values.</p>',

      's.num.t': 'Numbers instead of names',
      's.num.d':
        '<p><code>&amp;#8364;</code> is the euro sign, and 8364 is nothing more than its Unicode code point written in decimal. <code>&amp;#x20AC;</code> is the identical character written in hexadecimal, which is the form that matches how code points are usually printed.</p>' +
        '<p>Named entities are limited to a published list, so a character with no name — most emoji, for instance — can still be written numerically. That used to be the only way to reach such characters. With UTF-8 declared, as in the previous lesson, you can type <code>€</code> straight into the file and skip the whole question.</p>',

      's.nbsp.t': 'The ones you cannot see',
      's.nbsp.d':
        '<p>Here is the case where an entity is still the better choice even though you could type the character.</p>' +
        '<p><code>&amp;nbsp;</code> is a space that refuses to break across lines — right for keeping a number with its unit, an abbreviation with its number, or a first name with its second. The character itself is real and typeable, but in your source file it looks exactly like an ordinary space. Nobody reviewing the code can tell the two apart, and a search-and-replace will quietly destroy it. Writing the entity keeps it visible to the next person.</p>' +
        '<p>The same argument applies to <code>&amp;shy;</code>, the soft hyphen, which marks a place a long word may break and shows nothing at all when it does not.</p>',

      's.safe.t': 'Why this is a safety rule',
      's.safe.d':
        '<p>Everything above looks like typography. It is not. Escaping is the line between text and markup, and that line is what stops someone else deciding what your page contains.</p>' +
        '<p>Whenever text that came from a visitor is printed into a page — a comment, a name, a search term — it must be escaped on the way out. Otherwise a visitor who types a <code>&lt;script&gt;</code> tag is not typing text at all: they are writing code that your page will run, in the browser of whoever reads it next.</p>' +
        '<p>The fix is exactly the four characters above. It is why every serious template language escapes by default and makes you ask for raw output.</p>',

      's.note':
        '<p>The rule of thumb. Escape <code>&amp;</code> always; escape <code>&lt;</code> and <code>&gt;</code> in text; escape <code>"</code> inside double-quoted attributes. Use numeric entities only for characters you cannot type or cannot see. And escape anything that came from a visitor, every single time.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Спеціальні символи: &amp; &lt; &gt; &quot; &#8364;',
      kicker: 'Урок 7 &middot; HTML &amp; CSS',
      title: 'Спеціальні символи: &amp;amp; &amp;lt; &amp;gt; &amp;quot; &amp;#8364;',
      lead: 'Кілька символів не можна просто написати на сторінці, бо HTML уже використовує їх для чогось іншого. Сутності — це спосіб їх повернути; і той самий механізм не дає відвідувачеві перетворити поле коментаря на скрипт.',

      's.shape.t': 'Форма сутності',
      's.shape.d':
        '<p>Сутність завжди починається з <code>&amp;</code> і закінчується <code>;</code>. Між ними стоїть або назва, або число, і це три форми одного й того самого.</p>' +
        '<p>Назва — читабельна форма, і вона існує лише для сталого опублікованого переліку. Числові форми працюють для будь-якого символу взагалі, бо число — це просто його кодова точка Unicode з попереднього уроку: десяткова після <code>#</code>, шістнадцяткова після <code>#x</code>.</p>' +
        '<p>Крапка з комою наприкінці — частина сутності. Браузери пробачають частину пропущених заради дуже старих сторінок, але правило, якого варто триматися: вона ніколи не є необов’язковою.</p>',

      's.amp.t': 'Та, з якої починаються всі інші',
      's.amp.d':
        '<p>Оскільки <code>&amp;</code> відкриває кожну сутність, буквальний амперсанд є двозначним: браузер має вирішити, чи ви мали на увазі символ, чи початок чогось довшого.</p>' +
        '<p>Напишіть <code>&amp;amp;</code> — і вирішувати нічого. Найболючіше ця помилка кусається в адресах, де роздільником між параметрами є амперсанд, а текст після нього випадково може скласти справжню сутність.</p>' +
        '<p>Екрануйте один раз. Якщо сторінка показує <code>&amp;amp;</code> там, де мав би бути амперсанд, щось екранувало текст, який уже був екранований — <code>&amp;</code> першої сутності перетворили на окрему сутність.</p>',

      's.angle.t': 'Показати розмітку, а не виконати її',
      's.angle.d':
        '<p><code>&lt;</code> — це те, з чого починається тег, тож текст, що його містить, читається як розмітка. Речення, яке пояснює, як працює <code>&lt;p&gt;</code>, написане буквально, не пояснює нічого: воно відкриває абзац.</p>' +
        '<p><code>&amp;lt;</code> і <code>&amp;gt;</code> — це спосіб показати кутові дужки як символи. Строго кажучи, у звичайному тексті обов’язково екранувати лише відкривальну, але екранувати обидві — варта звичка: пара лишається симетричною і залишається правильною всюди. Кожен приклад коду в цих уроках написано саме так.</p>',

      's.quot.t': 'Проблема лише всередині атрибута',
      's.quot.d':
        '<p><code>&amp;quot;</code> — найвужча з чотирьох. У звичайному тексті лапка є звичайним символом, і з нею нічого робити не треба.</p>' +
        '<p>Вона важить в одному місці: усередині значення атрибута, взятого в подвійні лапки, де буквальна <code>"</code> завершує значення передчасно, і все після неї стає заплутаною розміткою. Те саме стосується <code>&amp;apos;</code> усередині значень в одинарних лапках.</p>',

      's.num.t': 'Числа замість назв',
      's.num.d':
        '<p><code>&amp;#8364;</code> — це знак євро, а 8364 — не що інше, як його кодова точка Unicode, записана десятково. <code>&amp;#x20AC;</code> — той самий символ, записаний шістнадцятково, і саме ця форма збігається з тим, як кодові точки зазвичай друкують.</p>' +
        '<p>Іменовані сутності обмежені опублікованим переліком, тож символ без назви — більшість емодзі, наприклад — усе одно можна записати числом. Колись це був єдиний спосіб дістатися таких символів. Коли UTF-8 оголошено, як у попередньому уроці, ви можете написати <code>€</code> просто у файлі й оминути все це питання.</p>',

      's.nbsp.t': 'Ті, яких не видно',
      's.nbsp.d':
        '<p>Ось випадок, коли сутність усе ще кращий вибір, хоча символ можна було б просто набрати.</p>' +
        '<p><code>&amp;nbsp;</code> — це пробіл, який відмовляється розриватися між рядками: якраз для того, щоб утримати число разом з одиницею, скорочення з його числом або ім’я з прізвищем. Сам символ реальний, і його можна набрати, але у вашому вихідному файлі він виглядає точнісінько як звичайний пробіл. Ніхто, хто читає код, не відрізнить їх, а пошук із заміною тихо його знищить. Написана сутність лишає його видимим для наступного.</p>' +
        '<p>Той самий аргумент стосується <code>&amp;shy;</code>, м’якого переносу, який позначає місце, де довге слово може розірватися, і не показує нічого, коли цього не стається.</p>',

      's.safe.t': 'Чому це правило безпеки',
      's.safe.d':
        '<p>Усе вище схоже на типографіку. Це не так. Екранування — це межа між текстом і розміткою, і саме ця межа не дає стороннім вирішувати, що містить ваша сторінка.</p>' +
        '<p>Щоразу, коли текст, який надійшов від відвідувача, друкується на сторінці — коментар, ім’я, пошуковий запит — його треба екранувати на виході. Інакше відвідувач, який набирає тег <code>&lt;script&gt;</code>, пише зовсім не текст: він пише код, який виконає ваша сторінка в браузері того, хто прочитає її наступним.</p>' +
        '<p>Розв’язання — рівно ті чотири символи, що вище. Саме тому кожна серйозна мова шаблонів екранує за замовчуванням і змушує окремо просити сирий вивід.</p>',

      's.note':
        '<p>Правило великого пальця. Екрануйте <code>&amp;</code> завжди; екрануйте <code>&lt;</code> і <code>&gt;</code> у тексті; екрануйте <code>"</code> усередині подвійних лапок. Числові сутності беріть лише для символів, яких не можна набрати або не видно. І екрануйте все, що надійшло від відвідувача — щоразу.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du skriver <code>&lt;a href="/p?a=1&amp;reg;ion=eu"&gt;</code>, og lenken går feil sted. Hva skjedde?',
        answer: 1,
        options: [
          {
            text: 'Ingenting — den adressen er helt fin.',
            why: 'Den er ikke det. Se på tegnene rett etter 1-tallet: de staver en ekte entitet.',
          },
          {
            text: '<code>&amp;reg;</code> er en ekte entitet, så nettleseren gjorde den om til ® og adressen ble <code>/p?a=1®ion=eu</code>.',
            why: 'Skriv <code>&amp;amp;</code> som skilletegn: <code>/p?a=1&amp;amp;region=eu</code>. Dette er den klassiske grunnen til at en spørrestreng stille går i stykker.',
          },
          {
            text: 'En spørrestreng kan ikke inneholde et og-tegn.',
            why: 'Den må inneholde det — det er skilletegnet mellom parametere. Poenget er hvordan du skriver det i HTML.',
          },
          {
            text: 'Verdien trengte enkle anførselstegn.',
            why: 'Anførselstegnene er ikke problemet; og-tegnet er det.',
          },
        ],
      },
      {
        q: 'Du vil at siden skal vise teksten <code>&lt;p&gt;</code> slik at leseren ser selve taggen. Hva skriver du?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;p&gt;</code> — bare skriv det.',
            why: 'Skrevet bokstavelig leser nettleseren det som en tagg og åpner et avsnitt. Ingenting vises.',
          },
          {
            text: 'Sett det i anførselstegn.',
            why: 'Anførselstegn endrer ingenting; vinkelparentesene er fortsatt vinkelparenteser for tolkeren.',
          },
          {
            text: '<code>&amp;lt;p&amp;gt;</code>',
            why: 'De omskrevne parentesene er tegn, ikke oppmerking, så leseren ser taggen som tekst. Hvert kodeeksempel i disse leksjonene er skrevet slik.',
          },
          {
            text: '<code>&amp;#60;p&amp;#62;</code> — og bare den formen virker.',
            why: 'Den formen virker og gir det samme, men den navngitte formen virker like godt og leses bedre.',
          },
        ],
      },
      {
        q: 'Siden din viser teksten <code>&amp;amp;</code> på skjermen der det skulle stått et og-tegn. Hva gikk galt?',
        answer: 0,
        options: [
          {
            text: 'Teksten ble skrevet om to ganger.',
            why: 'Noe skrev om tekst som allerede var skrevet om: <code>&amp;</code>-en i <code>&amp;amp;</code> ble selv til <code>&amp;amp;</code>. Skriv om én gang, helt til slutt før utskrift.',
          },
          {
            text: 'Siden mangler <code>&lt;meta charset="utf-8"&gt;</code>.',
            why: 'Et kodingsproblem gir andre tegn, ikke en synlig entitet. Dette er et omskrivingsproblem, ikke et kodingsproblem.',
          },
          {
            text: 'Semikolonet mangler.',
            why: 'Semikolonet er der — du ser det på skjermen. Det er symptomet, ikke årsaken.',
          },
          {
            text: '<code>&amp;amp;</code> er rett og slett feil entitet for et og-tegn.',
            why: 'Det er den riktige. Problemet er at den ble brukt to ganger.',
          },
        ],
      },
      {
        q: 'Hvor betyr <code>&amp;quot;</code> faktisk noe?',
        answer: 1,
        options: [
          {
            text: 'Overalt der et anførselstegn står.',
            why: 'I vanlig tekst er et anførselstegn et vanlig tegn. Å skrive det om der er harmløst, men uten hensikt.',
          },
          {
            text: 'Inne i en attributtverdi omsluttet av doble anførselstegn.',
            why: 'Der avslutter et bokstavelig <code>"</code> verdien for tidlig, og resten blir forvirret oppmerking. Det er det ene stedet det trengs.',
          },
          {
            text: 'Bare inne i <code>&lt;pre&gt;</code>-blokker.',
            why: 'En <code>&lt;pre&gt;</code>-blokk bevarer mellomrom. Den har ingen egen regel om anførselstegn.',
          },
          {
            text: 'Ingen steder — den er utdatert.',
            why: 'Den trengs fortsatt, bare på et snevrere sted enn de tre andre.',
          },
        ],
      },
      {
        q: 'I <code>&amp;#8364;</code> — hvor kommer tallet 8364 fra?',
        answer: 1,
        options: [
          {
            text: 'Det er en plass i listen over navngitte entiteter.',
            why: 'Den navngitte listen har ingen slik nummerering. Tallet kommer fra noe mer grunnleggende.',
          },
          {
            text: 'Det er tegnets Unicode-kodepunkt, skrevet desimalt.',
            why: '8364 desimalt er U+20AC heksadesimalt, altså eurotegnet. <code>&amp;#x20AC;</code> er samme tegn skrevet heksadesimalt.',
          },
          {
            text: 'Det er antall byte tegnet opptar.',
            why: 'Eurotegnet tar tre byte i UTF-8. Tallet i en entitet er kodepunktet, ikke en størrelse.',
          },
          {
            text: 'Det er vilkårlig og må slås opp per nettleser.',
            why: 'Det er likt overalt, fordi Unicode tildeler det én gang for alle.',
          },
        ],
      },
      {
        q: 'UTF-8 er erklært, så du kan skrive € og å rett inn i filen. Hvilken entitet er likevel verdt å skrive ut, selv om du kunne skrevet tegnet?',
        answer: 2,
        options: [
          {
            text: '<code>&amp;euro;</code>',
            why: '€ er synlig og utvetydig i kildekoden. Å skrive tegnet er helt greit.',
          },
          {
            text: '<code>&amp;aring;</code>',
            why: 'å er en helt vanlig, synlig bokstav så snart UTF-8 er erklært.',
          },
          {
            text: '<code>&amp;nbsp;</code>',
            why: 'Et hardt mellomrom finnes som tegn og kan skrives, men i kildekoden ser det nøyaktig ut som et vanlig mellomrom. Ingen som leser koden kan se det, og et søk-og-erstatt ødelegger det stille. Entiteten holder det synlig.',
          },
          {
            text: 'Ingen av dem — med UTF-8 trengs entiteter aldri.',
            why: 'De trengs fortsatt for tegnene HTML selv bruker, og for de usynlige som dette.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You write <code>&lt;a href="/p?a=1&amp;reg;ion=eu"&gt;</code> and the link goes to the wrong place. What happened?',
        answer: 1,
        options: [
          {
            text: 'Nothing — that address is fine.',
            why: 'It is not. Look at the characters right after the 1: they spell a real entity.',
          },
          {
            text: '<code>&amp;reg;</code> is a real entity, so the browser turned it into ® and the address became <code>/p?a=1®ion=eu</code>.',
            why: 'Write <code>&amp;amp;</code> for the separator: <code>/p?a=1&amp;amp;region=eu</code>. This is the classic reason a query string silently breaks.',
          },
          {
            text: 'A query string cannot contain an ampersand.',
            why: 'It must — that is the separator between parameters. The point is how to write it in HTML.',
          },
          {
            text: 'The value needed single quotes.',
            why: 'The quoting is not the problem; the ampersand is.',
          },
        ],
      },
      {
        q: 'You want the page to display the text <code>&lt;p&gt;</code> so the reader can see the tag itself. What do you write?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;p&gt;</code> — just type it.',
            why: 'Typed literally, the browser reads it as a tag and opens a paragraph. Nothing is shown.',
          },
          {
            text: 'Put it in quotation marks.',
            why: 'Quoting changes nothing; the angle brackets are still angle brackets to the parser.',
          },
          {
            text: '<code>&amp;lt;p&amp;gt;</code>',
            why: 'The escaped brackets are characters, not markup, so the reader sees the tag as text. Every code sample in these lessons is written this way.',
          },
          {
            text: '<code>&amp;#60;p&amp;#62;</code> — and only that form works.',
            why: 'That form does work and gives the same result, but the named form works just as well and reads better.',
          },
        ],
      },
      {
        q: 'Your page shows the literal text <code>&amp;amp;</code> on screen where an ampersand should be. What went wrong?',
        answer: 0,
        options: [
          {
            text: 'The text was escaped twice.',
            why: 'Something escaped text that was already escaped: the <code>&amp;</code> of <code>&amp;amp;</code> itself became <code>&amp;amp;</code>. Escape once, at the last moment before output.',
          },
          {
            text: 'The page is missing <code>&lt;meta charset="utf-8"&gt;</code>.',
            why: 'An encoding problem produces different characters, not a visible entity. This is an escaping problem, not an encoding one.',
          },
          {
            text: 'The semicolon is missing.',
            why: 'The semicolon is there — you can see it on screen. That is the symptom, not the cause.',
          },
          {
            text: '<code>&amp;amp;</code> is simply the wrong entity for an ampersand.',
            why: 'It is the right one. The problem is that it was applied twice.',
          },
        ],
      },
      {
        q: 'Where does <code>&amp;quot;</code> actually matter?',
        answer: 1,
        options: [
          {
            text: 'Everywhere a quotation mark appears.',
            why: 'In ordinary text a quotation mark is an ordinary character. Escaping it there is harmless but pointless.',
          },
          {
            text: 'Inside an attribute value wrapped in double quotes.',
            why: 'There a literal <code>"</code> ends the value early and the rest becomes confused markup. That is the one place it is needed.',
          },
          {
            text: 'Only inside <code>&lt;pre&gt;</code> blocks.',
            why: 'A <code>&lt;pre&gt;</code> block preserves whitespace. It has no special rule about quotation marks.',
          },
          {
            text: 'Nowhere — it is obsolete.',
            why: 'It is still needed, just in a narrower place than the other three.',
          },
        ],
      },
      {
        q: 'In <code>&amp;#8364;</code>, where does the number 8364 come from?',
        answer: 1,
        options: [
          {
            text: 'It is a position in the list of named entities.',
            why: 'The named list has no numbering of that kind. The number comes from something more fundamental.',
          },
          {
            text: 'It is the Unicode code point of the character, written in decimal.',
            why: '8364 in decimal is U+20AC in hexadecimal, which is the euro sign. <code>&amp;#x20AC;</code> is the same character written the hexadecimal way.',
          },
          {
            text: 'It is the number of bytes the character occupies.',
            why: 'The euro sign takes three bytes in UTF-8. The number in an entity is the code point, not a size.',
          },
          {
            text: 'It is arbitrary and has to be looked up per browser.',
            why: 'It is the same everywhere, because Unicode assigns it once for everyone.',
          },
        ],
      },
      {
        q: 'UTF-8 is declared, so you can type € and å straight into the file. Which entity is still worth writing out even though you could type the character?',
        answer: 2,
        options: [
          {
            text: '<code>&amp;euro;</code>',
            why: '€ is visible and unambiguous in the source. Typing it is perfectly fine.',
          },
          {
            text: '<code>&amp;aring;</code>',
            why: 'å is a perfectly ordinary, visible letter once UTF-8 is declared.',
          },
          {
            text: '<code>&amp;nbsp;</code>',
            why: 'A non-breaking space is a real, typeable character, but in the source it looks exactly like an ordinary space. Nobody reviewing the code can tell, and a search-and-replace will quietly destroy it. The entity keeps it visible.',
          },
          {
            text: 'None of them — with UTF-8, entities are never needed.',
            why: 'They are still needed for the characters HTML itself uses, and for the invisible ones like this.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви пишете <code>&lt;a href="/p?a=1&amp;reg;ion=eu"&gt;</code>, і посилання веде не туди. Що сталося?',
        answer: 1,
        options: [
          {
            text: 'Нічого — з цією адресою все гаразд.',
            why: 'Не все. Погляньте на символи одразу після 1: вони складають справжню сутність.',
          },
          {
            text: '<code>&amp;reg;</code> — справжня сутність, тож браузер перетворив її на ®, і адреса стала <code>/p?a=1®ion=eu</code>.',
            why: 'Пишіть <code>&amp;amp;</code> як роздільник: <code>/p?a=1&amp;amp;region=eu</code>. Це класична причина, чому рядок запиту тихо ламається.',
          },
          {
            text: 'Рядок запиту не може містити амперсанд.',
            why: 'Мусить — це роздільник між параметрами. Питання в тому, як записати його в HTML.',
          },
          {
            text: 'Значення потребувало одинарних лапок.',
            why: 'Проблема не в лапках, а в амперсанді.',
          },
        ],
      },
      {
        q: 'Ви хочете, щоб сторінка показала текст <code>&lt;p&gt;</code>, аби читач побачив сам тег. Що напишете?',
        answer: 2,
        options: [
          {
            text: '<code>&lt;p&gt;</code> — просто набрати.',
            why: 'Набраний буквально, браузер прочитає його як тег і відкриє абзац. Не покажеться нічого.',
          },
          {
            text: 'Взяти його в лапки.',
            why: 'Лапки нічого не змінюють; для розбирача кутові дужки лишаються кутовими дужками.',
          },
          {
            text: '<code>&amp;lt;p&amp;gt;</code>',
            why: 'Екрановані дужки є символами, а не розміткою, тож читач бачить тег як текст. Кожен приклад коду в цих уроках написано саме так.',
          },
          {
            text: '<code>&amp;#60;p&amp;#62;</code> — і працює лише ця форма.',
            why: 'Ця форма справді працює і дає те саме, але іменована працює так само добре й читається краще.',
          },
        ],
      },
      {
        q: 'Ваша сторінка показує на екрані текст <code>&amp;amp;</code> там, де мав би бути амперсанд. Що пішло не так?',
        answer: 0,
        options: [
          {
            text: 'Текст екранували двічі.',
            why: 'Щось екранувало текст, який уже був екранований: <code>&amp;</code> у <code>&amp;amp;</code> сама стала <code>&amp;amp;</code>. Екрануйте один раз, в останню мить перед виводом.',
          },
          {
            text: 'Сторінці бракує <code>&lt;meta charset="utf-8"&gt;</code>.',
            why: 'Проблема кодування дає інші символи, а не видиму сутність. Це проблема екранування, а не кодування.',
          },
          {
            text: 'Бракує крапки з комою.',
            why: 'Крапка з комою на місці — ви бачите її на екрані. Це симптом, а не причина.',
          },
          {
            text: '<code>&amp;amp;</code> — просто неправильна сутність для амперсанда.',
            why: 'Вона правильна. Проблема в тому, що її застосували двічі.',
          },
        ],
      },
      {
        q: 'Де <code>&amp;quot;</code> справді має значення?',
        answer: 1,
        options: [
          {
            text: 'Усюди, де трапляється лапка.',
            why: 'У звичайному тексті лапка — звичайний символ. Екранувати її там нешкідливо, але марно.',
          },
          {
            text: 'Усередині значення атрибута, взятого в подвійні лапки.',
            why: 'Там буквальна <code>"</code> завершує значення передчасно, і решта стає заплутаною розміткою. Це єдине місце, де вона потрібна.',
          },
          {
            text: 'Лише всередині блоків <code>&lt;pre&gt;</code>.',
            why: 'Блок <code>&lt;pre&gt;</code> зберігає пробіли. Жодного окремого правила щодо лапок у нього немає.',
          },
          {
            text: 'Ніде — вона застаріла.',
            why: 'Вона все ще потрібна, просто у вужчому місці, ніж три інші.',
          },
        ],
      },
      {
        q: 'У <code>&amp;#8364;</code> — звідки береться число 8364?',
        answer: 1,
        options: [
          {
            text: 'Це позиція в переліку іменованих сутностей.',
            why: 'Іменований перелік не має такої нумерації. Число походить із чогось фундаментальнішого.',
          },
          {
            text: 'Це кодова точка Unicode цього символу, записана десятково.',
            why: '8364 десятково — це U+20AC шістнадцятково, тобто знак євро. <code>&amp;#x20AC;</code> — той самий символ, записаний шістнадцятково.',
          },
          {
            text: 'Це кількість байтів, які займає символ.',
            why: 'Знак євро займає три байти в UTF-8. Число в сутності — це кодова точка, а не розмір.',
          },
          {
            text: 'Воно довільне, і його треба дивитися для кожного браузера окремо.',
            why: 'Воно однакове всюди, бо Unicode призначає його раз і для всіх.',
          },
        ],
      },
      {
        q: 'UTF-8 оголошено, тож ви можете писати € і å просто у файлі. Яку сутність усе одно варто виписувати, хоча символ можна було б набрати?',
        answer: 2,
        options: [
          {
            text: '<code>&amp;euro;</code>',
            why: '€ у коді видно, і він однозначний. Набрати його цілком нормально.',
          },
          {
            text: '<code>&amp;aring;</code>',
            why: 'å — цілком звичайна видима літера, щойно UTF-8 оголошено.',
          },
          {
            text: '<code>&amp;nbsp;</code>',
            why: 'Нерозривний пробіл — реальний символ, який можна набрати, але у вихідному коді він виглядає точнісінько як звичайний пробіл. Ніхто, хто читає код, цього не побачить, а пошук із заміною тихо його знищить. Сутність лишає його видимим.',
          },
          {
            text: 'Жодної — з UTF-8 сутності ніколи не потрібні.',
            why: 'Вони все ще потрібні для символів, які використовує сам HTML, і для невидимих, як цей.',
          },
        ],
      },
    ],
  },
});
