import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { ClientinfoComponent } from '../clientinfo/clientinfo.component';

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {
  selectedClientAutoId: any;
  clients: any;
  clientDataById: any;
  selectedEncyclopediaId: any;
  selectedEncyclopedia: any;
  newEncyclopedia: any = {};
  submitted = false;
  // newCaseStudy: CaseStudies[];

  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent, private clientInfoComponent: ClientinfoComponent) {
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
    if(this.clientDataById.encyclopedia.length == 0){
      alert("Nothing to display, Please add one");
    }
  }

  getSelectedEncyclopedia(encyclopediaId) {
    this.selectedEncyclopediaId = encyclopediaId;
    for (var i = 0; i < this.clientDataById.encyclopedia.length; i++) {
      if (this.selectedEncyclopediaId == this.clientDataById.encyclopedia[i].encyclopedia_id) {
        this.selectedEncyclopedia = this.clientDataById.encyclopedia[i];
      }
    }

  }

  // createEncyclopedia() {
  //   this.clientDataById.encyclopedia.push(this.newEncyclopedia);
  //   this.clientInfoService.addCaseStudy(this.newEncyclopedia, this.selectedClientAutoId)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   // this.caseStudy = new CaseStudies();

  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.createEncyclopedia();
  // }

  deleteCaseStudy() {
    this.selectedEncyclopedia.active = 0;
    console.log("status is : " + this.selectedEncyclopedia.active);
  }

  updateEncyclopedia(selectedEncyclopedia) {
    this.clientInfoService.updateEncyclopedia(this.selectedEncyclopedia.encyclopedia_auto_id, selectedEncyclopedia).subscribe(caseStudyData => {
      alert("Encyclopedia " + this.selectedEncyclopedia.encyclopedia_id + " updated successfully!");
      // console.log(caseStudyData);
    });
  }
}
