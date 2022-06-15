const clickBtn = document.getElementById('click-btn');
const text = 'Arrivederci';

clickBtn.addEventListener('click', 
    function() {
        this.innerHTML = text;
        this.classList.add('mia-classe');
    }
);

// clickBtn.addEventListener('click', handleClickOnButton);
// function handleClickOnButton() {
//     this.innerHTML = text;
//     this.classList.add('mia-classe');
// }

