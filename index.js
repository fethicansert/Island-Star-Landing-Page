const heroImageContainer = document.getElementById('hero-image-container');
const arrowCircleLeft = document.getElementById('arrow-circle-left');
const arrowCircleRight = document.getElementById('arrow-circle-right');



arrowCircleLeft.addEventListener('click', slideLeft);

arrowCircleRight.addEventListener('click', slideRight);

let currentPosition = 0;

function slideLeft() {
    if (currentPosition > 0) {
        currentPosition = currentPosition - 100;;
        heroImageContainer.style.transform = `translateX(-${currentPosition}%)`;
    }
}

function slideRight() {
    if (currentPosition < 200) {
        currentPosition = currentPosition + 100;
        heroImageContainer.style.transform = `translateX(-${currentPosition}%)`;
        console.log(currentPosition);
    }
}