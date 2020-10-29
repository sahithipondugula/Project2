import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from 'src/app/service/clientinfo.service';
import { AdminhomeComponent } from 'src/app/adminhome/adminhome.component';
import { Projects } from 'src/app/model/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectCopyComponent implements OnInit {

  createProject: any = {};
  selectedClientAutoId: any;

  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent) {

    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
  }

  ngOnInit(): void {
  }


  createNewProject() {
    this.clientInfoService.addProject(this.selectedClientAutoId, this.createProject)
      .subscribe(data => {
        console.log(data);
          alert("project added successfully!");
      });
    console.log(this.createProject);

    

  }
  onSubmitProject() {
    // if (this.createProject.projectId.startsWith(" ") || this.createProject.name.startsWith(" ") ||
    //   this.createProject.projectDescription.startsWith(" ") || this.createProject.active.startsWith(" ")) {
    //   alert("Make sure you are not startingwith spaces");
    // } else {
    // if (this.createProject.active == 0 && this.createProject.active == 1) {
    this.createNewProject();
    // } else {
    //   alert("Please enter '0' or '1' for status");
    // }
    // }

  }
}
