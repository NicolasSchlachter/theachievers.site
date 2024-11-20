document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.createElement('div');
    chatbotToggle.innerHTML = `
        <button id="chatbotBtn" class="chat-btn">💬 Chat with AI</button>
        <div id="chatWindow" class="chat-window">
            <div class="chat-header">
                <span>Chat with Achievers AI</span>
                <button id="closeChat">X</button>
            </div>
            <div id="chatMessages" class="chat-messages"></div>
            <input type="text" id="chatInput" placeholder="Scrieți un mesaj..." />
        </div>
    `;
    document.body.appendChild(chatbotToggle);

    const chatWindow = document.getElementById('chatWindow');
    const chatBtn = document.getElementById('chatbotBtn');
    const closeChat = document.getElementById('closeChat');

    chatBtn.addEventListener('click', () => chatWindow.classList.toggle('visible'));
    closeChat.addEventListener('click', () => chatWindow.classList.remove('visible'));

    const chatInput = document.getElementById('chatInput');
    chatInput.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value;
            chatInput.value = '';

            const userMessage = `<div class="user-message">${message}</div>`;
            document.getElementById('chatMessages').innerHTML += userMessage;

            const response = await fetch('https://api.example.com/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });
            const reply = await response.json();

            const aiMessage = `<div class="ai-message">${reply.response}</div>`;
            document.getElementById('chatMessages').innerHTML += aiMessage;
        }
    });
});
