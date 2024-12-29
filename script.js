// script.js
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});




// script.js
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
});

// script.js
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection2').scrollIntoView({ behavior: 'smooth' });
});





// script.js
// Get the button
let topBtn = document.getElementById("topBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}




// POPUP AD CODE STARTS
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var close = document.getElementsByClassName('close')[0];

    // Show the popup after 3 seconds
    setTimeout(function() {
        popup.style.display = 'flex';
    }, 1000);

    // Close the popup when the user clicks on <span> (x)
    close.onclick = function() {
        popup.style.display = 'none';
    }

    // Close the popup when the user clicks anywhere outside of the popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});

// POPUP AD CODE ENDS












// RANDOM LOGO LOAD CODE STARTS
// THIS CODE LOADS A RANDOM LOGO VARIATION EVERY TIME THE PAGE REFRESHES OR LOADS
const images = [
    'images/logo.svg',
];

// Function to load a random image
function loadRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('randomImage').src = randomImage;
}

// Load a random image when the page loads
window.onload = loadRandomImage;
// THIS CODE LOADS A RANDOM LOGO VARIATION EVERY TIME THE PAGE REFRESHES OR LOADS
// RANDOM LOGO LOAD CODE ENDS




// ACCORDION CODE STARTS
document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
// ACCORDION CODE ENDS


