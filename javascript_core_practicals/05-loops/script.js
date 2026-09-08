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
// 05 — Loops
// ---------------------------------------------------------------

function forLoop() {
  for (let i = 0; i < 5; i++) {
    log(`for-loop i = ${i}`);
  }
}

function whileLoop() {
  let count = 5;
  log('while loop countdown:', 'info');
  while (count > 0) {
    log(count);
    count--;
  }
  log('Liftoff!', 'success');
}

function ofInDemo() {
  const fruits = ['apple', 'banana', 'cherry'];
  log('for...of over an array (values):', 'info');
  for (const fruit of fruits) log(fruit);

  const person = { name: 'Asha', role: 'Engineer' };
  log('for...in over an object (keys):', 'info');
  for (const key in person) log(`${key} -> ${person[key]}`);
}

function breakContinueDemo() {
  log('Loop 0-9, skip odd numbers, stop at 8:', 'info');
  for (let i = 0; i < 10; i++) {
    if (i === 8) {
      log('i === 8, breaking out of the loop', 'accent');
      break;
    }
    if (i % 2 !== 0) continue; // skip odd numbers
    log(`even number: ${i}`);
  }
}

document.querySelector('[data-action="for-loop"]').addEventListener('click', forLoop);
document.querySelector('[data-action="while-loop"]').addEventListener('click', whileLoop);
document.querySelector('[data-action="of-in"]').addEventListener('click', ofInDemo);
document.querySelector('[data-action="break-continue"]').addEventListener('click', breakContinueDemo);
