import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user-model.interface';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {



  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passFormControl = new FormControl('', [Validators.required]);


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {

    const user: IUser = {
      email: this.emailFormControl.value,
      pass: this.passFormControl.value
    }
    if (this.loginService.logIn(user)) {
      this.router.navigate(['home']);
    }
  }
}
