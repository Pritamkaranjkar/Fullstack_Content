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
// 12 — Events
// ---------------------------------------------------------------

let clicks = 0;
function ping() {
  clicks += 1;
  log(`Button clicked ${clicks} time(s). event.target logged to console too.`, 'success');
}

document.getElementById('e-key').addEventListener('keydown', (event) => {
  log(`keydown -> key="${event.key}" code="${event.code}"`);
});

// Event delegation: one listener on the parent handles all current & future buttons
document.getElementById('delegate-box').addEventListener('click', (event) => {
  if (event.target.matches('[data-fruit]')) {
    log(`Delegated click caught via event.target -> "${event.target.textContent}"`, 'accent');
  }
});

document.querySelector('[data-action="ping"]').addEventListener('click', ping);
