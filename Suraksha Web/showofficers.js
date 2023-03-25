
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
var deet;

const getMarker=async ()=> {
    const snapshot = await firebase.firestore().collection('employee').get()
    deet = snapshot.docs.map(doc => doc.data());
    console.log(deet);
    for (let i = 0; i < deet.length; i++) {
      var value=deet.get
      console.log(deet.length);
      document.write("<br>")
      document.write(deet[i]['name']);
      document.write("<br>");
      document.write(deet[i]['email']);
      document.write("<br>");
      document.write(deet[i]['job']);
      document.write("<br>");
      document.write(deet[i]['employee_id']);
      document.write("<br>");
      document.write(deet[i]['role']);
      document.write("<br>");

    }
}
ho