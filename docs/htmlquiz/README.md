# Configurable HTML/CSS/JavaScript Quiz

Open `index.html` directly in a modern browser.

## Configuration

Questions are stored in the `questions` array in `index.html`.

Each question supports:

```js
{
  headerText: "<strong>Task</strong><br>...",
  answerHTML: "<div>...</div>",

  evaluateResponse(rawText, rootElement) {
    // rawText = exactly what the learner entered
    // rootElement = preview iframe's document.body
    return true;
  }
}
```

The evaluator can also return:

```js
{
  correct: false,
  message: "What is missing",
  details: "Optional additional explanation"
}
```

If `evaluateResponse` is omitted, the framework normalizes whitespace and compares
the learner's text with `answerHTML`. On mismatch it reports the approximate line
where the first difference occurs and shows the expected next line.

## Validation

Before the custom evaluator is called, the framework performs a general check:

1. HTML is parsed with `DOMParser`.
2. A lightweight tag-stack check catches common unclosed/misordered tags.
3. `<style>` blocks are checked with `CSSStyleSheet.replaceSync()` where supported.
4. JavaScript in `<script>` blocks is syntax-checked with `new Function()`.
5. JavaScript is not executed during validation.

The preview uses:

```html
<iframe sandbox="allow-scripts">
```

and a restrictive Content Security Policy. The learner's code is therefore isolated
from the parent page. Do not remove the sandbox if arbitrary learner JavaScript is
allowed.

## Important security note

This is intended for local/tutorial use. A browser-based validator cannot make
untrusted JavaScript completely safe in every browser configuration. For a public
multi-user service, run submitted code in a separate isolated origin/container with
appropriate resource and network limits.

## Buttons

* Submit — validates syntax, then runs the configured evaluator.
* Try again — returns to editing after a failed evaluation.
* Full help — inserts `answerHTML` and leaves the question unanswered.
* It is right anyway — accepts a syntactically valid alternative answer.
* Next question — advances after a correct/accepted answer.
* Final screen — shows the quiz score.

## Adding HTML/CSS/JS questions

The evaluator should preferably inspect the DOM and the raw source rather than
executing learner JavaScript in the parent page. For example:

```js
evaluateResponse(rawText, rootElement) {
  const box = rootElement.querySelector(".box");
  if (!box) return {correct:false, message:"Add .box"};

  if (!/display\\s*:\\s*grid/i.test(rawText)) {
    return {correct:false, message:"Use CSS Grid."};
  }

  return true;
}
```
