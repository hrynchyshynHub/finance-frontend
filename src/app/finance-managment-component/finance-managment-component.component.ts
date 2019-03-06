import {Component, OnInit} from '@angular/core';
import {BudgetService} from '../services/budget.service';
import {TransactionService} from '../services/transaction.service';
import {Transaction} from '../models/transaction';
import {Budget} from '../models/budget';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-finance-managment-component',
  templateUrl: './finance-managment-component.component.html',
  styleUrls: ['./finance-managment-component.component.css'],
  providers : [DatePipe]
})
export class FinanceManagmentComponentComponent implements OnInit {

  budgetTransaction: Transaction[];
  allTransactions: Transaction[];
  budgets: Budget[];
  totalUsdAmountAcrossBudget: number;
  totalEurAmountAcrossBudget: number;
  totalUahAmountAcrossBudget: number;
  date = new Date();

  constructor(private budgetService: BudgetService,
              private transactionService: TransactionService) {

  }

  ngOnInit(): void {
    this.getBudgets();
    this.getTransactions();
  }


  getBudgets(){
    this.budgetService.getBudgets()
      .subscribe(data => {
        this.budgets = data
        this.calculateTotal();
      });
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

  onTransactionsCreated(e: boolean) {
    console.log('onTransactionsCreated');
    this.getBudgets();
  }

  public calculateTotal(){
    console.log('dudgets -> ' + this.budgets);
    this.totalUsdAmountAcrossBudget = this.getTotalAmount('USD');
    this.totalEurAmountAcrossBudget = this.getTotalAmount('EUR');
    this.totalUahAmountAcrossBudget = this.getTotalAmount('UAH');
  }

  public getTotalAmount(type: string): number {
    return this.budgets
      .filter(budget => budget.currencyType.toLowerCase() == type.toLowerCase())
      .map(budget=> budget.totalAmount)
      .reduce((sum, current) => sum + current, 0);
  }

}
