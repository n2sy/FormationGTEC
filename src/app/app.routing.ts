import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ColorComponent } from './color/color.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountComponent } from './home-account/home-account.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErrorComponent } from './error/error.component';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';

const gtecRoutes : Routes = [
    {path : '', component: AccueilComponent},
    // {path : 'cv', component: CvComponent, children : [
    {path : 'cv', children : [
        {path : '', component: CvComponent},
        {path : 'add', component: AddComponent},
        {path : ':id', component: InfoComponent},
        {path : 'edit/:id', component: EditComponent}
    ]},
    {path : 'color', component: ColorComponent},
    {path : 'login', component: LoginComponent},
    {path : 'word', component: MsWordComponent},
    {path : 'accounts', component: HomeAccountComponent},
    {path : 'error', component: ErrorComponent},
    {path : '**', redirectTo: 'error'},
]

export const GTEC_ROUTING = RouterModule.forRoot(gtecRoutes);