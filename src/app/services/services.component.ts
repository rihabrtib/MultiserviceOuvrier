import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesform=new FormGroup({
    titre : new FormControl(),
    date : new FormControl(),
    decription : new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

}
