let seats = generateSeats(49);
let selectedSeats = [];

function generateSeats(count) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const columns = ['1', '2', '3', '4', '5', '6', '7'];

    return Array.from({ length: count }, (_, index) => ({
        id: index + 1,
        label: rows[Math.floor(index / columns.length)] + columns[index % columns.length],
        image: `Images/${rows[Math.floor(index / columns.length)] + columns[index % columns.length]}.jpg`,
        booked: Math.random() < 0.235
    }));
}

function renderSeats() {
    let seatsGrid = document.getElementById('seatsGrid');
    seatsGrid.innerHTML = '';

    seats.forEach(seat => {
        let seatDiv = document.createElement('div');
        seatDiv.classList.add('seat');
        seatDiv.classList.add('label');
        seatDiv.textContent = seat.label;

        if (seat.booked) {
            seatDiv.classList.add('booked');
        } else if (selectedSeats.includes(seat.id)) {
            seatDiv.classList.add('selected');
        }

        seatDiv.addEventListener('click', () => {
            if (!seat.booked) {
                toggleSeatSelection(seat.id);
            }
        });

        seatDiv.addEventListener('mouseenter', () => {
            showImageContainer(seat.image);
        });

        seatDiv.addEventListener('mouseleave', () => {
            hideImageContainer();
        });

        seatsGrid.appendChild(seatDiv);
    });
}

function toggleSeatSelection(seatId) {
    let seat = seats.find(s => s.id === seatId);
    if (seat) {
        if (!seat.booked) {
            let seatIndex = selectedSeats.indexOf(seatId);
            if (seatIndex === -1) {
                selectedSeats.push(seatId);
            } else {
                selectedSeats.splice(seatIndex, 1);
            }
        }
    }

    renderSeats();
}

function updateSelectedSeatsDisplay() {
    let seatsGrid = document.getElementById('seatsGrid');

    seats.forEach(seat => {
        let seatDiv = seatsGrid.querySelector(`.seat.label:nth-child(${seat.id + 1})`);

        if (seat.booked) {
            seatDiv.classList.remove('selected');
            seatDiv.classList.add('booked');
        } else if (selectedSeats.includes(seat.id)) {
            seatDiv.classList.remove('booked');
            seatDiv.classList.add('selected');
        } else {
            seatDiv.classList.remove('selected');
            seatDiv.classList.remove('booked');
        }
    });

    let selectedSeatsElem = document.getElementById('selectedSeats');
    selectedSeatsElem.innerHTML = '';

    selectedSeats.forEach(seatId => {
        let seat = seats.find(s => s.id === seatId);
        if (seat) {
            let seatDisplay = document.createElement('div');
            seatDisplay.textContent = seat.label;
            selectedSeatsElem.appendChild(seatDisplay);
        }
    });

    let totalPriceElem = document.getElementById('totalPrice');
    let totalPrice = selectedSeats.length * 200;
    totalPriceElem.textContent = `Total Price: $${totalPrice}`;

    let ticketInfo = document.getElementById('ticketInfo');
    let nextBtn = document.getElementById('nextBtn');
    if (selectedSeats.length > 0) {
        ticketInfo.style.display = 'block';
        nextBtn.style.display = 'block';
    } else {
        ticketInfo.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

function showImageContainer(imagePath) {
    let movieScreen = document.getElementById('movieScreen');
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    let image = document.createElement('img');
    image.src = imagePath;
    image.alt = 'Seat Image';
    imageContainer.appendChild(image);
    movieScreen.appendChild(imageContainer);
}

function hideImageContainer() {
    let movieScreen = document.getElementById('movieScreen');
    let imageContainer = movieScreen.querySelector('.image-container');
    if (imageContainer) {
        movieScreen.removeChild(imageContainer);
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    bookSelectedSeats();
    window.location.href = 'payment.html';
});

function bookSelectedSeats() {
    selectedSeats.forEach(seatId => {
        let seat = seats.find(s => s.id === seatId);
        if (seat) {
            seat.booked = true;
        }
    });

    selectedSeats = [];
    renderSeats();
}

renderSeats();