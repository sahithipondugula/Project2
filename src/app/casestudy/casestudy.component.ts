  import { Component, OnInit, Input } from '@angular/core';
  // import { LessonModalComponent } from '../lesson-modal/lesson-modal.component';
 


  import pptxgen from "pptxgenjs";
 // import * as pptGen from 'pptxgenjs';
  //import pptxgen from 'pptxgenjs';
  @Component({
    selector: 'app-casestudy',
    templateUrl: './casestudy.component.html',
    styleUrls: ['./casestudy.component.css']
  })
  export class CasestudyComponent 
  {
    public isCollapsed = -1;
    //public items = ['hire', 'item 2', 'item 3'];
    
     
    items = [{
      CaseStudyid:1,
      CaseStudy:'MUniversity Analytics',
      CaseStudydate:new Date(),
      Description:`Description:Their000000000000 data centers are located in 14 hypergrowth markets within the U.S., 
      and they run at a greater than 99.99999% uptime. They've established their reputation by serving some 
      big name companies, like FedEx, HomeAway, Whole Foods, AT&T, and more.`,
      Problem: `Problem-As a leading name in the industry, vXchnge had a lot to offer, and they proved themselves with current customers.
       However, they were struggling to attract new eyes to their site. 
      The issue: They werent consistently publishing blog posts on a regular schedule. 
      The average publication schedule consisted of two to three posts per month. 
      As a result their website was severely underperforming. Their April 2018 sessions reached just 1`,
    
    Solution:`Solution:Our content team, including our copywriter, strategist, and account manager, collaborated on creating a new, more in-depth editorial calendar to replace their previous one. 
    The previous editorial calendar included basic information, like one target keyword, a content offer, expected publish date, and not much else. 
    The new editorial calendar was designed to deliver more targeted content. It included all the basic information from the previous version, as well as the following:`
  }
    ,
    {
      CaseStudyid:2,
      CaseStudy:'Mhire Analytics',
      CaseStudydate:new Date(),
      Description:`Description:Their11111111111 data centers are located in 14 hypergrowth markets within the U.S., 
      and they run at a greater than 99.99999% uptime. They've established their reputation by serving some 
      big name companies, like FedEx, HomeAway, Whole Foods, AT&T, and more.`,
      Problem: `Problem-As a leading name in the industry, vXchnge had a lot to offer, and they proved themselves with current customers.
       However, they were struggling to attract new eyes to their site. 
      The issue: They werent consistently publishing blog posts on a regular schedule. 
      The average publication schedule consisted of two to three posts per month. 
      As a result their website was severely underperforming. Their April 2018 sessions reached just 1`,
    
    Solution:`Solution:Our content team, including our copywriter, strategist, and account manager, collaborated on creating a new, more in-depth editorial calendar to replace their previous one. 
    The previous editorial calendar included basic information, like one target keyword, a content offer, expected publish date, and not much else. 
    The new editorial calendar was designed to deliver more targeted content. It included all the basic information from the previous version, as well as the following:`
  },
  {
    CaseStudyid:3,
    CaseStudy:'Filings Analytics',
    CaseStudydate:new Date(),
    Description:`Description:333333333 data centers are located in 14 hypergrowth markets within the U.S., 
    and they run at a greater than 99.99999% uptime. They've established their reputation by serving some 
    big name companies, like FedEx, HomeAway, Whole Foods, AT&T, and more.`,
    Problem: `Problem-As a leading name in the industry, vXchnge had a lot to offer, and they proved themselves with current customers.
     However, they were struggling to attract new eyes to their site. 
    The issue: They werent consistently publishing blog posts on a regular schedule. 
    The average publication schedule consisted of two to three posts per month. 
    As a result their website was severely underperforming. Their April 2018 sessions reached just 1`,
  
  Solution:`Solution:Our content team, including our copywriter, strategist, and account manager, collaborated on creating a new, more in-depth editorial calendar to replace their previous one. 
  The previous editorial calendar included basic information, like one target keyword, a content offer, expected publish date, and not much else. 
  The new editorial calendar was designed to deliver more targeted content. It included all the basic information from the previous version, as well as the following:`
}
     ];

 

//casestyudy27 is correct file
   pres = new pptxgen();
   //slide = this.pres.addSlide();
 

   //000000000000000000000000
  // selectedProject:any;
  // viewModal(projectID){
    //   this.showmodal=true;
    
    //   for(var i=0;i<this.modules.length;i++){
    //     if(projectID==this.modules[i].project_id){
    //      this.selectedProject=this.modules[i];
        
    //     }
  
       
    //   }}
   //0000000000000000
looping(projectID){
  for(var i=0;i<this.items.length;i++){
       if(projectID==this.items[i].CaseStudyid){
    
   
// for(var i=0;i<4;i++)
// {   // var j=this.modules[i].CaseStudyid;
 let slided = this.pres.addSlide();
 let slidep = this.pres.addSlide();
 let slides = this.pres.addSlide();
//   let array=
// [this.modules[0].CaseStudy , this.modules[0].Description, this.modules[0].Problem,
//   this.modules[0].Solution];
//    let textboxText =array[i]; 
 
// let textboxOpts = { x: 1, y: 4, color: "363636" };
// slide.addText(textboxText,textboxOpts);

let textboxTextd =this.items[projectID].Description ;
let textboxOptsd = { x: 1, y: 2, color: "363636" };
slided.addText(textboxTextd,textboxOptsd);

let textboxTextp =this.items[projectID].Problem;
let textboxOptsp = { x: 1, y: 2, color: "363636" };
slidep.addText(textboxTextp,textboxOptsp);

let textboxTexts =this.items[projectID].Solution;
let textboxOptss = { x: 1, y: 2, color: "363636" };
slides.addText(textboxTexts,textboxOptss);
//}
       }}
 //for the second slide
 this.pres.writeFile("Case Study.pptx");}}

// }}

/*   for(var i=0;i<this.modules.length;i++){
      if(projectID==this.modules[i].project_id){
       this.selectedProject=this.modules[i];
      
      }*/
    