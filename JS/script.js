class User {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
}
const user1 = new User('Mads', 'mads1234', '1234')

// det virker!! submit gør kun noget med korrekt username og password
function checkLogin() {
    const usern = document.querySelector("#uname");
    const passw = document.querySelector("#pword");

    User.allInstances = [];
    User.allInstances.push(user1);
    let userList = User.allInstances

    let index = 0;

    for(let i = 0; i < userList.length; i++) {
        if (userList[i].username === usern.value){
            index = i;
            break;
        }
    }

    if (passw.value === userList[index].password) {
        window.location.href="http://localhost:63342/GitHub/P2_TEST/HTML/Employees.html?_ijt=o04c9jfqf5oe6kaj88ejttnb1h&_ij_reload=RELOAD_ON_SAVE";
    }
}

function home_admin() {
    window.location.href="http://localhost:63342/P2_TEST/HTML/HOME%20ADMIN.html?_ijt=5iij2ocpf4gbuso5h824c0unvj&_ij_reload=RELOAD_ON_SAVE";
}