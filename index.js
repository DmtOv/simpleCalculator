const initClear = () => {
    document.onkeydown = (evt) => {
        if (evt.code === "Escape") {
            getScreen().innerText = '0';
            console.log('cleared screen');
        }
    };
}

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const getScreen = () => {
    return document.getElementById('screen');
}

const initButtonsEvents = () => {
    const buttons = document.getElementsByClassName('calculator__button');

    Array.from(buttons).forEach((el) => {
        const text = el.innerText;
        const buttonDigit = Number(text);
        if (digits.includes(buttonDigit)) {
            addDigitListener(el, buttonDigit);
        } else {
            addOperationListener(el, text);
        }
    });
}

const addDigitListener = (el, buttonDigit) => {
    el.addEventListener('click', () => {
        if ((getScreen().innerText === "0") && (buttonDigit === "0")) {
            console.log("Can't duplicate zerous on screen");
        } else if ((getScreen().innerText === "0") && (buttonDigit !== "0")) {
            getScreen().innerText = buttonDigit;
        } else {
            getScreen().innerText += buttonDigit;
        }
    });
}

const addOperationListener = (el, text) => {
    el.addEventListener('click', () => {
        text === '='
            ? evalAndLog()
            : getScreen().innerText += text;
    });
}

const evalAndLog = () => {
    const text = getScreen().innerText;

    const record = text + '=' + eval(text);

    const log = document.getElementById("log");
    log.innerHTML += '<li>' + record  + '</li>';

    getScreen().innerText = '';
}

initClear();
initButtonsEvents();