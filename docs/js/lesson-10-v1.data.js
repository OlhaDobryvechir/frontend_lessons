/*
 * Content of JS lesson 10 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: lesson 7 owned the event loop. This lesson is the timers
 * that sit in the slower of its two queues.
 *
 * All the millisecond figures quoted here were measured in Chrome.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'setTimeout, setInterval',
      kicker: 'Leksjon 10 &middot; Javascript',
      title: 'setTimeout, setInterval',
      lead: 'To funksjoner som ser ut som de lover deg et tidspunkt. Det gjør de ikke — de stiller deg i kø, og køen kjenner du fra leksjon 7.',

      's.timeout.t': 'Én gang, senere',
      's.timeout.d':
        '<p><code>setTimeout</code> tar en funksjon og et antall millisekunder, og kaller funksjonen når det har gått minst så lang tid. Den returnerer en id du kan avlyse med.</p>' +
        '<p>Alt du skriver etter forsinkelsen, sendes videre til funksjonen som argumenter. Det er en pen måte å slippe en ekstra lukning når du bare skal gi den en verdi.</p>' +
        '<p>Den godtar også en tekststreng i stedet for en funksjon, og kjører den som kode. Det er <code>eval</code> i forkledning, med alt det innebærer &mdash; ingen verktøy forstår den, og alt som havner i strengen blir kjørt. Skriv aldri den varianten.</p>',

      's.clear.t': 'Å avlyse',
      's.clear.d':
        '<p><code>clearTimeout</code> tar id-en og stopper timeren, hvis den ikke allerede har kjørt.</p>' +
        '<p>Den er behagelig tilgivende: en ukjent id, eller <code>undefined</code>, gjør ingenting i det hele tatt. Du trenger altså aldri sjekke om det finnes en timer før du fjerner den, og det gjør mønsteret i avsnittet om debouncing så kort som det er.</p>',

      's.interval.t': 'Om og om igjen, omtrent',
      's.interval.d':
        '<p><code>setInterval</code> gjentar til noen stopper den. Tallet du oppgir, er tiden mellom <em>starten</em> på hvert kall &mdash; ikke tiden mellom at ett blir ferdig og det neste begynner.</p>' +
        '<p>Så lenge arbeidet er raskere enn intervallet, merker du ikke forskjellen. Er det tregere, gjør du det. Med et intervall på 10 millisekunder og en jobb som tar 30, lå de målte starttidene rundt 10, 40, 70 og 100 millisekunder. Nettleseren stabler dem ikke opp, men den kan heller ikke gå fortere enn arbeidet tillater, og avstanden du ba om finnes ikke lenger.</p>' +
        '<p>Når avstanden faktisk betyr noe, er en <code>setTimeout</code> som planlegger seg selv på nytt et bedre valg. Da måles pausen fra da forrige runde ble ferdig, og den blir aldri kortere enn du ba om.</p>',

      's.min.t': 'Tallet er et gulv, ikke et løfte',
      's.min.d':
        '<p>Fire ting kan komme mellom deg og tidspunktet du ba om, og de er verdt å kjenne alle fire.</p>' +
        '<p>Den første er tråden. En timer kan ikke kjøre mens noe annet holder den opptatt. Blokkerer du i 120 millisekunder, kjører en timer satt til 10 først etter 121 &mdash; målt.</p>' +
        '<p>Den andre er køen fra leksjon 7. Alle ventende løfter kjøres før neste timer får slippe til, uansett hvor lenge timeren har ventet.</p>' +
        '<p>Den tredje er en regel i selve nettleseren: har en timer satt en ny timer mer enn fem ganger på rad, blir gulvet 4 millisekunder i stedet for 0. En løkke bygget på <code>setTimeout(fn, 0)</code> går altså ikke så fort du kanskje trodde. Merk at telleren følger kjeden av timere, ikke koden din: i en side som allerede har kjørt timere, kan du treffe gulvet med én gang.</p>' +
        '<p>Den fjerde er fanen. Ligger siden i bakgrunnen, strupes timere til omtrent ett kall i sekundet. Noe som teller ned eller animerer, må derfor lese klokken i stedet for å telle runder.</p>',

      's.this.t': 'Timeren mister punktumet',
      's.this.d':
        '<p>En timer kaller funksjonen din helt rett fram. Sender du inn en metode, er punktumet borte i det øyeblikket du sendte den, nøyaktig som i forrige leksjon.</p>' +
        '<p><code>setTimeout(teller.les, 0)</code> kaller altså funksjonen uten objektet sitt &mdash; en <code>TypeError</code> i en modul, og en lesning fra <code>window</code> i et klassisk skript, med forbeholdet fra forrige leksjon. Pakk kallet i en pil, eller bind metoden. Pilen er som regel det klareste, fordi den ser ut som kallet du faktisk mente.</p>',

      's.debounce.t': 'De to mønstrene du kommer til å skrive',
      's.debounce.d':
        '<p>Nesten alt folk bruker timere til i praksis, er en av disse to.</p>' +
        '<p>Det første venter til det blir stille. Hver gang noe skjer, avlyser du den forrige timeren og setter en ny. Først når det har gått 300 millisekunder uten en ny hendelse, kjører kallet. Det er dette du vil ha på et søkefelt: én forespørsel når brukeren er ferdig å skrive, ikke én per tastetrykk.</p>' +
        '<p>Det andre setter en øvre grense i stedet. Første hendelse slipper igjennom, og så ignoreres alt til tiden har gått. Det er dette du vil ha på rulling eller vindusendring: jevn oppdatering, uten å gjøre jobben hundre ganger i sekundet.</p>' +
        '<p>Forskjellen er verdt å holde fra hverandre. Det første svarer til slutt, det andre svarer med én gang og så sjeldnere.</p>',

      's.cleanup.t': 'Å rydde opp etter seg',
      's.cleanup.d':
        '<p>En <code>setInterval</code> stopper aldri av seg selv. Forsvinner elementet den oppdaterte, fortsetter den likevel &mdash; den vet ingenting om siden din.</p>' +
        '<p>Og den holder på mer enn seg selv. Lukningen i leksjon 9 gjelder her også: så lenge timeren finnes, kan funksjonen nås, og alt funksjonen kan nå, må bli liggende i minnet. En glemt timer holder liv i hele komponenten den kom fra.</p>' +
        '<p>Regelen er enkel: den som setter en timer, rydder den opp. Sett id-en til side der du satte den, og fjern den når det den jobbet for er borte.</p>',

      's.note':
        '<p>Kortversjonen. Forsinkelsen er et gulv, ikke et tidspunkt: tråden, løftekøen, 4-millisekundersgulvet og bakgrunnsstruping kommer alle imellom. <code>setInterval</code> måler fra start til start &mdash; en <code>setTimeout</code> som planlegger seg selv, er tryggere. Timere mister <code>this</code>. <code>clearTimeout</code> tåler hva som helst. Og en timer du ikke rydder opp, holder på minnet for alltid.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'setTimeout, setInterval',
      kicker: 'Lesson 10 &middot; Javascript',
      title: 'setTimeout, setInterval',
      lead: 'Two functions that look as though they promise you a moment in time. They do not — they put you in a queue, and you met that queue in lesson 7.',

      's.timeout.t': 'Once, later',
      's.timeout.d':
        '<p><code>setTimeout</code> takes a function and a number of milliseconds, and calls the function once at least that long has passed. It returns an id you can cancel with.</p>' +
        '<p>Anything you write after the delay is passed on to the function as arguments. It is a tidy way to avoid an extra closure when all you want is to hand it a value.</p>' +
        '<p>It also accepts a string instead of a function and runs it as code. That is <code>eval</code> in disguise, with everything that implies — no tooling understands it, and whatever ends up in the string gets executed. Never write that form.</p>',

      's.clear.t': 'Cancelling',
      's.clear.d':
        '<p><code>clearTimeout</code> takes the id and stops the timer, if it has not already run.</p>' +
        '<p>It is pleasantly forgiving: an unknown id, or <code>undefined</code>, does nothing at all. So you never need to check whether a timer exists before removing it, and that is what makes the debouncing pattern below as short as it is.</p>',

      's.interval.t': 'Again and again, roughly',
      's.interval.d':
        '<p><code>setInterval</code> repeats until somebody stops it. The number you give is the time between the <em>starts</em> of each call — not the time between one finishing and the next beginning.</p>' +
        '<p>While the work is faster than the interval you never notice the difference. When it is slower, you do. With an interval of 10 milliseconds and a job taking 30, the measured start times were around 10, 40, 70 and 100 milliseconds. The browser will not stack them up, but it cannot go faster than the work allows either, and the gap you asked for is gone.</p>' +
        '<p>When the gap actually matters, a <code>setTimeout</code> that reschedules itself is the better choice. Then the pause is measured from the moment the last round finished, and it is never shorter than you asked for.</p>',

      's.min.t': 'The number is a floor, not a promise',
      's.min.d':
        '<p>Four things can come between you and the moment you asked for, and all four are worth knowing.</p>' +
        '<p>The first is the thread. A timer cannot run while something else is keeping it busy. Block for 120 milliseconds and a timer set for 10 runs at 121 — measured.</p>' +
        '<p>The second is the queue from lesson 7. Every waiting promise runs before the next timer gets a turn, however long that timer has been waiting.</p>' +
        '<p>The third is a rule in the browser itself: once a timer has set another timer more than five times in a row, the floor becomes 4 milliseconds instead of 0. A loop built on <code>setTimeout(fn, 0)</code> therefore does not run as fast as you might have assumed. Note that the counter follows the chain of timers rather than your code: in a page that has already been running timers you can hit the floor immediately.</p>' +
        '<p>The fourth is the tab. With the page in the background, timers are throttled to roughly one call a second. Anything counting down or animating must therefore read the clock rather than count turns.</p>',

      's.this.t': 'The timer loses the dot',
      's.this.d':
        '<p>A timer calls your function perfectly plainly. Hand it a method and the dot was already gone the moment you passed it, exactly as in the previous lesson.</p>' +
        '<p><code>setTimeout(counter.read, 0)</code> therefore calls the function without its object — a <code>TypeError</code> in a module, and a read from <code>window</code> in a classic script, with the caveat from the previous lesson. Wrap the call in an arrow, or bind the method. The arrow is usually clearest, because it looks like the call you actually meant.</p>',

      's.debounce.t': 'The two patterns you will write',
      's.debounce.d':
        '<p>Almost everything people use timers for in practice is one of these two.</p>' +
        '<p>The first waits for quiet. Every time something happens you cancel the previous timer and set a new one. Only once 300 milliseconds have passed with no new event does the call run. This is what you want on a search field: one request when the user has finished typing, not one per keystroke.</p>' +
        '<p>The second sets an upper limit instead. The first event goes through, and then everything is ignored until the time is up. This is what you want on scrolling or resizing: steady updates, without doing the work a hundred times a second.</p>' +
        '<p>The difference is worth keeping straight. The first answers at the end; the second answers immediately and then less often.</p>',

      's.cleanup.t': 'Clearing up after yourself',
      's.cleanup.d':
        '<p>A <code>setInterval</code> never stops on its own. If the element it was updating disappears, it carries on regardless — it knows nothing about your page.</p>' +
        '<p>And it holds on to more than itself. The closure from lesson 9 applies here too: as long as the timer exists, the function can be reached, and everything the function can reach has to stay in memory. A forgotten timer keeps the whole component it came from alive.</p>' +
        '<p>The rule is simple: whoever sets a timer clears it. Keep the id where you set it, and remove it when whatever it was working for has gone.</p>',

      's.note':
        '<p>The short version. The delay is a floor, not a moment: the thread, the promise queue, the 4 millisecond floor and background throttling all come in between. <code>setInterval</code> measures start to start — a self-rescheduling <code>setTimeout</code> is safer. Timers lose <code>this</code>. <code>clearTimeout</code> tolerates anything. And a timer you do not clear holds on to memory forever.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'setTimeout, setInterval',
      kicker: 'Урок 10 &middot; Javascript',
      title: 'setTimeout, setInterval',
      lead: 'Дві функції, які ніби обіцяють вам певну мить. Насправді ні — вони ставлять вас у чергу, і цю чергу ви бачили в уроці 7.',

      's.timeout.t': 'Один раз, згодом',
      's.timeout.d':
        '<p><code>setTimeout</code> приймає функцію і кількість мілісекунд і викликає функцію, коли мине щонайменше стільки часу. Він повертає ідентифікатор, яким виклик можна скасувати.</p>' +
        '<p>Усе, що ви напишете після затримки, передається функції як аргументи. Це охайний спосіб обійтися без зайвого замикання, коли треба лише передати їй значення.</p>' +
        '<p>Він також приймає рядок замість функції і виконує його як код. Це <code>eval</code> у масці, з усіма наслідками: жоден інструмент його не розуміє, а все, що потрапить у рядок, буде виконано. Ніколи не пишіть цю форму.</p>',

      's.clear.t': 'Скасувати',
      's.clear.d':
        '<p><code>clearTimeout</code> приймає ідентифікатор і спиняє таймер, якщо той ще не спрацював.</p>' +
        '<p>Він приємно поблажливий: невідомий ідентифікатор або <code>undefined</code> не робить нічого. Тож вам ніколи не треба перевіряти, чи таймер існує, перш ніж його прибирати, — саме тому шаблон із розділу про придушення такий короткий.</p>',

      's.interval.t': 'Знову і знову, приблизно',
      's.interval.d':
        '<p><code>setInterval</code> повторює, доки хтось не спинить. Число, яке ви задаєте, — це час між <em>початками</em> викликів, а не між завершенням одного і початком наступного.</p>' +
        '<p>Поки робота швидша за інтервал, різниці ви не помічаєте. Коли повільніша — помічаєте. З інтервалом у 10 мілісекунд і роботою на 30 виміряні моменти старту були близько 10, 40, 70 і 100 мілісекунд. Браузер не складає їх у стос, але й швидше, ніж дозволяє робота, піти не може, і проміжку, про який ви просили, більше немає.</p>' +
        '<p>Коли проміжок справді важить, кращий вибір — <code>setTimeout</code>, який перепризначає себе. Тоді паузу відлічують від моменту завершення попереднього оберту, і вона ніколи не буває коротшою, ніж ви просили.</p>',

      's.min.t': 'Число — це підлога, а не обіцянка',
      's.min.d':
        '<p>Між вами і бажаною миттю можуть стати чотири речі, і всі чотири варто знати.</p>' +
        '<p>Перша — потік. Таймер не може виконатися, поки його зайняте щось інше. Заблокуйте на 120 мілісекунд — і таймер, заданий на 10, спрацює на 121-й. Виміряно.</p>' +
        '<p>Друга — черга з уроку 7. Усі обіцянки, що чекають, виконаються раніше, ніж черга дійде до наступного таймера, хоч би скільки той чекав.</p>' +
        '<p>Третя — правило самого браузера: щойно таймер задав інший таймер понад п’ять разів поспіль, підлога стає 4 мілісекунди замість 0. Тож цикл, збудований на <code>setTimeout(fn, 0)</code>, не такий швидкий, як ви могли гадати. Зверніть увагу: лічильник іде за ланцюжком таймерів, а не за вашим кодом — на сторінці, де таймери вже працювали, ви можете натрапити на підлогу одразу.</p>' +
        '<p>Четверта — вкладка. Коли сторінка у фоні, таймери притлумлюють приблизно до одного виклику на секунду. Тому все, що веде відлік чи анімує, має читати годинник, а не рахувати оберти.</p>',

      's.this.t': 'Таймер губить крапку',
      's.this.d':
        '<p>Таймер викликає вашу функцію цілком просто. Передасте метод — і крапки вже не було тієї миті, коли ви його передали, точно як у попередньому уроці.</p>' +
        '<p><code>setTimeout(counter.read, 0)</code> тому викликає функцію без її об’єкта — <code>TypeError</code> у модулі і читання з <code>window</code> у класичному скрипті, із застереженням з попереднього уроку. Загорніть виклик у стрілку або прив’яжіть метод. Стрілка зазвичай найясніша, бо виглядає як той виклик, який ви справді мали на увазі.</p>',

      's.debounce.t': 'Два шаблони, які ви писатимете',
      's.debounce.d':
        '<p>Майже все, для чого люди на практиці вживають таймери, є одним із цих двох.</p>' +
        '<p>Перший чекає на тишу. Щоразу, коли щось стається, ви скасовуєте попередній таймер і ставите новий. І лише коли мине 300 мілісекунд без нової події, виклик спрацює. Саме це потрібно для поля пошуку: один запит, коли користувач договорив, а не один на кожне натискання.</p>' +
        '<p>Другий натомість ставить верхню межу. Перша подія проходить, а далі все ігнорується, доки не мине час. Саме це потрібно для прокручування чи зміни розміру вікна: рівні оновлення без того, щоб робити роботу сто разів на секунду.</p>' +
        '<p>Цю різницю варто тримати в голові. Перший відповідає наприкінці, другий відповідає одразу, а потім рідше.</p>',

      's.cleanup.t': 'Прибрати за собою',
      's.cleanup.d':
        '<p><code>setInterval</code> ніколи не спиняється сам. Якщо елемент, який він оновлював, зникне, він однаково працюватиме далі — про вашу сторінку він нічого не знає.</p>' +
        '<p>І тримає він більше, ніж себе. Замикання з уроку 9 діє й тут: доки таймер існує, до функції можна дотягнутися, а все, до чого може дотягнутися функція, мусить лишатися в пам’яті. Забутий таймер тримає живим цілий компонент, з якого походить.</p>' +
        '<p>Правило просте: хто поставив таймер, той його і прибирає. Тримайте ідентифікатор там, де ви його задали, і прибирайте таймер, коли зникне те, заради чого він працював.</p>',

      's.note':
        '<p>Коротко. Затримка — це підлога, а не мить: між вами і нею стають потік, черга обіцянок, підлога в 4 мілісекунди і притлумлення у фоні. <code>setInterval</code> міряє від старту до старту — безпечніший <code>setTimeout</code>, що перепризначає себе. Таймери гублять <code>this</code>. <code>clearTimeout</code> витримає будь-що. А таймер, якого ви не прибрали, тримає пам’ять назавжди.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du kaller <code>setTimeout(fn, 10)</code> og blokkerer så tråden i 120 ms. Når kjører <code>fn</code>?',
        answer: 2,
        options: [
          {
            text: 'Etter 10 ms &mdash; timere kjører parallelt.',
            why: 'Det finnes bare én tråd (leksjon 7). Ingenting kan kjøre mens den er opptatt.',
          },
          {
            text: 'Den kjører ikke, fordi den ble overkjørt.',
            why: 'Den går ikke tapt. Den venter bare på tur.',
          },
          {
            text: 'Etter rundt 120 ms &mdash; tallet er et gulv, ikke et tidspunkt.',
            why: 'Målt: 121 ms. Timeren var klar etter 10, men måtte vente til tråden ble ledig. Det er derfor en forsinkelse aldri kan garanteres.',
          },
          {
            text: 'Umiddelbart etter at blokkeringen begynner.',
            why: 'Blokkeringen er nettopp det som hindrer den i å kjøre.',
          },
        ],
      },
      {
        q: '<code>setInterval(fn, 10)</code>, og <code>fn</code> bruker 30 ms hver gang. Hvor ofte kjører den?',
        answer: 1,
        options: [
          {
            text: 'Hvert 10. ms &mdash; kallene hoper seg opp.',
            why: 'Nettleseren lar dem ikke stable seg. Den venter til den forrige er ferdig.',
          },
          {
            text: 'Omtrent hvert 30. ms &mdash; den kan ikke gå fortere enn arbeidet.',
            why: 'Målte starttider: rundt 10, 40, 70, 100 ms. Intervallet du ba om er borte, fordi jobben selv tar lengre tid enn pausen.',
          },
          {
            text: 'Hvert 40. ms &mdash; 10 pluss 30.',
            why: 'Det ville vært en <code>setTimeout</code> som planlegger seg selv etter at jobben er ferdig. <code>setInterval</code> måler fra start til start.',
          },
          {
            text: 'Én gang, og så stopper den.',
            why: 'Den fortsetter til noen kaller <code>clearInterval</code>.',
          },
        ],
      },
      {
        q: 'Hva gir <code>setTimeout(teller.les, 0)</code>, når <code>les()</code> returnerer <code>this.navn</code>?',
        answer: 0,
        options: [
          {
            text: 'Punktumet er borte, så <code>this</code> er ikke <code>teller</code>.',
            why: 'Du sendte funksjonen alene, og timeren kaller den rett fram (leksjon 9). Skriv <code>() =&gt; teller.les()</code> eller <code>teller.les.bind(teller)</code>.',
          },
          {
            text: '<code>this</code> blir timeren selv.',
            why: 'Timeren setter ingen binding. Den kaller bare funksjonen.',
          },
          {
            text: 'Det virker, fordi metoden husker objektet sitt.',
            why: 'En metode husker ingenting. Bindingen lå i punktumet ved kallet.',
          },
          {
            text: 'En SyntaxError.',
            why: 'Koden er helt gyldig. Den gjør bare noe annet enn du ville.',
          },
        ],
      },
      {
        q: 'Du bygger en løkke med <code>setTimeout(fn, 0)</code> som setter en ny for hver runde. Hvor raskt går den?',
        answer: 3,
        options: [
          {
            text: 'Uten pause &mdash; 0 betyr 0.',
            why: 'De første rundene er raske, men det varer ikke.',
          },
          {
            text: 'Én runde per sekund.',
            why: 'Det er strupingen i en bakgrunnsfane, ikke i en synlig.',
          },
          {
            text: 'Én runde per bilde på skjermen.',
            why: 'Det ville vært <code>requestAnimationFrame</code>. Timere er ikke knyttet til oppfriskningen.',
          },
          {
            text: 'Raskt de første fem rundene, så minst 4 ms per runde.',
            why: 'Nettleseren setter et gulv på 4 ms når en timer har satt en ny timer mer enn fem ganger på rad. Telleren følger kjeden av timere, så i en side som allerede kjører timere kan gulvet slå inn med én gang.',
          },
        ],
      },
      {
        q: 'Hvorfor er <code>clearTimeout(id)</code> trygt selv når <code>id</code> er <code>undefined</code>?',
        answer: 1,
        options: [
          {
            text: 'Fordi <code>undefined</code> er en gyldig id.',
            why: 'Den er ikke en id i det hele tatt. Poenget er hva funksjonen gjør med noe den ikke kjenner.',
          },
          {
            text: 'Fordi en ukjent id bare ignoreres.',
            why: 'Det er derfor debounce-mønsteret kan kalle <code>clearTimeout</code> før det i det hele tatt finnes en timer, uten en eneste sjekk.',
          },
          {
            text: 'Fordi den kaster en feil du kan fange.',
            why: 'Den kaster ikke. Den gjør ingenting.',
          },
          {
            text: 'Det er ikke trygt &mdash; du må sjekke først.',
            why: 'Sjekken er unødvendig, og koden blir bare lengre av den.',
          },
        ],
      },
      {
        q: 'Et element fjernes fra siden, men <code>setInterval</code>-en som oppdaterte det, ble aldri stoppet. Hva er konsekvensen?',
        answer: 2,
        options: [
          {
            text: 'Ingenting &mdash; timeren stopper når elementet forsvinner.',
            why: 'Timeren vet ingenting om DOM-en. Den fortsetter uansett.',
          },
          {
            text: 'Den kaster en feil ved neste runde.',
            why: 'Den kan gjøre det, men det er ikke hovedproblemet, og ofte gjør den ikke det heller.',
          },
          {
            text: 'Den kjører videre og holder alt lukningen når på, i minnet.',
            why: 'Så lenge timeren finnes, kan funksjonen nås, og alt den kan nå må bli liggende (leksjon 9). Komponenten frigjøres aldri. Den som setter en timer, må rydde den opp.',
          },
          {
            text: 'Nettleseren rydder den opp etter et minutt.',
            why: 'Ingen rydder den opp. Den lever så lenge fanen gjør.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You call <code>setTimeout(fn, 10)</code> and then block the thread for 120 ms. When does <code>fn</code> run?',
        answer: 2,
        options: [
          {
            text: 'After 10 ms — timers run in parallel.',
            why: 'There is only one thread (lesson 7). Nothing can run while it is busy.',
          },
          {
            text: 'It does not run, because it was overtaken.',
            why: 'It is not lost. It is simply waiting its turn.',
          },
          {
            text: 'After about 120 ms — the number is a floor, not a moment.',
            why: 'Measured: 121 ms. The timer was ready after 10 but had to wait for the thread to be free. Which is why a delay can never be guaranteed.',
          },
          {
            text: 'Immediately after the blocking starts.',
            why: 'The blocking is precisely what stops it running.',
          },
        ],
      },
      {
        q: '<code>setInterval(fn, 10)</code>, and <code>fn</code> takes 30 ms each time. How often does it run?',
        answer: 1,
        options: [
          {
            text: 'Every 10 ms — the calls pile up.',
            why: 'The browser does not let them stack. It waits for the previous one to finish.',
          },
          {
            text: 'About every 30 ms — it cannot go faster than the work.',
            why: 'Measured start times: around 10, 40, 70, 100 ms. The interval you asked for is gone, because the job itself takes longer than the pause.',
          },
          {
            text: 'Every 40 ms — 10 plus 30.',
            why: 'That would be a <code>setTimeout</code> rescheduling itself after the job finishes. <code>setInterval</code> measures start to start.',
          },
          {
            text: 'Once, and then it stops.',
            why: 'It continues until somebody calls <code>clearInterval</code>.',
          },
        ],
      },
      {
        q: 'What does <code>setTimeout(counter.read, 0)</code> give, when <code>read()</code> returns <code>this.name</code>?',
        answer: 0,
        options: [
          {
            text: 'The dot is gone, so <code>this</code> is not <code>counter</code>.',
            why: 'You passed the function alone, and the timer calls it plainly (lesson 9). Write <code>() =&gt; counter.read()</code> or <code>counter.read.bind(counter)</code>.',
          },
          {
            text: '<code>this</code> becomes the timer itself.',
            why: 'The timer sets no binding. It simply calls the function.',
          },
          {
            text: 'It works, because the method remembers its object.',
            why: 'A method remembers nothing. The binding was in the dot at the call.',
          },
          {
            text: 'A SyntaxError.',
            why: 'The code is perfectly valid. It just does something other than you wanted.',
          },
        ],
      },
      {
        q: 'You build a loop out of <code>setTimeout(fn, 0)</code>, each turn setting the next. How fast does it go?',
        answer: 3,
        options: [
          {
            text: 'With no pause — 0 means 0.',
            why: 'The first few turns are fast, but it does not last.',
          },
          {
            text: 'One turn a second.',
            why: 'That is the throttling in a background tab, not a visible one.',
          },
          {
            text: 'One turn per frame on screen.',
            why: 'That would be <code>requestAnimationFrame</code>. Timers are not tied to the refresh.',
          },
          {
            text: 'Fast for the first five turns, then at least 4 ms each.',
            why: 'The browser applies a floor of 4 ms once a timer has set another timer more than five times in a row. The counter follows the chain of timers, so in a page already running timers the floor can apply straight away.',
          },
        ],
      },
      {
        q: 'Why is <code>clearTimeout(id)</code> safe even when <code>id</code> is <code>undefined</code>?',
        answer: 1,
        options: [
          {
            text: 'Because <code>undefined</code> is a valid id.',
            why: 'It is not an id at all. The point is what the function does with something it does not recognise.',
          },
          {
            text: 'Because an unknown id is simply ignored.',
            why: 'Which is why the debounce pattern can call <code>clearTimeout</code> before any timer exists, with no check at all.',
          },
          {
            text: 'Because it throws an error you can catch.',
            why: 'It does not throw. It does nothing.',
          },
          {
            text: 'It is not safe — you have to check first.',
            why: 'The check is unnecessary, and only makes the code longer.',
          },
        ],
      },
      {
        q: 'An element is removed from the page, but the <code>setInterval</code> updating it was never stopped. What follows?',
        answer: 2,
        options: [
          {
            text: 'Nothing — the timer stops when the element disappears.',
            why: 'The timer knows nothing about the DOM. It carries on regardless.',
          },
          {
            text: 'It throws an error on the next turn.',
            why: 'It might, but that is not the main problem, and often it does not.',
          },
          {
            text: 'It keeps running and holds everything the closure can reach in memory.',
            why: 'As long as the timer exists the function can be reached, and everything it can reach has to stay (lesson 9). The component is never freed. Whoever sets a timer must clear it.',
          },
          {
            text: 'The browser cleans it up after a minute.',
            why: 'Nobody cleans it up. It lives as long as the tab does.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви викликаєте <code>setTimeout(fn, 10)</code>, а потім блокуєте потік на 120 мс. Коли виконається <code>fn</code>?',
        answer: 2,
        options: [
          {
            text: 'Через 10 мс — таймери працюють паралельно.',
            why: 'Потік лише один (урок 7). Ніщо не може виконуватися, поки він зайнятий.',
          },
          {
            text: 'Вона не виконається, бо її обійшли.',
            why: 'Вона не губиться. Вона просто чекає своєї черги.',
          },
          {
            text: 'Приблизно через 120 мс — число є підлогою, а не миттю.',
            why: 'Виміряно: 121 мс. Таймер був готовий через 10, але мусив чекати, доки звільниться потік. Саме тому затримку неможливо гарантувати.',
          },
          {
            text: 'Одразу після початку блокування.',
            why: 'Саме блокування й не дає їй виконатися.',
          },
        ],
      },
      {
        q: '<code>setInterval(fn, 10)</code>, і <code>fn</code> щоразу триває 30 мс. Як часто вона виконується?',
        answer: 1,
        options: [
          {
            text: 'Кожні 10 мс — виклики накопичуються.',
            why: 'Браузер не дає їм складатися в стос. Він чекає, доки завершиться попередній.',
          },
          {
            text: 'Приблизно кожні 30 мс — швидше за роботу він не може.',
            why: 'Виміряні моменти старту: близько 10, 40, 70, 100 мс. Інтервалу, про який ви просили, немає, бо сама робота триває довше за паузу.',
          },
          {
            text: 'Кожні 40 мс — 10 плюс 30.',
            why: 'Це був би <code>setTimeout</code>, що перепризначає себе після завершення роботи. <code>setInterval</code> міряє від старту до старту.',
          },
          {
            text: 'Один раз, і потім спиниться.',
            why: 'Він триває, доки хтось не викличе <code>clearInterval</code>.',
          },
        ],
      },
      {
        q: 'Що дасть <code>setTimeout(counter.read, 0)</code>, якщо <code>read()</code> повертає <code>this.name</code>?',
        answer: 0,
        options: [
          {
            text: 'Крапки немає, тож <code>this</code> не є <code>counter</code>.',
            why: 'Ви передали саму функцію, і таймер викликає її просто (урок 9). Пишіть <code>() =&gt; counter.read()</code> або <code>counter.read.bind(counter)</code>.',
          },
          {
            text: '<code>this</code> стане самим таймером.',
            why: 'Таймер не задає жодної прив’язки. Він просто викликає функцію.',
          },
          {
            text: 'Спрацює, бо метод пам’ятає свій об’єкт.',
            why: 'Метод не пам’ятає нічого. Прив’язка була в крапці під час виклику.',
          },
          {
            text: 'SyntaxError.',
            why: 'Код цілком дійсний. Він просто робить не те, чого ви хотіли.',
          },
        ],
      },
      {
        q: 'Ви будуєте цикл із <code>setTimeout(fn, 0)</code>, де кожен оберт задає наступний. Наскільки швидко він іде?',
        answer: 3,
        options: [
          {
            text: 'Без пауз — 0 означає 0.',
            why: 'Перші кілька обертів швидкі, але це ненадовго.',
          },
          {
            text: 'Один оберт на секунду.',
            why: 'Це притлумлення у фоновій вкладці, а не у видимій.',
          },
          {
            text: 'Один оберт на кадр екрана.',
            why: 'Це був би <code>requestAnimationFrame</code>. Таймери не прив’язані до оновлення екрана.',
          },
          {
            text: 'Швидко перші п’ять обертів, далі щонайменше по 4 мс.',
            why: 'Браузер застосовує підлогу в 4 мс, щойно таймер задав інший таймер понад п’ять разів поспіль. Лічильник іде за ланцюжком таймерів, тож на сторінці, де таймери вже працюють, підлога може подіяти одразу.',
          },
        ],
      },
      {
        q: 'Чому <code>clearTimeout(id)</code> безпечний навіть тоді, коли <code>id</code> є <code>undefined</code>?',
        answer: 1,
        options: [
          {
            text: 'Бо <code>undefined</code> є дійсним ідентифікатором.',
            why: 'Він узагалі не є ідентифікатором. Річ у тім, що функція робить із чимось, чого не впізнає.',
          },
          {
            text: 'Бо невідомий ідентифікатор просто ігнорується.',
            why: 'Саме тому шаблон придушення може викликати <code>clearTimeout</code> ще до того, як з’явиться бодай один таймер, без жодної перевірки.',
          },
          {
            text: 'Бо він кидає помилку, яку можна зловити.',
            why: 'Він не кидає. Він не робить нічого.',
          },
          {
            text: 'Він не безпечний — треба спершу перевірити.',
            why: 'Перевірка зайва і лише подовжує код.',
          },
        ],
      },
      {
        q: 'Елемент прибрали зі сторінки, але <code>setInterval</code>, що його оновлював, так і не спинили. Які наслідки?',
        answer: 2,
        options: [
          {
            text: 'Ніяких — таймер спиниться, коли зникне елемент.',
            why: 'Таймер нічого не знає про DOM. Він однаково працює далі.',
          },
          {
            text: 'На наступному оберті буде помилка.',
            why: 'Може бути, але це не головна проблема, та й часто помилки не буде.',
          },
          {
            text: 'Він працює далі й тримає в пам’яті все, до чого дотягується замикання.',
            why: 'Доки таймер існує, до функції можна дотягнутися, а все, до чого дотягується вона, мусить лишатися (урок 9). Компонент ніколи не звільниться. Хто ставить таймер, той його й прибирає.',
          },
          {
            text: 'Браузер прибере його за хвилину.',
            why: 'Його не прибере ніхто. Він живе, доки живе вкладка.',
          },
        ],
      },
    ],
  },
});
