import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url = 'http://localhost:8080/checkin';

  constructor(private http: HttpClient) { }

  createRegistration(employee: Object): Observable<Object> {
    return this.http.post(`${this.url}`, employee);
  }
}
