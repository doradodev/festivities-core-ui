import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Festivity } from '../models/festivitiesModel';

import { FestivitiesService } from '../services/festivitiesService';

import { Router } from '@angular/router';

import {MdDialog, MdDialogConfig,MdDialogRef } from '@angular/material';

import { UpdateFestivity } from '../pages/update/update.component';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePage implements OnInit{

  festivities:Festivity[];

  constructor(
              private festivityService:FestivitiesService,
              private router:Router,
              public dialog:MdDialog,
              public viewContainerRef:ViewContainerRef
              
              
              ) {

  }

ngOnInit(){

console.log("entre a homepage");
   this.festivityService.getFestivities()
                         .subscribe(
                               festivities => this.festivities = festivities, 
                                err => {                                    
                                   console.log(err);
                                });


    }

   updateFestivity(_festivity:Festivity):void{
    //this.router.navigate(['/festivityUpdate', _festivity.id ]);
     let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.height = '300px';
    config.width = '300px';
     let dialogRef = this.dialog.open(UpdateFestivity, config);
    
    dialogRef.componentInstance.festivity = _festivity;
    
    
  }

}
