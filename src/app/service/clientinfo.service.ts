import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientinfo } from "../model/clientinfo";
import { CaseStudies } from '../model/casestudies';

@Injectable({
  providedIn: 'root'
})
export class ClientinfoService {
  private baseUrl = 'http://localhost:8090/api';
  constructor(private http: HttpClient) { }

  getAllClient(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/client/all");
  }

  getClientById(clientAutoId): Observable<any> {
    return this.http.get(`${this.baseUrl}/client/${clientAutoId}`);
  }

  addEmployee(employee:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees/save`, employee);
  }

  addStudent( employee :any): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees/student/save`, employee);
  }

  updateClient(clientAutoId: number, ClientDetails: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/client/update/${clientAutoId}`, ClientDetails);
  }

  addProject(clientAutoId: number, newProject): Observable<object> {
    return this.http.post(`${this.baseUrl}/project/save/${clientAutoId}`, newProject);
  }

  getAllTechnologies(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/technology/all");
  }

  addTechnology(newTechnology): Observable<any> {
    return this.http.post(`${this.baseUrl}/technology/save`, newTechnology);
  }
  addCaseStudy(clientAutoId: number, caseStudy): Observable<object> {
    return this.http.post(`${this.baseUrl}/casestudy/save/${clientAutoId}`, caseStudy);
  }
  updateCaseStudy(caseStudyAutoId: number, editedCaseStudy): Observable<any> {
    return this.http.put(`${this.baseUrl}/casestudy/update/${caseStudyAutoId}`, editedCaseStudy);
  }
  updateProject(projectAutoId: number, editedProject): Observable<any> {
    return this.http.put(`${this.baseUrl}//project/technologies/update/${projectAutoId}`, editedProject);
  }

  updateEncyclopedia(encyclopediaAutoId: number, editedEncyclopedia): Observable<any> {
    return this.http.put(`${this.baseUrl}/encyclopedia/update/${encyclopediaAutoId}`, editedEncyclopedia);
  }

  addEncyclopedia(clientAutoId: number, encyclopedia): Observable<object> {
    return this.http.post(`${this.baseUrl}/encyclopedia/save/${clientAutoId}`, encyclopedia);
  }
  addClient(client): Observable<any> {
    return this.http.post(`${this.baseUrl}/client/save`, client);
  }

  postFile(fileToUpload: File): Observable<object> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(`${this.baseUrl}/events/save`, formData);
  }

  updateQuestion(updatedQuestion : object , questionAutoId){
    return this.http.put(`${this.baseUrl}/question/update/${questionAutoId}`, updatedQuestion);
  } 

  addQuestion(examAutoId: number, newQuestion): Observable<object> {
    return this.http.post(`${this.baseUrl}/question/save/${examAutoId}`, newQuestion);
  }

  updateExam(exam : object, examAutoId: number):Observable<any>{
    return this.http.put(`${this.baseUrl}/exam/update/${examAutoId}`, exam);
  }

  addExam(newExam : object , clientAutoId) : Observable<object>{
    return this.http.post(`${this.baseUrl}/exam/save/${clientAutoId}`, newExam);
  }

  addEvent(newEvent : object , clientAutoId) : Observable<object>{
    return this.http.post(`${this.baseUrl}/events/save/${clientAutoId}`, newEvent);
  }

  updateEvent(updatedEvent : object, eventAutoId: number):Observable<any>{
    return this.http.put(`${this.baseUrl}/events/update/${eventAutoId}`, updatedEvent);
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/employees/all");
  }

  getEmployeeById(employeeAutoId:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees/${employeeAutoId}`);
  }

  updateEmployee(updatedEmployee , employeeAutoId: number) : Observable<any>{
    return this.http.put(`${this.baseUrl}/employees/update/${employeeAutoId}`, updatedEmployee);
  }

  getAllPermissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/permission/All");
  }

  getAllProjects() : Observable<any>  {
    return this.http.get(`${this.baseUrl}` + "/project/all");
  }

  updateProjectTeams(updatedProjectTeam ,  projectAutoId : number) : Observable<any> {
    return this.http.put(`${this.baseUrl}/project/employee/update/${projectAutoId}`, updatedProjectTeam);
  }
}
