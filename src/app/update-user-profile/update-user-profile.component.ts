import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {

  employeesList: any;
  listOfAdmins: any = [];
  listOfEditors: any = [];
  listOfStudents: any = [];
  selectedEmployeeAutoId: any;
  selectedRoleToUpdate: any;
  listOfEmployeesBasedOnRole: any = [];
  selectedEmployee: any;
  showDetails: boolean = false;
  admin: boolean;
  editor: boolean;
  student: boolean;
  allExistingPermissions: any;
  permissionTypes: any = ["View Pages", "Add Pages", "Delete Pages", "Edit Pages"];
  typeOfPermissions: any = "-Select type of Permissions-";
  viewTypePermissions: any = [];
  addTypePermissions: any = [];
  editTypePermissions: any = [];
  deleteTypePermissions: any = [];
  dropdownPermissionsToBeDisplayedForSelecting: any = [];
  selectedPermissionBeforeAddingToTable: any = [];
  showNewPermissions: boolean = false;
  permissionsArrayAfterUpdating: any = [];
  allPermissions: any;
  viewPermissions = [];
  editPermissions = [];
  addPermissions = [];
  deletePermissions = [];
  displayPermissionsTable: boolean = false;
  roles = ["admin", "editor", "student"];
  selectedEmployeeRole: string;
  
  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent) {
    this.employeesList = this.adminhomeComponent.employeesList;
    this.selectedRoleToUpdate = this.adminhomeComponent.roleToEdit.toLowerCase();
  }

  ngOnInit(): void {
    console.log("List of employees is: " + this.employeesList);
    console.log(this.selectedRoleToUpdate);
  
    this.getEmployeesBasedOnRole();
    this.getAllExistingPermissions();

  }
  secondDropdown: boolean = false;
  selectedType(type) {
    this.typeOfPermissions = type;
    this.secondDropdown = true;
    console.log("---------------");
    if (this.typeOfPermissions == "View Pages") {
      this.dropdownPermissionsToBeDisplayedForSelecting = [];
      for (var i = 0; i < this.allExistingPermissions.length; i++) {
        if (this.allExistingPermissions[i].permission == "View Introduction" || this.allExistingPermissions[i].permission == "View Culture" ||
          this.allExistingPermissions[i].permission == "View Encyclopedia" || this.allExistingPermissions[i].permission == "View Exams" ||
          this.allExistingPermissions[i].permission == "View Case Studies" || this.allExistingPermissions[i].permission == "View Projects" ||
          this.allExistingPermissions[i].permission == "View Events" || this.allExistingPermissions[i].permission == "View User") {
          this.dropdownPermissionsToBeDisplayedForSelecting.push(this.allExistingPermissions[i]);
        }
        console.log(this.dropdownPermissionsToBeDisplayedForSelecting);
      }
    } else if (this.typeOfPermissions == "Add Pages") {
      this.dropdownPermissionsToBeDisplayedForSelecting = [];
      for (var i = 0; i < this.allExistingPermissions.length; i++) {
        if (this.allExistingPermissions[i].permission == "Add University" || this.allExistingPermissions[i].permission == "Add New User") {

          this.dropdownPermissionsToBeDisplayedForSelecting.push(this.allExistingPermissions[i]);
        }
        console.log(this.dropdownPermissionsToBeDisplayedForSelecting);
      }
    } else if (this.typeOfPermissions == "Edit Pages") {
      this.dropdownPermissionsToBeDisplayedForSelecting = [];
      for (var i = 0; i < this.allExistingPermissions.length; i++) {
        if (this.allExistingPermissions[i].permission == "Edit Introduction" || this.allExistingPermissions[i].permission == "Edit Culture" ||
          this.allExistingPermissions[i].permission == "Edit Encyclopedia" || this.allExistingPermissions[i].permission == "Edit Exams" ||
          this.allExistingPermissions[i].permission == "Edit Case Studies" || this.allExistingPermissions[i].permission == "Edit Projects" ||
          this.allExistingPermissions[i].permission == "Edit Events" || this.allExistingPermissions[i].permission == "Edit User") {

          this.dropdownPermissionsToBeDisplayedForSelecting.push(this.allExistingPermissions[i]);
        }
        console.log(this.dropdownPermissionsToBeDisplayedForSelecting);
      }
    } else if (this.typeOfPermissions == "Delete Pages") {
      this.dropdownPermissionsToBeDisplayedForSelecting = [];
      for (var i = 0; i < this.allExistingPermissions.length; i++) {
        if (this.allExistingPermissions[i].permission == "Delete User" || this.allExistingPermissions[i].permission == "Delete University") {

          this.dropdownPermissionsToBeDisplayedForSelecting.push(this.allExistingPermissions[i]);
        }
        console.log(this.dropdownPermissionsToBeDisplayedForSelecting);

      }
    }
    console.log("+++++++++++++++++++");

  }

  getselectedPermission(permissionAutoId) {
    for (var i = 0; i < this.allExistingPermissions.length; i++) {
      if (this.allExistingPermissions[i].pmsAutoId == permissionAutoId)
        this.selectedPermissionBeforeAddingToTable.push(this.allExistingPermissions[i]);
      //this.allPermissions.push(this.allExistingPermissions[i]);
    }

    this.showNewPermissions = true;

  }

  onSubmitNewPermissions() {
    
    for (var i = 0; i < this.selectedPermissionBeforeAddingToTable.length; i++) {
      this.allPermissions.push(this.selectedPermissionBeforeAddingToTable[i]);
         }

  }

  getAllExistingPermissions() {
    this.clientInfoService.getAllPermissions().subscribe(data => {
      this.allExistingPermissions = data;
      console.log(data);
    });
    for (var i = 0; i < this.allExistingPermissions.length; i++) {
      if (this.allExistingPermissions[i].permission == "View Introduction" || this.allExistingPermissions[i].permission == "View Culture" ||
        this.allExistingPermissions[i].permission == "View Encyclopedia" || this.allExistingPermissions[i].permission == "View Exams" ||
        this.allExistingPermissions[i].permission == "View Case Studies" || this.allExistingPermissions[i].permission == "View Projects" ||
        this.allExistingPermissions[i].permission == "View Events" || this.allExistingPermissions[i].permission == "View User") {

        this.viewTypePermissions.push(this.allExistingPermissions[i]);

      } else if (this.allExistingPermissions[i].permission == "Add Introduction" || this.allExistingPermissions[i].permission == "Add Culture" ||
        this.allExistingPermissions[i].permission == "Add Encyclopedia" || this.allExistingPermissions[i].permission == "Add Exams" ||
        this.allExistingPermissions[i].permission == "Add Case Studies" || this.allExistingPermissions[i].permission == "Add Projects" ||
        this.allExistingPermissions[i].permission == "Add Events" || this.allExistingPermissions[i].permission == "Add User") {

        this.addTypePermissions.push(this.allExistingPermissions[i]);

      } else if (this.allExistingPermissions[i].permission == "Edit Introduction" || this.allExistingPermissions[i].permission == "Edit Culture" ||
        this.allExistingPermissions[i].permission == "Edit Encyclopedia" || this.allExistingPermissions[i].permission == "Edit Exams" ||
        this.allExistingPermissions[i].permission == "Edit Case Studies" || this.allExistingPermissions[i].permission == "Edit Projects" ||
        this.allExistingPermissions[i].permission == "Edit Events" || this.allExistingPermissions[i].permission == "Edit User") {

        this.editTypePermissions.push(this.allExistingPermissions[i]);

      } else if (this.allExistingPermissions[i].permission == "Delete User" || this.allExistingPermissions[i].permission == "Delete University") {
        this.deleteTypePermissions.push(this.allExistingPermissions[i]);
      }
    }
  }


  selectChangeHandlerForAdmins(empAutoId,email) {
    this.selectedEmployeeAutoId = empAutoId;
    this.selectedEmail=email;
    console.log(this.selectedEmployeeAutoId);
    this.getSelectedEmployeeData();
    this.showDetails = true;
  }

  getEmployeesBasedOnRole() {

    for (var i = 0; i < this.employeesList.length; i++) {
      if (this.employeesList[i].role == this.selectedRoleToUpdate) {
        this.listOfEmployeesBasedOnRole.push(this.employeesList[i]);
        console.log(this.listOfEmployeesBasedOnRole);
      }

    }

  }
  selectChangeHandlerRole(event) {
    this.selectedEmployeeRole = event.target.value;
  }

selectedEmail:any="-select Employee-";
  getSelectedEmployeeData() {
    this.clientInfoService.getEmployeeById(this.selectedEmployeeAutoId).subscribe(data => {
      this.selectedEmployee = data;
     // this.selectedEmail=this.selectedEmployee.email;
      console.log(data);
    });
    this.allPermissions = this.selectedEmployee.permissions;
    console.log("permissions are : " + this.selectedEmployee.permissions);  
  }

  getSelectedRole(role) {
    this.selectedRoleToUpdate = role;
    this.selectedEmployee.role = this.selectedRoleToUpdate;
    console.log(this.selectedRoleToUpdate);
  }
 

  getPermissions() {
    this.allPermissions = this.selectedEmployee.permissions;
    this.displayPermissionsTable = !this.displayPermissionsTable;
    console.log(this.allPermissions);

  }


  deleteSelectedPermissions(permissionAutoId) {

    this.allPermissions = this.allPermissions.filter(m => m.pmsAutoId != permissionAutoId);
    console.log(this.allPermissions);
 ;
  }

  resetPopup(){
    this.secondDropdown=false;
    this.selectedPermissionBeforeAddingToTable=[];
  }
  onSubmit() {
    this.selectedEmployee.permissions = this.allPermissions;
    this.clientInfoService.updateEmployee(this.selectedEmployee, this.selectedEmployeeAutoId).subscribe(data => {
      console.log(data);
      alert("Profile Updated Successfully!");
    });
    this.showDetails=false;
    this.displayPermissionsTable = false;

  }
}
