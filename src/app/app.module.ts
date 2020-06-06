import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { CustomDirDirective } from './custom-dir.directive';
import { NoImagePipe } from './no-image.pipe';
import { ListePersonneService } from './liste-personne.service';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { HomeAccountComponent } from './home-account/home-account.component';
import { RecrueComponent } from './recrue/recrue.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GTEC_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CardComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DirectComponent,
    MsWordComponent,
    CustomDirDirective,
    NoImagePipe,
    NewAccountComponent,
    AccountComponent,
    HomeAccountComponent,
    RecrueComponent,
    AccueilComponent,
    NavbarComponent,
    ErrorComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GTEC_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
