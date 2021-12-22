// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDTi_Hage4YPunscMewiZFnZOr59lisiMY",
      authDomain: "practicehikaroga.firebaseapp.com",
      databaseURL: "https://practicehikaroga-default-rtdb.firebaseio.com",
      projectId: "practicehikaroga",
      storageBucket: "practicehikaroga.appspot.com",
      messagingSenderId: "776949814531",
      appId: "1:776949814531:web:cec028fd2126166cc04536",
      measurementId: "G-BNTNLZGYSR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}

