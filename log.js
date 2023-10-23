const options = {
  header: true,
  lineNumber: true,
  footer: true,
}

const styleConsole = {
  position: 'fixed',
  overflow: 'auto',
  resize: 'both',
  width: '30vw',
  height: '30vh',
  bottom: '0',
  right: '0',
  margin: '8px',
  background: '#111',
  boxShadow: '0 0 10px rgba(0, 0, 0, .5)',
  fontFamily: 'monospace',
  fontSize: '13px',
  lineHeight: '1.5',
  color: '#fff',
}

const styleHeader = {
  position: 'sticky',
  top: '0',
  background: '#000',
  padding: '8px',
}

const styleBody = {
  padding: '8px',
}

const styleLine = {
  background: '#222',
  gap: '4px',
}

const styleFooter = {

}

// Create elements
const consoleWrap = document.createElement('div');
const consoleHeader = document.createElement('div');
const consoleBody = document.createElement('div');
const consoleFooter = document.createElement('div');

// Set attributes
consoleWrap.setAttribute('id', 'console');
consoleHeader.setAttribute('class', 'header');
consoleBody.setAttribute('class', 'body');
consoleFooter.setAttribute('class', 'footer');

// Insert elements
document.body.insertAdjacentElement('beforeend', consoleWrap);
consoleWrap.insertAdjacentElement('beforeend', consoleHeader);
consoleWrap.insertAdjacentElement('beforeend', consoleBody);
consoleWrap.insertAdjacentElement('beforeend', consoleFooter);

// Insert text
consoleHeader.textContent = 'CONSOLE';

// Set styles
setStyle(consoleWrap, styleConsole);
setStyle(consoleHeader, styleHeader);
setStyle(consoleBody, styleBody);

let lineNumber = 0;

function log(msg, type = '') {
  lineNumber++;
  if (type === '') type = 'log';
  const line = document.createElement('div');
  line.setAttribute('class', `line ${type}`);
  consoleBody.insertAdjacentElement('beforeend', line);

  if (options.lineNumber) {
    line.insertAdjacentHTML('beforeend', `<span class="ln">${lineNumber}</span> <span class="msg">${msg}</span>`);
  } else {
    line.insertAdjacentHTML('beforeend', `<span class="msg">${msg}</span>`);
  }

  addConsoleLog(msg, type);
}

function addConsoleLog(msg, type = '') {
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
}

function setStyle(element, styles) {
  for (let key in styles) {
    element.style[key] = styles[key];
  }
}

// Test function
log('Log');
log('Info', 'info');
log('Warn', 'warn');
log('Error', 'error');

for (let i = 0; i <= 10; i++) {
  log(`Test`);
}

