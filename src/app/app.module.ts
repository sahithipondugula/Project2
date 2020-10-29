import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ModalModule } from 'ngx-bootstrap/modal';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
//import { ModalModule } from 'ngx-bootstrap'
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { AppRoutingModule,routes,routingcomponent } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CasestudyComponent } from './casestudy/casestudy.component';
import { ProjectComponent } from './project/project.component';
import { LogoutComponent } from './logout/logout.component';

import{MDBBootstrapModule} from 'angular-bootstrap-md'

// import { NgSelectModule } from '@ng-select/ng-select';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CultureComponent } from './culture/culture.component';
import { EncyloComponent } from './encylo/encylo.component';
import { ContactComponent } from './contact/contact.component';
// import { LessonModalComponent } from './lesson-modal/lesson-modal.component';

import { CommonModule, DatePipe } from '@angular/common';
import { MuniversityHomeComponent } from './muniversity-home/muniversity-home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EventsnavComponent } from './eventsnav/eventsnav.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Date1Pipe } from './date1.pipe';
import { PagerComponent } from './pager/pager.component';
import{ExamService} from '../app/exam.service'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthenticationService } from './loginpage/AuthenticationService .service';
import { ExamttestComponent } from './examttest/examttest.component';
//import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// External modules
import { AlertModule }    from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { MloginComponent } from './mlogin/mlogin.component';
//
import { NgForm } from '@angular/forms';
//admin
import{AdduniversityComponent} from './adduniversity/adduniversity.component';
import{AdduserComponent} from './adduser/adduser.component';
import{AdminhomeComponent} from './adminhome/adminhome.component';
import{CasestudiesComponent} from './casestudies/casestudies.component';
import{ClientinfoComponent} from './clientinfo/clientinfo.component';
import{EncyclopediaComponent} from './encyclopedia/encyclopedia.component';
import{EventsComponentCopy} from './adminEvent/events.component';
import{ExamCopyComponent} from './exam copy/exam.component';
import{CreateExamComponent} from './exam copy/create-exam/create-exam.component';
import{CreateEventComponent} from './adminEvent/create-event/create-event.component';
import{PermissionsComponent} from './permissions/permissions.component';
import{ProjectTeamComponent} from './project-team/project-team.component';
import{ProjectsComponent} from './projects/projects.component';
import{ProjectCopyComponent} from './projects/project/project.component';
import{UpdateMyProfileComponent} from './update-my-profile/update-my-profile.component';
import{UpdateUserProfileComponent} from './update-user-profile/update-user-profile.component';
import { ClientinfoService } from './service/clientinfo.service';
import { UploadImagesService } from './service/upload-images.service';
import { AddEncyclopediaComponent } from './encyclopedia/add-encyclopedia/add-encyclopedia.component';
//import{upload} from './upload-images/upload-images.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent, ProjectComponent, LogoutComponent, 
    HomepageComponent, NavbarComponent, AboutComponent, CultureComponent, EncyloComponent, ContactComponent, 
    MuniversityHomeComponent, MainpageComponent, EventsnavComponent, Date1Pipe, PagerComponent,
    ExamComponent, LoginpageComponent, ExamttestComponent,CasestudyComponent, MloginComponent,
  //admin
  AdduniversityComponent,AdduserComponent,AdminhomeComponent,CasestudiesComponent,
  ClientinfoComponent,EncyclopediaComponent,EventsComponentCopy,ExamCopyComponent,
  CreateExamComponent,CreateEventComponent,PermissionsComponent,ProjectTeamComponent,
ProjectsComponent,ProjectCopyComponent,UpdateMyProfileComponent,UpdateUserProfileComponent,AddEncyclopediaComponent



    
    
  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,MDBBootstrapModule.forRoot(),MatRadioModule,
    RouterModule,HttpClientModule,CommonModule,
     AppRoutingModule, BrowserAnimationsModule,MatTableModule,MatToolbarModule,MatButtonModule,
    MatIconModule,MatPaginatorModule,NgbModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot()
,AutocompleteLibModule//,NgForm, // RouterModule.forRoot(routes)
    // MatCardModule,
    // MatFormFieldModule,MatInputModule,MatButtonModule,
    // MatDialogModule,
    // HttpClientModule,
    // MatSidenavModule,
    
   
    // MatSelectModule,
    // MatSortModule,
    // MatTableModule,
    // MatPaginatorModule
   
  

  ],
 

  providers: [ExamService, DatePipe,AuthenticationService,ClientinfoService,UploadImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
