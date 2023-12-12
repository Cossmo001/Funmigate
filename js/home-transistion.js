var colorizer = document.getElementById('colorizer');
var word = ['Home ', 'Office ', 'Religious Center ', 'Event Center ']
var indexx = 0;

function changeeColor() {
    colorizer.textContent = word[indexx];
    colorizer.style.color = indexx % 2 === 0 ? '#FDF001' : '#FDF001';
    indexx = (indexx + 1) % word.length;
}

setInterval(changeeColor, 3000);