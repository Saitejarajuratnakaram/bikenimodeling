document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.querySelector('.chat-box');
    const chatToggle = document.getElementById('chat-toggle');
    const openChatBtn = document.getElementById('open-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const startBtn = document.getElementById('start-btn');
    const chatInput = document.getElementById('chat-input');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const dynamicForm = document.getElementById('dynamic-form');
    const userForm = document.getElementById('user-form');
    const chatBody = document.getElementById('chat-body');
    const welcomeMessage = document.getElementById('welcome-message');
    const startConversation = document.getElementById('start-conversation');

    // Open chat box
    openChatBtn.addEventListener('click', () => {
        chatBox.style.display = 'flex';
        startConversation.style.display = 'block';
        chatInput.style.display = 'none';
        dynamicForm.style.display = 'none';
    });

    // Close chat box
    closeChatBtn.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });

    // Start conversation
    startBtn.addEventListener('click', () => {
        startConversation.style.display = 'none';
        chatInput.style.display = 'flex';
        welcomeMessage.textContent = 'Welcome to Bikini Model! How can we assist you today?';
    });

    // Handle send button click
    sendBtn.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.textContent = message;
            chatBody.appendChild(userMessage);
            userInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot-message';
                botMessage.textContent = 'Thank you for your inquiry. Our team will reach out to you shortly.';
                chatBody.appendChild(botMessage);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }
    });

    // Handle form submission
    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Here you would handle form submission
        alert('Form submitted successfully!');
        dynamicForm.style.display = 'none';
        userInput.value = '';
    });
});
