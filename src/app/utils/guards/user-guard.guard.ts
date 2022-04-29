import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserdGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const uToken = window.sessionStorage.getItem("uToken");
    if (uToken == null) {
      this.router.navigate(["/login"]);
    }
    this.userService.uToken.next(uToken);
    return true;
  }

}
