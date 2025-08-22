import { AppService } from "./services/app.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}

  canActivate(): boolean {
    if (this.appService.isAuthorised) {
      return true;
    } else {
      this.router.navigate(["/login"]); // redirect to login
      return false;
    }
  }
  
}
