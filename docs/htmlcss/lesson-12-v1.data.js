/*
 * Content of lesson 12 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS: px, %, vw, vh, calc()',
      kicker: 'Leksjon 12 &middot; HTML &amp; CSS',
      title: 'CSS: px, %, vw, vh, calc()',
      lead: 'Et tall i CSS betyr ingenting uten en enhet, og enheten sier hva tallet måles mot. Den vanligste feilen er ikke å velge feil enhet, men å tro at prosenten måles mot noe annet enn den faktisk gjør.',

      's.px.t': 'Den faste enheten',
      's.px.d':
        '<p><code>px</code> er den ene enheten som ikke svarer på noe. 320 piksler er 320 piksler uansett hva foreldreelementet, vinduet eller leseren gjør.</p>' +
        '<p>Navnet lyver litt. En CSS-piksel er ikke én prikk på skjermen, men en referanseenhet på omtrent 1/96 tomme. På en skjerm med dobbelt oppløsning maler nettleseren én av dem over to fysiske prikker, slik at teksten blir skarpere og ikke mindre.</p>' +
        '<p>Den er riktig der en størrelse virkelig er fast: en rammetykkelse, en liten avrunding, et ikon. Den er et dårlig valg for skriftstørrelse, fordi den ignorerer leserens egen innstilling — enheter som følger den, fortjener sin egen leksjon.</p>',

      's.pct.t': 'Prosent av hva, egentlig',
      's.pct.d':
        '<p>En prosent er alltid en prosent <em>av noe</em>, og CSS velger det «noe» ut fra hvilken egenskap du skriver den på. Det er hele grunnen til at prosent oppfører seg overraskende.</p>' +
        '<p>Bredde måles mot bredden til blokken rundt, høyde mot høyden. <code>font-size</code> måles mot forelderens skriftstørrelse, mens <code>line-height</code> måles mot elementets egen. <code>translate()</code> måles mot elementet selv, ikke mot noe rundt det.</p>' +
        '<p>Og så er det den ene som alltid overrasker: <code>padding</code> og <code>margin</code> måles mot <em>bredden</em> til blokken rundt — også toppen og bunnen. En <code>padding-top: 50%</code> er halvparten av bredden, ikke av høyden. Det er merkelig helt til du trenger en boks med fast forhold mellom sidene, og da er det nettopp det trikset som brukes.</p>',

      's.h.t': 'Hvorfor prosent-høyde så ofte ikke gjør noe',
      's.h.d':
        '<p>En prosent trenger noe å regne av. For bredde er det alltid et svar, fordi blokken rundt har en bredde uansett. For høyde er det ofte ikke det: en vanlig blokk er så høy som innholdet, og «halvparten av så høyt som innholdet» er sirkulært.</p>' +
        '<p>Når nettleseren ikke finner en bestemt høyde å regne av, faller <code>height: 50%</code> tilbake til <code>auto</code>, og det ser ut som om linjen ble ignorert. Den ble ikke det — den fant bare ingenting å være halvparten av.</p>' +
        '<p>Løsningen er enten å gi forelderen en høyde, eller å bruke et oppsett der høyder deles ut av seg selv. I flex og grid regner nettopp foreldreelementet ut høydene, og da fungerer prosenten igjen.</p>',

      's.v.t': 'Prosent av vinduet i stedet',
      's.v.d':
        '<p>Viewport-enhetene hopper over hele spørsmålet om hvem som er forelder. <code>1vw</code> er én prosent av bredden på visningsområdet, <code>1vh</code> én prosent av høyden, uansett hvor dypt nede i dokumentet elementet ligger.</p>' +
        '<p>Det gjør dem rett for ting som skal forholde seg til skjermen og ikke til innholdet: en seksjon som skal fylle høyden, en overskrift som skal vokse med vinduet. Det gjør dem samtidig upålitelige inne i en boks som ikke er like stor som skjermen — der er en prosent nesten alltid det du egentlig mente.</p>' +
        '<p><code>vmin</code> og <code>vmax</code> tar den minste og den største av de to, og er nyttige når noe skal se likt ut i stående og liggende format.</p>',

      's.traps.t': 'De to fellene alle går i',
      's.traps.d':
        '<p><code>width: 100vw</code> ser ut som «så bredt som vinduet», og er det — men der nettleseren tegner et klassisk rullefelt, et som tar plass i stedet for å flyte over innholdet, regnes det med. Innholdsområdet er smalere, så du får et vannrett rullefelt du ikke ba om. På systemer med flytende rullefelt skjer det ingenting, og det er nettopp derfor feilen er så lett å overse. <code>width: 100%</code> er nesten alltid det du mente.</p>' +
        '<p><code>height: 100vh</code> på mobil måles som om verktøylinjene var borte, fordi de kommer og går mens du scroller. Resultatet er at bunnen av seksjonen ligger gjemt bak linjen akkurat når siden åpnes.</p>' +
        '<p>Derfor finnes <code>svh</code>, <code>lvh</code> og <code>dvh</code>: det lille visningsområdet med linjene framme, det store med dem borte, og det dynamiske som følger etter. <code>100dvh</code> er som regel det du vil ha.</p>',

      's.calc.t': 'Å regne i stilarket',
      's.calc.d':
        '<p><code>calc()</code> lar deg blande enheter som ellers ikke kan møtes. <code>calc(100% - 2rem)</code> er noe nettleseren først kan svare på når den vet hvor bred blokken rundt er — og det er nettopp derfor det må gjøres der og ikke av deg på forhånd.</p>' +
        '<p>Én regel er verdt å lære med én gang: det må stå mellomrom på begge sider av <code>+</code> og <code>&minus;</code>. Uten mellomrom leses <code>&minus;2rem</code> som ett negativt tall i stedet for et minustegn og et ledd, og hele uttrykket blir ugyldig. Ganging og deling har ikke det problemet, men divisoren må være et rent tall — du kan dele på 3, ikke på 3px.</p>',

      's.clamp.t': 'Slektningene til calc()',
      's.clamp.d':
        '<p><code>min()</code> og <code>max()</code> tar flere verdier og velger, i stedet for å regne. Navnene virker snudd første gang: <code>min(100%, 60rem)</code> setter et <em>tak</em>, fordi den minste av de to alltid vinner.</p>' +
        '<p><code>clamp()</code> tar tre: et gulv, en ønsket verdi og et tak. <code>clamp(1rem, 2.5vw, 2rem)</code> lar skriften vokse med vinduet, men aldri under en lesbar bunn eller over en fornuftig topp. Det er nøyaktig det samme som <code>max(1rem, min(2.5vw, 2rem))</code>, bare lettere å lese.</p>' +
        '<p>Alle tre kan inneholde regnestykker rett inne i seg, uten at du skriver <code>calc()</code> rundt.</p>',

      's.note':
        '<p>Kortversjonen. <code>px</code> til det som virkelig er fast. <code>%</code> til alt som skal følge boksen rundt — men sjekk hva prosenten måles mot, og husk at <code>padding</code> og <code>margin</code> alltid måles mot bredden. <code>vw</code> og <code>vh</code> bare når du faktisk mener skjermen, og <code>dvh</code> i stedet for <code>vh</code> på mobil. <code>calc()</code> når enhetene må blandes, med mellomrom rundt minustegnet.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS: px, %, vw, vh, calc()',
      kicker: 'Lesson 12 &middot; HTML &amp; CSS',
      title: 'CSS: px, %, vw, vh, calc()',
      lead: 'A number in CSS means nothing without a unit, and the unit says what the number is measured against. The commonest mistake is not picking the wrong unit — it is assuming a percentage is measured against something other than what it actually is.',

      's.px.t': 'The fixed unit',
      's.px.d':
        '<p><code>px</code> is the one unit that answers to nothing. 320 pixels is 320 pixels whatever the parent element, the window or the reader does.</p>' +
        '<p>The name lies slightly. A CSS pixel is not one dot on the screen but a reference unit of about 1/96 inch. On a double-resolution screen the browser paints one of them across two physical dots, so text gets sharper rather than smaller.</p>' +
        '<p>It is right where a size genuinely is fixed: a border thickness, a small radius, an icon. It is a poor choice for font size, because it ignores the reader own setting — the units that respect it deserve a lesson of their own.</p>',

      's.pct.t': 'A percentage of what, exactly',
      's.pct.d':
        '<p>A percentage is always a percentage <em>of something</em>, and CSS picks that something from the property you write it on. This is the whole reason percentages behave surprisingly.</p>' +
        '<p>Width is measured against the width of the block around it, height against the height. <code>font-size</code> is measured against the parent font size, while <code>line-height</code> is measured against the element own. <code>translate()</code> is measured against the element itself, not against anything around it.</p>' +
        '<p>And then there is the one that always surprises: <code>padding</code> and <code>margin</code> are measured against the <em>width</em> of the block around them — top and bottom included. A <code>padding-top: 50%</code> is half the width, not half the height. That seems perverse until you need a box with a fixed ratio between its sides, at which point it is exactly the trick everyone uses.</p>',

      's.h.t': 'Why a percentage height so often does nothing',
      's.h.d':
        '<p>A percentage needs something to be a percentage of. For width there is always an answer, because the block around it has a width regardless. For height there often is not: an ordinary block is as tall as its content, and "half as tall as the content" is circular.</p>' +
        '<p>When the browser cannot find a definite height to work from, <code>height: 50%</code> falls back to <code>auto</code>, and it looks as though the line was ignored. It was not — it simply found nothing to be half of.</p>' +
        '<p>The fix is either to give the parent a height, or to use a layout that hands heights out by itself. In flex and grid the parent works the heights out, and the percentage starts working again.</p>',

      's.v.t': 'A percentage of the window instead',
      's.v.d':
        '<p>The viewport units skip the whole question of who the parent is. <code>1vw</code> is one per cent of the width of the viewport, <code>1vh</code> one per cent of its height, however deep in the document the element sits.</p>' +
        '<p>That makes them right for things that should relate to the screen rather than to the content: a section meant to fill the height, a heading meant to grow with the window. It also makes them unreliable inside a box that is not the size of the screen — there, a percentage is almost always what you actually meant.</p>' +
        '<p><code>vmin</code> and <code>vmax</code> take the smaller and the larger of the two, which helps when something should look the same in portrait and landscape.</p>',

      's.traps.t': 'The two traps everyone falls into',
      's.traps.d':
        '<p><code>width: 100vw</code> looks like "as wide as the window", and it is — but where the browser draws a classic scrollbar, one that takes up space instead of floating over the content, that scrollbar is counted in. The content area is narrower, so you get a horizontal scrollbar you never asked for. On systems with overlay scrollbars nothing happens at all, which is exactly what makes the bug so easy to miss. <code>width: 100%</code> is almost always what you meant.</p>' +
        '<p><code>height: 100vh</code> on a phone is measured as though the toolbars were gone, because they come and go as you scroll. The result is that the bottom of your section sits hidden behind the bar at exactly the moment the page opens.</p>' +
        '<p>Hence <code>svh</code>, <code>lvh</code> and <code>dvh</code>: the small viewport with the bars showing, the large one with them gone, and the dynamic one that follows along. <code>100dvh</code> is usually the one you want.</p>',

      's.calc.t': 'Arithmetic in the stylesheet',
      's.calc.d':
        '<p><code>calc()</code> lets you mix units that otherwise cannot meet. <code>calc(100% - 2rem)</code> is something the browser can only answer once it knows how wide the surrounding block is — which is exactly why it has to be done there and not by you in advance.</p>' +
        '<p>One rule is worth learning immediately: there must be a space on both sides of <code>+</code> and <code>&minus;</code>. Without it, <code>&minus;2rem</code> reads as a single negative number rather than a minus sign and a term, and the whole expression becomes invalid. Multiplication and division do not have that problem, but the divisor has to be a plain number — you can divide by 3, not by 3px.</p>',

      's.clamp.t': 'The relatives of calc()',
      's.clamp.d':
        '<p><code>min()</code> and <code>max()</code> take several values and choose, rather than calculating. The names feel inverted the first time: <code>min(100%, 60rem)</code> sets a <em>ceiling</em>, because the smaller of the two always wins.</p>' +
        '<p><code>clamp()</code> takes three: a floor, a preferred value and a ceiling. <code>clamp(1rem, 2.5vw, 2rem)</code> lets the type grow with the window but never below a readable floor or above a sensible top. It is exactly the same as <code>max(1rem, min(2.5vw, 2rem))</code>, just easier to read.</p>' +
        '<p>All three can hold arithmetic directly inside them, with no <code>calc()</code> wrapped around it.</p>',

      's.note':
        '<p>The short version. <code>px</code> for what genuinely is fixed. <code>%</code> for anything that should follow the box around it — but check what the percentage is measured against, and remember that <code>padding</code> and <code>margin</code> always measure against width. <code>vw</code> and <code>vh</code> only when you really do mean the screen, and <code>dvh</code> rather than <code>vh</code> on a phone. <code>calc()</code> when units have to mix, with spaces around the minus.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS: px, %, vw, vh, calc()',
      kicker: 'Урок 12 &middot; HTML &amp; CSS',
      title: 'CSS: px, %, vw, vh, calc()',
      lead: 'Число в CSS нічого не означає без одиниці, а одиниця каже, відносно чого це число міряють. Найпоширеніша помилка — не обрати не ту одиницю, а вважати, що відсоток міряють відносно чогось іншого, ніж насправді.',

      's.px.t': 'Незмінна одиниця',
      's.px.d':
        '<p><code>px</code> — єдина одиниця, яка ні на що не зважає. 320 пікселів лишаються 320 пікселями, хоч що робить батьківський елемент, вікно чи читач.</p>' +
        '<p>Назва трохи бреше. Піксель CSS — це не одна точка на екрані, а еталонна одиниця приблизно 1/96 дюйма. На екрані подвійної роздільності браузер малює один такий піксель на двох фізичних точках, тож текст стає чіткішим, а не дрібнішим.</p>' +
        '<p>Він доречний там, де розмір справді сталий: товщина рамки, невелике заокруглення, піктограма. І він поганий вибір для розміру шрифту, бо ігнорує власне налаштування читача — одиниці, які його враховують, заслуговують на окремий урок.</p>',

      's.pct.t': 'Відсоток від чого саме',
      's.pct.d':
        '<p>Відсоток завжди є відсотком <em>від чогось</em>, і CSS обирає це «щось» за тією властивістю, на якій ви його пишете. У цьому й уся причина того, що відсотки поводяться несподівано.</p>' +
        '<p>Ширину міряють відносно ширини блока навколо, висоту — відносно висоти. <code>font-size</code> міряють відносно розміру шрифту батька, а <code>line-height</code> — відносно власного розміру шрифту елемента. <code>translate()</code> міряють відносно самого елемента, а не чогось навколо.</p>' +
        '<p>А ще є те, що дивує завжди: <code>padding</code> і <code>margin</code> міряють відносно <em>ширини</em> блока навколо — зокрема й згори та знизу. <code>padding-top: 50%</code> — це половина ширини, а не половина висоти. Це здається дивацтвом, аж доки вам не знадобиться коробка зі сталим співвідношенням сторін — і тоді це саме той трюк, яким усі користуються.</p>',

      's.h.t': 'Чому відсоткова висота так часто нічого не робить',
      's.h.d':
        '<p>Відсотку потрібно, від чого рахувати. Для ширини відповідь є завжди, бо блок навколо має ширину в будь-якому разі. Для висоти її часто немає: звичайний блок заввишки такий, як його вміст, а «половина від висоти вмісту» — це замкнене коло.</p>' +
        '<p>Коли браузер не знаходить певної висоти, від якої рахувати, <code>height: 50%</code> повертається до <code>auto</code>, і здається, ніби рядок проігноровано. Ні — він просто не знайшов, від чого брати половину.</p>' +
        '<p>Вихід — або дати батькові висоту, або взяти розкладку, яка сама роздає висоти. У flex і grid висоти обчислює саме батьківський елемент, і тоді відсоток знову працює.</p>',

      's.v.t': 'Відсоток від вікна натомість',
      's.v.d':
        '<p>Одиниці вікна перестрибують усе питання про те, хто є батьком. <code>1vw</code> — це один відсоток ширини області перегляду, <code>1vh</code> — один відсоток її висоти, хоч як глибоко в документі лежить елемент.</p>' +
        '<p>Це робить їх доречними для того, що має співвідноситися з екраном, а не з вмістом: розділ, який має заповнити висоту, заголовок, який має рости разом із вікном. І це ж робить їх ненадійними всередині коробки, яка не завбільшки з екран — там відсоток майже завжди і є тим, що ви мали на увазі.</p>' +
        '<p><code>vmin</code> і <code>vmax</code> беруть меншу й більшу з двох величин, що допомагає, коли щось має виглядати однаково в книжковій і альбомній орієнтації.</p>',

      's.traps.t': 'Дві пастки, у які потрапляють усі',
      's.traps.d':
        '<p><code>width: 100vw</code> виглядає як «завширшки з вікно», і так воно і є — але там, де браузер малює класичну смугу прокручування, таку, що займає місце, а не пливе над вмістом, ця смуга враховується. Область вмісту вужча, тож ви дістаєте горизонтальну прокрутку, якої не просили. На системах із накладними смугами не стається нічого, і саме тому цю ваду так легко проґавити. <code>width: 100%</code> — майже завжди те, що ви мали на увазі.</p>' +
        '<p><code>height: 100vh</code> на телефоні міряють так, ніби панелей немає, бо вони з’являються і зникають під час прокручування. У підсумку низ вашого розділу ховається за панеллю саме тієї миті, коли сторінка відкривається.</p>' +
        '<p>Звідси <code>svh</code>, <code>lvh</code> і <code>dvh</code>: мала область перегляду з панелями, велика без них і динамічна, що стежить за ними. <code>100dvh</code> — зазвичай саме те, що потрібно.</p>',

      's.calc.t': 'Арифметика у файлі стилів',
      's.calc.d':
        '<p><code>calc()</code> дозволяє змішувати одиниці, які інакше не можуть зустрітися. <code>calc(100% - 2rem)</code> — це те, на що браузер може відповісти лише тоді, коли знатиме ширину блока навколо; саме тому обчислювати треба там, а не вам наперед.</p>' +
        '<p>Одне правило варто вивчити одразу: обабіч <code>+</code> і <code>&minus;</code> мають бути пробіли. Без них <code>&minus;2rem</code> читається як одне від’ємне число, а не як знак мінус і доданок, і весь вираз стає недійсним. У множення й ділення такої проблеми немає, але дільник має бути звичайним числом — ділити можна на 3, а не на 3px.</p>',

      's.clamp.t': 'Родичі calc()',
      's.clamp.d':
        '<p><code>min()</code> і <code>max()</code> беруть кілька значень і обирають, а не обчислюють. Назви спершу здаються перевернутими: <code>min(100%, 60rem)</code> задає <em>стелю</em>, бо менша з двох величин завжди перемагає.</p>' +
        '<p><code>clamp()</code> бере три: підлогу, бажане значення і стелю. <code>clamp(1rem, 2.5vw, 2rem)</code> дозволяє шрифту рости разом із вікном, але ніколи не опускатися нижче читабельної межі й не підніматися вище розумної. Це точно те саме, що <code>max(1rem, min(2.5vw, 2rem))</code>, лише читабельніше.</p>' +
        '<p>Усі три можуть містити обчислення просто всередині себе, без обгортки <code>calc()</code>.</p>',

      's.note':
        '<p>Коротко. <code>px</code> — для того, що справді сталe. <code>%</code> — для всього, що має йти за коробкою навколо, але перевіряйте, відносно чого міряється відсоток, і пам’ятайте, що <code>padding</code> і <code>margin</code> завжди міряють відносно ширини. <code>vw</code> і <code>vh</code> — лише коли ви справді маєте на увазі екран, а на телефоні <code>dvh</code> замість <code>vh</code>. <code>calc()</code> — коли одиниці треба змішати, з пробілами навколо мінуса.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Et element har <code>padding-top: 50%</code>. Blokken rundt er 400px bred og 200px høy. Hvor stor blir toppmargen innvendig?',
        answer: 1,
        options: [
          {
            text: '100px — halvparten av høyden.',
            why: 'Det virker rimelig, men det er ikke høyden som brukes. Prosent på <code>padding</code> måles alltid mot bredden.',
          },
          {
            text: '200px — halvparten av bredden.',
            why: '<code>padding</code> og <code>margin</code> måles mot bredden til blokken rundt, også på toppen og bunnen. Det er nettopp dette som gjør det mulig å lage bokser med fast sideforhold.',
          },
          {
            text: 'Halvparten av elementets egen høyde.',
            why: 'Elementet selv er aldri målestokken for <code>padding</code>. Det er blokken rundt.',
          },
          {
            text: 'Ingenting — prosent virker ikke på <code>padding</code>.',
            why: 'Det virker helt fint. Spørsmålet er bare hva prosenten måles mot.',
          },
        ],
      },
      {
        q: 'Du skriver <code>.child { height: 50% }</code>, og ingenting skjer. Forelderen har ingen høyde satt. Hvorfor?',
        answer: 2,
        options: [
          {
            text: 'Fordi <code>height</code> ikke tar prosent.',
            why: 'Den tar prosent. Den trenger bare noe å regne prosenten av.',
          },
          {
            text: 'Fordi regelen står for tidlig i stilarket.',
            why: 'Rekkefølge avgjør mellom regler som slåss. Her er det ingen konkurrent.',
          },
          {
            text: 'Fordi forelderen ikke har en bestemt høyde, så prosenten faller tilbake til <code>auto</code>.',
            why: 'En vanlig blokk er så høy som innholdet, og «halvparten av så høyt som innholdet» er sirkulært. Gi forelderen en høyde — eller bruk flex eller grid, som deler ut høyder selv.',
          },
          {
            text: 'Fordi barnet mangler <code>display: block</code>.',
            why: 'Et <code>&lt;div&gt;</code> er allerede en blokk. Problemet ligger hos forelderen.',
          },
        ],
      },
      {
        q: 'Du setter <code>width: 100vw</code> på en seksjon, og siden får et vannrett rullefelt. Hvorfor?',
        answer: 0,
        options: [
          {
            text: 'Fordi <code>100vw</code> inkluderer bredden på det klassiske rullefeltet, mens innholdsområdet er smalere.',
            why: 'Du ba om hele visningsområdet, og det er bredere enn plassen innholdet faktisk har. <code>width: 100%</code> er nesten alltid det du mente.',
          },
          {
            text: 'Fordi <code>vw</code> ikke virker på <code>width</code>.',
            why: 'Den virker helt fint, og gjør nøyaktig det du ba om. Det er bare litt mer enn du ville ha.',
          },
          {
            text: 'Fordi seksjonen mangler <code>box-sizing</code>.',
            why: '<code>box-sizing</code> avgjør om ramme og innvendig marg regnes med i bredden. Her er bredden i seg selv for stor.',
          },
          {
            text: 'Fordi <code>100vw</code> alltid er større enn <code>100%</code>.',
            why: 'De er like store når det ikke finnes noe rullefelt, og når forelderen er like bred som vinduet. Det er rullefeltet som skaper forskjellen.',
          },
        ],
      },
      {
        q: 'Hvilken av disse er ugyldig?',
        answer: 2,
        options: [
          {
            text: '<code>calc(100% - 2rem)</code>',
            why: 'Mellomrom på begge sider av minustegnet, og to enheter som gjerne blandes. Helt riktig.',
          },
          {
            text: '<code>calc(100% / 3)</code>',
            why: 'Deling på et rent tall er lov, og trenger ikke mellomrom rundt skråstreken.',
          },
          {
            text: '<code>calc(100% -2rem)</code>',
            why: 'Uten mellomrom etter minustegnet leses <code>-2rem</code> som ett negativt tall. Da står det to lengder etter hverandre uten operator, og hele uttrykket forkastes.',
          },
          {
            text: '<code>calc(100px * 2)</code>',
            why: 'Ganging med et tall er lov. Det er bare divisor som må være et rent tall.',
          },
        ],
      },
      {
        q: 'Hva gjør <code>width: min(100%, 60rem)</code>?',
        answer: 1,
        options: [
          {
            text: 'Setter en nedre grense på 60rem.',
            why: 'Det ville vært <code>max(100%, 60rem)</code>. Her vinner alltid den minste av de to.',
          },
          {
            text: 'Lar bredden følge forelderen, men aldri over 60rem.',
            why: 'Den minste verdien vinner, så <code>min()</code> setter et tak. Navnet føles snudd første gang, og gir mening så snart du tenker «hvilken av dem er minst».',
          },
          {
            text: 'Velger tilfeldig mellom de to.',
            why: 'Den velger alltid den minste. Ingenting er tilfeldig.',
          },
          {
            text: 'Det samme som <code>width: 60rem</code>.',
            why: 'Bare når forelderen er bred nok. Er den smalere, vinner <code>100%</code>.',
          },
        ],
      },
      {
        q: 'En seksjon med <code>height: 100vh</code> får bunnen gjemt bak verktøylinjen på mobil. Hva bytter du til?',
        answer: 2,
        options: [
          {
            text: '<code>height: 100%</code>',
            why: 'Nå er du tilbake til prosent-høyde, som ikke gjør noe med mindre forelderen har en bestemt høyde.',
          },
          {
            text: '<code>height: 100vmax</code>',
            why: '<code>vmax</code> tar den største av bredden og høyden. På en mobil i stående format blir det høyden igjen, og ofte enda mer.',
          },
          {
            text: '<code>height: 100dvh</code>',
            why: 'Det dynamiske visningsområdet følger verktøylinjene mens de kommer og går. <code>100svh</code> er alternativet hvis du heller vil ha en høyde som aldri endrer seg, målt med linjene framme.',
          },
          {
            text: '<code>height: calc(100vh - 0px)</code>',
            why: 'Det er nøyaktig samme verdi. <code>calc()</code> regner, men endrer ikke hva <code>vh</code> betyr.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'An element has <code>padding-top: 50%</code>. The block around it is 400px wide and 200px tall. How big is that padding?',
        answer: 1,
        options: [
          {
            text: '100px — half the height.',
            why: 'That seems reasonable, but the height is not what is used. A percentage on <code>padding</code> is always measured against width.',
          },
          {
            text: '200px — half the width.',
            why: '<code>padding</code> and <code>margin</code> are measured against the width of the block around them, top and bottom included. This is precisely what makes fixed-ratio boxes possible.',
          },
          {
            text: 'Half the element own height.',
            why: 'The element itself is never the yardstick for <code>padding</code>. The block around it is.',
          },
          {
            text: 'Nothing — percentages do not work on <code>padding</code>.',
            why: 'They work perfectly well. The only question is what they are measured against.',
          },
        ],
      },
      {
        q: 'You write <code>.child { height: 50% }</code> and nothing happens. The parent has no height set. Why?',
        answer: 2,
        options: [
          {
            text: 'Because <code>height</code> does not accept percentages.',
            why: 'It does. It just needs something to take the percentage of.',
          },
          {
            text: 'Because the rule comes too early in the stylesheet.',
            why: 'Order decides between rules that fight. Here there is no competitor.',
          },
          {
            text: 'Because the parent has no definite height, so the percentage falls back to <code>auto</code>.',
            why: 'An ordinary block is as tall as its content, and "half as tall as the content" is circular. Give the parent a height — or use flex or grid, which hand heights out themselves.',
          },
          {
            text: 'Because the child is missing <code>display: block</code>.',
            why: 'A <code>&lt;div&gt;</code> is already a block. The problem is with the parent.',
          },
        ],
      },
      {
        q: 'You set <code>width: 100vw</code> on a section and the page gets a horizontal scrollbar. Why?',
        answer: 0,
        options: [
          {
            text: 'Because <code>100vw</code> includes the width of the classic scrollbar, while the content area is narrower.',
            why: 'You asked for the whole viewport, and that is wider than the space the content actually has. <code>width: 100%</code> is almost always what you meant.',
          },
          {
            text: 'Because <code>vw</code> does not work on <code>width</code>.',
            why: 'It works fine, and does exactly what you asked. It is just slightly more than you wanted.',
          },
          {
            text: 'Because the section is missing <code>box-sizing</code>.',
            why: '<code>box-sizing</code> decides whether border and padding count inside the width. Here the width itself is too big.',
          },
          {
            text: 'Because <code>100vw</code> is always larger than <code>100%</code>.',
            why: 'They are equal when there is no scrollbar and the parent is as wide as the window. The scrollbar is what creates the difference.',
          },
        ],
      },
      {
        q: 'Which of these is invalid?',
        answer: 2,
        options: [
          {
            text: '<code>calc(100% - 2rem)</code>',
            why: 'Spaces on both sides of the minus, and two units that mix happily. Perfectly correct.',
          },
          {
            text: '<code>calc(100% / 3)</code>',
            why: 'Dividing by a plain number is allowed, and needs no spaces around the slash.',
          },
          {
            text: '<code>calc(100% -2rem)</code>',
            why: 'Without a space after the minus, <code>-2rem</code> reads as a single negative number. That leaves two lengths side by side with no operator, and the whole expression is thrown away.',
          },
          {
            text: '<code>calc(100px * 2)</code>',
            why: 'Multiplying by a number is allowed. It is only the divisor that has to be a plain number.',
          },
        ],
      },
      {
        q: 'What does <code>width: min(100%, 60rem)</code> do?',
        answer: 1,
        options: [
          {
            text: 'Sets a lower limit of 60rem.',
            why: 'That would be <code>max(100%, 60rem)</code>. Here the smaller of the two always wins.',
          },
          {
            text: 'Lets the width follow the parent, but never above 60rem.',
            why: 'The smallest value wins, so <code>min()</code> sets a ceiling. The name feels inverted the first time, and makes sense as soon as you think "which of these is smaller".',
          },
          {
            text: 'Chooses randomly between the two.',
            why: 'It always chooses the smaller. Nothing is random.',
          },
          {
            text: 'The same as <code>width: 60rem</code>.',
            why: 'Only while the parent is wide enough. If it is narrower, <code>100%</code> wins.',
          },
        ],
      },
      {
        q: 'A section with <code>height: 100vh</code> has its bottom hidden behind the toolbar on a phone. What do you switch to?',
        answer: 2,
        options: [
          {
            text: '<code>height: 100%</code>',
            why: 'Now you are back to a percentage height, which does nothing unless the parent has a definite height.',
          },
          {
            text: '<code>height: 100vmax</code>',
            why: '<code>vmax</code> takes the larger of width and height. On a phone in portrait that is the height again, and often more.',
          },
          {
            text: '<code>height: 100dvh</code>',
            why: 'The dynamic viewport follows the toolbars as they come and go. <code>100svh</code> is the alternative if you would rather have a height that never changes, measured with the bars showing.',
          },
          {
            text: '<code>height: calc(100vh - 0px)</code>',
            why: 'That is exactly the same value. <code>calc()</code> does arithmetic; it does not change what <code>vh</code> means.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Елемент має <code>padding-top: 50%</code>. Блок навколо — 400px завширшки і 200px заввишки. Яким буде цей внутрішній відступ?',
        answer: 1,
        options: [
          {
            text: '100px — половина висоти.',
            why: 'Звучить розумно, але використовується не висота. Відсоток у <code>padding</code> завжди міряють відносно ширини.',
          },
          {
            text: '200px — половина ширини.',
            why: '<code>padding</code> і <code>margin</code> міряють відносно ширини блока навколо, зокрема згори й знизу. Саме це й уможливлює коробки зі сталим співвідношенням сторін.',
          },
          {
            text: 'Половина власної висоти елемента.',
            why: 'Сам елемент ніколи не є мірилом для <code>padding</code>. Ним є блок навколо.',
          },
          {
            text: 'Нічого — відсотки не працюють у <code>padding</code>.',
            why: 'Працюють чудово. Питання лише в тому, відносно чого їх міряють.',
          },
        ],
      },
      {
        q: 'Ви пишете <code>.child { height: 50% }</code>, і нічого не відбувається. У батька висоту не задано. Чому?',
        answer: 2,
        options: [
          {
            text: 'Бо <code>height</code> не приймає відсотків.',
            why: 'Приймає. Йому лише потрібно, від чого брати відсоток.',
          },
          {
            text: 'Бо правило стоїть зарано у файлі стилів.',
            why: 'Порядок вирішує суперечки між правилами. Тут суперника немає.',
          },
          {
            text: 'Бо в батька немає певної висоти, тож відсоток повертається до <code>auto</code>.',
            why: 'Звичайний блок заввишки такий, як вміст, а «половина висоти вмісту» — замкнене коло. Дайте батькові висоту або візьміть flex чи grid, які роздають висоти самі.',
          },
          {
            text: 'Бо дитині бракує <code>display: block</code>.',
            why: '<code>&lt;div&gt;</code> і так блок. Проблема в батька.',
          },
        ],
      },
      {
        q: 'Ви ставите <code>width: 100vw</code> на розділ, і на сторінці з’являється горизонтальна прокрутка. Чому?',
        answer: 0,
        options: [
          {
            text: 'Бо <code>100vw</code> включає ширину класичної смуги прокручування, а область вмісту вужча.',
            why: 'Ви попросили всю область перегляду, а вона ширша за місце, яке насправді має вміст. <code>width: 100%</code> — майже завжди те, що ви мали на увазі.',
          },
          {
            text: 'Бо <code>vw</code> не працює для <code>width</code>.',
            why: 'Працює чудово і робить саме те, про що ви попросили. Просто трохи більше, ніж ви хотіли.',
          },
          {
            text: 'Бо розділу бракує <code>box-sizing</code>.',
            why: '<code>box-sizing</code> вирішує, чи входять рамка і внутрішній відступ у ширину. Тут завелика сама ширина.',
          },
          {
            text: 'Бо <code>100vw</code> завжди більше за <code>100%</code>.',
            why: 'Вони рівні, коли смуги прокручування немає і батько завширшки з вікно. Різницю створює саме смуга.',
          },
        ],
      },
      {
        q: 'Що з цього недійсне?',
        answer: 2,
        options: [
          {
            text: '<code>calc(100% - 2rem)</code>',
            why: 'Пробіли обабіч мінуса і дві одиниці, які чудово змішуються. Цілком правильно.',
          },
          {
            text: '<code>calc(100% / 3)</code>',
            why: 'Ділення на звичайне число дозволене, і пробілів навколо скісної риски не потребує.',
          },
          {
            text: '<code>calc(100% -2rem)</code>',
            why: 'Без пробілу після мінуса <code>-2rem</code> читається як одне від’ємне число. Тоді дві довжини стоять поруч без оператора, і весь вираз відкидається.',
          },
          {
            text: '<code>calc(100px * 2)</code>',
            why: 'Множення на число дозволене. Звичайним числом має бути лише дільник.',
          },
        ],
      },
      {
        q: 'Що робить <code>width: min(100%, 60rem)</code>?',
        answer: 1,
        options: [
          {
            text: 'Задає нижню межу 60rem.',
            why: 'Це був би <code>max(100%, 60rem)</code>. Тут завжди перемагає менша з двох величин.',
          },
          {
            text: 'Дозволяє ширині йти за батьком, але ніколи не більше за 60rem.',
            why: 'Перемагає найменше значення, тож <code>min()</code> задає стелю. Назва спершу здається перевернутою і стає зрозумілою, щойно подумати «яка з них менша».',
          },
          {
            text: 'Обирає випадково одну з двох.',
            why: 'Завжди обирає меншу. Нічого випадкового.',
          },
          {
            text: 'Те саме, що <code>width: 60rem</code>.',
            why: 'Лише поки батько достатньо широкий. Якщо він вужчий, перемагає <code>100%</code>.',
          },
        ],
      },
      {
        q: 'У розділу з <code>height: 100vh</code> низ ховається за панеллю на телефоні. На що змінити?',
        answer: 2,
        options: [
          {
            text: '<code>height: 100%</code>',
            why: 'Тепер ви знову маєте відсоткову висоту, яка нічого не робить, якщо в батька немає певної висоти.',
          },
          {
            text: '<code>height: 100vmax</code>',
            why: '<code>vmax</code> бере більшу з ширини й висоти. На телефоні в книжковій орієнтації це знову висота, і часто навіть більше.',
          },
          {
            text: '<code>height: 100dvh</code>',
            why: 'Динамічна область перегляду стежить за панелями, доки ті з’являються і зникають. <code>100svh</code> — альтернатива, якщо ви радше хочете висоту, яка ніколи не змінюється, виміряну з видимими панелями.',
          },
          {
            text: '<code>height: calc(100vh - 0px)</code>',
            why: 'Це точно те саме значення. <code>calc()</code> рахує, але не змінює того, що означає <code>vh</code>.',
          },
        ],
      },
    ],
  },
});
