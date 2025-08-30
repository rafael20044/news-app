import { Component, Input, OnInit } from '@angular/core';

type InputType = 'text' | 'password' | 'email' | 'number';
type LabelPlacementType = 'fixed' | 'floating' | 'stacked';
type FillType = 'solid' | 'outline' | ''; 

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent  implements OnInit {

  @Input() type:InputType = 'text'
  @Input()  label:string = '';
  @Input() placeholder:string = '';
  @Input() value:string = '';
  @Input() labelPlacement:LabelPlacementType = 'fixed';
  @Input() fill:FillType = '';
  @Input() helperText:string = '';
  @Input() errorText:string = '';

  constructor() { }

  ngOnInit() {}

}
