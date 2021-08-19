var firebaseConfig = {
    apiKey: "AIzaSyBYaSshT-5qPcCmVLLT-AoQzor6QBCqx4g",
    authDomain: "abeni-s-website.firebaseapp.com",
    projectId: "abeni-s-website",
    storageBucket: "abeni-s-website.appspot.com",
    messagingSenderId: "896410888982",
    appId: "1:896410888982:web:9f82f923372f152ef8be37"
};
// Init Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Start grabbing out DOM element
const submitBtn = document.querySelector('#submit');

let userFirstName = document.querySelector('userFirstName');
let userLasttName = document.querySelector('userLastName');
let userEmail = document.querySelector('userEmail');
let userSubject = document.querySelector('userSubject');
let userMessage = document.querySelector('userMessage');

const db= firestore.collection("ContactData");

submitBtn.addEventListener('click',function(){
    let userFirstName = userFirstName.value;
    let userLastName = userLastName.value;
    let userEmail = userEmail.value;
    let userSubject = userSubject.value;
    let userMessage = userMessage.value;

    //Access the Database Collection
    db.doc()
    .set({
        first_name: userFirstName,
        last_name: userLastName,
        email: userEmail,
        subject: userSubject,
        message: userMessage
    })
    .then(function(){
        console.log("Data Saved");
    })
    .catch(function(error){
        console.log("error");
    });
});
