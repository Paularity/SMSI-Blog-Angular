import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
  sites = [
    {
      name: 'Lihir',
      plants: [
        {
          name: 'Grinding',
          shutdowns: [
            {
              name: 'Mills Feeder'
            },
            {
              name: 'CV007 Regrind Circuit'
            },
            {
              name: 'HGO2 Mill GM2001'
            }
          ]
        },
        {
          name: 'Grinding2',
          shutdowns: [
            {
              name: 'Mills Feeder2'
            },
            {
              name: 'CV007 Regrind Circuit2'
            },
            {
              name: 'HGO2 Mill GM20012'
            }
          ]
        },
      ]
    },
  ]

  siteSpan : number;
  plantSpan : number;

  siteSpanner = (sites)=>{

    let plantsCount = 0;  
    let shutdownsCount = 0;

    sites.forEach(function(site){
      plantsCount += site.plants.length;
      site.plants.forEach(function(plant){
        shutdownsCount += plant.shutdowns.length;
      })
    })
    

    console.log('Plants Count:' + plantsCount);
    console.log('Shutdowns Count:' + shutdownsCount);

    this.siteSpan = (plantsCount + shutdownsCount) + 1;
    this.plantSpan = (shutdownsCount / plantsCount) + 1;
  };

  constructor() {     
  }

  ngOnInit() { 
    this.siteSpanner(this.sites);
  }

}
