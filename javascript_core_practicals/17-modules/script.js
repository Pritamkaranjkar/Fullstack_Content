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
// 17 — Modules (this file is loaded with <script type="module">)
// ---------------------------------------------------------------
import multiply, { add, PI } from './math.js';

function runImports() {
  const a = Number(document.getElementById('m-a').value);
  const b = Number(document.getElementById('m-b').value);
  log(`import { add } from "./math.js"  ->  add(${a}, ${b}) = ${add(a, b)}`, 'success');
  log(`import multiply (default export) -> multiply(${a}, ${b}) = ${multiply(a, b)}`, 'success');
  log(`import { PI }   -> PI = ${PI}`, 'accent');
}

document.querySelector('[data-action="run-imports"]').addEventListener('click', runImports);
