# JavaScript Core Practicals

A self-contained set of **21 hands-on practicals** covering JavaScript from first principles
through to browser storage. Every topic lives in its own folder with its own `index.html`,
`style.css` and `script.js` (Topic 17 also has a `math.js` module) — nothing is shared or built,
so you can open any single folder's `index.html` directly in a browser and it works.

## How it's organised

Each topic page has two panes:

- **NOTES.md** — a concise explanation of the concept with runnable-looking code samples.
- **console** — interactive controls wired to a real, working `script.js`. Click a button and
  watch the output print live, the same way it would in your browser's DevTools console.

## Topics

| # | Topic | What it covers |
|---|-------|-----------------|
| 01 | [JavaScript Fundamentals](01-javascript-fundamentals/index.html) | How JavaScript fits into a web page, how it runs, and the syntax rules everything else is built on. |
| 02 | [Variables & Data Types](02-variables-data-types/index.html) | Declaring storage with var, let and const, and the eight data types JavaScript values can hold. |
| 03 | [Operators](03-operators/index.html) | Arithmetic, comparison, logical and the modern nullish/optional-chaining operators. |
| 04 | [Conditions](04-conditions/index.html) | Branching logic with if/else, switch, and the ternary operator. |
| 05 | [Loops](05-loops/index.html) | Repeating work with for, while, do-while, for...of, for...in, and controlling flow with break/continue. |
| 06 | [Functions](06-functions/index.html) | Declarations, expressions, arrow functions, default/rest parameters, callbacks and recursion. |
| 07 | [Strings](07-strings/index.html) | Template literals and the built-in methods for reading, searching and transforming text. |
| 08 | [Arrays](08-arrays/index.html) | Storing ordered lists of data and the methods that create, transform and search them. |
| 09 | [Objects](09-objects/index.html) | Grouping related data and behaviour as key-value pairs, and the modern syntax for working with them. |
| 10 | [Scope, Hoisting & Closures](10-scope-hoisting-closures/index.html) | How JavaScript decides where a variable lives, why some declarations move, and how functions remember their birthplace. |
| 11 | [DOM Manipulation](11-dom-manipulation/index.html) | Selecting, creating, editing and removing elements to change what the page displays. |
| 12 | [Events](12-events/index.html) | Listening for user interaction, the event object, bubbling, and delegating events to a parent. |
| 13 | [Forms & Validation](13-forms-validation/index.html) | Capturing form input, preventing default submission, and validating fields before they're used. |
| 14 | [Modern JavaScript (ES6+)](14-modern-javascript/index.html) | A tour of the syntax that modernised JavaScript: destructuring, spread/rest, template literals and more. |
| 15 | [Asynchronous JavaScript](15-asynchronous-javascript/index.html) | Callbacks, Promises and async/await for work that finishes later — timers, network calls, files. |
| 16 | [Fetch, JSON & APIs](16-fetch-json-api/index.html) | Requesting data from a server with fetch(), and converting between JavaScript objects and JSON text. |
| 17 | [Modules](17-modules/index.html) | Splitting code across files with import/export, so each file has a single responsibility. |
| 18 | [Error Handling](18-error-handling/index.html) | Catching problems gracefully with try/catch/finally, throwing your own errors, and error subclasses. |
| 19 | [JavaScript Runtime](19-javascript-runtime/index.html) | The call stack, Web APIs, callback queue and microtask queue — how single-threaded JS handles async work. |
| 20 | [Object-Oriented JavaScript](20-object-oriented-javascript/index.html) | Modeling data and behaviour with classes, inheritance, encapsulation and prototypes. |
| 21 | [Browser Storage](21-browser-storage/index.html) | Persisting data in the browser with localStorage and sessionStorage. |

## Running it

No build step, no dependencies, no server required:

1. Open `index.html` in this folder for the full topic index, **or**
2. Open any `NN-topic-name/index.html` folder directly in your browser.

Everything is vanilla HTML, CSS and JavaScript.

## Folder structure

```
javascript_core_practicals/
├── index.html                      # topic index / home page
├── README.md
├── 01-javascript-fundamentals/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── 02-variables-data-types/
├── 03-operators/
├── 04-conditions/
├── 05-loops/
├── 06-functions/
├── 07-strings/
├── 08-arrays/
├── 09-objects/
├── 10-scope-hoisting-closures/
├── 11-dom-manipulation/
├── 12-events/
├── 13-forms-validation/
├── 14-modern-javascript/
├── 15-asynchronous-javascript/
├── 16-fetch-json-api/
├── 17-modules/
│   ├── index.html
│   ├── script.js
│   ├── math.js
│   └── style.css
├── 18-error-handling/
├── 19-javascript-runtime/
├── 20-object-oriented-javascript/
└── 21-browser-storage/
```
