import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
   signIn(data) {
        return this.http.post('http://localhost:3000/api/v1/users/signin', data, httpOptions)
   }
   registerUser(data){
   		return this.http.post('http://localhost:3000/api/v1/users/signup', data, httpOptions)
   }
   listUsers() {
        return this.http.get('http://localhost:3000/api/v1/users/users')
   }
   deleteUser(user) {
        return this.http.delete('http://localhost:3000/api/v1/users/user/'+user._id, httpOptions)
   }
}
