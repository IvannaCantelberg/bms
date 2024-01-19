import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SignOutService } from '../auth/sign-out.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private signOutService = inject(SignOutService);
  private router: Router = inject(Router);

  constructor(){}

   logOut() {
    this.signOutService.signOut().then(() => {
      console.log('Signed out!')
      this.router.navigate(['/welcome']);
    });
   }

}
