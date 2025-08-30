import { Injectable } from '@angular/core';
import { StorageProvider } from '../providers/storage-provider';
import { IUserData } from 'src/app/interfaces/iuser-data';
import { EncryptProvider } from '../providers/encrypt-provider';
import { ToastProvide } from '../providers/toast-provide';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private readonly storage: StorageProvider, 
    private readonly encrypt:EncryptProvider,
    private toast:ToastProvide
  ) { }

  createUser(user: IUserData) {
    user.password = this.encrypt.encryptText(user.password);
    const users:IUserData[] = this.storage.get<IUserData[]>('users') || [];
    let existsUser = users.find(u => u.email === user.email);
    if (existsUser) {
      this.toast.showToast('Email already exists', 3000);
      //throw new Error('user already exists');
    }
    users.push(user);
    this.storage.set('users', users);
    this.toast.showToast('Your account was created', 3000);
  }
}
