import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visibility="hidden";
  username:string;
  password:string;
  globalExtras:NavigationExtras;

  details=[
    {
      'username':'rg',
      'password':'hello',
    },
    {
      'username':'tom',
      'password':'hellotom',
    },
    {
      'username':'jerry',
      'password':'hellojerry',
    }
  ];

  constructor(private router:Router) {
    
   }

  ngOnInit(){
    console.log(localStorage.getItem('loginState'));
    if(localStorage.getItem('loginState')=='yes'){
      this.router.navigate(['employeelist']);
    }
  }

  loggedIn(){
    
  }

  logIn(){
    console.log(this.username);
    console.log(this.password);
    // let nE:NavigationExtras={queryParams:{'uname':this.username}};
    for(var i=0; i<this.details.length;i++){
      if(this.details[i]['username']==this.username && this.details[i]['password']==this.password){
        localStorage.setItem('loginState','yes'); 
        this.router.navigate(['employeelist']); 
        break;       
      }
      else{
        this.visibility="visible";
      }
    }
  }

}
