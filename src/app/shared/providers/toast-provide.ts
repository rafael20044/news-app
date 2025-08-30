import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastProvide {

  constructor(private toast:ToastController){}

  async showToast(message:string, duration:number = 2000, color:'danger' | 'warning' | 'primary'){
    const toast = await this.toast.create({
      message: message,
      duration: duration,
      position: 'bottom',
      color: color,
    });
    toast.present();
  }
}
