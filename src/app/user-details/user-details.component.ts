import { ServiceService } from './../service.service';
import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user?: User;

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getUser()
  }

  getUser(): void{
    
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getUser(id)
      .subscribe(user => this.user = user);
      console.log(id)
     
  }

}
