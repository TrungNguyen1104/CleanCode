//Constructor
class Account{
	constructor(credit, debit, accountNumber){
		this.credit = credit,
		this.debit = debit,
		this.accountNumber = accountNumber
	}
}

var accounts = [];

 // Random value for Account

function createNewCreditAccount() {
    return new Account(Math.random(), Math.random(), Math.random());
}

function createNewDebitAccount() {
    return new Account(null, Math.random(), Math.random());
}

function createNewUnidentifiedAccount() {
    return new Account(null, null, Math.random());
}

function createAccountList() {
    accounts.push(createNewCreditAccount());
    accounts.push(createNewCreditAccount());
    accounts.push(createNewCreditAccount());
    accounts.push(createNewDebitAccount());
    accounts.push(createNewDebitAccount());
    accounts.push(createNewDebitAccount());
    accounts.push(createNewUnidentifiedAccount());
    accounts.push(createNewUnidentifiedAccount());
    accounts.push(createNewUnidentifiedAccount());
}

createAccountList();
console.log(accounts);

//Sort function
function sorting(accounts) {
    var sortedCreditAccount = [];
    var sortedDebitAccount = [];
    var sortedUnidentifiedAccount = [];
    var sortedList = [];
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].credit != null) {
            sortedCreditAccount.push(accounts[i]);
        } else if (accounts[i].debit != null) {
            sortedDebitAccount.push(accounts[i]);
        } else {
            sortedUnidentifiedAccount.push(accounts[i]);
        }
    }

    sortedCreditAccount.sort(function(a,b){
		return b.accountNumber - a.accountNumber;
	})
	sortedDebitAccount.sort(function(a,b){
		return b.accountNumber - a.accountNumber;
	})
	sortedUnidentifiedAccount.sort(function(a,b){
		return b.accountNumber - a.accountNumber;
	})
	sortedList = sortedCreditAccount.concat(sortedDebitAccount).concat(sortedUnidentifiedAccount);
	return sortedList;
}
console.log(sorting(accounts));

