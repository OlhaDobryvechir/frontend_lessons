/*
 * Content of JS lesson 04 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 *
 * Scope note: this lesson owns coercion, precedence, ?? and ?..
 *
 * NB: apostrophes inside these single-quoted strings are written as &#39;.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'Operatorer og operatorprioritet',
      kicker: 'Leksjon 4 &middot; Javascript',
      title: 'Operatorer og operatorprioritet',
      lead: 'Operatorer ser ut som regning og er noe mer: de bestemmer også hvilken rekkefølge språket leser uttrykket ditt i, og hva det gjør når to verdier ikke har samme type.',

      's.prec.t': 'Hva som bindes først',
      's.prec.d':
        '<p>Et uttrykk leses ikke fra venstre mot høyre, men etter prioritet: noen operatorer griper tettere om naboene sine enn andre. <code>2 + 3 * 4</code> er 14, ikke 20, av samme grunn som i matematikken.</p>' +
        '<p>Du trenger ikke kunne hele tabellen. Det som er verdt å ha i hodet, er de tre ytterpunktene: å nå inn i noe med punktum eller kall binder aller tettest, sammenligning binder løsere enn regning, og tilordning er løsest av alt. Det er derfor <code>typeof x === &#39;string&#39;</code> virker uten parenteser: <code>typeof</code> rekker å bli ferdig først.</p>' +
        '<p>Og når du er i tvil: sett parenteser. De koster ingenting, og de sparer den neste leseren for å måtte slå opp i tabellen.</p>',

      's.plus.t': 'Plusstegnet gjør to jobber',
      's.plus.d':
        '<p><code>+</code> er den eneste operatoren som både legger sammen tall og skjøter tekst. Er én av sidene tekst, blir det skjøting &mdash; og resultatet er tekst, som så tar med seg neste ledd.</p>' +
        '<p>Derfor gir <code>1 + 2 + &#39;3&#39;</code> teksten <code>&#39;33&#39;</code>, mens <code>&#39;1&#39; + 2 + 3</code> gir <code>&#39;123&#39;</code>. Regnestykket er det samme; det er rekkefølgen på dataene som avgjør.</p>' +
        '<p>Alle de andre regneoperatorene har bare én jobb. <code>&#39;5&#39; - 1</code> er 4, fordi minus ikke kan gjøre noe annet enn å regne, og derfor gjør teksten om til et tall først.</p>' +
        '<p>Det er også her de rare eksemplene kommer fra. <code>1 + null</code> er 1 fordi <code>null</code> blir 0; <code>1 + undefined</code> er <code>NaN</code> fordi <code>undefined</code> ikke blir noe tall i det hele tatt.</p>',

      's.eq.t': 'To likhetstegn og tre',
      's.eq.d':
        '<p><code>===</code> spør om to verdier er like og av samme type. <code>==</code> gjør om verdiene først, etter et regelverk ingen husker utenat.</p>' +
        '<p>Resultatet er par som ikke henger sammen. <code>&#39;0&#39; == false</code> er sant, mens den samme teksten i en <code>if</code> er sann. Den ene verdien er altså både lik usant og selv sann, avhengig av hvordan du spør.</p>' +
        '<p>Regelen er kort: bruk <code>===</code>. Det eneste nyttige unntaket er <code>!= null</code> fra leksjon 1, som fanger <code>null</code> og <code>undefined</code> med ett uttrykk &mdash; og det er verdt å skrive nettopp fordi det er en kjent, avgrenset bruk.</p>',

      's.logic.t': 'Og og eller gir ikke sant og usant',
      's.logic.d':
        '<p>Dette overrasker folk som kommer fra andre språk: <code>&amp;&amp;</code> og <code>||</code> returnerer ikke en boolsk verdi. De returnerer én av operandene.</p>' +
        '<p><code>||</code> går fra venstre og gir deg den første verdien som er sann &mdash; eller den siste, hvis ingen er det. <code>&amp;&amp;</code> gjør det motsatte: den gir den første som er usann, ellers den siste.</p>' +
        '<p>Og de stopper så snart svaret er gitt. Er venstresiden av en <code>&amp;&amp;</code> usann, blir høyresiden aldri kjørt i det hele tatt. Det er grunnen til at <code>bruker &amp;&amp; bruker.lagre()</code> er trygt: kallet skjer bare hvis det finnes noen å kalle det på.</p>',

      's.nullish.t': 'Når null er et gyldig svar',
      's.nullish.d':
        '<p><code>||</code> har lenge vært måten å gi en reserveverdi på. Problemet er at den behandler alle de åtte usanne verdiene fra leksjon 1 som «mangler» &mdash; også <code>0</code> og den tomme teksten, som ofte er helt gyldige svar.</p>' +
        '<p>Et antall på null blir borte. Et tomt søkefelt blir erstattet. Det er sjelden det du mente.</p>' +
        '<p><code>??</code> løser nøyaktig dette: den slår bare inn på <code>null</code> og <code>undefined</code>. Alt annet, inkludert <code>0</code> og <code>&#39;&#39;</code>, slipper igjennom som ekte verdier.</p>' +
        '<p>Språket nekter dessuten å blande <code>??</code> med <code>||</code> eller <code>&amp;&amp;</code> uten parenteser. Det er ikke en mangel, men en vennlighet: rekkefølgen ville vært umulig å gjette, så du blir bedt om å si den selv.</p>',

      's.optional.t': 'Å spørre uten å krasje',
      's.optional.d':
        '<p><code>?.</code> leser en egenskap hvis det finnes noe å lese den fra, og gir <code>undefined</code> hvis ikke &mdash; i stedet for å kaste.</p>' +
        '<p>Det viktige er at den kortslutter hele resten av kjeden, ikke bare det neste leddet. <code>null?.a.b.c</code> gir <code>undefined</code> uten å feile, fordi alt etter det første spørsmålstegnet hoppes over når svaret allerede er gitt.</p>' +
        '<p>Den finnes også for kall og for klammer: <code>obj.metode?.()</code> kaller bare hvis metoden er der, og <code>obj?.[felt]</code> gjør det samme med en nøkkel du regner ut.</p>' +
        '<p>Sammen med <code>??</code> gir det linjen du kommer til å skrive oftest av alle: les så langt du kan, og fall tilbake hvis noe manglet underveis.</p>',

      's.assoc.t': 'Når rekkefølgen ikke er den du leser',
      's.assoc.d':
        '<p>Har to operatorer samme prioritet, avgjør assosiativiteten hvilken vei de grupperes. De aller fleste grupperes fra venstre, slik du ville lest dem.</p>' +
        '<p>To gjør det motsatt. Potens grupperes fra høyre, så <code>2 ** 3 ** 2</code> er <code>2 ** 9</code>, altså 512 &mdash; ikke 64. Og tilordning grupperes fra høyre, som er grunnen til at <code>a = b = 5</code> i det hele tatt gir mening.</p>' +
        '<p>Ett tilfelle nekter språket å gjette på: <code>-2 ** 2</code> er en syntaksfeil. Begge tolkningene er rimelige, så du blir bedt om å sette parentesen selv.</p>' +
        '<p>Og så det som ser mest uskyldig ut av alt: sammenligninger kan kjedes, men de betyr ikke det de ser ut som. <code>1 &lt; 2 &lt; 3</code> er sant og <code>3 &gt; 2 &gt; 1</code> er usant &mdash; ikke fordi det ene stemmer og det andre ikke, men fordi den første sammenligningen blir <code>true</code>, og <code>true</code> blir til 1 i den neste. Kjed aldri sammenligninger; skriv <code>a &lt; b &amp;&amp; b &lt; c</code>.</p>',

      's.note':
        '<p>Kortversjonen. Sett parenteser når du er i tvil. <code>+</code> skjøter så snart én side er tekst; alle andre regneoperatorer regner alltid. Bruk <code>===</code>, med <code>!= null</code> som eneste unntak. <code>&amp;&amp;</code> og <code>||</code> gir tilbake verdier, ikke boolske. <code>??</code> når <code>0</code> og tom tekst skal telle som svar. <code>?.</code> kortslutter hele kjeden. Og kjed aldri sammenligninger.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'Operators and operator precedence',
      kicker: 'Lesson 4 &middot; Javascript',
      title: 'Operators and operator precedence',
      lead: 'Operators look like arithmetic and are rather more: they also decide the order in which the language reads your expression, and what it does when two values are not the same type.',

      's.prec.t': 'What binds first',
      's.prec.d':
        '<p>An expression is not read left to right but by precedence: some operators grip their neighbours more tightly than others. <code>2 + 3 * 4</code> is 14, not 20, for the same reason as in arithmetic.</p>' +
        '<p>You do not need the whole table. What is worth holding in your head are the three extremes: reaching into something with a dot or a call binds tightest, comparison binds more loosely than arithmetic, and assignment is the loosest of all. That is why <code>typeof x === &#39;string&#39;</code> works without parentheses: <code>typeof</code> finishes first.</p>' +
        '<p>And when in doubt, add parentheses. They cost nothing, and they save the next reader from having to look the table up.</p>',

      's.plus.t': 'The plus sign does two jobs',
      's.plus.d':
        '<p><code>+</code> is the only operator that both adds numbers and joins text. If either side is text, it joins — and the result is text, which then carries into the next term.</p>' +
        '<p>So <code>1 + 2 + &#39;3&#39;</code> gives the text <code>&#39;33&#39;</code>, while <code>&#39;1&#39; + 2 + 3</code> gives <code>&#39;123&#39;</code>. The arithmetic is the same; the order of your data decides the answer.</p>' +
        '<p>Every other arithmetic operator has only one job. <code>&#39;5&#39; - 1</code> is 4, because minus cannot do anything except count, and so turns the text into a number first.</p>' +
        '<p>This is also where the strange examples come from. <code>1 + null</code> is 1 because <code>null</code> becomes 0; <code>1 + undefined</code> is <code>NaN</code> because <code>undefined</code> does not become any number at all.</p>',

      's.eq.t': 'Two equals signs and three',
      's.eq.d':
        '<p><code>===</code> asks whether two values are equal and of the same type. <code>==</code> converts the values first, by a set of rules nobody remembers.</p>' +
        '<p>The result is pairs that do not hang together. <code>&#39;0&#39; == false</code> is true, while the same string in an <code>if</code> is truthy. One value is therefore both equal to false and itself true, depending on how you ask.</p>' +
        '<p>The rule is short: use <code>===</code>. The one useful exception is <code>!= null</code> from lesson 1, which catches <code>null</code> and <code>undefined</code> in a single expression — and it is worth writing precisely because it is a known, bounded use.</p>',

      's.logic.t': 'And and or do not give true and false',
      's.logic.d':
        '<p>This surprises people coming from other languages: <code>&amp;&amp;</code> and <code>||</code> do not return a boolean. They return one of the operands.</p>' +
        '<p><code>||</code> goes from the left and hands you the first value that is truthy — or the last one, if none is. <code>&amp;&amp;</code> does the opposite: it gives the first falsy one, otherwise the last.</p>' +
        '<p>And they stop as soon as the answer is settled. If the left side of an <code>&amp;&amp;</code> is falsy, the right side is never run at all. That is why <code>user &amp;&amp; user.save()</code> is safe: the call only happens if there is something to call it on.</p>',

      's.nullish.t': 'When zero is a real answer',
      's.nullish.d':
        '<p><code>||</code> has long been the way to supply a fallback. The problem is that it treats all eight falsy values from lesson 1 as "missing" — including <code>0</code> and the empty string, which are often perfectly valid answers.</p>' +
        '<p>A count of zero disappears. An empty search field is replaced. That is rarely what you meant.</p>' +
        '<p><code>??</code> solves exactly this: it only kicks in on <code>null</code> and <code>undefined</code>. Everything else, <code>0</code> and <code>&#39;&#39;</code> included, passes through as a real value.</p>' +
        '<p>The language also refuses to let you mix <code>??</code> with <code>||</code> or <code>&amp;&amp;</code> without parentheses. That is not a shortcoming but a kindness: the order would be impossible to guess, so you are asked to state it.</p>',

      's.optional.t': 'Asking without crashing',
      's.optional.d':
        '<p><code>?.</code> reads a property if there is something to read it from, and gives <code>undefined</code> if there is not — instead of throwing.</p>' +
        '<p>The important part is that it short-circuits the whole rest of the chain, not just the next step. <code>null?.a.b.c</code> gives <code>undefined</code> without failing, because everything after the first question mark is skipped once the answer is settled.</p>' +
        '<p>It exists for calls and for brackets too: <code>obj.method?.()</code> only calls if the method is there, and <code>obj?.[field]</code> does the same with a key you compute.</p>' +
        '<p>Together with <code>??</code> it gives you the line you will write more often than any other: read as far as you can, and fall back if something was missing on the way.</p>',

      's.assoc.t': 'When the order is not the one you read',
      's.assoc.d':
        '<p>When two operators have the same precedence, associativity decides which way they group. The vast majority group from the left, just as you would read them.</p>' +
        '<p>Two do the opposite. Exponentiation groups from the right, so <code>2 ** 3 ** 2</code> is <code>2 ** 9</code>, which is 512 — not 64. And assignment groups from the right, which is why <code>a = b = 5</code> makes any sense at all.</p>' +
        '<p>One case the language refuses to guess at: <code>-2 ** 2</code> is a syntax error. Both readings are reasonable, so you are asked to add the parentheses yourself.</p>' +
        '<p>And then the most innocent-looking one of all: comparisons can be chained, but they do not mean what they appear to. <code>1 &lt; 2 &lt; 3</code> is true and <code>3 &gt; 2 &gt; 1</code> is false — not because one holds and the other does not, but because the first comparison becomes <code>true</code>, and <code>true</code> becomes 1 in the second. Never chain comparisons; write <code>a &lt; b &amp;&amp; b &lt; c</code>.</p>',

      's.note':
        '<p>The short version. Add parentheses when in doubt. <code>+</code> joins as soon as either side is text; every other arithmetic operator always counts. Use <code>===</code>, with <code>!= null</code> as the only exception. <code>&amp;&amp;</code> and <code>||</code> hand back values, not booleans. <code>??</code> when <code>0</code> and the empty string should count as answers. <code>?.</code> short-circuits the whole chain. And never chain comparisons.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'Оператори та пріоритет операторів',
      kicker: 'Урок 4 &middot; Javascript',
      title: 'Оператори та пріоритет операторів',
      lead: 'Оператори виглядають як арифметика і є дещо більшим: вони також визначають порядок, у якому мова читає ваш вираз, і те, що вона робить, коли два значення мають різні типи.',

      's.prec.t': 'Що зв’язується першим',
      's.prec.d':
        '<p>Вираз читають не зліва направо, а за пріоритетом: одні оператори тримають своїх сусідів міцніше за інших. <code>2 + 3 * 4</code> дорівнює 14, а не 20, з тієї самої причини, що й в арифметиці.</p>' +
        '<p>Уся таблиця вам не потрібна. У голові варто тримати три крайні точки: дотягнутися до чогось крапкою або викликом зв’язує найміцніше, порівняння зв’язує слабше за арифметику, а призначення — найслабше з усього. Саме тому <code>typeof x === &#39;string&#39;</code> працює без дужок: <code>typeof</code> встигає завершитися першим.</p>' +
        '<p>А коли маєте сумнів — ставте дужки. Вони нічого не коштують і рятують наступного читача від пошуків у таблиці.</p>',

      's.plus.t': 'Плюс виконує дві роботи',
      's.plus.d':
        '<p><code>+</code> — єдиний оператор, який і додає числа, і з’єднує текст. Якщо хоч один бік є текстом, він з’єднує — і результат буде текстом, який далі тягнеться в наступний доданок.</p>' +
        '<p>Тож <code>1 + 2 + &#39;3&#39;</code> дає текст <code>&#39;33&#39;</code>, а <code>&#39;1&#39; + 2 + 3</code> дає <code>&#39;123&#39;</code>. Арифметика та сама; відповідь визначає порядок ваших даних.</p>' +
        '<p>Усі інші арифметичні оператори мають лише одну роботу. <code>&#39;5&#39; - 1</code> дорівнює 4, бо мінус не вміє нічого, крім рахувати, і тому спершу перетворює текст на число.</p>' +
        '<p>Звідси ж беруться і дивні приклади. <code>1 + null</code> дорівнює 1, бо <code>null</code> стає нулем; <code>1 + undefined</code> дає <code>NaN</code>, бо <code>undefined</code> не стає жодним числом.</p>',

      's.eq.t': 'Два знаки рівності і три',
      's.eq.d':
        '<p><code>===</code> питає, чи два значення рівні й одного типу. <code>==</code> спершу перетворює значення за набором правил, яких ніхто не пам’ятає напам’ять.</p>' +
        '<p>Наслідок — пари, що не узгоджуються між собою. <code>&#39;0&#39; == false</code> істинне, тоді як той самий текст в <code>if</code> є істинним. Тобто одне значення водночас дорівнює хибі й саме є істинним — залежно від того, як питати.</p>' +
        '<p>Правило коротке: беріть <code>===</code>. Єдиний корисний виняток — <code>!= null</code> з уроку 1, що ловить <code>null</code> і <code>undefined</code> одним виразом; його варто писати саме тому, що це відоме й обмежене застосування.</p>',

      's.logic.t': 'І та або не дають істини й хиби',
      's.logic.d':
        '<p>Це дивує тих, хто прийшов з інших мов: <code>&amp;&amp;</code> і <code>||</code> не повертають булеве значення. Вони повертають один з операндів.</p>' +
        '<p><code>||</code> іде зліва і віддає перше значення, яке є істинним, — або останнє, якщо істинного немає. <code>&amp;&amp;</code> робить навпаки: віддає перше хибне, інакше останнє.</p>' +
        '<p>І вони спиняються, щойно відповідь визначена. Якщо лівий бік <code>&amp;&amp;</code> хибний, правий не виконається взагалі. Саме тому <code>user &amp;&amp; user.save()</code> є безпечним: виклик стається, лише якщо є на чому його робити.</p>',

      's.nullish.t': 'Коли нуль є справжньою відповіддю',
      's.nullish.d':
        '<p><code>||</code> довго був способом дати запасне значення. Проблема в тому, що він трактує всі вісім хибних значень з уроку 1 як «немає» — зокрема <code>0</code> і порожній текст, які часто є цілком слушними відповідями.</p>' +
        '<p>Кількість «нуль» зникає. Порожнє поле пошуку підміняється. Це рідко те, що ви мали на увазі.</p>' +
        '<p><code>??</code> розв’язує саме це: він спрацьовує лише на <code>null</code> і <code>undefined</code>. Усе інше, разом із <code>0</code> і <code>&#39;&#39;</code>, проходить як справжнє значення.</p>' +
        '<p>До того ж мова не дозволяє змішувати <code>??</code> з <code>||</code> чи <code>&amp;&amp;</code> без дужок. Це не вада, а люб’язність: порядок було б неможливо вгадати, тож вас просять назвати його самим.</p>',

      's.optional.t': 'Питати, не падаючи',
      's.optional.d':
        '<p><code>?.</code> читає властивість, якщо є з чого її читати, і дає <code>undefined</code>, якщо немає, — замість того щоб кинути помилку.</p>' +
        '<p>Важливо, що він замикає накоротко весь залишок ланцюжка, а не лише наступний крок. <code>null?.a.b.c</code> дає <code>undefined</code> без помилки, бо все після першого знака питання пропускається, щойно відповідь визначена.</p>' +
        '<p>Він існує і для викликів, і для дужок: <code>obj.method?.()</code> викликає лише тоді, коли метод є, а <code>obj?.[field]</code> робить те саме з обчисленим ключем.</p>' +
        '<p>Разом із <code>??</code> це дає рядок, який ви писатимете частіше за будь-який інший: читай, доки можеш, і відкотись, якщо дорогою чогось забракло.</p>',

      's.assoc.t': 'Коли порядок не той, який читається',
      's.assoc.d':
        '<p>Коли два оператори мають однаковий пріоритет, асоціативність вирішує, у який бік вони групуються. Переважна більшість групується зліва, саме так, як ви б їх прочитали.</p>' +
        '<p>Два роблять навпаки. Піднесення до степеня групується справа, тож <code>2 ** 3 ** 2</code> — це <code>2 ** 9</code>, тобто 512, а не 64. І призначення групується справа, через що <code>a = b = 5</code> узагалі має сенс.</p>' +
        '<p>Один випадок мова відмовляється вгадувати: <code>-2 ** 2</code> є синтаксичною помилкою. Обидва прочитання розумні, тож вас просять поставити дужки самим.</p>' +
        '<p>І нарешті найбезневинніше на вигляд: порівняння можна зчіплювати, але вони означають не те, чим здаються. <code>1 &lt; 2 &lt; 3</code> істинне, а <code>3 &gt; 2 &gt; 1</code> хибне — не тому, що одне правильне, а друге ні, а тому, що перше порівняння стає <code>true</code>, а <code>true</code> у другому стає одиницею. Ніколи не зчіплюйте порівняння; пишіть <code>a &lt; b &amp;&amp; b &lt; c</code>.</p>',

      's.note':
        '<p>Коротко. Ставте дужки, коли маєте сумнів. <code>+</code> з’єднує, щойно один бік стає текстом; усі інші арифметичні оператори завжди рахують. Беріть <code>===</code>, з <code>!= null</code> як єдиним винятком. <code>&amp;&amp;</code> і <code>||</code> повертають значення, а не булеві. <code>??</code> — коли <code>0</code> і порожній текст мають рахуватися відповідями. <code>?.</code> замикає весь ланцюжок. І ніколи не зчіплюйте порівняння.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hva blir <code>1 + 2 + &#39;3&#39;</code>?',
        answer: 2,
        options: [
          {
            text: '<code>6</code>',
            why: 'Det ville krevd at <code>&#39;3&#39;</code> ble et tall. Men når én side av <code>+</code> er tekst, skjøter den i stedet.',
          },
          {
            text: '<code>&#39;123&#39;</code>',
            why: 'Det er svaret på <code>&#39;1&#39; + 2 + 3</code>. Her står teksten sist, ikke først.',
          },
          {
            text: '<code>&#39;33&#39;</code>',
            why: '<code>+</code> går fra venstre: <code>1 + 2</code> blir 3, og <code>3 + &#39;3&#39;</code> blir teksten <code>&#39;33&#39;</code>. Rekkefølgen på dataene avgjør svaret.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Ingenting her er ugyldig regning. Operasjonen lykkes &mdash; den gir bare tekst.',
          },
        ],
      },
      {
        q: 'Hva blir <code>2 ** 3 ** 2</code>?',
        answer: 1,
        options: [
          {
            text: '<code>64</code>',
            why: 'Det ville vært <code>(2 ** 3) ** 2</code>, altså gruppering fra venstre. Potens grupperer motsatt vei.',
          },
          {
            text: '<code>512</code>',
            why: 'Potens er høyreassosiativ, så uttrykket er <code>2 ** (3 ** 2)</code> = <code>2 ** 9</code>. Den og tilordning er de to som grupperer fra høyre.',
          },
          {
            text: '<code>12</code>',
            why: 'Det er ikke potens, men multiplikasjon av leddene.',
          },
          {
            text: 'SyntaxError',
            why: 'Uttrykket er helt gyldig. Det er <code>-2 ** 2</code> som er en syntaksfeil.',
          },
        ],
      },
      {
        q: 'Et antall er <code>0</code>. Hva gir <code>antall || 10</code> og <code>antall ?? 10</code>?',
        answer: 0,
        options: [
          {
            text: '<code>10</code> og <code>0</code>',
            why: '<code>||</code> behandler alle usanne verdier som «mangler», og <code>0</code> er usann. <code>??</code> slår bare inn på <code>null</code> og <code>undefined</code>, så nullen slipper igjennom som et ekte svar.',
          },
          {
            text: '<code>0</code> og <code>0</code>',
            why: 'Det ville vært riktig hvis <code>||</code> bare så etter <code>null</code>. Den ser etter alt som er usant.',
          },
          {
            text: '<code>10</code> og <code>10</code>',
            why: 'Da ville <code>??</code> ikke hatt noen grunn til å finnes. Forskjellen på de to er nettopp dette tilfellet.',
          },
          {
            text: 'Begge gir SyntaxError.',
            why: 'Begge er lovlige hver for seg. Det er å blande dem uten parenteser som er forbudt.',
          },
        ],
      },
      {
        q: 'Hva blir <code>null?.a.b.c</code>?',
        answer: 1,
        options: [
          {
            text: 'TypeError på <code>.b</code>',
            why: 'Det ville vært tilfellet hvis <code>?.</code> bare dekket det ene leddet. Den dekker resten av kjeden.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Ett <code>?.</code> kortslutter hele resten. Så snart venstresiden er <code>null</code> eller <code>undefined</code>, hoppes <code>.a</code>, <code>.b</code> og <code>.c</code> over uten å bli forsøkt.',
          },
          {
            text: '<code>null</code>',
            why: 'Resultatet av en kortsluttet kjede er alltid <code>undefined</code>, uansett om det var <code>null</code> som stoppet den.',
          },
          {
            text: 'SyntaxError &mdash; du må skrive <code>?.</code> hele veien.',
            why: 'Det er lovlig, og det er nettopp poenget: ett holder.',
          },
        ],
      },
      {
        q: 'Hva blir <code>3 &gt; 2 &gt; 1</code>?',
        answer: 2,
        options: [
          {
            text: '<code>true</code> &mdash; 3 er større enn 2, som er større enn 1.',
            why: 'Det er slik det leses, men ikke slik det regnes. Sammenligninger kjedes ikke slik i Javascript.',
          },
          {
            text: 'SyntaxError',
            why: 'Helt lovlig uttrykk. Det er bare ikke det du tror det er.',
          },
          {
            text: '<code>false</code>',
            why: '<code>3 &gt; 2</code> blir <code>true</code>, og så regnes <code>true &gt; 1</code>, der <code>true</code> blir til 1. <code>1 &gt; 1</code> er usant. Skriv <code>3 &gt; 2 &amp;&amp; 2 &gt; 1</code> i stedet.',
          },
          {
            text: '<code>1</code>',
            why: 'Sammenligninger gir en boolsk verdi, ikke et tall. Tallet dukker bare opp underveis i omregningen.',
          },
        ],
      },
      {
        q: 'Hvorfor er <code>bruker &amp;&amp; bruker.lagre()</code> trygt selv om <code>bruker</code> kan være <code>null</code>?',
        answer: 3,
        options: [
          {
            text: 'Fordi <code>&amp;&amp;</code> fanger feilen.',
            why: 'Ingen feil fanges. Den oppstår aldri.',
          },
          {
            text: 'Fordi <code>null.lagre()</code> gir <code>undefined</code>.',
            why: 'Det gir en TypeError. Poenget er at kallet aldri skjer.',
          },
          {
            text: 'Fordi <code>&amp;&amp;</code> alltid returnerer en boolsk verdi.',
            why: 'Den returnerer en av operandene. Her ville den returnert <code>null</code>.',
          },
          {
            text: 'Fordi høyresiden aldri kjøres når venstresiden er usann.',
            why: 'Så snart <code>&amp;&amp;</code> ser noe usant, er svaret gitt, og den slutter å evaluere. Kallet blir aldri forsøkt. <code>bruker?.lagre()</code> gjør det samme, tydeligere.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'What is <code>1 + 2 + &#39;3&#39;</code>?',
        answer: 2,
        options: [
          {
            text: '<code>6</code>',
            why: 'That would require <code>&#39;3&#39;</code> to become a number. But once either side of <code>+</code> is text, it joins instead.',
          },
          {
            text: '<code>&#39;123&#39;</code>',
            why: 'That is the answer to <code>&#39;1&#39; + 2 + 3</code>. Here the text comes last, not first.',
          },
          {
            text: '<code>&#39;33&#39;</code>',
            why: '<code>+</code> goes from the left: <code>1 + 2</code> is 3, and <code>3 + &#39;3&#39;</code> is the text <code>&#39;33&#39;</code>. The order of the data decides the answer.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Nothing here is invalid arithmetic. The operation succeeds — it just produces text.',
          },
        ],
      },
      {
        q: 'What is <code>2 ** 3 ** 2</code>?',
        answer: 1,
        options: [
          {
            text: '<code>64</code>',
            why: 'That would be <code>(2 ** 3) ** 2</code>, grouping from the left. Exponentiation groups the other way.',
          },
          {
            text: '<code>512</code>',
            why: 'Exponentiation is right-associative, so the expression is <code>2 ** (3 ** 2)</code> = <code>2 ** 9</code>. It and assignment are the two that group from the right.',
          },
          {
            text: '<code>12</code>',
            why: 'That is not exponentiation but multiplying the terms.',
          },
          {
            text: 'SyntaxError',
            why: 'The expression is perfectly valid. It is <code>-2 ** 2</code> that is a syntax error.',
          },
        ],
      },
      {
        q: 'A count is <code>0</code>. What do <code>count || 10</code> and <code>count ?? 10</code> give?',
        answer: 0,
        options: [
          {
            text: '<code>10</code> and <code>0</code>',
            why: '<code>||</code> treats every falsy value as "missing", and <code>0</code> is falsy. <code>??</code> only kicks in on <code>null</code> and <code>undefined</code>, so the zero passes through as a real answer.',
          },
          {
            text: '<code>0</code> and <code>0</code>',
            why: 'That would be right if <code>||</code> only looked for <code>null</code>. It looks for anything falsy.',
          },
          {
            text: '<code>10</code> and <code>10</code>',
            why: 'Then <code>??</code> would have no reason to exist. This case is precisely the difference between them.',
          },
          {
            text: 'Both give a SyntaxError.',
            why: 'Each is legal on its own. It is mixing them without parentheses that is forbidden.',
          },
        ],
      },
      {
        q: 'What is <code>null?.a.b.c</code>?',
        answer: 1,
        options: [
          {
            text: 'TypeError on <code>.b</code>',
            why: 'That would be the case if <code>?.</code> only covered the one step. It covers the rest of the chain.',
          },
          {
            text: '<code>undefined</code>',
            why: 'A single <code>?.</code> short-circuits everything after it. Once the left side is <code>null</code> or <code>undefined</code>, <code>.a</code>, <code>.b</code> and <code>.c</code> are skipped without being attempted.',
          },
          {
            text: '<code>null</code>',
            why: 'The result of a short-circuited chain is always <code>undefined</code>, regardless of whether it was <code>null</code> that stopped it.',
          },
          {
            text: 'SyntaxError — you have to write <code>?.</code> all the way.',
            why: 'It is legal, and that is exactly the point: one is enough.',
          },
        ],
      },
      {
        q: 'What is <code>3 &gt; 2 &gt; 1</code>?',
        answer: 2,
        options: [
          {
            text: '<code>true</code> — 3 is greater than 2, which is greater than 1.',
            why: 'That is how it reads, but not how it is computed. Comparisons do not chain like that in Javascript.',
          },
          {
            text: 'SyntaxError',
            why: 'A perfectly legal expression. It just is not what you think it is.',
          },
          {
            text: '<code>false</code>',
            why: '<code>3 &gt; 2</code> becomes <code>true</code>, and then <code>true &gt; 1</code> is computed, where <code>true</code> turns into 1. <code>1 &gt; 1</code> is false. Write <code>3 &gt; 2 &amp;&amp; 2 &gt; 1</code> instead.',
          },
          {
            text: '<code>1</code>',
            why: 'Comparisons give a boolean, not a number. The number only appears inside the conversion.',
          },
        ],
      },
      {
        q: 'Why is <code>user &amp;&amp; user.save()</code> safe even when <code>user</code> may be <code>null</code>?',
        answer: 3,
        options: [
          {
            text: 'Because <code>&amp;&amp;</code> catches the error.',
            why: 'No error is caught. None ever occurs.',
          },
          {
            text: 'Because <code>null.save()</code> gives <code>undefined</code>.',
            why: 'It gives a TypeError. The point is that the call never happens.',
          },
          {
            text: 'Because <code>&amp;&amp;</code> always returns a boolean.',
            why: 'It returns one of the operands. Here it would return <code>null</code>.',
          },
          {
            text: 'Because the right side is never run when the left is falsy.',
            why: 'As soon as <code>&amp;&amp;</code> sees something falsy, the answer is settled and it stops evaluating. The call is never attempted. <code>user?.save()</code> does the same thing, more clearly.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Чим буде <code>1 + 2 + &#39;3&#39;</code>?',
        answer: 2,
        options: [
          {
            text: '<code>6</code>',
            why: 'Для цього <code>&#39;3&#39;</code> мав би стати числом. Але щойно один бік <code>+</code> є текстом, він натомість з’єднує.',
          },
          {
            text: '<code>&#39;123&#39;</code>',
            why: 'Це відповідь на <code>&#39;1&#39; + 2 + 3</code>. Тут текст стоїть останнім, а не першим.',
          },
          {
            text: '<code>&#39;33&#39;</code>',
            why: '<code>+</code> іде зліва: <code>1 + 2</code> дає 3, а <code>3 + &#39;3&#39;</code> дає текст <code>&#39;33&#39;</code>. Відповідь визначає порядок даних.',
          },
          {
            text: '<code>NaN</code>',
            why: 'Тут немає недійсної арифметики. Операція вдається — просто дає текст.',
          },
        ],
      },
      {
        q: 'Чим буде <code>2 ** 3 ** 2</code>?',
        answer: 1,
        options: [
          {
            text: '<code>64</code>',
            why: 'Це був би <code>(2 ** 3) ** 2</code>, тобто групування зліва. Степінь групується в інший бік.',
          },
          {
            text: '<code>512</code>',
            why: 'Піднесення до степеня правоасоціативне, тож вираз є <code>2 ** (3 ** 2)</code> = <code>2 ** 9</code>. Він і призначення — ті двоє, що групуються справа.',
          },
          {
            text: '<code>12</code>',
            why: 'Це не степінь, а множення доданків.',
          },
          {
            text: 'SyntaxError',
            why: 'Вираз цілком дійсний. Синтаксичною помилкою є <code>-2 ** 2</code>.',
          },
        ],
      },
      {
        q: 'Кількість дорівнює <code>0</code>. Що дадуть <code>count || 10</code> і <code>count ?? 10</code>?',
        answer: 0,
        options: [
          {
            text: '<code>10</code> і <code>0</code>',
            why: '<code>||</code> трактує кожне хибне значення як «немає», а <code>0</code> хибний. <code>??</code> спрацьовує лише на <code>null</code> і <code>undefined</code>, тож нуль проходить як справжня відповідь.',
          },
          {
            text: '<code>0</code> і <code>0</code>',
            why: 'Це було б правильно, якби <code>||</code> шукав лише <code>null</code>. Він шукає будь-що хибне.',
          },
          {
            text: '<code>10</code> і <code>10</code>',
            why: 'Тоді <code>??</code> не мав би причин існувати. Саме цей випадок і є різницею між ними.',
          },
          {
            text: 'Обидва дадуть SyntaxError.',
            why: 'Кожен окремо законний. Заборонено саме змішувати їх без дужок.',
          },
        ],
      },
      {
        q: 'Чим буде <code>null?.a.b.c</code>?',
        answer: 1,
        options: [
          {
            text: 'TypeError на <code>.b</code>',
            why: 'Так було б, якби <code>?.</code> покривав лише один крок. Він покриває решту ланцюжка.',
          },
          {
            text: '<code>undefined</code>',
            why: 'Один <code>?.</code> замикає накоротко все після себе. Щойно лівий бік є <code>null</code> або <code>undefined</code>, <code>.a</code>, <code>.b</code> і <code>.c</code> пропускаються без спроби.',
          },
          {
            text: '<code>null</code>',
            why: 'Результатом замкненого ланцюжка завжди є <code>undefined</code>, незалежно від того, чи спинив його <code>null</code>.',
          },
          {
            text: 'SyntaxError — треба писати <code>?.</code> усюди.',
            why: 'Це законно, і в цьому й суть: достатньо одного.',
          },
        ],
      },
      {
        q: 'Чим буде <code>3 &gt; 2 &gt; 1</code>?',
        answer: 2,
        options: [
          {
            text: '<code>true</code> — 3 більше за 2, що більше за 1.',
            why: 'Так це читається, але не так обчислюється. У Javascript порівняння так не зчіплюються.',
          },
          {
            text: 'SyntaxError',
            why: 'Цілком законний вираз. Просто він не такий, як вам здається.',
          },
          {
            text: '<code>false</code>',
            why: '<code>3 &gt; 2</code> стає <code>true</code>, а далі обчислюється <code>true &gt; 1</code>, де <code>true</code> перетворюється на 1. <code>1 &gt; 1</code> хибне. Пишіть натомість <code>3 &gt; 2 &amp;&amp; 2 &gt; 1</code>.',
          },
          {
            text: '<code>1</code>',
            why: 'Порівняння дають булеве значення, а не число. Число з’являється лише всередині перетворення.',
          },
        ],
      },
      {
        q: 'Чому <code>user &amp;&amp; user.save()</code> безпечний, навіть якщо <code>user</code> може бути <code>null</code>?',
        answer: 3,
        options: [
          {
            text: 'Бо <code>&amp;&amp;</code> ловить помилку.',
            why: 'Жодної помилки не ловлять. Вона просто не виникає.',
          },
          {
            text: 'Бо <code>null.save()</code> дає <code>undefined</code>.',
            why: 'Це дає TypeError. Річ у тім, що виклику не стається взагалі.',
          },
          {
            text: 'Бо <code>&amp;&amp;</code> завжди повертає булеве значення.',
            why: 'Він повертає один з операндів. Тут він повернув би <code>null</code>.',
          },
          {
            text: 'Бо правий бік не виконується, коли лівий хибний.',
            why: 'Щойно <code>&amp;&amp;</code> бачить щось хибне, відповідь визначена і він припиняє обчислення. Виклику навіть не пробують. <code>user?.save()</code> робить те саме, тільки ясніше.',
          },
        ],
      },
    ],
  },
});
