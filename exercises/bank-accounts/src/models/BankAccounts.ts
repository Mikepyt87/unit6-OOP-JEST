export default class BankAccount {
  //properties
  balance: number;
  interestRate: number;

  // constructor
  constructor(balance: number, interestRate: number) {
    this.balance = balance;
    this.interestRate = interestRate;
  }

  // methods
  // if returns "void" we are editing original data
  addInterest(): void {
    this.balance += this.interestRate;
  }
}
