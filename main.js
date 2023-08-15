const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');
const background = document.querySelector('.background');

const initialNoButtonStyles = {
    top: '',
    left: '',
    transform: ''
};

yesButton.addEventListener('click', () => {
    alert("💐!Tomaste la mejor decision¡ Te Amo mi Princesa❤️");
    resetNoButton();
});

if (window.innerWidth <= 412 && window.innerHeight <= 914) {
    noButton.addEventListener('touchstart', () => {
        moveButtonRandomly();
    });
} else {
    noButton.addEventListener('mouseover', function() {
        const maxX = parseInt(Math.random() * 600);
        const maxY = parseInt(Math.random() * 500);
        noButton.style.setProperty('top', maxY + '%');
        noButton.style.setProperty('left', maxX + '%');
        noButton.style.setProperty('transform', `translate(-${maxX}%, -${maxY}%)`);
    });
}

function moveButtonRandomly() {
    const maxX = parseInt(Math.random() * 300-50);
    const maxY = parseInt(Math.random() * 450);
    noButton.style.setProperty('top', maxY + '%');
    noButton.style.setProperty('left', maxX + '%');
    noButton.style.setProperty('transform', `translate(-${maxX}%, -${maxY}%)`);
}

function resetNoButton() {
    for (const style in initialNoButtonStyles) {
        noButton.style.setProperty(style, initialNoButtonStyles[style]);
    }
}
