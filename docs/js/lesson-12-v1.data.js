/*
 * Content of JS lesson 12 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson is about events. Finding elements was lesson 11;
 * it leans on lesson 8 (arrows and this) and lesson 11 (closest, delegation
 * over a list that gets rebuilt).
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'addEventListener, preventDefault, stopPropagation',
      kicker: 'Leksjon 12 &middot; Javascript',
      title: 'addEventListener, removeEventListener, preventDefault, propagation, stopPropagation',
      lead: 'Å begynne å lytte, å slutte å lytte, og de to måtene å si nei på &mdash; som høres like ut og gjør helt forskjellige ting.',

      's.add.t': 'Å begynne å lytte',
      's.add.d':
        '<p><code>addEventListener</code> tar tre ting: hva som skal skje (<code>&#39;click&#39;</code>, <code>&#39;submit&#39;</code>, <code>&#39;input&#39;</code>), funksjonen som skal kjøre, og eventuelt noen valg.</p>' +
        '<p>Den viktigste forskjellen fra den gamle <code>el.onclick = ...</code> er at det er plass til mange. To moduler kan lytte på samme knapp uten å vite om hverandre. Med <code>onclick</code> skriver den siste over den første, uten et ord.</p>' +
        '<p>Én detalj: legger du inn nøyaktig samme funksjon to ganger, på samme type og med samme <code>capture</code>-flagg, blir den registrert én gang. Målt med tre kall: den kjørte én gang. Men samme funksjon med <code>capture: true</code> og uten er to forskjellige oppføringer, og da kjørte den to ganger.</p>',

      's.remove.t': 'Å slutte å lytte',
      's.remove.d':
        '<p><code>removeEventListener</code> finner lytteren ved å sammenligne tre ting: typen, funksjonen og <code>capture</code>-flagget. Stemmer ikke alle tre, skjer det ingenting &mdash; og du får ingen feilmelding.</p>' +
        '<p>Det er derfor dette er den vanligste feilen i hele leksjonen: <code>() =&gt; lukk()</code> skrevet to ganger er to forskjellige funksjoner. De ser like ut, men det er to objekter, og den andre fjerner ikke den første. <code>bind</code> har samme problem: hvert kall lager en ny funksjon. Begge deler ble målt &mdash; lytteren kjørte fortsatt.</p>' +
        '<p>Løsningen er å ta vare på referansen i en variabel. Eller å slippe å fjerne noe: <code>{ once: true }</code> fjerner seg selv etter første gang (tre klikk, én kjøring), og en <code>AbortController</code> lar deg si opp mange lyttere med ett <code>abort()</code> &mdash; det samme signalet kan deles av alle lytterne i en komponent.</p>' +
        '<p>Merk til slutt at en lytter ikke forsvinner selv om elementet gjør det. Et element du har fjernet fra siden, men fortsatt holder i en variabel, svarer fortsatt på <code>click()</code>.</p>',

      's.prop.t': 'Ned, fram og opp igjen',
      's.prop.d':
        '<p>En hendelse skjer ikke bare på elementet du traff. Den reiser: først fra <code>document</code> og nedover til målet (capture), så på målet selv, så samme vei opp igjen (bubbling).</p>' +
        '<p>Målt på tre elementer i hverandre, med seks lyttere og ett klikk, kom de i akkurat den rekkefølgen &mdash; ytterst først på vei ned, ytterst sist på vei opp. <code>e.eventPhase</code> sier 1 på vei ned, 2 på målet og 3 på vei opp.</p>' +
        '<p>I praksis bruker nesten alle bare veien opp, for det er standardvalget: uten <code>{ capture: true }</code> ser lytteren din bare boblingen. Veien ned er til for de gangene du må komme først, før målet selv rekker å reagere.</p>' +
        '<p>Noen hendelser bobler ikke. <code>focus</code> og <code>blur</code> stopper på elementet; vil du fange dem på en forelder, bruker du <code>focusin</code> og <code>focusout</code>, som gjør det samme og bobler.</p>',

      's.target.t': 'Hva ble klikket, og hvem lytter',
      's.target.d':
        '<p>Fordi hendelsen reiser, er det to elementer i bildet samtidig, og de er sjelden det samme.</p>' +
        '<p><code>e.target</code> er der det begynte &mdash; det innerste elementet brukeren faktisk traff. <code>e.currentTarget</code> er elementet lytteren står på. Klikker du en <code>&lt;span&gt;</code> dypt inne i et kort, og lytteren står på kortet, er <code>target</code> spannet og <code>currentTarget</code> kortet.</p>' +
        '<p>I en vanlig <code>function</code> er <code>this</code> det samme som <code>currentTarget</code>. I en pilfunksjon er det ikke det: pilen beholder <code>this</code> fra der den ble skrevet (leksjon 8), altså <code>window</code> i et vanlig skript og <code>undefined</code> i en modul. Derfor er <code>e.currentTarget</code> det ene svaret som alltid stemmer.</p>',

      's.deleg.t': 'Én lytter i stedet for hundre',
      's.deleg.d':
        '<p>Nå kan boblingen brukes til noe. I stedet for en lytter på hver rad i en liste, setter du én på listen og spør hendelsen hvor den kom fra.</p>' +
        '<p>Gevinsten er at den overlever at innholdet byttes ut. I testen ble hele listen erstattet med <code>innerHTML</code> etter at lytteren var satt &mdash; den nye knappen virket med en gang, fordi lytteren aldri satt på knappene.</p>' +
        '<p><code>closest</code> er ikke til pynt. Klikker brukeren en <code>&lt;span&gt;</code> inne i knappen, er <code>e.target</code> spannet, ikke knappen. <code>e.target.closest(&#39;button&#39;)</code> går oppover til den finner knappen &mdash; eller gir <code>null</code>, som er ditt signal om at klikket bommet.</p>',

      's.prevent.t': 'preventDefault: nettleseren gjør det ikke',
      's.prevent.d':
        '<p>Noen elementer gjør noe av seg selv. En lenke går til adressen, et skjema laster siden på nytt, en avkrysningsboks krysses av. <code>preventDefault()</code> avlyser akkurat det &mdash; og ingenting annet.</p>' +
        '<p>Det er hele poenget med leksjonen: i testen ble adressen stående, men forelderens lytter kjørte som før. Hendelsen reiser videre, den gjør bare ikke noe av seg selv til slutt. Senere lyttere kan se hva som har skjedd, med <code>e.defaultPrevented</code>.</p>' +
        '<p>To fallgruver. <code>return false</code> betyr ingenting i en lytter lagt til med <code>addEventListener</code> &mdash; i testen fulgte nettleseren lenken likevel. Det virker bare i gammeldags <code>onclick="..."</code> skrevet i HTML-en. Og i en lytter med <code>{ passive: true }</code> blir <code>preventDefault()</code> ignorert: <code>defaultPrevented</code> ble stående på <code>false</code>, og nettleseren skrev «Unable to preventDefault inside passive event listener invocation» i konsollen.</p>',

      's.stop.t': 'stopPropagation: ingen andre får vite det',
      's.stop.d':
        '<p><code>stopPropagation()</code> stanser reisen. Ingen forelder får hendelsen. Men den stopper ikke de andre lytterne på det samme elementet &mdash; i testen kjørte lytter nummer to på knappen som normalt, mens forelderen ikke hørte noe. Skal du stanse dem også, finnes <code>stopImmediatePropagation()</code>, som i samme test slapp bare den første gjennom.</p>' +
        '<p>Og den avlyser ingenting. En lenke med <code>stopPropagation()</code> og ingenting annet ble fulgt av nettleseren som vanlig. Vil du både stanse reisen og avlyse handlingen, må du si begge deler.</p>' +
        '<p>Den virker også nedover. En lytter på en forelder med <code>{ capture: true }</code> som kaller <code>stopPropagation()</code>, gjør at knappens egen lytter aldri kjører &mdash; den ble stanset før den rakk fram.</p>',

      's.note':
        'De to spørsmålene er forskjellige: <code>preventDefault</code> svarer «skal nettleseren gjøre sin egen ting?», <code>stopPropagation</code> svarer «skal noen andre få vite om det?». Du kan svare nei på det ene og ja på det andre, i alle fire kombinasjoner. Og vær forsiktig med <code>stopPropagation</code> som førstevalg: koden du stanser, er ofte noen andres &mdash; en meny som lukker seg ved klikk utenfor, eller et sporingsskript &mdash; og feilen dukker opp langt unna.',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'addEventListener, preventDefault, stopPropagation',
      kicker: 'Lesson 12 &middot; Javascript',
      title: 'addEventListener, removeEventListener, preventDefault, propagation, stopPropagation',
      lead: 'Starting to listen, stopping again, and the two ways of saying no &mdash; which sound alike and do completely different things.',

      's.add.t': 'Starting to listen',
      's.add.d':
        '<p><code>addEventListener</code> takes three things: what to listen for (<code>&#39;click&#39;</code>, <code>&#39;submit&#39;</code>, <code>&#39;input&#39;</code>), the function to run, and optionally some options.</p>' +
        '<p>The important difference from the old <code>el.onclick = ...</code> is that there is room for many. Two modules can listen to the same button without knowing about each other. With <code>onclick</code> the later one overwrites the earlier one, silently.</p>' +
        '<p>One detail: adding the exact same function twice, for the same type and with the same <code>capture</code> flag, registers it once. Measured with three calls: it ran once. But the same function with <code>capture: true</code> and without it are two separate entries, and then it ran twice.</p>',

      's.remove.t': 'Stopping again',
      's.remove.d':
        '<p><code>removeEventListener</code> finds the listener by comparing three things: the type, the function and the <code>capture</code> flag. If all three do not match, nothing happens &mdash; and you get no error.</p>' +
        '<p>That is why this is the most common mistake in the whole lesson: <code>() =&gt; close()</code> written twice is two different functions. They look the same, but they are two objects, and the second one does not remove the first. <code>bind</code> has the same problem: every call makes a new function. Both were measured &mdash; the listener still fired.</p>' +
        '<p>The fix is to keep the reference in a variable. Or to avoid removing anything: <code>{ once: true }</code> removes itself after the first run (three clicks, one run), and an <code>AbortController</code> lets you cancel many listeners with a single <code>abort()</code> &mdash; the same signal can be shared by every listener in a component.</p>' +
        '<p>Note finally that a listener does not disappear just because the element does. An element you removed from the page but still hold in a variable still answers <code>click()</code>.</p>',

      's.prop.t': 'Down, through, and up again',
      's.prop.d':
        '<p>An event does not happen only on the element you hit. It travels: first from <code>document</code> down to the target (capture), then on the target itself, then back up the same way (bubbling).</p>' +
        '<p>Measured on three nested elements, with six listeners and one click, they arrived in exactly that order &mdash; outermost first on the way down, outermost last on the way up. <code>e.eventPhase</code> says 1 on the way down, 2 at the target and 3 on the way up.</p>' +
        '<p>In practice almost everyone uses only the way up, because that is the default: without <code>{ capture: true }</code> your listener sees only the bubbling. The way down exists for the times you have to arrive first, before the target itself gets to react.</p>' +
        '<p>Some events do not bubble. <code>focus</code> and <code>blur</code> stop at the element; to catch them on a parent you use <code>focusin</code> and <code>focusout</code>, which do the same job and do bubble.</p>',

      's.target.t': 'What was clicked, and who is listening',
      's.target.d':
        '<p>Because the event travels, two elements are in play at once, and they are rarely the same one.</p>' +
        '<p><code>e.target</code> is where it started &mdash; the innermost element the user actually hit. <code>e.currentTarget</code> is the element the listener sits on. Click a <code>&lt;span&gt;</code> deep inside a card, with the listener on the card, and <code>target</code> is the span while <code>currentTarget</code> is the card.</p>' +
        '<p>In an ordinary <code>function</code>, <code>this</code> is the same as <code>currentTarget</code>. In an arrow function it is not: the arrow keeps the <code>this</code> from where it was written (lesson 8), meaning <code>window</code> in a plain script and <code>undefined</code> in a module. That is why <code>e.currentTarget</code> is the one answer that is always right.</p>',

      's.deleg.t': 'One listener instead of a hundred',
      's.deleg.d':
        '<p>Now bubbling becomes useful. Instead of a listener on every row in a list, you put one on the list and ask the event where it came from.</p>' +
        '<p>The gain is that it survives the content being replaced. In the test the whole list was replaced with <code>innerHTML</code> after the listener was set &mdash; the new button worked immediately, because the listener was never on the buttons.</p>' +
        '<p><code>closest</code> is not decoration. If the user clicks a <code>&lt;span&gt;</code> inside the button, <code>e.target</code> is the span, not the button. <code>e.target.closest(&#39;button&#39;)</code> walks upwards until it finds the button &mdash; or returns <code>null</code>, which is your signal that the click missed.</p>',

      's.prevent.t': 'preventDefault: the browser does not do it',
      's.prevent.d':
        '<p>Some elements do something on their own. A link goes to the address, a form reloads the page, a checkbox ticks. <code>preventDefault()</code> cancels exactly that &mdash; and nothing else.</p>' +
        '<p>That is the point of this lesson: in the test the address stayed put, but the parent&#39;s listener ran as before. The event travels on, it just does not do its own thing at the end. Later listeners can see what happened, through <code>e.defaultPrevented</code>.</p>' +
        '<p>Two traps. <code>return false</code> means nothing in a listener added with <code>addEventListener</code> &mdash; in the test the browser followed the link anyway. It only works in the old-fashioned <code>onclick="..."</code> written in the HTML. And in a listener with <code>{ passive: true }</code>, <code>preventDefault()</code> is ignored: <code>defaultPrevented</code> stayed <code>false</code>, and the browser wrote &laquo;Unable to preventDefault inside passive event listener invocation&raquo; in the console.</p>',

      's.stop.t': 'stopPropagation: nobody else hears about it',
      's.stop.d':
        '<p><code>stopPropagation()</code> halts the journey. No parent gets the event. But it does not stop the other listeners on the same element &mdash; in the test the second listener on the button ran as normal, while the parent heard nothing. To stop those too there is <code>stopImmediatePropagation()</code>, which in the same test let only the first one through.</p>' +
        '<p>And it cancels nothing. A link with <code>stopPropagation()</code> and nothing else was followed by the browser as usual. If you want to halt the journey and cancel the action, you have to say both.</p>' +
        '<p>It works downwards too. A listener on a parent with <code>{ capture: true }</code> that calls <code>stopPropagation()</code> means the button&#39;s own listener never runs &mdash; it was stopped before the event got there.</p>',

      's.note':
        'The two questions are different: <code>preventDefault</code> answers &laquo;should the browser do its own thing?&raquo;, <code>stopPropagation</code> answers &laquo;should anyone else hear about it?&raquo;. You can answer no to one and yes to the other, in all four combinations. And be careful with <code>stopPropagation</code> as a first choice: the code you are stopping is often someone else&#39;s &mdash; a menu that closes on an outside click, or an analytics script &mdash; and the bug shows up far away.',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'addEventListener, preventDefault, stopPropagation',
      kicker: 'Урок 12 &middot; Javascript',
      title: 'addEventListener, removeEventListener, preventDefault, propagation, stopPropagation',
      lead: 'Почати слухати, перестати слухати і два способи сказати «ні» &mdash; вони звучать схоже, а роблять зовсім різне.',

      's.add.t': 'Почати слухати',
      's.add.d':
        '<p><code>addEventListener</code> приймає три речі: що саме слухати (<code>&#39;click&#39;</code>, <code>&#39;submit&#39;</code>, <code>&#39;input&#39;</code>), функцію, яка виконається, і за потреби налаштування.</p>' +
        '<p>Головна відмінність від старого <code>el.onclick = ...</code> у тому, що тут є місце для багатьох. Два модулі можуть слухати ту саму кнопку, нічого не знаючи одне про одного. А <code>onclick</code> мовчки перезаписує попередній обробник.</p>' +
        '<p>Одна деталь: якщо додати ту саму функцію двічі &mdash; для того самого типу і з тим самим прапорцем <code>capture</code> &mdash; вона зареєструється один раз. Виміряно на трьох викликах: спрацювала один раз. Але та сама функція з <code>capture: true</code> і без нього &mdash; це два різні записи, і тоді вона спрацювала двічі.</p>',

      's.remove.t': 'Перестати слухати',
      's.remove.d':
        '<p><code>removeEventListener</code> шукає слухача, порівнюючи три речі: тип, функцію і прапорець <code>capture</code>. Якщо збігаються не всі три, не станеться нічого &mdash; і помилки ви не побачите.</p>' +
        '<p>Саме тому це найчастіша помилка всього уроку: <code>() =&gt; zakryty()</code>, написане двічі, &mdash; це дві різні функції. Виглядають однаково, але це два об&#39;єкти, і друга не прибирає першу. З <code>bind</code> те саме: кожен виклик створює нову функцію. Обидва випадки виміряно &mdash; слухач і далі спрацьовував.</p>' +
        '<p>Вихід &mdash; зберегти посилання у змінній. Або взагалі нічого не прибирати: <code>{ once: true }</code> знімає себе після першого разу (три кліки, один запуск), а <code>AbortController</code> дозволяє скасувати багато слухачів одним <code>abort()</code> &mdash; той самий сигнал можуть ділити всі слухачі компонента.</p>' +
        '<p>І нарешті: слухач не зникає лише тому, що зник елемент. Елемент, який ви прибрали зі сторінки, але досі тримаєте у змінній, усе одно відповідає на <code>click()</code>.</p>',

      's.prop.t': 'Униз, через ціль і вгору',
      's.prop.d':
        '<p>Подія стається не тільки на тому елементі, у який ви влучили. Вона подорожує: спершу від <code>document</code> униз до цілі (занурення), потім на самій цілі, потім тим самим шляхом угору (спливання).</p>' +
        '<p>Виміряно на трьох вкладених елементах: шість слухачів, один клік &mdash; і саме такий порядок. Зовнішній першим на шляху вниз і останнім на шляху вгору. <code>e.eventPhase</code> дає 1 на шляху вниз, 2 на цілі і 3 на шляху вгору.</p>' +
        '<p>На практиці майже всі користуються тільки шляхом угору, бо це типова поведінка: без <code>{ capture: true }</code> ваш слухач бачить лише спливання. Шлях униз існує для випадків, коли треба встигнути першим &mdash; до того, як зреагує сама ціль.</p>' +
        '<p>Деякі події не спливають. <code>focus</code> і <code>blur</code> зупиняються на елементі; щоб зловити їх на батьківському елементі, беруть <code>focusin</code> і <code>focusout</code> &mdash; вони роблять те саме і спливають.</p>',

      's.target.t': 'На що клікнули і хто слухає',
      's.target.d':
        '<p>Оскільки подія подорожує, у грі одночасно два елементи, і вони рідко збігаються.</p>' +
        '<p><code>e.target</code> &mdash; це там, де все почалося: найглибший елемент, у який справді влучив користувач. <code>e.currentTarget</code> &mdash; елемент, на якому висить слухач. Клікніть <code>&lt;span&gt;</code> глибоко всередині картки, а слухач поставте на картку: <code>target</code> буде span, а <code>currentTarget</code> &mdash; картка.</p>' +
        '<p>У звичайній <code>function</code> <code>this</code> збігається з <code>currentTarget</code>. У стрілочній &mdash; ні: стрілка зберігає <code>this</code> звідти, де її написали (урок 8), тобто <code>window</code> у звичайному скрипті й <code>undefined</code> у модулі. Тому <code>e.currentTarget</code> &mdash; єдина відповідь, яка правильна завжди.</p>',

      's.deleg.t': 'Один слухач замість сотні',
      's.deleg.d':
        '<p>Ось тут спливання і стає в пригоді. Замість слухача на кожному рядку списку ставлять один на сам список і питають у події, звідки вона прийшла.</p>' +
        '<p>Виграш у тому, що це переживає заміну вмісту. У тесті весь список замінили через <code>innerHTML</code> уже після того, як слухач був поставлений &mdash; нова кнопка запрацювала одразу, бо слухач ніколи й не був на кнопках.</p>' +
        '<p><code>closest</code> тут не прикраса. Якщо користувач клікне <code>&lt;span&gt;</code> усередині кнопки, <code>e.target</code> буде span, а не кнопка. <code>e.target.closest(&#39;button&#39;)</code> іде вгору, доки не знайде кнопку &mdash; або поверне <code>null</code>, і це ваш сигнал, що клік був повз.</p>',

      's.prevent.t': 'preventDefault: браузер цього не робить',
      's.prevent.d':
        '<p>Деякі елементи роблять щось самі. Посилання переходить за адресою, форма перезавантажує сторінку, прапорець ставиться. <code>preventDefault()</code> скасовує саме це &mdash; і більше нічого.</p>' +
        '<p>У цьому й суть уроку: у тесті адреса залишилася тією самою, але слухач батьківського елемента виконався як і раніше. Подія рухається далі, вона просто не робить наприкінці своєї власної справи. Пізніші слухачі можуть це побачити через <code>e.defaultPrevented</code>.</p>' +
        '<p>Дві пастки. <code>return false</code> нічого не означає в слухачі, доданому через <code>addEventListener</code> &mdash; у тесті браузер усе одно перейшов за посиланням. Це працює лише в старому <code>onclick="..."</code>, написаному в HTML. А в слухачі з <code>{ passive: true }</code> <code>preventDefault()</code> ігнорується: <code>defaultPrevented</code> залишився <code>false</code>, а браузер написав у консоль «Unable to preventDefault inside passive event listener invocation».</p>',

      's.stop.t': 'stopPropagation: ніхто інший про це не дізнається',
      's.stop.d':
        '<p><code>stopPropagation()</code> зупиняє подорож. Жоден батьківський елемент події не отримає. Але він не зупиняє інших слухачів на тому самому елементі &mdash; у тесті другий слухач кнопки виконався як звичайно, а батьківський не почув нічого. Щоб зупинити і їх, є <code>stopImmediatePropagation()</code>: у тому самому тесті він пропустив тільки перший.</p>' +
        '<p>І він нічого не скасовує. Посилання зі <code>stopPropagation()</code> і більше нічим браузер відкрив як завжди. Якщо треба і зупинити подорож, і скасувати дію &mdash; кажіть обидві речі.</p>' +
        '<p>Працює він і вниз. Слухач на батьківському елементі з <code>{ capture: true }</code>, який викликає <code>stopPropagation()</code>, призводить до того, що власний слухач кнопки не виконається ніколи &mdash; подію зупинили, доки вона ще йшла до нього.</p>',

      's.note':
        'Це два різні питання: <code>preventDefault</code> відповідає на «чи робити браузеру свою власну справу?», а <code>stopPropagation</code> &mdash; на «чи має про це дізнатися хтось іще?». Можна відповісти «ні» на одне і «так» на інше &mdash; усі чотири комбінації дійсні. І обережніше зі <code>stopPropagation</code> як першим вибором: код, який ви зупиняєте, часто чужий &mdash; меню, що закривається по кліку зовні, або скрипт аналітики &mdash; і помилка виринає далеко звідси.',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du legger inn <em>nøyaktig samme</em> funksjon som klikklytter tre ganger, og klikker én gang. Hvor mange ganger kjører den?',
        answer: 1,
        options: [
          {
            text: 'Tre ganger &mdash; én per <code>addEventListener</code>.',
            why: 'Det ville vært tilfellet om du hadde skrevet funksjonen på nytt hver gang. Men det er den samme.',
          },
          {
            text: 'Én gang &mdash; duplikater blir ignorert.',
            why: 'Målt. Er type, funksjon og <code>capture</code>-flagg like, er det samme oppføring, og nettleseren legger den ikke inn på nytt. Endrer du bare <code>capture</code>, blir det to oppføringer &mdash; og da kjørte den to ganger.',
          },
          {
            text: 'Ingen &mdash; nettleseren kaster de tvetydige.',
            why: 'Ingenting kastes. Den ene oppføringen står der og virker.',
          },
          {
            text: 'Det kommer an på rekkefølgen.',
            why: 'Rekkefølgen har ingenting med det å gjøre. Det er likheten som teller.',
          },
        ],
      },
      {
        q: 'Du la inn <code>el.addEventListener(&#39;click&#39;, () =&gt; lukk())</code>. Nå skriver du <code>el.removeEventListener(&#39;click&#39;, () =&gt; lukk())</code>. Hva skjer?',
        answer: 2,
        options: [
          {
            text: 'Lytteren fjernes &mdash; koden er jo identisk.',
            why: 'Koden er identisk, funksjonene er det ikke. Det er to objekter laget på to tidspunkter.',
          },
          {
            text: 'Du får en feilmelding om at lytteren ikke finnes.',
            why: 'Den sier ingenting. Det er nettopp derfor feilen er vanskelig å finne.',
          },
          {
            text: 'Ingenting fjernes, og lytteren kjører som før.',
            why: 'Målt: den kjørte fortsatt. <code>removeEventListener</code> sammenligner funksjonen som objekt, ikke teksten i den. Det samme gjelder <code>obj.h.bind(obj)</code> &mdash; hvert <code>bind</code>-kall lager en ny funksjon. Ta vare på referansen, eller bruk <code>{ once: true }</code> eller en <code>AbortController</code>.',
          },
          {
            text: 'Alle klikklyttere på elementet fjernes.',
            why: 'Det finnes ingen måte å fjerne alle på med <code>removeEventListener</code>. Det er nettopp det <code>AbortController</code> er til for.',
          },
        ],
      },
      {
        q: 'Du klikker en knapp. Hvem kjører først: en lytter på en ytre <code>div</code> lagt inn med <code>{ capture: true }</code>, eller knappens egen vanlige lytter?',
        answer: 0,
        options: [
          {
            text: 'Den ytre &mdash; veien ned kommer før målet.',
            why: 'Målt på tre elementer i hverandre: ytre capture, midtre capture, så målet, så oppover igjen. Derfor kan en capture-lytter på en forelder rekke å kalle <code>stopPropagation()</code> før knappens egen lytter i det hele tatt får hendelsen &mdash; noe som også ble målt.',
          },
          {
            text: 'Knappen &mdash; den er jo nærmest klikket.',
            why: 'Nærhet avgjør ikke. Hendelsen begynner på <code>document</code> og reiser nedover før den når knappen.',
          },
          {
            text: 'Den som ble lagt inn først.',
            why: 'Rekkefølgen på registreringen avgjør bare mellom lyttere på samme element i samme fase.',
          },
          {
            text: 'De kjører samtidig.',
            why: 'Alt skjer etter hverandre, i én tråd. Det finnes alltid en rekkefølge.',
          },
        ],
      },
      {
        q: 'Lytteren står på en <code>&lt;ul&gt;</code>. Brukeren klikker en <code>&lt;span&gt;</code> som ligger inne i en <code>&lt;button&gt;</code> i listen. Hva er <code>e.target</code>?',
        answer: 3,
        options: [
          {
            text: '<code>&lt;ul&gt;</code>-en, fordi lytteren står der.',
            why: 'Det er <code>e.currentTarget</code>. De to er sjelden det samme.',
          },
          {
            text: '<code>&lt;button&gt;</code>-en, fordi den er klikkbar.',
            why: 'Nettleseren bryr seg ikke om hva som ser klikkbart ut. Den peker på det innerste elementet.',
          },
          {
            text: '<code>&lt;li&gt;</code>-en som raden ligger i.',
            why: 'Den er bare et ledd på veien oppover.',
          },
          {
            text: '<code>&lt;span&gt;</code>-en &mdash; det innerste elementet brukeren traff.',
            why: 'Målt: <code>e.target</code> var <code>SPAN</code>. Derfor skriver man <code>e.target.closest(&#39;button&#39;)</code> i en delegert lytter &mdash; den går oppover til knappen, og gir <code>null</code> hvis klikket bommet.',
          },
        ],
      },
      {
        q: 'En lytter på en lenke kaller <code>e.preventDefault()</code>. En lytter på lenkens forelder teller klikk. Blir klikket talt?',
        answer: 1,
        options: [
          {
            text: 'Nei &mdash; hendelsen ble avlyst.',
            why: 'Handlingen ble avlyst, ikke hendelsen. Den fortsetter reisen sin.',
          },
          {
            text: 'Ja &mdash; forelderen kjører som før.',
            why: 'Målt: adressen endret seg ikke, og forelderens lytter kjørte. <code>preventDefault</code> avlyser bare nettleserens egen handling. Skal du også stanse reisen, må du legge til <code>stopPropagation()</code>.',
          },
          {
            text: 'Bare hvis forelderen bruker <code>{ capture: true }</code>.',
            why: 'Begge veier fungerer. <code>preventDefault</code> rører ikke ved reisen i noen retning.',
          },
          {
            text: 'Ja, men <code>e.defaultPrevented</code> er <code>false</code> der.',
            why: 'Den er <code>true</code> &mdash; det ble målt. Senere lyttere kan se at noen har avlyst handlingen.',
          },
        ],
      },
      {
        q: 'Knappen har to klikklyttere. Den første kaller <code>e.stopPropagation()</code>. Kjører den andre?',
        answer: 0,
        options: [
          {
            text: 'Ja &mdash; den stopper foreldrene, ikke naboene.',
            why: 'Målt: begge lytterne på knappen kjørte, forelderen fikk ingenting. Vil du stanse de andre lytterne på samme element også, må du bruke <code>stopImmediatePropagation()</code> &mdash; i samme test slapp bare den første gjennom.',
          },
          {
            text: 'Nei &mdash; hendelsen er ferdig etter det kallet.',
            why: 'Det er hva <code>stopImmediatePropagation</code> gjør. Den vanlige varianten er mildere.',
          },
          {
            text: 'Bare hvis den ble lagt inn før den første.',
            why: 'Rekkefølgen endrer ikke på dette. Alle lytterne på elementet får hendelsen uansett.',
          },
          {
            text: 'Ja, og lenken blir dessuten ikke fulgt.',
            why: 'Første del stemmer, andre ikke: <code>stopPropagation</code> avlyser ingenting. Målt på en lenke &mdash; nettleseren fulgte den som vanlig.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You add the <em>exact same</em> function as a click listener three times, then click once. How many times does it run?',
        answer: 1,
        options: [
          {
            text: 'Three times &mdash; one per <code>addEventListener</code>.',
            why: 'That would be true if you had written the function out again each time. But it is the same one.',
          },
          {
            text: 'Once &mdash; duplicates are ignored.',
            why: 'Measured. If the type, the function and the <code>capture</code> flag all match, it is the same entry and the browser does not add it again. Change only <code>capture</code> and you get two entries &mdash; and then it ran twice.',
          },
          {
            text: 'Not at all &mdash; the browser drops ambiguous ones.',
            why: 'Nothing is dropped. The one entry is there and works.',
          },
          {
            text: 'It depends on the order.',
            why: 'Order has nothing to do with it. Sameness is what counts.',
          },
        ],
      },
      {
        q: 'You added <code>el.addEventListener(&#39;click&#39;, () =&gt; close())</code>. Now you write <code>el.removeEventListener(&#39;click&#39;, () =&gt; close())</code>. What happens?',
        answer: 2,
        options: [
          {
            text: 'The listener is removed &mdash; the code is identical, after all.',
            why: 'The code is identical, the functions are not. They are two objects made at two moments.',
          },
          {
            text: 'You get an error saying the listener was not found.',
            why: 'It says nothing at all. That is exactly why this bug is hard to find.',
          },
          {
            text: 'Nothing is removed, and the listener runs as before.',
            why: 'Measured: it still fired. <code>removeEventListener</code> compares the function as an object, not the text inside it. The same goes for <code>obj.h.bind(obj)</code> &mdash; every <code>bind</code> call makes a new function. Keep the reference, or use <code>{ once: true }</code> or an <code>AbortController</code>.',
          },
          {
            text: 'Every click listener on the element is removed.',
            why: 'There is no way to remove them all with <code>removeEventListener</code>. That is precisely what <code>AbortController</code> is for.',
          },
        ],
      },
      {
        q: 'You click a button. Which runs first: a listener on an outer <code>div</code> added with <code>{ capture: true }</code>, or the button&#39;s own ordinary listener?',
        answer: 0,
        options: [
          {
            text: 'The outer one &mdash; the way down comes before the target.',
            why: 'Measured on three nested elements: outer capture, middle capture, then the target, then back up. This is why a capture listener on a parent can call <code>stopPropagation()</code> before the button&#39;s own listener ever gets the event &mdash; which was also measured.',
          },
          {
            text: 'The button &mdash; it is closest to the click.',
            why: 'Closeness does not decide. The event starts at <code>document</code> and travels down before it reaches the button.',
          },
          {
            text: 'Whichever was added first.',
            why: 'Registration order only decides between listeners on the same element in the same phase.',
          },
          {
            text: 'They run at the same time.',
            why: 'Everything happens one after another, on one thread. There is always an order.',
          },
        ],
      },
      {
        q: 'The listener is on a <code>&lt;ul&gt;</code>. The user clicks a <code>&lt;span&gt;</code> that sits inside a <code>&lt;button&gt;</code> in the list. What is <code>e.target</code>?',
        answer: 3,
        options: [
          {
            text: 'The <code>&lt;ul&gt;</code>, because the listener is there.',
            why: 'That is <code>e.currentTarget</code>. The two are rarely the same.',
          },
          {
            text: 'The <code>&lt;button&gt;</code>, because it is the clickable thing.',
            why: 'The browser does not care what looks clickable. It points at the innermost element.',
          },
          {
            text: 'The <code>&lt;li&gt;</code> the row sits in.',
            why: 'That is just a stop on the way up.',
          },
          {
            text: 'The <code>&lt;span&gt;</code> &mdash; the innermost element the user hit.',
            why: 'Measured: <code>e.target</code> was <code>SPAN</code>. That is why a delegated listener writes <code>e.target.closest(&#39;button&#39;)</code> &mdash; it walks up to the button, and returns <code>null</code> when the click missed.',
          },
        ],
      },
      {
        q: 'A listener on a link calls <code>e.preventDefault()</code>. A listener on the link&#39;s parent counts clicks. Is the click counted?',
        answer: 1,
        options: [
          {
            text: 'No &mdash; the event was cancelled.',
            why: 'The action was cancelled, not the event. It carries on with its journey.',
          },
          {
            text: 'Yes &mdash; the parent runs as before.',
            why: 'Measured: the address did not change, and the parent&#39;s listener ran. <code>preventDefault</code> cancels only the browser&#39;s own action. To halt the journey too you have to add <code>stopPropagation()</code>.',
          },
          {
            text: 'Only if the parent uses <code>{ capture: true }</code>.',
            why: 'Both directions work. <code>preventDefault</code> does not touch the journey either way.',
          },
          {
            text: 'Yes, but <code>e.defaultPrevented</code> is <code>false</code> there.',
            why: 'It is <code>true</code> &mdash; that was measured. Later listeners can see that someone cancelled the action.',
          },
        ],
      },
      {
        q: 'The button has two click listeners. The first calls <code>e.stopPropagation()</code>. Does the second one run?',
        answer: 0,
        options: [
          {
            text: 'Yes &mdash; it stops the parents, not the neighbours.',
            why: 'Measured: both listeners on the button ran, the parent got nothing. To stop the other listeners on the same element as well, you need <code>stopImmediatePropagation()</code> &mdash; in the same test it let only the first one through.',
          },
          {
            text: 'No &mdash; the event is finished after that call.',
            why: 'That is what <code>stopImmediatePropagation</code> does. The ordinary one is gentler.',
          },
          {
            text: 'Only if it was added before the first one.',
            why: 'Order does not change this. Every listener on the element gets the event regardless.',
          },
          {
            text: 'Yes, and the link is not followed either.',
            why: 'First half right, second half wrong: <code>stopPropagation</code> cancels nothing. Measured on a link &mdash; the browser followed it as usual.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви додаєте <em>ту саму</em> функцію як слухача кліку тричі, а потім клікаєте один раз. Скільки разів вона виконається?',
        answer: 1,
        options: [
          {
            text: 'Тричі &mdash; по одному на кожен <code>addEventListener</code>.',
            why: 'Так було б, якби ви щоразу писали функцію наново. Але це та сама функція.',
          },
          {
            text: 'Один раз &mdash; дублікати ігноруються.',
            why: 'Виміряно. Якщо тип, функція і прапорець <code>capture</code> збігаються, це той самий запис, і браузер не додає його вдруге. Змініть лише <code>capture</code> &mdash; буде два записи, і тоді вона спрацювала двічі.',
          },
          {
            text: 'Жодного &mdash; браузер відкидає неоднозначні.',
            why: 'Нічого не відкидається. Єдиний запис стоїть на місці й працює.',
          },
          {
            text: 'Залежить від порядку.',
            why: 'Порядок тут ні до чого. Важлива однаковість.',
          },
        ],
      },
      {
        q: 'Ви додали <code>el.addEventListener(&#39;click&#39;, () =&gt; zakryty())</code>. Тепер пишете <code>el.removeEventListener(&#39;click&#39;, () =&gt; zakryty())</code>. Що станеться?',
        answer: 2,
        options: [
          {
            text: 'Слухача приберуть &mdash; код же однаковий.',
            why: 'Код однаковий, а функції &mdash; ні. Це два об&#39;єкти, створені в різні моменти.',
          },
          {
            text: 'Буде помилка, що такого слухача немає.',
            why: 'Не буде нічого. Саме тому цю помилку так важко знайти.',
          },
          {
            text: 'Не приберуть нічого, і слухач працює далі.',
            why: 'Виміряно: він і далі спрацьовував. <code>removeEventListener</code> порівнює функцію як об&#39;єкт, а не текст усередині неї. Те саме з <code>obj.h.bind(obj)</code> &mdash; кожен виклик <code>bind</code> створює нову функцію. Зберігайте посилання або беріть <code>{ once: true }</code> чи <code>AbortController</code>.',
          },
          {
            text: 'Приберуть усіх слухачів кліку на цьому елементі.',
            why: 'Прибрати всіх через <code>removeEventListener</code> неможливо. Саме для цього і є <code>AbortController</code>.',
          },
        ],
      },
      {
        q: 'Ви клікаєте кнопку. Хто виконається першим: слухач на зовнішньому <code>div</code>, доданий із <code>{ capture: true }</code>, чи власний звичайний слухач кнопки?',
        answer: 0,
        options: [
          {
            text: 'Зовнішній &mdash; шлях униз іде перед ціллю.',
            why: 'Виміряно на трьох вкладених елементах: зовнішній capture, середній capture, потім ціль, потім назад угору. Саме тому capture-слухач на батьківському елементі встигає викликати <code>stopPropagation()</code> ще до того, як власний слухач кнопки взагалі отримає подію &mdash; це теж виміряно.',
          },
          {
            text: 'Кнопка &mdash; вона ж найближча до кліку.',
            why: 'Близькість нічого не вирішує. Подія починається на <code>document</code> і йде вниз, перш ніж дійти до кнопки.',
          },
          {
            text: 'Той, кого додали першим.',
            why: 'Порядок реєстрації вирішує лише між слухачами на одному елементі в одній фазі.',
          },
          {
            text: 'Вони виконаються одночасно.',
            why: 'Усе відбувається одне за одним, в одному потоці. Порядок є завжди.',
          },
        ],
      },
      {
        q: 'Слухач стоїть на <code>&lt;ul&gt;</code>. Користувач клікає <code>&lt;span&gt;</code>, що лежить усередині <code>&lt;button&gt;</code> у списку. Що таке <code>e.target</code>?',
        answer: 3,
        options: [
          {
            text: '<code>&lt;ul&gt;</code>, бо слухач саме там.',
            why: 'Це <code>e.currentTarget</code>. Ці двоє рідко збігаються.',
          },
          {
            text: '<code>&lt;button&gt;</code>, бо саме вона клікабельна.',
            why: 'Браузеру байдуже, що виглядає клікабельним. Він вказує на найглибший елемент.',
          },
          {
            text: '<code>&lt;li&gt;</code>, у якому лежить рядок.',
            why: 'Це лише зупинка на шляху вгору.',
          },
          {
            text: '<code>&lt;span&gt;</code> &mdash; найглибший елемент, у який влучив користувач.',
            why: 'Виміряно: <code>e.target</code> був <code>SPAN</code>. Тому в делегованому слухачі пишуть <code>e.target.closest(&#39;button&#39;)</code> &mdash; він іде вгору до кнопки і повертає <code>null</code>, якщо клік був повз.',
          },
        ],
      },
      {
        q: 'Слухач на посиланні викликає <code>e.preventDefault()</code>. Слухач на батьківському елементі рахує кліки. Чи буде клік порахований?',
        answer: 1,
        options: [
          {
            text: 'Ні &mdash; подію ж скасували.',
            why: 'Скасували дію, а не подію. Вона продовжує свою подорож.',
          },
          {
            text: 'Так &mdash; батьківський слухач виконається як завжди.',
            why: 'Виміряно: адреса не змінилася, а слухач батьківського елемента виконався. <code>preventDefault</code> скасовує лише власну дію браузера. Щоб зупинити ще й подорож, треба додати <code>stopPropagation()</code>.',
          },
          {
            text: 'Тільки якщо батьківський використовує <code>{ capture: true }</code>.',
            why: 'Працюють обидва напрямки. <code>preventDefault</code> не чіпає подорож у жоден бік.',
          },
          {
            text: 'Так, але <code>e.defaultPrevented</code> там <code>false</code>.',
            why: 'Там <code>true</code> &mdash; це виміряно. Пізніші слухачі бачать, що дію вже скасували.',
          },
        ],
      },
      {
        q: 'На кнопці два слухачі кліку. Перший викликає <code>e.stopPropagation()</code>. Чи виконається другий?',
        answer: 0,
        options: [
          {
            text: 'Так &mdash; він зупиняє батьків, а не сусідів.',
            why: 'Виміряно: обидва слухачі кнопки виконалися, батьківський не отримав нічого. Щоб зупинити й інших слухачів того самого елемента, потрібен <code>stopImmediatePropagation()</code> &mdash; у тому самому тесті він пропустив лише першого.',
          },
          {
            text: 'Ні &mdash; після цього виклику подія закінчилася.',
            why: 'Це робить <code>stopImmediatePropagation</code>. Звичайний варіант м&#39;якший.',
          },
          {
            text: 'Тільки якщо його додали раніше за перший.',
            why: 'Порядок цього не змінює. Подію отримають усі слухачі елемента.',
          },
          {
            text: 'Так, і посилання до того ж не відкриється.',
            why: 'Перша частина правильна, друга ні: <code>stopPropagation</code> нічого не скасовує. Виміряно на посиланні &mdash; браузер відкрив його як звичайно.',
          },
        ],
      },
    ],
  },
});
