import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Router, RouterModule } from '@angular/router';
// import {MatDialog} from '@angular/material/dialog';
//import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { User } from '../_models/user';
// import { UserService } from '../_services/user.service';
// import { Client } from '../_models/client';

@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html',
  styleUrls: ['./mlogin.component.css']
})
export class MloginComponent implements OnInit {

 
  
  
  
    router: any;
    email: string;
    password: string;
    loginForm: FormGroup;
    submitted = false;
    loginuserData={};
    //user : User=new User();  
    
  
    constructor(
       private route: Router,
      // public dialog: MatDialog,
       private formBuilder: FormBuilder,
      // private userservice:UserService,
       private http:HttpClient
    ) { }
  
    ngOnInit(): void {
  
    //  this.http.get("http://localhost:8080/mhire/clients");
  
      this.loginForm = this.formBuilder.group({
        
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]]
       
        
    });
    }
   
    // loginUser(){
    //   this.userservice.loginUsers(this.user)
    //   .subscribe(data => console.log(data), error => console.log(error));
      
  
    // }
   
   
  
  
    onSubmit() {
   
      this.submitted = true;
     
      // stop the process here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      else {
        if(this.email == 'student@gmail.com' && this.password == 'student123'){
          var testObject ={email:this.email};
          localStorage.setItem('testObject', JSON.stringify(testObject));
this.route.navigate(['main']);
//this.route.navigate(['navbar']);
      }
     else if(this.email == 'admin123@gmail.com' && this.password == 'admin123'){
        this.route.navigate(['adminhome']);
     }
      else{
       // this.dialog.open(DialogComponent);
  window.alert('user login')
      }
    }
      
    
      
  }
    
    
     gotoHome() {
      // this.router.navigate(['/signup']);
      this.route.navigate(['home']);
     }
  
    login() : void {
      if(this.email == 'admin123@gmail.com' && this.password == 'admin'){
       this.route.navigate(['home']);
       } else {
        
        console.log('user login ')
         //  this.dialog.open(DialogComponent);
        
       }
    }
  
    
  
  
  
}
