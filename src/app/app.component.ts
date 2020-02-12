import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 
  constructor(private wowService: NgwWowService){
    this.wowService.init(); 
  }
 
  ngOnInit() {
    this.wowService.init(); 
  }
 
  ngOnDestroy() {
  }
}
