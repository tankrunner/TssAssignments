import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http:HttpClient) { }
  myurl='https://localhost:44356/weatherforecast';
  getRequest(){
    return this.http.get(this.myurl);
  }

  isLogin(uname:string, pass:string){
    return this.http.post(this.myurl+'/GetLogin',{uname:uname,pass:pass},{observe:'response'});
  }
}
