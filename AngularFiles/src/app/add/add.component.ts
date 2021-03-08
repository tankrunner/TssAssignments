import { Component, OnInit } from '@angular/core';
import { DirectoryComponent } from '../directory/directory.component';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { LoginstateService } from '../loginstate.service';
import { getDefaultCompilerOptions } from 'typescript';
import {TransferService} from '../../supportingFiles/transfer.service';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id: number;
  name: string;
  team: string;
  designation: string;
  gender: string;
  model: NgbDateStruct;
  visibility="hidden";

  constructor( private parser: NgbDateParserFormatter,private sendData:TransferService,private router:Router) { }

  ngOnInit(): void {
  }
  send() {
    
    if (this.name && this.id && this.team && this.designation && this.gender && this.model) {
      this.visibility="hidden";
      let dateStr = this.parser.format(this.model);
      let member = { id: this.id, name: this.name, team: this.team, designation: this.designation, gender: this.gender, joiningDate: dateStr };
      //this.sendData.data.push(member);
      this.sendData.getDetails(member);
      this.router.navigate(['directory']);
      
    }
    else{
      this.visibility="visible";
    }
  }

}
