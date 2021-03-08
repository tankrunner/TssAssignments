import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DirectoryLoginComponent } from './directory-login/directory-login.component';
import { DirectoryComponent } from './directory/directory.component';
import { DloginGuard } from './dlogin.guard';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'employeelist',
    component:EmployeelistComponent
  },
  {
    path:'directoryLogin',
    component:DirectoryLoginComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'directory',
    component:DirectoryComponent,
    canActivate:[DloginGuard]
    // children:[
    //   {
    //     path:'add',
    //     component:AddComponent
    //   },
    // ]
  },
  {
    path:'',
    redirectTo:'directoryLogin',
    pathMatch:'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
