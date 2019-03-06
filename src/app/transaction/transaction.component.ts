import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transaction} from "../models/transaction";
import {BudgetService} from "../services/budget.service";
import {Budget} from "../models/budget";
import {TransactionService} from '../services/transaction.service';
import {_finally} from 'rxjs-compat/operator/finally';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input()
  transactions: Transaction[];
  @Input()
  budgets: Budget[];
  newTransaction: Transaction;
  isCreatingFormOpened: boolean;

  @Output() transactionsCreated: EventEmitter<boolean> = new EventEmitter();

  constructor(private budgetService: BudgetService,
              private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    // this.transactions = new Array<Transaction>();
    this.isCreatingFormOpened = false;
  }

  createTransaction(){
    this.isCreatingFormOpened = true;
    this.newTransaction = new Transaction();
  }

  saveTransaction(transaction: Transaction){
    this.isCreatingFormOpened = false;
    this.transactionService.createTransaction(transaction)
      .subscribe(data => {
        this.transactions.push(data);
        this.transactionsCreated.emit(true);
      });

    // this.transactions.push(transaction);
  }

  public getColor(transaction: Transaction): string{
    return transaction.isIncoming ? "green" : "red";
  }
  public findBudgetById(id: number) : Budget{
    return this.budgets.find((item: Budget) => id == item.id);
  }
}
