// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBOhfy9AuZQojANo04ByHsW_wAs5LCLcGc",
    authDomain: "login-ab9d8.firebaseapp.com",
    databaseURL: "https://login-ab9d8.firebaseio.com",
    projectId: "login-ab9d8",
    storageBucket: "login-ab9d8.appspot.com",
    messagingSenderId: "1026963264161",
    appId: "1:1026963264161:web:e2028349d45e3f547996e0",
    measurementId: "G-C53PYQ8YJT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

//refernece 
var messageRef=firebase.database.ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}