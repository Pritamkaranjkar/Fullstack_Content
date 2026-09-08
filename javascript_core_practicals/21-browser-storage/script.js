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
// 21 — Browser Storage
// ---------------------------------------------------------------

const STORAGE_KEY = 'js-practicals-notes';

function readNotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveNote() {
  const input = document.getElementById('ls-note');
  const text = input.value.trim();
  if (!text) return log('Type a note first.', 'error');

  const notes = readNotes();
  notes.push({ text, savedAt: new Date().toLocaleTimeString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));

  log(`localStorage.setItem("${STORAGE_KEY}", JSON.stringify(notes))`);
  log(`Saved: "${text}" — total notes now: ${notes.length}`, 'success');
  input.value = '';
}

function loadNotes() {
  const notes = readNotes();
  if (notes.length === 0) {
    log('localStorage has no notes saved yet.', 'info');
    return;
  }
  log(`JSON.parse(localStorage.getItem("${STORAGE_KEY}")) ->`, 'info');
  notes.forEach((n, i) => log(`${i + 1}. "${n.text}" (saved ${n.savedAt})`));
}

function clearNotes() {
  localStorage.removeItem(STORAGE_KEY);
  log(`localStorage.removeItem("${STORAGE_KEY}") — all notes cleared.`, 'error');
}

document.querySelector('[data-action="save-note"]').addEventListener('click', saveNote);
document.querySelector('[data-action="load-notes"]').addEventListener('click', loadNotes);
document.querySelector('[data-action="clear-notes"]').addEventListener('click', clearNotes);
