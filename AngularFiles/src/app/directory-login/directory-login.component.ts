import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { LoginstateService } from '../loginstate.service';
import { FetchdataService } from '../fetchdata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-directory-login',
  templateUrl: './directory-login.component.html',
  styleUrls: ['./directory-login.component.css']
})
export class DirectoryLoginComponent implements OnInit {
  getData: any;
  weatherDataSubscription: Subscription;

  constructor(private router: Router, private stateService: LoginstateService, private fetchdata: FetchdataService) {
    console.log(fetchdata.getRequest());
    this.weatherDataSubscription = fetchdata.getRequest().subscribe(data => {
      console.log(data)
      this.getData = data;
    })
  }

  ngOnInit(): void { }
  visibility = "hidden";
  username: string;
  password: string;
  response: any;
  gdata: any;
  subscription: Subscription;

  logIn(): void {
    console.log(this.username);
    console.log(this.password);

    this.subscription = this.fetchdata.isLogin(this.username, this.password).subscribe(data => {
      this.gdata = data;
      console.log(data);
      this.response = JSON.stringify(data);
      let jsonObj = JSON.parse(this.response);
      console.log(jsonObj['status']);
      if (jsonObj['status'] == 200) {
        console.log('hhi');
        this.stateService.setState(true);
        this.router.navigate(['directory']);
      }
      else {
        this.visibility = "visible";
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.weatherDataSubscription.unsubscribe();
  }

}

// details=[
//     {
//       'username':'rg',
//       'password':'hello',
//     },
//     {
//       'username':'tom',
//       'password':'hellotom',
//     },
//     {
//       'username':'jerry',
//       'password':'hellojerry',
//     }
//   ];

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