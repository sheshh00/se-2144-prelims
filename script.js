const display = document.getElementById('display');
const calculator = document.getElementById('calculator');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    calculator.style.display = 'block';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function bye() {
    display.value = '';
}

function hello() {
    const greetings = ['Hello', 'Kamusta','Hola', 'Bonjour', 'Oi', 'Ciao', 'Salut', 'Aloha', 'Shalom','Gutan Tag', 'Chào'];
    display.value = greetings[Math.floor(Math.random() * greetings.length)];
}

// Languages compose of English, Tagalog, Spanish, France, Portugese, Italian, Hawaii, Hebrew, German, Vietnamese




