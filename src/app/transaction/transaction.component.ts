import {Component, Input, OnInit, Output} from '@angular/core';
import {Transaction} from "../models/transaction";
import {BudgetService} from "../services/budget.service";
import {Budget} from "../models/budget";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];
  budgets: Budget[];
  newTransaction: Transaction;
  isCreatingFormOpened: boolean;

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit(): void {
    this.transactions = new Array<Transaction>();
    this.budgetService.getBudgets()
      .subscribe(data => this.budgets = data);
    this.isCreatingFormOpened = false;
  }

  getTransactions(){

  }

  createTransaction(){
    this.isCreatingFormOpened = true;
    this.newTransaction = new Transaction();
  }

  saveTransaction(transaction: Transaction){
    this.isCreatingFormOpened = false;
    transaction.created = '13 March';
    this.transactions.push(transaction);
  }

  public getColor(transaction: Transaction): string{
    return transaction.isIncoming ? "green" : "red";
  }
}
