import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from 'src/app/service/clientinfo.service';
import { AdminhomeComponent } from 'src/app/adminhome/adminhome.component';

@Component({
  selector: 'app-add-encyclopedia',
  templateUrl: './add-encyclopedia.component.html',
  styleUrls: ['./add-encyclopedia.component.css']
})
export class AddEncyclopediaComponent implements OnInit {
  createEncyclopedia : any = {};
  selectedClientAutoId : number;
  constructor(private clientInfoService: ClientinfoService , private adminhomeComponent: AdminhomeComponent) { 
    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
  }

  ngOnInit(): void {
  }

  createNewEncyclopedia() {
    this.clientInfoService.addEncyclopedia(this.selectedClientAutoId, this.createEncyclopedia)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.story = new Story();
    //this.reloadData();  
    console.log(this.createEncyclopedia); 
    alert("Encyclopedia added successfully!");
    this.createEncyclopedia={};

  }
  onSubmitEncyclopedia(){
    this.createNewEncyclopedia();
  }

}
