import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
