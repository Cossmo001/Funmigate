function showSecondPart() {
    // Code to hide the first part of the form and show the second part
    document.getElementById("contact-form-part-1").style.display = "none";
    document.getElementById("contact-form-part-2").style.display = "block";
}
function showUserInput() {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const location = document.getElementById("location").value;
const city = document.getElementById("city").value;
const state = document.getElementById("state").value;
const postalCode = document.getElementById("postal-code").value;
const dateTime = document.getElementById("date-time").value;
const localGovt = document.getElementById("local-govt").value;

const userInputDisplay = document.getElementById("user-input-display");
userInputDisplay.innerHTML = `
    <h2>Review Your Information:</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${location}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>State/Province:</strong> ${state}</p>
    <p><strong>Postal/ZIP Code:</strong> ${postalCode}</p>
    <p><strong>Local Government:</strong> ${localGovt}</p>
    <p><strong>Date and Time:</strong> ${dateTime}</p>
`;
userInputDisplay.style.display = "block";
}
document.getElementById("contact-form").addEventListener("button", function(event) {
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const addressField = document.getElementById("address");
    const email = emailField.value;
    const phone = phoneField.value;
    const address = addressField.value;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const phonePattern = /^\d{11}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        emailField.focus();
        event.preventDefault(); // Prevent form submission
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a 10-digit phone number.");
        phoneField.focus();
        event.preventDefault(); // Prevent form submission
    }

    if (address.trim() === '') {
        alert("Please enter your address.");
        addressField.focus();
        event.preventDefault(); // Prevent form submission
    }
});

// Room types based on building selection
const roomOptions = {
Residential: ['Bedroom', 'Living Room', 'Kitchen', 'Bathroom'],
Commercial: ['Office', 'Conference Room', 'Reception Area'],
Industrial: ['Factory Floor', 'Warehouse', 'Office'],
Institutional: ['Classroom', 'Library', 'Laboratory', 'Administrative Office', 'Auditorium'],
Educational: ['Classroom', 'Library', 'Laboratory', 'Faculty Office', 'Auditorium'],
Hospital: ['Patient Room', 'Operating Room', 'Emergency Room', 'Laboratory', 'Pharmacy', 'Waiting Area', 'Administration Office'],
Religious: ['Sanctuary', 'Chapel', 'Meeting Hall', 'Office', 'Classroom', 'Library', 'Kitchen', 'Restroom', 'Courtyard'],
SportsFacility: ['Gymnasium', 'Locker Room', 'Swimming Pool', 'Tennis Court', 'Basketball Court', 'Indoor Track', 'Fitness Studio', 'Meeting Room', 'Reception Area'],
HotelResort: ['Standard Room', 'Suite', 'Deluxe Room', 'Restaurant', 'Bar/Lounge', 'Spa', 'Pool Area', 'Gym/Fitness Center', 'Conference Room', 'Reception Area', 'Courtyard/Garden'],
EventCenter: ['Ballroom', 'Meeting Room', 'Conference Hall', 'Exhibition Area', 'Banquet Hall', 'Lounge Area', 'Outdoor Terrace', 'Catering Kitchen', 'Reception Area', 'Auditorium', 'Stage'],
// Add other building types and respective rooms as needed
};

// Function to populate room types based on building selection
document.getElementById('building-type').addEventListener('change', function() {
const buildingType = this.value;
const roomSelect = document.getElementById('room-types');
roomSelect.innerHTML = ''; // Clear previous options

if (roomOptions[buildingType]) {
roomOptions[buildingType].forEach(room => {
    const option = document.createElement('option');
    option.value = room;
    option.text = room;
    roomSelect.appendChild(option);
});
}
});
document.getElementById('room-count').addEventListener('input', function() {
const count = parseInt(this.value) || 0;
const totalCount = document.getElementById('total-count');
totalCount.textContent = count * 5000;
});
