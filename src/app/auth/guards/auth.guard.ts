import { inject } from '@angular/core';
import { CanMatchFn, CanActivateFn, Router,  } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { tap } from 'rxjs';

// export const authGuard: CanMatchFn = () => {
  
//   const authService = inject(AuthService);
//   const router = inject(Router)

//   authService.checkAuth()
//   .pipe(
//     tap(isAuthenticated => {

//       if(!isAuthenticated) router.navigate(['/log-in'])
//     })
//   )
  

//   return true;
// };

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router)

  const isLogged= authService.checkAuth()
  .pipe(
    tap(isAuthenticated => {
      if(!isAuthenticated) router.navigate(['/home'])
    })
  );

  return isLogged;
};