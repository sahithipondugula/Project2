import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Events } from '../events/events';
import { EventsComponent } from '../events/events.component';
import { Renderer2 } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-eventsnav',
  templateUrl: './eventsnav.component.html',
  styleUrls: ['./eventsnav.component.css']
})
export class EventsnavComponent implements OnInit {

//   showmodal:boolean;
// selectedCs:any;
//   //cards=3;
//   modules:any;
//   ngOnInit(): void {
//     this.modules = [{
     
//      daterow:new Date,
    
//       header:`Header1Header1Header1Header1Header1Header1Header1`,
//       description:'Description1Description1Description1Description1Description1'
  
//        }
//       // ,
//       // {    
 
//       //   daterow:new Date,
       
//       //    header:`Header2Header2Header2Header2Header2`,
//       //    description:'Descrption2Descrption2Descrption2Descrption2Descrption2'
    
//       //  }
//       //  ,
       
//       //  {  
          
//       //    daterow:new Date,
        
//       //     header:`Header32qrqHeader2Header2Header2Header2`,
//       //     description:'Descdgvsdgfdsrption2Descrption2Descrption2Descrption2Descrption2'
     
//       //   }
       
     
//      ];
//   }

//   viewModal(csId){
//     this.showmodal=true;
//     for(var i=0;i<this.modules.length;i++){
//       if(csId==this.modules[i].casestudy_id){
//         this.selectedCs=this.modules[i];
//       }
    
//     }


cards = [
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(36).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(37).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(39).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(40).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg'},
  {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg'},
];

slides: any = [[]];


constructor(private renderer: Renderer2, private route:ActivatedRoute, private _employeeService:ExamService) { }


chunk(arr: any, chunkSize: number) {
  let R = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize) {
    R.push(arr.slice(i, i + chunkSize));
  }
  return R;
}
departid;
employee:Events;
ngOnInit() {
  let eventid=parseInt(this.route.snapshot.paramMap.get('id'));// id declarred in routing module
this.departid=eventid;
this.employee=this._employeeService.getEmployeeid(eventid);
  
  this.slides = this.chunk(this.cards, 3);
}

ngAfterViewInit() {
  const buttons = document.querySelectorAll('.btn-floating');
  buttons.forEach((el: any) => {
    this.renderer.removeClass(el, 'btn-floating');
    this.renderer.addClass(el, 'px-3');
    this.renderer.addClass(el.firstElementChild, 'fa-3x');
  });
}
}