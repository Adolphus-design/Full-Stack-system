import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RegisterComponent } from './register/register.component';
import { StorkComponent } from './stork/stork.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    LoginComponent,
    UserDetailsComponent,
    MessagesComponent,
    RegisterComponent,
    StorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
   /* HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
