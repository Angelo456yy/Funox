function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    if (messageText.trim() !== "") {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'comment';

        const img = document.createElement('img');
        img.src = 'OIP (11)a.jpg'; // Cambiar por la ruta de la imagen que desees mostrar

        const text = document.createElement('div');
        text.textContent = messageText;

        messageContainer.appendChild(img);
        messageContainer.appendChild(text);

        const messagesDiv = document.getElementById('messages');
        messagesDiv.appendChild(messageContainer);

        messageInput.value = '';
    }
}