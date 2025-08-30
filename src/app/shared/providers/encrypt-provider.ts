import { Injectable } from '@angular/core';
import { JSEncrypt } from 'jsencrypt';

@Injectable({
  providedIn: 'root'
})
export class EncryptProvider {

  private crypt = new JSEncrypt();
  constructor(){}

  encryptText(text:string){
    return this.crypt.encrypt(text).toString();
  }

  match(text:string, textEncrypt:string):boolean{
    return this.crypt.decrypt(textEncrypt) === text;
  }
}
