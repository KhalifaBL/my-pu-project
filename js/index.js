
var numberOfPlumber =0;
var numberOfDelivery =0;
var numberOfBabySitting =0 ;
var numberOfChef =0;
var numberOfCarpenter =0 ;
var numberOfGardener=0;
var numberOfAssembly =0;
var numberOfTVFixing =0;


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
firebase.analytics();


// Reference messages collection
var messagesRef = firebase.database().ref('messages');


  function getJson(){
	  messagesRef.on('value' , gotData , errData);
  }


  function gotData (data){
	var messages = data.val();
	var keys = Object.keys(messages);
	for (var i =0 ; i< keys.length ; i++){
	var k = keys[i];
	var initials = messages[k].initials;
	var name = messages[k].name;
  var company = messages[k].company;
  var locationn = messages[k].locationn;
  var phone = messages[k].phone;
  var speciality = messages[k].speciality;
  var wage = messages[k].wage;

      if (speciality=="Geography") numberOfDelivery++;
      if (speciality=="Mathematics") numberOfPlumber++;
      if (speciality=="Biology") numberOfChef++;
      if (speciality=="Chemistry") numberOfBabySitting++;
      if (speciality=="History") numberOfCarpenter++;
      if (speciality=="French") numberOfGardener++;
      if (speciality=="Physics") numberOfAssembly++;
      if (speciality=="English") numberOfTVFixing++;
	}

      document.getElementById('numberOfPlumber').innerHTML = numberOfPlumber;
      document.getElementById('numberOfChef').innerHTML = numberOfChef;
      document.getElementById('numberOfAssembly').innerHTML = numberOfAssembly;
      document.getElementById('numberOfDelivery').innerHTML = numberOfDelivery;
      document.getElementById('numberOfTVFixing').innerHTML = numberOfTVFixing;
      document.getElementById('numberOfCarpenter').innerHTML = numberOfCarpenter;
      document.getElementById('numberOfBabySitting').innerHTML = numberOfBabySitting;
      document.getElementById('numberOfGardener').innerHTML = numberOfGardener;

document.getElementById("loading").style.display ="none";
  }

  function errData (err){
	console.log(err) ;
  }

getJson();
