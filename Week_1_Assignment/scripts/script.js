let grassButton = document.querySelector('#grass-button');
let waterButton = document.querySelector('#water-button');
let fireButton = document.querySelector('#fire-button');

grassButton.addEventListener('click', () => {
    location.href = ('../grassPage.html');
});

waterButton.addEventListener('click', () => {
    location.href = ('../waterPage.html');
});

fireButton.addEventListener('click', () => {
    location.href = ('../firePage.html');
});