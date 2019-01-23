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

var feedbacks = firebase.database().ref('RANDO');
setInterval(Récup,105000)
Récup()
function Récup(){
  var i = 0 ;

// 		$("#infos").html("");
// 		feedbacks.once('value').then(function(snapshot){
//       snapshot.forEach(function (singlesnapshot) {
//         var feedback = singlesnapshot.val();
//         $("#infos").append('<div id=div' + ++i + '><h2 id="h1">'+feedback.name+'</h2><ol><li><b>Destination:</b> '+feedback.city+'</li><li><b>Teléphone:</b>'+feedback.phone+'</li><li><b>Groupe: '+feedback.lien+'</b> </li><li><b>Description:</b>'+feedback.message+'<img src="'+feedback.photo+'" alt="">')
//       });
// 		})

// }

$("#infos").html("");
		feedbacks.once('value').then(function(snapshot){
      snapshot.forEach(function (singlesnapshot) {
        var feedback = singlesnapshot.val();
        $("#infos").append('<div class="container"><img src="'+feedback.photo+'" alt="'+feedback.name+'" style="width:100%;"><div class="content"><h1>'+feedback.city+'</h1><p>'+feedback.message+'</p><p>Contact: '+feedback.phone+'</p><p><a href="'+feedback.lien+'"><b>'+feedback.name+'</b></p></div></div><br>')
      });
		})

}


//   <p>Le parc national des îles de Zembra et Zembretta est un site naturel situé au nord-est du golfe de Tunis. Il se compose de l'archipel des îles du même nom.
//     <br>  
//     <a href="https://fr.wikipedia.org/wiki/Parc_national_des_%C3%AEles_de_Zembra_et_Zembretta"> <i class='far fa-arrow-alt-circle-right'></i> Plus d'info</a>
//   </p>
// </div>
// </div>