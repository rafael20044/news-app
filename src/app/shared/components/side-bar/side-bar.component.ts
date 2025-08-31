import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StorageProvider } from '../../providers/storage-provider';
import { IAuth } from 'src/app/interfaces/iauth';
import { Const } from 'src/app/const/const';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: false,
})
export class SideBarComponent implements OnInit {

  data: IAuth | null = null;
  @Output() category = new EventEmitter<string>;

  constructor(private readonly userService:UserService, private readonly router:Router) { }

  ngOnInit() {
    this.loadUserData();
  }

  private loadUserData() {
    this.data = this.userService.getUserAuth();
  }

  getcategory(name:string){
    this.category.emit(name);
  }

  logOut(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  goToProfile(){
    this.router.navigate(['/profile']);
  }

}
