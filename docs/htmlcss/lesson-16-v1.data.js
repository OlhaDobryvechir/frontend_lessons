/*
 * Content of lesson 16 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS: overflow, text-wrap',
      kicker: 'Leksjon 16 &middot; HTML &amp; CSS',
      title: 'CSS: overflow, text-wrap',
      lead: 'Innholdet er større enn boksen. Det er to spørsmål i det, ikke ett: hvor linjene skal brekke før det kommer så langt, og hva som skal skje med det som likevel ikke får plass.',

      's.overflow.t': 'De fem svarene',
      's.overflow.d':
        '<p>Standarden er <code>visible</code>, og den er verdt å merke seg: innholdet blir ikke klippet. Det renner ut av boksen og er fortsatt fullt lesbart, bare på feil sted. Det er derfor et overflytsproblem så ofte ser ut som et layoutproblem.</p>' +
        '<p><code>hidden</code> og <code>clip</code> klipper begge, men de er ikke det samme. <code>hidden</code> lager en rullebar beholder som bare ikke viser rullefelt — et skript eller et tastetrykk kan fortsatt flytte innholdet. <code>clip</code> klipper og lar det være der; ingenting kan rulle det.</p>' +
        '<p><code>scroll</code> og <code>auto</code> gir rullefelt. Forskjellen er om de alltid er der eller bare når det trengs. <code>auto</code> er nesten alltid det du vil ha; <code>scroll</code> er nyttig når du ikke vil at layouten skal hoppe idet et rullefelt dukker opp.</p>',

      's.axes.t': 'To akser, med en regel imellom',
      's.axes.d':
        '<p><code>overflow</code> er en kortform for <code>overflow-x</code> og <code>overflow-y</code>, og du kan sette dem hver for seg. Men du kan ikke sette dem helt fritt.</p>' +
        '<p>Setter du den ene til <code>hidden</code>, <code>scroll</code> eller <code>auto</code> og lar den andre stå på <code>visible</code>, blir <code>visible</code> stille om til <code>auto</code>. Grunnen er praktisk: en boks kan ikke klippe i én retning og samtidig la innhold flyte fritt ut i den andre — det finnes ingen fornuftig måte å tegne det på.</p>' +
        '<p>Det fanger folk som bare ville hindre vannrett rulling. <code>overflow-x: hidden</code> alene gir deg loddrett <code>auto</code> på kjøpet, og med den en uventet rullebar beholder. Vil du klippe bare én akse, er <code>clip</code> unntaket fra regelen: den lar den andre aksen bli stående på <code>visible</code>.</p>',

      's.side.t': 'Det overflow gjør ved siden av',
      's.side.d':
        '<p>Alt annet enn <code>visible</code> og <code>clip</code> gjør elementet til en rullebeholder, og det har følger langt utover rullingen.</p>' +
        '<p>Boksen blir en egen formateringskontekst. Den omslutter flytende elementer i stedet for å la dem stikke ut, og marger fra barna kolliderer ikke lenger gjennom kanten. <code>overflow: hidden</code> har vært brukt som triks for nettopp dette i mange år, ofte av folk som ikke trengte klippingen i det hele tatt.</p>' +
        '<p>Og så er det koblingen til leksjon 13: på et flex-element fjerner <code>overflow</code> den automatiske minstestørrelsen. Elementet krymper uten <code>min-width: 0</code>. Det er greit å vite når du feilsøker &mdash; og verdt å være klar over at en linje du la til for utseendets skyld, kan ha endret hvordan raden regnes ut.</p>',

      's.ellipsis.t': 'Tre linjer som må stå sammen',
      's.ellipsis.d':
        '<p><code>text-overflow: ellipsis</code> er den mest googlede egenskapen i CSS, fordi den nesten aldri virker alene.</p>' +
        '<p>Den forteller bare hva som skal <em>vises</em> der teksten klippes. Noe må faktisk klippe, og teksten må være på én linje — ellers brekker den som vanlig og blir aldri klippet i det hele tatt. Derfor trengs alle tre: <code>overflow: hidden</code>, <code>white-space: nowrap</code> og <code>text-overflow: ellipsis</code>.</p>' +
        '<p>Skal det klippes etter flere linjer, er det en annen mekanisme: <code>-webkit-line-clamp</code> med <code>display: -webkit-box</code>. Prefikset ser midlertidig ut, men dette er formen alle nettlesere faktisk støtter.</p>',

      's.ws.t': 'Der mellomrommene blir borte',
      's.ws.d':
        '<p>HTML slår sammen alle mellomrom, tabulatorer og linjeskift til ett enkelt mellomrom. Det er ikke nettleseren som er slurvete &mdash; det er <code>white-space: normal</code> som gjør jobben sin, og det er derfor du kan formatere oppmerkingen din som du vil uten at det synes.</p>' +
        '<p>De andre verdiene skrur av den ene eller den andre halvdelen. <code>pre</code> beholder alt og bryter aldri linjer; <code>pre-wrap</code> beholder alt, men lar likevel linjene brekke når de blir for lange &mdash; som regel det du vil ha til tekst brukeren har skrevet selv. <code>pre-line</code> er den motsatte halvparten: mellomrom slås sammen, men linjeskift står.</p>',

      's.wrap.t': 'Hvor linjene brekker',
      's.wrap.d':
        '<p><code>text-wrap</code> er nyere, og den blander seg ikke i mellomrommene. Den sier bare hvordan nettleseren skal velge bruddpunkter.</p>' +
        '<p><code>balance</code> jevner ut lengden på linjene i stedet for å fylle hver linje maksimalt. En overskrift på tre linjer der den siste har ett ord, blir tre like lange linjer. Det koster mer å regne ut, så nettlesere bruker den bare på korte blokker &mdash; et par linjer &mdash; og det er nettopp der den hører hjemme.</p>' +
        '<p><code>pretty</code> er varianten for brødtekst: den lar resten være i fred og passer bare på at siste linje ikke blir stående igjen med ett enslig ord.</p>',

      's.break.t': 'Når et ord ikke kan brekkes',
      's.break.d':
        '<p>Normal linjebrytning skjer mellom ord. En lang adresse uten mellomrom har ingen slike steder, og da stikker den rett ut av kolonnen sin.</p>' +
        '<p><code>overflow-wrap: break-word</code> gir tillatelse til å brekke inne i et ord &mdash; men bare når ordet ikke ville fått plass på en linje for seg selv. Resten av teksten brytes som før. <code>word-break: break-all</code> er langt mer aggressiv: den brekker hvor som helst, også ord som hadde fått plass, og gir en ujevn høyrekant du sjelden vil ha.</p>' +
        '<p><code>hyphens: auto</code> er det pene alternativet: ekte orddeling med bindestrek. Den krever at dokumentet sier hvilket språk teksten er på &mdash; <code>lang</code> fra leksjon 1 &mdash; for uten det vet ikke nettleseren hvor et ord kan deles.</p>',

      's.note':
        '<p>Kortversjonen. <code>overflow: visible</code> er standard og klipper ingenting. <code>auto</code> når du vil rulle, <code>clip</code> når du bare vil klippe. Husk at den andre aksen blir <code>auto</code> av seg selv, og at en rullebeholder også endrer hvordan boksen regnes ut. Ellipsis krever alle tre linjene. Og for lange adresser: <code>overflow-wrap: break-word</code>, ikke <code>word-break</code>.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS: overflow, text-wrap',
      kicker: 'Lesson 16 &middot; HTML &amp; CSS',
      title: 'CSS: overflow, text-wrap',
      lead: 'The content is bigger than the box. That is two questions, not one: where the lines should break before it comes to that, and what should happen to whatever still does not fit.',

      's.overflow.t': 'The five answers',
      's.overflow.d':
        '<p>The default is <code>visible</code>, and it is worth noticing what that means: the content is not clipped. It spills out of the box and stays perfectly readable, just in the wrong place. This is why an overflow problem so often looks like a layout problem.</p>' +
        '<p><code>hidden</code> and <code>clip</code> both clip, but they are not the same. <code>hidden</code> makes a scrollable container that simply shows no scrollbars — a script or a keypress can still move the content. <code>clip</code> clips and leaves it there; nothing can scroll it.</p>' +
        '<p><code>scroll</code> and <code>auto</code> both give scrollbars. The difference is whether they are always there or only when needed. <code>auto</code> is almost always what you want; <code>scroll</code> is useful when you do not want the layout to jump the moment a scrollbar appears.</p>',

      's.axes.t': 'Two axes, with a rule between them',
      's.axes.d':
        '<p><code>overflow</code> is shorthand for <code>overflow-x</code> and <code>overflow-y</code>, and you can set them separately. But you cannot set them entirely freely.</p>' +
        '<p>Set one to <code>hidden</code>, <code>scroll</code> or <code>auto</code> and leave the other at <code>visible</code>, and that <code>visible</code> quietly becomes <code>auto</code>. The reason is practical: a box cannot clip in one direction while letting content flow freely out in the other — there is no sensible way to draw that.</p>' +
        '<p>It catches people who only wanted to stop horizontal scrolling. <code>overflow-x: hidden</code> on its own hands you a vertical <code>auto</code> as well, and with it an unexpected scroll container. To clip one axis only, <code>clip</code> is the exception to the rule: it leaves the other axis on <code>visible</code>.</p>',

      's.side.t': 'What overflow does on the side',
      's.side.d':
        '<p>Anything other than <code>visible</code> and <code>clip</code> turns the element into a scroll container, and that has consequences well beyond scrolling.</p>' +
        '<p>The box becomes a formatting context of its own. It wraps around floated elements instead of letting them stick out, and margins from its children no longer collapse through its edge. <code>overflow: hidden</code> has been used as a trick for exactly this for years, often by people who did not want the clipping at all.</p>' +
        '<p>And there is the link back to lesson 13: on a flex item, <code>overflow</code> removes the automatic minimum size. The item shrinks without <code>min-width: 0</code>. Useful to know when debugging — and worth being aware that a line you added for looks may have changed how the row is measured.</p>',

      's.ellipsis.t': 'Three lines that have to travel together',
      's.ellipsis.d':
        '<p><code>text-overflow: ellipsis</code> is the most searched-for property in CSS, because it almost never works on its own.</p>' +
        '<p>All it says is what should be <em>shown</em> where the text gets cut. Something has to actually do the cutting, and the text has to be on one line — otherwise it wraps as usual and is never cut at all. Hence all three: <code>overflow: hidden</code>, <code>white-space: nowrap</code> and <code>text-overflow: ellipsis</code>.</p>' +
        '<p>To cut after several lines instead, the mechanism is a different one: <code>-webkit-line-clamp</code> together with <code>display: -webkit-box</code>. The prefix looks provisional, but this is the form every browser actually supports.</p>',

      's.ws.t': 'Where the spaces go',
      's.ws.d':
        '<p>HTML collapses every run of spaces, tabs and newlines into a single space. That is not the browser being careless — it is <code>white-space: normal</code> doing its job, and it is why you can indent your markup however you like without it showing.</p>' +
        '<p>The other values switch off one half or the other. <code>pre</code> keeps everything and never wraps; <code>pre-wrap</code> keeps everything but still lets lines break when they get too long — usually what you want for text a user typed. <code>pre-line</code> is the opposite half: spaces collapse, but newlines stay.</p>',

      's.wrap.t': 'Where the lines break',
      's.wrap.d':
        '<p><code>text-wrap</code> is newer, and it does not interfere with the spaces at all. It only says how the browser should choose its break points.</p>' +
        '<p><code>balance</code> evens out the line lengths instead of filling each line as far as it will go. A three-line heading whose last line holds one word becomes three lines of roughly equal length. It costs more to work out, so browsers only apply it to short blocks — a few lines — which is exactly where it belongs.</p>' +
        '<p><code>pretty</code> is the variant for body text: it leaves the rest alone and only makes sure the last line is not left holding a single word.</p>',

      's.break.t': 'When a word cannot be broken',
      's.break.d':
        '<p>Normal line breaking happens between words. A long address with no spaces in it offers no such places, and so it sticks straight out of its column.</p>' +
        '<p><code>overflow-wrap: break-word</code> grants permission to break inside a word — but only when the word would not fit on a line of its own. The rest of the text breaks as before. <code>word-break: break-all</code> is far more aggressive: it breaks anywhere, including words that would have fitted, and gives a ragged edge you rarely want.</p>' +
        '<p><code>hyphens: auto</code> is the elegant option: real hyphenation. It requires the document to say which language the text is in — the <code>lang</code> from lesson 1 — because without it the browser has no idea where a word may be divided.</p>',

      's.note':
        '<p>The short version. <code>overflow: visible</code> is the default and clips nothing. <code>auto</code> when you want scrolling, <code>clip</code> when you only want cutting. Remember the other axis becomes <code>auto</code> by itself, and that a scroll container also changes how the box is measured. Ellipsis needs all three lines. And for long addresses: <code>overflow-wrap: break-word</code>, not <code>word-break</code>.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS: overflow, text-wrap',
      kicker: 'Урок 16 &middot; HTML &amp; CSS',
      title: 'CSS: overflow, text-wrap',
      lead: 'Вміст більший за коробку. Це два питання, а не одне: де мають перенестися рядки, перш ніж до цього дійде, і що робити з тим, що все одно не вмістилося.',

      's.overflow.t': 'П’ять відповідей',
      's.overflow.d':
        '<p>Типове значення — <code>visible</code>, і варто помітити, що воно означає: вміст не обрізається. Він витікає з коробки і лишається цілком читабельним, просто не в тому місці. Саме тому проблема переповнення так часто виглядає як проблема розкладки.</p>' +
        '<p><code>hidden</code> і <code>clip</code> обидва обрізають, але це не те саме. <code>hidden</code> робить прокручуваний контейнер, який просто не показує смуг — скрипт або натискання клавіші все ще можуть посунути вміст. <code>clip</code> обрізає і лишає як є; прокрутити це не може ніщо.</p>' +
        '<p><code>scroll</code> і <code>auto</code> дають смуги прокручування. Різниця в тому, чи вони є завжди, чи лише коли потрібні. <code>auto</code> — майже завжди те, що треба; <code>scroll</code> корисний, коли ви не хочете, щоб розкладка стрибала тієї миті, коли смуга з’являється.</p>',

      's.axes.t': 'Дві осі й правило між ними',
      's.axes.d':
        '<p><code>overflow</code> — це скорочення для <code>overflow-x</code> та <code>overflow-y</code>, і їх можна задавати окремо. Але не цілком вільно.</p>' +
        '<p>Задайте одну як <code>hidden</code>, <code>scroll</code> чи <code>auto</code>, а другу лишіть на <code>visible</code> — і цей <code>visible</code> тихо стане <code>auto</code>. Причина практична: коробка не може обрізати в одному напрямку і водночас дозволяти вмісту вільно витікати в іншому — намалювати це розумним чином неможливо.</p>' +
        '<p>Це підводить тих, хто лише хотів прибрати горизонтальну прокрутку. Сам по собі <code>overflow-x: hidden</code> дає на додачу вертикальний <code>auto</code>, а з ним — несподіваний прокручуваний контейнер. Щоб обрізати лише одну вісь, винятком із правила є <code>clip</code>: він лишає другу вісь на <code>visible</code>.</p>',

      's.side.t': 'Що overflow робить принагідно',
      's.side.d':
        '<p>Усе, крім <code>visible</code> і <code>clip</code>, перетворює елемент на прокручуваний контейнер, і наслідки виходять далеко за межі прокручування.</p>' +
        '<p>Коробка стає власним контекстом форматування. Вона огортає обтічні елементи замість того, щоб дати їм стирчати, а відступи її нащадків більше не проходять крізь її край. <code>overflow: hidden</code> роками вживали як трюк саме заради цього — часто люди, яким обрізання було геть не потрібне.</p>' +
        '<p>І ось звʼязок з уроком 13: на flex-елементі <code>overflow</code> прибирає автоматичний мінімальний розмір. Елемент стискається без <code>min-width: 0</code>. Це корисно знати під час налагодження — і варто памʼятати, що рядок, доданий заради вигляду, міг змінити те, як обчислюється весь рядок розкладки.</p>',

      's.ellipsis.t': 'Три рядки, які мусять ходити разом',
      's.ellipsis.d':
        '<p><code>text-overflow: ellipsis</code> — найчастіше шукана властивість CSS, бо сама по собі вона майже ніколи не працює.</p>' +
        '<p>Вона каже лише те, що має <em>показатися</em> там, де текст обрізали. Обрізати має щось інше, і текст має бути в один рядок — інакше він перенесеться як завжди, і обрізати його не доведеться взагалі. Звідси всі три: <code>overflow: hidden</code>, <code>white-space: nowrap</code> і <code>text-overflow: ellipsis</code>.</p>' +
        '<p>Щоб обрізати після кількох рядків, механізм інший: <code>-webkit-line-clamp</code> разом із <code>display: -webkit-box</code>. Префікс виглядає тимчасовим, але саме цю форму насправді підтримують усі браузери.</p>',

      's.ws.t': 'Куди зникають пробіли',
      's.ws.d':
        '<p>HTML згортає будь-яку низку пробілів, табуляцій і переносів рядка в один пробіл. Це не браузер недбалий — це <code>white-space: normal</code> робить свою роботу, і саме тому ви можете форматувати свою розмітку як завгодно, і це не буде помітно.</p>' +
        '<p>Інші значення вимикають ту чи ту половину. <code>pre</code> зберігає все і ніколи не переносить; <code>pre-wrap</code> зберігає все, але все ж дає рядкам переноситися, коли вони задовгі — зазвичай саме те, що треба для тексту, який набрав користувач. <code>pre-line</code> — протилежна половина: пробіли згортаються, а переноси лишаються.</p>',

      's.wrap.t': 'Де перенесуться рядки',
      's.wrap.d':
        '<p><code>text-wrap</code> новіший і в пробіли він не втручається зовсім. Він лише каже, як браузеру обирати місця перенесення.</p>' +
        '<p><code>balance</code> вирівнює довжину рядків замість того, щоб наповнювати кожен до краю. Заголовок на три рядки, де в останньому одне слово, стає трьома приблизно однаковими рядками. Обчислювати це дорожче, тож браузери застосовують його лише до коротких блоків — кілька рядків — і саме там йому й місце.</p>' +
        '<p><code>pretty</code> — варіант для основного тексту: він лишає решту як є і лише стежить, щоб в останньому рядку не лишилося одне самотнє слово.</p>',

      's.break.t': 'Коли слово неможливо перенести',
      's.break.d':
        '<p>Звичайне перенесення відбувається між словами. Довга адреса без пробілів таких місць не пропонує, тож вона стирчить просто зі своєї колонки.</p>' +
        '<p><code>overflow-wrap: break-word</code> дає дозвіл розірвати слово всередині — але лише тоді, коли слово не вмістилося б на окремому рядку. Решта тексту переноситься як і раніше. <code>word-break: break-all</code> куди агресивніший: він рве де завгодно, зокрема й слова, які вмістилися б, і дає нерівний край, якого ви рідко хочете.</p>' +
        '<p><code>hyphens: auto</code> — вишуканий варіант: справжнє перенесення з дефісом. Він потребує, щоб документ сказав, якою мовою текст — той самий <code>lang</code> з уроку 1 — бо без цього браузер не знає, де слово можна поділити.</p>',

      's.note':
        '<p>Коротко. <code>overflow: visible</code> — типове і не обрізає нічого. <code>auto</code> — коли треба прокручувати, <code>clip</code> — коли треба лише обрізати. Памʼятайте, що друга вісь стане <code>auto</code> сама, і що прокручуваний контейнер ще й змінює те, як обчислюється коробка. Для трикрапки потрібні всі три рядки. А для довгих адрес — <code>overflow-wrap: break-word</code>, а не <code>word-break</code>.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du setter <code>overflow-x: hidden</code> og rører ikke <code>overflow-y</code>. Hva blir <code>overflow-y</code>?',
        answer: 2,
        options: [
          {
            text: '<code>visible</code> &mdash; den ble ikke nevnt.',
            why: 'Den var <code>visible</code>, men den blir ikke stående slik. Regelen griper inn nettopp her.',
          },
          {
            text: '<code>hidden</code> &mdash; kortformen setter begge.',
            why: 'Du skrev <code>overflow-x</code>, ikke <code>overflow</code>. Den andre aksen får ikke samme verdi.',
          },
          {
            text: '<code>auto</code> &mdash; <code>visible</code> kan ikke stå sammen med <code>hidden</code> på den andre aksen.',
            why: 'En boks kan ikke klippe vannrett og samtidig la innhold flyte fritt ut loddrett. Derfor blir <code>visible</code> til <code>auto</code>, og du har fått en rullebeholder du ikke ba om. Vil du unngå det, bruk <code>overflow-x: clip</code>.',
          },
          {
            text: 'Regelen er ugyldig.',
            why: 'Den er helt gyldig. Det er bare den beregnede verdien som ikke er den du skrev.',
          },
        ],
      },
      {
        q: 'Du har skrevet <code>text-overflow: ellipsis</code>, men teksten brekker bare til neste linje som før. Hva mangler?',
        answer: 1,
        options: [
          {
            text: 'Ingenting &mdash; egenskapen virker bare i noen nettlesere.',
            why: 'Den virker overalt. Den trenger bare selskap.',
          },
          {
            text: '<code>white-space: nowrap</code>, og noe som klipper.',
            why: 'Teksten må være på én linje, ellers brekker den og blir aldri klippet. Alle tre må være på plass: <code>overflow: hidden</code>, <code>white-space: nowrap</code> og <code>text-overflow: ellipsis</code>.',
          },
          {
            text: 'En <code>width</code> i piksler.',
            why: 'Bredden kan gjerne komme fra layouten. Det som mangler, er at teksten holdes på én linje.',
          },
          {
            text: '<code>text-wrap: nowrap</code> i stedet for <code>text-overflow</code>.',
            why: 'Den ene erstatter ikke den andre. <code>text-wrap: nowrap</code> kan ta plassen til <code>white-space: nowrap</code>, men du trenger fortsatt klippingen og selve <code>text-overflow</code>.',
          },
        ],
      },
      {
        q: 'Hva er forskjellen på <code>overflow: hidden</code> og <code>overflow: clip</code>?',
        answer: 0,
        options: [
          {
            text: '<code>hidden</code> lager en rullebeholder uten rullefelt; <code>clip</code> kan ikke rulles i det hele tatt.',
            why: 'Begge ser like ut på skjermen. Forskjellen er at innholdet under <code>hidden</code> fortsatt kan flyttes av et skript eller av tastaturfokus &mdash; noe som av og til gir uventet forskjøvet innhold.',
          },
          {
            text: '<code>clip</code> klipper bare vannrett.',
            why: 'Den klipper begge retninger. Det den gjør annerledes, er at den ikke lager en rullebeholder.',
          },
          {
            text: '<code>hidden</code> skjuler elementet.',
            why: 'Det ville vært <code>display: none</code> eller <code>visibility: hidden</code>. <code>overflow</code> handler bare om det som ikke får plass.',
          },
          {
            text: 'Ingen &mdash; <code>clip</code> er bare et nyere navn.',
            why: 'De er to forskjellige verdier med to forskjellige virkninger, og begge finnes fortsatt.',
          },
        ],
      },
      {
        q: 'Du viser en melding brukeren har skrevet, med linjeskift i. Hvilken verdi beholder linjeskiftene og lar lange linjer brekke?',
        answer: 2,
        options: [
          {
            text: '<code>white-space: normal</code>',
            why: 'Den slår sammen alle mellomrom og ignorerer linjeskiftene. Meldingen kommer ut som én lang blokk.',
          },
          {
            text: '<code>white-space: pre</code>',
            why: 'Den beholder linjeskiftene, men brekker aldri. En lang linje stikker rett ut av boksen.',
          },
          {
            text: '<code>white-space: pre-wrap</code>',
            why: 'Den beholder både mellomrom og linjeskift, og lar likevel for lange linjer brekke. Nettopp derfor er den standardsvaret for tekst brukeren har skrevet selv.',
          },
          {
            text: '<code>white-space: nowrap</code>',
            why: 'Den gjør det motsatte: ingenting brekker, og linjeskiftene forsvinner også.',
          },
        ],
      },
      {
        q: 'Hva gjør <code>text-wrap: balance</code>?',
        answer: 3,
        options: [
          {
            text: 'Blokkjusterer teksten mot begge marger.',
            why: 'Det er <code>text-align: justify</code>. <code>balance</code> strekker ingenting.',
          },
          {
            text: 'Hindrer at lange ord stikker ut.',
            why: 'Det er <code>overflow-wrap</code>. <code>balance</code> rører ikke ord som ikke kan brekkes.',
          },
          {
            text: 'Fordeler teksten jevnt i flere kolonner.',
            why: 'Kolonner er en helt annen mekanisme. Her er det fortsatt én kolonne.',
          },
          {
            text: 'Jevner ut lengden på linjene, i stedet for å fylle hver linje maksimalt.',
            why: 'Nyttig på overskrifter, der siste linje ellers gjerne blir stående med ett ord. Nettlesere bruker den bare på korte blokker, fordi den koster mer å regne ut.',
          },
        ],
      },
      {
        q: 'En lang lenkeadresse uten mellomrom sprenger kolonnen. Hva bruker du?',
        answer: 1,
        options: [
          {
            text: '<code>word-break: break-all</code>',
            why: 'Den løser problemet, men rammer alt annet også: vanlige ord brekkes midt i selv når de hadde fått plass. Resultatet er vondt å lese.',
          },
          {
            text: '<code>overflow-wrap: break-word</code>',
            why: 'Den brekker bare et ord som ikke ville fått plass på en linje for seg selv. Resten av teksten brytes mellom ord som før.',
          },
          {
            text: '<code>overflow: hidden</code>',
            why: 'Det klipper adressen i stedet for å brekke den. Den delen som ikke fikk plass, blir borte.',
          },
          {
            text: '<code>white-space: nowrap</code>',
            why: 'Det gjør saken verre: nå brekker ingenting i det hele tatt.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You set <code>overflow-x: hidden</code> and leave <code>overflow-y</code> alone. What does <code>overflow-y</code> become?',
        answer: 2,
        options: [
          {
            text: '<code>visible</code> — it was not mentioned.',
            why: 'It was <code>visible</code>, but it does not stay that way. The rule steps in precisely here.',
          },
          {
            text: '<code>hidden</code> — the shorthand sets both.',
            why: 'You wrote <code>overflow-x</code>, not <code>overflow</code>. The other axis does not take the same value.',
          },
          {
            text: '<code>auto</code> — <code>visible</code> cannot sit alongside <code>hidden</code> on the other axis.',
            why: 'A box cannot clip horizontally while letting content flow freely out vertically. So <code>visible</code> becomes <code>auto</code>, and you have a scroll container you never asked for. To avoid it, use <code>overflow-x: clip</code>.',
          },
          {
            text: 'The rule is invalid.',
            why: 'It is perfectly valid. It is only the computed value that is not the one you wrote.',
          },
        ],
      },
      {
        q: 'You have written <code>text-overflow: ellipsis</code>, but the text just wraps to the next line as before. What is missing?',
        answer: 1,
        options: [
          {
            text: 'Nothing — the property only works in some browsers.',
            why: 'It works everywhere. It just needs company.',
          },
          {
            text: '<code>white-space: nowrap</code>, and something that clips.',
            why: 'The text has to be on one line, otherwise it wraps and is never cut at all. All three have to be present: <code>overflow: hidden</code>, <code>white-space: nowrap</code> and <code>text-overflow: ellipsis</code>.',
          },
          {
            text: 'A <code>width</code> in pixels.',
            why: 'The width can perfectly well come from the layout. What is missing is keeping the text on a single line.',
          },
          {
            text: '<code>text-wrap: nowrap</code> instead of <code>text-overflow</code>.',
            why: 'One does not replace the other. <code>text-wrap: nowrap</code> can take the place of <code>white-space: nowrap</code>, but you still need the clipping and the <code>text-overflow</code> itself.',
          },
        ],
      },
      {
        q: 'What is the difference between <code>overflow: hidden</code> and <code>overflow: clip</code>?',
        answer: 0,
        options: [
          {
            text: '<code>hidden</code> makes a scroll container with no scrollbars; <code>clip</code> cannot be scrolled at all.',
            why: 'They look identical on screen. The difference is that content under <code>hidden</code> can still be moved by a script or by keyboard focus — which occasionally produces mysteriously shifted content.',
          },
          {
            text: '<code>clip</code> only clips horizontally.',
            why: 'It clips in both directions. What it does differently is not creating a scroll container.',
          },
          {
            text: '<code>hidden</code> hides the element.',
            why: 'That would be <code>display: none</code> or <code>visibility: hidden</code>. <code>overflow</code> is only about what does not fit.',
          },
          {
            text: 'None — <code>clip</code> is just a newer name.',
            why: 'They are two different values with two different effects, and both still exist.',
          },
        ],
      },
      {
        q: 'You are displaying a message a user typed, with line breaks in it. Which value keeps the line breaks and still lets long lines wrap?',
        answer: 2,
        options: [
          {
            text: '<code>white-space: normal</code>',
            why: 'It collapses every space and ignores the line breaks. The message comes out as one long block.',
          },
          {
            text: '<code>white-space: pre</code>',
            why: 'It keeps the line breaks, but never wraps. A long line sticks straight out of the box.',
          },
          {
            text: '<code>white-space: pre-wrap</code>',
            why: 'It keeps both the spaces and the line breaks, and still lets over-long lines wrap. Which is exactly why it is the standard answer for text a user typed.',
          },
          {
            text: '<code>white-space: nowrap</code>',
            why: 'It does the opposite: nothing wraps, and the line breaks disappear too.',
          },
        ],
      },
      {
        q: 'What does <code>text-wrap: balance</code> do?',
        answer: 3,
        options: [
          {
            text: 'Justifies the text against both margins.',
            why: 'That is <code>text-align: justify</code>. <code>balance</code> stretches nothing.',
          },
          {
            text: 'Stops long words sticking out.',
            why: 'That is <code>overflow-wrap</code>. <code>balance</code> does not touch words that cannot be broken.',
          },
          {
            text: 'Distributes the text evenly across several columns.',
            why: 'Columns are an entirely different mechanism. There is still only one column here.',
          },
          {
            text: 'Evens out the line lengths instead of filling each line as far as it goes.',
            why: 'Useful on headings, where the last line otherwise tends to be left holding one word. Browsers only apply it to short blocks, because it costs more to work out.',
          },
        ],
      },
      {
        q: 'A long link address with no spaces blows the column open. What do you use?',
        answer: 1,
        options: [
          {
            text: '<code>word-break: break-all</code>',
            why: 'It solves the problem but hits everything else too: ordinary words are broken mid-word even when they would have fitted. The result is hard to read.',
          },
          {
            text: '<code>overflow-wrap: break-word</code>',
            why: 'It only breaks a word that would not have fitted on a line of its own. The rest of the text still breaks between words as before.',
          },
          {
            text: '<code>overflow: hidden</code>',
            why: 'That clips the address rather than breaking it. The part that did not fit simply disappears.',
          },
          {
            text: '<code>white-space: nowrap</code>',
            why: 'That makes it worse: now nothing wraps at all.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви задаєте <code>overflow-x: hidden</code> і не чіпаєте <code>overflow-y</code>. Чим стане <code>overflow-y</code>?',
        answer: 2,
        options: [
          {
            text: '<code>visible</code> — його ж не згадували.',
            why: 'Він був <code>visible</code>, але таким не лишиться. Саме тут і втручається правило.',
          },
          {
            text: '<code>hidden</code> — скорочення задає обидві.',
            why: 'Ви написали <code>overflow-x</code>, а не <code>overflow</code>. Друга вісь того самого значення не отримує.',
          },
          {
            text: '<code>auto</code> — <code>visible</code> не може стояти поруч із <code>hidden</code> на другій осі.',
            why: 'Коробка не може обрізати по горизонталі й водночас пускати вміст вільно витікати по вертикалі. Тож <code>visible</code> стає <code>auto</code>, і ви дістаєте прокручуваний контейнер, якого не просили. Щоб цього уникнути, беріть <code>overflow-x: clip</code>.',
          },
          {
            text: 'Правило недійсне.',
            why: 'Воно цілком дійсне. Просто обчислене значення не те, яке ви написали.',
          },
        ],
      },
      {
        q: 'Ви написали <code>text-overflow: ellipsis</code>, але текст просто переноситься на наступний рядок, як і раніше. Чого бракує?',
        answer: 1,
        options: [
          {
            text: 'Нічого — властивість працює лише в деяких браузерах.',
            why: 'Вона працює всюди. Їй просто потрібна компанія.',
          },
          {
            text: '<code>white-space: nowrap</code> і щось, що обрізає.',
            why: 'Текст має бути в один рядок, інакше він перенесеться і його ніколи не обріжуть. Мають бути всі три: <code>overflow: hidden</code>, <code>white-space: nowrap</code> і <code>text-overflow: ellipsis</code>.',
          },
          {
            text: '<code>width</code> у пікселях.',
            why: 'Ширина цілком може походити з розкладки. Бракує саме того, щоб текст тримався в одному рядку.',
          },
          {
            text: '<code>text-wrap: nowrap</code> замість <code>text-overflow</code>.',
            why: 'Одне не замінює інше. <code>text-wrap: nowrap</code> може стати на місце <code>white-space: nowrap</code>, але вам усе одно потрібні обрізання і сам <code>text-overflow</code>.',
          },
        ],
      },
      {
        q: 'Яка різниця між <code>overflow: hidden</code> і <code>overflow: clip</code>?',
        answer: 0,
        options: [
          {
            text: '<code>hidden</code> робить прокручуваний контейнер без смуг; <code>clip</code> не можна прокрутити взагалі.',
            why: 'На екрані вони виглядають однаково. Різниця в тому, що вміст під <code>hidden</code> усе ще може посунути скрипт або фокус із клавіатури — звідси іноді загадково зсунутий вміст.',
          },
          {
            text: '<code>clip</code> обрізає лише по горизонталі.',
            why: 'Він обрізає в обох напрямках. Інакше він робить те, що не створює прокручуваного контейнера.',
          },
          {
            text: '<code>hidden</code> ховає елемент.',
            why: 'Це був би <code>display: none</code> або <code>visibility: hidden</code>. <code>overflow</code> стосується лише того, що не вмістилося.',
          },
          {
            text: 'Жодної — <code>clip</code> просто новіша назва.',
            why: 'Це два різні значення з двома різними наслідками, і обидва існують.',
          },
        ],
      },
      {
        q: 'Ви показуєте повідомлення, яке набрав користувач, із переносами рядків. Яке значення збереже переноси і водночас дасть довгим рядкам переноситися?',
        answer: 2,
        options: [
          {
            text: '<code>white-space: normal</code>',
            why: 'Воно згортає всі пробіли й ігнорує переноси. Повідомлення вийде одним довгим блоком.',
          },
          {
            text: '<code>white-space: pre</code>',
            why: 'Воно збереже переноси, але ніколи не переноситиме саме. Довгий рядок стирчатиме просто з коробки.',
          },
          {
            text: '<code>white-space: pre-wrap</code>',
            why: 'Воно зберігає і пробіли, і переноси, і все ж дає задовгим рядкам переноситися. Саме тому це стандартна відповідь для тексту, набраного користувачем.',
          },
          {
            text: '<code>white-space: nowrap</code>',
            why: 'Воно робить протилежне: не переноситься нічого, та й переноси рядків зникають теж.',
          },
        ],
      },
      {
        q: 'Що робить <code>text-wrap: balance</code>?',
        answer: 3,
        options: [
          {
            text: 'Вирівнює текст по обох краях.',
            why: 'Це <code>text-align: justify</code>. <code>balance</code> нічого не розтягує.',
          },
          {
            text: 'Не дає довгим словам стирчати.',
            why: 'Це <code>overflow-wrap</code>. <code>balance</code> не чіпає слів, які неможливо перенести.',
          },
          {
            text: 'Рівномірно розподіляє текст по кількох колонках.',
            why: 'Колонки — цілком інший механізм. Тут колонка й далі одна.',
          },
          {
            text: 'Вирівнює довжину рядків замість того, щоб наповнювати кожен до краю.',
            why: 'Корисно для заголовків, де в останньому рядку інакше часто лишається одне слово. Браузери застосовують це лише до коротких блоків, бо обчислювати дорожче.',
          },
        ],
      },
      {
        q: 'Довга адреса посилання без пробілів розпирає колонку. Що візьмете?',
        answer: 1,
        options: [
          {
            text: '<code>word-break: break-all</code>',
            why: 'Проблему розвʼяже, але зачепить і все інше: звичайні слова рватимуться посередині навіть тоді, коли вмістилися б. Читати це важко.',
          },
          {
            text: '<code>overflow-wrap: break-word</code>',
            why: 'Він розриває лише те слово, яке не вмістилося б на окремому рядку. Решта тексту переноситься між словами, як і раніше.',
          },
          {
            text: '<code>overflow: hidden</code>',
            why: 'Це обріже адресу замість того, щоб її перенести. Частина, яка не вмістилася, просто зникне.',
          },
          {
            text: '<code>white-space: nowrap</code>',
            why: 'Це лише погіршить: тепер не переноситься взагалі нічого.',
          },
        ],
      },
    ],
  },
});
