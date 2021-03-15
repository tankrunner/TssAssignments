import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { LoginstateService } from '../loginstate.service';
import {FetchdataService} from '../fetchdata.service';

@Component({
  selector: 'app-directory-login',
  templateUrl: './directory-login.component.html',
  styleUrls: ['./directory-login.component.css']
})
export class DirectoryLoginComponent implements OnInit {
  getData:any;

  constructor(private router:Router,private stateService:LoginstateService, private fetchdata:FetchdataService) {
    console.log(fetchdata.getRequest());
    fetchdata.getRequest().subscribe(data=>{
      console.log(data)
      this.getData=data;
    })
   }

  ngOnInit(): void {
  }
  visibility="hidden";
  username:string;
  password:string;
  response:any;

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
    // for(var i=0; i<this.details.length;i++){
    //   if(this.details[i]['username']==this.username && this.details[i]['password']==this.password){
    //     this.stateService.setState(true);
    //     this.router.navigate(['directory']); 
    //     break;       
    //   }
    //   else{
    //     this.visibility="visible";
    //   }
    // }

  
    this.fetchdata.isLogin(this.username,this.password).subscribe(data=>{
      console.log(data);
      this.response=JSON.stringify(data);
      console.log(this.response);
      if(this.response=="1"){
        console.log('hhi');
        this.stateService.setState(true);
        this.router.navigate(['directory']);
      }
      else{
        this.visibility="visible";
      }
    });   
  }

}
