import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { LoginstateService } from '../loginstate.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private router:Router, private stateService:LoginstateService, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  data=[
    {id:1, name:'Rahul Ghatkar', team:'Product Development Team', designation:'Developer',gender:'Male', joiningDate:'2021-01-01'},
    {id:2, name:'Raj Ghatkar', team:'Product Testing Team', designation:'Tester',gender:'Male', joiningDate:'2021-01-01'}
  ];
  // member={id:1, name:'Rahul Ghatkar', team:'Product Development Team', designation:'Developer',gender:'Male', joiningDate:'22/02/2021'};

  add(){
    // this.data.push(this.member);
    this.router.navigate(['add'],{relativeTo:this.route});
  }

  logout(){
    this.stateService.setState(false);
    this.router.navigate(['directoryLogin']);
  }



}
