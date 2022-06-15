// Milestone 1
// Creare in JavaScript una griglia 
// 8x8 con numeri da 1 a 64. 
// Ogni volta che clicco su un 
// quadrato questo si colora di verde.

// Milestone 2
// Al click su ogni cella, se il numero 
// contenuto è pari la cella diventa verde, altrimenti rossa.
// Il numero cliccato viene salvato in un array.
// Quando l'utente ha cliccato su tutti i numeri 
// scriviamo in pagina l'ordine in cui ha cliccato sui numeri.


const mainGrid = document.querySelector('#main-grid');
const clickedNumbers = [];
const userMessageDiv = document.querySelector('#user-message');

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
    // Milestone 1
    // // Dopo aver aggiunto la classe green
    // this.classList.add('green');
    // // Rendo l'elemento non più cliccabile
    // this.style.pointerEvents = 'none';

    // console.log('sto cliccando');

    // Milestone 2
    // Mi prendo il numero dentro lo span che è figlio dell'elemento cliccato
    // Leggo lo span
    const thisNumber = parseInt(this.querySelector('span').innerHTML);
    
    // Se il numero è pari la cella diventa verde altrimenti rossa
    if(thisNumber % 2 === 0) {
        this.classList.add('green');
    } else {
        this.classList.add('red');
    }

    // Pushare il numero nell'array dei numeri selezionati
    clickedNumbers.push(thisNumber);
    console.log(clickedNumbers);

    // Se l'utente ha cliccato su tutti i numeri
    // Scrivo il messaggio di fine gioco
    if(clickedNumbers.length === 5) {
        endGame()
    }

    // Quando ho finito le mia operazioni la cella non è più cliccabile
    this.style.pointerEvents = 'none';
}

function endGame() {
    userMessageDiv.innerHTML = `Hai finito il gioco, l'ordine dei click è: ${clickedNumbers}`;
}