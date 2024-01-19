import { Injectable, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {
  private auth = inject(Auth);

  constructor() { }

  signOut(){
    return signOut(this.auth);
  }
}
