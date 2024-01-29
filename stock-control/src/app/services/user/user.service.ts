import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignUpUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;

  constructor(private http:HttpClient, private cookieService: CookieService) { }

  signupUser(requestDatas: SignUpUserRequest): Observable<SignUpUserResponse>{

      return this.http.post<SignUpUserResponse>(

        `${this.API_URL}/user`,requestDatas
      )
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse>{

    return this.http.post<AuthResponse>(

      `${this.API_URL}/auth`,requestDatas
    )
  }

  isLoggetIn() : boolean {

    const JWT_TOKEN = this.cookieService.get('USER_INFO');
    // VERIFICA SE O USUÁRIO POSSUI UM TOKEN OU COOKIE COM O NOME QUE BUSCARMOS

    return JWT_TOKEN ? true : false;

  }

}
