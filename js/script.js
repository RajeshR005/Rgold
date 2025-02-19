document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("visitor-counter");

    // Retrieve counter from localStorage or initialize
    let visitorCount = localStorage.getItem("visitorCount");
    if (!visitorCount) {
        visitorCount = 460428; // Starting count
    } else {
        visitorCount = parseInt(visitorCount) + 1; // Increment count
    }

    // Store updated count
    localStorage.setItem("visitorCount", visitorCount);

    // Simulate real rolling number counter animation
    function animateCounter(target, duration) {
        let start = 460428; // Starting number
        let range = target - start;
        let current = start;
        let increment = range / duration;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            counterElement.textContent = Math.floor(current).toString().padStart(6, '0'); // Format counter
            if (current >= target) {
                counterElement.textContent = target.toString().padStart(6, '0');
                clearInterval(timer);
            }
        }, stepTime);
    }

    animateCounter(visitorCount, 100);
});
// Add a dynamic hover effect with JavaScript for a subtle pop animation
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".lang-btn, .big-btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.style.transition = "0.3s ease-in-out";
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0px 0px 20px rgba(255, 223, 0, 1)";
        });

        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Call Now button hover effect
    const callNowButton = document.querySelector(".call-now");

    callNowButton.addEventListener("mouseover", function () {
        callNowButton.style.backgroundColor = "white";
        callNowButton.style.color = "green";
        callNowButton.style.border = "3px solid green";
        callNowButton.style.transform = "scale(1.1)";
    });

    callNowButton.addEventListener("mouseout", function () {
        callNowButton.style.backgroundColor = "green";
        callNowButton.style.color = "white";
        callNowButton.style.border = "3px solid transparent";
        callNowButton.style.transform = "scale(1)";
    });
});



