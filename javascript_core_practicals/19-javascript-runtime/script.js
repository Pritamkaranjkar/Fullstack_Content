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
// 19 — JavaScript Runtime
// ---------------------------------------------------------------

function orderingDemo() {
  clearLog();
  log('1: synchronous log', 'info');
  setTimeout(() => log('4: setTimeout callback (macrotask queue)', 'error'), 0);
  Promise.resolve().then(() => log('3: Promise .then (microtask queue)', 'accent'));
  log('2: synchronous log', 'info');
  log('Expected order printed above as it happens: 1, 2, 3, 4', 'success');
}

function stackDepthDemo() {
  function recurse(depth, max) {
    log(`${'  '.repeat(depth)}-> call stack depth ${depth}`);
    if (depth >= max) {
      log('Reached base case — stack now unwinds back to depth 0.', 'success');
      return;
    }
    recurse(depth + 1, max);
  }
  recurse(0, 6);
}

document.querySelector('[data-action="ordering"]').addEventListener('click', orderingDemo);
document.querySelector('[data-action="stack-depth"]').addEventListener('click', stackDepthDemo);
