export const nameInput = document.querySelector('#chat-name');
export const loginButton = document.querySelector('.login__button').children[0];

export function checkNameLength() {
    nameInput.value.length > 0 ? loginButton.classList.add('active') : loginButton.classList.remove('active');
}

export class User {
    constructor(name) {
        this.name = name;
    }
}

