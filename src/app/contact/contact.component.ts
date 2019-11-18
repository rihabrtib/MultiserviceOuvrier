import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform =  new FormGroup({
    username : new FormControl(),
    password : new FormControl()
   }
  );

  constructor() { }

  ngOnInit() {
  }

}
