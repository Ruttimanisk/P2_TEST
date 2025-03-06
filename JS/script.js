class User {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
}
const user1 = new User('Mads', 'mads1234', '1234')

function checkLogin() {
    const usern = document.querySelector("#uname");
    const paword = document.querySelector("#pword");
    let index = 0;
    User.allInstances = [];
    User.allInstances.push(user1);
    let userList = User.allInstances
    console.log(userList.length);
    for(let i = 0; i < userList.length; i++) {
        if (userList[i].username === usern.value){
            index = i;
            break;
        }
    }

    if (paword.value === userList[index].password) {
        console.log(userList[index].name)
        document.getElementById("welcome").innerHTML = "" + userList[index].name
    }
}






