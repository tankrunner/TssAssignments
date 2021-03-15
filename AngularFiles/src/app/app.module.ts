import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DirectoryLoginComponent } from './directory-login/directory-login.component';
import { DirectoryComponent } from './directory/directory.component';
import { AddComponent } from './add/add.component';
import { DloginGuard } from './dlogin.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeelistComponent,
    DirectoryLoginComponent,
    DirectoryComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
