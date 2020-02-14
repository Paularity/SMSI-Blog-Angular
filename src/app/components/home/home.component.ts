import { Component, OnInit } from '@angular/core';
declare const gantt : any;
declare const $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
    
    //marker Config
    var markerId = gantt.addMarker({
      start_date: new Date(), //a Date object that sets the marker's date
      css: "today", //a CSS class applied to the marker
      text: "Now", //the marker title
      title: ( new Date()).toDateString()
  });

    //Header Config
    gantt.config.columns =  [
      {name:"text", label:"Shutdown",  tree:true, },
    ];

    //Zooming Option
    var zoomConfig = {
      levels: [
        {
          name:"day",
          scale_height: 27,
          min_column_width:80,
          scales:[
            {unit: "day", step: 1, format: "%d %M"}
          ]
        },
        {
          name:"week",
          scale_height: 50,
          min_column_width:50,
          scales:[
            {unit: "week", step: 1, format: function (date) {
              var dateToStr = gantt.date.date_to_str("%d %M");
              var endDate = gantt.date.add(date, -6, "day");
              var weekNum = gantt.date.date_to_str("%W")(date);
              return "#" + weekNum + ", " + dateToStr(date) + " - " + dateToStr(endDate);
            }},
            {unit: "day", step: 1, format: "%j %D"}
          ]
        },
        {
          name:"month",
          scale_height: 50,
          min_column_width:120,
          scales:[
            {unit: "month", format: "%F, %Y"},
            {unit: "week", format: "Week #%W"}
          ]
        },
        {
          name:"quarter",
          height: 50,
          min_column_width:90,
          scales:[
            {unit: "month", step: 1, format: "%M"},
            {
              unit: "quarter", step: 1, format: function (date) {
                var dateToStr = gantt.date.date_to_str("%M");
                var endDate = gantt.date.add(gantt.date.add(date, 3, "month"), -1, "day");
                return dateToStr(date) + " - " + dateToStr(endDate);
              }
            }
          ]
        },
        {
          name:"year",
          scale_height: 50,
          min_column_width: 30,
          scales:[
            {unit: "year", step: 1, format: "%Y"}
          ]
        }
      ]
    };        
    gantt.ext.zoom.init(zoomConfig);
    gantt.ext.zoom.setLevel("year");
    gantt.ext.zoom.attachEvent("onAfterZoom", function(level, config){
      const gantt_radio = document.querySelector(".gantt_radio[value='" +config.name+ "']" ) as HTMLInputElement;
      gantt_radio.checked  = true;
    })
    
    var tasks = {
      data: [
        {
          id: 1, text: "Site 1", start_date: "02-02-2020", end_date: "03-04-2020",  duration: 18, order: 10,
          progress: null, open: true
        },
        {
          id: 2, text: "Plant 1", start_date: "02-02-2020", duration: 50, order: 10,
          progress: null, parent: 1, open: true,
        },
        {
          id: 3, text: "Plant 2", start_date: "15-02-2020", duration: 24, order: 20,
          progress: null, parent: 1, open: true
        },
        {
          id: 4, text: "Shutdown 1", start_date: "22-02-2020", duration: 8, order: 20,
          progress: null, parent: 2
        }
      ],
      links: [
        // {id: 1, source: 1, target: 2, type: "1"},
        // {id: 2, source: 2, target: 3, type: "0"}
      ]
    };
  
    gantt.init("gantt-sample");
    gantt.config.readonly = true;
    
  
    gantt.parse(tasks);    
  
    var radios = document.getElementsByName("scale");
    for (var i = 0; i < radios.length; i++) {
      radios[i].onclick = function (event) {
        gantt.ext.zoom.setLevel((event.target as HTMLInputElement).value);
      };
    }
  }

  zoomIn = () => {
    gantt.ext.zoom.zoomIn();
  }
  zoomOut = () => {
    gantt.ext.zoom.zoomOut()
  }

}
