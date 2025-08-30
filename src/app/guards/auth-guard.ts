import { CanActivateFn, Router } from '@angular/router';
import { StorageProvider } from '../shared/providers/storage-provider';
import { Inject } from '@angular/core';
import { Const } from '../const/const';
import { IAuth } from '../interfaces/iauth';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const storageProvider = new StorageProvider();
  const auth = storageProvider.get<IAuth>(Const.AUTH);
  if (!auth) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
