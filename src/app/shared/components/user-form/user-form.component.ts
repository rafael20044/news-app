import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: false,
})
export class UserFormComponent  implements OnInit {

  @Input() isRegister:boolean = true;
  textBtn:string = '';

  constructor(private readonly router:Router) { }

  ngOnInit() {
    (this.isRegister) ? console.log('register form') : console.log(' no is register');
    this.textBtn = (this.isRegister) ? 'Register' : 'Update';
  }

  gotToLogin(){
    this.router.navigate(['/login']);
  }
}
