import { Injectable } from '@angular/core';
import { GoogleAuthProvider,Auth,signInWithPopup } from '@angular/fire/auth';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: Auth) {}

  async loginWithGoogle() {
    console.log('object');
    await 
      signInWithPopup(this.fireAuth,new GoogleAuthProvider())
      .then((result) => {
        console.log(result);
      }).catch(error => {console.log(error)});
  }


  async loginWithGoogle2() {
    console.log('object');
    await 
      signInWithPopup(this.fireAuth,new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;


        console.log(token)

        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}



