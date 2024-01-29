import { Injectable } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private userService: UserService, private router : Router) {}

  canActivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree
  {
    if (!this.userService.isLoggetIn()){
      this.router.navigate(['/home']);
      return false;

    }

    this.userService.isLoggetIn()
    return true;
  }
}
