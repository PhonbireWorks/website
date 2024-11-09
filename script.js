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









//CHAT BOX CODE STARTS
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // Load messages from LocalStorage
    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.forEach(message => {
            displayMessage(message);
        });
    };

    // Save messages to LocalStorage
    const saveMessage = (message) => {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    };

    // Display message in chat box
    const displayMessage = (message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    // Send button click event
    sendBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            displayMessage(message);
            saveMessage(message);
            chatInput.value = '';
        }
    });

    // Load messages on page load
    loadMessages();
});
//CHAT BOX CODE ENDS

