/*
 * Content of JS lesson 01 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Enkle grunntyper: string, number, boolean, null, undefined',
      kicker: 'Leksjon 1 &middot; Javascript',
      title: 'Enkle grunntyper: string, number, boolean, null, undefined',
      lead: 'Fem av de enkleste verdiene språket har. De ser trivielle ut, og likevel ligger de fleste overraskelsene i Javascript akkurat her — i hvordan tall regnes, hva som teller som usant, og forskjellen på de to måtene å si «ingenting».',

      's.typeof.t': 'Å spørre hva noe er',
      's.typeof.d':
        '<p><code>typeof</code> gir deg navnet på typen som en tekst. Det er det raskeste verktøyet du har når du lurer på hva som faktisk ligger i en variabel.</p>' +
        '<p>Språket har sju primitive typer. Fem av dem møter du hele tiden og er tema her; <code>symbol</code> og <code>bigint</code> er sjeldnere og får sin egen plass senere.</p>' +
        '<p>Det som ikke er en primitiv, er et objekt — og arrays og funksjoner er også objekter. Skillet betyr noe: en primitiv verdi kopieres når du sender den videre, mens et objekt deles. Det kommer vi tilbake til.</p>',

      's.string.t': 'Tekst',
      's.string.d':
        '<p>Tekst skrives med enkle eller doble anførselstegn, og de to er helt likeverdige. Velg én og hold deg til den; verktøyene i et prosjekt gjør som regel valget for deg.</p>' +
        '<p>Bakover-apostrofer er noe annet: der kan du sette <code>${...}</code> midt inne i teksten og få verdier rett inn. Den formen kan også gå over flere linjer, i motsetning til de to andre.</p>' +
        '<p>Det viktigste å vite er at en tekst ikke kan endres. Du kan ikke bytte ut ett tegn i den; forsøket gjør ingenting og sier heller ikke fra. Alle metoder som «endrer» en tekst, lager i virkeligheten en ny.</p>',

      's.number.t': 'Tall — bare ett slags',
      's.number.d':
        '<p>Javascript har ikke egne typer for heltall og desimaltall. Det finnes ett tallslag, og det lagres som et flyttall med 64 bit. Det gjør språket enkelt å begynne med, og forklarer to ting som ellers virker som feil.</p>' +
        '<p>Det første er <code>0.1 + 0.2</code>, som ikke blir <code>0.3</code>. Det er ikke en feil i Javascript: 0,1 kan ikke skrives nøyaktig i totallsystemet, like lite som 1/3 kan skrives nøyaktig med desimaler. Sammenlign derfor aldri to desimaltall med <code>===</code> etter å ha regnet på dem — se heller på om forskjellen er liten nok. Og hold beløp i hele øre, ikke i kroner med komma.</p>' +
        '<p>Det andre er at heltall bare er eksakte opp til <code>Number.MAX_SAFE_INTEGER</code>. Over den grensen begynner to forskjellige tall å se like ut for språket.</p>' +
        '<p>Til slutt tre verdier som er tall uten å være mengder: <code>Infinity</code>, <code>-Infinity</code> og <code>NaN</code>. <code>NaN</code> er den rare: den er av typen <code>number</code>, og den er ikke lik seg selv. Derfor finnes <code>Number.isNaN()</code> — det er den eneste pålitelige måten å kjenne den igjen på.</p>',

      's.boolean.t': 'Sant og usant',
      's.boolean.d':
        '<p><code>true</code> og <code>false</code> er hele typen. Det som er verdt å lære, er hva som skjer når noe <em>annet</em> enn en boolsk verdi havner i en <code>if</code>.</p>' +
        '<p>Da regnes verdien om, og åtte verdier blir til usant: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, den tomme teksten, <code>null</code>, <code>undefined</code> og <code>NaN</code>. Alt annet blir sant. Listen er kort nok til å huske, og det lønner seg.</p>' +
        '<p>Fellene ligger i det som ser tomt ut uten å være det. Teksten <code>\'0\'</code> er sann fordi den ikke er tom. Det samme gjelder <code>\'false\'</code>. Og et tomt array er sant, fordi det er et objekt — vil du vite om det har innhold, må du se på lengden.</p>',

      's.null.t': 'Tomt med vilje',
      's.null.d':
        '<p><code>null</code> betyr at noen har bestemt at det ikke er noe her. Det er en verdi du skriver selv, for å si at plassen er tom med hensikt.</p>' +
        '<p>Språket lager den aldri for deg. Finner du en <code>null</code> i koden, er det fordi du eller et bibliotek satte den der — og det er nettopp den beskjeden den bærer.</p>',

      's.undefined.t': 'Tomt fordi ingen fylte det',
      's.undefined.d':
        '<p><code>undefined</code> er den språket produserer på egen hånd. En variabel som er erklært men ikke tildelt, en egenskap som ikke finnes på et objekt, en funksjon som ikke returnerer noe — alle tre gir <code>undefined</code>.</p>' +
        '<p>Forskjellen på de to er en forskjell i budskap, ikke i teknikk. <code>null</code> sier «jeg la ingenting her». <code>undefined</code> sier «ingen la noe her». Får du <code>undefined</code> der du ventet en verdi, er det som regel en skrivefeil i et egenskapsnavn eller en funksjon som glemte sin <code>return</code>.</p>',

      's.compare.t': 'De to sammenlignet — og den berømte feilen',
      's.compare.d':
        '<p><code>typeof null</code> gir <code>\'object\'</code>. Det er feil, det har vært feil siden 1995, og det kommer aldri til å bli rettet: for mye kode på nettet regner med det. Å sjekke om noe er <code>null</code> med <code>typeof</code> virker derfor ikke — sammenlign direkte i stedet.</p>' +
        '<p>Med dobbelt likhetstegn regnes <code>null</code> og <code>undefined</code> som like, og som like <em>bare</em> med hverandre. Det gjør <code>verdi != null</code> til en nyttig test: den fanger begge to og ingenting annet, ikke <code>0</code> og ikke den tomme teksten.</p>' +
        '<p>Og så et par som ikke følger noen regel du ville gjettet: <code>null == 0</code> er usant, men <code>null &gt;= 0</code> er sant. De to operatorene regner om verdiene på hver sin måte. Det er ikke verdt å lære seg reglene bak — det er verdt å la være å sammenligne <code>null</code> med tall.</p>',

      's.note':
        '<p>Kortversjonen. <code>typeof</code> for å sjekke type, men ikke for <code>null</code>. Ett tallslag, så sammenlign aldri desimaltall med <code>===</code>, og bruk <code>Number.isNaN()</code>. Åtte verdier er usanne — resten, også <code>\'0\'</code> og <code>[]</code>, er sanne. <code>null</code> setter du selv, <code>undefined</code> får du. Og <code>!= null</code> er den ene korte testen som fanger begge.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Basic simple types: string, number, boolean, null, undefined',
      kicker: 'Lesson 1 &middot; Javascript',
      title: 'Basic simple types: string, number, boolean, null, undefined',
      lead: 'Five of the simplest values the language has. They look trivial, and yet most of the surprises in Javascript live exactly here — in how numbers are counted, what counts as false, and the difference between the two ways of saying "nothing".',

      's.typeof.t': 'Asking what something is',
      's.typeof.d':
        '<p><code>typeof</code> hands you the name of the type as a piece of text. It is the quickest tool you have when you are not sure what is actually sitting in a variable.</p>' +
        '<p>The language has seven primitive types. Five of them you meet constantly and they are the subject here; <code>symbol</code> and <code>bigint</code> are rarer and get their own place later.</p>' +
        '<p>Anything that is not a primitive is an object — and arrays and functions are objects too. The distinction matters: a primitive value is copied when you pass it on, while an object is shared. We will come back to that.</p>',

      's.string.t': 'Text',
      's.string.d':
        '<p>Text is written with single or double quotes, and the two are entirely equivalent. Pick one and stay with it; the tooling in a project usually makes the choice for you.</p>' +
        '<p>Backticks are something else: inside them you can put <code>${...}</code> in the middle of the text and drop values straight in. That form can also run across several lines, unlike the other two.</p>' +
        '<p>The important thing to know is that a string cannot be changed. You cannot swap out one character in it; the attempt does nothing and does not complain either. Every method that appears to "change" a string is in fact making a new one.</p>',

      's.number.t': 'Number — only one kind',
      's.number.d':
        '<p>Javascript has no separate types for whole numbers and decimals. There is one kind of number, and it is stored as a 64-bit floating point value. That makes the language simple to start with, and explains two things that otherwise look like bugs.</p>' +
        '<p>The first is <code>0.1 + 0.2</code>, which does not come out as <code>0.3</code>. That is not a fault in Javascript: 0.1 cannot be written exactly in binary, any more than 1/3 can be written exactly in decimals. So never compare two decimals with <code>===</code> after doing arithmetic on them — check whether the difference is small enough instead. And keep money in whole cents, not in units with a decimal point.</p>' +
        '<p>The second is that whole numbers are exact only up to <code>Number.MAX_SAFE_INTEGER</code>. Above that limit, two different numbers start to look identical to the language.</p>' +
        '<p>Finally, three values that are numbers without being quantities: <code>Infinity</code>, <code>-Infinity</code> and <code>NaN</code>. <code>NaN</code> is the strange one: its type is <code>number</code>, and it is not equal to itself. Which is why <code>Number.isNaN()</code> exists — it is the only reliable way to recognise it.</p>',

      's.boolean.t': 'True and false',
      's.boolean.d':
        '<p><code>true</code> and <code>false</code> are the entire type. What is worth learning is what happens when something <em>other</em> than a boolean ends up in an <code>if</code>.</p>' +
        '<p>The value is then converted, and eight values come out false: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, the empty string, <code>null</code>, <code>undefined</code> and <code>NaN</code>. Everything else comes out true. The list is short enough to memorise, and it pays to.</p>' +
        '<p>The traps are the things that look empty without being empty. The string <code>\'0\'</code> is true because it is not empty. So is <code>\'false\'</code>. And an empty array is true, because it is an object — if you want to know whether it holds anything, you have to look at its length.</p>',

      's.null.t': 'Empty on purpose',
      's.null.d':
        '<p><code>null</code> means someone has decided there is nothing here. It is a value you write yourself, to say that the place is deliberately empty.</p>' +
        '<p>The language never creates it for you. If you find a <code>null</code> in your code, it is because you or a library put it there — and that is precisely the message it carries.</p>',

      's.undefined.t': 'Empty because nobody filled it',
      's.undefined.d':
        '<p><code>undefined</code> is the one the language produces on its own. A variable that is declared but not assigned, a property that is not on an object, a function that returns nothing — all three give you <code>undefined</code>.</p>' +
        '<p>The difference between the two is a difference in message, not in mechanism. <code>null</code> says "I put nothing here". <code>undefined</code> says "nobody put anything here". When you get <code>undefined</code> where you expected a value, it is usually a typo in a property name or a function that forgot its <code>return</code>.</p>',

      's.compare.t': 'The two compared — and the famous bug',
      's.compare.d':
        '<p><code>typeof null</code> gives <code>\'object\'</code>. That is wrong, it has been wrong since 1995, and it will never be fixed: too much code on the web depends on it. Checking whether something is <code>null</code> with <code>typeof</code> therefore does not work — compare directly instead.</p>' +
        '<p>With the double equals, <code>null</code> and <code>undefined</code> count as equal, and as equal <em>only</em> to each other. That makes <code>value != null</code> a useful test: it catches both and nothing else, not <code>0</code> and not the empty string.</p>' +
        '<p>And then a pair that follows no rule you would guess: <code>null == 0</code> is false, but <code>null &gt;= 0</code> is true. The two operators convert the values in different ways. It is not worth learning the rules behind it — it is worth not comparing <code>null</code> with numbers.</p>',

      's.note':
        '<p>The short version. <code>typeof</code> to check a type, but not for <code>null</code>. One kind of number, so never compare decimals with <code>===</code>, and use <code>Number.isNaN()</code>. Eight values are false — everything else, including <code>\'0\'</code> and <code>[]</code>, is true. <code>null</code> you set yourself, <code>undefined</code> you are given. And <code>!= null</code> is the one short test that catches both.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Прості базові типи: string, number, boolean, null, undefined',
      kicker: 'Урок 1 &middot; Javascript',
      title: 'Прості базові типи: string, number, boolean, null, undefined',
      lead: 'П’ять найпростіших значень, які має мова. Вони здаються тривіальними, і все ж більшість несподіванок у Javascript живе саме тут — у тому, як рахуються числа, що вважається хибним і чим різняться два способи сказати «нічого».',

      's.typeof.t': 'Запитати, чим щось є',
      's.typeof.d':
        '<p><code>typeof</code> віддає назву типу у вигляді тексту. Це найшвидший інструмент, коли ви не певні, що саме лежить у змінній.</p>' +
        '<p>Мова має сім примітивних типів. П’ять із них трапляються постійно і є темою тут; <code>symbol</code> і <code>bigint</code> рідкісніші й дістануть своє місце пізніше.</p>' +
        '<p>Усе, що не є примітивом, — це об’єкт, і масиви та функції теж об’єкти. Ця відмінність важить: примітивне значення копіюється, коли ви його передаєте, а об’єкт — розділяється. До цього ми ще повернемося.</p>',

      's.string.t': 'Текст',
      's.string.d':
        '<p>Текст пишуть в одинарних або подвійних лапках, і вони цілком рівноцінні. Оберіть одні й тримайтеся їх; зазвичай інструменти проєкту роблять цей вибір за вас.</p>' +
        '<p>Зворотні лапки — це інше: усередині них можна поставити <code>${...}</code> посеред тексту і вставити значення просто туди. Ця форма також може займати кілька рядків, на відміну від двох інших.</p>' +
        '<p>Найважливіше знати, що текст неможливо змінити. Ви не можете замінити в ньому один символ; спроба нічого не зробить і навіть не поскаржиться. Кожен метод, що начебто «змінює» текст, насправді створює новий.</p>',

      's.number.t': 'Число — лише одного ґатунку',
      's.number.d':
        '<p>У Javascript немає окремих типів для цілих і дробових чисел. Існує один ґатунок числа, і він зберігається як 64-бітове число з рухомою комою. Це робить мову простою на початку і пояснює дві речі, які інакше виглядають як помилки.</p>' +
        '<p>Перша — <code>0.1 + 0.2</code>, що не дає <code>0.3</code>. Це не вада Javascript: 0,1 неможливо записати точно у двійковій системі, так само як 1/3 неможливо точно записати десятковим дробом. Тож ніколи не порівнюйте два дроби через <code>===</code> після обчислень — краще перевіряйте, чи різниця досить мала. А гроші тримайте в цілих копійках, а не в одиницях із комою.</p>' +
        '<p>Друга — цілі числа точні лише до <code>Number.MAX_SAFE_INTEGER</code>. Вище цієї межі два різні числа починають виглядати для мови однаково.</p>' +
        '<p>І нарешті три значення, які є числами, не будучи кількостями: <code>Infinity</code>, <code>-Infinity</code> і <code>NaN</code>. <code>NaN</code> — дивний: його тип <code>number</code>, і він не дорівнює сам собі. Саме тому існує <code>Number.isNaN()</code> — це єдиний надійний спосіб його розпізнати.</p>',

      's.boolean.t': 'Істина і хиба',
      's.boolean.d':
        '<p><code>true</code> і <code>false</code> — це весь тип. Вчити варто те, що стається, коли в <code>if</code> потрапляє щось <em>інше</em>, ніж булеве значення.</p>' +
        '<p>Тоді значення перетворюється, і вісім значень дають хибу: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, порожній текст, <code>null</code>, <code>undefined</code> і <code>NaN</code>. Усе інше дає істину. Перелік досить короткий, щоб його запам’ятати, і це окупається.</p>' +
        '<p>Пастки — у тому, що виглядає порожнім, не будучи порожнім. Текст <code>\'0\'</code> істинний, бо він не порожній. Так само і <code>\'false\'</code>. А порожній масив істинний, бо це об’єкт: щоб дізнатися, чи є в ньому щось, треба дивитися на довжину.</p>',

      's.null.t': 'Порожньо навмисно',
      's.null.d':
        '<p><code>null</code> означає, що хтось вирішив: тут нічого немає. Це значення ви пишете самі, щоб сказати, що місце порожнє навмисно.</p>' +
        '<p>Мова ніколи не створює його за вас. Якщо ви знайшли <code>null</code> у коді, то тому, що його поклали туди ви або бібліотека — і саме це він і повідомляє.</p>',

      's.undefined.t': 'Порожньо, бо ніхто не заповнив',
      's.undefined.d':
        '<p><code>undefined</code> — це те, що мова створює сама. Змінна, оголошена, але не призначена; властивість, якої немає в об’єкта; функція, що нічого не повертає — усі три дають <code>undefined</code>.</p>' +
        '<p>Різниця між цими двома — у повідомленні, а не в механізмі. <code>null</code> каже «я нічого сюди не поклав». <code>undefined</code> каже «сюди ніхто нічого не клав». Коли ви дістаєте <code>undefined</code> там, де чекали значення, це зазвичай одрук у назві властивості або функція, яка забула свій <code>return</code>.</p>',

      's.compare.t': 'Порівняння двох — і знаменита помилка',
      's.compare.d':
        '<p><code>typeof null</code> дає <code>\'object\'</code>. Це неправильно, це неправильно з 1995 року, і це ніколи не виправлять: забагато коду в мережі на це покладається. Тож перевіряти на <code>null</code> через <code>typeof</code> не вийде — порівнюйте напряму.</p>' +
        '<p>З подвійним знаком рівності <code>null</code> і <code>undefined</code> вважаються рівними, і рівними <em>лише</em> одне одному. Це робить <code>значення != null</code> корисною перевіркою: вона ловить обидва і нічого більше — ні <code>0</code>, ні порожній текст.</p>' +
        '<p>І ще пара, яка не підкоряється жодному правилу, яке ви б угадали: <code>null == 0</code> хибне, а <code>null &gt;= 0</code> істинне. Ці два оператори перетворюють значення по-різному. Вчити правила за цим не варто — варто не порівнювати <code>null</code> із числами.</p>',

      's.note':
        '<p>Коротко. <code>typeof</code> для перевірки типу, але не для <code>null</code>. Один ґатунок числа, тож ніколи не порівнюйте дроби через <code>===</code> і беріть <code>Number.isNaN()</code>. Вісім значень хибні — усе інше, зокрема <code>\'0\'</code> і <code>[]</code>, істинне. <code>null</code> ставите ви, <code>undefined</code> дає мова. А <code>!= null</code> — одна коротка перевірка, що ловить обидва.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva gir <code>typeof null</code>?',
        answer: 2,
        options: [
          {
            text: "<code>'null'</code>",
            why: 'Det ville vært det fornuftige svaret, og det er ikke det du får.',
          },
          {
            text: "<code>'undefined'</code>",
            why: 'Det er svaret for <code>undefined</code>. <code>null</code> er en annen verdi.',
          },
          {
            text: "<code>'object'</code>",
            why: 'En feil fra 1995 som aldri blir rettet, fordi for mye kode regner med den. Derfor kan du ikke bruke <code>typeof</code> til å finne <code>null</code> &mdash; sammenlign direkte i stedet.',
          },
          {
            text: 'En feilmelding.',
            why: '<code>typeof</code> feiler aldri. Den gir alltid en tekst tilbake.',
          },
        ],
      },
      {
        q: 'Hva blir <code>0.1 + 0.2 === 0.3</code>?',
        answer: 1,
        options: [
          {
            text: '<code>true</code> &mdash; regnestykket stemmer.',
            why: 'Det stemmer på papiret, men ikke i totallsystemet. Summen blir 0.30000000000000004.',
          },
          {
            text: '<code>false</code> &mdash; 0.1 kan ikke skrives nøyaktig som flyttall.',
            why: 'Det er ikke en feil i Javascript, men i binær representasjon, akkurat som 1/3 ikke kan skrives nøyaktig med desimaler. Sammenlign derfor aldri desimaltall med <code>===</code> etter å ha regnet på dem.',
          },
          {
            text: '<code>NaN</code>',
            why: '<code>NaN</code> oppstår ved ugyldige regnestykker, ikke ved unøyaktige. Summen er et helt vanlig tall.',
          },
          {
            text: 'Det kommer an på nettleseren.',
            why: 'Alle Javascript-motorer bruker samme flyttallstandard. Svaret er det samme overalt.',
          },
        ],
      },
      {
        q: 'Hvilken av disse er <em>sann</em> i en <code>if</code>?',
        answer: 3,
        options: [
          {
            text: '<code>0</code>',
            why: 'Tallet null er en av de åtte usanne verdiene.',
          },
          {
            text: "<code>''</code>",
            why: 'Den tomme teksten er usann. En tekst med noe i, derimot, er alltid sann.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Også usann, og den eneste av dem som heller ikke er lik seg selv.',
          },
          {
            text: "<code>'0'</code>",
            why: 'En tekst med ett tegn i er ikke tom, og dermed sann &mdash; selv om tegnet er et nulltall. Det samme gjelder <code>&#39;false&#39;</code>.',
          },
        ],
      },
      {
        q: 'En funksjon har ingen <code>return</code>. Hva får du når du kaller den?',
        answer: 1,
        options: [
          {
            text: '<code>null</code>',
            why: '<code>null</code> lager språket aldri av seg selv. Den må noen ha skrevet.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Det er språkets egen «ingenting her». Du får den også fra en variabel som ikke er tildelt, og fra en egenskap som ikke finnes.',
          },
          {
            text: '<code>0</code>',
            why: 'Det ville vært en verdi funksjonen valgte å gi deg. Den ga deg ingen.',
          },
          {
            text: 'En feilmelding.',
            why: 'Det er helt lovlig å ikke returnere noe.',
          },
        ],
      },
      {
        q: 'Hva blir <code>null == undefined</code> og <code>null === undefined</code>?',
        answer: 0,
        options: [
          {
            text: '<code>true</code> og <code>false</code>',
            why: 'Med dobbelt likhetstegn regnes de to som like &mdash; og bare med hverandre. Med trippelt teller typen også, og de er to forskjellige typer.',
          },
          {
            text: '<code>true</code> og <code>true</code>',
            why: '<code>===</code> sammenligner også type. <code>null</code> og <code>undefined</code> er ikke samme type.',
          },
          {
            text: '<code>false</code> og <code>false</code>',
            why: 'Det løse likhetstegnet gjør nettopp unntak for dette ene paret.',
          },
          {
            text: 'Begge gir en feilmelding.',
            why: 'Begge sammenligninger er helt lovlige.',
          },
        ],
      },
      {
        q: 'Du vil sjekke om <code>verdi</code> er enten <code>null</code> eller <code>undefined</code>, men ikke <code>0</code> eller tom tekst. Hva skriver du?',
        answer: 2,
        options: [
          {
            text: '<code>if (verdi)</code>',
            why: 'Den fanger alle åtte usanne verdiene. <code>0</code> og den tomme teksten ville falt igjennom, og det var nettopp det du ville unngå.',
          },
          {
            text: '<code>if (typeof verdi !== &#39;null&#39;)</code>',
            why: '<code>typeof null</code> gir <code>&#39;object&#39;</code>, aldri <code>&#39;null&#39;</code>. Testen ville vært sann bestandig.',
          },
          {
            text: '<code>if (verdi != null)</code>',
            why: 'Det løse likhetstegnet gjør <code>null</code> og <code>undefined</code> like &mdash; og bare dem. Ett kort uttrykk fanger begge og ingenting annet.',
          },
          {
            text: '<code>if (verdi !== null)</code>',
            why: 'Den fanger bare <code>null</code>. En <code>undefined</code> ville sluppet forbi.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'What does <code>typeof null</code> give you?',
        answer: 2,
        options: [
          {
            text: "<code>'null'</code>",
            why: 'That would be the sensible answer, and it is not the one you get.',
          },
          {
            text: "<code>'undefined'</code>",
            why: 'That is the answer for <code>undefined</code>. <code>null</code> is a different value.',
          },
          {
            text: "<code>'object'</code>",
            why: 'A bug from 1995 that will never be fixed, because too much code depends on it. Which is why you cannot use <code>typeof</code> to find <code>null</code> — compare directly instead.',
          },
          {
            text: 'An error.',
            why: '<code>typeof</code> never fails. It always hands back a string.',
          },
        ],
      },
      {
        q: 'What is <code>0.1 + 0.2 === 0.3</code>?',
        answer: 1,
        options: [
          {
            text: '<code>true</code> — the arithmetic is right.',
            why: 'It is right on paper, but not in binary. The sum comes out as 0.30000000000000004.',
          },
          {
            text: '<code>false</code> — 0.1 cannot be written exactly as a floating point value.',
            why: 'That is not a fault in Javascript but in binary representation, just as 1/3 cannot be written exactly in decimals. So never compare decimals with <code>===</code> after doing arithmetic on them.',
          },
          {
            text: '<code>NaN</code>',
            why: '<code>NaN</code> comes from invalid arithmetic, not from imprecise arithmetic. The sum is a perfectly ordinary number.',
          },
          {
            text: 'It depends on the browser.',
            why: 'Every Javascript engine uses the same floating point standard. The answer is the same everywhere.',
          },
        ],
      },
      {
        q: 'Which of these is <em>true</em> in an <code>if</code>?',
        answer: 3,
        options: [
          {
            text: '<code>0</code>',
            why: 'The number zero is one of the eight false values.',
          },
          {
            text: "<code>''</code>",
            why: 'The empty string is false. A string with something in it, however, is always true.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Also false, and the only one of them that is not equal to itself either.',
          },
          {
            text: "<code>'0'</code>",
            why: 'A string with one character in it is not empty, and therefore true — even when that character is a zero. The same goes for <code>&#39;false&#39;</code>.',
          },
        ],
      },
      {
        q: 'A function has no <code>return</code>. What do you get when you call it?',
        answer: 1,
        options: [
          {
            text: '<code>null</code>',
            why: 'The language never creates <code>null</code> on its own. Someone has to have written it.',
          },
          {
            text: '<code>undefined</code>',
            why: 'That is the language own "nothing here". You also get it from an unassigned variable, and from a property that is not there.',
          },
          {
            text: '<code>0</code>',
            why: 'That would be a value the function chose to give you. It gave you none.',
          },
          {
            text: 'An error.',
            why: 'Returning nothing is perfectly legal.',
          },
        ],
      },
      {
        q: 'What are <code>null == undefined</code> and <code>null === undefined</code>?',
        answer: 0,
        options: [
          {
            text: '<code>true</code> and <code>false</code>',
            why: 'With the double equals the two count as equal — and only to each other. With the triple, the type counts as well, and they are two different types.',
          },
          {
            text: '<code>true</code> and <code>true</code>',
            why: '<code>===</code> compares the type too. <code>null</code> and <code>undefined</code> are not the same type.',
          },
          {
            text: '<code>false</code> and <code>false</code>',
            why: 'The loose equals makes an exception for precisely this one pair.',
          },
          {
            text: 'Both throw an error.',
            why: 'Both comparisons are perfectly legal.',
          },
        ],
      },
      {
        q: 'You want to check whether <code>value</code> is either <code>null</code> or <code>undefined</code>, but not <code>0</code> or an empty string. What do you write?',
        answer: 2,
        options: [
          {
            text: '<code>if (value)</code>',
            why: 'That catches all eight false values. <code>0</code> and the empty string would fall through, which is exactly what you wanted to avoid.',
          },
          {
            text: "<code>if (typeof value !== 'null')</code>",
            why: '<code>typeof null</code> gives <code>&#39;object&#39;</code>, never <code>&#39;null&#39;</code>. The test would be true always.',
          },
          {
            text: '<code>if (value != null)</code>',
            why: 'The loose equals makes <code>null</code> and <code>undefined</code> equal — and only those. One short expression catches both and nothing else.',
          },
          {
            text: '<code>if (value !== null)</code>',
            why: 'That catches only <code>null</code>. An <code>undefined</code> would slip past.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Що дає <code>typeof null</code>?',
        answer: 2,
        options: [
          {
            text: "<code>'null'</code>",
            why: 'Це була б розумна відповідь, і це не те, що ви отримаєте.',
          },
          {
            text: "<code>'undefined'</code>",
            why: 'Це відповідь для <code>undefined</code>. <code>null</code> — інше значення.',
          },
          {
            text: "<code>'object'</code>",
            why: 'Помилка з 1995 року, яку ніколи не виправлять, бо забагато коду на неї покладається. Саме тому <code>typeof</code> не годиться, щоб знайти <code>null</code> — порівнюйте напряму.',
          },
          {
            text: 'Помилку.',
            why: '<code>typeof</code> ніколи не падає. Він завжди повертає рядок.',
          },
        ],
      },
      {
        q: 'Чим буде <code>0.1 + 0.2 === 0.3</code>?',
        answer: 1,
        options: [
          {
            text: '<code>true</code> — арифметика правильна.',
            why: 'На папері правильна, а у двійковій системі ні. Сума виходить 0.30000000000000004.',
          },
          {
            text: '<code>false</code> — 0.1 неможливо записати точно числом з рухомою комою.',
            why: 'Це вада не Javascript, а двійкового подання, так само як 1/3 неможливо точно записати десятковим дробом. Тож ніколи не порівнюйте дроби через <code>===</code> після обчислень.',
          },
          {
            text: '<code>NaN</code>',
            why: '<code>NaN</code> виникає з недійсних обчислень, а не з неточних. Сума — цілком звичайне число.',
          },
          {
            text: 'Залежить від браузера.',
            why: 'Усі рушії Javascript використовують той самий стандарт чисел з рухомою комою. Відповідь усюди однакова.',
          },
        ],
      },
      {
        q: 'Що з цього є <em>істинним</em> в <code>if</code>?',
        answer: 3,
        options: [
          {
            text: '<code>0</code>',
            why: 'Число нуль — одне з восьми хибних значень.',
          },
          {
            text: "<code>''</code>",
            why: 'Порожній текст хибний. А текст, у якому щось є, завжди істинний.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Теж хибне, і єдине з них, що ще й не дорівнює саме собі.',
          },
          {
            text: "<code>'0'</code>",
            why: 'Текст із одного символу не порожній, а отже істинний — навіть коли цей символ є нулем. Те саме стосується <code>&#39;false&#39;</code>.',
          },
        ],
      },
      {
        q: 'Функція не має <code>return</code>. Що ви дістанете, викликавши її?',
        answer: 1,
        options: [
          {
            text: '<code>null</code>',
            why: 'Мова ніколи не створює <code>null</code> сама. Його мусив хтось написати.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Це власне «тут нічого» самої мови. Ви дістаєте його також від непризначеної змінної і від властивості, якої немає.',
          },
          {
            text: '<code>0</code>',
            why: 'Це було б значення, яке функція вирішила вам дати. Вона не дала жодного.',
          },
          {
            text: 'Помилку.',
            why: 'Не повертати нічого цілком законно.',
          },
        ],
      },
      {
        q: 'Чим будуть <code>null == undefined</code> і <code>null === undefined</code>?',
        answer: 0,
        options: [
          {
            text: '<code>true</code> і <code>false</code>',
            why: 'З подвійним знаком рівності ці двоє вважаються рівними — і лише одне одному. З потрійним враховується ще й тип, а типи в них різні.',
          },
          {
            text: '<code>true</code> і <code>true</code>',
            why: '<code>===</code> порівнює ще й тип. <code>null</code> і <code>undefined</code> — не той самий тип.',
          },
          {
            text: '<code>false</code> і <code>false</code>',
            why: 'Нестроге порівняння робить виняток саме для цієї однієї пари.',
          },
          {
            text: 'Обидва дадуть помилку.',
            why: 'Обидва порівняння цілком законні.',
          },
        ],
      },
      {
        q: 'Ви хочете перевірити, чи <code>значення</code> є <code>null</code> або <code>undefined</code>, але не <code>0</code> і не порожній текст. Що напишете?',
        answer: 2,
        options: [
          {
            text: '<code>if (значення)</code>',
            why: 'Це ловить усі вісім хибних значень. <code>0</code> і порожній текст провалилися б, а саме цього ви хотіли уникнути.',
          },
          {
            text: "<code>if (typeof значення !== 'null')</code>",
            why: '<code>typeof null</code> дає <code>&#39;object&#39;</code>, а не <code>&#39;null&#39;</code>. Перевірка була б істинною завжди.',
          },
          {
            text: '<code>if (значення != null)</code>',
            why: 'Нестроге порівняння робить <code>null</code> і <code>undefined</code> рівними — і лише їх. Один короткий вираз ловить обидва і нічого більше.',
          },
          {
            text: '<code>if (значення !== null)</code>',
            why: 'Це ловить лише <code>null</code>. <code>undefined</code> проскочив би.',
          },
        ],
      },
    ],
  },
});
