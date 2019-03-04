import {Component, Input, OnInit, Output} from '@angular/core';
import {Budget} from '../models/budget';
import {BudgetService} from '../services/budget.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {

  budgets: Budget[];
  newBudget: Budget;
  isCreatingFormOpened: boolean;

  public doughnutChartLabels:string[] = ['Goal', 'Total'];
  public doughnutChartData:number[] = [1600, 1000];
  public doughnutChartType:string = 'doughnut';


  constructor(private budgetService: BudgetService) {

  }

  ngOnInit(): void {
    // this.getBudgets();
    this.budgets = new Array<Budget>();
    this.isCreatingFormOpened = false;

    let goal = 1800;
    let total = 1600;

    let perTotal = total/goal * 100;
    let perGoal = 100 - perTotal;

    this.doughnutChartData = [perTotal, perGoal];

  }

  getBudgets(){
    this.budgetService.getBudgets()
      .subscribe(data => this.budgets = data);
  }


  createBudget(){
    this.isCreatingFormOpened = true;
    this.newBudget = new Budget();
  }

  saveBudget(budget: Budget){
    this.isCreatingFormOpened = false;
    // this.budgetService.createBudget(budget)
    //   .subscribe(data => this.budgets.push(data));
    this.budgets.push(budget);
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
