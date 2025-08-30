import { Injectable } from '@angular/core';
import { StorageProvider } from '../providers/storage-provider';
import { IUserData } from 'src/app/interfaces/iuser-data';
import { EncryptProvider } from '../providers/encrypt-provider';
import { ToastProvide } from '../providers/toast-provide';
import { Const } from 'src/app/const/const';

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
    const users:IUserData[] = this.getUsers();
    let existsUser = this.findUser(user.email);
    if (existsUser) {
      this.toast.showToast('Email already exists', 3000, 'warning');
      return;
      //throw new Error('user already exists');
    }
    users.push(user);
    this.storage.set(Const.USERS, users);
    this.toast.showToast('Your account was created', 3000, 'primary');
    return user;
  }

  authenticate(email:string, password:string):IUserData | null{
    const user = this.findUser(email); 
    if (!user) {
      this.toast.showToast('Email does not exist', 3000, 'danger');
      return null;
    }
    const match = this.encrypt.match(password, user.password);
    if (!match) {
      this.toast.showToast('Incorrect email or password', 3000, 'danger');
      return null;
    }
    this.storage.set(Const.AUTH, user);
    return user;
  }

  private findUser(email:string): IUserData | null{
    const users:IUserData[] = this.getUsers();
    const user = users.find(u => u.email === email);
    return (user) ? user : null;
  }

  private getUsers():IUserData[]{
    return this.storage.get<IUserData[]>(Const.USERS) || [];
  }
}
