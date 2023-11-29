const changingText = document.getElementById('changingText');
const colorize = document.getElementById('colorize');
const words = ['Bed Bugs', 'Cockroaches', 'Rat', 'Flies', 'Ant', 'Fleas', 'Bees', 'Moths'];
let index = 0;

function changeText() {
    changingText.innerText = `Control ${words[index]} at your home for as low as ₦5000`;
    //changingText.style.color = index % 2 === 0 ? '#FDF001' : '#ffff11';
    //colorize.style.color = '#ffff11';
    colorize.style.color = index % 2 === 0 ? '#FDF001' : '#ffff11';
    index = (index + 1) % words.length;
}

setInterval(changeText, 1000);
