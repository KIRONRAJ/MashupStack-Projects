import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errorMessage: any = null;
  signupMessage: string = null;

  constructor(private authServiece: AuthService, private route: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = null;
  }

  submitAuthForm(data) {
    console.log(data);
    if (this.isLoginMode) {
      this.authServiece.login(data.email, data.password).subscribe(
        (response) => {
          this.route.navigate(['/']);
        },
        (errorResp) => {
          this.errorMessage = errorResp.error.errors;
          console.log(errorResp);
        }
      );
    } else {
      this.authServiece
        .signUp(data.name, data.email, data.password, data.cnfpassword)
        .subscribe(
          (response) => {
            this.isLoginMode = true;
            this.signupMessage = 'Signup succesfull login here';
          },
          (errorResp) => {
            this.errorMessage = errorResp.error.errors;
          }
        );
    }
  }
}
