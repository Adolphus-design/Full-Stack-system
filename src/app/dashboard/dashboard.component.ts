import { ServiceService } from './../service.service';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];

  constructor( 
    private http: HttpClient,
    private service: ServiceService) { }

  ngOnInit(){
    this.getUsers()
  }

  getUsers() {
    return this.service.getUsers()
        .subscribe(users => {this.data =users = users.slice(1,5);
        });
      }

}
