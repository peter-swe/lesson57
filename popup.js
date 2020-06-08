const button = document.querySelector('button');
const popupBox = document.querySelector('.popup-box');
const popupClose = document.querySelector('.popup-close');

popupClose.addEventListener('click', event => {
console.log('close')
});

button.addEventListener('click', () => {
    popupBox.style.display = 'block';
});

popupBox.addEventListener('click', () => {
    popupBox.style.display = 'none'
});
