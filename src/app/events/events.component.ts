import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogComponent } from '../dialog/dialog.component';
import {MatTableDataSource} from '@angular/material/table';
//import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';import { Date1Pipe } from '../date1.pipe';
//import {  MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import{PagerComponent} from '../pager/pager.component'
import { Events } from './events';
import { ExamService } from '../exam.service';
// export interface Card {
//   CREATE_TS: string;
//   Key1: string;
//   Key2: string;
// }

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  //cards=3;
  modules:any;
  pageIndex: number;
  pageSize: number;
  constructor(private router: Router, private _employeeService:ExamService){
    this.pageIndex = 0;
    this.pageSize = 10
    ;}
    employee:Events[];
  ngOnInit(): void {

   this.employee=this._employeeService.getEmployee();
  
  
  }
  showInfo(eventid:number){
this.router.navigate(['/information', eventid ])

  }
//to sort data by date
  // get sortData() {
  //   return this.employee.sort((a, b) => {
  //     return <any>new Date(b.daterow) - <any>new Date(a.daterow);
  //   });
   
  // }


  
    // showInfo(tt){
    //   //this.modules = tt;
    //   this.router.navigate(['/information', this.modules.eventid]);
    // }
  }