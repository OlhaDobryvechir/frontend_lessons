/*
 * Content of JS lesson 07 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson pays off the await used pragmatically in lesson 6.
 * Timers get their own lesson (10), which revisits the event loop.
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Asynkrone funksjoner, Promise, async, await',
      kicker: 'Leksjon 7 &middot; Javascript',
      title: 'Asynkrone funksjoner, Promise, async, await',
      lead: 'Forrige leksjon brukte <code>await</code> uten å forklare det. Her er forklaringen — og grunnen til at språket i det hele tatt trengte den.',

      's.thread.t': 'Én tråd, og alt må dele på den',
      's.thread.d':
        '<p>Javascript i en nettleser kjører på én tråd. Den tegner siden, behandler klikk og kjører koden din &mdash; én ting om gangen.</p>' +
        '<p>Det betyr at enhver linje som venter, stopper alt. En løkke som aldri blir ferdig, fryser ikke bare skriptet, men hele fanen: knapper svarer ikke, animasjoner står stille, teksten kan ikke merkes.</p>' +
        '<p>Derfor er det ingenting i nettleseren som lar deg vente på nettverket. Det finnes ikke et kall som «henter en side og gir deg svaret»; det finnes bare kall som setter noe i gang og gir deg en kvittering. Asynkron kode er ikke en avansert teknikk her &mdash; det er den eneste tilgjengelige.</p>',

      's.promise.t': 'En verdi som ikke er kommet ennå',
      's.promise.d':
        '<p>Et <code>Promise</code> er den kvitteringen. Det er et objekt du får med én gang, som til slutt kommer til å inneholde enten et svar eller en grunn til at det ikke ble noe svar.</p>' +
        '<p>Det har tre tilstander: ventende, oppfylt eller avvist. Og det avgjøres nøyaktig én gang. Kaller du <code>resolve</code> to ganger, gjelder den første; kaller du <code>reject</code> etterpå, skjer det ingenting. Et løfte som er gitt, kan ikke tas tilbake, og det er nettopp derfor du kan gi det videre uten å bekymre deg.</p>' +
        '<p>Du kommer sjelden til å skrive <code>new Promise</code> selv. <code>fetch</code>, tidtakere og de fleste biblioteker gir deg ferdige. Det du trenger, er å vite hva du har fått.</p>',

      's.then.t': 'Den opprinnelige formen',
      's.then.d':
        '<p><code>.then()</code> sier: når dette er klart, kjør denne funksjonen med resultatet. <code>.catch()</code> sier det samme for feil, og <code>.finally()</code> kjører uansett.</p>' +
        '<p>Det som gjør formen brukbar, er at hver <code>.then()</code> selv returnerer et nytt løfte. Returnerer du en verdi inne i den, blir den verdien inndata til neste ledd; returnerer du et nytt løfte, venter kjeden på det. Slik blir flere steg til én lesbar rekke i stedet for funksjoner inni funksjoner.</p>' +
        '<p>Du vil se denne formen overalt i eksisterende kode, og den er fortsatt riktig i korte kjeder. Til alt annet finnes det en form som leser bedre.</p>',

      's.async.t': 'Det samme, skrevet flatt',
      's.async.d':
        '<p><code>await</code> pauser funksjonen den står i, til løftet er avgjort, og gir deg verdien. Resten av siden kjører videre mens den venter &mdash; det er ikke tråden som stopper, bare denne ene funksjonen.</p>' +
        '<p>Til gjengjeld må funksjonen merkes <code>async</code>, og da returnerer den alltid et løfte. Skriver du <code>return 1</code>, får den som kaller ikke <code>1</code>, men et løfte som til slutt gir <code>1</code>. Det er ikke en detalj: en <code>async</code>-funksjon kan aldri gi deg et svar med én gang, uansett hvor lite den gjør.</p>' +
        '<p><code>await</code> virker også på ting som ikke er løfter i det hele tatt. <code>await 42</code> gir 42. Det gjør det trygt å vente på noe som noen ganger er et løfte og noen ganger ikke.</p>' +
        '<p>Og nøkkelordet finnes bare inne i en <code>async</code>-funksjon &mdash; eller helt øverst i en modul. Skriver du det andre steder, er det en syntaksfeil, ikke en feil ved kjøring.</p>',

      's.error.t': 'Feil som blir avvisninger',
      's.error.d':
        '<p>Kaster du inne i en <code>async</code>-funksjon, blir det ikke et unntak den som kalte kan fange med en gang. Det blir et avvist løfte.</p>' +
        '<p>Det høres ut som en komplikasjon og er en forenkling: siden <code>await</code> kaster på nytt når løftet er avvist, kan du bruke helt vanlig <code>try</code> og <code>catch</code> rundt asynkron kode. Én feilhåndtering for begge deler.</p>' +
        '<p>Den ene fellen er løfter ingen ser på. Kaller du en <code>async</code>-funksjon uten <code>await</code> og uten <code>.catch()</code>, og den feiler, har du en avvisning uten mottaker. Nettleseren logger den i konsollen og går videre &mdash; koden din merker ingenting, og brukeren får aldri beskjed. Enten vent på kallet, eller fest en <code>.catch()</code> på det.</p>',

      's.all.t': 'Å vente på flere ting samtidig',
      's.all.d':
        '<p>Den vanligste ytelsesfeilen i moderne frontend er én linje: <code>await</code> inne i en løkke.</p>' +
        '<p>Hvert kall venter på det forrige, selv når de ikke har noe med hverandre å gjøre. Tre uavhengige kall på 40 millisekunder hver tar da 120. Starter du dem samtidig og venter på alle tre, tar det 40.</p>' +
        '<p><code>Promise.all</code> gjør nettopp det: den tar en liste med løfter, venter til alle er ferdige, og gir deg svarene i samme rekkefølge som du ga dem inn. Går ett galt, avvises hele med én gang.</p>' +
        '<p>Er det ikke ønsket, finnes <code>allSettled</code>, som aldri avvises og gir deg en status for hvert enkelt. <code>race</code> gir deg det første som blir ferdig uansett utfall, og <code>any</code> det første som lykkes.</p>' +
        '<p>Men vær ærlig om avhengighetene: trenger kall nummer to virkelig svaret fra det første, hører de hjemme etter hverandre. <code>Promise.all</code> er for de gangene rekkefølgen aldri betydde noe.</p>',

      's.loop.t': 'Hvem som får slippe til, og når',
      's.loop.d':
        '<p>Når tråden er ledig, henter den nye oppgaver fra to køer, og den ene har alltid forrang.</p>' +
        '<p>Først kjøres all synkron kode ferdig. Så tømmes mikrooppgavekøen, der løftene ligger &mdash; hele veien, også nye som legges til underveis. Først når den er helt tom, får neste tidtaker en tur.</p>' +
        '<p>Det er derfor <code>setTimeout(fn, 0)</code> ikke betyr «nå». Det betyr «etter alt som allerede står i kø, inkludert alle løfter». Et løfte som ble opprettet etter din tidtaker, kjører likevel før den.</p>' +
        '<p>Du trenger sjelden dette til daglig. Du trenger det den dagen to ting skjer i en rekkefølge du ikke hadde ventet, og du vil vite hvorfor.</p>',

      's.note':
        '<p>Kortversjonen. Én tråd, så ingenting får blokkere. Et løfte er en kvittering som avgjøres én gang. <code>async</code> returnerer alltid et løfte, og <code>await</code> pauser bare sin egen funksjon. Bruk <code>try/catch</code>, og la aldri et løfte ligge uten <code>await</code> eller <code>.catch()</code>. <code>await</code> i en løkke er sekvensielt &mdash; bruk <code>Promise.all</code> når kallene er uavhengige. Og løfter kjører før tidtakere, alltid.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Asynchronous functions, Promise, async, await',
      kicker: 'Lesson 7 &middot; Javascript',
      title: 'Asynchronous functions, Promise, async, await',
      lead: 'The previous lesson used <code>await</code> without explaining it. Here is the explanation — and the reason the language needed it in the first place.',

      's.thread.t': 'One thread, and everything shares it',
      's.thread.d':
        '<p>Javascript in a browser runs on one thread. It paints the page, handles clicks and runs your code — one thing at a time.</p>' +
        '<p>Which means any line that waits stops everything. A loop that never finishes does not just freeze the script but the whole tab: buttons stop answering, animations stand still, text cannot be selected.</p>' +
        '<p>So nothing in the browser lets you wait for the network. There is no call that "fetches a page and gives you the answer"; there are only calls that start something and hand you a receipt. Asynchronous code is not an advanced technique here — it is the only kind available.</p>',

      's.promise.t': 'A value that has not arrived yet',
      's.promise.d':
        '<p>A <code>Promise</code> is that receipt. It is an object you get immediately, which will eventually hold either an answer or a reason there was none.</p>' +
        '<p>It has three states: pending, fulfilled or rejected. And it settles exactly once. Call <code>resolve</code> twice and the first one stands; call <code>reject</code> afterwards and nothing happens. A promise once given cannot be taken back, which is precisely why you can pass it around without worrying.</p>' +
        '<p>You will rarely write <code>new Promise</code> yourself. <code>fetch</code>, timers and most libraries hand you ready-made ones. What you need is to know what you have been given.</p>',

      's.then.t': 'The original form',
      's.then.d':
        '<p><code>.then()</code> says: when this is ready, run this function with the result. <code>.catch()</code> says the same for failures, and <code>.finally()</code> runs either way.</p>' +
        '<p>What makes the form usable is that each <code>.then()</code> itself returns a new promise. Return a value inside one and that value becomes the input of the next link; return another promise and the chain waits for it. That is how several steps become one readable sequence instead of functions inside functions.</p>' +
        '<p>You will see this form everywhere in existing code, and it is still right for short chains. For everything else there is a form that reads better.</p>',

      's.async.t': 'The same thing, written flat',
      's.async.d':
        '<p><code>await</code> pauses the function it sits in until the promise settles, and hands you the value. The rest of the page carries on while it waits — it is not the thread that stops, only this one function.</p>' +
        '<p>In return the function has to be marked <code>async</code>, and it then always returns a promise. Write <code>return 1</code> and the caller does not get <code>1</code> but a promise that eventually gives <code>1</code>. That is not a detail: an <code>async</code> function can never hand you an answer immediately, however little it does.</p>' +
        '<p><code>await</code> also works on things that were never promises. <code>await 42</code> gives 42. That makes it safe to wait on something that is sometimes a promise and sometimes not.</p>' +
        '<p>And the keyword only exists inside an <code>async</code> function — or at the very top of a module. Write it anywhere else and it is a syntax error, not a runtime one.</p>',

      's.error.t': 'Failures that become rejections',
      's.error.d':
        '<p>Throw inside an <code>async</code> function and it does not become an exception the caller can catch straight away. It becomes a rejected promise.</p>' +
        '<p>That sounds like a complication and is a simplification: because <code>await</code> re-throws when the promise is rejected, you can use perfectly ordinary <code>try</code> and <code>catch</code> around asynchronous code. One error handling story for both kinds.</p>' +
        '<p>The one trap is promises nobody is watching. Call an <code>async</code> function without <code>await</code> and without <code>.catch()</code>, and if it fails you have a rejection with no recipient. The browser logs it to the console and moves on — your code notices nothing, and the user is never told. Either await the call or attach a <code>.catch()</code> to it.</p>',

      's.all.t': 'Waiting for several things at once',
      's.all.d':
        '<p>The commonest performance mistake in modern frontend code is one line: <code>await</code> inside a loop.</p>' +
        '<p>Each call waits for the previous one, even when they have nothing to do with each other. Three independent calls of 40 milliseconds each then take 120. Start them together and wait for all three, and it takes 40.</p>' +
        '<p><code>Promise.all</code> does exactly that: it takes a list of promises, waits until all are finished, and gives you the answers in the same order you supplied them. If one fails, the whole thing rejects immediately.</p>' +
        '<p>If that is not wanted, there is <code>allSettled</code>, which never rejects and gives you a status for each. <code>race</code> gives the first to settle whatever the outcome, and <code>any</code> the first to succeed.</p>' +
        '<p>But be honest about the dependencies: if the second call genuinely needs the answer from the first, they belong one after the other. <code>Promise.all</code> is for the cases where the order never mattered.</p>',

      's.loop.t': 'Who gets a turn, and when',
      's.loop.d':
        '<p>When the thread is free it takes new work from two queues, and one always has priority.</p>' +
        '<p>First all synchronous code runs to completion. Then the microtask queue is drained, which is where promises sit — all the way, including new ones added along the way. Only once it is completely empty does the next timer get a turn.</p>' +
        '<p>That is why <code>setTimeout(fn, 0)</code> does not mean "now". It means "after everything already queued, promises included". A promise created after your timer still runs before it.</p>' +
        '<p>You rarely need this day to day. You need it on the day two things happen in an order you did not expect, and you want to know why.</p>',

      's.note':
        '<p>The short version. One thread, so nothing may block. A promise is a receipt that settles once. <code>async</code> always returns a promise, and <code>await</code> pauses only its own function. Use <code>try/catch</code>, and never leave a promise without an <code>await</code> or a <code>.catch()</code>. <code>await</code> in a loop is sequential — use <code>Promise.all</code> when the calls are independent. And promises run before timers, always.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Асинхронні функції, Promise, async, await',
      kicker: 'Урок 7 &middot; Javascript',
      title: 'Асинхронні функції, Promise, async, await',
      lead: 'Попередній урок вживав <code>await</code>, не пояснюючи його. Ось пояснення — і причина, чому мові він узагалі знадобився.',

      's.thread.t': 'Один потік, і все ділить його',
      's.thread.d':
        '<p>Javascript у браузері працює в одному потоці. Він малює сторінку, обробляє кліки і виконує ваш код — по одній речі за раз.</p>' +
        '<p>Тобто будь-який рядок, який чекає, спиняє все. Цикл, що ніколи не завершується, заморожує не лише скрипт, а всю вкладку: кнопки не відповідають, анімації стоять, текст не виділити.</p>' +
        '<p>Тож ніщо в браузері не дає вам чекати на мережу. Немає виклику, який «дістає сторінку і віддає відповідь»; є лише виклики, що щось запускають і віддають квитанцію. Асинхронний код тут не просунута техніка — це єдиний доступний.</p>',

      's.promise.t': 'Значення, яке ще не прийшло',
      's.promise.d':
        '<p><code>Promise</code> — це та сама квитанція. Це об’єкт, який ви дістаєте одразу і який зрештою міститиме або відповідь, або причину, чому її не буде.</p>' +
        '<p>У нього три стани: очікує, виконано або відхилено. І він визначається рівно один раз. Викличете <code>resolve</code> двічі — лишиться перший; викличете після цього <code>reject</code> — не станеться нічого. Дану обіцянку не можна забрати назад, і саме тому її можна передавати далі без хвилювань.</p>' +
        '<p>Ви рідко писатимете <code>new Promise</code> самі. <code>fetch</code>, таймери й більшість бібліотек дають вам готові. Вам потрібно знати, що саме ви дістали.</p>',

      's.then.t': 'Первісна форма',
      's.then.d':
        '<p><code>.then()</code> каже: коли це буде готове, виконай цю функцію з результатом. <code>.catch()</code> каже те саме для помилок, а <code>.finally()</code> виконується в будь-якому разі.</p>' +
        '<p>Придатною цю форму робить те, що кожен <code>.then()</code> сам повертає нову обіцянку. Поверніть значення всередині — і воно стане входом наступної ланки; поверніть іншу обіцянку — і ланцюжок її дочекається. Так кілька кроків стають однією читабельною послідовністю замість функцій усередині функцій.</p>' +
        '<p>Ви бачитимете цю форму всюди в наявному коді, і для коротких ланцюжків вона й досі доречна. Для всього іншого є форма, що читається краще.</p>',

      's.async.t': 'Те саме, написане пласко',
      's.async.d':
        '<p><code>await</code> ставить на паузу функцію, у якій він стоїть, доки обіцянка не визначиться, і віддає вам значення. Решта сторінки тим часом працює далі — спиняється не потік, а лише ця одна функція.</p>' +
        '<p>Натомість функцію треба позначити як <code>async</code>, і тоді вона завжди повертає обіцянку. Напишете <code>return 1</code> — і той, хто викликав, дістане не <code>1</code>, а обіцянку, що зрештою дасть <code>1</code>. Це не дрібниця: <code>async</code>-функція ніколи не може віддати відповідь одразу, хоч би як мало вона робила.</p>' +
        '<p><code>await</code> працює і з тим, що ніколи не було обіцянкою. <code>await 42</code> дає 42. Це робить безпечним очікування на те, що іноді є обіцянкою, а іноді ні.</p>' +
        '<p>І це ключове слово існує лише всередині <code>async</code>-функції або на самому верхньому рівні модуля. В інших місцях це синтаксична помилка, а не помилка виконання.</p>',

      's.error.t': 'Помилки, що стають відхиленнями',
      's.error.d':
        '<p>Кинете помилку всередині <code>async</code>-функції — і це не стане винятком, який той, хто викликав, зловить одразу. Це стане відхиленою обіцянкою.</p>' +
        '<p>Звучить як ускладнення, а є спрощенням: оскільки <code>await</code> перекидає помилку, коли обіцянку відхилено, навколо асинхронного коду можна писати цілком звичайні <code>try</code> і <code>catch</code>. Одна історія обробки помилок для обох видів.</p>' +
        '<p>Єдина пастка — обіцянки, за якими ніхто не стежить. Викличете <code>async</code>-функцію без <code>await</code> і без <code>.catch()</code>, і якщо вона впаде, ви матимете відхилення без адресата. Браузер запише його в консоль і піде далі — ваш код нічого не помітить, а користувачеві ніхто не скаже. Або чекайте на виклик, або чіпляйте до нього <code>.catch()</code>.</p>',

      's.all.t': 'Чекати на кілька речей водночас',
      's.all.d':
        '<p>Найпоширеніша помилка швидкодії в сучасному фронтенді — це один рядок: <code>await</code> усередині циклу.</p>' +
        '<p>Кожен виклик чекає на попередній, навіть коли вони не мають одне до одного стосунку. Три незалежні виклики по 40 мілісекунд тоді займають 120. Запустіть їх разом і дочекайтеся всіх трьох — і це займе 40.</p>' +
        '<p><code>Promise.all</code> робить саме це: бере список обіцянок, чекає, доки всі завершаться, і віддає відповіді в тому самому порядку, у якому ви їх подали. Якщо одна впаде, уся конструкція відхиляється одразу.</p>' +
        '<p>Якщо це небажано, є <code>allSettled</code>, який ніколи не відхиляється і дає статус для кожної. <code>race</code> дає першу, що визначилася, хоч який результат, а <code>any</code> — першу, що вдалася.</p>' +
        '<p>Але будьте чесні щодо залежностей: якщо другий виклик справді потребує відповіді першого, їм місце один за одним. <code>Promise.all</code> — для тих випадків, коли порядок ніколи не важив.</p>',

      's.loop.t': 'Хто дістає чергу і коли',
      's.loop.d':
        '<p>Коли потік вільний, він бере нову роботу з двох черг, і одна завжди має перевагу.</p>' +
        '<p>Спершу до кінця виконується весь синхронний код. Далі спорожнюється черга мікрозавдань, де живуть обіцянки, — уся, зокрема й нові, додані дорогою. І лише коли вона цілком порожня, черга доходить до наступного таймера.</p>' +
        '<p>Саме тому <code>setTimeout(fn, 0)</code> не означає «зараз». Він означає «після всього, що вже в черзі, разом з обіцянками». Обіцянка, створена після вашого таймера, все одно виконається раніше за нього.</p>' +
        '<p>У повсякденні це рідко потрібно. Воно потрібне того дня, коли дві речі стаються в порядку, якого ви не чекали, і вам треба зрозуміти чому.</p>',

      's.note':
        '<p>Коротко. Один потік, тож ніщо не сміє блокувати. Обіцянка — це квитанція, яка визначається один раз. <code>async</code> завжди повертає обіцянку, а <code>await</code> спиняє лише власну функцію. Користуйтеся <code>try/catch</code> і ніколи не лишайте обіцянку без <code>await</code> чи <code>.catch()</code>. <code>await</code> у циклі є послідовним — беріть <code>Promise.all</code>, коли виклики незалежні. І обіцянки виконуються раніше за таймери, завжди.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: '<code>async function en() { return 1; }</code><br>Hva gir <code>en()</code>?',
        answer: 2,
        options: [
          {
            text: '<code>1</code>',
            why: 'Det er hva du får av <code>await en()</code>. Kallet i seg selv gir noe annet.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Funksjonen returnerer noe. Spørsmålet er hva slags innpakning det kommer i.',
          },
          {
            text: 'Et <code>Promise</code> som gir <code>1</code>.',
            why: 'En <code>async</code>-funksjon returnerer alltid et løfte, uansett hva du skriver i <code>return</code>. Den kan aldri gi deg et svar med én gang.',
          },
          {
            text: 'Det kommer an på om noen venter på den.',
            why: 'Returverdien er den samme uansett hvem som kaller.',
          },
        ],
      },
      {
        q: 'Hva er rekkefølgen her?<br><code>setTimeout(() =&gt; log(&#39;A&#39;), 0);</code><br><code>Promise.resolve().then(() =&gt; log(&#39;B&#39;));</code><br><code>log(&#39;C&#39;);</code>',
        answer: 1,
        options: [
          {
            text: 'A, B, C',
            why: 'Ingen av de to første kjører før den synkrone linjen er ferdig.',
          },
          {
            text: 'C, B, A',
            why: 'Synkron kode først. Så tømmes mikrooppgavekøen, der løftene ligger. Tidtakere kommer sist &mdash; <code>setTimeout(fn, 0)</code> betyr «etter alt som allerede står i kø».',
          },
          {
            text: 'C, A, B',
            why: 'Nesten &mdash; men løfter har forrang foran tidtakere, selv en tidtaker på null.',
          },
          {
            text: 'B, C, A',
            why: '<code>.then()</code> kjører aldri før den synkrone koden er ferdig, uansett hvor tidlig den ble satt opp.',
          },
        ],
      },
      {
        q: 'Tre uavhengige kall tar 40 ms hver. Hvor lang tid tar <code>for (const id of ids) await hent(id);</code>?',
        answer: 2,
        options: [
          {
            text: 'Rundt 40 ms &mdash; de kjører samtidig.',
            why: 'Det er hva <code>Promise.all</code> gir. En <code>await</code> i en løkke venter på hvert kall før den starter det neste.',
          },
          {
            text: 'Rundt 13 ms.',
            why: 'Å vente gjør ingenting raskere. Kallene tar den tiden de tar.',
          },
          {
            text: 'Rundt 120 ms &mdash; de kjører etter tur.',
            why: 'Hver runde venter på den forrige, selv om kallene ikke har noe med hverandre å gjøre. Målt i praksis: 121 ms mot 40 ms med <code>Promise.all</code>.',
          },
          {
            text: 'Det kommer an på serveren.',
            why: 'Serveren bruker 40 ms uansett. Det er rekkefølgen på din side som avgjør totalen.',
          },
        ],
      },
      {
        q: 'Du kaller en <code>async</code>-funksjon uten <code>await</code> og uten <code>.catch()</code>, og den kaster. Hva skjer?',
        answer: 3,
        options: [
          {
            text: 'Feilen bobler opp og stopper koden rundt.',
            why: 'Den ble til en avvist løfte, ikke et unntak. Koden rundt merker ingenting.',
          },
          {
            text: '<code>try/catch</code> rundt kallet fanger den.',
            why: 'Ikke uten <code>await</code>. Kallet returnerte med én gang; feilen kom etterpå.',
          },
          {
            text: 'Ingenting &mdash; feilen forsvinner sporløst.',
            why: 'Nesten. Den forsvinner for koden din, men ikke helt sporløst.',
          },
          {
            text: 'En ubehandlet avvisning: logget i konsollen, men koden din merker ingenting.',
            why: 'Det er det verste av begge deler &mdash; ingen feilhåndtering, og ingen beskjed til brukeren. Enten <code>await</code> kallet, eller fest en <code>.catch()</code> på det.',
          },
        ],
      },
      {
        q: 'Et løfte kaller <code>resolve(&#39;a&#39;)</code> og deretter <code>reject(new Error())</code>. Hva blir resultatet?',
        answer: 0,
        options: [
          {
            text: 'Det gir <code>&#39;a&#39;</code> &mdash; et løfte avgjøres bare én gang.',
            why: 'Den første avgjørelsen gjelder, og alt etterpå ignoreres i stillhet. Det er nettopp derfor et løfte er trygt å gi videre: det kan ikke skifte mening.',
          },
          {
            text: 'Det avvises &mdash; siste kall vinner.',
            why: 'Det ville gjort løfter upålitelige. Den første avgjørelsen låser resultatet.',
          },
          {
            text: 'En feil, fordi begge ble kalt.',
            why: 'Det er helt lovlig å kalle begge. De senere kallene gjør bare ingenting.',
          },
          {
            text: 'Det blir stående som ventende.',
            why: 'Det ble avgjort ved første <code>resolve</code>.',
          },
        ],
      },
      {
        q: 'Du vil hente fem ting samtidig, og vil vite hvilke som gikk galt uten at hele operasjonen ryker. Hva bruker du?',
        answer: 1,
        options: [
          {
            text: '<code>Promise.all</code>',
            why: 'Den avvises med én gang det første kallet feiler, og du mister svarene fra de andre.',
          },
          {
            text: '<code>Promise.allSettled</code>',
            why: 'Den avvises aldri. Du får en liste med en status for hvert kall, så du kan vise de fire som gikk bra og melde fra om den ene som ikke gjorde det.',
          },
          {
            text: '<code>Promise.race</code>',
            why: 'Den gir deg bare det første som blir ferdig, og kaster resten.',
          },
          {
            text: 'En løkke med <code>await</code>.',
            why: 'Da får du riktignok alle svarene, men etter tur &mdash; fem ganger så lang tid som nødvendig.',
          },
        ],
      },
    ],

    en: [
      {
        q: '<code>async function one() { return 1; }</code><br>What does <code>one()</code> give?',
        answer: 2,
        options: [
          {
            text: '<code>1</code>',
            why: 'That is what <code>await one()</code> gives. The call itself gives something else.',
          },
          {
            text: '<code>undefined</code>',
            why: 'The function does return something. The question is what wrapping it arrives in.',
          },
          {
            text: 'A <code>Promise</code> that yields <code>1</code>.',
            why: 'An <code>async</code> function always returns a promise, whatever you write in the <code>return</code>. It can never hand you an answer immediately.',
          },
          {
            text: 'It depends on whether anyone awaits it.',
            why: 'The return value is the same regardless of who calls.',
          },
        ],
      },
      {
        q: 'What is the order here?<br><code>setTimeout(() =&gt; log(&#39;A&#39;), 0);</code><br><code>Promise.resolve().then(() =&gt; log(&#39;B&#39;));</code><br><code>log(&#39;C&#39;);</code>',
        answer: 1,
        options: [
          {
            text: 'A, B, C',
            why: 'Neither of the first two runs before the synchronous line has finished.',
          },
          {
            text: 'C, B, A',
            why: 'Synchronous code first. Then the microtask queue is drained, which is where promises sit. Timers come last — <code>setTimeout(fn, 0)</code> means "after everything already queued".',
          },
          {
            text: 'C, A, B',
            why: 'Close — but promises take priority over timers, even a timer of zero.',
          },
          {
            text: 'B, C, A',
            why: '<code>.then()</code> never runs before the synchronous code has finished, however early it was set up.',
          },
        ],
      },
      {
        q: 'Three independent calls take 40 ms each. How long does <code>for (const id of ids) await get(id);</code> take?',
        answer: 2,
        options: [
          {
            text: 'About 40 ms — they run together.',
            why: 'That is what <code>Promise.all</code> gives. An <code>await</code> in a loop waits for each call before starting the next.',
          },
          {
            text: 'About 13 ms.',
            why: 'Waiting makes nothing faster. The calls take as long as they take.',
          },
          {
            text: 'About 120 ms — they run in turn.',
            why: 'Each turn waits for the previous one, even though the calls have nothing to do with each other. Measured in practice: 121 ms against 40 ms with <code>Promise.all</code>.',
          },
          {
            text: 'It depends on the server.',
            why: 'The server takes 40 ms regardless. It is the ordering on your side that decides the total.',
          },
        ],
      },
      {
        q: 'You call an <code>async</code> function with no <code>await</code> and no <code>.catch()</code>, and it throws. What happens?',
        answer: 3,
        options: [
          {
            text: 'The error bubbles up and stops the surrounding code.',
            why: 'It became a rejected promise, not an exception. The surrounding code notices nothing.',
          },
          {
            text: 'A <code>try/catch</code> around the call catches it.',
            why: 'Not without <code>await</code>. The call returned immediately; the failure came afterwards.',
          },
          {
            text: 'Nothing — the error vanishes without trace.',
            why: 'Almost. It vanishes for your code, but not entirely without trace.',
          },
          {
            text: 'An unhandled rejection: logged to the console, while your code notices nothing.',
            why: 'That is the worst of both — no error handling, and no word to the user. Either <code>await</code> the call or attach a <code>.catch()</code>.',
          },
        ],
      },
      {
        q: 'A promise calls <code>resolve(&#39;a&#39;)</code> and then <code>reject(new Error())</code>. What is the result?',
        answer: 0,
        options: [
          {
            text: 'It gives <code>&#39;a&#39;</code> — a promise settles only once.',
            why: 'The first settlement stands, and everything afterwards is ignored silently. That is precisely why a promise is safe to pass around: it cannot change its mind.',
          },
          {
            text: 'It rejects — the last call wins.',
            why: 'That would make promises unreliable. The first settlement locks the result.',
          },
          {
            text: 'An error, because both were called.',
            why: 'Calling both is perfectly legal. The later calls simply do nothing.',
          },
          {
            text: 'It stays pending.',
            why: 'It settled at the first <code>resolve</code>.',
          },
        ],
      },
      {
        q: 'You want to fetch five things at once, and know which failed without losing the whole operation. What do you use?',
        answer: 1,
        options: [
          {
            text: '<code>Promise.all</code>',
            why: 'It rejects the moment the first call fails, and you lose the answers from the others.',
          },
          {
            text: '<code>Promise.allSettled</code>',
            why: 'It never rejects. You get a list with a status for each call, so you can show the four that worked and report the one that did not.',
          },
          {
            text: '<code>Promise.race</code>',
            why: 'That gives you only the first to finish, and discards the rest.',
          },
          {
            text: 'A loop with <code>await</code>.',
            why: 'You would get all the answers, but in turn — five times longer than necessary.',
          },
        ],
      },
    ],

    uk: [
      {
        q: '<code>async function one() { return 1; }</code><br>Що дасть <code>one()</code>?',
        answer: 2,
        options: [
          {
            text: '<code>1</code>',
            why: 'Це те, що дає <code>await one()</code>. Сам виклик дає інше.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Функція таки щось повертає. Питання в тому, у якій обгортці це приходить.',
          },
          {
            text: '<code>Promise</code>, що дає <code>1</code>.',
            why: '<code>async</code>-функція завжди повертає обіцянку, хоч би що ви написали в <code>return</code>. Вона ніколи не може віддати відповідь одразу.',
          },
          {
            text: 'Залежить від того, чи хтось на неї чекає.',
            why: 'Повернене значення однакове незалежно від того, хто викликає.',
          },
        ],
      },
      {
        q: 'Який тут порядок?<br><code>setTimeout(() =&gt; log(&#39;A&#39;), 0);</code><br><code>Promise.resolve().then(() =&gt; log(&#39;B&#39;));</code><br><code>log(&#39;C&#39;);</code>',
        answer: 1,
        options: [
          {
            text: 'A, B, C',
            why: 'Жодне з перших двох не виконається, доки не завершиться синхронний рядок.',
          },
          {
            text: 'C, B, A',
            why: 'Спершу синхронний код. Далі спорожнюється черга мікрозавдань, де живуть обіцянки. Таймери йдуть останніми — <code>setTimeout(fn, 0)</code> означає «після всього, що вже в черзі».',
          },
          {
            text: 'C, A, B',
            why: 'Майже — але обіцянки мають перевагу над таймерами, навіть над нульовим.',
          },
          {
            text: 'B, C, A',
            why: '<code>.then()</code> ніколи не виконається раніше за синхронний код, хоч як рано його налаштували.',
          },
        ],
      },
      {
        q: 'Три незалежні виклики тривають по 40 мс. Скільки триватиме <code>for (const id of ids) await get(id);</code>?',
        answer: 2,
        options: [
          {
            text: 'Близько 40 мс — вони йдуть разом.',
            why: 'Це те, що дає <code>Promise.all</code>. <code>await</code> у циклі чекає на кожен виклик, перш ніж почати наступний.',
          },
          {
            text: 'Близько 13 мс.',
            why: 'Очікування нічого не пришвидшує. Виклики тривають стільки, скільки тривають.',
          },
          {
            text: 'Близько 120 мс — вони йдуть по черзі.',
            why: 'Кожен оберт чекає на попередній, хоч виклики й не пов’язані. Виміряно на практиці: 121 мс проти 40 мс із <code>Promise.all</code>.',
          },
          {
            text: 'Залежить від сервера.',
            why: 'Сервер витрачає 40 мс у будь-якому разі. Загальний час визначає порядок на вашому боці.',
          },
        ],
      },
      {
        q: 'Ви викликаєте <code>async</code>-функцію без <code>await</code> і без <code>.catch()</code>, і вона кидає помилку. Що станеться?',
        answer: 3,
        options: [
          {
            text: 'Помилка спливе вгору і спинить код навколо.',
            why: 'Вона стала відхиленою обіцянкою, а не винятком. Код навколо нічого не помітить.',
          },
          {
            text: '<code>try/catch</code> навколо виклику її зловить.',
            why: 'Не без <code>await</code>. Виклик повернувся одразу; збій стався потім.',
          },
          {
            text: 'Нічого — помилка зникне безслідно.',
            why: 'Майже. Для вашого коду вона зникне, але не зовсім безслідно.',
          },
          {
            text: 'Необроблене відхилення: у консолі є запис, а ваш код нічого не помічає.',
            why: 'Це найгірше з обох світів — ні обробки помилки, ні слова користувачеві. Або чекайте виклик через <code>await</code>, або чіпляйте <code>.catch()</code>.',
          },
        ],
      },
      {
        q: 'Обіцянка викликає <code>resolve(&#39;a&#39;)</code>, а потім <code>reject(new Error())</code>. Який результат?',
        answer: 0,
        options: [
          {
            text: 'Вона дасть <code>&#39;a&#39;</code> — обіцянка визначається лише раз.',
            why: 'Перше визначення лишається, а все подальше тихо ігнорується. Саме тому обіцянку безпечно передавати далі: вона не може передумати.',
          },
          {
            text: 'Вона відхилиться — перемагає останній виклик.',
            why: 'Це зробило б обіцянки ненадійними. Перше визначення замикає результат.',
          },
          {
            text: 'Помилка, бо викликали обидва.',
            why: 'Викликати обидва цілком законно. Пізніші виклики просто нічого не роблять.',
          },
          {
            text: 'Вона лишиться в стані очікування.',
            why: 'Вона визначилася на першому <code>resolve</code>.',
          },
        ],
      },
      {
        q: 'Ви хочете дістати п’ять речей водночас і знати, які впали, не втративши всієї операції. Що візьмете?',
        answer: 1,
        options: [
          {
            text: '<code>Promise.all</code>',
            why: 'Він відхиляється тієї миті, коли падає перший виклик, і ви втрачаєте відповіді решти.',
          },
          {
            text: '<code>Promise.allSettled</code>',
            why: 'Він ніколи не відхиляється. Ви дістаєте список зі статусом для кожного виклику, тож можете показати чотири вдалі й повідомити про один невдалий.',
          },
          {
            text: '<code>Promise.race</code>',
            why: 'Він дає лише першу, що завершилася, а решту відкидає.',
          },
          {
            text: 'Цикл із <code>await</code>.',
            why: 'Ви дістанете всі відповіді, але по черзі — вп’ятеро довше, ніж потрібно.',
          },
        ],
      },
    ],
  },
});
