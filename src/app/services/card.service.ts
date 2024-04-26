import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  getCardsByUserId(userId: any){
    return this.http.get(`${environment.LOCAL_API}/card/`, userId); 
  }

  getAllCards(){
    return this.http.get(`${environment.LOCAL_API}/card/`);
  }

  currentDate: Date = new Date();
  
  isExpired(expiryDateString: string): boolean {
    const expiryDate = new Date(expiryDateString);
    const currentDate = new Date();
    return expiryDate.getFullYear() < currentDate.getFullYear();
  }

}
