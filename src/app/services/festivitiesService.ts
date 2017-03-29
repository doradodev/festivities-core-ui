import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Festivity } from '../models/festivitiesModel'

@Injectable()
export class FestivitiesService{

    private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    private apiUrl = "http://localhost:8081/api/festivities/";
    

    constructor(private _http:Http  ){

    }

    getFestivities() : Observable<Festivity[]> {        
         
         return this._http.post(this.apiUrl + 'findAll', this.headers)                        
                         .map((res:Response) => res.json())                        
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }   


}


