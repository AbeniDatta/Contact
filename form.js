var firebaseConfig = {
    apiKey: "AIzaSyChZgHw903h8HVD8mdP8p8jR9EGlbt6UKg",
    authDomain: "abeni-s-website-5b97c.firebaseapp.com",
    projectId: "abeni-s-website-5b97c",
    storageBucket: "abeni-s-website-5b97c.appspot.com",
    messagingSenderId: "46093674097",
    appId: "1:46093674097:web:cede493fe8bd236d8b9dd0"
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
    db.doc().set({
        first_name: userFirstNameInput,
        last_name: userLastNameInput,
        email: userEmailInput,
        subject: userSubjectInput,
        message: userMessageInput
    })
    .then(function(){
        console.log("Data Saved");
    })
    .catch(function(error){
        console.log("error");
    });
  });
