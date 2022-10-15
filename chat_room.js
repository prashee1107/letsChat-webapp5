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
    document.getElementById("user_name").innerHTML="Welcome "+ user_name;

    function addroom(){
      var room_name= document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"  
      });

      window.location="chat_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chat_page.html";}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}