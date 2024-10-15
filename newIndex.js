//HEADER NAV ACTIVE VARAIBLES
const headerBurgerMenu = document.getElementById('header-burger-menu');
const headerNav = document.getElementById('header-nav');
const headerListItems = document.querySelectorAll('.header-nav li');
const lineBreak = document.getElementById('line-break');
const burgerMenuTop = document.getElementById('burger-menu-icon-top');
const burgerMenuBottom = document.getElementById('burger-menu-icon-bottom')

//IMAGE SLIDER VARIABLES
const heroImageContainer = document.getElementById('image-slider-container');
const arrowCircleLeft = document.getElementById('arrow-circle-left');
const arrowCircleRight = document.getElementById('arrow-circle-right');



// TOOGLE active classes when burger menu clicked.
const activeHeaderNav = () => {
    headerNav.classList.toggle('active');
    lineBreak.classList.toggle('active');
    burgerMenuBottom.classList.toggle('active');
    burgerMenuTop.classList.toggle('active');
    headerListItems.forEach(item => item.classList.toggle('active'));
}

headerBurgerMenu.addEventListener('click', activeHeaderNav);

let currentPosition = 0;

arrowCircleLeft.addEventListener('click', slideLeft);

arrowCircleRight.addEventListener('click', slideRight);

function slideLeft() {
    console.log(currentPosition);
    if (currentPosition > 0) {
        currentPosition = currentPosition - 100;;
        heroImageContainer.style.transform = `translateX(-${currentPosition}%)`;
    }
}

function slideRight() {
    console.log(currentPosition);
    if (currentPosition < 200) {
        currentPosition = currentPosition + 100;
        heroImageContainer.style.transform = `translateX(-${currentPosition}%)`;
    }
}