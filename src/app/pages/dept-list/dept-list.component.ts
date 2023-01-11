import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit, OnChanges {

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
