class User {
    constructor(name, username, password, status) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.status = status;
    }
}
const user1 = new User('Mads', 'mads1234', '1234', 'employee')

// det virker!! submit gør kun noget med korrekt username og password
function checkLogin() {
    const userN = document.querySelector("#usernameInput");
    const passW = document.querySelector("#passwordInput");

    User.allInstances = [];
    User.allInstances.push(user1);
    let userList = User.allInstances

    let index = null;

    for(let i = 0; i < userList.length; i++) {
        if (userList[i].username === userN.value){
            index = i;
            break;
        }
    }

    if (passW.value === userList[index].password) {
        // links skal udskiftes med link til brugerplatform:
        if (userList[index].status === 'employee') {
            window.location.href="Employees.html";
            localStorage.setItem('userStatus', userList[index].status)
        }
        else if (userList[index].status === 'admin') {
            window.location.href="HOME ADMIN.html";
            localStorage.setItem('userStatus', userList[index].status)
        }
    } else (alert("Wrong username and/or password."))
}

function home_admin() {
    window.location.href="HOME ADMIN.html";
}