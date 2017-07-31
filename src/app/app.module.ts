import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './component/user/user-detail.component';
import { UsersComponent } from './component/user/user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserService } from './service/user.service';
import { SinginComponent } from './component/account/signin.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    UsersComponent,
    SinginComponent
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})

export class AppModule { }