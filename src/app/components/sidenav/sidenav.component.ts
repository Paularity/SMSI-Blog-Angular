import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [    
    trigger('slideState',[
      state('expand', style({ width: '300px' })),
      state('collapse', style({ width: '40px' })),
      transition( 'expand <=> collapse', animate(200) )
    ])
  ]
})
export class SidenavComponent implements OnInit {

  expand = false;

  constructor() { }

  ngOnInit() {
  }

  get stateName() {
    return this.expand ? 'expand' : 'collapse';
  }

  toggle(){
    this.expand = !this.expand;
  }

}
