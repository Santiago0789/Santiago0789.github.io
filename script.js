function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    display = display.slice(0, -1);
    document.getElementById('display').innerText = display || '0';
}

function appendToDisplay(value) {
    let display = document.getElementById('display').innerText;
    if (display === '0') {
        display = '';
    }
    document.getElementById('display').innerText = display + value;
}

function calculateResult() {
    let display = document.getElementById('display').innerText;
    try {
        let result = eval(display.replace('x', '*'));
        document.getElementById('display').innerText = result;
    } catch {
        document.getElementById('display').innerText = 'Error';
    }
}
