import { Component, Input, OnInit, Output } from '@angular/core';
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
  @Output() data:any[] = [];

  constructor(private readonly http:HttpService) { }

  ngOnInit() {}

  goToPage(){
    
  }

}
