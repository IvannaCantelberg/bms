import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Auth, user } from '@angular/fire/auth';
import { loggedIn } from '@angular/fire/auth-guard';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router: Router = inject(Router);

  loggedIn(user(auth))
    .pipe(takeUntilDestroyed())
    .subscribe((user) => {
      if(!user) {
        console.log('Signed Out!   authGuardGuard');
        router.navigate(['/welcome']);
        return;
      }

      console.log('Signed In!');
      router.navigate(['/dashboard']);
    })

  return true;
};
