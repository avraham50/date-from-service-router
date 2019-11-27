import { Component, OnInit} from '@angular/core';
import { LoginSuperGuardService } from 'src/app/services/guard/login-super-guard.service';
import { Router } from '@angular/router';
import { NameDemoService } from 'src/app/services/name-demo.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logSuper:LoginSuperGuardService,
    private router:Router, public nameD:NameDemoService) { }

  ngOnInit() {
  }


  openPath(){
    this.logSuper.isLogin=true;
    this.router.navigateByUrl('/avraham-Component')
  }



}
