import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { LoginstateService } from '../loginstate.service';

@Component({
  selector: 'app-directory-login',
  templateUrl: './directory-login.component.html',
  styleUrls: ['./directory-login.component.css']
})
export class DirectoryLoginComponent implements OnInit {

  constructor(private router:Router,private stateService:LoginstateService) { }

  ngOnInit(): void {
  }
  visibility="hidden";
  username:string;
  password:string;

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

  logIn(){
    console.log(this.username);
    console.log(this.password);
    for(var i=0; i<this.details.length;i++){
      if(this.details[i]['username']==this.username && this.details[i]['password']==this.password){
        this.stateService.setState(true);
        this.router.navigate(['directory']); 
        break;       
      }
      else{
        this.visibility="visible";
      }
    }
  }

}
