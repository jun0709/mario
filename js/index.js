const slider = document.querySelector('.slider');
const openPopupBtn1 = document.getElementById('slide_pop1');
const openPopupBtn2 = document.getElementById('slide_pop2');
const openPopupBtn3 = document.getElementById('slide_pop3');
setInterval(() => {
    slider.style.transform = 'rotateY(90deg)';
    setTimeout(() => {
        slider.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            slider.style.transform = 'rotateY(270deg)';
            setTimeout(() => {
                slider.style.transform = 'rotateY(360deg)';
            }, 100);
        }, 100);
    }, 100);
}, 3000);

openPopupBtn1.addEventListener('click', () => {
    window.location.href = 'story.html';
})
openPopupBtn2.addEventListener('click', () => {
    window.location.href = 'game.html';
})
openPopupBtn3.addEventListener('click', () => {
    window.location.href = 'shop.html';
})