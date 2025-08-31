import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from 'src/app/interfaces/inews';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false,
})
export class ModalComponent  implements OnInit {

  @Input() isOpen:boolean = false;
  @Input() data:IArticle | null = null;
  @Output() close = new EventEmitter<boolean>;
  constructor() { }

  ngOnInit() {}

  setClose(){
    this.close.emit(false);
  }
}
