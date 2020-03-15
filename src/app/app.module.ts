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
    DirectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
