import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
<div class="row" *ngFor="let item of modules; let i = index;">
  <div class="card text-white bg-secondary mb-3">
    <div class="card-header" style="color:black;"   class="form-control" [(ngModel)]="modules[i].casestudyid">CaseStudy{{modules[i].casestudyid}} </div>
    <div class="card-body">
      <h5 class="card-title">{{modules[i].namecase}}  </h5>
      <p class="card-text"><input type="text"  class="form-control" [(ngModel)]="modules[i].casestudyid"value="{{modules[i].casestudyid}}" disabled>
      </p>
    </div>
    <button type="button" (click)="showmodal=true" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      View case study
    </button>
    <div class="modal fade" [ngClass]="{'show':showmodal}" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <!-- <div class="modal-dialog" style="width: 100%;" role="document"> -->
      <div class="modal-dialog modal-dialog-scrollable" style="width: 100%;" role="document"  >
        <div class="modal-content" >
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal"(click)="showmodal=false"  aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div style="color: black; " class="modal-body" class="form-control" [(ngModel)]="modules[i].casestudyid"  >
            <table >
            <tr><h2>Problem</h2>
            <p>{{modules[i].problem}}
           </p></tr>
          <tr><h2>Solution</h2><p>
            {{modules[i].solution}}
          </p></tr>
        <tr><h2>result</h2><p>
          Some quick example text to build on the card title and make up the bulk of
         </p></tr>
          </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="showmodal=false" data-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
        </div>
      </div>
    </div>
  </div>
</div>*/
}
