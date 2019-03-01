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

  constructor(private budgetService: BudgetService) {

  }

  ngOnInit(): void {
    this.getBudgets();
    this.budgets = new Array<Budget>();
    this.isCreatingFormOpened = false;
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
    this.budgetService.createBudget(budget)
      .subscribe(data => this.budgets.push(data));
  }
}
