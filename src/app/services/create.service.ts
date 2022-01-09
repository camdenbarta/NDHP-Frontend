import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

const baseUrl = 'https://ndhp.info'

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) { }

  submitContact(contact: Contact): Observable<any> {
    return this.http.post(`${baseUrl}/cont/`, contact);
  }

  emailContact(contact: Contact): Observable<any> {
    return this.http.post(`${baseUrl}/emailcontact/`, contact);
  }
}
