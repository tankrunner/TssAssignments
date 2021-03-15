import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http:HttpClient) { }
  
  getRequest(){
    let myurl='https://localhost:44356/weatherforecast';
    return this.http.get(myurl);
  }

  isLogin(uname:string, pass:string){
    let myurl=`https://localhost:44356/weatherforecast/${uname}/${pass}`;
    return this.http.get(myurl);

  }
}
