import { Component, OnInit, Output } from '@angular/core';
import { ClientinfoService } from '../../app/service/clientinfo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientinfo } from '../model/clientinfo';
import { Observable } from 'rxjs';
//import $ from 'jquery';
import { AdminhomeComponent } from "../adminhome/adminhome.component";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.css'],

})
export class ClientinfoComponent implements OnInit {
  clientDataById: any;
  selectedClientAutoId: number;
  submitted: boolean = false;
  clients: any;
  admin=false;
  editor=true;
  student=false;



  constructor(
    private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent
  ) {
    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
    this.clients = this.adminhomeComponent.clients;

  }

  ngOnInit(): void {

    this.getClientById();

  }

  navigateToExam(){
    if(this.clientDataById.exam!=null){
      this.router.navigate(['/exam']);
    }else{
      alert("No Existing Exam, Please Add!");
      this.router.navigate(['/newExam']);
    }
  }

  getClientById() {
    this.clientInfoService.getClientById(this.selectedClientAutoId).subscribe(data => {
      this.clientDataById = data;
      console.log(data);

    });

  }
  onSubmit() {
    this.submitted = !this.submitted;
    // if (this.clientDataById.about.startsWith(" ") || this.clientDataById.culture.startsWith(" ")) {
    //   alert("Make sure you are not starting with Spaces");
    // }
    // else {
      this.updateClient();
    // }
  }
  onSubmitContact(){
  //   if (this.clientDataById.clientId.startsWith(" ") || this.clientDataById.name.startsWith(" ") ||
  //   this.clientDataById.address.startsWith(" ") || this.clientDataById.city.startsWith(" ") ||
  //   this.clientDataById.state.startsWith(" ") || this.clientDataById.country.startsWith(" ") ||
  //   this.clientDataById.phone.startsWith(" ") || this.clientDataById.active.startsWith(" ")) {

  //     alert("Make sure you are not starting with Spaces");
  // }
  // else{
    this.submitted=!this.submitted;
    this.updateClient();
  // }
  }
  updateClient() {
  
    this.clientInfoService.updateClient(this.selectedClientAutoId, this.clientDataById).subscribe(data => {
      console.log(data);
      alert("Updated Successfully!");
    });

  }

  // navigateToExam(){
  //   this.router.navigate(['/exam']);
  // }
}
