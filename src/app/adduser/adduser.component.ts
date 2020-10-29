import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientinfoService } from '../service/clientinfo.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  keyword = 'name';
  allPermissions: any;
  defaultAdminPermissions:any=[];
  defaultEditorPermissions: any=[];
  defaultStudentPermissions: any=[];
  showClientDropdown: boolean = false;
  showprojectid: boolean = false;
  roles = ['Admin', 'Editor', 'Student'];
  clients: any;
  selectedRole: string;
  selectedClientId: number;
  selectedClientData: any = {};
  selectedProjectAutoId: number;
  showProjects: boolean = false;
  newUser: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService) { }

  ngOnInit(): void {
    this.getAllClients();
    this.getAllPermissions();
  }

  getAllClients() {
    this.clientInfoService.getAllClient().subscribe(data => {
      this.clients = data;
    });
  }

  getAllPermissions() {
    this.clientInfoService.getAllPermissions().subscribe(data => {
      this.allPermissions = data;
      console.log(this.allPermissions);
    });
  }


  // adminPermissions() {
  //   console.log("admin");
  //   for (var i = 0; i < this.allPermissions.length; i++) {
  //     this.defaultAdminPermissions.push(this.allPermissions[i]);
  //   }
    
  // }

  // editorPermissions() {
  //   console.log("editor");
  //   for (var j = 0; j < this.allPermissions.length; j++) {
  //     if (this.allPermissions[j].permission == "Edit Introduction" || this.allPermissions[j].permission == "Edit Culture" ||
  //       this.allPermissions[j].permission == "Edit Encyclopedia" || this.allPermissions[j].permission == "Edit Case Studies" ||
  //       this.allPermissions[j].permission == "Edit Events" || this.allPermissions[j].permission == "Edit Exams" ||
  //       this.allPermissions[j].permission == "Edit Projects" || this.allPermissions[j].permission == "Edit User") {

  //       this.defaultEditorPermissions.push(this.allPermissions[j]);
  //       console.log(this.defaultEditorPermissions);
  //     }
    
  //   }
  // }

  // studentPermissions() {
  //   console.log("student");
  //   for(var k =0;k<this.allPermissions.length;k++){
  //     if (this.allPermissions[k].permission == "View Introduction" || this.allPermissions[k].permission == "View Culture" ||
  //       this.allPermissions[k].permission == "View Encyclopedia" || this.allPermissions[k].permission == "View Case Studies" ||
  //       this.allPermissions[k].permission == "View Events" || this.allPermissions[k].permission == "View Exams" ||
  //       this.allPermissions[k].permission == "View Projects"){
  //         this.defaultStudentPermissions.push(this.allPermissions[k]);
  //       }
  //   }
  // }

  displayClient() {
    this.showClientDropdown = !this.showClientDropdown;
  }
  displayprojects() {
    this.showprojectid = !this.showprojectid;
  }

  //event handler for the select element's change event
  selectChangeHandlerRole(event: any) {
    //update the ui
    this.selectedRole = event.target.value;
    if (this.selectedRole == "student") {
      this.showProjects = true;
      
    }
    else if (this.selectedRole == "admin") {
      this.showProjects = false;
    
    } else {
      this.showProjects = false;
      
    }

  }

  // selectChangeHandlerClient(event: any) {
  //   //update the ui
  //   this.selectedClientId = event.target.value;
  //   if (this.selectedClientId == null) {
  //     alert("Please select client to assign Project");
  //   } else {
  //     this.getClientById();
  //   }

  // }

  getClientById() {
    this.clientInfoService.getClientById(this.selectedClientId).subscribe(data => {
      this.selectedClientData = data;
      console.log(data);
    });
  }

  selectChangeHandlerProject(event: any) {
    if (this.selectedClientId == null) {
      alert("Please select client to see available project");
    } else {
      this.selectedProjectAutoId = event.target.value;

    }

  }

  onSubmit() {
    this.newUser.role = this.selectedRole;
    if (this.selectedRole == null) {
      alert("Please Assign Role to User");
    } else {
      if (this.selectedRole == "admin" || this.selectedRole == "editor") {
        this.addAdminEditor();
      } else {
          this.addStudent();
      }
    }

  }

  addAdminEditor() {

    if(this.selectedRole=="admin"){
    
      this.clientInfoService.addEmployee(this.newUser).subscribe(data => {
        console.log(data);
        alert(this.selectedRole + " Added Successfully with default Permissions!");
      });
      
    }else if(this.selectedRole=="editor"){
    
      this.clientInfoService.addEmployee(this.newUser).subscribe(data => {
        console.log(data);
        alert(this.selectedRole + " Added Successfully with default Permissions!");
      });
     
    }
   
  }

  addStudent() {
    
    this.clientInfoService.addStudent(this.newUser).subscribe(data => {
      console.log(data);
      alert(this.selectedRole + " Added Successfully with default Permissions!");
    });
   
  }
  // ngSelectedClient:any;
  // selectEvent(item) {
  //   // do something with selected item
  //   this.selectedClientData=item;
  //   console.log(this.ngSelectedClient);
  // }

  // onChangeSearch(search: string) {
  //   // fetch remote data from here
  //   // And reassign the 'data' which is binded to 'data' property.
  // }

  // onFocused(e) {
  //   // do something
  // }
  // selectProjectEvent(item){
  //   this.selectedProjectAutoId=item.projAutoId;
  //   console.log(item);
  //   console.log(this.selectedProjectAutoId);
  // }

}
