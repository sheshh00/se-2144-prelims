function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function bye() {
    document.getElementById("display").value = "";
}

function hello() {
    const greetings = ['Hello', 'Kamusta','Hola', 'Bonjour', 'Oi', 'Ciao', 'Salut', 'Aloha', 'Shalom','Gutan Tag', 'Chào'];
    display.value = greetings[Math.floor(Math.random() * greetings.length)];
}

// Languages compose of English, Tagalog, Spanish, France, Portugese, Italian, Hawaii, Hebrew, German, Vietnamese




