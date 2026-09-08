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
// 15 — Asynchronous JavaScript
// ---------------------------------------------------------------

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function callbackDemo() {
  log('setTimeout(callback, 600) scheduled...', 'info');
  setTimeout(() => {
    log('600ms later: callback fired.', 'success');
  }, 600);
}

function promiseDemo() {
  log('Starting a promise chain...', 'info');
  delay(400, 'step 1 done')
    .then((result) => {
      log(result);
      return delay(400, 'step 2 done');
    })
    .then((result) => {
      log(result, 'success');
    })
    .catch((err) => log(err.message, 'error'));
}

async function asyncAwaitDemo() {
  log('async function started', 'info');
  try {
    const a = await delay(300, 'fetched user');
    log(a);
    const b = await delay(300, 'fetched posts');
    log(b, 'success');
    log('Both awaits resolved sequentially, in order.', 'accent');
  } catch (err) {
    log(err.message, 'error');
  }
}

async function promiseAllDemo() {
  log('Promise.all firing 3 tasks at once...', 'info');
  const start = performance.now();
  const [a, b, c] = await Promise.all([delay(500, 'A'), delay(300, 'B'), delay(400, 'C')]);
  const elapsed = Math.round(performance.now() - start);
  log(`Results: ${a}, ${b}, ${c}`, 'success');
  log(`Total time ~${elapsed}ms (close to the slowest task, not the sum of all three)`, 'accent');
}

document.querySelector('[data-action="callback"]').addEventListener('click', callbackDemo);
document.querySelector('[data-action="promise"]').addEventListener('click', promiseDemo);
document.querySelector('[data-action="async-await"]').addEventListener('click', asyncAwaitDemo);
document.querySelector('[data-action="promise-all"]').addEventListener('click', promiseAllDemo);
