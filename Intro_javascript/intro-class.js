//classes in js

function Car(make, model) {
    this.make = make
    this.model = model
}

function drive() {
    console.log("car is driving")
}

//Car.prototype.whatevernameoffunction = function

Car.drive = drive


//creating an instance of car class
let car = new Car("honda", "civic")

console.log(car)


//ACTIVITY 1

class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this.accountType = accountType
    }

    deposit(amount) {
      this.balance += amount  
    }

    withdraw(amount) {
        this.balance -= amount
    }
}

let account = new BankAccount (100, "checking")
account.deposit(100)
account.withdraw(50)
console.log(account.balance)