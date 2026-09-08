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
// 03 — Operators
// ---------------------------------------------------------------

function calc() {
  const a = Number(document.getElementById('op-a').value);
  const b = Number(document.getElementById('op-b').value);
  const op = document.getElementById('op-op').value;
  const table = { '+': a + b, '-': a - b, '*': a * b, '/': a / b, '%': a % b, '**': a ** b };
  log(`${a} ${op} ${b} = ${table[op]}`, 'success');
}

function equalityDemo() {
  log(`0 == '0'    -> ${0 == '0'}`);
  log(`0 === '0'   -> ${0 === '0'}`, 'accent');
  log(`null == undefined  -> ${null == undefined}`);
  log(`null === undefined -> ${null === undefined}`, 'accent');
  log(`NaN === NaN -> ${NaN === NaN}  (use Number.isNaN() instead)`, 'error');
}

function nullishDemo() {
  const settings = { volume: 0, name: null };
  log(`settings.volume || 50  -> ${settings.volume || 50}  (0 is falsy, so this "wrongly" picks 50)`, 'error');
  log(`settings.volume ?? 50  -> ${settings.volume ?? 50}  (0 is not nullish, correctly kept)`, 'success');
  log(`settings.name ?? "Guest" -> ${settings.name ?? 'Guest'}`);
  const user = { profile: null };
  log(`user.profile?.bio -> ${user.profile?.bio}  (no crash, short-circuits to undefined)`, 'success');
}

document.querySelector('[data-action="calc"]').addEventListener('click', calc);
document.querySelector('[data-action="equality"]').addEventListener('click', equalityDemo);
document.querySelector('[data-action="nullish"]').addEventListener('click', nullishDemo);
