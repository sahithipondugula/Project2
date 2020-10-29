import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from 'src/app/service/clientinfo.service';
import { AdminhomeComponent } from 'src/app/adminhome/adminhome.component';
import { ActivatedRoute, Router } from '@angular/router';
import{CommonModule } from '@angular/common'
import { FormsModule }from '@angular/forms';import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addnewcasestudy',
  templateUrl: './addnewcasestudy.component.html',
  styleUrls: ['./addnewcasestudy.component.css'],
//exportAs: 'ngForm'
})
export class AddnewcasestudyComponent implements OnInit {
  active;explanationPs;problemStatement;endDate;casestudyName;doneBy;solution;startDate;
  data;casestudyId;addcs:any;
  selectedClientAutoId: number;
  createCaseStudy: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent) {
    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
  }

  ngOnInit(): void {
  }
  createNewCaseStudy() {
    this.clientInfoService.addCaseStudy(this.selectedClientAutoId, this.createCaseStudy)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.story = new Story();
    //this.reloadData();  
    console.log(this.createCaseStudy);
    alert("Case Study added successfully!");
  

  }
  onSubmit() {
    // if (this.createCaseStudy.casestudyId.startsWith(" ") || this.createCaseStudy.casestudyName.startsWith(" ") ||
    //   this.createCaseStudy.problemStatement.startsWith(" ") || this.createCaseStudy.explanationPs.startsWith(" ") ||
    //   this.createCaseStudy.solution.startsWith(" ") || this.createCaseStudy.active.startsWith(" ") ||
    //   this.createCaseStudy.data.startsWith(" ") || this.createCaseStudy.doneBy.startsWith(" ")) {
    //   alert("make sure you are not starting with spaces");
    // } else {
      // this.submitted = !this.submitted;
      // if (this.createCaseStudy.active == 0 || this.createCaseStudy.active == 1) {
        this.createNewCaseStudy();
      // }
      // else {
      //   alert('Status should be either "0" or "1"');
      // }

    // }
  }
  
}
