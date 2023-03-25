// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwpuppjRg5NUztbMh_20v3tuahzCI7NsA",
  authDomain: "kavachapp-b6a22.firebaseapp.com",
  projectId: "kavachapp-b6a22",
  storageBucket: "kavachapp-b6a22.appspot.com",
  messagingSenderId: "198498887763",
  appId: "1:198498887763:web:22e717ac65891255933ea6",
  measurementId: "G-46J4F77DTB"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    getUserData(user.uid);
                }
            })
            confirm("You are Signed In")
            var timestamp=new Date();
            console.log(timestamp)
            console.log(result)
            window.location.href = "menu.html";
            
            
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
