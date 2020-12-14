import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../modal/users';
import {  Observable, throwError } from 'rxjs';
import { UserFetch } from '../modal/userfetch';
import {map} from "rxjs/operators";
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  headers= new HttpHeaders().set('Content-Type','application/json')
              .set('Accept','application/json');
  httpOptions={
    headers:this.headers
  }
  constructor(private http:HttpClient) { }
 
  url:string="http://localhost:3000/Users";
 
  getUsers(){
    return this.http.get<Users[]>(this.url);
  }
  getUpdateUser(id:number):Observable<Users>{
    return this.http.get<Users>(this.url + '/' + id,this.httpOptions);
  }
  updateUser(user:UserFetch):Observable<Users>{
    return this.http.put<Users>(this.url+'/'+user.id,user,this.httpOptions).pipe(map(()=> user));
  }
  getUserById(id: number) {
    return this.http.get<Users>(this.url + '/' + id);
  }
  createUser(user: Users) {
    return this.http.post(this.url, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
