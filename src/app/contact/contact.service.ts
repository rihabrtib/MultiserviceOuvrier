import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
URL='http://localhost:9090/contact/add';

savecontact(contact){

  return this.http.post(this.URL,contact);
}
}
