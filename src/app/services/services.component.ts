import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import {ReserveService, Services} from './reserve.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  token: any;
  services: Services[];
  servicesform = new FormGroup({
    titre : new FormControl(),
    date : new FormControl(),
    decription : new FormControl(),
  });
value: any;

  constructor(private service: ReserveService) { }

  ngOnInit() {
    this.getServices();
  }

addservice() {
  const e = document.getElementById('select');
  const option = e['options']
  this.value = option[e['selectedIndex']].value;

  this.service.saveservice(this.value , this.servicesform.value).subscribe(reponse => {} );
}
getServices() {
this.service.getservice().subscribe(res => {
  this.services = res;
});
}
}

