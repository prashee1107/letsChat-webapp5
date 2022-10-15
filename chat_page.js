var firebaseConfig = {
    apiKey: "AIzaSyCWm_VoIkMBqA109GfiTLST_NOKSl3H9G8",
    authDomain: "letschat-web-app-86f33.firebaseapp.com",
    databaseURL: "https://letschat-web-app-86f33-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-86f33",
    storageBucket: "letschat-web-app-86f33.appspot.com",
    messagingSenderId: "833327235583",
    appId: "1:833327235583:web:a116d2af4321f162c667ca"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name= localStorage.getItem("user_name");
var room_name= localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
 }

 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
 console.log(message_data);
 name = message_data["name"];
 message= message_data["message"];
 like = message_data["like"];

 name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
 message_tag="<h4 >"+message+"</h4>";
 like_button="<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>Like : "+like+"</button>";
 row= name_tag+ message_tag + like_button;
 document.getElementById("output").innerHTML+=row;
document.getElementById("msg").value="";
//End code
} });  }); }
getData();

function updatelike(message_id){
  button_id= message_id;
  likes= document.getElementById(button_id).value;
  updated_likes = Number(likes)+1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
  like: updated_likes 
  });
}


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}