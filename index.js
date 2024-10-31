//VARIABLES
const headerBurgerMenu = document.getElementById('header-burger-menu');
const headerNav = document.getElementById('header-nav');
const headerListItems = document.querySelectorAll('.header-nav li');
const lineBreak = document.getElementById('line-break')
const burgerMenuTop = document.getElementById('burger-menu-icon-top');
const burgerMenuBottom = document.getElementById('burger-menu-icon-bottom')

const headerLists = document.querySelectorAll('.header-nav ul');
const arrowsContainer = document.getElementById('arrows-container');
const heroContainer = document.getElementById('hero-container');

const heroImageContainer = document.getElementById('image-slider-container');
const arrowCircleLeft = document.getElementById('arrow-circle-left');
const arrowCircleRight = document.getElementById('arrow-circle-right');
const imagePositions = document.querySelectorAll('.image-positon');

const projectDetailArrowDown = document.querySelectorAll('.project-detail-arrow');
const projectSubDetails = document.querySelectorAll('.projects-sub-detail');
const projectSubDetailText = document.querySelectorAll('.projects-sub-detail-text');

const projectPlanButtons = document.querySelectorAll('.house-plan-button');
const projectPlanImagePositons = document.querySelectorAll('.project-plan-image-positon');


const projectImageButtons = document.querySelectorAll('.project-image-button');
const projectImagePositons = document.querySelectorAll('.project-image-positon');

let homeCurrentImagePosition = 0;
let planCurrentImagePosition = 0;
let projectCurrentImagePosition = 0;

//LISTINERS
headerBurgerMenu.addEventListener('click', activeHeaderNav);

arrowCircleLeft.addEventListener('click', slideLeft);

arrowCircleRight.addEventListener('click', slideRight);


projectPlanButtons[0].addEventListener('click', () =>
    projectSlideLeft(planCurrentImagePosition, setProjectImage, 'plan-slider'));

projectPlanButtons[1].addEventListener('click', () =>
    projectSlideRight(planCurrentImagePosition, setProjectImage, 'plan-slider', 4));


projectImageButtons[0].addEventListener('click', () =>
    projectSlideLeft(projectCurrentImagePosition, setProjectImage, 'project-image-slider'));

projectImageButtons[1].addEventListener('click', () =>
    projectSlideRight(projectCurrentImagePosition, setProjectImage, 'project-image-slider', 3));


projectDetailArrowDown.forEach((item, index) => {
    item.addEventListener('click', () => {
        projectSubDetails[index].classList.toggle(`detail-${index}-active`);
        projectSubDetailText[index].classList.toggle('active');
        projectDetailArrowDown[index].classList.toggle('active');
    });
})

//OBSERVERS
const intersectionOptions = {
    root: null,
    thresold: 0,
    rootMargin: '0px 0px -7% 0px'
}
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


//FUNCTIONS
// TOOGLE active classes when burger menu clicked.
function activeHeaderNav() {
    headerNav.classList.toggle('active');
    lineBreak.classList.toggle('active');
    burgerMenuBottom.classList.toggle('active');
    burgerMenuTop.classList.toggle('active');
    arrowsContainer.classList.toggle('hide')
    heroContainer.classList.toggle('hide');
    headerLists.forEach(item => item.classList.toggle('opacity'));
}

//Project Section Sliders Slide LEFT
function projectSlideLeft(position, setSlideImage, slider) {
    if (position > 0) slider === 'plan-slider' ? planCurrentImagePosition -= 1 : projectCurrentImagePosition -= 1;
    const options = getOptions(slider);
    setSlideImage(options.index, options.positions, options.image, options.imageGroup);
}

//Project Section Sliders Slide RIGHT
function projectSlideRight(position, setSlideImage, slider, maxImageSize) {
    if (position < maxImageSize - 1) slider === 'plan-slider' ? planCurrentImagePosition += 1 : projectCurrentImagePosition += 1;
    const options = getOptions(slider);
    setSlideImage(options.index, options.positions, options.image, options.imageGroup);
}

//Project Section Sliders Set Image
function setProjectImage(index, positions, image, imageGroup) {
    document.querySelector(`.${image}`).src = `./images/${imageGroup}${index}.webp`;
    positions.forEach(position => position.classList.remove('active'))
    positions[index].classList.add('active');
}

//Getl Slider Options decide which image element and which image group...
function getOptions(slider) {
    return {
        index: slider === 'plan-slider' ? planCurrentImagePosition : projectCurrentImagePosition,
        positions: slider === 'plan-slider' ? projectPlanImagePositons : projectImagePositons,
        image: slider === 'plan-slider' ? 'project-plan-image' : 'project-image',
        imageGroup: slider === 'plan-slider' ? 'house_plan' : 'project_image'
    }
}

//home slide left to image 
function slideLeft() {
    console.log(homeCurrentImagePosition);
    if (homeCurrentImagePosition > 0) {
        homeCurrentImagePosition = homeCurrentImagePosition - 100;
        heroImageContainer.style.transform = `translateX(-${homeCurrentImagePosition}%)`;
        changeImagePosition(homeCurrentImagePosition);
    }
}

//home slide right to image 
function slideRight() {
    console.log(homeCurrentImagePosition);
    if (homeCurrentImagePosition < 200) {
        homeCurrentImagePosition = homeCurrentImagePosition + 100;
        heroImageContainer.style.transform = `translateX(-${homeCurrentImagePosition}%)`;
        changeImagePosition(homeCurrentImagePosition);
    }
}

//home change image positions cirlces styles
function changeImagePosition(homeCurrentImagePosition) {
    imagePositions.forEach((position, index) => {
        position.classList.remove('active');
        if (index === 0 && homeCurrentImagePosition === 0) {
            position.classList.add('active');
        } else if (index === 1 && homeCurrentImagePosition === 100) {
            position.classList.add('active');
        } else if (index === 2 && homeCurrentImagePosition === 200) {
            position.classList.add('active');
        }
    });
};

//Button effect syles
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



