import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ColorComponent } from './color/color.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountComponent } from './home-account/home-account.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErrorComponent } from './error/error.component';
import { InfoComponent } from './info/info.component';

const gtecRoutes : Routes = [
    {path : '', component: AccueilComponent},
    {path : 'cv', component: CvComponent},
    {path : 'cv/:id', component: InfoComponent},
    {path : 'color', component: ColorComponent},
    {path : 'word', component: MsWordComponent},
    {path : 'accounts', component: HomeAccountComponent},
    {path : 'error', component: ErrorComponent},
    {path : '**', redirectTo: 'error'},
]

export const GTEC_ROUTING = RouterModule.forRoot(gtecRoutes);