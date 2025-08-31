import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastProvide } from 'src/app/shared/providers/toast-provide';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  emailControl:FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl:FormControl = new FormControl('', [Validators.required]);
  formGroup:FormGroup = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  constructor(
    private readonly router:Router, 
    private readonly toast:ToastProvide,
    private readonly userService:UserService
  ) { }

  ngOnInit() {
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  login(){
    if (!this.formGroup.valid) {
      this.toast.showToast('Please fill in all required fields', 3000 , 'warning');
      return;
    }
    const user = this.userService.authenticate(this.formGroup.value.email, this.formGroup.value.password);
    if (user) {
      this.router.navigate(['/home']);
    }
  }
}
