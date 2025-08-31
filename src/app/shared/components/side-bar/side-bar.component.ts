import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../../providers/storage-provider';
import { IAuth } from 'src/app/interfaces/iauth';
import { Const } from 'src/app/const/const';
import { IList } from 'src/app/interfaces/ilist';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: false,
})
export class SideBarComponent implements OnInit {

  data: IAuth | null = null;

  constructor(private readonly storage: StorageProvider) { }

  ngOnInit() {
    this.loadUserData();
  }

  private loadUserData() {
    this.data = this.storage.get<IAuth>(Const.AUTH);
  }

}
