/*
 * Content of lesson 22 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */

Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS flex: align-self',
      'kicker': 'Leksjon 22 &middot; CSS',
      'title': 'CSS flex: align-self',
      'lead': 'Med align-self kan ett bestemt flex-element plassere seg annerledes på tverraksen, uten å endre de andre elementene.',
      's.self.t': 'Juster ett flex-element',
      's.self.d': '<p><code>align-self</code> styrer justeringen av ett enkelt flex-element på tverraksen. Det er nyttig når ett element skal ha en annen plassering enn resten.</p><p>Hvert flex-element kan få sin egen <code>align-self</code>-verdi.</p>',
      's.auto.t': 'auto — bruk containerens innstilling',
      's.auto.d': '<p>Standardverdien er <code>auto</code>. Da bruker elementet containerens <code>align-items</code>-verdi.</p><p><code>align-self: auto</code> følger normalt regelen som allerede er satt på flex-containeren.</p>',
      's.position.t': 'flex-start, center og flex-end',
      's.position.d': '<p><code>flex-start</code> plasserer elementet mot starten av tverraksen, <code>center</code> i midten, og <code>flex-end</code> mot slutten.</p><p>Den fysiske retningen avhenger av flex-retning og skriveoppsett.</p>',
      's.stretch.t': 'stretch — fyll tilgjengelig plass',
      's.stretch.d': '<p><code>stretch</code> lar elementet strekke seg på tverraksen når størrelsen på den aksen ikke er satt.</p><p>Det er også den vanlige standardjusteringen fra <code>align-items</code>.</p>',
      's.override.t': 'Overstyr align-items for ett element',
      's.override.d': '<p><code>align-items</code> settes på flex-containeren og gjelder som utgangspunkt for alle elementene. <code>align-self</code> kan overstyre dette for ett bestemt element.</p><p>En container kan derfor ha <code>align-items: center</code>, mens ett element bruker <code>align-self: flex-end</code>.</p>',
      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },
    en: {
      'doc.title': 'CSS flex: align-self',
      'kicker': 'Lesson 22 &middot; CSS',
      'title': 'CSS flex: align-self',
      'lead': 'align-self lets one particular flex item align itself differently on the cross axis without changing the other items.',
      's.self.t': 'Align one flex item',
      's.self.d': '<p><code>align-self</code> controls the alignment of one individual flex item on the cross axis. It is useful when one item should be positioned differently from the others.</p><p>Each flex item can have its own <code>align-self</code> value.</p>',
      's.auto.t': 'auto — use the container setting',
      's.auto.d': '<p>The default value is <code>auto</code>. The item then uses the container’s <code>align-items</code> value.</p><p><code>align-self: auto</code> normally follows the rule already set on the flex container.</p>',
      's.position.t': 'flex-start, center, and flex-end',
      's.position.d': '<p><code>flex-start</code> places the item toward the start of the cross axis, <code>center</code> in the middle, and <code>flex-end</code> toward the end.</p><p>The physical direction depends on flex direction and writing mode.</p>',
      's.stretch.t': 'stretch — fill available space',
      's.stretch.d': '<p><code>stretch</code> lets the item stretch along the cross axis when its size there is not set.</p><p>It is also the usual default alignment from <code>align-items</code>.</p>',
      's.override.t': 'Override align-items for one item',
      's.override.d': '<p><code>align-items</code> is set on the flex container and provides the default for all items. <code>align-self</code> can override it for one particular item.</p><p>A container can therefore have <code>align-items: center</code> while one item uses <code>align-self: flex-end</code>.</p>',
      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },
    uk: {
      'doc.title': 'CSS flex: align-self',
      'kicker': 'Урок 22 &middot; CSS',
      'title': 'CSS flex: align-self',
      'lead': 'align-self дозволяє одному flex-елементу вирівняти себе інакше вздовж поперечної осі, не змінюючи інші елементи.',
      's.self.t': 'Вирівняти один flex-елемент',
      's.self.d': '<p><code>align-self</code> керує вирівнюванням одного flex-елемента вздовж поперечної осі. Це корисно, коли один елемент має бути розташований інакше.</p><p>Кожен flex-елемент може мати власне значення <code>align-self</code>.</p>',
      's.auto.t': 'auto — використати налаштування контейнера',
      's.auto.d': '<p>Значенням за замовчуванням є <code>auto</code>. Тоді елемент використовує значення <code>align-items</code> контейнера.</p><p><code>align-self: auto</code> зазвичай дотримується правила flex-контейнера.</p>',
      's.position.t': 'flex-start, center та flex-end',
      's.position.d': '<p><code>flex-start</code> розміщує елемент ближче до початку поперечної осі, <code>center</code> — у центрі, а <code>flex-end</code> — ближче до кінця.</p><p>Фізичний напрямок залежить від flex-напрямку та режиму письма.</p>',
      's.stretch.t': 'stretch — заповнити доступний простір',
      's.stretch.d': '<p><code>stretch</code> дозволяє елементу розтягнутися вздовж поперечної осі, якщо його розмір там не заданий.</p><p>Це також звичайне стандартне вирівнювання, яке задає <code>align-items</code>.</p>',
      's.override.t': 'Перевизначити align-items для одного елемента',
      's.override.d': '<p><code>align-items</code> задається на flex-контейнері та є стандартом для всіх елементів. <code>align-self</code> може перевизначити його для одного елемента.</p><p>Тому контейнер може мати <code>align-items: center</code>, а один елемент — <code>align-self: flex-end</code>.</p>',
      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva styrer <code>align-self</code> for et flex-element?',
        answer: 1,
        options: [
          { text: 'Hvor mye elementet vokser på hovedaksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Hvordan ett flex-element justeres på tverraksen.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: 'Hvor mye elementet krymper.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Elementets basisstørrelse.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
      {
        q: 'Hva betyr <code>align-self: auto</code> normalt?',
        answer: 2,
        options: [
          { text: 'Elementet blir alltid sentrert.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Elementet ignorerer all flex-justering.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Elementet bruker containerens <code>align-items</code>-verdi.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: 'Elementet strekker seg alltid.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
      {
        q: 'Hva er forskjellen på <code>align-items</code> og <code>align-self</code>?',
        answer: 0,
        options: [
          { text: '<code>align-items</code> settes på containeren, mens <code>align-self</code> kan styre ett bestemt element.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: '<code>align-self</code> settes på containeren, mens <code>align-items</code> settes på ett element.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'De styrer begge alltid vekst.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Det er to navn for samme egenskap.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
      {
        q: 'Hva gjør <code>align-self: center</code>?',
        answer: 3,
        options: [
          { text: 'Sentrerer teksten i elementet.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Sentrerer hele flex-containeren.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Sentrerer elementet på hovedaksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Plasserer elementet midt på tverraksen.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
        ],
      },
      {
        q: 'Hva gjør <code>align-self: flex-end</code>?',
        answer: 1,
        options: [
          { text: 'Flytter elementet til slutten av hovedaksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Plasserer elementet mot slutten av tverraksen.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: 'Gjør elementet større.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Skjuler elementet.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
      {
        q: 'En container har <code>align-items: center</code>. Hva kan du gjøre hvis ett element skal ligge ved enden av tverraksen?',
        answer: 0,
        options: [
          { text: 'Bruke <code>align-self: flex-end</code> på det elementet.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: 'Endre <code>flex-grow</code> til 0.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Bruke <code>flex-basis: flex-end</code>.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Sette <code>align-items: flex-end</code> på elementet.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
      {
        q: 'Hva er <code>stretch</code> ment å gjøre i <code>align-self: stretch</code>?',
        answer: 2,
        options: [
          { text: 'Strekke elementet på hovedaksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Øke flex-grow-verdien.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'La elementet strekke seg på tverraksen når størrelsen der ikke er satt.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: 'Strekke teksten i elementet.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
      {
        q: 'Hvilken akse bruker <code>align-self</code>?',
        answer: 3,
        options: [
          { text: 'Alltid den horisontale aksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Alltid den vertikale aksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Bare hovedaksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Tverraksen.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
        ],
      },
      {
        q: 'Hvorfor kan to elementer i samme flex-container ha forskjellig <code>align-self</code>?',
        answer: 1,
        options: [
          { text: 'Fordi align-self bare gjelder containeren.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Fordi hvert flex-element kan få sin egen justering på tverraksen.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: 'Fordi flexbox krever ulik justering for hvert element.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'Fordi align-self endrer hovedaksen for hvert element.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
      {
        q: 'Hvilken beskrivelse oppsummerer <code>align-self</code> best?',
        answer: 0,
        options: [
          { text: 'En individuell tverrakse-justering som kan overstyre containerens <code>align-items</code> for ett element.', why: 'Riktig: dette er verdien som passer til spørsmålet.' },
          { text: 'En måte å sette bredden på alle flex-elementer.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'En måte å fordele ledig plass på hovedaksen.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
          { text: 'En måte å endre flex-containerens retning.', why: 'Dette alternativet beskriver ikke denne rollen til <code>align-self</code>.' },
        ],
      },
    ],
    en: [
      {
        q: 'What does <code>align-self</code> control for a flex item?',
        answer: 1,
        options: [
          { text: 'How much the item grows on the main axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'How one flex item is aligned on the cross axis.', why: 'Correct: this is the value that matches the question.' },
          { text: 'How much the item shrinks.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'The item’s basis size.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
      {
        q: 'What does <code>align-self: auto</code> normally mean?',
        answer: 2,
        options: [
          { text: 'The item is always centered.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'The item ignores all flex alignment.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'The item uses the container’s <code>align-items</code> value.', why: 'Correct: this is the value that matches the question.' },
          { text: 'The item always stretches.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
      {
        q: 'What is the difference between <code>align-items</code> and <code>align-self</code>?',
        answer: 0,
        options: [
          { text: '<code>align-items</code> is set on the container, while <code>align-self</code> can control one particular item.', why: 'Correct: this is the value that matches the question.' },
          { text: '<code>align-self</code> is set on the container, while <code>align-items</code> is set on one item.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'They both always control growth.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'They are two names for the same property.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
      {
        q: 'What does <code>align-self: center</code> do?',
        answer: 3,
        options: [
          { text: 'It centers the text inside the item.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'It centers the whole flex container.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'It centers the item on the main axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'It places the item in the middle of the cross axis.', why: 'Correct: this is the value that matches the question.' },
        ],
      },
      {
        q: 'What does <code>align-self: flex-end</code> do?',
        answer: 1,
        options: [
          { text: 'It moves the item to the end of the main axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'It places the item toward the end of the cross axis.', why: 'Correct: this is the value that matches the question.' },
          { text: 'It makes the item larger.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'It hides the item.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
      {
        q: 'A container has <code>align-items: center</code>. What can you do if one item should be at the end of the cross axis?',
        answer: 0,
        options: [
          { text: 'Use <code>align-self: flex-end</code> on that item.', why: 'Correct: this is the value that matches the question.' },
          { text: 'Change <code>flex-grow</code> to 0.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Use <code>flex-basis: flex-end</code>.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Set <code>align-items: flex-end</code> on the item.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
      {
        q: 'What is <code>stretch</code> intended to do in <code>align-self: stretch</code>?',
        answer: 2,
        options: [
          { text: 'Stretch the item on the main axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Increase the flex-grow value.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Let the item stretch on the cross axis when its size there is not set.', why: 'Correct: this is the value that matches the question.' },
          { text: 'Stretch the text inside the item.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
      {
        q: 'Which axis does <code>align-self</code> use?',
        answer: 3,
        options: [
          { text: 'Always the horizontal axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Always the vertical axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Only the main axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'The cross axis.', why: 'Correct: this is the value that matches the question.' },
        ],
      },
      {
        q: 'Why can two items in the same flex container have different <code>align-self</code> values?',
        answer: 1,
        options: [
          { text: 'Because align-self only applies to the container.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Because each flex item can have its own cross-axis alignment.', why: 'Correct: this is the value that matches the question.' },
          { text: 'Because flexbox requires different alignment for every item.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'Because align-self changes the main axis for each item.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
      {
        q: 'Which description best summarizes <code>align-self</code>?',
        answer: 0,
        options: [
          { text: 'An individual cross-axis alignment that can override the container’s <code>align-items</code> for one item.', why: 'Correct: this is the value that matches the question.' },
          { text: 'A way to set the width of all flex items.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'A way to distribute free space on the main axis.', why: 'This option does not describe this role of <code>align-self</code>.' },
          { text: 'A way to change the flex container’s direction.', why: 'This option does not describe this role of <code>align-self</code>.' },
        ],
      },
    ],
    uk: [
      {
        q: 'Що визначає <code>align-self</code> для flex-елемента?',
        answer: 1,
        options: [
          { text: 'Наскільки елемент зростає вздовж головної осі.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Як один flex-елемент вирівнюється вздовж поперечної осі.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: 'Наскільки елемент стискається.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Початковий розмір елемента.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
      {
        q: 'Що зазвичай означає <code>align-self: auto</code>?',
        answer: 2,
        options: [
          { text: 'Елемент завжди центрується.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Елемент ігнорує все flex-вирівнювання.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Елемент використовує значення <code>align-items</code> контейнера.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: 'Елемент завжди розтягується.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
      {
        q: 'У чому різниця між <code>align-items</code> і <code>align-self</code>?',
        answer: 0,
        options: [
          { text: '<code>align-items</code> задається на контейнері, а <code>align-self</code> може керувати одним конкретним елементом.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: '<code>align-self</code> задається на контейнері, а <code>align-items</code> — на одному елементі.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Обидві властивості завжди керують зростанням.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Це дві назви однієї властивості.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
      {
        q: 'Що робить <code>align-self: center</code>?',
        answer: 3,
        options: [
          { text: 'Центрує текст усередині елемента.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Центрує весь flex-контейнер.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Центрує елемент на головній осі.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Розміщує елемент посередині поперечної осі.', why: 'Правильно: це значення відповідає запитанню.' },
        ],
      },
      {
        q: 'Що робить <code>align-self: flex-end</code>?',
        answer: 1,
        options: [
          { text: 'Переміщує елемент у кінець головної осі.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Розміщує елемент ближче до кінця поперечної осі.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: 'Збільшує елемент.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Приховує елемент.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
      {
        q: 'Контейнер має <code>align-items: center</code>. Що зробити, якщо один елемент має бути біля кінця поперечної осі?',
        answer: 0,
        options: [
          { text: 'Застосувати до цього елемента <code>align-self: flex-end</code>.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: 'Змінити <code>flex-grow</code> на 0.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Використати <code>flex-basis: flex-end</code>.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Задати <code>align-items: flex-end</code> на елементі.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
      {
        q: 'Що має робити <code>stretch</code> у <code>align-self: stretch</code>?',
        answer: 2,
        options: [
          { text: 'Розтягнути елемент уздовж головної осі.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Збільшити значення flex-grow.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Дозволити елементу розтягнутися вздовж поперечної осі, якщо його розмір там не заданий.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: 'Розтягнути текст усередині елемента.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
      {
        q: 'Яку вісь використовує <code>align-self</code>?',
        answer: 3,
        options: [
          { text: 'Завжди горизонтальну.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Завжди вертикальну.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Лише головну.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Поперечну.', why: 'Правильно: це значення відповідає запитанню.' },
        ],
      },
      {
        q: 'Чому два елементи в одному flex-контейнері можуть мати різні значення <code>align-self</code>?',
        answer: 1,
        options: [
          { text: 'Тому що align-self застосовується лише до контейнера.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Тому що кожен flex-елемент може мати власне вирівнювання на поперечній осі.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: 'Тому що flexbox вимагає різного вирівнювання для кожного елемента.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Тому що align-self змінює головну вісь для кожного елемента.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
      {
        q: 'Яке твердження найкраще підсумовує <code>align-self</code>?',
        answer: 0,
        options: [
          { text: 'Індивідуальне вирівнювання на поперечній осі, яке може перевизначити <code>align-items</code> контейнера для одного елемента.', why: 'Правильно: це значення відповідає запитанню.' },
          { text: 'Спосіб задати ширину всіх flex-елементів.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Спосіб розподілити вільний простір на головній осі.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
          { text: 'Спосіб змінити напрямок flex-контейнера.', why: 'Цей варіант не описує цю роль <code>align-self</code>.' },
        ],
      },
    ],
  },
});
