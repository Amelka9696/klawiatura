const ctrlKey = document.getElementById('Ctrl');
const altKey = document.getElementById('Alt');
const tabKey = document.getElementById('Tab');
const xKey = document.getElementById('X');
const cKey = document.getElementById('C');
const vKey = document.getElementById('V');
const zKey = document.getElementById('Z');
const yKey = document.getElementById('Y');
const fKey = document.getElementById('F');
const nKey = document.getElementById('N');
const sKey = document.getElementById('S');
const aKey = document.getElementById('A');
const dKey = document.getElementById('D');
const rKey = document.getElementById('R');
const tKey = document.getElementById('T');
const wKey = document.getElementById('W');
const lKey = document.getElementById('L');


const paKey = document.getElementById('pa');
const output = document.getElementById('output');


let ctrlPressed = false;
let altPressed = false;
let tabPressed = false;
let xPressed = false;
let cPressed = false;
let vPressed = false;
let zPressed = false;
let yPressed = false;
let fPressed = false;
let nPressed = false;
let sPressed = false;
let aPressed = false;
let dPressed = false;
let rPressed = false;
let tPressed = false;
let wPressed = false;
let lPressed = false;

let paPressed = false;


ctrlKey.addEventListener('click', () => {
    ctrlPressed = !ctrlPressed;
    ctrlKey.classList.toggle('pressed');
});

altKey.addEventListener('click', () => {
    altPressed = !altPressed;
    altKey.classList.toggle('pressed');
});

tabKey.addEventListener('click', () => {
    tabPressed = !tabPressed;
    tabKey.classList.toggle('pressed');
    if (altPressed) {
        output.innerHTML = " Alt + Tab = przełączanie między otwartymi programami";
    }
    
});

xKey.addEventListener('click', () => {
    xPressed = !xPressed;
    xKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + X = wycinanie";
    }
});

cKey.addEventListener('click', () => {
    cPressed = !cPressed;
    cKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + C = kopiowanie";
    }
});
vKey.addEventListener('click', () => {
    vPressed = !vPressed;
    vKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + V = wklejanie";
    }
});
zKey.addEventListener('click', () => {
    zPressed = !zPressed;
    zKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + Z = cofnięcie ostatnio wykonanej czynności";
    }
});
yKey.addEventListener('click', () => {
    yPressed = !yPressed;
    yKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + Y = powtórzenie ostatnio wykonanej czynności";
    }
});
fKey.addEventListener('click', () => {
    fPressed = !fPressed;
    fKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + F lub G = wyświetlenie okna wyszukiwania wyrazów lub fraz";
    }
});

nKey.addEventListener('click', () => {
    nPressed = !nPressed;
    nKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + N = utworzenie nowego pliku lub folderu";
    }
});
sKey.addEventListener('click', () => {
    sPressed = !sPressed;
    sKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + S = zapisywanie";
    }
});
aKey.addEventListener('click', () => {
    aPressed = !aPressed;
    aKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + A = zaznaczenie całego tekstu lub wszystkich elementów używanego programu";
    }
});
dKey.addEventListener('click', () => {
    dPressed = !dPressed;
    dKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + D (lub Delete) = skasowanie (przeniesienie do kosza)" + "Klawisz Windows + D — pokazanie i chowanie pulpitu";
    }
});
rKey.addEventListener('click', () => {
    rPressed = !rPressed;
    rKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + R (lub F5) = odświeżenie";
    }
});
tKey.addEventListener('click', () => {
    tPressed = !tPressed;
    tKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + T = Otwórz nową kartę";
    }
});
wKey.addEventListener('click', () => {
    wPressed = !wPressed;
    wKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + W = Zamknij aktywną kartę";
    }
});
tabKey.addEventListener('click', () => {
    tabPressed = !tabPressed;
    tabKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + Tab = Przejdź do następnej karty";
    }
});
lKey.addEventListener('click', () => {
    lPressed = !lPressed;
    lKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + L = Przejdź do paska adresu";
    }
});

paKey.addEventListener('click', () => {
    paPressed = !paPressed;
    paKey.classList.toggle('pressed');
    output.innerHTML = "przycisk ten służy do odpalania"
});

