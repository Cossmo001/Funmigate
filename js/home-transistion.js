var changingText1 = document.getElementById('other');
var word = ['Home', 'Office', 'Religious Center', 'Event', ];
var indexx = 0;

function changeeText() {
    changingText1.textContent = `Make your ${word[indexx]} pest free for as low as ₦5000`;
    changingText1.style.color = index % 2 === 0 ? '#FDF001' : 'white';
    indexx = (indexx + 1) % word.length;
}

setInterval(changeeText, 800);
