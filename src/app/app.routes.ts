import { Routes } from '@angular/router';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';


const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['welcome']);

export const routes: Routes = [
 { path: '', redirectTo: 'welcome', pathMatch: 'full' },

 {path: 'welcome',
  loadComponent: () => import('./pages/welcome/welcome.component').then(mod => mod.WelcomeComponent),
  canActivate: [AuthGuard],
  data: { authGuardPipe: redirectLoggedInToHome }
},


 {path: 'dashboard',
  loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent),
  canActivate: [AuthGuard],

  // data: { authGuardPipe: redirectUnauthorizedToHome }


},

 { path: '**', redirectTo: 'welcome', pathMatch: 'full' },

]
