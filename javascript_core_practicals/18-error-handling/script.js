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
// 18 — Error Handling
// ---------------------------------------------------------------

function tryCatchDemo() {
  try {
    log('Trying JSON.parse("not valid json")...', 'info');
    JSON.parse('not valid json');
  } catch (err) {
    log(`Caught: ${err.name} — ${err.message}`, 'error');
  } finally {
    log('finally block always runs, for cleanup.', 'accent');
  }
}

function builtinErrorsDemo() {
  try {
    null.someProperty; // TypeError
  } catch (err) {
    log(`${err.name}: ${err.message}`, 'error');
  }
  try {
    new Array(-1); // RangeError
  } catch (err) {
    log(`${err.name}: ${err.message}`, 'error');
  }
  try {
    // eslint-disable-next-line no-undef
    notDeclaredAnywhere; // ReferenceError
  } catch (err) {
    log(`${err.name}: ${err.message}`, 'error');
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function checkAge(age) {
  if (age < 0) throw new ValidationError('Age cannot be negative.');
  return age;
}

function customErrorDemo() {
  try {
    checkAge(-5);
  } catch (err) {
    if (err instanceof ValidationError) {
      log(`Custom error caught -> ${err.name}: ${err.message}`, 'error');
    } else {
      throw err; // rethrow anything unexpected
    }
  }
}

async function riskyAsyncCall() {
  throw new Error('Simulated network failure');
}

async function asyncErrorDemo() {
  try {
    await riskyAsyncCall();
  } catch (err) {
    log(`await inside try/catch caught: ${err.message}`, 'error');
  }
}

document.querySelector('[data-action="try-catch"]').addEventListener('click', tryCatchDemo);
document.querySelector('[data-action="builtin-errors"]').addEventListener('click', builtinErrorsDemo);
document.querySelector('[data-action="custom-error"]').addEventListener('click', customErrorDemo);
document.querySelector('[data-action="async-error"]').addEventListener('click', asyncErrorDemo);
