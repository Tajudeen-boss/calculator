function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  try {
    document.getElementById('result').value = eval(document.getElementById('result').value);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateSquareRoot() {
  const inputValue = document.getElementById('result').value;
  if (inputValue !== '') {
    const result = Math.sqrt(parseFloat(inputValue));
    document.getElementById('result').value = result;
  }
}

function calculateLog() {
  const inputValue = document.getElementById('result').value;
  if (inputValue !== '') {
    const result = Math.log10(parseFloat(inputValue));
    document.getElementById('result').value = result;
  }
}
