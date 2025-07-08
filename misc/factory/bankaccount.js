// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }

function createBankAccount() {
    let balance = 0;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            balance -= amount;
        },
        checkBalance() {
            return balance;
        }
    }
}

account = createBankAccount();
account.deposit(500);
console.log(account.checkBalance());
account.withdraw(127);
console.log(account.checkBalance());
