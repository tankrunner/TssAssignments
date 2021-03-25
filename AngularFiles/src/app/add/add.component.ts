import { Component, OnInit } from '@angular/core';
import { DirectoryComponent } from '../directory/directory.component';
import { LoginstateService } from '../loginstate.service';
import { getDefaultCompilerOptions } from 'typescript';
import {TransferService} from '../../supportingFiles/transfer.service';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

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
  visibility="hidden";
  getDate:Date;
  format='dd-MM-yyyy';
  subscription:Subscription;

  constructor( private sendData:TransferService,private router:Router, private http:HttpClient) { 
  }

  ngOnInit(): void {}
  
  //Add Button
  send():void{
    if (this.name && this.id && this.team && this.designation && this.gender && this.getDate) {
      this.visibility="hidden";
      let member = { id: this.id, name: this.name, team: this.team, designation: this.designation, gender: this.gender, joiningDate: this.getDate};
      this.sendData.getDetails(member);
      this.router.navigate(['directory']);    
    }
    else{
      this.visibility="visible";
    }
  }

  public retPostData;

  //Post Button
  post(data):void{
    let formattedDate=formatDate(this.getDate,this.format,'en-US');
    const myurl="https://localhost:44356/weatherforecast";
    console.log(data);
    this.subscription=this.http.post('https://localhost:44356/weatherforecast',{id:this.id,name:this.name,team:this.team,designation:this.designation,gender:this.gender,date:formattedDate.toString()},
    {responseType:'text'}).subscribe(
      data=>{this.retPostData=data;});
    console.log(formattedDate);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}

        