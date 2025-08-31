import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { v4 as uuid } from 'uuid';
import { ToastProvide } from '../../providers/toast-provide';
import { environment } from 'src/environments/environment.prod';
import { ICountryData } from 'src/app/interfaces/icountry-data';
import { HttpService } from '../../providers/http-service';
import { IAuth } from 'src/app/interfaces/iauth';
import { EncryptProvider } from '../../providers/encrypt-provider';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: false,
})
export class UserFormComponent  implements OnInit {

  @Input() isRegister:boolean = true;
  userAuth:IAuth | null = null;
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
    private readonly http:HttpService,
    private readonly encrypt:EncryptProvider,
  ) { }

  ngOnInit() {
    //(this.isRegister) ? console.log('register form') : console.log(' no is register');
    this.textBtn = (this.isRegister) ? 'Register' : 'Update';
    this.loadCountries();
    if (!this.isRegister) {
      this.loadDataUser();
    }
  }

  gotToLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    (this.isRegister) ? this.registerUser() : this.updateUser();
  }

  private registerUser(){
    if (!this.emailControl.valid || 
        !this.passwordControl.valid || 
        !this.nameControl.valid ||
        !this.lastNameControl.valid || 
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

  private updateUser(){
    if (!this.emailControl.valid || 
        !this.passwordControl.valid ||
        !this.nameControl.valid ||
        !this.lastNameControl.valid || 
        !this.selectControl.valid
      ) {
      this.toastProvider.showToast('Please fill all the fields', 3000, 'warning');
      return;
    }
    if (!this.emailControl.valid) {
      this.toastProvider.showToast('Please enter a valid email', 3000, 'warning');
      return;
    }
    if (this.userAuth) {
      const userUpdate:IAuth = {
        uiid: this.userAuth.uiid,
        ...this.formGroup.value
      }
      this.userService.updateUser(userUpdate);
      this.router.navigate(['/home']);
    }
  }

  private async loadCountries(){
    const url = environment.URL_COUNTRIES;
    this.countries = await this.http.get<ICountryData>(url);
    this.countries.data.sort((a, b) => a.name.localeCompare(b.name))
    //console.log(this.countries);
  }

  private loadDataUser(){
    this.userAuth = this.userService.getUserAuth();
    if (this.userAuth) {
      this.nameControl.setValue(this.userAuth.name);
      this.lastNameControl.setValue(this.userAuth.lastName);
      this.emailControl.setValue(this.userAuth.email);
      this.passwordControl.setValue(this.encrypt.decryptText(this.userAuth.password));
      this.selectControl.setValue(this.userAuth.country);
    }
  }
}
