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
// 14 — Modern JavaScript (ES6+)
// ---------------------------------------------------------------

function destructuringDemo() {
  let a = 1, b = 2;
  log(`Before swap: a=${a}, b=${b}`);
  [a, b] = [b, a]; // swap without a temp variable
  log(`[a, b] = [b, a] -> a=${a}, b=${b}`, 'success');

  const { x = 0, y = 0 } = { x: 5 }; // default during destructuring
  log(`const { x = 0, y = 0 } = { x: 5 } -> x=${x}, y=${y}`, 'accent');
}

function spreadRestDemo() {
  function describe(first, ...others) {
    return `first=${first}, others=[${others.join(', ')}]`;
  }
  const nums = [1, 2, 3, 4];
  log(`describe(...nums) -> ${describe(...nums)}`, 'success');

  const base = { theme: 'dark' };
  const merged = { ...base, size: 'lg' };
  log(`{ ...base, size: "lg" } -> ${JSON.stringify(merged)}`);
}

function optionalDemo() {
  const config = { server: { port: 8080 } };
  log(`config.server?.port -> ${config.server?.port}`);
  log(`config.db?.port ?? 5432 -> ${config.db?.port ?? 5432}`, 'accent');
  log(`config.db?.connect?.() -> ${config.db?.connect?.()} (safe even though connect doesn't exist)`, 'success');
}

document.querySelector('[data-action="destructuring"]').addEventListener('click', destructuringDemo);
document.querySelector('[data-action="spread-rest"]').addEventListener('click', spreadRestDemo);
document.querySelector('[data-action="optional"]').addEventListener('click', optionalDemo);
