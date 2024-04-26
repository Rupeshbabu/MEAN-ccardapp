import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from '../services/card.service';
import { AuthenticateService } from '../services/authenticate.service';
import { AddCardComponent } from '../add-card/add-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  
  cards:any;
  user:any;

    constructor(private cardService:CardService, private authService: AuthenticateService, public dialog: MatDialog ) {}

  ngOnInit(): void {
    this.getUserDetails();
    this.getListCards();
    this.getCardsByUser();
  }

  getUserDetails() {
    this.user = this.authService.getUserFromToken();
    // localStorage.setItem('userID', this.user.id); 
  }

  getCardsByUser(){
    const userId = this.user.id;
    this.cardService.getCardsByUserId(userId).subscribe((res:any) =>{
      try {
        if(res){
          this.cards = res.data;          
        }
      } catch (error) {
        console.log(error);
        
      }
    })
  }
  
  isExpired(expiryDate: string): boolean {
    return this.cardService.isExpired(expiryDate);
  }

  getListCards(){
    const checkRole = 'Admin'
    if(checkRole){
      this.cardService.getAllCards().subscribe((res) =>{
        try {
          if(res){
            console.log(res);
            this.cards = res;
          }
        } catch (error) {
          console.log(error);
        }
      });
    }else{
      console.log('You are not admin!!!');
      
    }
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCardComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
