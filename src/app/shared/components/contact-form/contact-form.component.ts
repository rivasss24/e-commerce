import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  public contactForm: FormGroup = new FormGroup({})

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(){}

  ngOnInit(): void {
    this.makeForm()
  }

  makeForm(): void {
    this.contactForm = new FormGroup(
      {
        name: new FormControl('', 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16)
        ]),
        lastname: new FormControl('',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(16),
          ]),
          email: new FormControl('', 
          [
            Validators.required, 
            Validators.minLength(5), 
            Validators.pattern(this.emailPattern)
          ]),
      }
    )
  }

  get name() { return this.contactForm.get("name") }
  get lastname() { return this.contactForm.get("lastname") }
  get email() { return this.contactForm.get("email") }

  receiveData(contenido:HTMLElement){
    //alert("data recivida");
    /*
    if (this.contactForm.valid) {
      alert(JSON.stringify({}));
    }
    */
    console.log(contenido);
  }
}
