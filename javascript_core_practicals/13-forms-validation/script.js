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
// 13 — Forms & Validation
// ---------------------------------------------------------------

function setFieldState(inputId, valid) {
  const field = document.getElementById(inputId).closest('.field');
  field.classList.toggle('valid', valid);
  field.classList.toggle('invalid', !valid);
}

function validateForm() {
  const email = document.getElementById('fv-email');
  const password = document.getElementById('fv-password');

  const emailValid = email.checkValidity() && email.value.trim() !== '';
  const passwordValid = password.value.length >= 8;

  setFieldState('fv-email', emailValid);
  setFieldState('fv-password', passwordValid);

  log(`email.checkValidity() -> ${email.checkValidity()}`);
  log(`password.length >= 8  -> ${passwordValid}`);

  if (emailValid && passwordValid) {
    log('Form is valid — this is where you would submit to a server.', 'success');
  } else {
    log('Form has errors — inline messages shown, submission blocked.', 'error');
  }
}

document.querySelector('[data-action="validate"]').addEventListener('click', validateForm);

// Also validate live as the user types, a common real-world pattern
document.getElementById('fv-email').addEventListener('input', (e) => {
  setFieldState('fv-email', e.target.checkValidity() && e.target.value !== '');
});
document.getElementById('fv-password').addEventListener('input', (e) => {
  setFieldState('fv-password', e.target.value.length >= 8);
});
