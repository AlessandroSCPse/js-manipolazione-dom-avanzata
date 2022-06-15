// Popolare la mia ul con 10 elementi
// Al click su ogni elemento il testo cambia in cliccato
const mainList = document.querySelector('.list');
// Versione con create element
for(let i = 1; i <= 10; i++) {
    // Creo un nuovo elemento del DOM
    const newLi = document.createElement('li');
    // Lo popolo
    newLi.innerHTML = i;
    // Aggiungo l'add event listener
    newLi.addEventListener('click',
        function() {
            this.innerHTML = 'cliccato';
        }
    );

    // Lo appendo a main list
    mainList.append(newLi);
}

// Versione con il template literal
// for(let i = 1; i <= 10; i++) {
//     const newLi = `<li>${i}</li>`;
//     mainList.innerHTML += newLi;
// }

// const allLiElements = document.querySelectorAll('.list li');
// for(let i = 0; i < allLiElements.length; i++) {
//     const thisElement = allLiElements[i];
//     thisElement.addEventListener('click',
//         function() {
//             this.innerHTML = 'cliccato';
//         }
//     );
// }