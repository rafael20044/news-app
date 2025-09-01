import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from 'src/app/interfaces/inews';
import { Browser } from '@capacitor/browser';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false,
})
export class ModalComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Input() data: IArticle | null = null;
  @Output() close = new EventEmitter<boolean>;
  constructor(private readonly platform: Platform) { }

  ngOnInit() { }

  setClose() {
    this.close.emit(false);
  }

  async abrirNavegador() {
    if (this.platform.is('android') && this.data) {
      await Browser.open({
        url: this.data?.url,
        windowName: '_system',
        presentationStyle: 'fullscreen'
      });
    }
  }
}
