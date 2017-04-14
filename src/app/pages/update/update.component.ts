import { Component, OnInit } from '@angular/core';

import { Festivity } from '../../models/festivitiesModel';

import { FestivitiesService } from '../../services/festivitiesService';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { DatepickerModule } from 'angular2-material-datepicker'

import { ConfirmationService, GrowlModule,Message } from 'primeng/primeng';




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
    festivityNew = {
        id :'',
        name:'',
        place:'',
        start:'',
        end:''
        
    };
    msgs: Message[] = [];        

    constructor(
                private router:Router,
                private route:ActivatedRoute,
                private festivityService: FestivitiesService
                
    ){ }

    ngOnInit(){      
        
        this.display=true;
        //console.log(+this.route.snapshot.params['id']);

        //this.festivity.id = +this.route.snapshot.params['id'];  

        //console.log("entre a update"+this.festivity.id);
        console.log(this.festivity);
        
        

    }

    updateFestivity(_festivity:Festivity){

        console.log(_festivity);
        if(_festivity.name == '' || _festivity.place == '' || isNaN(_festivity.start) || isNaN(_festivity.end) ){

                this.msgs = [];
                this.msgs.push({severity:'warn', summary:'Warn Message', detail:'Todos los campos son obligatorios'});
                    
                
        }else{
            this.msgs = [];
            _festivity.id= this.festivity.id;
            console.log(_festivity.id);
            this.festivityService.updateFestivity(_festivity)
                         .subscribe(
                                      result => console.log(result),
                                      err => {                                    
                                      console.log(err);
                                      
                this.msgs.push({severity:'error', summary:'Error Message', detail:'No se pudo Actualizar'});
                                }
                            );
               this.msgs.push({severity:'success', summary:'Success Message', detail:'Se Guardo correctamente'});             


        }

        

    }


}



