const commandKey = document.getElementById('command');
const xKey = document.getElementById('X');
const spaceKey = document.getElementById('Space');
const controlKey = document.getElementById('control');
const shiftKey = document.getElementById('Shift');
const tabKey = document.getElementById('Tab');
const cKey = document.getElementById('C');
const vKey = document.getElementById('V');
const zKey = document.getElementById('Z');
const zeKey = document.getElementById('Z');
const gKey = document.getElementById('G');
const hKey = document.getElementById('H');
const mKey = document.getElementById('M');
const oKey = document.getElementById('O');
const pKey = document.getElementById('P');
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


const poKey = document.getElementById('p');
const output = document.getElementById('output');

let commandPressed = false;
let xPressed = false;
let spacePressed = false;
let controlPressed = false;
let tabPressed = false;
let shiftPressed = false;
let cPressed = false;
let vPressed = false;
let zPressed = false;
let zePressed = false;
let gPressed = false;
let hPressed = false;
let mPressed = false;
let oPressed = false;
let pPressed = false;
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

let poPressed = false;


commandKey.addEventListener('click', () => {
    commandPressed = !commandPressed;
    commandKey.classList.toggle('pressed');
});
shiftKey.addEventListener('click', () => {
    shiftPressed = !shiftPressed;
    shiftKey.classList.toggle('pressed');
});
controlKey.addEventListener('click', () => {
    controlPressed = !controlPressed;
    controlKey.classList.toggle('pressed');
}); 
xKey.addEventListener('click', () => {
    xPressed = !xPressed;
    xKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + X: wycina zaznaczoną rzecz i kopiuje ją do schowka.";
    }
});
poKey.addEventListener('click', () => {
    poPressed = !poPressed;
    poKey.classList.toggle('pressed');
    output.innerHTML = "Przycisk zasilania: włącza lub wybudza komputer Mac. Naciśnij i przytrzymaj przez 1,5 sekundy, aby uśpić komputer Mac. Przytrzymaj dłużej, aby wymusić zamknięcie komputera Mac."
});
spaceKey.addEventListener('click', () => {
    spacePressed = !xPressed;
    spaceKey.classList.toggle('pressed');
    if (commandPressed && controlPressed)  {
        output.innerHTML = "Control + Command + spacja: wyświetla okno Podgląd znaków, w którym można wybierać ikony emoji i inne symbole.";
    }
});
cKey.addEventListener('click', () => {
    cPressed = !cPressed;
    cKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + C: kopiuje zaznaczoną rzecz do schowka. Działa też na plikach w Finderze";
    }
});
zKey.addEventListener('click', () => {
    zPressed = !zPressed;
    zKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + Z: cofa ostatnią wykonaną czynność. Następnie możesz nacisnąć klawisze";
    }
});
vKey.addEventListener('click', () => {
    vPressed = !vPressed;
    vKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command+V: wkleja zawartość schowka w bieżącym dokumencie lub aplikacji. Działa też na plikach w Finderze.";
    }
});
zeKey.addEventListener('click', () => {
    zePressed = !xPressed;
    zeKey.classList.toggle('pressed');
    if (commandPressed && shiftPressed)  {
        output.innerHTML = "Command + Shift + Z, aby przywrócić cofniętą czynność (anulować cofnięcie). W niektórych aplikacjach możesz cofać i przywracać wiele kolejnych czynności.";
    }
});
aKey.addEventListener('click', () => {
    aPressed = !aPressed;
    aKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + A: zaznacza wszystkie rzeczy";
    }
});
fKey.addEventListener('click', () => {
    fPressed = !fPressed;
    fKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + F: znajduje rzeczy w dokumencie lub otwiera okno Znajdź.";
    }
});
gKey.addEventListener('click', () => {
    gPressed = !gPressed;
    gKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + G: znajduje kolejne wystąpienie (jeśli istnieje) wcześniej znalezionej rzeczy. Aby przejść do poprzedniego wystąpienia, naciśnij klawisze Command+Shift+G.";
    }
});
hKey.addEventListener('click', () => {
    hPressed = !hPressed;
    hKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + H: ukrywa okna aplikacji wyświetlanej na pierwszym planie. Aby wyświetlić aplikację z pierwszego planu i ukryć wszystkie pozostałe, naciśnij klawisze Option+Command+H.";
    }
});
mKey.addEventListener('click', () => {
    mPressed = !mPressed;
    mKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + M: minimalizuje okno z pierwszego planu do Docka. Aby zminimalizować wszystkie okna aplikacji wyświetlanej na pierwszym planie, naciśnij klawisze Option+Command+M.";
    }
});
oKey.addEventListener('click', () => {
    oPressed = !oPressed;
    oKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + O: otwiera zaznaczoną rzecz albo okno umożliwiające wybranie pliku do otwarcia.";
    }
});
pKey.addEventListener('click', () => {
    pPressed = !pPressed;
    pKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + P: drukuje bieżący dokument.";
    }
});
sKey.addEventListener('click', () => {
    sPressed = !sPressed;
    sKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command+S: zachowuje bieżący dokument.";
    }
});
tKey.addEventListener('click', () => {
    tPressed = !tPressed;
    tKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command+T: otwiera nową kartę.";
    }
});
wKey.addEventListener('click', () => {
    wPressed = !wPressed;
    wKey.classList.toggle('pressed');
    if (commandPressed) {
        output.innerHTML = "Command + W: zamyka okno wyświetlane na pierwszym planie. Aby zamknąć wszystkie okna aplikacji, naciśnij klawisze Option+Command+W.";
    }
});

/*altKey.addEventListener('click', () => {
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





yKey.addEventListener('click', () => {
    yPressed = !yPressed;
    yKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + Y = powtórzenie ostatnio wykonanej czynności";
    }
});


nKey.addEventListener('click', () => {
    nPressed = !nPressed;
    nKey.classList.toggle('pressed');
    if (ctrlPressed) {
        output.innerHTML = "Ctrl + N = utworzenie nowego pliku lub folderu";
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


*/
