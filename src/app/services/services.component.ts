import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import {ReserveService} from './reserve.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  token: any;
  servicesform=new FormGroup({
    titre : new FormControl(),
    date : new FormControl(),
    decription : new FormControl(),
  });

  public services = [
{
  nom : 'Electricité'
},
{
  nom : 'Rennovation'
},
{
  nom : 'Plomberie'
},
{
  nom : 'Peinture'
},
{
  nom : 'Maconnerie'
},
{
  nom : 'Chauffage'
},
{
  nom : 'Menuiserie'
},
{
  nom : 'Isolation'
}

  ]

  constructor(private service :ReserveService) { }

  ngOnInit() {
  }

addservice(){
this.service.saveservice(this.servicesform.value).subscribe(reponse=>{})

}
}

