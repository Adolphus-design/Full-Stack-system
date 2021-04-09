import { ServiceService } from './../service.service';
import { MessageService } from '../message.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core'; 
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   
  
  data: any[] = [];



  constructor(
    private service: ServiceService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    return this.service.getUsers()
        .subscribe(users => {this.data =users;
          console.log(this.data);
        });
  }

  delete(user: User): void {
    this.data = this.data.filter(h => h !== user);
    this.service.deleteUser(user.id).subscribe();
  }

 

}
