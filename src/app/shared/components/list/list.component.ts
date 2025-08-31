import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from 'src/app/interfaces/ilist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,
})
export class ListComponent  implements OnInit {

  @Output() category = new EventEmitter<string>;

  listLinks: string[] = [
    'Principal news',
    'business', 
    'entertainment', 
    'general', 
    'health', 
    'science', 
    'sports',
    'technology',
  ];

  constructor() { }

  ngOnInit() {}

  
  getcategory(name:string){
    //console.log(name)
    this.category.emit(name);
  }

}
