import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

const baseUrl = 'localhost:8000/api'

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) { }

  submitContact(contact: Contact): Observable<any> {
    return this.http.post(`${baseUrl}/contact/`, contact);
  }

  emailContact(contact: Contact): Observable<any> {
    return this.http.post(`${baseUrl}/emailcontact/`, contact);
  }
}
