import { Injectable } from '@angular/core';
import { AuthStrategyAbstraction } from './auth-strategy';

@Injectable({
  providedIn: 'root'
})
export class AuthWithCredentialsService implements AuthStrategyAbstraction{

  constructor() {
  }

  signIn() {
    return new Promise(()=>{});
  }
}
