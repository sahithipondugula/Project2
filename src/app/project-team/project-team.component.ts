import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';

@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.css']
})
export class ProjectTeamComponent implements OnInit {

  allProjectsList: any;
  selectedProjectName: any = "-select project-";
  allProjectTeamsList: any;
  allEmployees: any;
  selectedTeamAutoId: number;
  selectedProjectTeam: any = [];
  showTeamTable:boolean=false;
  newTeamMember:any={};
  selectedProject:any={};

  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService,
    private adminhomeComponent: AdminhomeComponent) {
    // this.employeesList = this.adminhomeComponent.employeesList;
    //  this.selectedRoleToUpdate = this.adminhomeComponent.roleToEdit.toLowerCase();
  }


  ngOnInit(): void {
    this.getAllProjects();
    this.getallEmployees();
  }

  getAllProjects() {
    this.clientInfoService.getAllProjects().subscribe(data => {
      this.allProjectsList = data;
      console.log(data);
    });
  }
  keyword="name";
  selectedProjectData:any={};
  selectProjectEvent(item) {
    // do something with selected item
   this.selectedProjectData = item;
   console.log(this.selectedProjectData);
   this.selectedProjectTeam=this.selectedProjectData.employees;
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

  getallEmployees() {
    this.clientInfoService.getAllEmployees().subscribe(data => {
      this.allEmployees = data;
      console.log(data);
    })
  }
 
  showTeam(){
this.showTeamTable=!this.showTeamTable;
  }
  deleteSelectedTeamMember(employeeAutoId){
    this.selectedProjectTeam= this.selectedProjectTeam.filter(m => m.empAutoId != employeeAutoId);
    console.log(this.selectedProjectTeam);
  }
  addEmployeeToTeam(employeeAutoId){
    for(var i=0;i<this.allEmployees.length;i++){
      if(employeeAutoId==this.allEmployees[i].empAutoId){
        this.newTeamMember=(this.allEmployees[i]);
      }
    }
    this.selectedProjectTeam.push(this.newTeamMember);
  }

  // getAllProjectTeams() {
  //   this.clientInfoService.getAllProjectTeams().subscribe(data => {
  //     this.allProjectTeamsList = data;
  //     console.log(data);
  //   });
  // }
  onSubmit(){
    this.selectedProjectData.employees=this.selectedProjectTeam;
    this.clientInfoService.updateProjectTeams(this.selectedProjectData,this.selectedProjectData.projAutoId).subscribe(data=>{
      console.log(data);
      alert(this.selectedProjectData.name + " Updated Successfully!");
    });
  }
}
