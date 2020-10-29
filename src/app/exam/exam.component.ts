import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';
import { PagerComponent } from '../pager/pager.component';
import { Observable } from 'rxjs';import { Date1Pipe } from '../date1.pipe';
import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})


export class ExamComponent implements OnInit
 { 

  showmodal:boolean;
selectedCs:any;
  //cards=3;
  modules:any;
  constructor(private router: Router){
    this.pageIndex = 0;
    this.pageSize = 1;
    this.itemCount=5;//page count
    ;}
  ngOnInit(): void {

    this.modules = [
      {eventid:1,
       
        daterow: `The . . . . . decorator allows us to define the pipe name that is globally 
        available for use in any template in the across application.`,//3

        option:[
          'pipeName',
          'pipeDeco','Pipe',
         'None'],
          answer:'0',
          selected: null
        }
        
       
      ,
      {
        eventid:2,
        daterow: `Observables help you manage . . . . . . . . data.`,//2
        option:[
          'synchronous',
          'asynchronous','Both asynchronous & synchronous',
          'None of above'],
          answer:'2',
          selected: null
        
      },
      {
        eventid:3,
        daterow: "Which of the followings are validation directives?",//1
        option:['ng-required',
         'ng-minlength','ng-pattern',
         'All of the above'
      ],
      answer:3,
      selected: null
       
      },
      
      {eventid:4,
       
        daterow: `AngularJS module can be created using ________`,//3

        option:[
         'angular.module();',
          'var myModule = new module();','module.create();',
         '.angular.create();'],
          answer:'0',
          selected: null
        }
        
       
      ,
      
      {
        eventid:5,
        daterow: `AngularJS expressions are written using.`,//1
        option:[
          '{{ expression}}',
          '{expression}','[{expression}]',
          'expression'
        ],answer:0
,selected: null       
      // },
      // {
      //   eventid:2,
      //   daterow: "What is Java?",//2
      //   option:{
      //     option1:'Java1',
      //     option2:'Java2',option3:'Java3',
      //     option4:'java4',
      //     answer:'Java1'
      //   }
        
      // },
      
      // {eventid:1,
       
      //   daterow: "What is Angular?",//3

      //   option:{
      //     option1:'Angular1',
      //     option2:'Angular2',option3:'Angular3',
      //     option4:'Angular4',
      //     answer:'Angular1'
      //   }
        
       
      // },
      // {
      //   eventid:3,
      //   daterow: "Characteristic of dbms?",//1
      //   option:{
      //     option1:'dbms1',
      //     option2:'dbms2',option3:'dbms3',
      //     option4:'dbms4'
      //   }
       
      }
    ]
   
 
  }
  select='no answer yet';
  result;report
//to get total score
  GetScore() {
   this.showmodal=true;
   const ctotal= this.modules.reduce((acc, val) => {
      return acc + (val.answer == val.selected ? 1 : 0);
    }, 0);
    //-----------working to display correct answer----
    console.log(this.modules.reduce((acc, val) => {
      return acc + (val.answer == val.selected ? 1 : 0);
    }, 0));
    //------------------------------------------------

    console.log('Total percentage is :'+(ctotal/this.itemCount)*100)+'%';//working to display percentage
//to display result
    this.result=(ctotal/this.itemCount)*100;
    if(this.result>=50)
    {console.log('pass');
    this.report='pass'
  }
    else{console.log('fail');
    this.report='fail'
  }
  }

//to sort data by date
  get sortData() {
    return this.modules.sort((a, b) => {
      return <any>new Date(a.eventid) - <any>new Date(b.eventid);
    });
  

//  correctans(){
//    if(this.answer==this.modules.option.answer){
//      console.log(this.answer +"...." +this.answer)
//    }
 }
  //to display in modal popup
  // viewModal(csId){
  //   this.showmodal=true;
  //   for(var i=0;i<this.modules.length;i++){
  //     if(csId==this.modules[i].casestudy_id){
  //       this.selectedCs=this.modules[i];
  //     }
    
    
  
    showInfo(tt){
      this.modules = tt;
    //this.router.navigate(['/information', this.modules.eventid]);
    }
  
  _itemCount: number;
  get itemCount() {
    return this._itemCount;
  }
  set itemCount(value) {
    this._itemCount = value;
    this.updatePageCount();
  }

  _pageSize: number;
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = value;
    this.updatePageCount();
  }

  _pageCount: number;
  updatePageCount() {
    this._pageCount = Math.ceil(this.itemCount / this.pageSize);
  }

  _pageIndex: number;
  pageIndexChange = new EventEmitter();
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = value;
    this.pageIndexChange.emit(this.pageIndex);
  }

  get canMoveToNextPage() : boolean {
    return this.pageIndex < this._pageCount - 1 ? true : false;
  }

  get canMoveToPreviousPage() : boolean {
    return this.pageIndex >= 1 ? true : false;
  }

  moveToNextPage() {
    if (this.canMoveToNextPage) {
      this.pageIndex++;
    }
  }

  moveToPreviousPage() {
    if (this.canMoveToPreviousPage) {
      this.pageIndex--;
    }
  }

  moveToLastPage() {
    this.pageIndex = this._pageCount - 1;
  }

  moveToFirstPage() {
    this.pageIndex = 0;
  }



  title = 'materialApp'; 
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}

  


