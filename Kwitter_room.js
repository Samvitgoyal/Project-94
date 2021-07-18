var firebaseConfig = {
    apiKey: "AIzaSyBwasYmqAyxYtptEuSNBztcfpk4GrHLIoo",
    authDomain: "kwitter-schoolversion.firebaseapp.com",
    databaseURL: "https://kwitter-schoolversion-default-rtdb.firebaseio.com",
    projectId: "kwitter-schoolversion",
    storageBucket: "kwitter-schoolversion.appspot.com",
    messagingSenderId: "5234330492",
    appId: "1:5234330492:web:2eb2051535ff7e766ef2f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();