import { User } from './../user';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[] = [];

  constructor(private service: ServiceService) { }

  add(name: any, surname: string, email: string): void {
    name = name.trim(), surname = surname.trim(), email = email.trim();
    if (!name && !surname && !email) { 
      return; 
    }
    this.service.addUser({ name, surname, email } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  ngOnInit(): void {
  }

}
