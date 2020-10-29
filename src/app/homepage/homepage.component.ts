import { Component, OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
// import {MatDialog} from '@angular/material/dialog';
// import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  router: any;
  email: string;
  password: string;
  loginForm: FormGroup;
  submitted = false;
  loginuserData={};
 

  constructor(
     private route: Router,
    
     private formBuilder: FormBuilder,
  
     private http:HttpClient
  ) { }

  ngOnInit(): void {
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
 
  //   this.submitted = true;
   
  //   // stop the process here if form is invalid
  //   if (this.loginForm.invalid) {
  //       return;
  //   }
  //   else {
  //     if(this.email == 'vikas@refinitiv.com' && this.password == 'client123'){
  //     this.route.navigate(['home']);
  //   }
  //  else if(this.email == 'shrutigodi@mphasis.com' && this.password == 'admin123'){
  //     this.route.navigate(['admin']);
  //  }
  //   else{
  //     this.dialog.open(DialogComponent);

  //   }
console.log('saved')  
}
    
  
    

  
  
   gotoHome(){
    // this.router.navigate(['/signup']);
    this.route.navigate(['navbar']);
   }
  }
  

