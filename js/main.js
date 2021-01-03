
// Initialize Firebase

var firebaseConfig = {
  apiKey: "AIzaSyDOzitDerLSV6qM1n6hPAKYbKMPkyv1Rvc",
  authDomain: "tutorio-website.firebaseapp.com",
  databaseURL: "https://tutorio-website-default-rtdb.firebaseio.com",
  projectId: "tutorio-website",
  storageBucket: "tutorio-website.appspot.com",
  messagingSenderId: "309768233526",
  appId: "1:309768233526:web:6e34ea937a3c6852c02e97",
  measurementId: "G-3H9KYYHCP2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
getJson() ;

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var locationn = getInputVal('locationn');
  var phone = getInputVal('phone');
  var speciality = getInputVal('speciality');
  var wage = getInputVal('wage');

  // Save message
  saveMessage(name, company, locationn, phone,  speciality, wage);

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
function saveMessage(name, company, locationn, phone,  speciality, wage){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    locationn:locationn,
    phone:phone,
    speciality:speciality,
    wage:wage,
  });

  }


  function getJson(){

	  messagesRef.on('value' , gotData , errData);
  }


  function gotData (data){
	var messages = data.val();
	var keys = Object.keys(messages);
	for (var i =0 ; i< keys.length ; i++){
		var k = keys[i];
		var initials = messages[k].initials ;
		var phone = messages[k].phone ;
		console.log(phone);
	}
  }

  function errData (err){
	console.log(err) ;
  }
