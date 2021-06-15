

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

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    document.location.href="index.html";
    console.log("correct");


    alert("successfull");
}

