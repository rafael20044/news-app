import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: false,
})
export class LinkComponent  implements OnInit {

  @Input() name:string = '';
  @Input() url:string = '';

  constructor(private readonly router:Router) { }

  ngOnInit() {}

  goToPage(){
    this.router.navigate([this.url]);
  }

}
