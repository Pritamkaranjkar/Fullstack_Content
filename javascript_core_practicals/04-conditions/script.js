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
// 04 — Conditions
// ---------------------------------------------------------------

function gradeScore() {
  const score = Number(document.getElementById('c-score').value);
  let grade;
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 75) {
    grade = 'B';
  } else if (score >= 60) {
    grade = 'C';
  } else {
    grade = 'F';
  }
  log(`Score ${score} -> grade ${grade}`, 'success');
  const passLabel = score >= 60 ? 'Pass' : 'Fail';
  log(`Ternary check: score >= 60 ? "Pass" : "Fail" -> ${passLabel}`, 'accent');
}

function planDay() {
  const day = document.getElementById('c-day').value;
  let plan;
  switch (day) {
    case 'Sat':
    case 'Sun':
      plan = 'Weekend plan: rest & side projects';
      break;
    case 'Fri':
      plan = 'Weekday plan: wrap up + ship before the weekend';
      break;
    default:
      plan = 'Weekday plan: regular schedule';
  }
  log(`switch(day="${day}") -> ${plan}`, 'success');
}

document.querySelector('[data-action="grade"]').addEventListener('click', gradeScore);
document.querySelector('[data-action="switch"]').addEventListener('click', planDay);
