import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { ProvidersComponent } from '../auth/providers/providers.component';
import { Auth, user } from '@angular/fire/auth';
import { loggedIn } from '@angular/fire/auth-guard';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [LoginComponent, ProvidersComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private auth = inject(Auth);
  private router: Router = inject(Router);

   ngOnInit() {
    loggedIn(user(this.auth))
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((user) => {
      if(!user) return;

      console.log('Signed In!');
      this.router.navigate(['/dashboard']);
    });


   }
}
