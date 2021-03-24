import React from "react";

import { useFirebase } from "../context/firebaseContext";

export default function CheckIfUserIsLoggedIn() {
  const { user, loadingUser } = useFirebase();
  console.log(user, loadingUser);

  return (
    <div>

    
    <button onClick={useSignOut}>Sign Out</button>
    <button onClick={useGoogleAuth}>Sign in with google</button>
  
  </div>
  )
  
}

export function useGoogleAuth() {
  const { firebaseApp, auth } = useFirebase();
  if (firebaseApp) {
    var provider = new firebaseApp.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      var credential = result.credential;
      console.log(credential);
      
    });
  }
  console.log(provider);
}

export function useSignOut(){
    const {auth } = useFirebase();
    auth.signOut().then(
    () => {
        console.log("signed out")

    }
)
}
