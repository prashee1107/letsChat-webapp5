// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html";
}

