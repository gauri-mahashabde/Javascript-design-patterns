// Reference https://www.dofactory.com/javascript/design-patterns/facade

const Mortgage = function (name, uniqueId) {
    this.name = name;
    this.uniqueId = uniqueId;
}

Mortgage.prototype = {

    applyFor: function (amount) {
        let result = "approved";
        if (!this.verify(Approvals.Bank, this.uniqueId, amount)) {
            result = "denied";
        } else if (!this.verify(Approvals.Credit, this.uniqueId)) {
            result = "denied";
        } else if (!this.verify(Approvals.Background, this.uniqueId)) {
            result = "denied";
        }
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    },
    verify: (type, uniqueId, amount = 0) => {
        switch (type) {
            case Approvals.Bank:
                return new Bank(uniqueId).verify(amount);
            case Approvals.Credit:
                return new Credit(uniqueId).get();
            case Approvals.Background:
                return new Background(uniqueId).check();
        }
    }
}

const Approvals = {
    Bank: 1,
    Credit: 2,
    Background: 3
}

var Bank = function (name, id) {
    this.name = name;
    this.uniqueId = id;
    this.loanAmount = 0;
    this.verify = function (amount) {
        return this.loanAmount + amount < 100000;
    }
    this.addLoanAmount = function (amount) {
        this.loanAmount += amount;
    }
}

var Credit = function () {
    this.takenCredit = false;
    this.get = function () {
        return !this.takenCredit;
    }
}

var Background = function () {
    this.backGroundOk = true;
    this.check = function () {
        return this.backGroundOk;
    }
}

function run(name, uniqueId, amount) {
    var mortgage = new Mortgage(name, uniqueId);
    var result = mortgage.applyFor(amount);
    return result;
}

console.log(run("LAKSHMIKANT", "2KA22CS22", "10000"));

console.log(run("KARAN", "2KA22CS21", "100000"));

