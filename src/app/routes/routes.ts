import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomePage } from '../pages/home.component';

import { UpdateFestivity } from '../pages/update/update.component';


export const APPROUTER:Routes= [
  
    {path:'', component: HomePage},
    {path:'festivityUpdate/:id', component:UpdateFestivity}
    
]

