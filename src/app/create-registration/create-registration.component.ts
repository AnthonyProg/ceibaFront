import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent implements OnInit {

  registration: Registration = new Registration();
  submitted = false;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.registration = new Registration();
  }

  save() {
    this.registrationService.createRegistration(this.registration)
      .subscribe(data => console.log(data), error => console.log(error));
    this.registration = new Registration();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
