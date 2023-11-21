const changingText = document.getElementById('changingText');
const words = ['Bed Bugs', 'Cockroaches', 'Rat', 'Flies', 'Ant', 'Fleas', 'Bees', 'Moths'];
let index = 0;

function changeText() {
    changingText.textContent = `Control ${words[index]} at your home for as low as ₦5000`;
    changingText.style.color = index % 2 === 0 ? '#FDF001' : 'white';
    index = (index + 1) % words.length;
}

setInterval(changeText, 1000);
