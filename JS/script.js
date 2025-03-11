class User {
    constructor(name, username, password, status) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.status = status;
    }
}

let userDatabase;

function fetchLogin() {
    // omskriv til brug af node.js senere (require, readFile)
    fetch('../TXT/userDatabase.txt')
        .then(response => response.text())
        .then(data => {
            userDatabase = data
                .trim()
                .split('\n')
                .map(line => line.split(','));

            console.log(userDatabase);
            checkLogin(userDatabase)
        })
        .catch(error => console.error('Error loading file:', error));
}

function checkLogin(userDatabase) {
    const userN = document.querySelector("#usernameInput");
    const passW = document.querySelector("#passwordInput");

    User.allInstances = []

    for (let i = 0; i < userDatabase.length; i++) {
        window["user" + i] = new User(userDatabase[i][0], userDatabase[i][1], userDatabase[i][2], userDatabase[i][3])
        User.allInstances.push(window["user" + i]);
    }

    let userList = User.allInstances
    console.log(userList)
    let index = null;

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].username === userN.value) {
            index = i;
            break;
        }
    }

    try {
        if (passW.value === userList[index].password) {
            // links skal udskiftes med link til brugerplatform:
            if (userList[index].status === 'employee') {
                window.location.href = "Employees.html";
                localStorage.setItem('userStatus', userList[index].status)
            } else if (userList[index].status === 'admin') {
                window.location.href = "HOME_ADMIN.html";
                localStorage.setItem('userStatus', userList[index].status)
            }
        } else {alert("Wrong username and/or password.")}
    } catch (err) {
        alert("Wrong username and/or password.")
    }
}
function home_admin() {
    window.location.href="/P2_TEST/HTML/ADMIN/HOME_ADMIN.html";
}