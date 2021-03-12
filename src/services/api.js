import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBNKSEGOJZgZEeZeT99DuZ0IKlv7SvIFC4",
  authDomain: "lucrito-db.firebaseapp.com",
  databaseURL: "https://lucrito-db-default-rtdb.firebaseio.com",
  projectId: "lucrito-db",
  storageBucket: "lucrito-db.appspot.com",
  messagingSenderId: "993812405",
  appId: "1:993812405:web:3d7afd17b655d3e47c83fc",
  measurementId: "G-BEWPRS0D6T"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;