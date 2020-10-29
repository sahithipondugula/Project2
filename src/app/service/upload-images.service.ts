import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  upload(clientAutiId: number, file:FileList, newEvent): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    
      // formData.append('file', file);

      const req = new HttpRequest('POST', `${this.baseUrl}/upload`, file, {
        reportProgress: true,
        responseType: 'json'
      });
      return this.http.request(req);
    
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
