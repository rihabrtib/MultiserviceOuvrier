import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {InscritService} from './inscrit.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  submitted = false;  
  registerform =  new FormGroup({
    username : new FormControl(),
    adresse:new FormControl(),
    tel :new FormControl(),
    email:new FormControl(),
    password : new FormControl(),

   }
  );
  constructor( private service :InscritService) { }
  ngOnInit() {
  }

  registre(){
this.service.saveclient(this.registerform.value).subscribe(reponse=>{})
console.log(this.registerform.value);
this.registerform=null;
  }
}
