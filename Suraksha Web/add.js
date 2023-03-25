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
const user = auth.currentUser;

//const id = document.getElementById("id").value;
//const names = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const passwords = document.getElementById("password").value;
// const position = document.getElementById("position").value;


var getDefaultPassword=()=> {
    return 'qwertyuiop';
  }

var getDefaultRole=()=> {
    return 'employee';
  }

const addEmployee = () => {
    const password = document.getElementById("passwords").value;
const id = document.getElementById("id").value;
const names = document.getElementById("names").value;
const email = document.getElementById("email").value;
const position = document.getElementById("position").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (result) => {
            var currentdate = new Date(); 
                    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
            if(firebase.auth().currentUser.uid!=null){
                firebase.firestore().collection("employee").doc(firebase.auth().currentUser.uid).set({
                    "employee_id": id,
                    "name": names,
                    "email": email,
                    "role": 'employee',
                    "job": position,
                    
                    "created_at": datetime,
                  });
            }
            
            console.log(result)
            confirm("Officer added");
            window.location.href = "menu.html";

            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}
