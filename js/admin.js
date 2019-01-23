// Initialize Firebase
var config = {
    apiKey: "AIzaSyARqa-uMjWssJAtvVeBVAgTLIGQX1msAoE",
    authDomain: "contactform-2b1bc.firebaseapp.com",
    databaseURL: "https://contactform-2b1bc.firebaseio.com",
    projectId: "contactform-2b1bc",
    storageBucket: "contactform-2b1bc.appspot.com",
    messagingSenderId: "247212784766"
  };
  firebase.initializeApp(config);

var feedbacks = firebase.database().ref('messages');
setInterval(Récup,105000)
Récup()
function Récup(){
		$("#feedbacks").html("");
		feedbacks.once('value').then(function(snapshot){
			snapshot.forEach(Dde);
		})

}


function Dde(singlesnapshot){
	var feedback = singlesnapshot.val();
	$("#feedbacks").append("<tr><td>"+feedback.city+"</td><td>"+ feedback.email+"</td><td>"+ feedback.phone+"</td><td>"+ feedback.name+"</td><td>"+ feedback.message+"</td></tr>")

}
