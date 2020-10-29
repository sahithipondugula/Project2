import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/mhire/clients';

  constructor(private http: HttpClient) { }

  getClient(email: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }

  
  createClient(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, client);
  }

  updateClient(email: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${email}`, value);
  }

  deleteClient(email: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${email}`, { responseType: 'text' });
  }
  

  getClientsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  /*
  constructor(private clientService: ClientService) { }
   //***************to get the data from the service, write in component************...
   ngOnInit() 
   {
    this.clientService.getClient(this.email)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  } 
}
//***************to get list of data from the api**************
 ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
    this.getAllReports();
    
  }
  
  public getAllReports(){
    let reps=this.http.get("http://localhost:8080/mhire/interviewProcess");
    reps.subscribe(report=>this.dataSource.data=report as PeriodicElement[] );
  }
  */ 
}
