/*
 * Content of lesson 04 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'HTML-tagger: a, img, audio, video',
      kicker: 'Leksjon 4 &middot; HTML &amp; CSS',
      title: 'HTML-tagger: a, img, audio, video',
      lead: 'Fire elementer som henter verden utenfra inn på siden: en lenke til et annet sted, et bilde, en lyd og et levende bilde. Hvert av dem er nesten helt og holdent definert av attributtene sine.',

      's.a.t': 'En lenke til et annet sted',
      's.a.d':
        '<p><code>&lt;a&gt;</code> gjør det som står mellom taggene — tekst, et bilde, en hel blokk — til noe den besøkende kan klikke på.</p>' +
        '<p>Alene gjør det ingenting; det er attributtene som avgjør hvor det fører og hvordan det åpnes.</p>',
      's.a.href':
        '<p><code>href</code> er målet, og det er dette som overhodet gjør elementet til en lenke. Uten det har du tekst som ser ut som og oppfører seg som vanlig tekst.</p>' +
        '<p>Det finnes i flere former: en annen side på ditt eget nettsted, en full adresse til et annet nettsted, <code>#</code> etterfulgt av identifikatoren til et element du vil hoppe til på samme side, <code>mailto:</code> for å begynne en e-post, eller <code>tel:</code> for å ringe.</p>',
      's.a.target':
        '<p><code>target</code> sier hvor lenken åpnes. Utelater du det, erstatter den nye siden den nåværende, og det er det besøkende forventer.</p>' +
        '<p><code>_blank</code> åpner en ny fane. Bruk det sparsomt — først og fremst på lenker som fører bort til et annet nettsted, der du ikke vil miste besøkeren.</p>',
      's.a.rel':
        '<p><code>rel</code> beskriver forholdet til siden du lenker til. Det du vil se oftest, er paret <code>noopener noreferrer</code>, som skrives hver gang du bruker <code>target="_blank"</code>.</p>' +
        '<p><code>noopener</code> hindrer den nye siden i å nå tilbake og styre fanen den kom fra; <code>noreferrer</code> hindrer den i tillegg i å få vite hvilken side du kom fra.</p>',
      's.a.download':
        '<p><code>download</code> ber nettleseren lagre filen i stedet for å prøve å åpne den. Det er et boolsk attributt: det holder å skrive ordet.</p>' +
        '<p>Nyttig for en PDF eller et regneark som ellers ville åpnet seg inne i nettleseren.</p>',

      's.img.t': 'Et bilde',
      's.img.d':
        '<p><code>&lt;img&gt;</code> plasserer et bilde på siden. Det har ingen sluttagg og intet innhold — bildet ligger ikke inne i elementet, det navngis av et attributt.</p>',
      's.img.src':
        '<p><code>src</code> er adressen til bildefilen: en sti inne på ditt eget nettsted eller en full adresse et annet sted.</p>',
      's.img.alt':
        '<p><code>alt</code> er en kort beskrivelse av hva bildet viser. En skjermleser leser den opp, og nettleseren viser den hvis filen ikke lastes.</p>' +
        '<p>Er bildet rent dekorativt, og sier det ingenting teksten ikke allerede sier, skriv <code>alt=""</code>. Det ber hjelpemidler hoppe over det, og er bedre enn å utelate attributtet helt.</p>',
      's.img.size':
        '<p><code>width</code> og <code>height</code> oppgir størrelsen på bildet i piksler.</p>' +
        '<p>Det er verdt å sette dem selv når CSS bestemmer den endelige størrelsen: nettleseren kan da reservere riktig plass før filen kommer, slik at resten av siden ikke hopper mens bildene lastes.</p>',
      's.img.loading':
        '<p><code>loading="lazy"</code> lar nettleseren utsette et bilde til den besøkende scroller i nærheten av det. På en lang side full av bilder betyr det at langt mindre lastes ned med én gang.</p>' +
        '<p>La det være av på bildene som er synlige når siden åpnes — dem vil du ha umiddelbart.</p>',

      's.audio.t': 'En lyd',
      's.audio.d':
        '<p><code>&lt;audio&gt;</code> spiller av en lydfil. I motsetning til <code>&lt;img&gt;</code> har det en sluttagg, og det viser ingenting i det hele tatt med mindre du ber om en spiller.</p>',
      's.audio.src':
        '<p><code>src</code> er adressen til lydfilen. En side med bare dette er stum og usynlig: den har lastet en lyd ingen kan starte.</p>',
      's.audio.controls':
        '<p><code>controls</code> tegner den kjente avspillingsknappen, fremdriftslinjen og volumet. Dette er attributtet folk glemmer, for så å lure på hvorfor ingenting dukker opp på siden.</p>' +
        '<p>Det er et boolsk attributt — ordet alene slår det på.</p>',
      's.audio.auto':
        '<p><code>autoplay</code> starter avspillingen uten at den besøkende gjør noe, <code>loop</code> begynner på nytt når den når slutten, og <code>muted</code> starter med lyden av.</p>' +
        '<p>Disse tre opptrer vanligvis sammen, fordi nettlesere nekter å starte hørbar lyd av seg selv. En <code>autoplay</code> uten <code>muted</code> starter rett og slett ikke.</p>',
      's.audio.preload':
        '<p><code>preload</code> er et hint om hvor mye som skal hentes før noen trykker på play: <code>none</code> henter ingenting, <code>metadata</code> henter akkurat nok til å vite lengden, og <code>auto</code> lar nettleseren hente hele filen.</p>' +
        '<p><code>metadata</code> er den vanlige mellomveien.</p>',

      's.video.t': 'Et levende bilde',
      's.video.d':
        '<p><code>&lt;video&gt;</code> fungerer som <code>&lt;audio&gt;</code>, med én forskjell som betyr noe: det opptar et rektangel på siden allerede før noe spilles av.</p>',
      's.video.src':
        '<p>Disse to oppfører seg nøyaktig som på <code>&lt;audio&gt;</code>: <code>src</code> navngir filen, <code>controls</code> tegner spilleren. Uten <code>controls</code> ser den besøkende et bildefelt uten noen måte å starte det på.</p>',
      's.video.poster':
        '<p><code>poster</code> er et stillbilde som vises i det rektangelet før avspillingen begynner.</p>' +
        '<p>Utelater du det, viser nettleseren første bilderute av videoen, som ofte er svart.</p>',
      's.video.size':
        '<p><code>width</code> og <code>height</code> setter størrelsen på bildefeltet, i piksler, av samme grunn som på et bilde: plassen reserveres før filen kommer.</p>',
      's.video.auto':
        '<p>De samme tre som på <code>&lt;audio&gt;</code>, pluss én til. <code>playsinline</code> ber en mobil spille videoen inne i siden i stedet for å ta over hele skjermen.</p>' +
        '<p>Disse fire sammen er standardoppskriften på et stumt, loopende bakgrunnsklipp.</p>',

      's.note':
        '<p><code>controls</code>, <code>autoplay</code>, <code>muted</code>, <code>loop</code>, <code>playsinline</code> og <code>download</code> er boolske attributter: å skrive navnet slår innstillingen på, og å utelate det slår den av. Det finnes ingen <code>controls="false"</code> — den strengen er ikke tom, så nettleseren leser den som på.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'HTML tags: a, img, audio, video',
      kicker: 'Lesson 4 &middot; HTML &amp; CSS',
      title: 'HTML tags: a, img, audio, video',
      lead: 'Four elements that bring the outside world onto your page: a link to somewhere else, a picture, a sound and a moving picture. Each one is almost entirely defined by its attributes.',

      's.a.t': 'A link to somewhere else',
      's.a.d':
        '<p><code>&lt;a&gt;</code> turns whatever sits between its tags — text, an image, a whole block — into something the visitor can click.</p>' +
        '<p>On its own it does nothing; the attributes decide where it leads and how it opens.</p>',
      's.a.href':
        '<p><code>href</code> is the destination, and it is what makes the element a link at all. Without it you have text that looks and behaves like ordinary text.</p>' +
        '<p>It takes several shapes: another page of your own site, a full address on another site, <code>#</code> followed by the identifier of an element to jump to on the current page, <code>mailto:</code> to start an email, or <code>tel:</code> to place a call.</p>',
      's.a.target':
        '<p><code>target</code> says where the link opens. Leave it out and the new page replaces the current one, which is what visitors expect.</p>' +
        '<p><code>_blank</code> opens a new tab. Use it sparingly — mainly on links leading away to another site, where you do not want to lose the visitor.</p>',
      's.a.rel':
        '<p><code>rel</code> describes the relationship to the page you are linking to. The one you will see most often is the pair <code>noopener noreferrer</code>, written whenever you use <code>target="_blank"</code>.</p>' +
        '<p><code>noopener</code> stops the new page from reaching back and controlling the tab it came from; <code>noreferrer</code> also keeps it from being told which page you came from.</p>',
      's.a.download':
        '<p><code>download</code> tells the browser to save the file instead of trying to open it. It is a boolean attribute: writing the word is enough.</p>' +
        '<p>Handy for a PDF or a spreadsheet that would otherwise open inside the browser.</p>',

      's.img.t': 'A picture',
      's.img.d':
        '<p><code>&lt;img&gt;</code> places an image in the page. It has no closing tag and no content — the picture is not inside the element, it is named by an attribute.</p>',
      's.img.src':
        '<p><code>src</code> is the address of the image file: a path inside your own site or a full address elsewhere.</p>',
      's.img.alt':
        '<p><code>alt</code> is a short description of what the picture shows. A screen reader reads it aloud, and the browser displays it if the file fails to load.</p>' +
        '<p>If the image is purely decorative and says nothing the text does not already say, write <code>alt=""</code>. That tells assistive software to skip it, which is better than leaving the attribute out entirely.</p>',
      's.img.size':
        '<p><code>width</code> and <code>height</code> give the size of the picture in pixels.</p>' +
        '<p>Setting them is worth it even when CSS decides the final size: the browser can then reserve the right amount of space before the file arrives, so the rest of the page does not jump around as images load.</p>',
      's.img.loading':
        '<p><code>loading="lazy"</code> lets the browser postpone an image until the visitor scrolls near it. On a long page full of pictures, far less is downloaded up front.</p>' +
        '<p>Leave it off the images that are visible when the page opens — those you want immediately.</p>',

      's.audio.t': 'A sound',
      's.audio.d':
        '<p><code>&lt;audio&gt;</code> plays a sound file. Unlike <code>&lt;img&gt;</code> it has a closing tag, and it shows nothing at all unless you ask for a player.</p>',
      's.audio.src':
        '<p><code>src</code> is the address of the sound file. A page with only this is silent and invisible: it has loaded a sound nobody can start.</p>',
      's.audio.controls':
        '<p><code>controls</code> draws the familiar play button, progress bar and volume. This is the attribute people forget, and then wonder why nothing appears on the page.</p>' +
        '<p>It is a boolean attribute — the word on its own switches it on.</p>',
      's.audio.auto':
        '<p><code>autoplay</code> starts playback without the visitor doing anything, <code>loop</code> starts over when it reaches the end, and <code>muted</code> begins with the sound off.</p>' +
        '<p>These three usually travel together, because browsers refuse to start audible sound by themselves. An <code>autoplay</code> without <code>muted</code> simply does not start.</p>',
      's.audio.preload':
        '<p><code>preload</code> is a hint about how much to fetch before anyone presses play: <code>none</code> fetches nothing, <code>metadata</code> fetches just enough to know the length, and <code>auto</code> lets the browser fetch the whole file.</p>' +
        '<p><code>metadata</code> is the usual middle ground.</p>',

      's.video.t': 'A moving picture',
      's.video.d':
        '<p><code>&lt;video&gt;</code> works like <code>&lt;audio&gt;</code>, with one difference that matters: it occupies a rectangle on the page even before anything plays.</p>',
      's.video.src':
        '<p>These two behave exactly as they do on <code>&lt;audio&gt;</code>: <code>src</code> names the file, <code>controls</code> draws the player. Without <code>controls</code> the visitor sees a picture area with no way to start it.</p>',
      's.video.poster':
        '<p><code>poster</code> is a still image shown in that rectangle before playback begins.</p>' +
        '<p>Leave it out and the browser shows the first frame of the video, which is often black.</p>',
      's.video.size':
        '<p><code>width</code> and <code>height</code> set the size of the picture area, in pixels, for the same reason as on an image: the space is reserved before the file arrives.</p>',
      's.video.auto':
        '<p>The same three as on <code>&lt;audio&gt;</code>, plus one more. <code>playsinline</code> asks a phone to play the video inside the page rather than taking over the whole screen.</p>' +
        '<p>These four together are the standard recipe for a silent, looping background clip.</p>',

      's.note':
        '<p><code>controls</code>, <code>autoplay</code>, <code>muted</code>, <code>loop</code>, <code>playsinline</code> and <code>download</code> are boolean attributes: writing the name switches the setting on, and leaving it out switches it off. There is no <code>controls="false"</code> — that string is not empty, so the browser reads it as on.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'HTML-теги: a, img, audio, video',
      kicker: 'Урок 4 &middot; HTML &amp; CSS',
      title: 'HTML-теги: a, img, audio, video',
      lead: 'Чотири елементи, які приводять зовнішній світ на вашу сторінку: посилання в інше місце, зображення, звук і рухоме зображення. Кожен із них майже цілком визначається своїми атрибутами.',

      's.a.t': 'Посилання в інше місце',
      's.a.d':
        '<p><code>&lt;a&gt;</code> перетворює те, що стоїть між його тегами — текст, зображення, цілий блок — на те, що відвідувач може натиснути.</p>' +
        '<p>Сам по собі він нічого не робить; саме атрибути вирішують, куди він веде і як відкривається.</p>',
      's.a.href':
        '<p><code>href</code> — це призначення, і саме він узагалі робить елемент посиланням. Без нього ви маєте текст, який виглядає і поводиться як звичайний текст.</p>' +
        '<p>Він має кілька форм: інша сторінка вашого сайту, повна адреса іншого сайту, <code>#</code> і далі ідентифікатор елемента, до якого треба перейти на поточній сторінці, <code>mailto:</code> щоб почати лист, або <code>tel:</code> щоб зателефонувати.</p>',
      's.a.target':
        '<p><code>target</code> каже, де відкривається посилання. Якщо його пропустити, нова сторінка замінює поточну — саме цього очікують відвідувачі.</p>' +
        '<p><code>_blank</code> відкриває нову вкладку. Користуйтеся ним помірно — передусім для посилань, що ведуть на інший сайт, звідки ви не хочете втратити відвідувача.</p>',
      's.a.rel':
        '<p><code>rel</code> описує зв’язок зі сторінкою, на яку ви посилаєтеся. Найчастіше ви бачитимете пару <code>noopener noreferrer</code>, яку пишуть щоразу, коли використовують <code>target="_blank"</code>.</p>' +
        '<p><code>noopener</code> не дає новій сторінці дотягнутися назад і керувати вкладкою, з якої вона відкрилася; <code>noreferrer</code> додатково приховує від неї, з якої сторінки ви прийшли.</p>',
      's.a.download':
        '<p><code>download</code> каже браузеру зберегти файл, а не намагатися його відкрити. Це булевий атрибут: достатньо написати саме слово.</p>' +
        '<p>Зручно для PDF чи таблиці, які інакше відкрилися б усередині браузера.</p>',

      's.img.t': 'Зображення',
      's.img.d':
        '<p><code>&lt;img&gt;</code> розміщує зображення на сторінці. Він не має закривального тега і не має вмісту — картинка не лежить усередині елемента, її називає атрибут.</p>',
      's.img.src':
        '<p><code>src</code> — це адреса файлу зображення: шлях усередині вашого сайту або повна адреса деінде.</p>',
      's.img.alt':
        '<p><code>alt</code> — це короткий опис того, що показує картинка. Читач екрана прочитає його вголос, а браузер покаже його, якщо файл не завантажиться.</p>' +
        '<p>Якщо зображення суто декоративне і не додає нічого до тексту, пишіть <code>alt=""</code>. Це каже допоміжним засобам пропустити його, і це краще, ніж узагалі не писати атрибут.</p>',
      's.img.size':
        '<p><code>width</code> і <code>height</code> задають розмір зображення в пікселях.</p>' +
        '<p>Їх варто вказувати навіть тоді, коли остаточний розмір визначає CSS: браузер зможе зарезервувати потрібне місце ще до того, як прийде файл, і решта сторінки не стрибатиме під час завантаження зображень.</p>',
      's.img.loading':
        '<p><code>loading="lazy"</code> дозволяє браузеру відкласти зображення, доки відвідувач не прокрутить сторінку до нього. На довгій сторінці з багатьма картинками одразу завантажується значно менше.</p>' +
        '<p>Не ставте його на зображення, видимі при відкритті сторінки — ці потрібні негайно.</p>',

      's.audio.t': 'Звук',
      's.audio.d':
        '<p><code>&lt;audio&gt;</code> відтворює звуковий файл. На відміну від <code>&lt;img&gt;</code> він має закривальний тег і не показує геть нічого, доки ви не попросите програвач.</p>',
      's.audio.src':
        '<p><code>src</code> — це адреса звукового файлу. Сторінка лише з цим німа й невидима: вона завантажила звук, який ніхто не може запустити.</p>',
      's.audio.controls':
        '<p><code>controls</code> малює знайому кнопку відтворення, смугу прогресу та гучність. Це той атрибут, який забувають, а потім дивуються, чому на сторінці нічого не з’явилося.</p>' +
        '<p>Це булевий атрибут — саме слово вмикає його.</p>',
      's.audio.auto':
        '<p><code>autoplay</code> запускає відтворення без дій відвідувача, <code>loop</code> починає спочатку, дійшовши до кінця, а <code>muted</code> стартує з вимкненим звуком.</p>' +
        '<p>Ці три зазвичай ходять разом, бо браузери відмовляються самі вмикати чутний звук. <code>autoplay</code> без <code>muted</code> просто не запуститься.</p>',
      's.audio.preload':
        '<p><code>preload</code> — це підказка, скільки завантажити ще до натискання відтворення: <code>none</code> не завантажує нічого, <code>metadata</code> завантажує рівно стільки, щоб знати тривалість, а <code>auto</code> дозволяє браузеру завантажити весь файл.</p>' +
        '<p><code>metadata</code> — звичний компроміс.</p>',

      's.video.t': 'Рухоме зображення',
      's.video.d':
        '<p><code>&lt;video&gt;</code> працює як <code>&lt;audio&gt;</code>, з однією важливою відмінністю: він займає прямокутник на сторінці ще до того, як щось відтворюється.</p>',
      's.video.src':
        '<p>Ці два поводяться точно так само, як у <code>&lt;audio&gt;</code>: <code>src</code> називає файл, <code>controls</code> малює програвач. Без <code>controls</code> відвідувач бачить ділянку зображення без жодного способу її запустити.</p>',
      's.video.poster':
        '<p><code>poster</code> — це нерухоме зображення, яке показується в тому прямокутнику до початку відтворення.</p>' +
        '<p>Якщо його пропустити, браузер покаже перший кадр відео, який часто чорний.</p>',
      's.video.size':
        '<p><code>width</code> і <code>height</code> задають розмір ділянки зображення в пікселях з тієї ж причини, що й у картинки: місце резервується до того, як прийде файл.</p>',
      's.video.auto':
        '<p>Ті самі три, що й у <code>&lt;audio&gt;</code>, плюс іще один. <code>playsinline</code> просить телефон відтворювати відео всередині сторінки, а не займати весь екран.</p>' +
        '<p>Ці чотири разом — стандартний рецепт беззвучного зацикленого фонового кліпу.</p>',

      's.note':
        '<p><code>controls</code>, <code>autoplay</code>, <code>muted</code>, <code>loop</code>, <code>playsinline</code> і <code>download</code> — булеві атрибути: написання назви вмикає налаштування, а її відсутність вимикає. Немає ніякого <code>controls="false"</code> — цей рядок не порожній, тож браузер прочитає його як «увімкнено».</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Ett av bildene dine lastes ikke, og noen av de besøkende bruker skjermleser. Hvilket attributt avgjør hva de får i stedet for bildet?',
        answer: 1,
        options: [
          {
            text: '<code>src</code>',
            why: '<code>src</code> er adressen til filen. Det er nettopp den som sviktet her, så den kan ikke samtidig være reserveløsningen.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> er den korte beskrivelsen: en skjermleser leser den opp, og nettleseren viser den når filen ikke lastes.',
          },
          {
            text: '<code>loading</code>',
            why: '<code>loading</code> avgjør bare når bildet hentes, ikke hva som skjer hvis hentingen mislykkes.',
          },
          {
            text: '<code>title</code>',
            why: '<code>title</code> gir bare et lite tekstfelt når musepekeren hviler over. Det vises ikke når bildet feiler, og hjelper ikke en skjermleserbruker.',
          },
        ],
      },
      {
        q: 'Du lenker ut til et annet selskaps nettsted og vil at det skal åpnes i en ny fane. Hva skriver du?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;a href="..." target="_blank" rel="noopener noreferrer"&gt;</code>',
            why: '<code>target="_blank"</code> åpner den nye fanen, og <code>noopener noreferrer</code> er paret du legger til sammen med det, slik at den nye siden ikke kan nå tilbake og styre fanen din.',
          },
          {
            text: '<code>&lt;a href="..." target="_new"&gt;</code>',
            why: 'Verdien for en ny fane er <code>_blank</code>. <code>_new</code> er ikke en av de definerte verdiene.',
          },
          {
            text: '<code>&lt;a href="..." download&gt;</code>',
            why: '<code>download</code> får nettleseren til å lagre målet som en fil i stedet for å åpne det.',
          },
          {
            text: '<code>&lt;a href="..." rel="noopener noreferrer"&gt;</code>',
            why: '<code>rel</code> alene endrer ingenting om hvor lenken åpnes; uten <code>target</code> erstatter siden fortsatt den nåværende.',
          },
        ],
      },
      {
        q: 'Du skriver <code>&lt;audio src="intro.mp3"&gt;&lt;/audio&gt;</code>, og det dukker ikke opp noe som helst på siden. Hva mangler?',
        answer: 2,
        options: [
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> er bare et hint om hvor mye som hentes på forhånd. Det tegner ingenting.',
          },
          {
            text: '<code>autoplay</code>',
            why: 'Det ville startet lyden av seg selv, men det ville fortsatt ikke vært noen spiller å se — og nettlesere blokkerer uansett hørbar autostart.',
          },
          {
            text: '<code>controls</code>',
            why: '<code>controls</code> er det som tegner avspillingsknappen, fremdriftslinjen og volumet. Uten det er lyden lastet, men det finnes ingenting å se eller klikke på.',
          },
          {
            text: 'Ingenting — lyd er alltid usynlig.',
            why: 'Den er usynlig som standard, men det er nettopp dette <code>controls</code> endrer.',
          },
        ],
      },
      {
        q: 'Bakgrunnsvideoen din har <code>autoplay</code>, men i alle nettlesere blir den bare stående. Hva er den vanlige grunnen?',
        answer: 2,
        options: [
          {
            text: 'Filen er for stor.',
            why: 'Størrelsen påvirker hvor raskt den starter, ikke om nettleseren tillater den å starte.',
          },
          {
            text: '<code>autoplay</code> virker bare på <code>&lt;audio&gt;</code>.',
            why: 'Det virker på begge. Begrensningen handler om lyd, ikke om hvilket element det er.',
          },
          {
            text: '<code>muted</code> mangler — nettlesere nekter å autostarte hørbare medier.',
            why: 'Det er regelen. Autostart med lyd blokkeres; legg til <code>muted</code>, så starter den.',
          },
          {
            text: '<code>poster</code> mangler.',
            why: '<code>poster</code> avgjør bare hvilket stillbilde som vises før avspilling. Det verken blokkerer eller tillater noe.',
          },
        ],
      },
      {
        q: 'Før videoen din spilles av, viser siden et svart rektangel. Hvilket attributt gir den et ordentlig stillbilde i stedet?',
        answer: 0,
        options: [
          {
            text: '<code>poster</code>',
            why: '<code>poster</code> er nettopp det: stillbildet som vises i videofeltet før avspillingen begynner.',
          },
          {
            text: '<code>src</code>',
            why: '<code>src</code> navngir selve videofilen. Det svarte rektangelet er dens første bilderute.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> hører til <code>&lt;img&gt;</code>. En video tar ikke imot det.',
          },
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> avgjør bare hvor mye av filen som hentes på forhånd.',
          },
        ],
      },
      {
        q: 'Mens den bilderike siden din lastes, hopper teksten stadig nedover skjermen. Hvilke attributter løser det?',
        answer: 1,
        options: [
          {
            text: '<code>loading="lazy"</code>',
            why: 'Utsatt lasting venter med bilder lenger nede på siden; alene reserverer det ingen plass, så hoppingen kan til og med bli verre.',
          },
          {
            text: '<code>width</code> og <code>height</code>',
            why: 'Når størrelsen er kjent på forhånd, reserverer nettleseren nøyaktig riktig boks før filen kommer, så ingenting forskyver seg når den er der.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> er tekstbeskrivelsen. Den påvirker ikke oppsettet når bildet først er lastet.',
          },
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> er et attributt på <code>&lt;audio&gt;</code> og <code>&lt;video&gt;</code>, ikke på <code>&lt;img&gt;</code>.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'One of your images fails to load, and some of your visitors use a screen reader. Which attribute decides what they get instead of the picture?',
        answer: 1,
        options: [
          {
            text: '<code>src</code>',
            why: '<code>src</code> is the address of the file. That is exactly what failed here, so it cannot also be the fallback.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> is the short description: a screen reader reads it aloud, and the browser shows it when the file does not load.',
          },
          {
            text: '<code>loading</code>',
            why: '<code>loading</code> only decides when the image is fetched, not what happens if the fetch fails.',
          },
          {
            text: '<code>title</code>',
            why: '<code>title</code> only produces a tooltip on hover. It is not shown when the image fails, and it does not help a screen reader user.',
          },
        ],
      },
      {
        q: 'You are linking out to another company site and want it to open in a new tab. What do you write?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;a href="..." target="_blank" rel="noopener noreferrer"&gt;</code>',
            why: '<code>target="_blank"</code> opens the new tab, and <code>noopener noreferrer</code> is the pair you add with it so the new page cannot reach back and control your tab.',
          },
          {
            text: '<code>&lt;a href="..." target="_new"&gt;</code>',
            why: 'The value for a new tab is <code>_blank</code>. <code>_new</code> is not one of the defined values.',
          },
          {
            text: '<code>&lt;a href="..." download&gt;</code>',
            why: '<code>download</code> makes the browser save the destination as a file instead of opening it.',
          },
          {
            text: '<code>&lt;a href="..." rel="noopener noreferrer"&gt;</code>',
            why: '<code>rel</code> alone changes nothing about where the link opens; without <code>target</code> the page still replaces the current one.',
          },
        ],
      },
      {
        q: 'You write <code>&lt;audio src="intro.mp3"&gt;&lt;/audio&gt;</code> and nothing at all appears on the page. What is missing?',
        answer: 2,
        options: [
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> is only a hint about how much to fetch in advance. It draws nothing.',
          },
          {
            text: '<code>autoplay</code>',
            why: 'That would start the sound by itself, but there would still be no player to see — and browsers block audible autoplay anyway.',
          },
          {
            text: '<code>controls</code>',
            why: '<code>controls</code> is what draws the play button, progress bar and volume. Without it the sound is loaded but there is nothing to see or click.',
          },
          {
            text: 'Nothing — audio is always invisible.',
            why: 'It is invisible by default, but that is exactly what <code>controls</code> changes.',
          },
        ],
      },
      {
        q: 'Your background video has <code>autoplay</code>, but on every browser it just sits there. What is the usual reason?',
        answer: 2,
        options: [
          {
            text: 'The file is too large.',
            why: 'Size affects how soon it starts, not whether the browser allows it to start.',
          },
          {
            text: '<code>autoplay</code> only works on <code>&lt;audio&gt;</code>.',
            why: 'It works on both. The restriction is about sound, not about which element it is.',
          },
          {
            text: '<code>muted</code> is missing — browsers refuse to autoplay audible media.',
            why: 'That is the rule. Autoplay with sound is blocked; add <code>muted</code> and it starts.',
          },
          {
            text: '<code>poster</code> is missing.',
            why: '<code>poster</code> only decides the still image shown before playback. It neither blocks nor permits anything.',
          },
        ],
      },
      {
        q: 'Before your video is played, the page shows a black rectangle. Which attribute gives it a proper still image instead?',
        answer: 0,
        options: [
          {
            text: '<code>poster</code>',
            why: '<code>poster</code> is exactly that: the still image shown in the video area before playback begins.',
          },
          {
            text: '<code>src</code>',
            why: '<code>src</code> names the video file itself. The black rectangle is its first frame.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> belongs to <code>&lt;img&gt;</code>. A video does not take one.',
          },
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> only decides how much of the file is fetched in advance.',
          },
        ],
      },
      {
        q: 'As your image-heavy page loads, the text keeps jumping down the screen. Which attributes fix that?',
        answer: 1,
        options: [
          {
            text: '<code>loading="lazy"</code>',
            why: 'Lazy loading postpones images further down the page; on its own it reserves no space, so the jumping can even get worse.',
          },
          {
            text: '<code>width</code> and <code>height</code>',
            why: 'With the size known in advance, the browser reserves exactly the right box before the file arrives, so nothing shifts when it does.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> is the text description. It does not affect the layout once the image has loaded.',
          },
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> is an attribute of <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>, not of <code>&lt;img&gt;</code>.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Одне з ваших зображень не завантажується, а частина відвідувачів користується читачем екрана. Який атрибут визначає, що вони отримають замість картинки?',
        answer: 1,
        options: [
          {
            text: '<code>src</code>',
            why: '<code>src</code> — це адреса файлу. Саме вона тут і підвела, тож вона не може водночас бути запасним варіантом.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> — це короткий опис: читач екрана прочитає його вголос, а браузер покаже його, коли файл не завантажується.',
          },
          {
            text: '<code>loading</code>',
            why: '<code>loading</code> визначає лише те, коли зображення завантажується, а не що станеться, якщо завантаження не вдасться.',
          },
          {
            text: '<code>title</code>',
            why: '<code>title</code> лише показує підказку при наведенні. Він не показується, коли зображення не завантажилося, і не допомагає користувачеві читача екрана.',
          },
        ],
      },
      {
        q: 'Ви робите посилання на сайт іншої компанії і хочете, щоб він відкрився в новій вкладці. Що напишете?',
        answer: 0,
        options: [
          {
            text: '<code>&lt;a href="..." target="_blank" rel="noopener noreferrer"&gt;</code>',
            why: '<code>target="_blank"</code> відкриває нову вкладку, а <code>noopener noreferrer</code> — пара, яку додають разом із ним, щоб нова сторінка не могла дотягнутися назад і керувати вашою вкладкою.',
          },
          {
            text: '<code>&lt;a href="..." target="_new"&gt;</code>',
            why: 'Значення для нової вкладки — <code>_blank</code>. <code>_new</code> не є одним із визначених значень.',
          },
          {
            text: '<code>&lt;a href="..." download&gt;</code>',
            why: '<code>download</code> змушує браузер зберегти призначення як файл, а не відкривати його.',
          },
          {
            text: '<code>&lt;a href="..." rel="noopener noreferrer"&gt;</code>',
            why: 'Сам по собі <code>rel</code> нічого не змінює в тому, де відкривається посилання; без <code>target</code> сторінка все одно замінить поточну.',
          },
        ],
      },
      {
        q: 'Ви пишете <code>&lt;audio src="intro.mp3"&gt;&lt;/audio&gt;</code>, і на сторінці не з’являється геть нічого. Чого бракує?',
        answer: 2,
        options: [
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> — лише підказка, скільки завантажити наперед. Він нічого не малює.',
          },
          {
            text: '<code>autoplay</code>',
            why: 'Це запустило б звук само собою, але програвача все одно не було б видно — та й браузери все одно блокують чутний автозапуск.',
          },
          {
            text: '<code>controls</code>',
            why: '<code>controls</code> — це те, що малює кнопку відтворення, смугу прогресу та гучність. Без нього звук завантажено, але немає чого бачити й на що натискати.',
          },
          {
            text: 'Нічого — аудіо завжди невидиме.',
            why: 'Воно невидиме за замовчуванням, але саме це й змінює <code>controls</code>.',
          },
        ],
      },
      {
        q: 'Ваше фонове відео має <code>autoplay</code>, але в кожному браузері воно просто стоїть. Яка звична причина?',
        answer: 2,
        options: [
          {
            text: 'Файл завеликий.',
            why: 'Розмір впливає на те, як швидко воно почнеться, а не на те, чи дозволить браузер йому початися.',
          },
          {
            text: '<code>autoplay</code> працює лише для <code>&lt;audio&gt;</code>.',
            why: 'Він працює для обох. Обмеження стосується звуку, а не того, який це елемент.',
          },
          {
            text: 'Бракує <code>muted</code> — браузери відмовляються автоматично запускати чутні медіа.',
            why: 'Саме таке правило. Автозапуск зі звуком блокується; додайте <code>muted</code>, і воно запуститься.',
          },
          {
            text: 'Бракує <code>poster</code>.',
            why: '<code>poster</code> визначає лише нерухоме зображення, що показується до відтворення. Він нічого не блокує і нічого не дозволяє.',
          },
        ],
      },
      {
        q: 'Поки ваше відео не відтворюється, сторінка показує чорний прямокутник. Який атрибут дасть натомість нормальне нерухоме зображення?',
        answer: 0,
        options: [
          {
            text: '<code>poster</code>',
            why: '<code>poster</code> — саме це: нерухоме зображення, що показується в ділянці відео до початку відтворення.',
          },
          {
            text: '<code>src</code>',
            why: '<code>src</code> називає сам файл відео. Чорний прямокутник — це його перший кадр.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> належить до <code>&lt;img&gt;</code>. Відео його не приймає.',
          },
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> визначає лише те, яку частину файлу завантажують наперед.',
          },
        ],
      },
      {
        q: 'Поки завантажується ваша сторінка з багатьма зображеннями, текст постійно стрибає вниз екрана. Які атрибути це виправлять?',
        answer: 1,
        options: [
          {
            text: '<code>loading="lazy"</code>',
            why: 'Відкладене завантаження відтерміновує зображення, розташовані нижче; саме по собі воно не резервує місця, тож стрибки можуть навіть посилитися.',
          },
          {
            text: '<code>width</code> і <code>height</code>',
            why: 'Коли розмір відомий наперед, браузер резервує рівно потрібну коробку ще до приходу файлу, тож ніщо не зсувається, коли той приходить.',
          },
          {
            text: '<code>alt</code>',
            why: '<code>alt</code> — це текстовий опис. Він не впливає на розкладку після того, як зображення завантажилося.',
          },
          {
            text: '<code>preload</code>',
            why: '<code>preload</code> — атрибут <code>&lt;audio&gt;</code> і <code>&lt;video&gt;</code>, а не <code>&lt;img&gt;</code>.',
          },
        ],
      },
    ],
  },
});
