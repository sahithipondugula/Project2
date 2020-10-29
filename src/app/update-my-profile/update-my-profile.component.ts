import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';

@Component({
  selector: 'app-update-my-profile',
  templateUrl: './update-my-profile.component.html',
  styleUrls: ['./update-my-profile.component.css'],
  //exportAs: 'ngForm'
})
export class UpdateMyProfileComponent implements OnInit {

  // selectedEmployee : any ={
  //   employeeId:"2363106",
  //   active:"1",
  //   firstName:"Sahithi",
  //   lastName:"Pondugula",
  //   email:"pondugula.sahithi@wu.com",
  //   mobile:"9985499767"
  // };
  selectedEmployee:any={};

  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent) {
   // this.employeesList = this.adminhomeComponent.employeesList;
  //  this.selectedRoleToUpdate = this.adminhomeComponent.roleToEdit.toLowerCase();
  }

  ngOnInit(): void {
    this.getEmployeeById();
  }
getEmployeeById(){
  this.clientInfoService.getEmployeeById(62).subscribe(data=>{
    this.selectedEmployee = data;
    console.log(data);
  });
}
  onSubmit(){
   
    this.clientInfoService.updateEmployee(this.selectedEmployee,this.selectedEmployee.empAutoId).subscribe(data=>{
      alert("Personal Profile Updated!");
      console.log("Updated profile is:"+this.selectedEmployee);
      
    });
  }

}
