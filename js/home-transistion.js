var colorizer = document.getElementById('colorizer');
var word = ['Home', 'Office', 'ReligiousCenter', 'EventCenter']
var indexx = 0;

function changeeColor() {
    colorizer.textContent = word[indexx];
    colorizer.style.color = indexx % 2 === 0 ? '#FDF001' : '#FDF001';
    indexx = (indexx + 1) % word.length;
}

setInterval(changeeColor, 2000);