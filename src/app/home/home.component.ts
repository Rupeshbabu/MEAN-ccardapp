import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  isRole:any;
  isToken:any;

  constructor( private authService:AuthenticateService, private router:Router){}

  ngOnInit(): void {
    this.checkRole();
  }

  checkRole(){
    const userDetails = this.authService.getUserFromToken();
    const userToken = this.authService.getToken();
    this.isToken = userToken ? true : false;

  }

  signOut(){
    this.authService.removeToken();
    this.triggerRefresh();
    this.router.navigate(['/signin']);
  }

  triggerRefresh(){
    this.authService.refreshHomeComponent('Refresh');
  }

}
