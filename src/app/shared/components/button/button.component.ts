import { Component, Input, OnInit } from '@angular/core';

type ShapeType = 'round' | '';
type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent  implements OnInit {

  @Input() text:string = '';
  @Input() shape:ShapeType = '';
  @Input() type:ButtonType = 'button';
  @Input() disabled:boolean = false;

  constructor() { }

  ngOnInit() {}

}
