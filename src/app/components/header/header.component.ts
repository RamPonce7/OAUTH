import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoged: boolean;

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {
    userService.uToken.subscribe((token) => {
      this.isLoged = (token != null)
    })
  }



  ngOnInit(): void {

  }


  logOut() {
    if (this.loginService.logOut()) {
      this.router.navigate(['login']);
    }
  }

}
