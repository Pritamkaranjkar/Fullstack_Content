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
// 02 — Variables & Data Types
// ---------------------------------------------------------------

function coerceToBestGuess(raw) {
  if (raw === 'true' || raw === 'false') return raw === 'true';
  if (raw === 'null') return null;
  if (raw === 'undefined') return undefined;
  if (raw !== '' && !Number.isNaN(Number(raw))) return Number(raw);
  return raw;
}

function inspectValue() {
  const raw = document.getElementById('v-value').value;
  const value = coerceToBestGuess(raw);
  log(`Input text: "${raw}"`);
  log(`Interpreted value: ${JSON.stringify(value)}`);
  log(`typeof value -> ${typeof value}`, 'accent');
}

function constDemo() {
  const PI = 3.14159;
  log('const PI = 3.14159;');
  try {
    // eslint-disable-next-line no-eval
    eval('PI = 4');
  } catch (err) {
    log(`Reassigning threw: ${err.message}`, 'error');
  }
  const box = { liters: 2 };
  box.liters = 5; // allowed: mutating contents, not reassigning the binding
  log(`const box = { liters: 2 }; box.liters = 5; -> ${JSON.stringify(box)}`, 'success');
  log('const only locks the variable binding, not the contents of an object/array.', 'info');
}

function coercionDemo() {
  log(`"5" + 1        -> ${"5" + 1}`);
  log(`"5" - 1        -> ${"5" - 1}`);
  log(`"5" * "2"      -> ${"5" * "2"}`);
  log(`true + true    -> ${true + true}`);
  log(`[] + []        -> "${[] + []}"`);
  log(`[] + {}        -> "${[] + {}}"`);
  log(`Boolean("")    -> ${Boolean("")}`);
  log(`Boolean("0")   -> ${Boolean("0")}  (non-empty string is always truthy)`, 'accent');
}

document.querySelector('[data-action="inspect"]').addEventListener('click', inspectValue);
document.querySelector('[data-action="const-demo"]').addEventListener('click', constDemo);
document.querySelector('[data-action="coercion"]').addEventListener('click', coercionDemo);
