import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  uname:string;

  constructor(private route:ActivatedRoute,private router:Router) {
  //   console.log(this.router.getCurrentNavigation.arguments.state.uname);
  //   this.route.queryParams.subscribe(params => {
  //     this.uname = params["uname"];
  // });
   }

  ngOnInit(){
    if(localStorage.getItem('loginState')=='no'){
      this.router.navigate(['login']);
    }
  }

  logout(){
    this.router.navigate(['login']);
    localStorage.setItem('loginState','no');
  }

}
