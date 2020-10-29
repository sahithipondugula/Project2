import { Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {

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

  constructor(private renderer: Renderer2) { }
  
  
  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
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


