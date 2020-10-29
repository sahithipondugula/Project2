import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { ClientinfoComponent } from '../clientinfo/clientinfo.component';
import { CaseStudies } from '../model/casestudies';

@Component({
  selector: 'app-casestudies',
  templateUrl: './casestudies.component.html',
  styleUrls: ['./casestudies.component.css']
})
export class CasestudiesComponent implements OnInit {
  selectedClientAutoId: any;
  clients: any;
  clientDataById: any;
  selectedCaseStudyId: any;
  selectedCaseStudy: any;
  caseStudy: any = {};
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
    if (this.clientDataById.caseStudy.length == 0) {
      alert("No Case Studies to display!");
    }
  }

  getSelectedCaseStudy(caseStudyId) {
    this.selectedCaseStudyId = caseStudyId;
    for (var i = 0; i < this.clientDataById.caseStudy.length; i++) {
      if (this.selectedCaseStudyId == this.clientDataById.caseStudy[i].casestudyId) {
        this.selectedCaseStudy = this.clientDataById.caseStudy[i];
      }
    }

  }

  createCaseStudy() {
    this.clientDataById.caseStudy.push(this.caseStudy);
    this.clientInfoService.addCaseStudy(this.caseStudy, this.selectedClientAutoId)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.caseStudy = new CaseStudies();

  }

  onSubmit() {
    if (this.selectedCaseStudy.casestudyName.startsWith(" ") ||
      this.selectedCaseStudy.problemStatement.startsWith(" ") || this.selectedCaseStudy.explanationPs.startsWith(" ") ||
      this.selectedCaseStudy.solution.startsWith(" ") || this.selectedCaseStudy.data.startsWith(" ") ||
      this.selectedCaseStudy.doneBy.startsWith(" ")) {
      alert("Make sure you are not starting with Spaces");
    }else{
      if(this.selectedCaseStudy.active==0 || this.selectedCaseStudy.active==1){

        this.submitted = !this.submitted;
        this.updateCaseStudy(this.selectedCaseStudy);
      }
      else{
        alert('Status should be either "0" or "1"');
      }

    }
  }

  deleteCaseStudy() {
    this.selectedCaseStudy.active = 0;
    console.log("status is : " + this.selectedCaseStudy.active);
  }

  updateCaseStudy(selectedCaseStudy) {
    this.clientInfoService.updateCaseStudy(this.selectedCaseStudy.autoId, selectedCaseStudy).subscribe(caseStudyData => {
      alert("case study " + this.selectedCaseStudy.casestudyName + " updated successfully!");
      // console.log(caseStudyData);
    });
  }

}
