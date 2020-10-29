// import { Component, OnInit } from '@angular/core';
// import { HttpEventType, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { UploadImagesService } from 'src/app/service/upload-images.service';

// @Component({
//   selector: 'app-upload-images',
//   templateUrl: './upload-images.component.html',
//   styleUrls: ['./upload-images.component.css']
// })
// export class UploadImagesComponent implements OnInit {

//   selectedFiles: FileList;
//   progressInfos = [];
//   message = '';

//   fileInfos: Observable<any>;
//   constructor(private uploadService:UploadImagesService ) { }

//   ngOnInit(): void {
//    // this.fileInfos = this.uploadService.getFiles();
//   }

//   selectFiles(event) {
//     this.progressInfos = [];
//     this.selectedFiles = event.target.files;
//   }

  
//   upload(idx, file) {
//     this.progressInfos[idx] = { value: 0, fileName: file.name };

//     this.uploadService.upload(file).subscribe(
//       event => {
//         if (event.type === HttpEventType.UploadProgress) {
//           this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
//         } else if (event instanceof HttpResponse) {
//           this.fileInfos = this.uploadService.getFiles();
//         }
//       },
//       err => {
//         this.progressInfos[idx].value = 0;
//         this.message = 'Could not upload the file:' + file.name;
//       });
//   }
  

//   uploadFiles() {
//     this.message = '';
//     for (let i = 0; i < this.selectedFiles.length; i++) {
//       this.upload(i, this.selectedFiles[i]);
//     }
//   }

// }
