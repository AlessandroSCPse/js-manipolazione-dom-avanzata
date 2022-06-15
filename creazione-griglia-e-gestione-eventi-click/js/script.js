// Creare in JavaScript una griglia 
// 8x8 con numeri da 1 a 64. 
// Ogni volta che clicco su un 
// quadrato questo si colora di verde.
const mainGrid = document.querySelector('#main-grid');
for(let i = 1; i <= 64; i++) {
    // Creare degli square
    // <div class="square"><span>12</span></div>
    const newSquare = document.createElement('div');
    // popolare il numero
    newSquare.innerHTML = `<span>${i}</span>`;
    // Aggiungere la classe square
    newSquare.classList.add('square');

    // Aggiungere cosa succede al click
    newSquare.addEventListener('click', manageSquareClick);

    // Appenderlo
    mainGrid.append(newSquare);
}

function manageSquareClick() {
    // Dopo aver aggiunto la classe green
    this.classList.add('green');
    // Rendo l'elemento non più cliccabile
    this.style.pointerEvents = 'none';

    console.log('sto cliccando');
}