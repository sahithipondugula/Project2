
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { EventsComponent } from './events/events.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { CultureComponent } from './culture/culture.component';
import { EncyloComponent } from './encylo/encylo.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MuniversityHomeComponent } from './muniversity-home/muniversity-home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EventsnavComponent } from './eventsnav/eventsnav.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ExamttestComponent } from './examttest/examttest.component';
import { MloginComponent } from './mlogin/mlogin.component';
//Admin COmponents
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { AdduniversityComponent } from './adduniversity/adduniversity.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CreateEventComponent } from './adminEvent/create-event/create-event.component';
import { AddnewcasestudyComponent } from './casestudies/addnewcasestudy/addnewcasestudy.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { AddEncyclopediaComponent } from './encyclopedia/add-encyclopedia/add-encyclopedia.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { CreateExamComponent } from './exam copy/create-exam/create-exam.component';
import { ProjectTeamComponent } from './project-team/project-team.component';
import { UpdateMyProfileComponent } from './update-my-profile/update-my-profile.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponentCopy } from './adminEvent/events.component';
import { ExamCopyComponent } from './exam copy/exam.component';
import { ProjectCopyComponent } from './projects/project/project.component';


 export const routes: Routes = [
  //{ path:'', component:MainpageComponent  },
  { path:'main', component:MainpageComponent  },
  { path:'home', component:HomepageComponent  },
  { path:'navbar', component:NavbarComponent  },
   { path:'exam', component:ExamComponent  },
   { path:'events', component:EventsComponent  },
   { path:'casestudy', component:CasestudyComponent  },
   { path:'project', component:ProjectComponent  },
   { path:'about', component:AboutComponent  },
   { path:'culture', component:CultureComponent  },
   { path:'eyclo', component:EncyloComponent  },
   { path:'contact', component:ContactComponent  },
   { path:'logout', component:LogoutComponent  },
   //{ path:'', component:LoginpageComponent  },
   {path:'',component:MloginComponent},
   {  path: 'information/:id', component:EventsnavComponent  },
   {  path: 'taketest', component:ExamttestComponent  },

  // { path:'', redirectTo:'main',component:MuniversityHomeComponent  }
   

   /***********Admin Routing************** */
   { path: 'adminhome', component: AdminhomeComponent },
   { path: 'clientinfo', component: ClientinfoComponent },
   { path: 'projects', component: ProjectsComponent },//////////
   { path: 'newproject', component: ProjectCopyComponent },////////////
   { path: 'addnewuniversity', component: AdduniversityComponent },
   { path: 'permissions', component: PermissionsComponent },
   { path: 'addnewuser', component: AdduserComponent },
   { path: 'casestudies', component: CasestudiesComponent },
   { path: 'addnewcasestudy', component: AddnewcasestudyComponent },
   { path: 'encyclopedia', component: EncyclopediaComponent },
   { path: 'events', component: EventsComponentCopy },///////////////
   { path: 'createEvent', component: CreateEventComponent },
   { path: 'exam', component: ExamCopyComponent },///////////
   { path: 'newExam', component: CreateExamComponent },
   { path: 'addEncyclopedia', component: AddEncyclopediaComponent },
   { path: 'update-user-profile', component: UpdateUserProfileComponent },
   { path: 'update-my-profile', component: UpdateMyProfileComponent },
   { path: 'project-team', component: ProjectTeamComponent }
 ];
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingcomponent =[ExamComponent]