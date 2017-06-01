
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './services/authentication.service';






@Injectable()
export class Authguard implements CanActivate {

     constructor(private router: Router, private authService: AuthenticationService, private login:LoginComponent) { }

    canActivate() {
        return true;
    }


    

}