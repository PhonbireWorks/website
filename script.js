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


