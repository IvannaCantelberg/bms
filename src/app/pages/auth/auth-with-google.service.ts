import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';
import { AuthStrategyAbstraction } from './auth-strategy';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class AuthWithGoogleService implements  AuthStrategyAbstraction {
  private auth: Auth = inject(Auth);
  private provider = new GoogleAuthProvider();

  constructor() {
  }

  signIn() {
    return signInWithPopup(this.auth, this.provider).then((result) => {
              const  credential = GoogleAuthProvider.credentialFromResult(result);
              return  credential;
      })

  }
}
