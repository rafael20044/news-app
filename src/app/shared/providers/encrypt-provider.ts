import { Injectable } from '@angular/core';
import { JSEncrypt } from 'jsencrypt';

@Injectable({
  providedIn: 'root'
})
export class EncryptProvider {
  constructor(){}

  encryptText(text:string){
    const crypt = new JSEncrypt();
    return crypt.encrypt(text).toString();
  }
}
