import {nameInput, loginButton, checkNameLength, User} from './login.js';
import { showChat } from './animations.js';

const message = document.getElementById('chat-message');
const sendButton = document.getElementById('send-button');
const messageList = document.querySelector('.message-list');

let userObject;


const socket = io('http://localhost:3000');

nameInput.addEventListener('keyup', checkNameLength);
sendButton.addEventListener('click', sendChatMessage);

loginButton.addEventListener('click', function(){
    
   if (this.classList.contains('active')) {
    
        userObject = new User(nameInput.value);
        showChat();
    };

    
})


function sendChatMessage() {
    userObject.chatMessage(message.value);
    const userMessage = userObject.message;
    socket.emit('send-message', userMessage)
    
    message.value = '';

    showChatMessage(userMessage)

    socket.on('show-message', userMessage => {
        showChatMessage(userMessage)
    })
}

function showChatMessage(message) {
    const messageTemplate = 
    `<li class="message-bubble">
    <div class="bubble">
        <p> ${message} </p>
    </div>
    <div class="bubble__icon">
        <img src="">
    </div>
    </li>`;

    messageList.innerHTML += messageTemplate;
}
