import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http:HttpClient) {}

  get<T>(url:string):Promise<T>{
    return new Promise((resolver, reject)=>{
      this.http.get<T>(url).subscribe({
        next: (data) => resolver(data),
        error: (err) => reject(err)
      });
    });
  }
}
