import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getAbout(): Observable<any> {
    return this.http.get(`${baseUrl}/about`)
  }
/*
  about2(): Observable<any> {
    return this.http.get(`${baseUrl}/about2`)
  }

  about3(): Observable<any> {
    return this.http.get(`${baseUrl}/about3`)
  }

  about4(): Observable<any> {
    return this.http.get(`${baseUrl}/about4`)
  }

  about5(): Observable<any> {
    return this.http.get(`${baseUrl}/about5`)
  }

  about6(): Observable<any> {
    return this.http.get(`${baseUrl}/about6`)
  }
*/
  getImage_Video(): Observable<any> {
    return this.http.get(`${baseUrl}/image-video`)
  }

}
