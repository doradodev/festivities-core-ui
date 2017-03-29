import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InitComponent } from './init.component';
import "rxjs/Rx";

import { FestivityDetailsComponent } from './festivity-details/festivity-details.component';

import {DataScrollerModule} from 'primeng/primeng';
import { FestivitiesService } from './services/festivitiesService';
import { HomePage } from '../app/pages/home.component';

//routes 
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './routes/routes';


//material

import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    FestivityDetailsComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,    
    DataScrollerModule,
    RouterModule.forRoot(APPROUTER),
    MaterialModule.forRoot()
  ],
  providers: [FestivitiesService],
  bootstrap: [InitComponent]
})
export class AppModule { }
