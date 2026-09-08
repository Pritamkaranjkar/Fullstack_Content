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
// 09 — Objects
// ---------------------------------------------------------------

let user = { name: 'Priya', age: 27 };
log(`Starting object: ${JSON.stringify(user)}`, 'info');

function addKey() {
  const key = document.getElementById('o-key').value.trim();
  const value = document.getElementById('o-val').value;
  if (!key) return log('Enter a key first.', 'error');
  user = { ...user, [key]: value }; // computed property name + spread copy
  log(`user = { ...user, [${JSON.stringify(key)}]: "${value}" }`);
  log(user, 'success');
}

function entriesDemo() {
  log(`Object.keys(user)   -> [${Object.keys(user).join(', ')}]`);
  log(`Object.values(user) -> [${Object.values(user).join(', ')}]`);
  log('Object.entries(user) ->', 'info');
  for (const [key, value] of Object.entries(user)) {
    log(`  ${key}: ${value}`);
  }
}

function destructureObjDemo() {
  const { name, ...restOfUser } = user;
  log(`const { name, ...rest } = user`);
  log(`name -> ${name}`, 'success');
  log(`rest -> ${JSON.stringify(restOfUser)}`, 'success');
  const clone = { ...user, age: (user.age || 0) + 1 };
  log(`{ ...user, age: user.age + 1 } -> ${JSON.stringify(clone)}`, 'accent');
}

document.querySelector('[data-action="add-key"]').addEventListener('click', addKey);
document.querySelector('[data-action="entries"]').addEventListener('click', entriesDemo);
document.querySelector('[data-action="destructure-obj"]').addEventListener('click', destructureObjDemo);
