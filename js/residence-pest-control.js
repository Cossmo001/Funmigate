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

// Calculate total rooms and update the count
document.getElementById('room-count').addEventListener('input', function() {
    const count = parseInt(this.value) || 0;
    const totalCount = document.getElementById('total-count');
    totalCount.textContent = count * 5000;
});
