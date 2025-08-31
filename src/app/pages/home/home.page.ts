import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { INews } from 'src/app/interfaces/inews';
import { LoadProvider } from 'src/app/shared/provider/load-provider';
import { HttpService } from 'src/app/shared/providers/http-service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  category:string = '';
  data:INews | null = null;

  constructor(
    private readonly menuCtr:MenuController, 
    private readonly http:HttpService,
    private readonly loading:LoadProvider,
  ) { }

  ngOnInit() {
    this.category = 'Principal news';
  }

  
  getcategory(name:string){
    //console.log(`show name in home page: ${name}`)
    if (name !== this.category) {
      this.category = name;
      this.loadData(name);
      this.loading.showLoading(3000, 'Loading data', 'circles');
    }
    this.closeModal();
  }

  private async loadData(category:string){
    const url = environment.URL_NEWS;
    this.data = await this.http.get<INews>(`${url}&category=${category}`);
    //console.log(this.data);
  }

  private closeModal(){
    this.menuCtr.close('menu');
  }
}
