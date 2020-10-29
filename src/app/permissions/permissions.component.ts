import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../service/clientinfo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  addPermissions: boolean = false;
  deletePermissions: boolean = false;
  editPermissions: boolean = false;
  viewPermissions: boolean = false;
  selectedRole : string;
  permission : any ;
  permissionsList : any= [
  
    {permission : "Add New User", active :1},
    {permission : "Add University", active :1},
    {permission : "Delete User", active :1},
    {permission : "Delete University", active :1},
    {permission : "Edit User", active :1},
    {permission : "Edit Introduction", active :1},
    {permission : "Edit Culture", active :1},
    {permission : "Edit Encyclopedia", active :1},
    {permission : "Edit Projects", active :1},
    {permission : "Edit Case Studies", active :1},
    {permission : "Edit Exams", active :1},
    {permission : "Edit Events", active :1},
    {permission : "View User", active :1},
    {permission : "View Introduction", active :1},
    {permission : "View Culture", active :1},
    {permission : "View Encyclopedia", active :1},
    {permission : "View Projects", active :1},
    {permission : "View Case Studies", active :1},
    {permission : "View Events", active :1},
    {permission : "View Exams", active :1}
  ];
  selected:any;

  constructor(private route: ActivatedRoute, private router: Router, private clientInfoService: ClientinfoService) { }

  ngOnInit(): void {
    
  }
  displayAdd() {
    this.addPermissions = !this.addPermissions;
  }
  displayDelete() {
    this.deletePermissions = !this.deletePermissions;
  }
  displayEdit() {
    this.editPermissions = !this.editPermissions;
  }
  displayView() {
    this.viewPermissions = !this.viewPermissions;
  }
  adminSelected(){
    this.selectedRole="admin";
  }
  editorSelected(){
    this.selectedRole="editor";
  }
  studentSelected(){
    this.selectedRole="student";
  }

  onChecked(event){
    this.permission= event.target.value;
  }
  onSubmit(){
   console.log(this.permissionsList);
  }
// savePermissions(){
//   for(var i=0;i<this.permissionsList.length;i++){
//     this.clientInfoService.savePermissions(this.permissionsList[i]).subscribe(data =>{
//       console.log(data);
//     });
//   }


// role = "admin";
// admin:boolean;
// editor:boolean;
// student:boolean;

// show(){
//   if(this.role=="admin"){
//     this.admin=true;
    
    
//   }else if(this.role=="editor"){
//     this.editor=true;
  
//   }else{
//     this.student=true;
//   }
//   console.log(this.role);
// }


}
