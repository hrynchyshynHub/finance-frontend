import {Component, OnInit} from '@angular/core';
import {BudgetService} from '../services/budget.service';
import {TransactionService} from '../services/transaction.service';
import {Transaction} from '../models/transaction';
import {Budget} from '../models/budget';

@Component({
  selector: 'app-finance-managment-component',
  templateUrl: './finance-managment-component.component.html',
  styleUrls: ['./finance-managment-component.component.css']
})
export class FinanceManagmentComponentComponent implements OnInit {

  budgetTransaction: Transaction[];
  allTransactions: Transaction[];
  budgets: Budget[];

  constructor(private budgetService: BudgetService,
              private transactionService: TransactionService) {

  }

  ngOnInit(): void {
    this.getBudgets();
    this.getTransactions();
  }


  getBudgets(){
    this.budgetService.getBudgets()
      .subscribe(data => this.budgets = data);
  }

  getTransaction(budget: Budget){
    this.transactionService.getTransactionsForBudget(budget)
      .subscribe(data => {
        this.budgetTransaction = data;
        console.log(data);
      });
  }

  getTransactions(){
    this.transactionService.getTransactions()
      .subscribe(data => this.allTransactions = data);
  }
}
