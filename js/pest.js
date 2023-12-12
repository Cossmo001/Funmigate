const colorize = document.getElementById('colorize');
const words = ['BedBugs', 'Cockroaches', 'Rat', 'Flies', 'Ant', 'Fleas', 'Bees', 'Moths'];
let index = 0;

function changeText() {
    colorize.innerText = words[index];
    colorize.style.color = index % 2 === 0 ? '#FDF001' : '#ffff11';
    index = (index + 1) % words.length;
}

setInterval(changeText, 3000);
