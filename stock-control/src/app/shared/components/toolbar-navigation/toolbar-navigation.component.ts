import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: []
})
export class ToolbarNavigationComponent {

  constructor(private cookie:CookieService, private router:Router){}

  handleLogout() {

    this.cookie.delete('USER_INFO');
    this.router.navigate(['/home']);

  }

}
