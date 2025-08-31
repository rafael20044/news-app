import { Component, Input, OnInit } from '@angular/core';
import { ICountryData, IData } from 'src/app/interfaces/icountry-data';
import { HttpService } from '../../providers/http-service';
import { environment } from 'src/environments/environment.prod';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent  implements OnInit {

  @Input() label:string = '';
  @Input() control:FormControl = new FormControl();
  @Input() value:string = '';
  @Input() countries:ICountryData | null = null;

  countriesSort:IData[] | null = null;

  constructor() { }

  ngOnInit() {}
}
