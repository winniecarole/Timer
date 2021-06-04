

// Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAek0d_K1Ipaawoh_axdaSO2ARJL831wm0",
    authDomain: "formtimer-58cb2.firebaseapp.com",
    projectId: "formtimer-58cb2",
    storageBucket: "formtimer-58cb2.appspot.com",
    messagingSenderId: "462600612154",
    appId: "1:462600612154:web:6d274dc8b61d3d484b8803"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   console.log('hi winnie')
  const auth = firebase.auth();
function signUp() {
    console.log('hi carole')
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    document.location.href="index.html";
    console.log("correct");


    alert("Signed Up");
}
function signIn() {
    console.log('hi carole')
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed in");
}

/*function  signOut(){
    auth.signOut();
    alert("signed in out")
}

auth.onAuthStateChanged(function(user){

    if(user){

        var email = user.email;
        alert("Active User " + email);

        //Take user to a different or home page

        //is signed in

    }else{

        alert("No Active User");
        //no user is signed in
    }



});



/*


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
}*/
