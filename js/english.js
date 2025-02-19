document.getElementById('gold-calculator').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let purityInput = document.getElementById('purity').value.trim();
    let purity = parseFloat(purityInput.replace(",", ".")); // Support both "." and ","
    const basePrice = 8750; // Price for 99.99% pure gold per gram

    if (!isNaN(purity) && purity >= 0 && purity <= 100) {
        const calculatedPrice = (purity / 99.99) * basePrice;
        document.getElementById('result').textContent = `Estimated price per gram: Rs. ${calculatedPrice.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid purity percentage between 0 and 100.";
    }
});


// Slider Functionality - Manual Control Only
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const radioButtons = document.querySelectorAll('.slider-controls input');

radioButtons.forEach((radio, i) => {
    radio.addEventListener('click', () => {
        slider.style.transform = `translateX(-${i * 100}%)`;
        radioButtons.forEach((btn, j) => btn.checked = j === i); // Keep radio buttons active
    });
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("visitor-counter");

    // Retrieve stored count or set default
    let count = localStorage.getItem("visitorCount");
    if (count === null) {
        count = 461316; // Default starting value
    } else {
        count = parseInt(count) + 1; // Increment count
    }

    // Store the new count
    localStorage.setItem("visitorCount", count);

    // Function to animate number change
    function animateCounter(targetValue, duration) {
        let startValue = targetValue - 5; // Start from a lower number for effect
        let current = startValue;
        let increment = (targetValue - startValue) / 50; // Control animation speed

        let interval = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                clearInterval(interval);
                current = targetValue; // Ensure exact final value
            }
            counterElement.innerText = Math.floor(current).toString().padStart(6, "0");
        }, duration / 50);
    }

    // Run the animation
    animateCounter(count, 100); // 2-second animation
});



