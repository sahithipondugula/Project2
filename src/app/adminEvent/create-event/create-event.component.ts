import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UploadImagesService } from 'src/app/service/upload-images.service';
import { ClientinfoComponent } from 'src/app/clientinfo/clientinfo.component';
import { AdminhomeComponent } from 'src/app/adminhome/adminhome.component';
import { Events } from 'src/app/model/event';
import { ClientinfoService } from 'src/app/service/clientinfo.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent : any={};
  selectedClientAutoId: number;
  clients: any;
  clientDataById: any;
  // image upload //
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient,private router: Router,private clientInfoService: ClientinfoService, private adminhomeComponent: AdminhomeComponent, private clientInfoComponent: ClientinfoComponent) {
    this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
    this.clients = this.adminhomeComponent.clients;
  }


  ngOnInit(): void {
    this.getClientById();
  }

  getClientById() {
    this.clientInfoService.getClientById(this.selectedClientAutoId).subscribe(data => {
      this.clientDataById = data;
      // console.log(data);

    });
  }
  onSubmit(){
    alert("submitted!");
    this.onAddEvent();
  }

  onAddEvent(){
    this.clientInfoService.addEvent(this.newEvent,this.selectedClientAutoId).subscribe(data =>{
      console.log(data);
    });
  }

  //uploading image//
   //Gets called when the user selects an image
   public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(`http://localhost:8080/api/image/upload/${this.newEvent.autoId}`, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }

      //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }


}
