import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;

  constructor(public afAuth:AngularFireAuth, private afs: AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user: User) => {
        //this.afAuth.currentUser.then(user => console.log(user.displayName))
        console.log(user);
        
        if (user) {
          const currUser: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
          };
          return of(currUser);
        }

        return of(null); 
      })
    )

    /*
    this.afAuth.onAuthStateChanged((user) => {
      if (user){
        console.log(user);
        const currUser: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        };
        console.log(currUser)
        console.log(this.user$)
        this.user$.pipe(
          map(user => console.log('fuck')),
          tap(user => console.log('fuck'))
        )
      } else {
        console.log('muerto');
      }
    })*/
  }

  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch(err) { 
      console.log('Error ->', err);
    }
  }

  isEmailVerified(user:User) {
    return user.emailVerified;
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch(err) { 
      console.log('Error ->', err);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch(err) { 
      console.log('Error ->', err);
    }
  }

  async login(email: string, password: string): Promise<User>  {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    } catch(err) { 
      console.log('Error ->', err);
    }
  }

  async logout(): Promise<void> {
    try {
      console.log('logout');
      await this.afAuth.signOut;
    } catch(err) { 
      console.log('Error ->', err);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch(err) { 
      console.log('Error ->', err);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  } 
}
