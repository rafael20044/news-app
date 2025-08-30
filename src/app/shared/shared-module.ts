import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkComponent } from './components/link/link.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { PrincipalNewsComponent } from './components/principal-news/principal-news.component';
import { SelectComponent } from './components/select/select.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserFormComponent } from './components/user-form/user-form.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    LinkComponent,
    ListComponent,
    ModalComponent,
    PrincipalNewsComponent,
    SelectComponent,
    SideBarComponent,
    UserFormComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[InputComponent, ButtonComponent,],
})
export class SharedModule { }
