import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";




export const signupApi = (data)=>{
    console.log(data);
    return new Promise ((resolve , reject) =>{

        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
         
          const user = userCredential.user;
          console.log(user);


          onAuthStateChanged(auth, (user) => {
            if (user) {
         
             sendEmailVerification(user);
              const uid = user.uid;
            } else {
              
            }
          });
          
        })
        .then((emailsVerified) => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              if(user.emailVerified){
                console.log("Email Successfully!");
              }else{
                console.log("Please Verifi Your Email");
              }
            } else {
              console.log("somthing went wronge.");
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if(errorCode.localeCompare("auth/email-already-in-use") === 0){
            console.log("email already registered.");
        }   

          
        });

    })
}