import { Component, inject } from '@angular/core';
import { AuthStrategyAbstraction } from '../auth-strategy';
import { AuthWithCredentialsService } from '../auth-with-credentials.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
   providers: [{ provide: AuthStrategyAbstraction, useExisting: AuthWithCredentialsService }],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthStrategyAbstraction);

  login(){
   throw new Error('Method not implemented.');
  }
}
