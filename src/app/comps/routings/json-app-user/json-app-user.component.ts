import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'json-app-user',
  templateUrl: './json-app-user.component.html',
  styleUrls: ['./json-app-user.component.css']
})
export class JsonAppUserComponent implements OnInit {
  // bbb = [...Array(10).keys()]
  user: Object;
  
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public http: HttpClient
  ) { }
  

  API = 'https://jsonplaceholder.typicode.com/users/';
  
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      let userId = p.id
      this.http.get(this.API + userId)
        .subscribe(us => this.user = us)
    })
  }

}
