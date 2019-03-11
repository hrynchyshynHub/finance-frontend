import { Component, OnInit } from '@angular/core';
import {StatisticService} from './statistic.service';
import {Currency} from '../models/currency';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [DatePipe]
})
export class StatisticsComponent implements OnInit {

  currenciesHistory: Currency[];
  isLoaded = true;
  chartOptions = {
    responsive: true
  };
  chartData = [];
  chartLabels = [];

  constructor(private statisticService :StatisticService,
              private datePipe: DatePipe) {
    this.statisticService.getStatistic()
      .subscribe(data => {
        this.currenciesHistory = data;
        this.initDiagram();
        this.isLoaded = false;
      });
  }

  ngOnInit() {
  }

  generateData(label,data){
    return {label,data}
  }

  initDiagram(){
    let usdValueArray:number[] = [];
    let eurValueArray:number[] = [];
    let builtIn:number[] = [];
    this.currenciesHistory.forEach(item => {
      this.chartLabels.push(this.datePipe.transform(item.created, 'short'));
      usdValueArray.push(item.usdValueSale);
      eurValueArray.push(item.eurValueSale);
      builtIn.push(15);
    });
    let dollarRecord = this.generateData("Dollar Sale", usdValueArray);
    let eurRecord = this.generateData("Euro Sale", eurValueArray);
    let builtInMin = this.generateData("", builtIn);
    this.chartData.push(dollarRecord);
    this.chartData.push(eurRecord);
    this.chartData.push(builtInMin);
    console.log(this.chartData)

  }

}
