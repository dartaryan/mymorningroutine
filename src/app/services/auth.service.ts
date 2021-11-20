import { Injectable, NgZone } from '@angular/core';
import {
  GoogleAuthProvider,
  Auth,
  signInWithPopup,
  authState,
  FacebookAuthProvider,
  GithubAuthProvider,
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
  ) {}

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  MicrosoftAuth() {
    return this.AuthLogin('fb');
  }
  GithubAuth() {
    return this.AuthLogin(new GithubAuthProvider());
  }

  async AuthLogin(currentProvider: any) {
    try {
      const result = await signInWithPopup(this.fireAuth, currentProvider);
      console.log("-----------------result: ",result)
      console.log("-----------------result.user: ",result.user)
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  async SetUserData(user: User) {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.screenName,
      photoURL: user.photoURL,
    };

    try {
      console.log(user);
      // const docRef = await addDoc(
      //   collection(this.firestore, 'users'),
      //   userData
      // );
      // setDoc(docRef, { merge: true });
      this.router.navigate(['/tasks']);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  // Sign out
  async SignOut() {
    await this.fireAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
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



