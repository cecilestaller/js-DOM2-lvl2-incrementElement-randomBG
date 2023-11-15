console.log("%c DOM-Elements Level2_7", "color:tomato");
// AUFGABE: - Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
// - Nutze: querySelector(), addEventListener(), let counter = 0;, createElement(), textContent(), appendChild() und classList.

const clickButton = document.body.querySelector('.button1');
const umwickelnDiv = document.body.querySelector('.umwickeln');

let counter = 0;

clickButton.addEventListener('click', () => {
    const div = document.createElement('div');
    div.textContent = counter;
    if (counter%10 === 0){
        div.classList.add('weiss', 'rechteck');
        umwickelnDiv.appendChild(div);
    } else {
        div.classList.add('rechteck'); // da jede div die class .rechteck benötigt könnte man die auch außerhalb der condition adden und würde dann nur das if mit add class weiss benötigt
        umwickelnDiv.appendChild(div); // das append könnte dann auch außerhalb der conditions stehen
    }
    counter++; // Counter wird erst nach der if bedingung hochgezählt weil er sonst bei dem ersten klick bei der if bedingung schon bei eins wäre
})


console.log("%c DOM-Elements Level2_11", "color:tomato");

const bgButton = document.body.querySelector('.button2');

bgButton.addEventListener('click', () => {
    const red = Math. floor(Math. random() * 256);
    const green = Math. floor(Math. random() * 256);
    const blue = Math. floor(Math. random() * 256);
    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
});