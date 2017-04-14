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

import { UpdateFestivity } from '../app/pages/update/update.component'

//routes 
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './routes/routes';


//material

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { DatepickerModule } from 'angular2-material-datepicker';

//primeNg
import { DialogModule } from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService, GrowlModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    FestivityDetailsComponent,
    HomePage,
    UpdateFestivity
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,    
    DataScrollerModule,
    RouterModule.forRoot(APPROUTER),
    MaterialModule.forRoot(),
    DatepickerModule,
    DialogModule,
    CalendarModule,
    ConfirmDialogModule,
    GrowlModule
    
  ],
  providers: [FestivitiesService, ConfirmationService],
  bootstrap: [InitComponent]
})
export class AppModule { }
