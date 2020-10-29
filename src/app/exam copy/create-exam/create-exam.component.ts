import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from 'src/app/service/clientinfo.service';
import { AdminhomeComponent } from 'src/app/adminhome/adminhome.component';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  newExam : any={};
  showTable : boolean = false;
  newQuestion : any={};
  selectedClientAutoId: number;
  clients: any;
  clientDataById: any;
  questions: any;
  showAddButton: boolean = false;
  exam:any={};
  newlyAddedQuestions:any=[];
  buttons=true;

  constructor(
    private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent) {
    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
    this.clients = this.adminhomeComponent.clients;

  }


  ngOnInit(): void {
    this.getClientById();
  }

  getClientById() {
    this.clientInfoService.getClientById(this.selectedClientAutoId).subscribe(data => {
      this.clientDataById = data;
      console.log(data);
    });

  }

  displayTable(){
    this.showTable = !this.showTable;
  //  this.getClientById();
  //  this.newlyAddedQuestions = this.clientDataById.exam.questions;
  }

  onSubmit(){
    console.log(this.newExam);
    this.onAddNewExam();
    this.buttons=false;
  }

  onAddNewExam(){
   // this.newExam.questions=this.questions;
    this.clientInfoService.addExam(this.newExam, this.selectedClientAutoId).subscribe(data=>{
      console.log(data);
    });
    alert('Exam added succesfully! Please add Questions');
    this.showAddButton = true;
    this.getClientById();
  }

  reloadData() {
    this.exam.questions.push(this.newQuestion);
    this.ngOnInit();
  }

  onAddQuestion() {
    this.addQuestion();
    this.reloadData();
  }
  addQuestion() {
    console.log(this.newQuestion);
    this.getClientById();
    this.exam=this.clientDataById.exam;
    this.clientInfoService.addQuestion(this.exam.examAutoId, this.newQuestion).subscribe(data => {
      console.log(data);
      alert("Question added Successfully!")
    });
    
  
    
  // this.questions.push(this.newQuestion);
  //  this.newlyAddedQuestions.push(this.newQuestion);
  //  this.getClientById();
  //  this.questions=this.clientDataById.exam.questions;
  }
 
}
