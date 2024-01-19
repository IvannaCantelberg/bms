import { Component, inject } from '@angular/core';
import { AuthStrategyAbstraction } from '../../auth-strategy';
import { AuthWithGoogleService } from '../../auth-with-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-with-google',
  standalone: true,
  imports: [],
  providers: [{ provide: AuthStrategyAbstraction, useExisting: AuthWithGoogleService }],
  templateUrl: './auth-with-google.component.html',
  styleUrl: './auth-with-google.component.scss'
})
export class AuthWithGoogleComponent {
  private authService = inject(AuthStrategyAbstraction);
  private router: Router = inject(Router);

  login() {
    this.authService.signIn()
    this.router.navigate(['/dashboard']);
  }
}
