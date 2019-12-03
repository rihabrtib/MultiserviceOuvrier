import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

token = jwt_decode(sessionStorage.getItem('token'))
id = this.token.sub
  constructor( private http:HttpClient) { }

  url='http://localhost:9000/service/addservice/'+this.id;
  
  saveservice(service){
    return this.http.post(this.url, service );
  }
}
