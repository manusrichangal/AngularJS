import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

    this.options = {

      chart: {
        zoomType: 'x',
        inverted: true
    },
    title: {
        text: 'TRIALS'
    },
    subtitle: {
        text: 'Click and drag in the plot area to zoom in'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar','Apr','May','June','July']
    },
    yAxis: {          
      title:{
         text:"Temperature °C"
      } },
      plotOptions: {
        series: {
           dataLabels: {
              enabled: true
           }
        }
     },
      tooltip:{
        valueSuffix: "°C"
      },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top'
    },

    series: [{
        name: 'Average',
        data: [45, 45, 45,45,45,45,45]
    }, {
        name: 'Monthly',
        data: [32, 30, 35, 25, 20, 40, 22]
    }]

    };
  }
  options: object;
  
}
