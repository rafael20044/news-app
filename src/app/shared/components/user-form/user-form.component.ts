import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { v4 as uuid } from 'uuid';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: false,
})
export class UserFormComponent  implements OnInit {

  @Input() isRegister:boolean = true;
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
  ) { }

  ngOnInit() {
    //(this.isRegister) ? console.log('register form') : console.log(' no is register');
    this.textBtn = (this.isRegister) ? 'Register' : 'Update';
  }

  gotToLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    this.userService.createUser({uiid: uuid(), ...this.formGroup.value});

  }
}
