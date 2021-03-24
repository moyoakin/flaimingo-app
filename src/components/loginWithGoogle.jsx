// import React from "react";

// import { useFirebase } from "../context/firebaseContext";

// export default function LoginWithGoogle() {
//   const { user, loadingUser, auth } = useFirebase();
//   console.log(user, loadingUser);
//   console.log("the auth" ,auth);
//   var provider = new useFirebase.auth.GoogleAuthProvider();

//   auth?.signInWithPopup(provider)
//   .then(
//     (result) => {
//         let userCredential = result.userCredential
//         console.log(userCredential)
//       }  
   
//   )
//   .catch(
//       (error) => {
//           console.log(error.message)
//           console.log(error.code)
//       }
//   )

  


//   //auth.signInWithEmailAndPassword("flex", "socialMedia");
//   return <div>loadingUser</div>;
// }