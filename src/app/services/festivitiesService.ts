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
    private apiUrl = "http://54.233.177.58:8080/api/festivities/";
    private options = new RequestOptions({ headers: this.headers });
    

    constructor(private _http:Http  ){

    }

    getFestivities() : Observable<Festivity[]> {        
         
         return this._http.post(this.apiUrl + 'findAll', this.headers)                        
                         .map((res:Response) => res.json())                        
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     removeFestivity (id:number): Observable<Festivity[]> {
                
        return this._http.delete(`${this.apiUrl}${id}`) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }

       updateFestivity (_festivity: Festivity): Observable<Festivity[]> {
                    
        return this._http.put(`${this.apiUrl}${_festivity['id']}` , _festivity, this.options)
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }   


}


