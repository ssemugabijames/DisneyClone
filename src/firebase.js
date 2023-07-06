import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBaOVFmzCBmZavokw2iB6DLW6XrgyUxILs",
    authDomain: "disneyclone-a32e4.firebaseapp.com",
    projectId: "disneyclone-a32e4",
    storageBucket: "disneyclone-a32e4.appspot.com",
    messagingSenderId: "293933232891",
    appId: "1:293933232891:web:c0909fdaaaaf0c8cd1765e"
  }; 
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const dbConfig = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider,storage };
  export default dbConfig;///global object