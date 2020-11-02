const imageContainer = document.querySelector('.image-container');
const dots = document.querySelectorAll('.dot');
let currentImage = 0;

const displayCurrentImage = (position) => {
    removeImages();
    const imageList = ['imageOne', 'imageTwo', 'imageThree', 'imageFour'];
    imageContainer.classList.add(imageList[position]);
    populateDot(position);
}

const loadNextImage = () => {
    currentImage >= 3 ? currentImage = 0 : currentImage++;
    displayCurrentImage(currentImage);
}

const loadPrevImage = () => {
    currentImage <= 0 ? currentImage = 3 : currentImage--;
    displayCurrentImage(currentImage);
}

const removeImages = () => {
    imageContainer.classList.remove('imageOne');
    imageContainer.classList.remove('imageTwo');
    imageContainer.classList.remove('imageThree');
    imageContainer.classList.remove('imageFour');
}

const populateDot = (dot) => {
    depopulateDot();
    const selectDot = document.querySelector(`#dot${dot}`);
    selectDot.classList.toggle('active-dot');
}

const depopulateDot = () => {
    dots.forEach( (dot) => dot.classList.remove('active-dot'));
}

const initiliazeWindow = (() => {
    displayCurrentImage(0);

    const wrapper = document.querySelector('.wrapper');

    const prevButton = document.createElement('button');
    prevButton.id = 'btn-prev';
    const leftArrow = document.createElement('i');
    leftArrow.className = 'fas fa-arrow-circle-left fa-4x';
    prevButton.appendChild(leftArrow);

    const nextButton = document.createElement('button');
    nextButton.id = 'btn-next';
    const rightArrow = document.createElement('i');
    rightArrow.className = 'fas fa-arrow-circle-right fa-4x';
    nextButton.appendChild(rightArrow);
    
    wrapper.insertBefore(prevButton, imageContainer);
    wrapper.appendChild(nextButton);

    nextButton.addEventListener('click', () => loadNextImage());
    prevButton.addEventListener('click', () => loadPrevImage());

    dots.forEach( (dot) => dot.addEventListener('click', () => {
        depopulateDot();
        dot.classList.toggle('active-dot');
        const positionToUpdate = parseInt(dot.id.slice(-1));
        displayCurrentImage(positionToUpdate);
    }));

    setInterval( () => {
        loadNextImage();
    }, 5000);


})();