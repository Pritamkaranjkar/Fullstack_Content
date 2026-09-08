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
// 11 — DOM Manipulation
// ---------------------------------------------------------------

const listEl = document.getElementById('dom-list');

function wireRemoveButtons() {
  listEl.querySelectorAll('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const li = btn.closest('li');
      li.remove();
      log(`Removed: "${li.textContent.replace('Remove', '').trim()}"`, 'error');
    });
  });
}
wireRemoveButtons();

function addItem() {
  const input = document.getElementById('d-text');
  const text = input.value.trim();
  if (!text) return log('Type something to add first.', 'error');

  const li = document.createElement('li');
  li.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.dataset.remove = '';
  removeBtn.addEventListener('click', () => {
    li.remove();
    log(`Removed: "${text}"`, 'error');
  });

  li.appendChild(removeBtn);
  listEl.appendChild(li);
  input.value = '';
  log(`Created <li> via document.createElement and appended it: "${text}"`, 'success');
}

function toggleHighlight() {
  listEl.classList.toggle('highlight-demo');
  const isOn = listEl.classList.contains('highlight-demo');
  listEl.style.outline = isOn ? '1px dashed var(--accent)' : 'none';
  log(`listEl.classList.toggle("highlight-demo") -> now ${isOn}`, 'accent');
}

function clearList() {
  listEl.innerHTML = '';
  log('listEl.innerHTML = "" — all children removed at once.', 'error');
}

document.querySelector('[data-action="add-item"]').addEventListener('click', addItem);
document.querySelector('[data-action="toggle-theme"]').addEventListener('click', toggleHighlight);
document.querySelector('[data-action="clear-list"]').addEventListener('click', clearList);
