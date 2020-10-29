import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamCopyComponent implements OnInit {

  newQuestion: any = {};
  selectedQuestion: any = {};
  selectedClientAutoId: number;
  clients: any;
  clientDataById: any = {};
  selectedExam: any = {};
  showTable: boolean = false;

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
      this.selectedExam = this.clientDataById.exam;
    });

  }

  onSubmit() {
      this.onSubmitUpdatedExam();
     }

  // onSubmitAddExam() {
  //   alert("inside main submit of adding new exam to the client");
  //   this.clientInfoService.addExam(this.selectedExam,this.selectedClientAutoId).subscribe( data=>{
  //     console.log(data);
  //   });
  // }
  onSubmitUpdatedExam() {
    
    this.clientInfoService.updateExam(this.selectedExam, this.selectedExam.examAutoId).subscribe(data => {
      console.log(data);
      alert("Exam Updated Successfully!");
    });

  }
  onAddQuestion() {
    this.addQuestion();
    this.reloadData();
  }
  addQuestion() {
    console.log(this.newQuestion);
    this.clientInfoService.addQuestion(this.selectedExam.examAutoId, this.newQuestion).subscribe(data => {
      console.log(data);
      alert("Question addedd Successfully!");
    });

  }
  reloadData() {
    this.selectedExam.questions.push(this.newQuestion);
    this.ngOnInit();
  }

  displayTable() {
    this.showTable = !this.showTable;
  }

  editQuestion(questionAutoId){
    for(var questionIndex=0 ; questionIndex<this.selectedExam.questions.length ; questionIndex++){
      if(questionAutoId == this.selectedExam.questions[questionIndex].questionAutoId) {
        this.selectedQuestion=this.selectedExam.questions[questionIndex];
      }

    }
  }
  onUpdateQuestion() {
    this.updateQuestion();
  }

  updateQuestion() {
    console.log(this.selectedQuestion);
    this.clientInfoService.updateQuestion(this.selectedQuestion , this.selectedQuestion.questionAutoId).subscribe(data=>{
      console.log(data);
      alert("Question Updated Successfully!");
    });
  }
}
