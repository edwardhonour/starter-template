import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements  OnInit, OnChanges {

  data: any;
  whatAmIDoing: any = 'Nothing';

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnChanges(): void {
    console.log('something changed')
  }

  loggingOut(e: any) {
      this.whatAmIDoing = e;
  }

  ngOnInit(): void {

      this._activatedRoute.data.subscribe(({ data })=>{
         this.data = data;    
      }   
      );
  }

}
