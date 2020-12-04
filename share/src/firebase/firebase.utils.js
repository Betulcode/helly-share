import firebase from "firebase/app"
import "firebase/auth"

const devConfig ={
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.PROJECT_ID,
  storageBucket:process.env.STORAGE_BUCKET,
  messagingSenderId:process.env.MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID
};

const prodConfig={}

const config=process.env.NODE_ENV==="development" ? devConfig : prodConfig;

class Firebase{
    constructor(){
        firebase.initializeApp(config)
        this.firebaseAuth= firebase.auth();
    }
    register=(email,password)=>{
      
        this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    
    }
    useGoogleProvider=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({prompt:"select_account"})
        this.firebaseAuth.signInWithPopup(provider)
    }
}

export default new Firebase();