import { Component, OnInit } from '@angular/core';

import { Festivity } from '../../models/festivitiesModel';

import { FestivitiesService } from '../../services/festivitiesService';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { DatepickerModule } from 'angular2-material-datepicker'






@Component({
  selector: 'page-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateFestivity{

    festivity: Festivity;
    display:boolean=false;
    value:Date;
    value2:Date;        

    constructor(
                private router:Router,
                private route:ActivatedRoute,
                private service: FestivitiesService
                
    ){ }

    ngOnInit(){      
        
        this.display=true;
        //console.log(+this.route.snapshot.params['id']);

        //this.festivity.id = +this.route.snapshot.params['id'];  

        //console.log("entre a update"+this.festivity.id);
        console.log(this.festivity);
        
        

    }


}

