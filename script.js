

// document.addEventListener('DOMContentLoaded', () => {
//     const menuContainer = document.querySelector('.menu-container');
//     const navList = document.querySelector('.nav-list');

//     menuContainer.addEventListener('click', () => {
//         menuContainer.classList.toggle('active');
//         navList.classList.toggle('active');
//         document.querySelector('.logo').style.display = navList.classList.contains('active') ? 'none' : 'block';
//     });
// });



















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
    }, 2000);

    // Close the popup when the user clicks anywhere outside of the popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});

// POPUP AD CODE ENDS








const image = document.getElementById('image');
const magnifier = document.getElementById('magnifier');

function moveMagnifier(e) {
    magnifier.style.display = 'block';
    const rect = image.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
    magnifier.style.backgroundImage = `url(${image.src})`;
    magnifier.style.backgroundSize = `${image.width * 3}px ${image.height * 3}px`;
    magnifier.style.backgroundPosition = `-${x * 3 - magnifier.offsetWidth / 3}px -${y * 3 - magnifier.offsetHeight / 3}px`;
}

function disableScroll(e) {
    e.preventDefault();
}

image.addEventListener('mousemove', moveMagnifier);
image.addEventListener('touchmove', moveMagnifier);

image.addEventListener('mouseenter', function() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', disableScroll, { passive: false });
});

image.addEventListener('mouseleave', function() {
    magnifier.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('touchmove', disableScroll);
});

image.addEventListener('touchstart', function() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', disableScroll, { passive: false });
});

image.addEventListener('touchend', function() {
    magnifier.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('touchmove', disableScroll);
});

// magnifier.style.transition = 'left 0.1s ease, top 0.1s ease';





















