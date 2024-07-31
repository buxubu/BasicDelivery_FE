import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const locolData = localStorage.getItem('access-token');
  if (locolData != 'null') {
    return true;
  } else {
    return router.navigate(['/login-user']);
  }
};
