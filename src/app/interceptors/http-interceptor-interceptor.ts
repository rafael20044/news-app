import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('newsapi.org')) {
    const apiKey = environment.API_KEY;
    const modifidReq = req.clone({
      setHeaders:{
        'X-Api-Key': apiKey
      }
    });
    return next(modifidReq);
  }
  return next(req);
};
