import { Component, OnInit } from '@angular/core';

import { Festivity } from '../models/festivitiesModel';

import { FestivitiesService } from '../services/festivitiesService';


@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePage implements OnInit{

  festivities:Festivity[];

  constructor(private festivityService:FestivitiesService) {

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

}
