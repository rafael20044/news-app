import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';
import { INews } from 'src/app/interfaces/inews';
import { LoadProvider } from 'src/app/shared/providers/load-provider';
import { HttpService } from 'src/app/shared/providers/http-service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
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
      this.scrollToTop();
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

  private scrollToTop() {
    this.content.scrollToTop(500);
  }
}
