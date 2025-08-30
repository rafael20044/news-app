import { CanActivateFn, Router } from '@angular/router';
import { StorageProvider } from '../shared/providers/storage-provider';
import { IAuth } from '../interfaces/iauth';
import { Const } from '../const/const';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const storageProvider = new StorageProvider();
  const auth = storageProvider.get<IAuth>(Const.AUTH);
  if(auth){
    router.navigate(['/home']);
    return false;
  }
  return true;
};
