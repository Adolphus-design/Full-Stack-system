import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
 {path: '', redirectTo:'dashboard', pathMatch:"full"},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: UserDetailsComponent},
  {path: 'user', component: UsersComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
