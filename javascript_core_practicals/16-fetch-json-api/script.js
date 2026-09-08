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
// 16 — Fetch, JSON & APIs
// ---------------------------------------------------------------

async function fetchGetDemo() {
  log('GET https://jsonplaceholder.typicode.com/todos/1', 'info');
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    log('Response JSON:', 'success');
    log(data);
  } catch (err) {
    log(`Fetch failed (offline sandbox or blocked network?): ${err.message}`, 'error');
  }
}

function jsonParseDemo() {
  const raw = document.getElementById('j-input').value;
  try {
    const parsed = JSON.parse(raw);
    log('JSON.parse(text) succeeded:', 'success');
    log(parsed);
    const roundTrip = JSON.stringify(parsed, null, 2);
    log('JSON.stringify(parsed, null, 2) ->');
    log(roundTrip);
  } catch (err) {
    log(`Invalid JSON: ${err.message}`, 'error');
  }
}

document.querySelector('[data-action="fetch-get"]').addEventListener('click', fetchGetDemo);
document.querySelector('[data-action="json-parse"]').addEventListener('click', jsonParseDemo);
