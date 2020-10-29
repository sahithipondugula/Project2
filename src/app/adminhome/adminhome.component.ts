import { Component, OnInit, Output } from '@angular/core';
import { ClientinfoService } from '../../app/service/clientinfo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientinfo } from '../model/clientinfo';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  clients: Observable<Clientinfo[]>;
  selectedClientId : number;
  showWelcome : boolean = true;
  roles :any =["Admin","Editor","Student"];
  roleToEdit:any;
  employeesList:any;

  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService) { 

  }


  ngOnInit(): void {
    this.roleToEdit="";
    this.getAllClients();
    this.getAllEmployees();
  }
  getAllClients() {
    this.clientInfoService.getAllClient().subscribe(data => {
      this.clients = data;
    });
  }
  getClientDetails(selectedClientAutoId){
    this.selectedClientId = selectedClientAutoId;
    alert("selected client id is :"+ this.selectedClientId);
    this.showWelcome=false;
    this.router.navigate(["/clientinfo"]);
      }
    
      navigateToAddNewUniversity(){
        this.showWelcome=false;
        this.router.navigate(["/addnewuniversity"]);
      }
      navigateToAddNewUser(){
        this.showWelcome=false;
        this.router.navigate(["/addnewuser"]);
      }

      navigateToUpdateMyProfile(){
        this.showWelcome=false;
        this.router.navigate(["/update-my-profile"]);
      }
     
      navigateToProjectTeam(){
        this.showWelcome=false;
        this.router.navigate(["/project-team"]);
      }
    
      navigateToExam(){
        this.showWelcome=false;
        this.router.navigate(["/exam"]);
      }
      onSelectRole(role){
        this.roleToEdit=role;
        this.showWelcome=false;
        this.router.navigate(["/update-user-profile"]);
      }

      getAllEmployees(){
        this.clientInfoService.getAllEmployees().subscribe(data => {
          this.employeesList = data;
          console.log(this.employeesList);
        });
      }

}
