import {Component, Input, OnInit, Output} from '@angular/core';
import {Budget} from '../models/budget';
import {BudgetService} from '../services/budget.service';
import {TransactionService} from '../services/transaction.service';
import {Transaction} from '../models/transaction';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {

  @Input()
  budgets: Budget[];
  @Input()
  totalUsdAmountAcrossBudget: number;
  @Input()
  totalEurAmountAcrossBudget: number;
  @Input()
  totalUahAmountAcrossBudget: number;
  newBudget: Budget;
  isCreatingFormOpened: boolean;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    // this.budgets = new Array<Budget>();
    this.isCreatingFormOpened = false;
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
