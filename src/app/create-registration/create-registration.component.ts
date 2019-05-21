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

  registration: Registration;
  domainVehicleType : Vehicle;
  submitted : boolean;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.registration = new Registration();
    this.domainVehicleType = new Vehicle()
    this.registration.domainVehicleType = this.domainVehicleType;
  }

  save() {
    this.registrationService.createRegistration(this.registration)
      .subscribe(data => console.log(data), error => console.log(error));    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
