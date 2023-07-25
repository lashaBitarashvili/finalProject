let sessionToken = sessionStorage.getItem('sessionToken');
let usersData = localStorage.getItem('usersData');
usersData = JSON.parse(usersData);

let welcomeMessage = document.createElement('h3');

let loggedInUserData = {};

for (let user of usersData) {
    if (user.sessionToken === sessionToken) {
        loggedInUserData = user;
    }
}

welcomeMessage.innerHTML = `Welcome ${loggedInUserData.firstName}! with surname ${loggedInUserData.lastName}`;


document.body.appendChild(welcomeMessage);

welcomeMessage.style.color = 'green';
welcomeMessage.style.textAlign = 'center';