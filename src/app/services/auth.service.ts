import { Injectable, NgZone } from '@angular/core';
import {
  GoogleAuthProvider,
  Auth,
  signInWithPopup,
  authState,
} from '@angular/fire/auth';
import 'firebase/auth';
import { User } from '../User';
import { Router } from '@angular/router';
import { addDoc, collection, Firestore, setDoc } from '@angular/fire/firestore';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private _currentUser: User;

  get currentUser(): User {
    return this._currentUser;
  }


  constructor(
    public fireAuth: Auth,
    public firestore: Firestore,
    public router: Router,
    public ngZone: NgZone
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    // authState(fireAuth).subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin();
  }

  async AuthLogin() {
    try {
      const result = await signInWithPopup(
        this.fireAuth,
        new GoogleAuthProvider()
      );

      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  async SetUserData(user: User) {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    try {
      const docRef = await addDoc(
        collection(this.firestore, 'users'),
        userData
      );
      setDoc(docRef, { merge: true });
      this.router.navigate(['/tasks']);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  // Sign out
  async SignOut() {
    await this.fireAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getAuthState() {
    return authState(this.fireAuth).pipe(
      tap((user) => {
        if (user) {
          this._currentUser = this.fireAuth.currentUser;
        }
      })
    );
  }
}
