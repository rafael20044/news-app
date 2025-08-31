import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http-service';
import { IArticle, INews } from 'src/app/interfaces/inews';
import { environment } from 'src/environments/environment.prod';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-principal-news',
  templateUrl: './principal-news.component.html',
  styleUrls: ['./principal-news.component.scss'],
  standalone: false,
})
export class PrincipalNewsComponent  implements OnInit {
  
  data:INews | null = null; 

  constructor(private readonly http:HttpService, private readonly loadingCtr:LoadingController) { }

  ngOnInit() {
    if (!this.data) {
      this.showLoading();
    }
    this.loadPrincipalNews();
  }

  async loadPrincipalNews(){
    const url = environment.URL_NEWS;
    this.data = await this.http.get<INews>(url);
    //console.log(this.data);
  }

  async showLoading(){
    const loading = this.loadingCtr.create({
      duration: 3000,
      message: 'Loading data',
      spinner: 'circles'
    });
    (await loading).present();
  }

  getInfo(index:number): IArticle | null{
    if (this.data) {
      return this.data.articles[index];
    }
    return null;
  }
}
