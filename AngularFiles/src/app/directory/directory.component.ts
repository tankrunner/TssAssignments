import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { LoginstateService } from '../loginstate.service';
import {TransferService} from '../../supportingFiles/transfer.service';
import {FetchdataService} from '../fetchdata.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private router:Router, private stateService:LoginstateService, private route:ActivatedRoute,private transfer:TransferService) { }

  ngOnInit() {}

  data=this.transfer.setDetails();
  format=['dd/MM/yyyy','ddMMyyyy','dd-MM-yyyy','yyyy:MM:dd'];

  add():void{
    this.router.navigate(['add']);
  }

  logout():void{
    this.stateService.setState(false);
    this.router.navigate(['directoryLogin']);
  }

}
