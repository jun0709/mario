
const openPopupBtn1 = document.getElementById('slide_pop1');
const openPopupBtn2 = document.getElementById('slide_pop2');
const openPopupBtn3 = document.getElementById('slide_pop3');
openPopupBtn1.addEventListener('click', () => {
    window.location.href = 'story.html';
})
openPopupBtn2.addEventListener('click', () => {
    window.location.href = 'game.html';
})
openPopupBtn3.addEventListener('click', () => {
    window.location.href = 'shop.html';
})
