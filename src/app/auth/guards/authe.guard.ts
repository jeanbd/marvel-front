import { CanActivateFn } from '@angular/router';

export const autheGuard: CanActivateFn = (route, state) => {
  return true;
};
