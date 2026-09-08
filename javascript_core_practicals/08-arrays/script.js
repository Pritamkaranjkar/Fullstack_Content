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
// 08 — Arrays
// ---------------------------------------------------------------

function parseList() {
  return document
    .getElementById('a-list').value
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => !Number.isNaN(n));
}

function mapFilterReduce() {
  const nums = parseList();
  log(`Source array: [${nums.join(', ')}]`);
  const doubled = nums.map((n) => n * 2);
  log(`.map(n => n * 2) -> [${doubled.join(', ')}]`, 'success');
  const evens = nums.filter((n) => n % 2 === 0);
  log(`.filter(n => n % 2 === 0) -> [${evens.join(', ')}]`, 'success');
  const total = nums.reduce((sum, n) => sum + n, 0);
  log(`.reduce((sum, n) => sum + n, 0) -> ${total}`, 'accent');
}

function sortDemo() {
  const nums = parseList();
  const numericSort = [...nums].sort((a, b) => a - b);
  log(`[...nums].sort((a,b) => a - b) -> [${numericSort.join(', ')}]`, 'success');
  const wrongSort = [...nums].sort();
  log(`[...nums].sort() with no compare fn -> [${wrongSort.join(', ')}] (sorted as strings!)`, 'error');
}

function findDemo() {
  const nums = parseList();
  const firstBig = nums.find((n) => n > 5);
  log(`.find(n => n > 5) -> ${firstBig}`);
  log(`.includes(7) -> ${nums.includes(7)}`);
  log(`.indexOf(7) -> ${nums.indexOf(7)}`);
}

function destructureDemo() {
  const nums = parseList();
  const [first, second, ...rest] = nums;
  log(`const [first, second, ...rest] = [${nums.join(', ')}]`);
  log(`first=${first}, second=${second}, rest=[${rest.join(', ')}]`, 'success');
  const merged = [...nums, 100];
  log(`[...nums, 100] -> [${merged.join(', ')}]`, 'accent');
}

document.querySelector('[data-action="map-filter"]').addEventListener('click', mapFilterReduce);
document.querySelector('[data-action="sort"]').addEventListener('click', sortDemo);
document.querySelector('[data-action="find"]').addEventListener('click', findDemo);
document.querySelector('[data-action="destructure"]').addEventListener('click', destructureDemo);
