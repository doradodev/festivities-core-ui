import { Component, OnInit } from '@angular/core';

import { Festivity } from '../../models/festivitiesModel';

import { FestivitiesService } from '../../services/festivitiesService';

import { Router, ActivatedRoute, Params } from '@angular/router';

import {MdDialog} from '@angular/material';




@Component({
  selector: 'page-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateFestivity{

    festivity: Festivity;    

    constructor(
                private router:Router,
                private route:ActivatedRoute,
                private service: FestivitiesService,
                public dialog:MdDialog
    ){ }

    ngOnInit(){      
        
        console.log(+this.route.snapshot.params['id']);

        this.festivity.id = +this.route.snapshot.params['id'];  

        console.log("entre a update"+this.festivity.id);

        
        

    }


}

