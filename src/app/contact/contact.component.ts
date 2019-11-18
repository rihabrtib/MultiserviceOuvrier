import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {ContactService} from './contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform:FormGroup;
  submitted = false;  

  constructor(private service:ContactService) { }

  ngOnInit() {
   // this.submitted=true;
    this.contactform=new FormGroup({
      name: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
      email: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
      phone: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
      message: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    })
  }
addcontact(){
  this.service.savecontact(this.contactform.value).subscribe(reponse => { })
  this.contactform=null;
  //this.submitted=true;
  console.log(this.contactform.value);

}
}
