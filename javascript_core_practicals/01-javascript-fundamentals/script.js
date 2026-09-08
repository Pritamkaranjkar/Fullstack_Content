// ---------------------------------------------------------------
// Shared console helper (identical pattern used across every topic)
// ---------------------------------------------------------------
const outputEl = document.getElementById('output-log');
const clearBtn = document.getElementById('clear-btn');

function log(value, variant = 'default') {
  const line = document.createElement('div');
  line.className = `log-line log-${variant}`;
  const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
  const timeSpan = document.createElement('span');
  timeSpan.className = 'log-time';
  timeSpan.textContent = time;
  const msgSpan = document.createElement('span');
  msgSpan.className = 'log-msg';
  msgSpan.textContent = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  line.append(timeSpan, msgSpan);
  outputEl.appendChild(line);
  outputEl.scrollTop = outputEl.scrollHeight;
}

function clearLog() {
  outputEl.innerHTML = '<p class="console-empty">Console cleared. Run a demo above to see output here.</p>';
}

if (clearBtn) clearBtn.addEventListener('click', clearLog);

// ---------------------------------------------------------------
// 01 — JavaScript Fundamentals
// ---------------------------------------------------------------

function runHello() {
  console.log('Hello, world!');       // also visible in the real DevTools console
  log('Hello, world!', 'success');
  log('That line also printed to your browser DevTools console (F12).', 'info');
}

function runTypeof() {
  log(`typeof "text"   -> ${typeof "text"}`);
  log(`typeof 42       -> ${typeof 42}`);
  log(`typeof true     -> ${typeof true}`);
  log(`typeof undefined-> ${typeof undefined}`);
  log(`typeof null     -> ${typeof null}  (a famous historical bug: should be "null")`, 'accent');
  log(`typeof [1,2,3]  -> ${typeof [1, 2, 3]}  (arrays report as "object")`);
  log(`typeof {}       -> ${typeof {}}`);
  log(`typeof function(){} -> ${typeof function () {}}`);
}

function explainEngine() {
  log('1. Browser downloads script.js', 'info');
  log('2. Engine parses the source into an Abstract Syntax Tree (AST)', 'info');
  log('3. Top-level code runs synchronously, top to bottom', 'info');
  log('4. Function declarations are hoisted (see Topic 10) before execution starts', 'info');
  log('5. Any Web APIs (timers, fetch, DOM events) hand work back to JS via the event loop (see Topic 19)', 'info');
}

document.querySelector('[data-action="hello"]').addEventListener('click', runHello);
document.querySelector('[data-action="typeof"]').addEventListener('click', runTypeof);
document.querySelector('[data-action="engine"]').addEventListener('click', explainEngine);
