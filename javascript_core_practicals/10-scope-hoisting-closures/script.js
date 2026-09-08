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
// 10 — Scope, Hoisting & Closures
// ---------------------------------------------------------------

function hoistingDemo() {
  function varExample() {
    log(`Before declaration, typeof a -> ${typeof a}`, 'accent'); // "undefined", not an error
    var a = 1;
    log(`After declaration, a -> ${a}`);
  }
  varExample();

  function letExample() {
    try {
      // eslint-disable-next-line no-eval
      eval('log(b); let b = 2;');
    } catch (err) {
      log(`Accessing "b" before its declaration threw: ${err.message}`, 'error');
    }
  }
  letExample();
}

function makeCounter() {
  let count = 0; // captured by the closure below
  return function increment() {
    count += 1;
    return count;
  };
}

let counter = makeCounter();

function incrementCounter() {
  log(`counter() -> ${counter()}`, 'success');
}

function resetCounter() {
  counter = makeCounter(); // a brand new closure, its own private "count"
  log('Created a new counter instance — its count starts back at 0.', 'info');
}

document.querySelector('[data-action="hoisting"]').addEventListener('click', hoistingDemo);
document.querySelector('[data-action="counter-inc"]').addEventListener('click', incrementCounter);
document.querySelector('[data-action="counter-reset"]').addEventListener('click', resetCounter);
