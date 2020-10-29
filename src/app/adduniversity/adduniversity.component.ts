import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../service/clientinfo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.css']
})
export class AdduniversityComponent implements OnInit {
  showAddAbout: boolean = false;
  newClient: any = {};
  submitted: boolean = false;

  constructor( private route: ActivatedRoute,private router: Router,private clientInfoService: ClientinfoService) {
    // this.selectedClientAutoId = this.adminhomeComponent.selectedClientId;
  }

  ngOnInit(): void {
  }
  addAbout() {
    this.showAddAbout = !this.showAddAbout;
  }
  onAddUniversity() {
    if (this.newClient.clientId.startsWith(" ") || this.newClient.name.startsWith(" ") ||
      this.newClient.address.startsWith(" ") || this.newClient.city.startsWith(" ") ||
      this.newClient.state.startsWith(" ") || this.newClient.country.startsWith(" ") ||
      this.newClient.phone.startsWith(" ") || this.newClient.active.startsWith(" ") ||
      this.newClient.about.startsWith(" ") || this.newClient.culture.startsWith(" ")) {

      alert("make sure you are not starting with spaces");
    } else {
      this.submitted = !this.submitted;
      this.addClient();
    }
  }
  addClient() {
    this.clientInfoService.addClient(this.newClient).subscribe(data => {
      console.log(data);
      alert(this.newClient.name + " University Added Successfully!");
    });
    this.router.navigate(['adminhome']);
  }

  ignoreAddClient() {
    this.newClient = {};

  }
}
