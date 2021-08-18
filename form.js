var firebaseConfig = {
    apiKey: "AIzaSyC2nPu96SzCXNsa1qAsnFfCFSd-c6Gzk8E",
    authDomain: "abeni-s-website-16b08.firebaseapp.com",
    projectId: "abeni-s-website-16b08",
    storageBucket: "abeni-s-website-16b08.appspot.com",
    messagingSenderId: "900391950239",
    appId: "1:900391950239:web:d55f305abdff0f0694cfaa"
  };
  // Init Firebase
  firebase.initializeApp(firebaseConfig);
  var firestone = firebase.firestore();

  // Start grabbing out DOM element
  const submitBtn = document.querySelector('#submit');

  let userFirstName = document.querySelector('#userFirstName');
  let userLasttName = document.querySelector('#userLastName');
  let userEmail = document.querySelector('#userEmail');
  let userSubject = document.querySelector('#userSubject');
  let userMessage = document.querySelector('#userMessage');

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
