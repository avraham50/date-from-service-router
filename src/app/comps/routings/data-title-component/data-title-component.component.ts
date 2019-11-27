import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'data-Title',
  templateUrl: './data-title-component.component.html',
  styleUrls: ['./data-title-component.component.css']
})
export class DataTitleComponentComponent implements OnInit {


  myName: string


  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    
    this.activatedRoute.data.subscribe(d => this.myName = d.title   )
  }

}
