const config = {
  position: 'fixed',
  overflow: 'auto',
  width: '30vw',
  height: '30vh',
  bottom: '0',
  right: '0',
  margin: '8px',
  padding: '8px',
  background: '#111',
  boxShadow: '0 0 10px rgba(0, 0, 0, .5)',
  fontFamily: 'monospace',
  fontSize: '13px',
  lineHeight: '1.5',
  color: '#fff',
}

const consoleEl = document.createElement('div');
consoleEl.setAttribute('id', 'console');
document.body.insertAdjacentElement('beforeend', consoleEl);

function log(msg, type = '') {
  if (type === '') type = 'log';

  const line = document.createElement('div');
  line.setAttribute('class', `line ${type}`);
  consoleEl.insertAdjacentElement('beforeend', line);
  line.textContent += `${msg}\n`;

  switch(type) {
    case 'info':
      console.info(msg);
      break;
    case 'warn':
      console.warn(msg);
      break;
    case 'error':
      console.error(msg);
      break;
    default:
      console.log(msg);
      break;
  }

  setStyle(consoleEl);
}

function setStyle(element) {
  for (let key in config) {
    element.style[key] = config[key];
  }
}

// Test function
log('Log');
log('Info', 'info');
log('Warn', 'warn');
log('Error', 'error');

for (let i = 0; i <= 100; i++) {
  log(`Test ${i}`);
}

