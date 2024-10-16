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
const imagePositions = document.querySelectorAll('.image-positon');

//Current position of image
let currentPosition = 0;

// TOOGLE active classes when burger menu clicked.
const activeHeaderNav = () => {
    headerNav.classList.toggle('active');
    lineBreak.classList.toggle('active');
    burgerMenuBottom.classList.toggle('active');
    burgerMenuTop.classList.toggle('active');
    headerListItems.forEach(item => item.classList.toggle('active'));
}


//LISTINERS

headerBurgerMenu.addEventListener('click', activeHeaderNav);

arrowCircleLeft.addEventListener('click', slideLeft);

arrowCircleRight.addEventListener('click', slideRight);


//slide left to image 
function slideLeft() {
    console.log(currentPosition);
    if (currentPosition > 0) {
        currentPosition = currentPosition - 100;
        heroImageContainer.style.transform = `translateX(-${currentPosition}%)`;
        changeImagePosition(currentPosition);
    }
}

//slide right to image 
function slideRight() {
    console.log(currentPosition);
    if (currentPosition < 200) {
        currentPosition = currentPosition + 100;
        heroImageContainer.style.transform = `translateX(-${currentPosition}%)`;
        changeImagePosition(currentPosition);
    }
}

//change image positions cirlces styles
function changeImagePosition(currentPosition) {
    imagePositions.forEach((position, index) => {
        position.classList.remove('active');
        if (index === 0 && currentPosition === 0) {
            position.classList.add('active');
        } else if (index === 1 && currentPosition === 100) {
            position.classList.add('active');
        } else if (index === 2 && currentPosition === 200) {
            position.classList.add('active');
        }
    });
}