import {Component, Input, OnInit} from '@angular/core';
import {Budget} from '../models/budget';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit {

  @Input()
  budget: Budget;

  public doughnutChartLabels:string[] = ['Goal', 'Total'];
  public doughnutChartData:number[] = [1600, 1000];
  public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
    let goal = this.budget.goalAmount;
    // let goal = 1600;
    let total = this.budget.totalAmount;
    // let total = 700;

    let perTotal = total/goal * 100;
    let perGoal = 100 - perTotal;

    this.doughnutChartData = [perTotal, perGoal];
  }


  getSourcePath(budget: Budget): string{
    return "assets/" + budget.currencyType + ".png";
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
