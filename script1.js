

var user = [
    {
        username: "winnie",
        password: "winnie"
    },
    {
        username: "ange",
        password: "ange"
    },
    {
        username: "elsa",
        password: "elsa"
    },
    {
        username: "junior",
        password: "junior"
    },

]

function isUser() {
    var username = document.getElementById('name').value
    var password = document.getElementById('pass').value

    for(var i = 0; i < user.length; i++) {
        // check is user input matches username and password of a current index of the ser array
        if(username == user[i].username && password == user[i].password) {
            document.location.href="index.html";
            console.log("correct");
        }
    }
    console.log("incorrect username or password")
}
