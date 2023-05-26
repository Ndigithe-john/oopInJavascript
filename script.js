'use strict';
// TaskI
// Properties: accountNumber (string), accountHolder (string), balance (number).
// Methods: getAccountNumber(), getAccountHolder(), getBalance(), deposit(amount), withdraw(amount)
//Creating base class Account
class BankAccount {
  #accountNumber;
  #accountHolder;
  #balance;
  constructor() {
    this.#accountNumber = accountNumber;
    this.#accountHolder = accountHolder;
    this.#balance = balance;
  }

  getaccountNumber() {
    return this.#accountNumber;
  }

  getaccountHolder() {
    return this.#accountHolder;
  }

  getbalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Insufficient funds. Withdrawal canceled.');
    }
  }
}
// /  Task(II)Implement two derived classes: SavingsAccount and CheckingAccount. Both classes should inherit from the BankAccount base class and have additional properties specific to each account type]
class SavingsAccount extends BankAccount {
  #interestRate;
  constructor(accountNumber, accountHolder, balance) {
    super(accountNumber, accountHolder, balance);
    this.#interestRate = interestRate;
  }

  getinterestRate() {
    return this.#interestRate;
  }

  calculateInterest() {
    const interest = this.getbalance * this.#interestRate;
    console.log(`Interest amount: ${interest}`);
    return interest;
  }
}

class CheckingAccount extends BankAccount {
  // The CheckingAccount class should have an additional property called overdraftLimit (number) and a method called withdraw(amount) that allows overdraft up to the specified limit.
  #overdraftLimit;
  constructor(accountNumber, accountHolder, balance) {
    super(accountNumber, accountHolder, balance);
    this.#overdraftLimit = overdraftLimit;
  }

  getoverdraftLimit() {
    return this.#overdraftLimit;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else if (amount <= this.#balance + this.#overdraftLimit) {
      console.log('Overdraft used.');
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log(
        'Withdrawal exceeds balance and overdraft limit. Withdrawal canceled.'
      );
    }
  }
}

// Create instances of account types
const savingsAccount = new SavingsAccount('111', 'Johnnie', 1229, 0.05);
const checkingAccount = new CheckingAccount('222', 'Johnnie2', 500, 10000);

// Retrieve account information
console.log('Savings Account:');
console.log('Account Number:', savingsAccount.accountNumber);
console.log('Account Holder:', savingsAccount.accountHolder);
console.log('Balance:', savingsAccount.balance);

console.log('Checking Account:');
console.log('Account Number:', checkingAccount.accountNumber);
console.log('Account Holder:', checkingAccount.accountHolder);
console.log('Balance:', checkingAccount.balance);

// Deposit an amount
savingsAccount.deposit(500);
checkingAccount.deposit(200);

// Withdraw an amount
savingsAccount.withdraw(200);
checkingAccount.withdraw(700);

// Calculate and display interest for savings account
savingsAccount.calculateInterest();
