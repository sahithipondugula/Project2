import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Muniversity';
  showmodal:boolean;
  constructor(
    private router: Router) { }
    onSubmit(){
  this.router.navigate(['/exam']);
}}
