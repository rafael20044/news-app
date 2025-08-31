import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadProvider {
  constructor(private readonly loadingCtr: LoadingController) { }

  async showLoading(duration:number, message:string, spinner:SpinnerType) {
    const loading = this.loadingCtr.create({
      duration: duration,
      message: message,
      spinner: spinner
    });
    (await loading).present();
  }
}

type SpinnerType = 'bubbles' | 'circles' | 'circular' | 'crescent' | 'dots';
