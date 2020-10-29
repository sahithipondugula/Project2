
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class EncylopideaService {


  private baseUrl = 'http://localhost:8080/mhire/clients';

  constructor(private http: HttpClient) { }

  getClient(email: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }

  
  // createClient(client: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}`, client);
  // }

  // updateClient(email: String, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${email}`, value);
  // }

  // deleteClient(email: String): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${email}`, { responseType: 'text' });
  // }
  

  // getClientsList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

  
}

