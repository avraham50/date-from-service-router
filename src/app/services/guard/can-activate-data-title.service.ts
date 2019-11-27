import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad
} from '@angular/router';
import { Alert } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class CanActivateDataTitleService implements CanActivate {

  constructor() { }

  canActivate() {
    alert('ngfjhdgjnh')
    return false
  }

}
