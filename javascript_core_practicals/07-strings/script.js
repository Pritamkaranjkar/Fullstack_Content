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
// 07 — Strings
// ---------------------------------------------------------------

function basicsDemo() {
  const text = document.getElementById('s-text').value;
  log(`Original: "${text}"`);
  log(`length        -> ${text.length}`);
  log(`trim()        -> "${text.trim()}"`);
  log(`toUpperCase() -> "${text.toUpperCase()}"`);
  log(`includes("JavaScript") -> ${text.includes('JavaScript')}`, 'accent');
  log(`slice(2, 7)   -> "${text.slice(2, 7)}"`);
  log(`replace("Hello", "Hi") -> "${text.replace('Hello', 'Hi')}"`);
}

function splitDemo() {
  const text = document.getElementById('s-text').value.trim();
  const words = text.split(' ');
  log(`"${text}".split(' ') ->`);
  log(words, 'success');
  log(`Word count: ${words.length}`, 'accent');
}

function templateDemo() {
  const name = 'Ada';
  const age = 29;
  const message = `Hello, ${name}! Next year you'll be ${age + 1}.`;
  log('const message = `Hello, ${name}! Next year you\'ll be ${age + 1}`;');
  log(message, 'success');
  const padded = String(age).padStart(4, '0');
  log(`String(age).padStart(4, "0") -> "${padded}"`);
}

document.querySelector('[data-action="basics"]').addEventListener('click', basicsDemo);
document.querySelector('[data-action="split"]').addEventListener('click', splitDemo);
document.querySelector('[data-action="template"]').addEventListener('click', templateDemo);
