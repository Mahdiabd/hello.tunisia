
  // Reference messages collection
  var messagesRef = firebase.database().ref('RANDO');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var photo = getInputVal('photo');
    var name = getInputVal('name');
    var city = getInputVal('city');
    var lien = getInputVal('lien');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
   
  
    // Save message
    saveMessage(photo, name, city, lien, phone, message);
  
    //alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },5000);
  
    // EARSE CONTACT FORM
    document.getElementById('contactForm').reset();
  }
  
  // CALL VALUE
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(photo, name, city, lien, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        photo:photo,
      name: name,
      city:city,
      lien:lien,
      phone:phone,
      message:message
      
    });
  }
  
// // Get a reference to the database service
// var database = firebase.database();

// //import data
// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     photo:photo,
//     name: name,
//       city:city,
//       email:email,
//       phone:phone,
      
//   });
// }


  