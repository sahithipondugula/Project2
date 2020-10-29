import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Projects } from "../model/projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  selectedClientAutoId: number;
  clients: any;
  clientDataById: any;
  projects: any;
  selectedProjectId: number;
  addTechnology: boolean = false;
  addedTechnology: any;
  showAddTechnology: boolean = false;
  selectedProject: any;
  showTechnologies: boolean = false;
  allTechnologies: any;
  newTechnology: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent) {
    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
    this.clients = this.adminhomeComponent.clients;
  }

  ngOnInit(): void {
    this.getClientById();
  }
  getClientById() {
    this.clientInfoService.getClientById(this.selectedClientAutoId).subscribe(data => {
      this.clientDataById = data;
      // console.log(data);

    });

  }

  getAllProjectsOfClient() {
    this.getClientById();
    if (this.clientDataById.project.length == 0) {
      alert("No Projects added under this University");
    } else {
      this.projects = this.clientDataById.project;
    }
  }

  getProjectById(projectId) {
    this.selectedProjectId = projectId;
    for (var i = 0; i < this.clientDataById.project.length; i++) {
      if (this.selectedProjectId == this.clientDataById.project[i].projectId) {
        this.selectedProject = this.clientDataById.project[i];
      }
    }

  }

  displayTechnologies() {
    this.showTechnologies = !this.showTechnologies;
  }

  onSubmitProject() {
    // if (this.selectedProject.projectId.startsWith(" ") || this.selectedProject.name.startsWith(" ") ||
    //   this.selectedProject.projectDescription.startsWith(" ") || this.selectedProject.active.startsWith(" ")) {
    //   alert("Make sure you are not startingwith spaces");
    // } else {
    //   if (this.selectedProject.active == 0 && this.selectedProject.active == 1) {
        this.updateProject();
    //   } else {
    //     alert("Please enter '0' or '1' for status");
    //   }
    // }
  }
  updateProject() {

    this.clientInfoService.updateProject(this.selectedProject.projAutoId, this.selectedProject).subscribe(data => {
      console.log(data);
      alert(this.selectedProject.name + " Project Updated Successfully!");
    });

  }

  deleteProject() {
    this.clientDataById.active = 0;
    this.clientInfoService.updateClient(this.selectedClientAutoId, this.clientDataById).subscribe(data => { });
    alert(this.clientDataById.active);
  }

  getAllTechnologies() {
    this.clientInfoService.getAllTechnologies().subscribe(data => {
      this.allTechnologies = data;
      // console.log(this.allTechnologies);
    });
  }

  addTechnologyToProject() {
    this.showAddTechnology = !this.showAddTechnology;
    this.getAllTechnologies();
  }
  displayAddTechnology() {
    this.addTechnology = !this.addTechnology;
  }

  onSubmitNewTechnology() {
    // if (this.newTechnology.technologyId.startsWith("  ") || this.newTechnology.technologyName.startsWith(" ") ||
    //   this.newTechnology.technologyDescription.startsWith(" ")) {
      this.onAddNewTechnology();
    // } else {
    //   alert("Make sure you are not starting with spaces");
    // }
  }

  onAddNewTechnology() {
    this.clientInfoService.addTechnology(this.newTechnology).subscribe(data => {
      console.log(data);
      alert("New Technology added! You can select it from dropdown");

    });
    this.addTechnology = !this.addTechnology;
    // console.log("added technology is  :" + this.newTechnology);
    this.getAllTechnologies();
  }

  addtoProject(technologyId) {
    for (var i = 0; i < this.allTechnologies.length; i++) {
      if (technologyId == this.allTechnologies[i].technologyId) {
        this.addedTechnology = this.allTechnologies[i];
      }
    }
    this.selectedProject.technologies.push(this.addedTechnology);
  }
}
