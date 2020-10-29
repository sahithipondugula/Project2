import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent 
//implements OnInit
 {
  // showmodal:boolean;
  // selectedProject:any;

  // modules = [{
  //   project_id:'1',
  //   project_name:'MHire',
  //   fromdate:'2002/12/01',
  //   todate:new Date,
  //   project_description: `Project Description 1...Some quick example text to build on the card title and make up the bulk of
  //   the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
  //  Some quick example text to build on the card title and make up the bulk of the card's content.`,
  //  technology_used:{technology_name:'Automation Testing', tech_descp:`UiPath, Blue Prism, Selenium`},
   
   

  //    }
  //   ,
  //   {
  //     project_id:'2',
  //     project_name:'Muniversity',
  //     fromdate:'2012/03/02',
  //     todate:new Date,
  //     project_description: `Project Description 2...Some quick example text to build on the card title and make up the bulk of
  //     the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
  //    Some quick example text to build on the card title and make up the bulk of the card's content.`,
  //    technology_used:{technology_name:'Java', tech_descp:`core Java, API, SpringBoot`},
     
  
  //      }
     
   
  //  ];
  //   bodyText: string;
  // ngOnInit(): void {
 
  // //this.selectedProject=this.modules;
  // this.viewModal;
  // }
  // get sortData() {
  //   return this.modules.sort((a, b) => {
  //     return <any>new Date(b.fromdate) - <any>new Date(a.fromdate);
  //   });}
  // viewModal(projectID){
  //   this.showmodal=true;
  
  //   for(var i=0;i<this.modules.length;i++){
  //     if(projectID==this.modules[i].project_id){
  //      this.selectedProject=this.modules[i];
      
  //     }

     
  //   }}

  public isCollapsed = -1;
  //public items = ['hire', 'item 2', 'item 3'];
  
  items = [{
    project_id:'1',
    project_name:'MHire',
    fromdate:'2002/12/01',
    todate:new Date,
    project_description: `Project Description 1...Some quick example text to build on the card title and make up the bulk of
    the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
   Some quick example text to build on the card title and make up the bulk of the card's content.`,
   technology_used:{technology_name:'Automation Testing', tech_descp:`UiPath, Blue Prism, Selenium`},
   
   

     }
    ,
    {
      project_id:'2',
      project_name:'Muniversity',
      fromdate:'2012/03/02',
      todate:new Date,
      project_description: `Project Description 2...Some quick example text to build on the card title and make up the bulk of
      the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
     Some quick example text to build on the card title and make up the bulk of the card's content.`,
     technology_used:{technology_name:'Java', tech_descp:`core Java, API, SpringBoot`},
     
  
       }
     
   ,
   {
    project_id:'3',
    project_name:'FIlings',
    fromdate:'2002/12/01',
    todate:new Date,
    project_description: `Project Description 1...Some quick example text to build on the card title and make up the bulk of
    the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
   Some quick example text to build on the card title and make up the bulk of the card's content.`,
   technology_used:{technology_name:'Automation Testing', tech_descp:`UiPath, Blue Prism, Selenium`},
   
   

     }
   ];
}

 
       
      



