import { Component, Input, OnInit } from '@angular/core';
import { ICountryData } from 'src/app/interfaces/icountry-data';
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
  countries:ICountryData | null = null;

  constructor(private readonly http:HttpService) { }

  ngOnInit() {
    this.loadCountries();
  }

  async loadCountries(){
    const url = environment.URL_COUNTRIES;
    this.countries = await this.http.get<ICountryData>(url);
    //console.log(this.countries);
  }
}
