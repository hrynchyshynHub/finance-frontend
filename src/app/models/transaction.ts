export class Transaction {
  id: number;
  value: number;
  isIncoming: boolean = false;
  created: string;
  note: string;
  budgetId: number;
}
