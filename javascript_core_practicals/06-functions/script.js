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
// 06 — Functions
// ---------------------------------------------------------------

function factorial(n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive case
}

function runFactorial() {
  const n = Number(document.getElementById('f-n').value);
  log(`factorial(${n}) called...`, 'info');
  log(`Result: ${factorial(n)}`, 'success');
}

function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

function runRest() {
  log(`sum(1, 2, 3) -> ${sum(1, 2, 3)}`);
  log(`sum(10, 20, 30, 40) -> ${sum(10, 20, 30, 40)}`, 'success');
}

function processOrder(item, callback) {
  log(`Processing "${item}"...`, 'info');
  setTimeout(() => callback(item), 400); // simulate async work
}

function runCallback() {
  processOrder('Order #204', (item) => {
    log(`${item} shipped! (callback fired after the simulated delay)`, 'success');
  });
}

const obj = {
  label: 'my-object',
  regular: function () {
    log(`Regular function: this.label -> ${this.label}`, 'success');
  },
  arrow: () => {
    log(`Arrow function: this.label -> ${this?.label} (arrow has no own "this", inherits outer scope)`, 'error');
  },
};

document.querySelector('[data-action="factorial"]').addEventListener('click', runFactorial);
document.querySelector('[data-action="rest"]').addEventListener('click', runRest);
document.querySelector('[data-action="callback"]').addEventListener('click', runCallback);
document.querySelector('[data-action="arrow-this"]').addEventListener('click', () => {
  obj.regular();
  obj.arrow();
});
