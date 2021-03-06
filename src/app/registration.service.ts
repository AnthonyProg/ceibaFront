import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url = 'http://localhost:8080/checkin';

  private urlParked = 'http://localhost:8080/parked';

  private urlCheckOut = 'http://localhost:8080/checkout';

  constructor(private http: HttpClient) { }

  createRegistration(registration: Object): Observable<Object> {
    return this.http.post(`${this.url}`, registration);
  }

  updateRegistration(registration: Object): Observable<Object> {
    return this.http.post(`${this.urlCheckOut}`, registration);
  }

  getParked(): Observable<any>{
    return this.http.get(`${this.urlParked}`);
  }
}
