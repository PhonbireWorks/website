// script.js
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});




// script.js
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
});