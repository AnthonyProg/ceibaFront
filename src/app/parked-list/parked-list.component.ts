import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-parked-list',
  templateUrl: './parked-list.component.html',
  styleUrls: ['./parked-list.component.css']
})
export class ParkedListComponent implements OnInit {

  registrations: Observable<Registration[]>;
  submitted : boolean;
  totalValue : string;
  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {    
    this.reloadData();
  }

  reloadData() {
    this.registrations = this.registrationService.getParked();
  }

  updateRegistration(registration : Registration) {
    this.registrationService.updateRegistration(registration)
      .subscribe(
        data => {
          this.submitted = true;
          this.totalValue = data.toString();
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
