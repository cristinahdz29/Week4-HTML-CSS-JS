// In this assignment you are going to test your knowledge of class composition.Your task is to create a class which represent a "Bank Account".The Bank Account will have the following properties.

// Bank Account:

// First Name

// Last Name

// Middle Name

// Account Type

// Balance

// Status(Opened / Closed / Freeze) 

// STEP 1: CREATING CLASS

class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance) {
    if (balance < 100) {
        throw new Error("Your current balance is " + balance + ". Your balance must be greater than $100 to open account")
    } else {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = "open"
    }
    }
    // FUNCTIONS WITHIN BANK ACCOUNT CLASS --> WILL APPLY TO ALL INSTANCES OF BANKACCOUNT CLASS, WHICH ARE BANK1 AND BANK2
    //function to withdraw money
    withdraw(amount) {
        this.balance -= amount

        // this if statement will overcharge $35 if the account balance becomes less that zero after withdrawing money
        if (this.balance < 0) {
            this.balance -= 35  
        }
    }
    //deposit function
    deposit(amount) {
        this.balance += amount
    }
    //transfer function
    //using withdraw function within this class, thats why we do this.withdraw and the parameter passed in is amount, so withdrawing this amount from our accont
    //using deposit function to add amount to it
    transfer(recievingAccount, amount) {
        this.withdraw(amount)
        recievingAccount.deposit(amount)
    }


}

//creating BankAccount Instances

bank1 = new BankAccount("Ana", "Hernandez", "Cristina", "checking", 100)

bank2 = new BankAccount("Aaron", "Sosa", "Tyler", "checking", 100)