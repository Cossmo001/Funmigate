const changingText = document.getElementById('changingText');
const words = ['Homes', 'Offices', 'Apartments', 'Event Centers', 'Churches', 'Mosques', 'Business Centres'];
let index = 0;

function changeText() {
    changingText.textContent = `Enjoy Your ${words[index]} Totally Pest Free`;
    changingText.style.color = 'yellow';
    index = (index + 1) % words.length;
}

setInterval(changeText, 800);
