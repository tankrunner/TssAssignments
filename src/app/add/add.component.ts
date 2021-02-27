import { Component, OnInit } from '@angular/core';
import { DirectoryComponent } from '../directory/directory.component';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private sendData: DirectoryComponent, private parser: NgbDateParserFormatter) { }

  ngOnInit(): void {
  }
  send() {
    if (this.name && this.id && this.team && this.designation && this.gender && this.model) {
      this.visibility="hidden";
      let dateStr = this.parser.format(this.model);
      let member = { id: this.id, name: this.name, team: this.team, designation: this.designation, gender: this.gender, joiningDate: dateStr };
      this.sendData.data.push(member);
    }
    else{
      this.visibility="visible";
    }
  }

}
