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
                resolve({payload:"Email Successfully!"});
              }else{
                resolve({payload:"Please Verifi Your Email"});
              }
            } else {
              reject({payload:"somthing went wronge."});
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if(errorCode.localeCompare("auth/email-already-in-use") === 0){
            reject({payload:"email already registered."});
        }  else {
          reject({payload: errorCode});
        } 

          
        });

    })
}