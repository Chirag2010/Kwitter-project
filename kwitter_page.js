//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAJvVdA5htqXbhJFRzhLQUtYEioNTVigvw",
      authDomain: "kwitter-new-18072.firebaseapp.com",
      databaseURL: "https://kwitter-new-18072-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-18072",
      storageBucket: "kwitter-new-18072.appspot.com",
      messagingSenderId: "828894966374",
      appId: "1:828894966374:web:b2d366690997696b26f3a7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
