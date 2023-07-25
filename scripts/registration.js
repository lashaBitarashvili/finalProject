const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        console.log(Math.floor(Math.random() * charactersLength));

        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function handleRegistration() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);


    let user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    }

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));

    }
}








const form = document.querySelector('form');
const userChoice = document.querySelector('#password');
const userEmail = document.querySelector('#email');

const userFirstName = document.querySelector('#firstName');
const userLastName = document.querySelector('#lastName');
const userUserName = document.querySelector('#userName');



form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (password === 'Hellohello123') {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});

function passwordChecker() {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const password = userChoice.value;

    let result = document.createElement('p');

    if (pattern.test(password)) {
        result.style.color = 'green';
        result.innerHTML = 'Password is valid';
        result.style.textAlign = 'center'
    } else {
        result.style.color = 'red';
        result.innerHTML = 'Password is invalid';
        result.style.textAlign = 'center'
    }

    document.body.appendChild(result);
}

function emailChecker() {
    const pattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    const email = userEmail.value;

    let result = document.createElement('p');

    if (pattern.test(email)) {
        result.style.color = 'green';
        result.innerHTML = 'email is valid';
        result.style.textAlign = 'center'
    } else {
        result.style.color = 'red';
        result.innerHTML = 'email is invalid';
        result.style.textAlign = 'center'
    }

    document.body.appendChild(result);
}




function firstNameCheker() {
    const pattern = /^[A-Za-z]+$/ ;
    const firstName = userFirstName.value;
    let result = document.createElement('p');

    if (pattern.test(firstName)) {
        result.style.color = 'green';
        result.innerHTML = 'Firstname is valid';
        result.style.textAlign = 'center'
    } else {
        result.style.color = 'red';
        result.innerHTML = 'Firstname is invalid';
        result.style.textAlign = 'center'
    }

    document.body.appendChild(result);
}




function lastNameCheker() {
    const pattern = /^[A-Za-z]+$/ ;
    const lastName = userLastName.value;
    let result = document.createElement('p');

    if (pattern.test(lastName)) {
        result.style.color = 'green';
        result.innerHTML = 'Lastname is valid';
        result.style.textAlign = 'center'
    } else {
        result.style.color = 'red';
        result.innerHTML = 'Lastname is invalid';
        result.style.textAlign = 'center'
    }

    document.body.appendChild(result);
}






function usernameCeker() {
    const pattern = /^[a-zA-Z0-9_]{3,16}$/
    const firstName = userUserName.value;
    let result = document.createElement('p');

    if (pattern.test(firstName)) {
        result.style.color = 'green';
        result.innerHTML = 'Username is valid';
        result.style.textAlign = 'center'
    } else {
        result.style.color = 'red';
        result.innerHTML = 'Username is invalid';
        result.style.textAlign = 'center'
    }

    document.body.appendChild(result);
}