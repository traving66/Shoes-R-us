// script.js

// Cart array to hold items added to cart
let cart = [];

// Function to handle adding items to the cart
function addToCart(item) {
    cart.push(item);
    alert(`${item} has been added to your cart!`);
}

// Function to handle color selection
function selectColor(element) {
    const selectedColor = element.dataset.color;
    const shoeImage = document.querySelector('.selected-shoe-image');
    shoeImage.src = `images/${selectedColor}.jpg`; // Ensure images are named accordingly
}

// Function to filter products by category
function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-card, .sale-item');
    allProducts.forEach(product => {
        if (category === 'All' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Countdown timer function
function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const countdownElement = document.querySelector('.countdown');

    const countdownInterval = setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="number">${hours}</span>
                <span class="label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="number">${minutes}</span>
                <span class="label">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="number">${seconds}</span>
                <span class="label">Seconds</span>
            </div>
        `;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "<h2>Sale Ended!</h2>";
        }
    }, 1000);
}

// Initialize the countdown for flash sales (e.g., 48 hours)
document.addEventListener('DOMContentLoaded', () => {
    startCountdown(48 * 60 * 60); // Adjust the duration as needed
});
