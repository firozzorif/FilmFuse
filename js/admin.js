// Mock data for screens and seats
let screens = [
    { id: 1, name: "Screen 1", seats: generateSeats(80) }
];

let selectedScreenId = null;
let ticketPrice = 200;

// Function to generate seats with labels
function generateSeats(count) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return Array.from({ length: count }, (_, index) => ({
        id: index + 1,
        label: rows[Math.floor(index / columns.length)] + columns[index % columns.length],
        image: null, // Initially no image
        booked: false
    }));
}

// Function to render screen buttons
function renderScreens() {
    let screensList = document.getElementById('screens');
    screensList.innerHTML = '';

    screens.forEach(screen => {
        let li = document.createElement('li');
        li.textContent = screen.name;
        li.classList.add('screen-item');
        li.addEventListener('click', () => showSeats(screen.id));
        screensList.appendChild(li);
    });
}

// Function to show seats for a selected screen
function showSeats(screenId) {
    selectedScreenId = screenId;
    let seatDisplay = document.getElementById('seatDisplay');
    let seatsGrid = document.getElementById('seatsGrid');
    seatsGrid.innerHTML = '';
    let screen = screens.find(screen => screen.id === screenId);

    screen.seats.forEach((seat, index) => {
        let seatDiv = document.createElement('div');
        seatDiv.classList.add('seat');
        seatDiv.classList.add('label');
        seatDiv.textContent = seat.label;

        // Map seat labels to images in the "Images" folder
        let imageName = seat.label + '.jpg';
        let imagePath = `Images/${imageName}`;

        // Check if image exists, then set background image
        fetch(imagePath)
            .then(response => {
                if (response.ok) {
                    seatDiv.style.backgroundImage = `url(${imagePath})`;
                    seat.image = imagePath; // Store image path in seat object
                } else {
                    console.error('Image not found:', imageName);
                }
            })
            .catch(error => {
                console.error(`Failed to fetch image: ${error}`);
            });

        seatDiv.addEventListener('mouseenter', () => {
            showImageContainer(seat.image);
        });
        seatDiv.addEventListener('mouseleave', () => {
            hideImageContainer();
        });

        seatsGrid.appendChild(seatDiv);
    });

    seatDisplay.style.display = 'block';
}

// Function to show image container with enlarged image
function showImageContainer(imagePath) {
    let movieScreen = document.querySelector('.movie-screen');
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    let image = document.createElement('img');
    image.src = imagePath;
    image.alt = 'Seat Image';
    imageContainer.appendChild(image);
    movieScreen.appendChild(imageContainer);
}

// Function to hide image container
function hideImageContainer() {
    let movieScreen = document.querySelector('.movie-screen');
    let imageContainer = movieScreen.querySelector('.image-container');
    if (imageContainer) {
        movieScreen.removeChild(imageContainer);
    }
}

// Initial render of screens
renderScreens();
