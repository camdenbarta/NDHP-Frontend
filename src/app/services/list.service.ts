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

  getImage(): Observable<any> {
    return this.http.get(`${baseUrl}/img`)
  }

  getVideo(): Observable<any> {
    return this.http.get(`${baseUrl}/vd`)
  }

  getMember(): Observable<any> {
    return this.http.get(`${baseUrl}/member`)
  }

  getNews(): Observable<any> {
    return this.http.get(`${baseUrl}/letter`)
  }

  getPolicy(): Observable<any> {
    return this.http.get(`${baseUrl}/position`)
  }

  getCarousel(): Observable<any> {
    return this.http.get(`${baseUrl}/carousel`)
  }
  
}
