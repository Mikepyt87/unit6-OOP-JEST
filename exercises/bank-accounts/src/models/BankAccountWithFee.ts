import BankAccount from "./BankAccounts";

export default class BankAccountWithFee extends BankAccount {
  fee: number = 30;
  constructor(balance: number, interestRate: number) {
    super(balance, interestRate);
  }
  // methods
  applyFee(): void {
    this.balance -= this.fee;
  }
}
