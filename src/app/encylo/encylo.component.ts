import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../service/clientinfo.service';

@Component({
  selector: 'app-encylo',
  templateUrl: './encylo.component.html',
  styleUrls: ['./encylo.component.css']
})
export class EncyloComponent implements OnInit {
  allTechnologies: any;

  constructor(private clientInfoService: ClientinfoService ){
  }

  ngOnInit(): void {
    this.getAllTechnologies();

  }

  getAllTechnologies() {
    this.clientInfoService.getAllTechnologies().subscribe(data => {
      this.allTechnologies = data;
      // console.log(this.allTechnologies);
    });
  }
}
