import { Injectable, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { RegisterPostData, User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth(initializeApp(environment.firebaseConfig));

  constructor() {}

  registerUser(postData: RegisterPostData): Observable<any> {
    return new Observable(observer => {
      createUserWithEmailAndPassword(this.auth, postData.email, postData.password)
        .then(userCredential => {
          // You can handle user information if needed
          observer.next(userCredential.user);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  loginUser(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then(userCredential => {
          observer.next(userCredential.user);
          console.log(userCredential.user);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  // If you need to get user details, you can do it like this:
  // getCurrentUser(): User | string | undefined {
  //   // return this.auth.currentUser ? {
  //   //   email: this.auth.currentUser.email,
  //   //   // Add any other properties you need from the User object
  //   // } : undefined;
  // }

}