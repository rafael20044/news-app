import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../providers/http-service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: false,
})
export class LinkComponent  implements OnInit {

  @Input() name:string = '';
  @Input() url:string = '';
  @Output() category = new EventEmitter<string>;

  constructor(private readonly http:HttpService) { }

  ngOnInit() {}

  goToPage(){
    this.category.emit(this.name);
  }
  
}
