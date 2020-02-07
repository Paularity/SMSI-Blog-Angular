import { Component, OnInit } from '@angular/core';
import { slideSidenav } from 'src/app/modules/animation/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [    
    slideSidenav,
  ]
})
export class SidenavComponent implements OnInit {

  expand : boolean = false;

  applicationLinks = [
    { title: 'Notifications', icon: 'notifications', children: [] },
    { title: 'Dashboard', link: '/dashboard', icon: 'dashboard', children: [] },
    { title: 'Shutdown Calendar', link: '/', icon: 'calendar_today', children: [] },
    { title: 'Reports', link: '/', icon: 'library_books', children: [] },
  ];

  settingsLinks = [
    { id: 'comp-settings', link: '/', title: 'Company Settings', icon: 'meeting_room', children: [
      { title: 'Company User', link: '/', icon: 'supervised_user_circle' },
      { title: 'Company Site', link: '/', icon: 'business' },
    ]},
    { id: 'sys-settings', title: 'System Settings', icon: 'settings', children: [
      { title: 'Company', link: '/', icon: 'business_center' },
      { title: 'Discipline', icon: 'notes' },
      { title: 'Milestone', link: '/', icon: 'signal_cellular_alt' },
      { title: 'Activity', link: '/', icon: 'format_list_numbered' },
    ]},
  ]

  constructor() { }

  ngOnInit() { }
  
  get sidenavState() { return (this.expand) ? 'expand' : 'collapse'; }  
  toggleSidenav(){ this.expand = !this.expand; }

  toggleDropdown(id){ 
    $('#'+id + " .expand-icon").toggleClass('rotateArrow');
    $('.sub-'+id).toggleClass('d-none'); 
  }

}
