import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private homeComponentRefesh = new BehaviorSubject<string>('Initial Load');
  refresh = this.homeComponentRefesh.asObservable();


  constructor(private http: HttpClient) { }

  refreshHomeComponent(refresh:string){
    this.homeComponentRefesh.next(refresh);
  }

  signIn(userdetails: any){
    return this.http.post(`${environment.LOCAL_API}/user/signin`, userdetails);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getUserFromToken(): any {
    const token = localStorage.getItem('token');
    if (token) {
      const decodejwt = jwt_decode.jwtDecode(token);
      console.log(decodejwt);
      return decodejwt;
      
    } else {
      return null;
    }
  }
  
}
