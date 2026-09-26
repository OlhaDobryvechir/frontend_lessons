/*
 * Content of lesson 06 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Tegnkoding, UTF-8',
      kicker: 'Leksjon 6 &middot; HTML &amp; CSS',
      title: 'Tegnkoding, UTF-8',
      lead: 'Hver fil på disken er en rekke tall. En tegnkoding er avtalen om hvilket tall som betyr hvilken bokstav. Blir avtalen feil, går ikke teksten i stykker — den blir bare lest som noe annet.',

      's.bytes.t': 'Tekst er byte, og byte er ikke tekst',
      's.bytes.d':
        '<p>En fil inneholder ingen bokstaver. Den inneholder byte — tall fra 0 til 255 — og en <em>tegnkoding</em> er tabellen som sier hvilket tall som står for hvilket tegn.</p>' +
        '<p>Bytene på disken endrer seg aldri av seg selv. Når tekst kommer ut feil, er ingenting ødelagt: de samme tallene slås rett og slett opp i feil tabell. Den ene tanken forklarer nesten alle kodingsproblemer du vil møte.</p>',

      's.ascii.t': 'Der det begynte: 128 tegn',
      's.ascii.d':
        '<p>ASCII fastsatte tabellen for det engelske alfabetet, sifrene, tegnsettingen og en håndfull kontrollkoder. Sju bit, 128 plasser, og alle maskiner var enige.</p>' +
        '<p>Det var ikke plass til æ, ø, å, і, ї eller noe annet.</p>',
      's.ascii.pagesH': 'Så: 256 plasser, ett alfabet om gangen',
      's.ascii.pages':
        '<p>Den åttende biten doblet tabellen til 256, og den andre halvdelen ble delt ut ulikt i hver del av verden. ISO-8859-1 fylte den med vesteuropeiske bokstaver, ISO-8859-5 og Windows-1251 med kyrilliske, og så videre.</p>' +
        '<p>Resultatet var at en byte først betydde noe når du visste hvilken tabell som var i bruk — og at ett dokument kunne romme ett alfabet, ikke to. En norsk prisliste og en ukrainsk adresse kunne ikke bo i samme fil.</p>',

      's.unicode.t': 'Ett tall for hvert tegn',
      's.unicode.d':
        '<p>Unicode avslutter diskusjonen ved å gi hvert tegn i hver skrift sitt eget tall, kalt et <em>kodepunkt</em> og skrevet <code>U+</code> etterfulgt av heksadesimale sifre. Over hundre tusen av dem er tildelt, med plass til langt flere.</p>' +
        '<p>Merk hva Unicode ikke er: det er en katalog, ikke et filformat. Det sier at æ er tegn nummer 230. Det sier ingenting om hvordan det tallet skal lagres i en fil — det er tegnkodingens jobb.</p>',

      's.utf8.t': 'Fra tall til byte',
      's.utf8.d':
        '<p>UTF-8 er tegnkodingen som gjør kodepunkter om til byte, og den bruker ulikt antall byte avhengig av hvor stort tallet er: én for ASCII, to for de fleste europeiske bokstaver inkludert æ ø å og hele det kyrilliske alfabetet, tre for det meste av resten, fire for emoji og de sjeldnere skriftene.</p>',
      's.utf8.whyH': 'Hvorfor nettopp denne vant',
      's.utf8.why':
        '<p>De første 128 kodepunktene lagres som nøyaktig den ene byten ASCII alltid brukte. Enhver fil som var gyldig ASCII, er allerede gyldig UTF-8, byte for byte, uten noe å konvertere.</p>' +
        '<p>Den bakoverkompatibiliteten er hele grunnen til at UTF-8 overtok nettet mens de andre Unicode-kodingene ikke gjorde det. Tiår med eksisterende filer og programmer fortsatte å virke, og de ekstra alfabetene fulgte med på kjøpet.</p>',
      's.utf8.lenH': 'Ett tegn er ikke én byte',
      's.utf8.len':
        '<p>Vanen med å behandle et tegn som en byte ryker stille her. <code>æ</code> er ett tegn og to byte; 🙂 er ett tegn og fire.</p>' +
        '<p>Det betyr noe overalt der noe telles: en databasekolonne målt i byte rommer færre bokstaver enn du tror, og en lengde målt i kodeenheter er ikke antallet tegn en leser ser.</p>',

      's.moji.t': 'Når lesingen går galt',
      's.moji.d':
        '<p>Tekst lest med feil tabell har et navn — <em>mojibake</em> — og formen på skaden forteller hva som skjedde.</p>' +
        '<p>Én bokstav som er blitt til to eller tre rare latinske tegn, betyr at UTF-8-byte ble lest én om gangen av en gammel tabell. Går det motsatt vei, får du <span style="color: var(--bad)">&#xFFFD;</span>, erstatningstegnet, som nettleseren setter inn når en byte ikke i det hele tatt kan starte en gyldig UTF-8-sekvens.</p>',

      's.declare.t': 'Tre steder som må være enige',
      's.declare.d':
        '<p>Å skrive UTF-8 er ikke nok; alle nedover i kjeden må få beskjed. Tre parter er involvert, og de kan være uenige.</p>' +
        '<p>Editoren din bestemmer bytene som skrives. Serveren kan kunngjøre en tegnkoding i HTTP-svaret. Dokumentet kan kunngjøre en i <code>&lt;meta charset&gt;</code>. Når headeren og metaen er i konflikt, <strong>vinner HTTP-headeren</strong> — og det er derfor en side kan se riktig ut på din maskin og feil så snart den er satt i drift.</p>',
      's.declare.note':
        '<p>Sett <code>&lt;meta charset="utf-8"&gt;</code> først inne i <code>&lt;head&gt;</code>, før all tekst. Nettleseren må begynne å dekode med en gang, og finner den erklæringen sent, må den kaste det den har lest og begynne på nytt. Leksjon 2 dekket taggen; dette er grunnen til at den står helt øverst.</p>',

      's.entities.t': 'De tre du fortsatt må skrive om',
      's.entities.d':
        '<p>Entiteter som <code>&amp;aring;</code> var en gang den eneste trygge måten å få å inn på en side hvis koding du ikke kunne stole på. Med UTF-8 erklært kan du rett og slett skrive bokstaven.</p>' +
        '<p>Tre er fortsatt påkrevd, og av en helt annen grunn: <code>&lt;</code>, <code>&gt;</code> og <code>&amp;</code> betyr noe for HTML-tolkeren. Skriver du dem bokstavelig, leter nettleseren etter en tagg eller en entitet som ikke er der. Det er et syntaksproblem, ikke et kodingsproblem, og UTF-8 gjør ingenting med det.</p>',

      's.note':
        '<p>Kortversjonen. Lagre som UTF-8 uten BOM; få serveren til å sende <code>charset=utf-8</code>; sett <code>&lt;meta charset="utf-8"&gt;</code> først i <code>&lt;head&gt;</code>; skriv bare om <code>&lt;</code>, <code>&gt;</code> og <code>&amp;</code>. Gjør de fire tingene, så slutter tegnkoding å være noe du tenker på.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Encoding, UTF-8',
      kicker: 'Lesson 6 &middot; HTML &amp; CSS',
      title: 'Encoding, UTF-8',
      lead: 'Every file on disk is a row of numbers. An encoding is the agreement about which number means which letter. Get the agreement wrong and your text does not break — it simply gets read as something else.',

      's.bytes.t': 'Text is bytes, and bytes are not text',
      's.bytes.d':
        '<p>A file contains no letters. It contains bytes — numbers from 0 to 255 — and an <em>encoding</em> is the table that says which number stands for which character.</p>' +
        '<p>The bytes on disk never change by themselves. When text comes out wrong, nothing has been corrupted: the same numbers are simply being looked up in the wrong table. That single idea explains almost every encoding problem you will meet.</p>',

      's.ascii.t': 'Where it started: 128 characters',
      's.ascii.d':
        '<p>ASCII fixed the table for the English alphabet, the digits, the punctuation and a handful of control codes. Seven bits, 128 slots, and every machine agreed.</p>' +
        '<p>There was no room in it for æ, ø, å, і, ї, or anything else.</p>',
      's.ascii.pagesH': 'Then: 256 slots, one alphabet at a time',
      's.ascii.pages':
        '<p>The eighth bit doubled the table to 256, and the second half was handed out differently in every part of the world. ISO-8859-1 filled it with Western European letters, ISO-8859-5 and Windows-1251 with Cyrillic ones, and so on.</p>' +
        '<p>The result was that a byte only meant something once you knew which table was in use — and that one document could hold one alphabet, not two. A Norwegian price list and a Ukrainian address could not live in the same file.</p>',

      's.unicode.t': 'One number for every character',
      's.unicode.d':
        '<p>Unicode ends the argument by giving every character in every script its own number, called a <em>code point</em> and written <code>U+</code> followed by hexadecimal digits. Over a hundred thousand of them are assigned, with room for far more.</p>' +
        '<p>Note what Unicode is not: it is a catalogue, not a file format. It says that æ is character number 230. It says nothing about how to store that number in a file — that is the job of an encoding.</p>',

      's.utf8.t': 'From numbers to bytes',
      's.utf8.d':
        '<p>UTF-8 is the encoding that turns code points into bytes, and it uses a different number of bytes depending on how large the number is: one for ASCII, two for most European letters including æ ø å and the whole Cyrillic alphabet, three for most of the rest, four for emoji and the rarer scripts.</p>',
      's.utf8.whyH': 'Why this one won',
      's.utf8.why':
        '<p>The first 128 code points are stored as exactly the single byte ASCII always used. Any file that was valid ASCII is already valid UTF-8, byte for byte, with nothing to convert.</p>' +
        '<p>That backwards compatibility is the whole reason UTF-8 took over the web while the other Unicode encodings did not. Decades of existing files and programs kept working untouched, and the extra alphabets came for free.</p>',
      's.utf8.lenH': 'One character is not one byte',
      's.utf8.len':
        '<p>The habit of treating a character as a byte quietly breaks here. <code>æ</code> is one character and two bytes; 🙂 is one character and four.</p>' +
        '<p>It matters wherever something is counted: a database column sized in bytes holds fewer letters than you think, and a length measured in code units is not the number of characters a reader sees.</p>',

      's.moji.t': 'When the reading goes wrong',
      's.moji.d':
        '<p>Text read with the wrong table has a name — <em>mojibake</em> — and the shape of the damage tells you what happened.</p>' +
        '<p>A single letter that has turned into two or three odd Latin characters means UTF-8 bytes were read one at a time by an old table. Going the other way gives you <span style="color: var(--bad)">&#xFFFD;</span>, the replacement character, which the browser inserts when a byte cannot start a valid UTF-8 sequence at all.</p>',

      's.declare.t': 'Three places that must agree',
      's.declare.d':
        '<p>Writing UTF-8 is not enough; everyone down the line has to be told. Three parties are involved, and they can disagree.</p>' +
        '<p>Your editor decides the bytes that get written. The server may announce an encoding in the HTTP response. The document may announce one in <code>&lt;meta charset&gt;</code>. When the header and the meta conflict, <strong>the HTTP header wins</strong> — which is why a page can look correct on your machine and wrong once it is deployed.</p>',
      's.declare.note':
        '<p>Put <code>&lt;meta charset="utf-8"&gt;</code> first inside <code>&lt;head&gt;</code>, before any text. The browser has to start decoding immediately, and if it finds the declaration late it has to throw away what it has read and start again. Lesson 2 covered the tag; this is why it goes at the very top.</p>',

      's.entities.t': 'The three you still have to escape',
      's.entities.d':
        '<p>Entities such as <code>&amp;aring;</code> were once the only safe way to get å onto a page whose encoding you could not trust. With UTF-8 declared, you can simply type the letter.</p>' +
        '<p>Three are still required, and for a completely different reason: <code>&lt;</code>, <code>&gt;</code> and <code>&amp;</code> mean something to the HTML parser. Written literally, the browser goes looking for a tag or an entity that is not there. That is a syntax problem, not an encoding problem, and UTF-8 does nothing about it.</p>',

      's.note':
        '<p>The short version. Save as UTF-8 without a BOM; make the server send <code>charset=utf-8</code>; put <code>&lt;meta charset="utf-8"&gt;</code> first in the head; escape only <code>&lt;</code>, <code>&gt;</code> and <code>&amp;</code>. Do those four things and encoding stops being something you think about.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Кодування, UTF-8',
      kicker: 'Урок 6 &middot; HTML &amp; CSS',
      title: 'Кодування, UTF-8',
      lead: 'Кожен файл на диску — це низка чисел. Кодування — це домовленість про те, яке число означає яку літеру. Якщо домовленість хибна, текст не ламається — його просто читають як щось інше.',

      's.bytes.t': 'Текст — це байти, а байти — не текст',
      's.bytes.d':
        '<p>Файл не містить літер. Він містить байти — числа від 0 до 255 — а <em>кодування</em> це таблиця, яка каже, яке число позначає який символ.</p>' +
        '<p>Байти на диску ніколи не змінюються самі собою. Коли текст виходить неправильним, ніщо не пошкоджено: ті самі числа просто шукають не в тій таблиці. Ця одна думка пояснює майже всі проблеми з кодуванням, які вам трапляться.</p>',

      's.ascii.t': 'Звідки все почалося: 128 символів',
      's.ascii.d':
        '<p>ASCII закріпив таблицю для англійської абетки, цифр, розділових знаків і жменьки керівних кодів. Сім бітів, 128 місць, і всі машини були згодні.</p>' +
        '<p>Місця для æ, ø, å, і, ї чи чогось іншого там не було.</p>',
      's.ascii.pagesH': 'Потім: 256 місць, по одній абетці за раз',
      's.ascii.pages':
        '<p>Восьмий біт подвоїв таблицю до 256, і другу половину в кожній частині світу роздали по-своєму. ISO-8859-1 заповнив її західноєвропейськими літерами, ISO-8859-5 і Windows-1251 — кириличними, і так далі.</p>' +
        '<p>Вийшло так, що байт починав щось означати лише тоді, коли ви знали, яка таблиця використовується — і що один документ міг умістити одну абетку, а не дві. Норвезький прайс і українська адреса не могли жити в одному файлі.</p>',

      's.unicode.t': 'Одне число для кожного символу',
      's.unicode.d':
        '<p>Unicode завершує суперечку, даючи кожному символу кожної писемності власне число — <em>кодову точку</em>, яку пишуть як <code>U+</code> і далі шістнадцяткові цифри. Понад сто тисяч із них уже призначено, і місця лишається значно більше.</p>' +
        '<p>Зверніть увагу, чим Unicode не є: це каталог, а не формат файлу. Він каже, що æ — символ номер 230. Він нічого не каже про те, як зберегти це число у файлі — це робота кодування.</p>',

      's.utf8.t': 'Від чисел до байтів',
      's.utf8.d':
        '<p>UTF-8 — це кодування, яке перетворює кодові точки на байти, і воно використовує різну кількість байтів залежно від того, наскільки велике число: один для ASCII, два для більшості європейських літер, зокрема æ ø å і всієї кирилиці, три для більшості решти, чотири для емодзі та рідших писемностей.</p>',
      's.utf8.whyH': 'Чому перемогло саме воно',
      's.utf8.why':
        '<p>Перші 128 кодових точок зберігаються рівно тим самим одним байтом, який завжди використовував ASCII. Будь-який файл, що був правильним ASCII, уже є правильним UTF-8, байт у байт, і конвертувати нічого не треба.</p>' +
        '<p>Саме ця зворотна сумісність — уся причина того, що UTF-8 захопив веб, а інші кодування Unicode ні. Десятиліття наявних файлів і програм продовжили працювати недоторканими, а додаткові абетки дісталися задарма.</p>',
      's.utf8.lenH': 'Один символ — це не один байт',
      's.utf8.len':
        '<p>Звичка вважати символ байтом тихо ламається саме тут. <code>æ</code> — це один символ і два байти; 🙂 — один символ і чотири.</p>' +
        '<p>Це має значення всюди, де щось рахують: стовпець бази даних, розмір якого заданий у байтах, умістить менше літер, ніж ви думаєте, а довжина, виміряна в кодових одиницях, — це не кількість символів, які бачить читач.</p>',

      's.moji.t': 'Коли читання йде не так',
      's.moji.d':
        '<p>Текст, прочитаний не за тією таблицею, має власну назву — <em>mojibake</em>, або «кракозябри» — і форма спотворення підказує, що саме сталося.</p>' +
        '<p>Одна літера, що перетворилася на два-три дивні латинські символи, означає, що байти UTF-8 читала по одному стара таблиця. У зворотному напрямку ви отримаєте <span style="color: var(--bad)">&#xFFFD;</span>, символ заміни, який браузер вставляє, коли байт узагалі не може почати правильну послідовність UTF-8.</p>',

      's.declare.t': 'Три місця, які мають узгоджуватися',
      's.declare.d':
        '<p>Писати в UTF-8 недостатньо; усім далі по ланцюжку треба про це сказати. Задіяні три сторони, і вони можуть не погоджуватися.</p>' +
        '<p>Ваш редактор визначає, які байти буде записано. Сервер може оголосити кодування у відповіді HTTP. Документ може оголосити його в <code>&lt;meta charset&gt;</code>. Коли заголовок і мета суперечать одне одному, <strong>перемагає заголовок HTTP</strong> — ось чому сторінка може виглядати правильно на вашій машині й неправильно після розгортання.</p>',
      's.declare.note':
        '<p>Ставте <code>&lt;meta charset="utf-8"&gt;</code> першим усередині <code>&lt;head&gt;</code>, перед будь-яким текстом. Браузер має почати декодувати негайно, і якщо він знайде оголошення пізно, йому доведеться викинути прочитане і почати спочатку. Урок 2 розповів про сам тег; тут — причина, чому він стоїть на самому початку.</p>',

      's.entities.t': 'Три, які все ще треба екранувати',
      's.entities.d':
        '<p>Сутності на кшталт <code>&amp;aring;</code> колись були єдиним надійним способом отримати å на сторінці, кодуванню якої не можна було довіряти. Коли UTF-8 оголошено, ви можете просто написати літеру.</p>' +
        '<p>Три все ще обов’язкові, і з цілком іншої причини: <code>&lt;</code>, <code>&gt;</code> і <code>&amp;</code> щось означають для розбирача HTML. Якщо написати їх буквально, браузер шукатиме тег або сутність, яких немає. Це проблема синтаксису, а не кодування, і UTF-8 з нею нічого не робить.</p>',

      's.note':
        '<p>Коротко. Зберігайте як UTF-8 без BOM; налаштуйте сервер надсилати <code>charset=utf-8</code>; ставте <code>&lt;meta charset="utf-8"&gt;</code> першим у <code>&lt;head&gt;</code>; екрануйте лише <code>&lt;</code>, <code>&gt;</code> і <code>&amp;</code>. Зробіть ці чотири речі — і кодування перестане бути тим, про що ви думаєте.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Siden din viser <code>BrÃ¦</code> der den skulle vist <code>Bræ</code>. Hva har skjedd?',
        answer: 1,
        options: [
          {
            text: 'Filen ble lagret feil, og teksten er ødelagt.',
            why: 'Ingenting er ødelagt. Bytene er helt riktige; de blir bare lest med feil tabell.',
          },
          {
            text: 'Filen er UTF-8, men nettleseren leser den med en én-byte-tabell.',
            why: 'æ lagres som to byte, <code>C3 A6</code>. Lest én om gangen av en gammel tabell er de to bytene de to tegnene Ã og ¦. Erklær tegnkodingen, så blir de én bokstav igjen.',
          },
          {
            text: 'Skrifttypen inneholder ikke bokstaven æ.',
            why: 'Et manglende tegn vises som en firkant eller et tomrom, ikke som andre lesbare bokstaver.',
          },
          {
            text: 'Siden trenger <code>&amp;aring;</code> i stedet for bokstaven.',
            why: 'Entiteter er en vei rundt en ukjent tegnkoding, ikke løsningen her — og æ er heller ikke å.',
          },
        ],
      },
      {
        q: 'En fil inneholder bare de to tegnene <code>aæ</code>, lagret som UTF-8. Hvor mange byte er det?',
        answer: 1,
        options: [
          {
            text: 'To — én byte per tegn.',
            why: 'Det gjelder bare ASCII-tegn. I UTF-8 avhenger antall byte av hvor stort kodepunktet er.',
          },
          {
            text: 'Tre — én for a, to for æ.',
            why: 'a ligger i ASCII-området og tar én byte; æ er U+00E6 og tar to, <code>C3 A6</code>.',
          },
          {
            text: 'Fire — to byte per tegn.',
            why: 'UTF-8 har variabel lengde, ikke fast to. a tar fortsatt én byte.',
          },
          {
            text: 'Det kommer an på skrifttypen.',
            why: 'En skrifttype avgjør hvordan et tegn tegnes. Det har ingenting med hvordan det lagres å gjøre.',
          },
        ],
      },
      {
        q: 'Hvorfor overtok UTF-8 nettet, og ikke de andre Unicode-kodingene?',
        answer: 2,
        options: [
          {
            text: 'Den er den eneste som kan representere alle tegn.',
            why: 'De andre Unicode-kodingene dekker de samme tegnene. Det var ikke det som skilte dem.',
          },
          {
            text: 'Den bruker færre byte enn alle andre kodinger for alle språk.',
            why: 'Ikke sant — for enkelte skrifter er andre kodinger mer kompakte. UTF-8 er bare minst for ASCII-tung tekst.',
          },
          {
            text: 'Enhver gyldig ASCII-fil er allerede gyldig UTF-8, byte for byte.',
            why: 'Den bakoverkompatibiliteten gjorde at tiår med eksisterende filer og programmer fortsatte å virke urørt, og de ekstra alfabetene fulgte med på kjøpet.',
          },
          {
            text: 'Den var den første tegnkodingen som ble standardisert.',
            why: 'ASCII og ISO-8859-tabellene kom lenge før den.',
          },
        ],
      },
      {
        q: 'Hva er forskjellen på Unicode og UTF-8?',
        answer: 2,
        options: [
          {
            text: 'Det er to navn på det samme.',
            why: 'Det er to forskjellige lag, og å holde dem fra hverandre gjør resten av temaet mye lettere.',
          },
          {
            text: 'Unicode er for nettet og UTF-8 er for filer.',
            why: 'Ingen av dem er knyttet til et medium. Forskjellen ligger i hva hver av dem faktisk definerer.',
          },
          {
            text: 'Unicode gir hvert tegn et tall; UTF-8 er én måte å lagre de tallene som byte.',
            why: 'Unicode er en katalog: æ er tegn 230. UTF-8 er en beslutning om filformat: tegn 230 skrives som bytene <code>C3 A6</code>.',
          },
          {
            text: 'Unicode er den nyere erstatningen for UTF-8.',
            why: 'Lagene ligger motsatt vei, og ingen av dem erstattet den andre. UTF-8 finnes nettopp for å kode Unicode.',
          },
        ],
      },
      {
        q: 'Siden din er riktig lokalt, men viser mojibake på serveren. Dokumentet har <code>&lt;meta charset="utf-8"&gt;</code> øverst i <code>&lt;head&gt;</code>. Hva bør du mistenke først?',
        answer: 0,
        options: [
          {
            text: 'Serveren sender en annen <code>charset</code> i HTTP-headeren, og den overstyrer metaen.',
            why: 'HTTP-headeren vinner over metaen. Dette er den klassiske grunnen til at en side er fin på din maskin og feil så snart den er satt i drift.',
          },
          {
            text: 'Metaen står på feil sted.',
            why: 'Den står der den skal — først i <code>&lt;head&gt;</code>. Plasseringen betyr noe, men det er ikke problemet her.',
          },
          {
            text: 'Nettlesere ignorerer <code>&lt;meta charset&gt;</code>.',
            why: 'De følger den. De følger bare HTTP-headeren mer.',
          },
          {
            text: 'UTF-8 virker ikke over HTTP.',
            why: 'Det er standardkodingen på nettet.',
          },
        ],
      },
      {
        q: 'Siden din er erklært som UTF-8. Hvilke tegn må fortsatt skrives som entiteter?',
        answer: 2,
        options: [
          {
            text: 'Ingen — UTF-8 fjerner behovet helt.',
            why: 'Den fjerner behovet for bokstaver som å, men ikke for tegnene HTML selv bruker.',
          },
          {
            text: 'Alle bokstaver utenfor det engelske alfabetet.',
            why: 'Det stemte før UTF-8. Nå kan du skrive æ, ï og 中 direkte.',
          },
          {
            text: '<code>&lt;</code>, <code>&gt;</code> og <code>&amp;</code>',
            why: 'Disse betyr noe for HTML-tolkeren: skrevet bokstavelig leter nettleseren etter en tagg eller en entitet. Det er et syntaksproblem, som ingen tegnkoding kan løse.',
          },
          {
            text: 'Bare emoji.',
            why: 'Emoji er helt vanlige tegn for UTF-8 — fire byte hver — og trenger ingen omskriving.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'Your page shows <code>BrÃ¦</code> where it should show <code>Bræ</code>. What has happened?',
        answer: 1,
        options: [
          {
            text: 'The file was saved wrongly and the text is corrupted.',
            why: 'Nothing is corrupted. The bytes are exactly right; they are just being read with the wrong table.',
          },
          {
            text: 'The file is UTF-8, but the browser is reading it with a one-byte table.',
            why: 'æ is stored as two bytes, <code>C3 A6</code>. Read one at a time by an old table, those two bytes are the two characters Ã and ¦. Declare the encoding and they turn back into one letter.',
          },
          {
            text: 'The font does not contain the letter æ.',
            why: 'A missing glyph shows as a box or a blank, not as other readable letters.',
          },
          {
            text: 'The page needs <code>&amp;aring;</code> instead of the letter.',
            why: 'Entities are a way around an unknown encoding, not the fix here — and æ is not å either.',
          },
        ],
      },
      {
        q: 'A file contains only the two characters <code>aæ</code>, saved as UTF-8. How many bytes is that?',
        answer: 1,
        options: [
          {
            text: 'Two — one byte per character.',
            why: 'That holds for ASCII characters only. In UTF-8 the number of bytes depends on how large the code point is.',
          },
          {
            text: 'Three — one for a, two for æ.',
            why: 'a is in the ASCII range and takes a single byte; æ is U+00E6 and takes two, <code>C3 A6</code>.',
          },
          {
            text: 'Four — two bytes per character.',
            why: 'UTF-8 is variable length, not fixed at two. a still takes one byte.',
          },
          {
            text: 'It depends on the font.',
            why: 'A font decides how a character is drawn. It has nothing to do with how it is stored.',
          },
        ],
      },
      {
        q: 'Why did UTF-8 take over the web rather than the other Unicode encodings?',
        answer: 2,
        options: [
          {
            text: 'It is the only one that can represent every character.',
            why: 'The other Unicode encodings cover the same characters. That is not what separated them.',
          },
          {
            text: 'It uses fewer bytes than any other encoding for every language.',
            why: 'Not true — for some scripts other encodings are more compact. UTF-8 is only the smallest for ASCII-heavy text.',
          },
          {
            text: 'Any valid ASCII file is already valid UTF-8, byte for byte.',
            why: 'That backwards compatibility meant decades of existing files and programs kept working untouched, and the extra alphabets came for free.',
          },
          {
            text: 'It was the first encoding to be standardised.',
            why: 'ASCII and the ISO-8859 tables came long before it.',
          },
        ],
      },
      {
        q: 'What is the difference between Unicode and UTF-8?',
        answer: 2,
        options: [
          {
            text: 'They are two names for the same thing.',
            why: 'They are two different layers, and keeping them apart makes the rest of the subject much easier.',
          },
          {
            text: 'Unicode is for the web and UTF-8 is for files.',
            why: 'Neither is tied to a medium. The difference is in what each one actually defines.',
          },
          {
            text: 'Unicode gives every character a number; UTF-8 is one way of storing those numbers as bytes.',
            why: 'Unicode is a catalogue: æ is character 230. UTF-8 is a file-format decision: character 230 is written as the bytes <code>C3 A6</code>.',
          },
          {
            text: 'Unicode is the newer replacement for UTF-8.',
            why: 'The layers sit the other way round, and neither replaced the other. UTF-8 exists precisely to encode Unicode.',
          },
        ],
      },
      {
        q: 'Your page is correct locally but shows mojibake on the server. The document has <code>&lt;meta charset="utf-8"&gt;</code> at the top of the <code>&lt;head&gt;</code>. What should you suspect first?',
        answer: 0,
        options: [
          {
            text: 'The server is sending a different <code>charset</code> in the HTTP header, which overrides the meta.',
            why: 'The HTTP header wins over the meta. This is the classic reason a page is fine on your machine and wrong once deployed.',
          },
          {
            text: 'The meta is in the wrong place.',
            why: 'It is where it should be — first in the <code>&lt;head&gt;</code>. Position does matter, but it is not the problem here.',
          },
          {
            text: 'Browsers ignore <code>&lt;meta charset&gt;</code>.',
            why: 'They honour it. They just honour the HTTP header more.',
          },
          {
            text: 'UTF-8 does not work over HTTP.',
            why: 'It is the standard encoding of the web.',
          },
        ],
      },
      {
        q: 'Your page is declared as UTF-8. Which characters must still be written as entities?',
        answer: 2,
        options: [
          {
            text: 'None — UTF-8 removes the need entirely.',
            why: 'It removes the need for letters like å, but not for the characters HTML itself uses.',
          },
          {
            text: 'All letters outside the English alphabet.',
            why: 'That was true before UTF-8. Now you can type æ, ï and 中 directly.',
          },
          {
            text: '<code>&lt;</code>, <code>&gt;</code> and <code>&amp;</code>',
            why: 'These mean something to the HTML parser: written literally, the browser goes looking for a tag or an entity. That is a syntax problem, which no encoding can solve.',
          },
          {
            text: 'Only emoji.',
            why: 'Emoji are ordinary characters to UTF-8 — four bytes each — and need no escaping.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ваша сторінка показує <code>BrÃ¦</code> там, де мала б показати <code>Bræ</code>. Що сталося?',
        answer: 1,
        options: [
          {
            text: 'Файл збережено неправильно, і текст пошкоджено.',
            why: 'Ніщо не пошкоджено. Байти цілком правильні; їх просто читають не за тією таблицею.',
          },
          {
            text: 'Файл у UTF-8, але браузер читає його однобайтовою таблицею.',
            why: 'æ зберігається як два байти, <code>C3 A6</code>. Прочитані по одному старою таблицею, ці два байти є двома символами Ã і ¦. Оголосіть кодування — і вони знову стануть однією літерою.',
          },
          {
            text: 'У шрифті немає літери æ.',
            why: 'Відсутній гліф показується як квадратик або порожнє місце, а не як інші читабельні літери.',
          },
          {
            text: 'Сторінці потрібна <code>&amp;aring;</code> замість літери.',
            why: 'Сутності — це обхід невідомого кодування, а не розв’язання тут; та й æ це не å.',
          },
        ],
      },
      {
        q: 'Файл містить лише два символи <code>aæ</code>, збережені як UTF-8. Скільки це байтів?',
        answer: 1,
        options: [
          {
            text: 'Два — по одному байту на символ.',
            why: 'Це справджується лише для символів ASCII. У UTF-8 кількість байтів залежить від того, наскільки велика кодова точка.',
          },
          {
            text: 'Три — один для a, два для æ.',
            why: 'a лежить у діапазоні ASCII і займає один байт; æ — це U+00E6 і займає два, <code>C3 A6</code>.',
          },
          {
            text: 'Чотири — по два байти на символ.',
            why: 'UTF-8 має змінну довжину, а не фіксовані два байти. a так само займає один байт.',
          },
          {
            text: 'Залежить від шрифту.',
            why: 'Шрифт визначає, як символ намальовано. До того, як його збережено, він стосунку не має.',
          },
        ],
      },
      {
        q: 'Чому веб захопив саме UTF-8, а не інші кодування Unicode?',
        answer: 2,
        options: [
          {
            text: 'Це єдине, яке може представити всі символи.',
            why: 'Інші кодування Unicode охоплюють ті самі символи. Не це їх розрізнило.',
          },
          {
            text: 'Воно використовує менше байтів, ніж будь-яке інше кодування, для всіх мов.',
            why: 'Неправда — для деяких писемностей інші кодування компактніші. UTF-8 найменше лише для тексту, насиченого ASCII.',
          },
          {
            text: 'Будь-який правильний файл ASCII уже є правильним UTF-8, байт у байт.',
            why: 'Саме ця зворотна сумісність дала змогу десятиліттям наявних файлів і програм працювати недоторканими, а додаткові абетки дісталися задарма.',
          },
          {
            text: 'Це було перше стандартизоване кодування.',
            why: 'ASCII і таблиці ISO-8859 з’явилися задовго до нього.',
          },
        ],
      },
      {
        q: 'У чому різниця між Unicode і UTF-8?',
        answer: 2,
        options: [
          {
            text: 'Це дві назви того самого.',
            why: 'Це два різні рівні, і якщо їх розрізняти, решта теми стає значно легшою.',
          },
          {
            text: 'Unicode — для вебу, а UTF-8 — для файлів.',
            why: 'Жодне з них не прив’язане до середовища. Різниця в тому, що саме кожне з них визначає.',
          },
          {
            text: 'Unicode дає кожному символу число; UTF-8 — це один зі способів зберегти ці числа як байти.',
            why: 'Unicode — це каталог: æ є символом 230. UTF-8 — це рішення щодо формату файлу: символ 230 записується байтами <code>C3 A6</code>.',
          },
          {
            text: 'Unicode — новіша заміна для UTF-8.',
            why: 'Рівні розташовані навпаки, і жодне не замінило інше. UTF-8 існує саме для того, щоб кодувати Unicode.',
          },
        ],
      },
      {
        q: 'Локально ваша сторінка правильна, а на сервері показує кракозябри. У документі є <code>&lt;meta charset="utf-8"&gt;</code> на початку <code>&lt;head&gt;</code>. Що варто запідозрити першим?',
        answer: 0,
        options: [
          {
            text: 'Сервер надсилає інший <code>charset</code> у заголовку HTTP, і той перекриває мету.',
            why: 'Заголовок HTTP перемагає мету. Це класична причина того, що сторінка гарна на вашій машині й неправильна після розгортання.',
          },
          {
            text: 'Мета стоїть не в тому місці.',
            why: 'Вона стоїть там, де має — першою в <code>&lt;head&gt;</code>. Розташування справді важливе, але проблема не в ньому.',
          },
          {
            text: 'Браузери ігнорують <code>&lt;meta charset&gt;</code>.',
            why: 'Вони її враховують. Просто заголовок HTTP враховують більше.',
          },
          {
            text: 'UTF-8 не працює через HTTP.',
            why: 'Це стандартне кодування вебу.',
          },
        ],
      },
      {
        q: 'Вашу сторінку оголошено як UTF-8. Які символи все одно треба писати як сутності?',
        answer: 2,
        options: [
          {
            text: 'Жодних — UTF-8 повністю знімає таку потребу.',
            why: 'Він знімає потребу для літер на кшталт å, але не для символів, які використовує сам HTML.',
          },
          {
            text: 'Усі літери поза англійською абеткою.',
            why: 'Так було до UTF-8. Тепер ви можете писати æ, ï і 中 напряму.',
          },
          {
            text: '<code>&lt;</code>, <code>&gt;</code> і <code>&amp;</code>',
            why: 'Вони щось означають для розбирача HTML: написані буквально, вони змусять браузер шукати тег або сутність. Це проблема синтаксису, якої не розв’яже жодне кодування.',
          },
          {
            text: 'Лише емодзі.',
            why: 'Для UTF-8 емодзі — звичайні символи, по чотири байти кожен, і екранування їм не потрібне.',
          },
        ],
      },
    ],
  },
});
