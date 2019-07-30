class Card {
  constructor(number, pin, bank, client) {
    this.number = number;
    this.pin = pin;
    this.bank = bank;
    this.client = client;
    this.amountMoney = 0;
  }

  addMoney(amount) {
    this.amountMoney += amount;
  }
  withdraw(amount) {
    this.amountMoney -= amount;
  }
  transferMoney(card, amount) {
    this.withdraw(amount);
    card.addMoney(amount);
  }
}

class Atm {
  constructor(bank, amountMoney) {
    this.bank = bank;
    this.amountMoney = amountMoney;
  }
  withdraw(card, amount) {
    if (this.amountMoney < amount) {
      alert("Not enough money in the ATM");
      return;
    }
    if (card.bank != bank) {
      alert("This is the card of another bank! ")
      return;
    }
    card.withdraw(amount);
  }
  addMoney(card, amount) {
    if (this.amountMoney < amount) {
      alert("Not enough money in the ATM");
      return;
    }
    if (card.bank != this.bank) {
      alert("This is the card of another bank! ");
      return;
    }
    card.addMoney(amount);
  }

  changePin(card, oldPin, newPin) {
    if (card.pin != oldPIN) {
      alert("Wrong PIN");
    } else {
      card.pin = newPIN;
    }
  }

}

class AtmAdaptor {
  constructor(bank, amountMoney) {
    this.atm = new Atm(bank, amountMoney);
  }

  checkAmount(card) {
    if (card.bank != this.atm.bank) {
      return "This is the card of another bank! ";
    } else {
      return `${card.amount} left on this card`;
    }
  }

  withdraw(card, amount) {
    return this.atm.withdraw(card, amount);
  }
  addMoney(card, amount) {
    return this.atm.addMoney(card, amount);
  }

  changePin(card, oldPin, newPin) {
    return this.atm.changePin(card, oldPin, newPin);
  }
}


class Client {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.cards = [];
  }

  createCard(bank) {
    let card = new Card(Math.floor(1000000000000000 + Math.random() * 9000000000000000), Math.floor(1000 + Math.random() * 9000), bank, this);
    this.cards.push(card);
    return card;
  }

  showTotalBalance() {
    let balance = 0;
    for (let i = 0; i < this.cards.length; i++) {
      balance += this.cards[i].amountMoney;
    }
    return balance;
  }

  getCardByBank(bank) {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].bank == bank) {
        return this.cards[i];
      }
    }
  }
}


class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  openAccount(client) {
    if (this.accounts.indexOf(client) == -1) {
      this.accounts.push(client);
      client.createCard(this);
    } else {
      alert("Account is already exist!");
    }
  }


  closeAccount(card) {
    let index = this.accounts.indexOf(card.client);
    this.accounts.splice(index, 1);
    index = card.client.cards.indexOf(card);
    card.client.cards.splice(index, 1);
  }
}


let sasha = new Client("Sasha", "Kyiv");
let universal = new Bank("Universal");
universal.openAccount(sasha);
console.log(universal.accounts[0]);
let universalAtm = new AtmAdaptor(universal, 2000);
universalAtm.addMoney(sasha.getCardByBank(universal), 1000);
console.log(sasha.showTotalBalance());
universal.closeAccount(sasha.getCardByBank(universal));
console.log(universal.accounts);