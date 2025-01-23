import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:4000/register/';


  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post(this.baseUrl+'register',user); 
  }
  login(user:any)
  {
    return this.http.post(this.baseUrl+'login',user);
  }
  
  isLoggedIn(){
  
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
  
    }
  
  }
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }


}
