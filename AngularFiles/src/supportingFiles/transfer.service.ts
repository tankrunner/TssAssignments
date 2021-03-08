import { Injectable } from '@angular/core';
import { DirectoryComponent } from 'src/app/directory/directory.component';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  list:any;
  data=[
    {id:1, name:'Rahul Ghatkar', team:'Product Development Team', designation:'Developer',gender:'Male', joiningDate:'2021-01-01'},
    {id:2, name:'Raj Ghatkar', team:'Product Testing Team', designation:'Tester',gender:'Male', joiningDate:'2021-01-01'}
  ];
  getDetails(val:any):void{
    this.data.push(val);
  }
  setDetails(){
    return this.data;
  }
}
