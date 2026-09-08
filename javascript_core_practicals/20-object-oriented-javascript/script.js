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
// 20 — Object-Oriented JavaScript
// ---------------------------------------------------------------

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${super.speak()} Specifically: ${this.name} barks!`;
  }
}

function createDog() {
  const name = document.getElementById('oo-name').value || 'Rex';
  const dog = new Dog(name);
  log(`class Dog extends Animal { ... }`);
  log(`new Dog("${name}").speak() -> "${dog.speak()}"`, 'success');
  log(`dog instanceof Animal -> ${dog instanceof Animal}`, 'accent');
}

class BankAccount {
  #balance = 0; // private field, inaccessible from outside the class

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  get balance() {
    return this.#balance;
  }
}

function privateFieldsDemo() {
  const acc = new BankAccount();
  acc.deposit(100);
  acc.deposit(50);
  log(`acc.deposit(100); acc.deposit(50); acc.balance -> ${acc.balance}`, 'success');
  log(`acc.#balance directly -> SyntaxError outside the class (truly private)`, 'error');
}

function prototypeChainDemo() {
  const rex = new Dog('Rex');
  log('Object.getPrototypeOf(rex) === Dog.prototype  -> ' +
      (Object.getPrototypeOf(rex) === Dog.prototype));
  log('Object.getPrototypeOf(Dog.prototype) === Animal.prototype -> ' +
      (Object.getPrototypeOf(Dog.prototype) === Animal.prototype), 'accent');
  log('Chain: rex -> Dog.prototype -> Animal.prototype -> Object.prototype -> null', 'info');
}

document.querySelector('[data-action="create-dog"]').addEventListener('click', createDog);
document.querySelector('[data-action="private-fields"]').addEventListener('click', privateFieldsDemo);
document.querySelector('[data-action="prototype-chain"]').addEventListener('click', prototypeChainDemo);
