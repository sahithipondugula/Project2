import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../service/clientinfo.service';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { ClientinfoComponent } from '../clientinfo/clientinfo.component';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { UploadImagesService } from 'src/app/service/upload-images.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponentCopy implements OnInit {

  selectedClientAutoId: number;
  clients: any;
  clientDataById: any;
  selectedEventAutoId: any;
  selectedEvent: any = {};
  // fileToUpload: File = null;
  // imagePreview: string; 
  // selectedFiles: FileList;
  // progressInfos = [];
  // message = '';
  // fileInfos: Observable<any>;
  // createEvent: any={};

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router, private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent, private clientInfoComponent: ClientinfoComponent) {
    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
    this.clients = this.adminhomeComponent.clients;
  }

  getClientById() {
    this.clientInfoService.getClientById(this.selectedClientAutoId).subscribe(data => {
      this.clientDataById = data;
      // console.log(data);

    });
    if (this.clientDataById.events.length == 0) {
      alert("No events added to display!");
    }
  }

  ngOnInit(): void {
    this.getClientById();

  }

  getSelectedEvent(eventAutoId) {
    this.selectedEventAutoId = eventAutoId;
    for (var i = 0; i < this.clientDataById.events.length; i++) {
      if (this.selectedEventAutoId == this.clientDataById.events[i].autoId) {
        this.selectedEvent = this.clientDataById.events[i];
      }
    }
  }

  onSubmit() {
    this.updateEvent();
  }

  updateEvent() {
    console.log(this.selectedEvent);
    this.clientInfoService.updateEvent(this.selectedEvent, this.selectedEventAutoId).subscribe(data => {
      console.log(data);
    });
    alert("Updated Successfully!")
  }


  //   // createNewEvent() {
  //   //   this.uploadService.upload(this.selectedClientAutoId, file,this.createEvent)
  //   //     .subscribe(data => console.log(data), error => console.log(error));
  //   //   // this.story = new Story();
  //   //   //this.reloadData();  
  //   //   console.log(this.createEvent);
  //   //   alert("Case Study added successfully!");
  //   //   this.createEvent = {};
  //   //   this.router.navigate(['casestudies']);
  //   // }
  //   //-----------------
  // onSubmit(){
  //   this.uploadFiles();
  // }
  //   // Methods for uploading images

  //   selectFiles(event) {
  //     this.progressInfos = [];
  //     this.selectedFiles = event.target.files;
  //   }

  //   upload(files) {


  //     this.uploadService.upload(this.selectedClientAutoId,files,this.createEvent).subscribe(
  //       event => {if (event instanceof HttpResponse) {
  //           this.fileInfos = this.uploadService.getFiles();
  //         }
  //       },

  //       );
  //   }

  //   uploadFiles() {
  //     this.message = '';

  //     this.upload(this.selectedFiles);
  //   }

  // // end of uploading images

  // }




  // SHRUTI CODE //




  //uplad Photos









}
