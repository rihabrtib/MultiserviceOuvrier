import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscritService {

  constructor(private http:HttpClient) { }
  url='http://localhost:9000/user/add';

saveclient(client){
return this.http.post(this.url,client);
}
}
