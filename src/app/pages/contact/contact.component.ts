import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CreateService } from 'src/app/services/create.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup | any;
  submitted = false;
  image: any;
  filterTerm = 'Contact';

  constructor(
    private createService: CreateService,
    private formBuilder: FormBuilder,
    private listService: ListService
  ) { 
    this.contactForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern("^[0-9]*$")]],
      message: [''],}),

      console.log(this.contactForm);
  }

  get form(): any { return this.contactForm.controls; }

  ngOnInit(): void {
    this.retrieveImg();
  }

  get f(): any { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.postContact();
  }

  sleep(ms: number) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  async send() {
    await this.sleep(1000)
    this.sendEmail()
  }

  private postContact(): void {
    this.createService.submitContact(this.contactForm.value)
      .pipe(first()).subscribe( data => {
      })
    this.contactForm.reset(); 
    this.send()
  }

  private sendEmail(): void {
    this.createService.emailContact(this.contactForm.value)
      .pipe(first()).subscribe( data => {})
  }

  cancel(): void {
    this.contactForm.reset();
  }  

  retrieveImg(): void {
    this.listService.getImage_Video()
      .subscribe(
        data => {
          this.image = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}