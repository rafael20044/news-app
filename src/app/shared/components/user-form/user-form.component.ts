import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { v4 as uuid } from 'uuid';
import { ToastProvide } from '../../providers/toast-provide';
import { environment } from 'src/environments/environment.prod';
import { ICountryData } from 'src/app/interfaces/icountry-data';
import { HttpService } from '../../providers/http-service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: false,
})
export class UserFormComponent  implements OnInit {

  @Input() isRegister:boolean = true;
  countries:ICountryData | null = null;
  textBtn:string = '';

  nameControl = new FormControl('',[Validators.required,]);
  lastNameControl = new FormControl('', [Validators.required,]);
  emailControl = new FormControl('', [Validators.required, Validators.email,]);
  passwordControl = new FormControl('', Validators.required);
  selectControl = new FormControl('', Validators.required);
  formGroup:FormGroup = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    country: this.selectControl,
  });


  constructor(
    private readonly router:Router, 
    private readonly userService:UserService,
    private readonly toastProvider:ToastProvide,
    private readonly http:HttpService
  ) { }

  ngOnInit() {
    //(this.isRegister) ? console.log('register form') : console.log(' no is register');
    this.textBtn = (this.isRegister) ? 'Register' : 'Update';
    this.loadCountries();
  }

  gotToLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    if (!this.emailControl.valid && 
        !this.passwordControl.valid && 
        !this.nameControl.valid && 
        !this.lastNameControl.valid && 
        !this.selectControl.valid
      ) {
      this.toastProvider.showToast('Please fill all the fields', 3000, 'warning');
      return;
    }
    if (!this.emailControl.valid) {
      this.toastProvider.showToast('Please enter a valid email', 3000, 'warning');
      return;
    }
    const user = this.userService.createUser({uiid: uuid(), ...this.formGroup.value});
    if (user && this.userService.authenticate(user.email, this.formGroup.value.password)) {
      this.router.navigate(['/home']);
    }
  }

    async loadCountries(){
      const url = environment.URL_COUNTRIES;
      this.countries = await this.http.get<ICountryData>(url);
      //console.log(this.countries);
    }
}
