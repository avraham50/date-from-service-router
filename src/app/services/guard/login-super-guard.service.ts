import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginSuperGuardService {




  isLogin: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(eventRout => {
      if (eventRout instanceof NavigationEnd) {
        console.log("this.router.url.includes('login')", this.router.url.includes('login'));
        console.log('this.isLogin', this.isLogin);

        if (this.router.url.includes('login') == false) {
          if (this.isLogin == false) {
            this.router.navigateByUrl('/login')
          }

        }

      }
    }
    )
  }
}
