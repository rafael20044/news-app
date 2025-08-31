import { Component, Input, OnInit } from '@angular/core';
import { IArticle, INews } from 'src/app/interfaces/inews';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,
})
export class CardComponent  implements OnInit {

  @Input() title:string = '';
  @Input() urlImg:string = '';
  @Input() author:string = '';
  @Input() description:string = '';
  @Input() date:string = '';
  @Input() data:IArticle | null  = null;
  isOpenModal:boolean = false;


  constructor() { }

  ngOnInit() {}

  openModal(){
    this.isOpenModal = true;
  }

  closeModal(isClose:boolean){
    this.isOpenModal = isClose;
  }
}
