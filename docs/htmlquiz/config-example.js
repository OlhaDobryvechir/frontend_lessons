// Copy these objects into the `questions` array in index.html.
// The framework accepts arbitrary numbers of questions.

const exampleQuestion = {
  headerText: `<strong>Task</strong><br>Build a block component, with word "Hello" and class name "box".`,
  answerHTML: `<html><head></head><body><div class="box">Hello</div></body></html>`,

  evaluateResponse(rawText, rootElement) {
    const box = rootElement.querySelector(".box");
    if (!box) {
      return { correct: false, message: "Add an element with class .box." };
    }
    if (box.textContent.trim() !== "Hello") {
      return { correct: false, message: 'The .box text must be "Hello".' };
    }
    return true;
  }
};
