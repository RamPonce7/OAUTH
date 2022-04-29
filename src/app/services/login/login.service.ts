import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/user-model.interface';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService, private userService: UserService) { }

  /**
   * send auth info and get token
  */

  logIn(user: IUser): boolean {
    this.authService.post(environment.api.methods.login, user);
    //get token from response
    const token = 'wygswqgsugsiqwgswqisqwisgiqw'
    sessionStorage.setItem('uToken', token);
    this.userService.uToken.next(token);

    return true;
  }

  /**
   * delete token from session storage
  */

  logOut(): boolean {
    sessionStorage.removeItem('uToken');
    this.userService.uToken.next(null);
    return true;
  }
}
