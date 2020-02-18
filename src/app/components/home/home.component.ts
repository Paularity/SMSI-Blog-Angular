import { Component, OnInit } from '@angular/core';
declare const gantt : any;
declare const $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  

  tasks = {
    data: [
      { id: 1, text: "Lihir", order: 10, progress: null, open: true, level: 0 },
      { id: 2, text: "Griding", progress: null, parent: 1, open: true, level: 1 },
      { id: 3, text: "Mills Feeder",  duration: 8, progress: null, parent: 2, open: true,render:"split", level: 3 },
      { id: 4, text: "Mills Feeder #1", start_date: "02-03-2020", duration: 8, progress: null, parent: 3, open: true, level: 4 },
      { id: 5, text: "Mills Feeder #2", start_date: "12-03-2020", duration: 3, progress: null, parent: 3, open: true, level: 4 },
      { id: 6, text: "Mills Feeder #3", start_date: "22-03-2020", duration: 15, progress: null, parent: 3, open: true, level: 4 },
      { id: 7, text: "NCA",  duration: 8, progress: null, parent: 2, open: true,render:"split", level: 3 },
      { id: 8, text: "NCA #1", start_date: "02-04-2020", duration: 18, progress: null, parent: 7, open: true, level: 4 },
      { id: 9, text: "NCA #2", start_date: "12-02-2020", duration: 23, progress: null, parent: 7, open: true, level: 4 },
      { id: 10, text: "NCA #3", start_date: "22-06-2020", duration: 5, progress: null, parent: 7, open: true, level: 4 },
    ],
    links: [
      // {id: 1, source: 1, target: 2, type: "1"},
      // {id: 2, source: 2, target: 3, type: "0"}
    ]
  };

  constructor() { }

  getMarker(){
    //marker Config
    var markerId = gantt.addMarker({
      start_date: new Date(), //a Date object that sets the marker's date
      css: "today", //a CSS class applied to the marker
      text: "Now", //the marker title
      title: ( new Date()).toDateString()
  });
  }

  getHeaders(){
    //Header Config
    gantt.config.columns =  [
      {name:"text", label:"Shutdown",  tree:true, },
    ];
  }

  getScaling(){
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
          min_column_width: 0,
          scales:[
            {unit: "year", step: 1, format: "%Y"},            
            {unit: "month", step: 1, format: "%M"}
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

    var radios = document.getElementsByName("scale");
    for (var i = 0; i < radios.length; i++) {
      radios[i].onclick = function (event) {
        gantt.ext.zoom.setLevel((event.target as HTMLInputElement).value);
      };
    }
  }

  getColorCodes(){
    gantt.templates.task_class = function(start,end,task){
      if(task.level == 0){
        return "site_bar";
      }
      else if(task.level == 1){
        return "plant_bar"
      }
      else{
        return;
      }
    };
  }

  initGantt( id, data ) {
    // gantt.attachEvent("onTaskClick", (id, e) => {
    //   let task = gantt.getTask(id);
      
    //   gantt.alert({
    //     title:"Alert",
    //     type:"alert-info",
    //     text:"You have click on " + task.text
    //   });
    // });    
    this.getColorCodes();
    this.getMarker();
    this.getHeaders();
    this.getScaling();    
    gantt.config.readonly = true;
    gantt.init(id);    
    gantt.parse(data);     
  }  

  ngOnInit() {                      
    this.initGantt('gantt-sample', this.tasks);        
  }

  zoomIn = () => {
    gantt.ext.zoom.zoomIn();
  }
  zoomOut = () => {
    gantt.ext.zoom.zoomOut()
  }

}
