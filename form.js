const firebaseConfig = {
  apiKey: "AIzaSyChZgHw903h8HVD8mdP8p8jR9EGlbt6UKg",
  authDomain: "abeni-s-website-5b97c.firebaseapp.com",
  projectId: "abeni-s-website-5b97c",
  storageBucket: "abeni-s-website-5b97c.appspot.com",
  messagingSenderId: "46093674097",
  appId: "1:46093674097:web:cede493fe8bd236d8b9dd0"
};
// Init Firebase
firebase.initializeApp(firebaseConfig);

//Reference for form collection(3)
let formMessage = firebase.database().ref('ContactData');

//listen for submit event//(1)
document
  .getElementById('my-form')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let firstname = document.querySelector('#userFirstName').value;
  let lastname = document.querySelector('#userLastName').value;
  let email = document.querySelector('#userEmail').value;
  let subject = document.querySelector('#serSubject').value;
  let message = document.querySelector('#userMessage').value;

  //send message values
  sendMessage(firstname, lastname, email, subject, message);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('my-form').reset();
}

//Send Message to Firebase(4)

function sendMessage(firstname, lastname, email, subject, message) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    First_Name: firstname,
    Last_Name: lastname,
    email: email,
    subject: subject
    message: message
  });
}
