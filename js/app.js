import {nameInput, loginButton, checkNameLength, User} from './login.js';
import { showChat } from './animations.js';

let userObject;

nameInput.addEventListener('keyup', checkNameLength);


loginButton.addEventListener('click', function(){
    
   if (this.classList.contains('active')) {
        userObject = new User(nameInput.value);
        showChat();
    };
})




