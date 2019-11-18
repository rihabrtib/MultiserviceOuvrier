import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  registerform =  new FormGroup({
    username : new FormControl(),
    password : new FormControl()
   }
  );
  constructor() { }
  ngOnInit() {
  }
}
