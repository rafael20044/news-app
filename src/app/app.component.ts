import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform:Platform) {
    this.initializeApp();
  }

  private async initializeApp() {
    await this.platform.ready();
    this.configureStatusBar();
  }

  private async configureStatusBar(){
    this.configureStatusBar();
    if (this.platform.is('capacitor')) {
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.show();
    }
  }
}
