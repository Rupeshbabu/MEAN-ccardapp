import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cc-app';

  constructor(private authService: AuthenticateService) {}

  ngOnInit(): void {
  }

 
}
