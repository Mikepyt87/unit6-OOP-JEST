import BankAccount from "../src/models/BankAccounts";
import BankAccountWithFee from "../src/models/BankAccountWithFee";

describe("BankAccount!", () => {
  test("testing constructor and add interest method", () => {
    // first step create object with class
    const object = new BankAccount(2000, 500);
    // 2. new var to hold method "addInterest" result
    // caviat = if the method does not return we need to check original data "balance"
    object.addInterest();
    expect(object.balance).toBe(2500);
  });
});

describe("BankAccountWithFee!", () => {
  test("testing constructor and apply fee method", () => {
    // first step create object with class
    const object = new BankAccountWithFee(2000, 500);
    // 2. new var to hold method "addInterest" result
    // caviat = if the method does not return we need to check original data "balance"
    object.applyFee();
    expect(object.balance).toBe(1970);
  });
});
