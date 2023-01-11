import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges {

  data: any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnChanges(): void {
    console.log('something changed')
  }

  ngOnInit(): void {

      this._activatedRoute.data.subscribe(({ data })=>{
         this.data = data;    
      }   
      );
  }

}
