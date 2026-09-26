// Content of lesson 18 in Norwegian, English and Ukrainian.
// Only data lives here; every function is in ../script.js.

Lessons.init({
  translations: {
    no: {
      "doc.title": "CSS: akser og flex-direction",
      kicker: "Leksjon 18 · HTML & CSS",
      title: "CSS: vertikal og horisontal akse i Flexbox",
      lead: "I Flexbox bestemmer flex-direction retningen til hovedaksen. Den andre aksen kalles tverraksen.",

      "s.flex.t": "Start med display: flex",
      "s.flex.d": "Når en container får <code>display: flex</code>, blir elementene inni en flex-container. Da kan vi styre hvordan elementene ligger langs en hovedakse og en tverrakse.",

      "s.main.t": "Hovedakse (main axis)",
      "s.main.d": "Hovedaksen er aksen som flex-elementene følger. Med <code>flex-direction: row</code> går hovedaksen horisontalt, fra venstre mot høyre.",

      "s.cross.t": "Tverrakse (cross axis)",
      "s.cross.d": "Tverraksen går vinkelrett på hovedaksen. Når <code>flex-direction: row</code> brukes, er tverraksen vertikal, fra toppen mot bunnen.",

      "s.direction.t": "flex-direction",
      "s.direction.d": "<code>flex-direction</code> bestemmer retningen til hovedaksen. <code>row</code> legger elementene på rad, mens <code>column</code> legger dem i en kolonne.",

      "s.change.t": "Bytt mellom row og column",
      "s.change.d": "Ved å endre <code>flex-direction</code> endrer vi hvilken retning som er hovedaksen. Med <code>row</code> er hovedaksen horisontal, og med <code>column</code> er den vertikal.",

      "btn.index": "Til oversikten",
      "btn.test": "Ta testen",
      "btn.next": "Neste leksjon"
    },

    en: {
      "doc.title": "CSS: axes and flex-direction",
      kicker: "Lesson 18 · HTML & CSS",
      title: "CSS: vertical and horizontal axes in Flexbox",
      lead: "In Flexbox, flex-direction determines the direction of the main axis. The other axis is called the cross axis.",

      "s.flex.t": "Start with display: flex",
      "s.flex.d": "When a container gets <code>display: flex</code>, the elements inside become flex items. We can then control how the items are arranged along a main axis and a cross axis.",

      "s.main.t": "Main axis",
      "s.main.d": "The main axis is the axis that flex items follow. With <code>flex-direction: row</code>, the main axis is horizontal, from left to right.",

      "s.cross.t": "Cross axis",
      "s.cross.d": "The cross axis runs perpendicular to the main axis. When <code>flex-direction: row</code> is used, the cross axis is vertical, from top to bottom.",

      "s.direction.t": "flex-direction",
      "s.direction.d": "<code>flex-direction</code> determines the direction of the main axis. <code>row</code> places the items in a row, while <code>column</code> places them in a column.",

      "s.change.t": "Switch between row and column",
      "s.change.d": "Changing <code>flex-direction</code> changes which direction is the main axis. With <code>row</code>, the main axis is horizontal, and with <code>column</code>, it is vertical.",

      "btn.index": "Back to overview",
      "btn.test": "Take the test",
      "btn.next": "Next lesson"
    },

    uk: {
      "doc.title": "CSS: осі та flex-direction",
      kicker: "Урок 18 · HTML & CSS",
      title: "CSS: вертикальна та горизонтальна осі у Flexbox",
      lead: "У Flexbox властивість flex-direction визначає напрямок головної осі. Інша вісь називається поперечною.",

      "s.flex.t": "Починаємо з display: flex",
      "s.flex.d": "Коли контейнер отримує <code>display: flex</code>, елементи всередині стають flex-елементами. Після цього ми можемо керувати їхнім розташуванням уздовж головної та поперечної осей.",

      "s.main.t": "Головна вісь (main axis)",
      "s.main.d": "Головна вісь — це вісь, уздовж якої розташовуються flex-елементи. При <code>flex-direction: row</code> головна вісь є горизонтальною і проходить зліва направо.",

      "s.cross.t": "Поперечна вісь (cross axis)",
      "s.cross.d": "Поперечна вісь проходить перпендикулярно до головної. Коли використовується <code>flex-direction: row</code>, поперечна вісь є вертикальною і проходить зверху вниз.",

      "s.direction.t": "flex-direction",
      "s.direction.d": "<code>flex-direction</code> визначає напрямок головної осі. <code>row</code> розташовує елементи в ряд, а <code>column</code> — у колонку.",

      "s.change.t": "Перемикання між row і column",
      "s.change.d": "Змінюючи <code>flex-direction</code>, ми змінюємо напрямок головної осі. При <code>row</code> головна вісь горизонтальна, а при <code>column</code> — вертикальна.",

      "btn.index": "До огляду",
      "btn.test": "Пройти тест",
      "btn.next": "Наступний урок"
    }
  },

  quiz: {
    no: [
      {
        q: "Når <code>flex-direction: row</code> brukes, hvilken akse er hovedaksen?",
        answer: 0,
        options: [
          { text: "Den horisontale aksen", why: "Riktig. Med <code>row</code> går hovedaksen horisontalt." },
          { text: "Den vertikale aksen", why: "Dette er tverraksen når <code>row</code> brukes." },
          { text: "Det finnes ingen hovedakse", why: "En flex-container har en hovedakse." },
          { text: "Bare diagonalaksen", why: "Flexbox bruker ikke en diagonal akse som hovedakse." }
        ]
      },
      {
        q: "Hva skjer med hovedaksen når du endrer fra <code>row</code> til <code>column</code>?",
        answer: 1,
        options: [
          { text: "Den blir alltid horisontal", why: "Det stemmer ikke. <code>column</code> gjør hovedaksen vertikal." },
          { text: "Den går fra horisontal til vertikal", why: "Riktig. <code>column</code> gjør den vertikale retningen til hovedaksen." },
          { text: "Den forsvinner", why: "Flexbox har fortsatt en hovedakse." },
          { text: "Den blir diagonal", why: "Flexbox bruker ikke diagonal hovedakse." }
        ]
      },
      {
        q: "Når <code>flex-direction: row</code> brukes, hvilken akse er tverraksen?",
        answer: 1,
        options: [
          { text: "Den horisontale aksen", why: "Ved <code>row</code> er den horisontale aksen hovedaksen." },
          { text: "Den vertikale aksen", why: "Riktig. Tverraksen står vinkelrett på hovedaksen." },
          { text: "Det finnes ingen tverrakse", why: "Flexbox har både en hovedakse og en tverrakse." },
          { text: "Den diagonale aksen", why: "Dette er ikke en akse som brukes her." }
        ]
      },
      {
        q: "Hvilken <code>flex-direction</code> gjør at tre elementer normalt ligger under hverandre?",
        answer: 0,
        options: [
          { text: "<code>column</code>", why: "Riktig. <code>column</code> legger flex-elementene i vertikal retning." },
          { text: "<code>row</code>", why: "<code>row</code> legger elementene i horisontal retning." },
          { text: "<code>horizontal</code>", why: "Dette er ikke en gyldig verdi for <code>flex-direction</code>." },
          { text: "<code>vertical-row</code>", why: "Dette er ikke en gyldig verdi for <code>flex-direction</code>." }
        ]
      },
      {
        q: "Hvis <code>flex-direction: column</code> brukes, hvordan er hovedaksen og tverraksen?",
        answer: 0,
        options: [
          { text: "Hovedaksen er vertikal, og tverraksen er horisontal", why: "Riktig. <code>column</code> gjør den vertikale retningen til hovedaksen." },
          { text: "Hovedaksen er horisontal, og tverraksen er vertikal", why: "Dette beskriver <code>row</code>, ikke <code>column</code>." },
          { text: "Begge aksene er vertikale", why: "Aksene står vinkelrett på hverandre." },
          { text: "Begge aksene er horisontale", why: "Aksene står vinkelrett på hverandre." }
        ]
      }
    ],

    en: [
      {
        q: "When <code>flex-direction: row</code> is used, which axis is the main axis?",
        answer: 0,
        options: [
          { text: "The horizontal axis", why: "Correct. With <code>row</code>, the main axis is horizontal." },
          { text: "The vertical axis", why: "This is the cross axis when <code>row</code> is used." },
          { text: "There is no main axis", why: "A flex container has a main axis." },
          { text: "Only the diagonal axis", why: "Flexbox does not use a diagonal axis as the main axis." }
        ]
      },
      {
        q: "What happens to the main axis when you change from <code>row</code> to <code>column</code>?",
        answer: 1,
        options: [
          { text: "It always stays horizontal", why: "That is not correct. <code>column</code> makes the main axis vertical." },
          { text: "It changes from horizontal to vertical", why: "Correct. <code>column</code> makes the vertical direction the main axis." },
          { text: "It disappears", why: "Flexbox still has a main axis." },
          { text: "It becomes diagonal", why: "Flexbox does not use a diagonal main axis." }
        ]
      },
      {
        q: "When <code>flex-direction: row</code> is used, which axis is the cross axis?",
        answer: 1,
        options: [
          { text: "The horizontal axis", why: "With <code>row</code>, the horizontal axis is the main axis." },
          { text: "The vertical axis", why: "Correct. The cross axis is perpendicular to the main axis." },
          { text: "There is no cross axis", why: "Flexbox has both a main axis and a cross axis." },
          { text: "The diagonal axis", why: "This is not an axis used here." }
        ]
      },
      {
        q: "Which <code>flex-direction</code> normally makes three items appear underneath each other?",
        answer: 0,
        options: [
          { text: "<code>column</code>", why: "Correct. <code>column</code> places flex items in a vertical direction." },
          { text: "<code>row</code>", why: "<code>row</code> places the items in a horizontal direction." },
          { text: "<code>horizontal</code>", why: "This is not a valid value for <code>flex-direction</code>." },
          { text: "<code>vertical-row</code>", why: "This is not a valid value for <code>flex-direction</code>." }
        ]
      },
      {
        q: "If <code>flex-direction: column</code> is used, how are the main and cross axes arranged?",
        answer: 0,
        options: [
          { text: "The main axis is vertical, and the cross axis is horizontal", why: "Correct. <code>column</code> makes the vertical direction the main axis." },
          { text: "The main axis is horizontal, and the cross axis is vertical", why: "This describes <code>row</code>, not <code>column</code>." },
          { text: "Both axes are vertical", why: "The axes are perpendicular to each other." },
          { text: "Both axes are horizontal", why: "The axes are perpendicular to each other." }
        ]
      }
    ],

    uk: [
      {
        q: "Коли використовується <code>flex-direction: row</code>, яка вісь є головною?",
        answer: 0,
        options: [
          { text: "Горизонтальна вісь", why: "Правильно. При <code>row</code> головна вісь є горизонтальною." },
          { text: "Вертикальна вісь", why: "При <code>row</code> це поперечна вісь." },
          { text: "Головної осі немає", why: "Flex-контейнер має головну вісь." },
          { text: "Тільки діагональна вісь", why: "Flexbox не використовує діагональну вісь як головну." }
        ]
      },
      {
        q: "Що відбувається з головною віссю, коли змінити <code>row</code> на <code>column</code>?",
        answer: 1,
        options: [
          { text: "Вона завжди залишається горизонтальною", why: "Це неправильно. <code>column</code> робить головну вісь вертикальною." },
          { text: "Вона змінюється з горизонтальної на вертикальну", why: "Правильно. При <code>column</code> вертикальний напрямок стає головною віссю." },
          { text: "Вона зникає", why: "У Flexbox головна вісь залишається." },
          { text: "Вона стає діагональною", why: "Flexbox не використовує діагональну головну вісь." }
        ]
      },
      {
        q: "Коли використовується <code>flex-direction: row</code>, яка вісь є поперечною?",
        answer: 1,
        options: [
          { text: "Горизонтальна вісь", why: "При <code>row</code> горизонтальна вісь є головною." },
          { text: "Вертикальна вісь", why: "Правильно. Поперечна вісь проходить перпендикулярно до головної." },
          { text: "Поперечної осі немає", why: "У Flexbox є і головна, і поперечна осі." },
          { text: "Діагональна вісь", why: "Це не вісь, яка використовується тут." }
        ]
      },
      {
        q: "Яке значення <code>flex-direction</code> зазвичай розташовує три елементи один під одним?",
        answer: 0,
        options: [
          { text: "<code>column</code>", why: "Правильно. <code>column</code> розташовує flex-елементи у вертикальному напрямку." },
          { text: "<code>row</code>", why: "<code>row</code> розташовує елементи в горизонтальному напрямку." },
          { text: "<code>horizontal</code>", why: "Це не є допустимим значенням для <code>flex-direction</code>." },
          { text: "<code>vertical-row</code>", why: "Це не є допустимим значенням для <code>flex-direction</code>." }
        ]
      },
      {
        q: "Як розташовані головна та поперечна осі, якщо використовується <code>flex-direction: column</code>?",
        answer: 0,
        options: [
          { text: "Головна вісь вертикальна, а поперечна — горизонтальна", why: "Правильно. <code>column</code> робить вертикальний напрямок головною віссю." },
          { text: "Головна вісь горизонтальна, а поперечна — вертикальна", why: "Це описує <code>row</code>, а не <code>column</code>." },
          { text: "Обидві осі вертикальні", why: "Осі розташовані перпендикулярно одна до одної." },
          { text: "Обидві осі горизонтальні", why: "Осі розташовані перпендикулярно одна до одної." }
        ]
      }
    ]
  }
});
