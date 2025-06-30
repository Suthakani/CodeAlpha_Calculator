const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function (e) {
  const allowedKeys = '0123456789+-*/.=EnterBackspaceEscape';

  if (allowedKeys.includes(e.key)) {
    if (e.key === 'Enter') calculateResult();
    else if (e.key === 'Escape') clearDisplay();
    else if (e.key === 'Backspace') deleteLast();
    else appendValue(e.key);
  }
});
