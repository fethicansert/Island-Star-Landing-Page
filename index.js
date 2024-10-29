//HEADER NAV ACTIVE VARAIBLES
const headerBurgerMenu = document.getElementById('header-burger-menu');
const headerNav = document.getElementById('header-nav');
const headerListItems = document.querySelectorAll('.header-nav li');
const lineBreak = document.getElementById('line-break')
const burgerMenuTop = document.getElementById('burger-menu-icon-top');
const burgerMenuBottom = document.getElementById('burger-menu-icon-bottom')

const headerLists = document.querySelectorAll('.header-nav ul');
const arrowsContainer = document.getElementById('arrows-container');
const heroContainer = document.getElementById('hero-container');


//IMAGE SLIDER VARIABLES
const heroImageContainer = document.getElementById('image-slider-container');
const arrowCircleLeft = document.getElementById('arrow-circle-left');
const arrowCircleRight = document.getElementById('arrow-circle-right');
const imagePositions = document.querySelectorAll('.image-positon');


const projectDetailArrowDown = document.querySelectorAll('.project-detail-arrow');
const projectSubDetail = document.querySelectorAll('.projects-sub-detail');
const projectSubDetailText = document.querySelectorAll('.projects-sub-detail-text');

let currentPosition = 0;


projectDetailArrowDown.forEach((item, index) => {
    item.addEventListener('click', () => {
        projectSubDetail[index].classList.toggle('active');
        projectSubDetailText[index].classList.toggle('active');
        projectDetailArrowDown[index].classList.toggle('active');
        document.querySelector('.project-detail-container').classList.toggle('active');
    });
})

const intersectionOptions = {
    root: null,
    thresold: 0,
    rootMargin: '0px 0px -7% 0px'
}


//OBSERVERS

//Section Intersection Observer => helps me to animate elements when user intersect with observed element or section
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelector('.project-title-line-long').classList.add('animate-long');
            document.querySelector('.project-title-line-short').classList.add('animate-short');
            observer.disconnect();
        }
    })
}, intersectionOptions);

observer.observe(document.querySelector('.projects-section'));


const intersectionOptions2 = {
    root: null,
    thresold: 0,
    rootMargin: '0px 0px -5% 0px'
}

const observer2 = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.nextElementSibling.tagName === 'P') {
                console.log(entry.target.nextElementSibling.className);
                [...entry.target.nextElementSibling.children].forEach(span => span.style.textDecorationColor = '#e7c566ad');
            }
            entry.target.firstElementChild.style.opacity = '1';
            entry.target.firstElementChild.style.transform = 'translateY(0%)';
            if (entry.target.className === 'project-deal-title style-title') return observer2.disconnect();
        }

    });
}, intersectionOptions2);

document.querySelectorAll('.projects-section h3').forEach(header => observer2.observe(header));





// TOOGLE active classes when burger menu clicked.
const activeHeaderNav = () => {
    headerNav.classList.toggle('active');
    lineBreak.classList.toggle('active');
    burgerMenuBottom.classList.toggle('active');
    burgerMenuTop.classList.toggle('active');
    arrowsContainer.classList.toggle('hide')
    heroContainer.classList.toggle('hide');

    headerLists.forEach(item => item.classList.toggle('opacity'));
}

//LISTINERS
headerBurgerMenu.addEventListener('click', activeHeaderNav);

arrowCircleLeft.addEventListener('click', slideLeft);

arrowCircleRight.addEventListener('click', slideRight);


//FUNCTIONS

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
};


document.querySelectorAll('.hero-btn').forEach(button => {
    button.addEventListener('touchstart', () => {
        button.classList.add('active');
    });
    button.addEventListener('touchend', () => {
        button.classList.remove('active');
    });
});

document.querySelectorAll('.arrow-circle').forEach(button => {
    button.addEventListener('touchstart', () => {
        button.classList.add('active');
    });
    button.addEventListener('touchend', () => {
        button.classList.remove('active');
    });
});



