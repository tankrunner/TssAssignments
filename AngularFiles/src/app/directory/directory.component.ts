import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { LoginstateService } from '../loginstate.service';
import {TransferService} from '../../supportingFiles/transfer.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private router:Router, private stateService:LoginstateService, private route:ActivatedRoute,private transfer:TransferService) { }

  ngOnInit() {
    // this.transfer.setDetails()==null?console.log('null hai'):console.log('no null');//this.data.push(this.transfer.setDetails());
  }

  data=this.transfer.setDetails();
  // member={id:1, name:'Rahul Ghatkar', team:'Product Development Team', designation:'Developer',gender:'Male', joiningDate:'22/02/2021'};

  add(){
    // this.data.push(this.member);
    // this.router.navigate(['add'],{relativeTo:this.route});
    this.router.navigate(['add']);

  }

  logout(){
    this.stateService.setState(false);
    this.router.navigate(['directoryLogin']);
  }

}
