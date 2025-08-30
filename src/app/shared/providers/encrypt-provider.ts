import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EncryptProvider {

  private secretKey = environment.SECRET_KEY;

  constructor() {}

  encryptText(text: string) {
    return CryptoJS.AES.encrypt(text, this.secretKey).toString();
  }

  decryptText(encryptedText: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedText, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  match(text: string, textEncrypt: string): boolean {
    return this.decryptText(textEncrypt) === text;
  }
}
