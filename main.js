// Index for main.js

// 1. Homepage Scroll Effect
// 2. Back to Top Button

// 1. Homepage Scroll Effect
// ==============================

// Add an event listener for the scroll event
window.addEventListener('scroll', function () {
    // Select the parallax element
    var parallax = document.querySelector('.parallax');
    // Get the size and position of the parallax element
    var rect = parallax.getBoundingClientRect();

    // Check if the parallax element is within the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // If it is, change the background color of the body to white
        document.body.style.backgroundColor = 'white';
    } else {
        // If it's not, reset the background color of the body to its default color
        document.body.style.backgroundColor = '';
    }
});


