import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  isProgressBar: Boolean = false;
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  signin() {
    //  ! TODO: SIGN IN API Call Here
    this.authService.signIn(this.signinForm.value).subscribe((res: any) => {
      try {
        if(res){
          console.log(res);
          this.authService.setToken(res.data);
          this.router.navigate(['card']);
        }
      } catch (error) {
          console.log(error);
      }
    });
  }

}
