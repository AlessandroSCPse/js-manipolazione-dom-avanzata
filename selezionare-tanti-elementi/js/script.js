// Seleziona tutte le li e cambia il testo
// const allLiElements = document.querySelectorAll('.list li');
// for(let i = 0; i < allLiElements.length; i++) {
//     const thisElement = allLiElements[i];
//     thisElement.innerHTML = 'cliccato';
// }

// Selezionare tutti gli elementi di .list
// e al click cambiare il testo in cliccato
const allLiElements = document.querySelectorAll('.list li');
for(let i = 0; i < allLiElements.length; i++) {
    const thisElement = allLiElements[i];
    thisElement.addEventListener('click', changeLiText);
}

function changeLiText() {
    this.innerHTML = 'cliccato';
}