import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';


export class Services {
  constructor(
    public id: number,
    public  titre: string,
    public description: string,

  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

token = jwt_decode(sessionStorage.getItem('token'));
// tslint:disable-next-line: no-string-literal
id = this.token['sub'];
value: any;

constructor( private http: HttpClient) {}


url = 'http://localhost:9000/reservation/reserveClt';
url1 = 'http://localhost:9000/service/allservice';



  saveservice(id: number, service: Services) {

    return this.http.post(this.url + '/' + this.id + '?idserv=' + id , service );
  }
 getservice() {
  return this.http.get<Services[]>(this.url1);
 }
}
