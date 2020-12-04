
import {createContext,useState}from 'react'
import firebase from "../firebase/firebase.utils"

const FirebaseAuthContext=createContext();
const [isAuthenticated,setAuthenticated]=useState(false);
const [currentUser,setCurrentUser]=useState();


function AuthContextProvider(props) {
    //useState
    //Firebase Methods/
    // CurrenUser
    
    useEffect=()=>{
        firebase.firebaseAuth.onAuthStateChanged((user)=>{
            console.log("user:",user)
            setCurrentUser(user);
        });
    }


    return (
        <FirebaseAuthContext.Provider value={{currentUser}}>
           {props.children}

        </FirebaseAuthContext.Provider>
    )
}

export default AuthContextProvider;