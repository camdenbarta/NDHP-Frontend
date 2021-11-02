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

  getImage_Video(): Observable<any> {
    return this.http.get(`${baseUrl}/image-video`)
  }

  getMember(): Observable<any> {
    return this.http.get(`${baseUrl}/member`)
  }

}
