/*
 * Content of lesson 05 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'HTML-tagger: form, input, button, label, textarea',
      kicker: 'Leksjon 5 &middot; HTML &amp; CSS',
      title: 'HTML-tagger: form, input, button, label, textarea',
      lead: 'Fem elementer som lar siden stille et spørsmål og få et svar. Det er her HTML slutter å beskrive og begynner å samle inn.',

      's.form.t': 'Beholderen som samler inn og sender',
      's.form.d':
        '<p><code>&lt;form&gt;</code> omslutter en gruppe felter og gir dem et sted å sendes. Alene tegner det ingenting; det blir nyttig i det øyeblikket noe inni det sendes inn.</p>' +
        '<p>Alt den besøkende har fylt ut, samles opp — hver verdi merket med navnet på feltet sitt — og sendes av gårde som én pakke.</p>',
      's.form.action':
        '<p><code>action</code> er adressen pakken sendes til.</p>' +
        '<p>Utelater du det, sendes skjemaet tilbake til adressen til siden du står på — ofte nettopp det du vil mens du fortsatt bygger.</p>',
      's.form.method':
        '<p><code>method</code> er hvordan det sendes, og i praksis finnes det to svar.</p>' +
        '<p><code>get</code> henger verdiene på adressen som en spørrestreng. Resultatet er synlig, kan bokmerkes og kan deles — riktig for et søk, galt for noe privat. <code>post</code> legger verdiene i selve forespørselen i stedet: bruk det for alt som endrer noe på serveren, alt som er langt, og alt du ikke vil ha liggende i en nettleserhistorikk. Skriver du ingenting, får du <code>get</code>.</p>',

      's.input.t': 'Ett felt, i mange forkledninger',
      's.input.d':
        '<p><code>&lt;input&gt;</code> er ett enkelt felt. Det har ingen sluttagg og intet innhold — alt ved det avgjøres av attributter.</p>' +
        '<p>Det er det mest allsidige elementet i HTML, fordi ett attributt endrer hva det faktisk er.</p>',
      's.input.type':
        '<p><code>type</code> avgjør hva slags felt du får: en tekstlinje, en e-postadresse, et skjult passord, et tall, en dato, en avkrysningsboks, en radioknapp, en filvelger.</p>' +
        '<p>Å velge riktig er verdt mer enn det ser ut som. Nettleseren viser et passende tastatur på mobil, tilbyr en datovelger der det gir mening, og nekter å sende inn et <code>email</code>-felt som åpenbart ikke er en e-postadresse — uten en linje JavaScript.</p>',
      's.input.name':
        '<p><code>name</code> er navnet verdien sendes under. På mottakersiden er det slik verdien finnes igjen.</p>' +
        '<p>Et felt uten <code>name</code> sendes ikke i det hele tatt. Det vises fortsatt, den besøkende kan fortsatt skrive i det, og verdien kommer stille og rolig aldri fram. Dette er den klart vanligste grunnen til at et felt mangler i innsendte data.</p>',
      's.input.value':
        '<p><code>value</code> er innholdet i feltet, og hva det betyr avhenger av typen.</p>' +
        '<p>På et tekstfelt er det teksten feltet starter med. På en avkrysningsboks eller radioknapp er det hva som sendes hvis den besøkende krysser av — selve avkrysningen avgjør bare om verdien sendes, ikke hva den er.</p>',
      's.input.placeholder':
        '<p><code>placeholder</code> er det svake hintet som vises inne i et tomt felt, som regel et eksempel på forventet format.</p>' +
        '<p>Det forsvinner i det øyeblikket den besøkende begynner å skrive, så det kan aldri erstatte en <code>&lt;label&gt;</code>. Et skjema som bare er merket med plassholdere, blir uleselig nettopp når det er halvveis utfylt.</p>',
      's.input.state':
        '<p>Tre boolske attributter som ser like ut og oppfører seg forskjellig.</p>' +
        '<p><code>required</code> hindrer at skjemaet sendes mens feltet er tomt, og nettleseren sier fra. <code>readonly</code> viser verdien, nekter å la den redigeres, og sender den likevel. <code>disabled</code> gråner ut feltet, nekter å la det redigeres, og sender det <em>ikke</em>. Den siste forskjellen er den som lurer folk: et deaktivert felt mangler i dataene.</p>',
      's.input.checked':
        '<p><code>checked</code> er et boolsk attributt som gjør at en avkrysningsboks eller radioknapp starter avkrysset.</p>',

      's.button.t': 'Noe å trykke på',
      's.button.d':
        '<p><code>&lt;button&gt;</code> er en knapp du kan trykke på. I motsetning til et felt har den en sluttagg og ekte innhold, så teksten på den kan være tekst, et ikon eller oppmerking — hva du vil.</p>',
      's.button.type':
        '<p><code>type</code> avgjør hva et trykk gjør, og standardverdien er det som er verdt å huske.</p>' +
        '<p><code>submit</code> sender skjemaet — og det er det du får når du ikke skriver noen <code>type</code> i det hele tatt inne i et skjema. En enkel <code>&lt;button&gt;</code>, ment som en uskyldig bryter, vil sende skjemaet og laste siden på nytt. <code>button</code> gjør ingenting av seg selv og er det du vil ha til alt som styres av JavaScript. <code>reset</code> tilbakestiller skjemaet til startverdiene.</p>',
      's.button.disabled':
        '<p><code>disabled</code> er et boolsk attributt: knappen kan ikke trykkes, og som et deaktivert felt sendes den ikke med skjemaet.</p>',

      's.label.t': 'Teksten som hører til et felt',
      's.label.d':
        '<p><code>&lt;label&gt;</code> er teksten som navngir et felt. Det er ikke pynt, og vanlig tekst ved siden av et felt er ikke det samme.</p>' +
        '<p>En ekte label er klikkbar: et trykk flytter markøren inn i feltet, eller krysser av boksen. Det gjør en liten avkrysningsboks til et behagelig stort mål. En skjermleser leser dessuten opp teksten når feltet nås, slik at den besøkende vet hva det spørres om.</p>',
      's.label.for':
        '<p><code>for</code> inneholder <code>id</code>-en til feltet labelen hører til. De to strengene må stemme nøyaktig; en skrivefeil gir deg en label festet til ingenting — den ser riktig ut og oppfører seg som vanlig tekst.</p>',
      's.label.wrapH': 'Eller pakk inn feltet',
      's.label.wrap':
        '<p>Alternativet er å legge feltet inne i labelen. Forbindelsen er da underforstått, og verken <code>for</code> eller <code>id</code> trengs.</p>' +
        '<p>Dette leser godt for avkrysningsbokser og radioknapper, der teksten uansett står rett ved siden av boksen.</p>',

      's.textarea.t': 'Tekst over flere linjer',
      's.textarea.d':
        '<p><code>&lt;textarea&gt;</code> er et felt for tekst som går over flere linjer: en melding, en kommentar, en adresse.</p>' +
        '<p>Det skiller seg fra <code>&lt;input&gt;</code> på én strukturell måte som er verdt å lære én gang for alle. Det har en sluttagg, og innholdet står mellom taggene. Det finnes ikke noe <code>value</code>-attributt — det du skriver inni, er starteksten, og hvert mellomrom og linjeskift der teller.</p>',
      's.textarea.size':
        '<p><code>rows</code> er høyden i tekstlinjer og <code>cols</code> bredden i tegn.</p>' +
        '<p>CSS overtar normalt den virkelige størrelsen, men <code>rows</code> er fortsatt en rask og ærlig måte å si hvor høy boksen skal være til å begynne med.</p>',
      's.textarea.rest':
        '<p>Disse tre oppfører seg nøyaktig som på <code>&lt;input&gt;</code>: et svakt hint i den tomme boksen, en nektelse av å sende mens den er tom, og en grense for hvor mange tegn som kan skrives.</p>' +
        '<p><code>name</code> betyr noe her av nøyaktig samme grunn som overalt ellers — uten det sendes meldingen aldri.</p>',

      's.note':
        '<p>To grunner til at en verdi mangler i innsendte data, og de dekker nesten alle tilfeller: feltet har ingen <code>name</code>, eller feltet er <code>disabled</code>. Ingen av delene viser noe tegn på siden. Kom noe du fylte ut aldri fram, sjekk disse to først.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'HTML tags: form, input, button, label, textarea',
      kicker: 'Lesson 5 &middot; HTML &amp; CSS',
      title: 'HTML tags: form, input, button, label, textarea',
      lead: 'Five elements that let the page ask a question and receive an answer. This is where HTML stops describing and starts collecting.',

      's.form.t': 'The container that collects and sends',
      's.form.d':
        '<p><code>&lt;form&gt;</code> wraps a group of fields and gives them somewhere to go. On its own it draws nothing; it becomes useful the moment something inside it is submitted.</p>' +
        '<p>Everything the visitor filled in is gathered up — each value labelled with the name of its field — and sent off as one package.</p>',
      's.form.action':
        '<p><code>action</code> is the address the package is sent to.</p>' +
        '<p>Leave it out and the form submits back to the address of the current page, which is often exactly what you want while you are still building.</p>',
      's.form.method':
        '<p><code>method</code> is how it is sent, and in practice there are two answers.</p>' +
        '<p><code>get</code> appends the values to the address as a query string. The result is visible, bookmarkable and shareable — right for a search, wrong for anything private. <code>post</code> puts the values in the body of the request instead: use it for anything that changes something on the server, anything long, and anything you would not want sitting in a browser history. Write nothing and you get <code>get</code>.</p>',

      's.input.t': 'One field, in many disguises',
      's.input.d':
        '<p><code>&lt;input&gt;</code> is a single field. It has no closing tag and no content — every last thing about it is decided by attributes.</p>' +
        '<p>It is the most versatile element in HTML, because one attribute changes what it actually is.</p>',
      's.input.type':
        '<p><code>type</code> decides what kind of field you get: a line of text, an email address, a hidden password, a number, a date, a tick box, a radio button, a file picker.</p>' +
        '<p>Choosing the right one is worth more than it looks. The browser shows a suitable keyboard on a phone, offers a date picker where one makes sense, and refuses to submit an <code>email</code> field that plainly is not an email address — all without a line of JavaScript.</p>',
      's.input.name':
        '<p><code>name</code> is the label the value is sent under. At the receiving end, this is how the value is found.</p>' +
        '<p>A field with no <code>name</code> is not sent at all. It still appears, the visitor can still type in it, and the value quietly never arrives. This is by far the most common reason a field goes missing from submitted data.</p>',
      's.input.value':
        '<p><code>value</code> is the content of the field, and what it means depends on the type.</p>' +
        '<p>On a text field it is the text the field starts with. On a checkbox or radio button it is what gets sent if the visitor ticks it — the tick itself only decides whether the value is sent, not what it is.</p>',
      's.input.placeholder':
        '<p><code>placeholder</code> is the faint hint shown inside an empty field, usually an example of the expected format.</p>' +
        '<p>It vanishes the moment the visitor starts typing, so it can never replace a <code>&lt;label&gt;</code>. A form labelled only by placeholders becomes unreadable exactly when it is half filled in.</p>',
      's.input.state':
        '<p>Three boolean attributes that look similar and behave differently.</p>' +
        '<p><code>required</code> stops the form being submitted while the field is empty, and the browser says so. <code>readonly</code> shows the value, refuses to let it be edited, and still sends it. <code>disabled</code> greys the field out, refuses to let it be edited, and does <em>not</em> send it. That last difference is the one that catches people out: a disabled field is missing from the data.</p>',
      's.input.checked':
        '<p><code>checked</code> is a boolean attribute that makes a checkbox or radio button start out ticked.</p>',

      's.button.t': 'Something to press',
      's.button.d':
        '<p><code>&lt;button&gt;</code> is a button you can press. Unlike a field it has a closing tag and real content, so its caption can be text, an icon, or markup — whatever you like.</p>',
      's.button.type':
        '<p><code>type</code> decides what pressing it does, and the default is the thing to remember.</p>' +
        '<p><code>submit</code> sends the form — and it is what you get when you write no <code>type</code> at all inside a form. A plain <code>&lt;button&gt;</code> meant as an innocent toggle will submit the form and reload the page. <code>button</code> does nothing by itself and is what you want for anything driven by JavaScript. <code>reset</code> puts the form back to its starting values.</p>',
      's.button.disabled':
        '<p><code>disabled</code> is a boolean attribute: the button cannot be pressed, and like a disabled field it is not sent with the form.</p>',

      's.label.t': 'The caption that belongs to a field',
      's.label.d':
        '<p><code>&lt;label&gt;</code> is the text that names a field. It is not decoration, and plain text sitting next to an input is not the same thing.</p>' +
        '<p>A real label is clickable: pressing it moves the cursor into the field, or ticks the checkbox. That turns a tiny tick box into a comfortably large target. A screen reader also announces the label when the field is reached, so the visitor knows what is being asked.</p>',
      's.label.for':
        '<p><code>for</code> holds the <code>id</code> of the field the label belongs to. The two strings have to match exactly; a typo leaves you with a label attached to nothing — it looks right and behaves like plain text.</p>',
      's.label.wrapH': 'Or wrap the field',
      's.label.wrap':
        '<p>The alternative is to put the field inside the label. The connection is then implied, and neither <code>for</code> nor <code>id</code> is needed.</p>' +
        '<p>This reads well for checkboxes and radio buttons, where the caption sits right beside the box anyway.</p>',

      's.textarea.t': 'Text on more than one line',
      's.textarea.d':
        '<p><code>&lt;textarea&gt;</code> is a field for text that runs to several lines: a message, a comment, an address.</p>' +
        '<p>It differs from <code>&lt;input&gt;</code> in one structural way worth learning once and for all. It has a closing tag, and its content sits between the tags. There is no <code>value</code> attribute — whatever you write inside is the starting text, and every space and line break in there counts.</p>',
      's.textarea.size':
        '<p><code>rows</code> is the height in lines of text and <code>cols</code> the width in characters.</p>' +
        '<p>CSS normally takes over the real sizing, but <code>rows</code> remains a quick and honest way to say how tall the box should start out.</p>',
      's.textarea.rest':
        '<p>These three behave exactly as they do on <code>&lt;input&gt;</code>: a faint hint in the empty box, a refusal to submit while it is empty, and a cap on how many characters can be typed.</p>' +
        '<p><code>name</code> matters here for exactly the same reason as everywhere else — without it the message is never sent.</p>',

      's.note':
        '<p>Two reasons a value goes missing from submitted data, and between them they cover almost every case: the field has no <code>name</code>, or the field is <code>disabled</code>. Neither shows any sign on the page. If something you filled in never arrived, check those two first.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'HTML-теги: form, input, button, label, textarea',
      kicker: 'Урок 5 &middot; HTML &amp; CSS',
      title: 'HTML-теги: form, input, button, label, textarea',
      lead: 'П’ять елементів, які дають сторінці змогу поставити запитання і отримати відповідь. Саме тут HTML перестає описувати і починає збирати.',

      's.form.t': 'Оболонка, яка збирає і надсилає',
      's.form.d':
        '<p><code>&lt;form&gt;</code> охоплює групу полів і дає їм місце, куди надсилатися. Сама по собі вона нічого не малює; вона стає корисною тієї миті, коли щось усередині неї надсилають.</p>' +
        '<p>Усе, що заповнив відвідувач, збирається докупи — кожне значення підписане іменем свого поля — і вирушає одним пакетом.</p>',
      's.form.action':
        '<p><code>action</code> — це адреса, на яку надсилається пакет.</p>' +
        '<p>Якщо його пропустити, форма надсилається на адресу поточної сторінки — часто саме те, що потрібно, поки ви ще будуєте.</p>',
      's.form.method':
        '<p><code>method</code> — це те, як саме надсилається, і на практиці відповідей дві.</p>' +
        '<p><code>get</code> дописує значення до адреси як рядок запиту. Результат видно, його можна додати в закладки й поділитися ним — годиться для пошуку, не годиться для чогось приватного. <code>post</code> натомість кладе значення в тіло запиту: використовуйте його для всього, що змінює щось на сервері, для всього довгого і для всього, чого ви не хотіли б бачити в історії браузера. Якщо не написати нічого, буде <code>get</code>.</p>',

      's.input.t': 'Одне поле в багатьох подобах',
      's.input.d':
        '<p><code>&lt;input&gt;</code> — це одне поле. Він не має закривального тега і не має вмісту: геть усе про нього визначають атрибути.</p>' +
        '<p>Це найуніверсальніший елемент HTML, бо один атрибут змінює те, чим він насправді є.</p>',
      's.input.type':
        '<p><code>type</code> визначає, яке поле ви отримаєте: рядок тексту, адресу електронної пошти, прихований пароль, число, дату, прапорець, радіокнопку, вибір файлу.</p>' +
        '<p>Обрати правильний варіант важливіше, ніж здається. Браузер покаже придатну клавіатуру на телефоні, запропонує вибір дати там, де це доречно, і відмовиться надсилати поле <code>email</code>, яке очевидно не є адресою пошти — і все це без жодного рядка JavaScript.</p>',
      's.input.name':
        '<p><code>name</code> — це ім’я, під яким надсилається значення. На боці отримувача саме за ним значення й знаходять.</p>' +
        '<p>Поле без <code>name</code> не надсилається взагалі. Воно так само видиме, відвідувач так само може в ньому писати, а значення тихо ніколи не доходить. Це найпоширеніша причина, чому поле зникає з надісланих даних.</p>',
      's.input.value':
        '<p><code>value</code> — це вміст поля, і його зміст залежить від типу.</p>' +
        '<p>У текстовому полі це текст, з якого поле починається. У прапорці чи радіокнопці це те, що надсилається, якщо відвідувач їх позначить — сама позначка вирішує лише, чи надсилати значення, а не яким воно буде.</p>',
      's.input.placeholder':
        '<p><code>placeholder</code> — це бліда підказка всередині порожнього поля, зазвичай приклад очікуваного формату.</p>' +
        '<p>Вона зникає тієї ж миті, коли відвідувач починає писати, тож вона ніколи не замінить <code>&lt;label&gt;</code>. Форма, підписана самими лише підказками, стає нечитабельною саме тоді, коли заповнена наполовину.</p>',
      's.input.state':
        '<p>Три булеві атрибути, які виглядають схоже, а поводяться по-різному.</p>' +
        '<p><code>required</code> не дає надіслати форму, поки поле порожнє, і браузер про це повідомляє. <code>readonly</code> показує значення, не дає його редагувати — і все одно надсилає. <code>disabled</code> робить поле сірим, не дає його редагувати і <em>не</em> надсилає. Саме остання відмінність і підводить людей: вимкнене поле відсутнє в даних.</p>',
      's.input.checked':
        '<p><code>checked</code> — булевий атрибут, який робить прапорець або радіокнопку позначеними від початку.</p>',

      's.button.t': 'Те, що можна натиснути',
      's.button.d':
        '<p><code>&lt;button&gt;</code> — це кнопка, яку можна натиснути. На відміну від поля, вона має закривальний тег і справжній вміст, тож її напис може бути текстом, піктограмою або розміткою — чим завгодно.</p>',
      's.button.type':
        '<p><code>type</code> визначає, що робить натискання, і саме типове значення варто запам’ятати.</p>' +
        '<p><code>submit</code> надсилає форму — і це те, що ви отримаєте, якщо взагалі не напишете <code>type</code> усередині форми. Звичайна <code>&lt;button&gt;</code>, задумана як безневинний перемикач, надішле форму і перезавантажить сторінку. <code>button</code> сам по собі не робить нічого і потрібен для всього, що керується JavaScript. <code>reset</code> повертає форму до початкових значень.</p>',
      's.button.disabled':
        '<p><code>disabled</code> — булевий атрибут: кнопку неможливо натиснути, і, як і вимкнене поле, вона не надсилається разом із формою.</p>',

      's.label.t': 'Підпис, що належить полю',
      's.label.d':
        '<p><code>&lt;label&gt;</code> — це текст, який називає поле. Це не оздоблення, і звичайний текст поруч із полем — це не те саме.</p>' +
        '<p>Справжня мітка клікабельна: натискання переводить курсор у поле або ставить позначку в прапорці. Це перетворює крихітний квадратик на зручно велику ціль. Читач екрана також озвучує мітку, коли доходить до поля, тож відвідувач знає, про що його питають.</p>',
      's.label.for':
        '<p><code>for</code> містить <code>id</code> поля, якому належить мітка. Ці два рядки мають збігатися точно; одна помилка в написанні — і мітка прив’язана ні до чого: виглядає правильно, а поводиться як звичайний текст.</p>',
      's.label.wrapH': 'Або загорніть поле',
      's.label.wrap':
        '<p>Альтернатива — покласти поле всередину мітки. Зв’язок тоді мається на увазі, і ні <code>for</code>, ні <code>id</code> не потрібні.</p>' +
        '<p>Це добре читається для прапорців і радіокнопок, де підпис і так стоїть одразу біля квадратика.</p>',

      's.textarea.t': 'Текст у кілька рядків',
      's.textarea.d':
        '<p><code>&lt;textarea&gt;</code> — це поле для тексту, що займає кілька рядків: повідомлення, коментар, адреса.</p>' +
        '<p>Від <code>&lt;input&gt;</code> він відрізняється однією структурною річчю, яку варто вивчити раз і назавжди. Він має закривальний тег, і його вміст стоїть між тегами. Атрибута <code>value</code> немає — те, що ви напишете всередині, і є початковим текстом, причому кожен пробіл і перенесення рядка там мають значення.</p>',
      's.textarea.size':
        '<p><code>rows</code> — це висота в рядках тексту, а <code>cols</code> — ширина в символах.</p>' +
        '<p>Зазвичай справжні розміри перебирає на себе CSS, але <code>rows</code> лишається швидким і чесним способом сказати, якою заввишки має бути коробка спочатку.</p>',
      's.textarea.rest':
        '<p>Ці три поводяться точно так само, як у <code>&lt;input&gt;</code>: бліда підказка в порожній коробці, відмова надсилати, поки вона порожня, і обмеження кількості символів.</p>' +
        '<p><code>name</code> тут важливий з тієї самої причини, що й усюди — без нього повідомлення ніколи не надійде.</p>',

      's.note':
        '<p>Дві причини, чому значення зникає з надісланих даних, і разом вони покривають майже всі випадки: у поля немає <code>name</code>, або поле <code>disabled</code>. Жодна з них ніяк не позначається на вигляді сторінки. Якщо щось заповнене так і не дійшло — перевірте спершу ці дві.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Du sender inn skjemaet, og ett av feltene mangler rett og slett i dataene som kommer fram. Feltet var synlig, og du skrev i det. Hva er den mest sannsynlige årsaken?',
        answer: 0,
        options: [
          {
            text: 'Det har ingen <code>name</code>.',
            why: '<code>name</code> er navnet en verdi sendes under. Uten det sendes feltet ikke i det hele tatt, og ingenting på siden antyder det.',
          },
          {
            text: 'Det har ingen <code>placeholder</code>.',
            why: 'En plassholder er bare et hint som vises i et tomt felt. Den har ingenting med hva som sendes å gjøre.',
          },
          {
            text: 'Det har ingen <code>value</code>.',
            why: 'Du skrev i det, så det hadde en verdi. En tom verdi ville dessuten kommet fram — bare tom.',
          },
          {
            text: 'Skjemaet har ingen <code>action</code>.',
            why: 'Uten <code>action</code> sendes skjemaet til den nåværende siden — da går alle feltene med, ikke bare ett.',
          },
        ],
      },
      {
        q: 'Du legger en enkel <code>&lt;button&gt;Vis mer&lt;/button&gt;</code> inne i et <code>&lt;form&gt;</code>. Et klikk laster siden på nytt i stedet for å gjøre det du forventet. Hvorfor?',
        answer: 1,
        options: [
          {
            text: 'Knapper kan ikke brukes inne i et skjema.',
            why: 'Det kan de, og det gjør de vanligvis. Problemet er hvilken type knapp du fikk.',
          },
          {
            text: 'Inne i et skjema får en knapp uten <code>type</code> standardverdien <code>type="submit"</code>.',
            why: 'Den sendte inn skjemaet, og det lastet siden på nytt. Skriv <code>type="button"</code> for en knapp som bare skal gjøre det JavaScript-en din sier.',
          },
          {
            text: 'Knappen mangler en <code>name</code>.',
            why: 'En manglende <code>name</code> påvirker bare hva som sendes. Den får ikke et trykk til å sende inn skjemaet.',
          },
          {
            text: 'Knappen trenger <code>disabled</code>.',
            why: 'Det ville hindret at den kunne trykkes i det hele tatt, og det er ikke det du vil.',
          },
        ],
      },
      {
        q: 'Du vil at et klikk på teksten ved siden av en liten avkrysningsboks skal krysse av boksen. Hva får det til å virke?',
        answer: 1,
        options: [
          {
            text: 'Å legge teksten i en <code>&lt;span&gt;</code> ved siden av.',
            why: 'Vanlig tekst ved siden av et felt er bare tekst. Ingenting knytter den til avkrysningsboksen.',
          },
          {
            text: 'En <code>&lt;label&gt;</code> der <code>for</code> stemmer med <code>id</code>-en til boksen.',
            why: 'Det er forbindelsen. Da blir labelen klikkbar, og en skjermleser leser den opp sammen med feltet. Å pakke feltet inne i labelen gjør det samme, uten <code>for</code> og <code>id</code>.',
          },
          {
            text: 'En <code>&lt;label&gt;</code> der <code>for</code> stemmer med <code>name</code>-en til boksen.',
            why: 'Nesten, men <code>for</code> peker på <code>id</code>, ikke på <code>name</code>. De skrives ofte likt, og det skjuler feilen helt til de er forskjellige.',
          },
          {
            text: 'Å sette <code>checked</code> på avkrysningsboksen.',
            why: 'Det avgjør bare om boksen starter avkrysset.',
          },
        ],
      },
      {
        q: 'Du vil ha et felt den besøkende kan se, men ikke endre, og der verdien likevel må komme fram med skjemaet. Hva bruker du?',
        answer: 1,
        options: [
          {
            text: '<code>disabled</code>',
            why: 'Et deaktivert felt kan ikke redigeres, men det sendes ikke. Verdien du trengte, ville manglet.',
          },
          {
            text: '<code>readonly</code>',
            why: '<code>readonly</code> viser verdien, nekter redigering og sender den likevel. Nettopp den kombinasjonen det spørres om.',
          },
          {
            text: '<code>required</code>',
            why: '<code>required</code> nekter bare å sende mens feltet er tomt. Det hindrer ingen i å redigere.',
          },
          {
            text: '<code>placeholder</code>',
            why: 'En plassholder er et hint i et tomt felt, ikke en måte å låse en verdi på.',
          },
        ],
      },
      {
        q: 'Skjemaet ditt inneholder et passord. Hvilken <code>method</code> gir du det?',
        answer: 2,
        options: [
          {
            text: '<code>method="get"</code>',
            why: '<code>get</code> legger verdiene i adressen, så passordet ville havnet i adressefeltet, i historikken og i serverloggene.',
          },
          {
            text: 'Ingen <code>method</code> — standarden er trygg.',
            why: 'Standarden er <code>get</code>, og det er nettopp den du vil unngå her.',
          },
          {
            text: '<code>method="post"</code>',
            why: '<code>post</code> bærer verdiene i selve forespørselen i stedet for i adressen. Riktig valg for alt som er privat, langt eller endrer noe.',
          },
          {
            text: '<code>method="hidden"</code>',
            why: 'Det finnes ingen slik metode. De to du vil bruke, er <code>get</code> og <code>post</code>.',
          },
        ],
      },
      {
        q: 'Hvordan gir du en <code>&lt;textarea&gt;</code> teksten den skal starte med?',
        answer: 2,
        options: [
          {
            text: 'Med et <code>value</code>-attributt.',
            why: 'En <code>&lt;textarea&gt;</code> har ikke noe <code>value</code>-attributt. Det er nettopp den strukturelle forskjellen fra <code>&lt;input&gt;</code>.',
          },
          {
            text: 'Med en <code>placeholder</code>.',
            why: 'En plassholder er et hint som forsvinner så snart noen skriver. Den er ikke innholdet i feltet.',
          },
          {
            text: 'Mellom start- og sluttaggen.',
            why: 'Innholdet i en <code>&lt;textarea&gt;</code> er starteksten — mellomrom og linjeskift inkludert.',
          },
          {
            text: 'Det går ikke — en <code>&lt;textarea&gt;</code> starter alltid tom.',
            why: 'Det går fint, bare ikke med et attributt.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'You submit your form and one of the fields is simply missing from the data that arrives. The field was visible and you typed in it. What is the most likely cause?',
        answer: 0,
        options: [
          {
            text: 'It has no <code>name</code>.',
            why: '<code>name</code> is the label a value is sent under. Without one the field is not submitted at all, and nothing on the page hints at it.',
          },
          {
            text: 'It has no <code>placeholder</code>.',
            why: 'A placeholder is only a hint shown in an empty field. It has nothing to do with what is sent.',
          },
          {
            text: 'It has no <code>value</code>.',
            why: 'You typed in it, so it had a value. An empty value would arrive too — just empty.',
          },
          {
            text: 'The form has no <code>action</code>.',
            why: 'Without an <code>action</code> the form submits to the current page — all the fields still go, not just one.',
          },
        ],
      },
      {
        q: 'You put a plain <code>&lt;button&gt;Show more&lt;/button&gt;</code> inside a <code>&lt;form&gt;</code>. Clicking it reloads the page instead of doing what you expected. Why?',
        answer: 1,
        options: [
          {
            text: 'Buttons cannot be used inside a form.',
            why: 'They can, and normally are. The problem is which kind of button you got.',
          },
          {
            text: 'Inside a form, a button with no <code>type</code> defaults to <code>type="submit"</code>.',
            why: 'It submitted the form, which reloaded the page. Write <code>type="button"</code> for a button that should only do what your JavaScript tells it.',
          },
          {
            text: 'The button is missing a <code>name</code>.',
            why: 'A missing <code>name</code> only affects what is sent. It does not cause the press to submit.',
          },
          {
            text: 'The button needs <code>disabled</code>.',
            why: 'That would stop it being pressed at all, which is not what you want.',
          },
        ],
      },
      {
        q: 'You want clicking the caption beside a small checkbox to tick the box. What makes that work?',
        answer: 1,
        options: [
          {
            text: 'Putting the text in a <code>&lt;span&gt;</code> next to it.',
            why: 'Plain text next to a field is only text. Nothing connects it to the checkbox.',
          },
          {
            text: 'A <code>&lt;label&gt;</code> whose <code>for</code> matches the <code>id</code> of the checkbox.',
            why: 'That is the connection. The label becomes clickable, and a screen reader announces it with the field. Wrapping the input inside the label does the same thing without <code>for</code> and <code>id</code>.',
          },
          {
            text: 'A <code>&lt;label&gt;</code> whose <code>for</code> matches the <code>name</code> of the checkbox.',
            why: 'Close, but <code>for</code> points at the <code>id</code>, not the <code>name</code>. The two are often written the same, which hides the mistake until they differ.',
          },
          {
            text: 'Setting <code>checked</code> on the checkbox.',
            why: 'That only decides whether the box starts ticked.',
          },
        ],
      },
      {
        q: 'You want a field the visitor can see but not change, and whose value must still arrive with the form. Which do you use?',
        answer: 1,
        options: [
          {
            text: '<code>disabled</code>',
            why: 'A disabled field cannot be edited, but it is not submitted. The value you needed would be missing.',
          },
          {
            text: '<code>readonly</code>',
            why: '<code>readonly</code> shows the value, refuses edits, and still sends it. Exactly the combination asked for.',
          },
          {
            text: '<code>required</code>',
            why: '<code>required</code> only refuses to submit while the field is empty. It does nothing to stop editing.',
          },
          {
            text: '<code>placeholder</code>',
            why: 'A placeholder is a hint in an empty field, not a way to fix a value in place.',
          },
        ],
      },
      {
        q: 'Your form carries a password. Which <code>method</code> do you give it?',
        answer: 2,
        options: [
          {
            text: '<code>method="get"</code>',
            why: '<code>get</code> puts the values in the address, so the password would sit in the address bar, in the history and in the server logs.',
          },
          {
            text: 'No <code>method</code> at all — the default is safe.',
            why: 'The default is <code>get</code>, which is the one you want to avoid here.',
          },
          {
            text: '<code>method="post"</code>',
            why: '<code>post</code> carries the values in the body of the request instead of the address. The right choice for anything private, long, or that changes something.',
          },
          {
            text: '<code>method="hidden"</code>',
            why: 'There is no such method. The two you will use are <code>get</code> and <code>post</code>.',
          },
        ],
      },
      {
        q: 'How do you give a <code>&lt;textarea&gt;</code> the text it should start with?',
        answer: 2,
        options: [
          {
            text: 'With a <code>value</code> attribute.',
            why: 'A <code>&lt;textarea&gt;</code> has no <code>value</code> attribute. That is precisely its structural difference from <code>&lt;input&gt;</code>.',
          },
          {
            text: 'With a <code>placeholder</code>.',
            why: 'A placeholder is a hint that disappears as soon as anyone types. It is not the content of the field.',
          },
          {
            text: 'Between the opening and closing tags.',
            why: 'The content of a <code>&lt;textarea&gt;</code> is its starting text, spaces and line breaks included.',
          },
          {
            text: 'It is not possible — a <code>&lt;textarea&gt;</code> always starts empty.',
            why: 'It is perfectly possible, just not with an attribute.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Ви надсилаєте форму, і одного з полів просто немає в даних, які надійшли. Поле було видиме, і ви в ньому писали. Яка найімовірніша причина?',
        answer: 0,
        options: [
          {
            text: 'У нього немає <code>name</code>.',
            why: '<code>name</code> — це ім’я, під яким надсилається значення. Без нього поле не надсилається взагалі, і ніщо на сторінці про це не натякає.',
          },
          {
            text: 'У нього немає <code>placeholder</code>.',
            why: 'Підказка лише показується в порожньому полі. До того, що надсилається, вона не має стосунку.',
          },
          {
            text: 'У нього немає <code>value</code>.',
            why: 'Ви в ньому писали, тож значення було. Та й порожнє значення теж надійшло б — просто порожнім.',
          },
          {
            text: 'У форми немає <code>action</code>.',
            why: 'Без <code>action</code> форма надсилається на поточну сторінку — тоді йдуть усі поля, а не одне.',
          },
        ],
      },
      {
        q: 'Ви ставите звичайну <code>&lt;button&gt;Показати більше&lt;/button&gt;</code> усередині <code>&lt;form&gt;</code>. Натискання перезавантажує сторінку замість того, що ви очікували. Чому?',
        answer: 1,
        options: [
          {
            text: 'Кнопки не можна використовувати всередині форми.',
            why: 'Можна, і зазвичай так і роблять. Проблема в тому, яку саме кнопку ви отримали.',
          },
          {
            text: 'Усередині форми кнопка без <code>type</code> типово стає <code>type="submit"</code>.',
            why: 'Вона надіслала форму, і це перезавантажило сторінку. Пишіть <code>type="button"</code> для кнопки, яка має робити лише те, що каже ваш JavaScript.',
          },
          {
            text: 'Кнопці бракує <code>name</code>.',
            why: 'Відсутній <code>name</code> впливає лише на те, що надсилається. Він не змушує натискання надсилати форму.',
          },
          {
            text: 'Кнопці потрібен <code>disabled</code>.',
            why: 'Це взагалі не дало б її натиснути, а це не те, чого ви хочете.',
          },
        ],
      },
      {
        q: 'Ви хочете, щоб натискання на підпис поруч із маленьким прапорцем ставило в ньому позначку. Що це забезпечує?',
        answer: 1,
        options: [
          {
            text: 'Покласти текст у <code>&lt;span&gt;</code> поруч.',
            why: 'Звичайний текст поруч із полем — це лише текст. Ніщо не пов’язує його з прапорцем.',
          },
          {
            text: '<code>&lt;label&gt;</code>, у якої <code>for</code> збігається з <code>id</code> прапорця.',
            why: 'Це і є той зв’язок. Мітка стає клікабельною, а читач екрана озвучує її разом із полем. Загортання поля всередину мітки дає те саме без <code>for</code> та <code>id</code>.',
          },
          {
            text: '<code>&lt;label&gt;</code>, у якої <code>for</code> збігається з <code>name</code> прапорця.',
            why: 'Майже, але <code>for</code> вказує на <code>id</code>, а не на <code>name</code>. Їх часто пишуть однаково, і це приховує помилку, доки вони не розійдуться.',
          },
          {
            text: 'Поставити <code>checked</code> на прапорець.',
            why: 'Це визначає лише те, чи буде прапорець позначений від початку.',
          },
        ],
      },
      {
        q: 'Вам потрібне поле, яке відвідувач бачить, але не може змінити, і значення якого все одно має надійти разом із формою. Що візьмете?',
        answer: 1,
        options: [
          {
            text: '<code>disabled</code>',
            why: 'Вимкнене поле не можна редагувати, але воно не надсилається. Потрібного значення просто не було б.',
          },
          {
            text: '<code>readonly</code>',
            why: '<code>readonly</code> показує значення, не дає редагувати — і все одно надсилає. Саме та комбінація, про яку йдеться.',
          },
          {
            text: '<code>required</code>',
            why: '<code>required</code> лише не дає надіслати, поки поле порожнє. Редагуванню він не заважає.',
          },
          {
            text: '<code>placeholder</code>',
            why: 'Підказка — це текст у порожньому полі, а не спосіб зафіксувати значення.',
          },
        ],
      },
      {
        q: 'Ваша форма містить пароль. Який <code>method</code> ви їй дасте?',
        answer: 2,
        options: [
          {
            text: '<code>method="get"</code>',
            why: '<code>get</code> кладе значення в адресу, тож пароль опинився б в адресному рядку, в історії та в журналах сервера.',
          },
          {
            text: 'Жодного <code>method</code> — типове значення безпечне.',
            why: 'Типове значення — <code>get</code>, і саме його тут варто уникати.',
          },
          {
            text: '<code>method="post"</code>',
            why: '<code>post</code> несе значення в тілі запиту, а не в адресі. Правильний вибір для всього приватного, довгого або такого, що щось змінює.',
          },
          {
            text: '<code>method="hidden"</code>',
            why: 'Такого методу немає. Два, якими ви користуватиметеся, — <code>get</code> і <code>post</code>.',
          },
        ],
      },
      {
        q: 'Як дати <code>&lt;textarea&gt;</code> текст, з якого вона має починатися?',
        answer: 2,
        options: [
          {
            text: 'Атрибутом <code>value</code>.',
            why: 'У <code>&lt;textarea&gt;</code> немає атрибута <code>value</code>. Це і є її структурна відмінність від <code>&lt;input&gt;</code>.',
          },
          {
            text: 'Через <code>placeholder</code>.',
            why: 'Підказка зникає, щойно хтось починає писати. Вона не є вмістом поля.',
          },
          {
            text: 'Між відкривальним і закривальним тегами.',
            why: 'Вміст <code>&lt;textarea&gt;</code> і є її початковим текстом — разом із пробілами та переносами рядків.',
          },
          {
            text: 'Це неможливо — <code>&lt;textarea&gt;</code> завжди починається порожньою.',
            why: 'Цілком можливо, просто не атрибутом.',
          },
        ],
      },
    ],
  },
});
