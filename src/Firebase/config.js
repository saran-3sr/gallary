import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAoJELYatTfdBvbRKpOF9X-GGOGgIjsCXk",
  authDomain: "gallery-app-1-ba91f.firebaseapp.com",
  projectId: "gallery-app-1-ba91f",
  storageBucket: "gallery-app-1-ba91f.appspot.com",
  messagingSenderId: "319075094551",
  appId: "1:319075094551:web:6695d703daa85c338e8c52"
};

// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);


  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();

  export{projectStorage,projectFirestore};