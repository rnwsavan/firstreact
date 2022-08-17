import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";




export const signupApi = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {

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
            if (user.emailVerified) {
              resolve({ payload: "Email Successfully!" });
            } else {
              resolve({ payload: "Please Verifi Your Email" });
            }
          } else {
            reject({ payload: "somthing went wronge." });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          reject({ payload: "email already registered." });
        } else {
          reject({ payload: errorCode });
        }


      });

  })
}

export const ForgotAPI = (data) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, data.email)

    .then((user) => {
      resolve({payload: "Please Check Your Email"})    
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (error.code.localeCompare("auth/user-not-found") === 0) {
          reject({ payload: "user not found" })
        }
        
        reject({payload:errorCode})


      })
  })
}

export const loginApi = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {

    signInWithEmailAndPassword(auth, data.email, data.password)

      .then((user) => {
        if (user.user.emailVerified) {
          resolve({ payload: user.user });
        }
        else {
          reject({ payload: "please verfity your email" });
        }
        // console.log(user);        
      })

      .catch((error) => {
        if (error.code.localeCompare("auth/wrong-password") === 0) {
          reject({ payload: "wrong email or password" })
        }
        else if (error.code.localeCompare("auth/user-not-found") === 0) {
          reject({ payload: "user not found" })
        }
        else {
          reject({ payload: error.code });
        }
        // console.log(error); 
      });

  })
}

export const googleLoginAPI = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        resolve({ payload: user })
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        reject({ payload: errorCode })
      });

  })
}

export const logoutAPI = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then((user) => {
        resolve({ payload: "Logout Successfully" })
        // consol.log("user")
      })
      .catch((error) => {
        reject({ payload: error.code })
      })
  })
}
