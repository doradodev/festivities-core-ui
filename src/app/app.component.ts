import { Component , OnInit} from '@angular/core';
import { FestivitiesService } from './services/festivitiesService';
import { Festivity } from './models/festivitiesModel';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'  
})
export class AppComponent{

  

  constructor(private festivityService:FestivitiesService) {

  }

  
  
  
}
