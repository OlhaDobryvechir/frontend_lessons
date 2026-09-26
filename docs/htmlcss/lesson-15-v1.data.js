/*
 * Content of lesson 15 in Norwegian, English and Ukrainian.
 * Only data lives here; every function is in ../script.js.
 */
Lessons.init({
  translations: {
    no: {
      'doc.title': 'CSS: color, background-color, heksadesimale verdier, rgb',
      kicker: 'Leksjon 15 &middot; HTML &amp; CSS',
      title: 'CSS: color, background-color, heksadesimale verdier, rgb',
      lead: 'To egenskaper og tre skrivemåter for det samme. Den ene egenskapen arves nedover, den andre gjør det ikke — og heksadesimal er den samme tallbasen du så på kodepunkter i leksjon 6.',

      's.color.t': 'Fargen på teksten',
      's.color.d':
        '<p><code>color</code> setter fargen på teksten, og arves som alt annet i forrige leksjon. Skriver du den én gang på <code>body</code>, gjelder den hele dokumentet til noe nedover sier noe annet.</p>' +
        '<p>Den gjør også mer enn teksten. Understreking, punktmerker i lister og markøren i et skjemafelt følger den, og det samme gjør alt du selv skriver <code>currentColor</code> på — som er siste seksjon i denne leksjonen.</p>',

      's.bg.t': 'Fargen på boksen',
      's.bg.d':
        '<p><code>background-color</code> fyller boksen, og arves <em>ikke</em>. Det er samme skille som i forrige leksjon: tekstegenskaper renner nedover i treet, boksegenskaper gjør det ikke.</p>' +
        '<p>Fyllet dekker mer enn du kanskje tror. Det strekker seg ut gjennom den innvendige margen, og som standard helt inn under rammen — noe du ser med en gang du gir elementet en stiplet ramme.</p>' +
        '<p>Startverdien er <code>transparent</code>, ikke hvit. En side uten bakgrunnsfarge er ikke hvit fordi CSS sa det, men fordi nettleseren tegner sitt eget lerret bak alt sammen.</p>',

      's.hex.t': 'Heksadesimalt',
      's.hex.d':
        '<p>En heksadesimal farge er tre tall satt etter hverandre: rødt, grønt og blått, hvert av dem to siffer i base 16. To siffer rekker fra <code>00</code> til <code>ff</code>, altså 0 til 255.</p>' +
        '<p>Det er samme tallbase som kodepunktene i leksjon 6 og de numeriske entitetene i leksjon 7. Grunnen til at den dukker opp overalt, er at to heksadesimale siffer er nøyaktig én byte — akkurat det en fargekanal trenger.</p>' +
        '<p>Tre siffer er en forkortelse der hvert siffer dobles: <code>#abc</code> betyr <code>#aabbcc</code>. Åtte siffer legger til et fjerde par for gjennomsiktighet, så <code>#58a6ffcc</code> er den vanlige fargen på 80 prosent.</p>',

      's.rgb.t': 'De samme tallene, lest høyt',
      's.rgb.d':
        '<p><code>rgb()</code> er nøyaktig det samme som heksadesimalt, bare skrevet i titallssystemet. <code>#58a6ff</code> og <code>rgb(88 166 255)</code> er én og samme farge; nettleseren skiller dem ikke.</p>' +
        '<p>Den moderne skrivemåten bruker mellomrom mellom kanalene og en skråstrek foran gjennomsiktigheten: <code>rgb(88 166 255 / 50%)</code>. Kommaformen og <code>rgba()</code> virker fortsatt overalt, og <code>rgba</code> er i dag bare et annet navn på <code>rgb</code>.</p>' +
        '<p>Fordelen med <code>rgb()</code> framfor heksadesimalt er at tallene er lesbare, og at du kan regne på dem. Ulempen er den samme som med heksadesimalt: ingen av dem sier deg hva fargen faktisk <em>er</em>.</p>',

      's.hsl.t': 'En mer menneskelig måte å si det på',
      's.hsl.d':
        '<p><code>hsl()</code> beskriver fargen slik man tenker på den: en fargetone som et gradtall på fargesirkelen, hvor mettet den er, og hvor lys.</p>' +
        '<p>Det gjør varianter nesten trivielle. En hover-tilstand er det samme tallet med høyere lyshet; en deaktivert knapp er samme tone med metningen skrudd ned. I heksadesimalt er de samme to endringene tre nye tall du må slå opp.</p>' +
        '<p><code>hsl(212 100% 67.25%)</code> er nøyaktig <code>#58a6ff</code>. Det er ingen ny farge, bare et annet koordinatsystem for den samme.</p>' +
        '<p>Legg merke til desimalen. Runder du alle tre tallene til hele, havner du et hakk unna, på <code>rgb(87 165 255)</code> &mdash; de to systemene deler ikke fargerommet i like store trinn. Til et designsystem spiller det ingen rolle; skal du treffe en oppgitt merkevarefarge nøyaktig, gjør det det.</p>',

      's.alpha.t': 'Gjennomsiktighet, og hvorfor det ikke er opacity',
      's.alpha.d':
        '<p>Alle tre skrivemåtene kan ta en fjerde verdi for gjennomsiktighet. Den gjelder bare den ene fargen du skriver den på.</p>' +
        '<p><code>opacity</code> ser ut som det samme og er noe annet: den gjør hele elementet gjennomsiktig, med alt innholdet i det. En etikett med <code>background-color: rgb(88 166 255 / 10%)</code> har et svakt fyll og fullt lesbar tekst. Den samme etiketten med <code>opacity: 0.1</code> er nesten borte, tekst og alt.</p>' +
        '<p>Regelen er enkel: skal bare fargen tones ned, legg gjennomsiktigheten i fargen. <code>opacity</code> er for når hele elementet skal tones ned.</p>',

      's.current.t': 'Å gjenbruke fargen du allerede har',
      's.current.d':
        '<p><code>currentColor</code> er ikke en farge, men en henvisning: den betyr «den <code>color</code> dette elementet har». En ramme satt til <code>currentColor</code> følger teksten uten at du gjentar verdien, og uten at de to kan komme i utakt.</p>' +
        '<p>Det er særlig nyttig på ikoner og rammer i knapper: endrer du tekstfargen i én tilstand, følger resten etter av seg selv.</p>' +
        '<p>Til slutt finnes det rundt 150 navngitte farger. De er presise verdier, ikke omtrentlige — <code>rebeccapurple</code> er alltid <code>#663399</code>. De er fine til skisser og til å feilsøke med, men et navn sier ingenting om hvor fargen hører hjemme i paletten din.</p>',

      's.note':
        '<p>Kortversjonen. <code>color</code> arves, <code>background-color</code> gjør det ikke. Heksadesimalt og <code>rgb()</code> er samme tall i to baser; <code>hsl()</code> er den samme fargen beskrevet slik du faktisk tenker om den. Legg gjennomsiktighet i fargen når bare fargen skal tones ned, og bruk <code>currentColor</code> i stedet for å skrive den samme verdien to ganger.</p>',

      'btn.index': 'Innhold',
      'btn.test': 'Test',
      'btn.next': 'Neste leksjon',
    },

    en: {
      'doc.title': 'CSS: color, background-color, hexadecimal values, rgb',
      kicker: 'Lesson 15 &middot; HTML &amp; CSS',
      title: 'CSS: color, background-color, hexadecimal values, rgb',
      lead: 'Two properties and three ways of writing the same thing. One of the properties is inherited and the other is not — and hexadecimal is the same number base you met on code points in lesson 6.',

      's.color.t': 'The colour of the text',
      's.color.d':
        '<p><code>color</code> sets the colour of text, and is inherited like everything else in the previous lesson. Write it once on <code>body</code> and it applies to the whole document until something further down says otherwise.</p>' +
        '<p>It does more than the text, too. Underlines, list bullets and the caret in a form field all follow it, and so does anything you yourself write <code>currentColor</code> on — which is the last section of this lesson.</p>',

      's.bg.t': 'The colour of the box',
      's.bg.d':
        '<p><code>background-color</code> fills the box, and is <em>not</em> inherited. That is the same split as the previous lesson: text properties flow down the tree, box properties do not.</p>' +
        '<p>The fill covers more than you might expect. It reaches out through the padding, and by default all the way under the border — which you notice the moment you give an element a dashed border.</p>' +
        '<p>The initial value is <code>transparent</code>, not white. A page with no background colour is not white because CSS said so, but because the browser paints its own canvas behind everything.</p>',

      's.hex.t': 'Hexadecimal',
      's.hex.d':
        '<p>A hexadecimal colour is three numbers placed end to end: red, green and blue, each of them two digits in base 16. Two digits reach from <code>00</code> to <code>ff</code>, which is 0 to 255.</p>' +
        '<p>That is the same number base as the code points in lesson 6 and the numeric entities in lesson 7. The reason it keeps turning up is that two hexadecimal digits are exactly one byte — precisely what one colour channel needs.</p>' +
        '<p>Three digits is a shorthand where each digit is doubled: <code>#abc</code> means <code>#aabbcc</code>. Eight digits add a fourth pair for transparency, so <code>#58a6ffcc</code> is the ordinary colour at 80 per cent.</p>',

      's.rgb.t': 'The same numbers, read aloud',
      's.rgb.d':
        '<p><code>rgb()</code> is exactly the same thing as hexadecimal, written in base ten. <code>#58a6ff</code> and <code>rgb(88 166 255)</code> are one and the same colour; the browser does not distinguish them.</p>' +
        '<p>The modern form uses spaces between the channels and a slash before the transparency: <code>rgb(88 166 255 / 50%)</code>. The comma form and <code>rgba()</code> still work everywhere, and <code>rgba</code> is now simply another name for <code>rgb</code>.</p>' +
        '<p>The advantage of <code>rgb()</code> over hexadecimal is that the numbers are readable and you can do arithmetic on them. The disadvantage is the same as hexadecimal: neither tells you what the colour actually <em>is</em>.</p>',

      's.hsl.t': 'A more human way to say it',
      's.hsl.d':
        '<p><code>hsl()</code> describes a colour the way people think about one: a hue as a number of degrees around the colour wheel, how saturated it is, and how light.</p>' +
        '<p>That makes variants almost trivial. A hover state is the same number with more lightness; a disabled button is the same hue with the saturation turned down. In hexadecimal those same two changes are three new numbers you have to look up.</p>' +
        '<p><code>hsl(212 100% 67.25%)</code> is precisely <code>#58a6ff</code>. It is not a new colour, just a different coordinate system for the same one.</p>' +
        '<p>Note the decimal. Round all three numbers to whole units and you land a step away, on <code>rgb(87 165 255)</code> &mdash; the two systems do not divide the colour space into equal steps. For a design system that does not matter; for matching a brand colour exactly, it does.</p>',

      's.alpha.t': 'Transparency, and why it is not opacity',
      's.alpha.d':
        '<p>All three notations can take a fourth value for transparency. It applies only to the one colour you write it on.</p>' +
        '<p><code>opacity</code> looks like the same thing and is something else: it makes the whole element transparent, with all of its content. A badge with <code>background-color: rgb(88 166 255 / 10%)</code> has a faint fill and perfectly readable text. The same badge with <code>opacity: 0.1</code> is nearly gone, text and all.</p>' +
        '<p>The rule is simple: if only the colour should fade, put the transparency in the colour. <code>opacity</code> is for when the whole element should fade.</p>',

      's.current.t': 'Reusing the colour you already have',
      's.current.d':
        '<p><code>currentColor</code> is not a colour but a reference: it means "the <code>color</code> this element has". A border set to <code>currentColor</code> follows the text without you repeating the value, and without the two ever drifting apart.</p>' +
        '<p>It is especially useful on icons and on borders in buttons: change the text colour in one state and everything else follows by itself.</p>' +
        '<p>Finally, around 150 named colours exist. They are exact values, not approximations — <code>rebeccapurple</code> is always <code>#663399</code>. They are fine for sketching and for debugging, but a name tells you nothing about where the colour belongs in your palette.</p>',

      's.note':
        '<p>The short version. <code>color</code> is inherited, <code>background-color</code> is not. Hexadecimal and <code>rgb()</code> are the same numbers in two bases; <code>hsl()</code> is the same colour described the way you actually think about it. Put transparency in the colour when only the colour should fade, and use <code>currentColor</code> rather than writing the same value twice.</p>',

      'btn.index': 'Index',
      'btn.test': 'Test',
      'btn.next': 'Next lesson',
    },

    uk: {
      'doc.title': 'CSS: color, background-color, шістнадцяткові значення, rgb',
      kicker: 'Урок 15 &middot; HTML &amp; CSS',
      title: 'CSS: color, background-color, шістнадцяткові значення, rgb',
      lead: 'Дві властивості й три способи записати те саме. Одна з властивостей успадковується, друга ні — а шістнадцяткова система це та сама основа числення, яку ви бачили на кодових точках в уроці 6.',

      's.color.t': 'Колір тексту',
      's.color.d':
        '<p><code>color</code> задає колір тексту і успадковується, як і все інше в попередньому уроці. Напишіть його один раз на <code>body</code> — і він діятиме на весь документ, доки щось нижче не скаже інакше.</p>' +
        '<p>Він робить більше, ніж текст. Підкреслення, маркери списків і курсор у полі форми йдуть за ним, як і все, чому ви самі напишете <code>currentColor</code> — про це останній розділ цього уроку.</p>',

      's.bg.t': 'Колір коробки',
      's.bg.d':
        '<p><code>background-color</code> заповнює коробку і <em>не</em> успадковується. Це той самий поділ, що й у попередньому уроці: текстові властивості течуть униз по дереву, коробкові — ні.</p>' +
        '<p>Заливка покриває більше, ніж можна очікувати. Вона сягає крізь внутрішній відступ і типово аж під рамку — це помітно одразу, щойно дати елементу штрихову рамку.</p>' +
        '<p>Початкове значення — <code>transparent</code>, а не білий. Сторінка без кольору тла біла не тому, що так сказав CSS, а тому, що браузер малює власне полотно за всім.</p>',

      's.hex.t': 'Шістнадцятково',
      's.hex.d':
        '<p>Шістнадцятковий колір — це три числа поспіль: червоне, зелене й синє, кожне по дві цифри за основою 16. Дві цифри сягають від <code>00</code> до <code>ff</code>, тобто від 0 до 255.</p>' +
        '<p>Це та сама основа числення, що й кодові точки в уроці 6 і числові сутності в уроці 7. Вона трапляється всюди тому, що дві шістнадцяткові цифри — це рівно один байт, саме те, що потрібно одному каналу кольору.</p>' +
        '<p>Три цифри — це скорочення, де кожну цифру подвоюють: <code>#abc</code> означає <code>#aabbcc</code>. Вісім цифр додають четверту пару для прозорості, тож <code>#58a6ffcc</code> — це звичайний колір на 80 відсотків.</p>',

      's.rgb.t': 'Ті самі числа, прочитані вголос',
      's.rgb.d':
        '<p><code>rgb()</code> — це рівно те саме, що й шістнадцятковий запис, лише в десятковій системі. <code>#58a6ff</code> і <code>rgb(88 166 255)</code> — один і той самий колір; браузер їх не розрізняє.</p>' +
        '<p>Сучасна форма використовує пробіли між каналами і скісну риску перед прозорістю: <code>rgb(88 166 255 / 50%)</code>. Форма з комами і <code>rgba()</code> й досі працюють усюди, а <code>rgba</code> нині просто інша назва для <code>rgb</code>.</p>' +
        '<p>Перевага <code>rgb()</code> перед шістнадцятковим записом у тому, що числа читабельні й з ними можна рахувати. Недолік той самий: жоден із них не каже вам, чим той колір насправді <em>є</em>.</p>',

      's.hsl.t': 'Людяніший спосіб це сказати',
      's.hsl.d':
        '<p><code>hsl()</code> описує колір так, як про нього думають люди: відтінок як число градусів на колірному колі, наскільки він насичений і наскільки світлий.</p>' +
        '<p>Це робить варіації майже тривіальними. Стан наведення — те саме число з більшою світлістю; вимкнена кнопка — той самий відтінок зі зменшеною насиченістю. У шістнадцятковому записі ті самі дві зміни — це три нові числа, які треба десь узяти.</p>' +
        '<p><code>hsl(212 100% 67.25%)</code> — це точно <code>#58a6ff</code>. Це не новий колір, а інша система координат для того самого.</p>' +
        '<p>Зверніть увагу на десяткову частину. Округліть усі три числа до цілих — і ви опинитеся на крок убік, на <code>rgb(87 165 255)</code>: ці дві системи ділять колірний простір неоднаковими кроками. Для дизайн-системи це не має значення; для точного влучання у фірмовий колір — має.</p>',

      's.alpha.t': 'Прозорість і чому це не opacity',
      's.alpha.d':
        '<p>Усі три записи можуть мати четверте значення — прозорість. Вона стосується лише того одного кольору, на якому її написано.</p>' +
        '<p><code>opacity</code> виглядає так само і є чимось іншим: вона робить прозорим увесь елемент разом з усім його вмістом. Бейдж із <code>background-color: rgb(88 166 255 / 10%)</code> має ледь помітну заливку і цілком читабельний текст. Той самий бейдж із <code>opacity: 0.1</code> майже зник, разом із текстом.</p>' +
        '<p>Правило просте: якщо має зблякнути лише колір, кладіть прозорість у колір. <code>opacity</code> — для випадку, коли має зблякнути весь елемент.</p>',

      's.current.t': 'Повторно вжити колір, який уже є',
      's.current.d':
        '<p><code>currentColor</code> — це не колір, а посилання: воно означає «той <code>color</code>, який має цей елемент». Рамка, задана як <code>currentColor</code>, іде за текстом без повторення значення, і ці двоє ніколи не розійдуться.</p>' +
        '<p>Особливо корисно для піктограм і рамок у кнопках: змініть колір тексту в одному стані — і решта піде слідом сама.</p>' +
        '<p>І наостанок: існує близько 150 іменованих кольорів. Це точні значення, а не приблизні — <code>rebeccapurple</code> завжди <code>#663399</code>. Вони добрі для начерків і налагодження, але назва нічого не каже про те, де цей колір живе у вашій палітрі.</p>',

      's.note':
        '<p>Коротко. <code>color</code> успадковується, <code>background-color</code> ні. Шістнадцятковий запис і <code>rgb()</code> — ті самі числа у двох основах; <code>hsl()</code> — той самий колір, описаний так, як ви про нього думаєте. Кладіть прозорість у колір, коли зблякнути має лише колір, і беріть <code>currentColor</code>, замість писати те саме значення двічі.</p>',

      'btn.index': 'Зміст',
      'btn.test': 'Тест',
      'btn.next': 'Наступний урок',
    },
  },

  quiz: {
    no: [
      {
        q: 'Hvilken av disse er <em>ikke</em> den samme fargen som de andre?',
        answer: 3,
        options: [
          {
            text: '<code>#58a6ff</code>',
            why: 'Kanalene er 58, a6 og ff heksadesimalt &mdash; altså 88, 166 og 255.',
          },
          {
            text: '<code>rgb(88 166 255)</code>',
            why: 'De samme tre tallene i titallssystemet. Nettleseren skiller ikke de to skrivemåtene.',
          },
          {
            text: '<code>hsl(212 100% 67.25%)</code>',
            why: 'Samme farge, beskrevet med tone, metning og lyshet i stedet for kanaler.',
          },
          {
            text: '<code>rgb(88 166 255 / 50%)</code>',
            why: 'Kanalene stemmer, men den fjerde verdien gjør fargen halvt gjennomsiktig. Det er en annen farge enn de tre andre, som alle er helt ugjennomsiktige.',
          },
        ],
      },
      {
        q: 'Du setter <code>color</code> og <code>background-color</code> på <code>body</code>. Hva arver et avsnitt langt nede i dokumentet?',
        answer: 1,
        options: [
          {
            text: 'Begge deler.',
            why: 'Bare den ene arves. Skillet er det samme som i forrige leksjon.',
          },
          {
            text: 'Bare <code>color</code>.',
            why: '<code>color</code> er en tekstegenskap og renner nedover i treet. <code>background-color</code> hører til boksen, og hver boks har sin egen &mdash; startverdien er <code>transparent</code>, så bakgrunnen bak skinner gjennom.',
          },
          {
            text: 'Bare <code>background-color</code>.',
            why: 'Det er omvendt. Bakgrunnen er nettopp den som ikke arves.',
          },
          {
            text: 'Ingen av dem, med mindre du skriver <code>inherit</code>.',
            why: '<code>color</code> arves helt av seg selv, uten at du ber om det.',
          },
        ],
      },
      {
        q: 'Hva betyr <code>#abc</code>?',
        answer: 2,
        options: [
          {
            text: 'En ugyldig farge &mdash; det må være seks siffer.',
            why: 'Tre siffer er en helt vanlig og gyldig forkortelse.',
          },
          {
            text: '<code>#0a0b0c</code> &mdash; hvert siffer får en null foran.',
            why: 'Sifrene dobles, de nulles ikke ut. Det ville dessuten gitt en nesten svart farge.',
          },
          {
            text: '<code>#aabbcc</code> &mdash; hvert siffer dobles.',
            why: 'Forkortelsen gjentar hvert siffer: a blir aa, b blir bb, c blir cc. Derfor kan bare 4096 av de 16 millioner fargene skrives på tre siffer.',
          },
          {
            text: 'Rødt 10, grønt 11, blått 12.',
            why: 'Det er sifrenes verdi, men en kanal er to siffer. Ett enkelt siffer dobles først.',
          },
        ],
      },
      {
        q: 'Du vil ha en etikett med svakt blått fyll og fullt lesbar tekst. Hva bruker du?',
        answer: 0,
        options: [
          {
            text: '<code>background-color: rgb(88 166 255 / 10%)</code>',
            why: 'Gjennomsiktigheten ligger i fargen, så bare fyllet tones ned. Teksten har sin egen farge og er urørt.',
          },
          {
            text: '<code>opacity: 0.1</code>',
            why: '<code>opacity</code> tar hele elementet, teksten inkludert. Etiketten ville nesten forsvunnet.',
          },
          {
            text: '<code>color: rgb(88 166 255 / 10%)</code>',
            why: 'Det toner ned teksten i stedet for fyllet &mdash; stikk motsatt av det du ba om.',
          },
          {
            text: '<code>background-color: transparent</code>',
            why: 'Da får du ikke noe fyll i det hele tatt. <code>transparent</code> er bare <code>rgb(0 0 0 / 0)</code>.',
          },
        ],
      },
      {
        q: 'Hvorfor er <code>hsl()</code> ofte lettere å jobbe med enn heksadesimalt?',
        answer: 2,
        options: [
          {
            text: 'Den kan vise farger heksadesimalt ikke kan.',
            why: 'De dekker nøyaktig det samme. Det er bare to måter å peke på samme punkt.',
          },
          {
            text: 'Den er raskere for nettleseren.',
            why: 'Forskjellen finnes ikke i praksis. Gevinsten er for den som skriver koden.',
          },
          {
            text: 'Fordi en lysere eller mattere variant er ett tall unna, i stedet for tre nye.',
            why: 'Tone, metning og lyshet er atskilte. En hover-tilstand er samme tone med mer lyshet; i heksadesimalt må alle tre kanalene regnes om.',
          },
          {
            text: 'Fordi den ikke støtter gjennomsiktighet, og dermed er enklere.',
            why: 'Den støtter gjennomsiktighet på nøyaktig samme måte, med en skråstrek.',
          },
        ],
      },
      {
        q: 'Hva gjør <code>border: 1px solid currentColor</code>?',
        answer: 1,
        options: [
          {
            text: 'Setter rammen til svart, som er standardfargen.',
            why: 'Den ser ikke på noen standard, men på elementets egen <code>color</code>.',
          },
          {
            text: 'Lar rammen følge elementets <code>color</code>, også når den endres.',
            why: '<code>currentColor</code> er en henvisning, ikke en verdi. Endrer du tekstfargen i en hover-tilstand, følger rammen etter uten at du skriver noe mer.',
          },
          {
            text: 'Kopierer fargen én gang, ved sidelasting.',
            why: 'Den låses ikke. Den slår opp <code>color</code> der og da, hver gang den brukes.',
          },
          {
            text: 'Setter rammen til bakgrunnsfargen.',
            why: 'Den ser på <code>color</code>, ikke på <code>background-color</code>.',
          },
        ],
      },
    ],

    en: [
      {
        q: 'Which of these is <em>not</em> the same colour as the others?',
        answer: 3,
        options: [
          {
            text: '<code>#58a6ff</code>',
            why: 'The channels are 58, a6 and ff in hexadecimal — that is 88, 166 and 255.',
          },
          {
            text: '<code>rgb(88 166 255)</code>',
            why: 'The same three numbers in base ten. The browser does not distinguish the two notations.',
          },
          {
            text: '<code>hsl(212 100% 67.25%)</code>',
            why: 'The same colour, described with hue, saturation and lightness instead of channels.',
          },
          {
            text: '<code>rgb(88 166 255 / 50%)</code>',
            why: 'The channels match, but the fourth value makes it half transparent. That is a different colour from the other three, which are all fully opaque.',
          },
        ],
      },
      {
        q: 'You set <code>color</code> and <code>background-color</code> on <code>body</code>. What does a paragraph deep in the document inherit?',
        answer: 1,
        options: [
          {
            text: 'Both of them.',
            why: 'Only one is inherited. The split is the same as in the previous lesson.',
          },
          {
            text: 'Only <code>color</code>.',
            why: '<code>color</code> is a text property and flows down the tree. <code>background-color</code> belongs to the box, and every box has its own — the initial value is <code>transparent</code>, so the background behind shows through.',
          },
          {
            text: 'Only <code>background-color</code>.',
            why: 'It is the other way round. The background is precisely the one that is not inherited.',
          },
          {
            text: 'Neither, unless you write <code>inherit</code>.',
            why: '<code>color</code> is inherited entirely by itself, without being asked.',
          },
        ],
      },
      {
        q: 'What does <code>#abc</code> mean?',
        answer: 2,
        options: [
          {
            text: 'An invalid colour — it has to be six digits.',
            why: 'Three digits is a perfectly ordinary and valid shorthand.',
          },
          {
            text: '<code>#0a0b0c</code> — each digit gets a leading zero.',
            why: 'The digits are doubled, not zero-padded. That would also give an almost black colour.',
          },
          {
            text: '<code>#aabbcc</code> — each digit is doubled.',
            why: 'The shorthand repeats each digit: a becomes aa, b becomes bb, c becomes cc. Which is why only 4096 of the 16 million colours can be written in three digits.',
          },
          {
            text: 'Red 10, green 11, blue 12.',
            why: 'Those are the digit values, but a channel is two digits. A single digit is doubled first.',
          },
        ],
      },
      {
        q: 'You want a badge with a faint blue fill and perfectly readable text. What do you use?',
        answer: 0,
        options: [
          {
            text: '<code>background-color: rgb(88 166 255 / 10%)</code>',
            why: 'The transparency sits in the colour, so only the fill fades. The text has its own colour and is untouched.',
          },
          {
            text: '<code>opacity: 0.1</code>',
            why: '<code>opacity</code> takes the whole element, text included. The badge would nearly disappear.',
          },
          {
            text: '<code>color: rgb(88 166 255 / 10%)</code>',
            why: 'That fades the text instead of the fill — the exact opposite of what you asked for.',
          },
          {
            text: '<code>background-color: transparent</code>',
            why: 'Then you get no fill at all. <code>transparent</code> is simply <code>rgb(0 0 0 / 0)</code>.',
          },
        ],
      },
      {
        q: 'Why is <code>hsl()</code> often easier to work with than hexadecimal?',
        answer: 2,
        options: [
          {
            text: 'It can show colours hexadecimal cannot.',
            why: 'They cover exactly the same range. They are two ways of pointing at the same point.',
          },
          {
            text: 'It is faster for the browser.',
            why: 'There is no practical difference. The benefit is for whoever writes the code.',
          },
          {
            text: 'Because a lighter or duller variant is one number away, instead of three new ones.',
            why: 'Hue, saturation and lightness are separate. A hover state is the same hue with more lightness; in hexadecimal all three channels have to be recalculated.',
          },
          {
            text: 'Because it does not support transparency, and is therefore simpler.',
            why: 'It supports transparency in exactly the same way, with a slash.',
          },
        ],
      },
      {
        q: 'What does <code>border: 1px solid currentColor</code> do?',
        answer: 1,
        options: [
          {
            text: 'Sets the border to black, which is the default colour.',
            why: 'It does not look at any default, but at the element own <code>color</code>.',
          },
          {
            text: 'Lets the border follow the element <code>color</code>, including when it changes.',
            why: '<code>currentColor</code> is a reference, not a value. Change the text colour in a hover state and the border follows without you writing anything more.',
          },
          {
            text: 'Copies the colour once, when the page loads.',
            why: 'It is not frozen. It looks <code>color</code> up there and then, every time it is used.',
          },
          {
            text: 'Sets the border to the background colour.',
            why: 'It looks at <code>color</code>, not at <code>background-color</code>.',
          },
        ],
      },
    ],

    uk: [
      {
        q: 'Який із цих кольорів <em>не</em> такий самий, як інші?',
        answer: 3,
        options: [
          {
            text: '<code>#58a6ff</code>',
            why: 'Канали — 58, a6 і ff шістнадцятково, тобто 88, 166 і 255.',
          },
          {
            text: '<code>rgb(88 166 255)</code>',
            why: 'Ті самі три числа в десятковій системі. Браузер не розрізняє ці два записи.',
          },
          {
            text: '<code>hsl(212 100% 67.25%)</code>',
            why: 'Той самий колір, описаний відтінком, насиченістю і світлістю замість каналів.',
          },
          {
            text: '<code>rgb(88 166 255 / 50%)</code>',
            why: 'Канали збігаються, але четверте значення робить колір напівпрозорим. Це інший колір, ніж три попередні, які всі цілком непрозорі.',
          },
        ],
      },
      {
        q: 'Ви задаєте <code>color</code> і <code>background-color</code> на <code>body</code>. Що успадкує абзац глибоко в документі?',
        answer: 1,
        options: [
          {
            text: 'Обидва.',
            why: 'Успадковується лише один. Поділ той самий, що й у попередньому уроці.',
          },
          {
            text: 'Лише <code>color</code>.',
            why: '<code>color</code> — текстова властивість і тече вниз по дереву. <code>background-color</code> належить коробці, і в кожної коробки він свій: початкове значення <code>transparent</code>, тож тло позаду просвічує.',
          },
          {
            text: 'Лише <code>background-color</code>.',
            why: 'Навпаки. Саме тло й не успадковується.',
          },
          {
            text: 'Жодного, доки не написати <code>inherit</code>.',
            why: '<code>color</code> успадковується цілком самостійно, без жодних прохань.',
          },
        ],
      },
      {
        q: 'Що означає <code>#abc</code>?',
        answer: 2,
        options: [
          {
            text: 'Недійсний колір — цифр має бути шість.',
            why: 'Три цифри — цілком звичайне й дійсне скорочення.',
          },
          {
            text: '<code>#0a0b0c</code> — перед кожною цифрою додається нуль.',
            why: 'Цифри подвоюються, а не доповнюються нулями. Та й це дало б майже чорний колір.',
          },
          {
            text: '<code>#aabbcc</code> — кожна цифра подвоюється.',
            why: 'Скорочення повторює кожну цифру: a стає aa, b стає bb, c стає cc. Саме тому трьома цифрами можна записати лише 4096 із 16 мільйонів кольорів.',
          },
          {
            text: 'Червоний 10, зелений 11, синій 12.',
            why: 'Це значення цифр, але канал складається з двох цифр. Одну цифру спершу подвоюють.',
          },
        ],
      },
      {
        q: 'Вам потрібен бейдж із ледь помітною синьою заливкою і цілком читабельним текстом. Що візьмете?',
        answer: 0,
        options: [
          {
            text: '<code>background-color: rgb(88 166 255 / 10%)</code>',
            why: 'Прозорість лежить у кольорі, тож блякне лише заливка. Текст має власний колір і лишається недоторканим.',
          },
          {
            text: '<code>opacity: 0.1</code>',
            why: '<code>opacity</code> бере весь елемент, разом із текстом. Бейдж майже зник би.',
          },
          {
            text: '<code>color: rgb(88 166 255 / 10%)</code>',
            why: 'Це приглушить текст замість заливки — протилежне до того, про що ви просили.',
          },
          {
            text: '<code>background-color: transparent</code>',
            why: 'Тоді заливки не буде взагалі. <code>transparent</code> — це просто <code>rgb(0 0 0 / 0)</code>.',
          },
        ],
      },
      {
        q: 'Чому з <code>hsl()</code> часто зручніше працювати, ніж із шістнадцятковим записом?',
        answer: 2,
        options: [
          {
            text: 'Він показує кольори, яких шістнадцятковий не може.',
            why: 'Вони покривають рівно той самий діапазон. Це два способи вказати на ту саму точку.',
          },
          {
            text: 'Він швидший для браузера.',
            why: 'На практиці різниці немає. Виграш дістається тому, хто пише код.',
          },
          {
            text: 'Бо світліший чи тьмяніший варіант — це одне число, а не три нові.',
            why: 'Відтінок, насиченість і світлість роздільні. Стан наведення — той самий відтінок зі збільшеною світлістю; у шістнадцятковому довелося б перерахувати всі три канали.',
          },
          {
            text: 'Бо він не підтримує прозорості й тому простіший.',
            why: 'Він підтримує прозорість точно так само, через скісну риску.',
          },
        ],
      },
      {
        q: 'Що робить <code>border: 1px solid currentColor</code>?',
        answer: 1,
        options: [
          {
            text: 'Робить рамку чорною, бо це типовий колір.',
            why: 'Він дивиться не на якийсь типовий колір, а на власний <code>color</code> елемента.',
          },
          {
            text: 'Дозволяє рамці йти за <code>color</code> елемента, зокрема й коли той змінюється.',
            why: '<code>currentColor</code> — це посилання, а не значення. Змініть колір тексту в стані наведення — і рамка піде слідом, без жодного додаткового рядка.',
          },
          {
            text: 'Копіює колір один раз, під час завантаження сторінки.',
            why: 'Він не заморожується. Він дивиться на <code>color</code> тут і зараз, щоразу, коли його вживають.',
          },
          {
            text: 'Робить рамку кольором тла.',
            why: 'Він дивиться на <code>color</code>, а не на <code>background-color</code>.',
          },
        ],
      },
    ],
  },
});
