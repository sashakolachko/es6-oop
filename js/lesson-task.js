//shop -> name, city, type ||||clients=[], item[]
//addClient(client:object)
//client.city = shop.city
//removeAllClents()
//addItem(item:string)
//deleteItem
//ishop <-- shop;  (website, deliveryService | websiteUsers[])
//order(client, item) if item in items
//register(email)
//market <-- shop; type=[sport, alcohol]
//client.city = shop.city
//client -> name, city

class Shop {
  constructor(name, city, type) {
    this.name = name;
    this.city = city;
    this.type = type;
    this.clients = [];
    this.items = [];
  }


  addClient(client) {
    if (this.city == client.city) {
      this.clients.push(client);
    }
  }

  removeAllClents() {
    this.clients = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  deleteItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}

class Market extends Shop {

  addTypes(type) {
    this.type.push(type);
  }
}

class IShop extends Shop {
  constructor(name, city, type, website, deliveryService) {
    super(name, city, type);
    this.website = website;
    this.deliveryService = deliveryService;
    this.websiteUsers = [];
  }

  register(email) {
    this.websiteUsers.push(email);
  }

  order(client, item) {
    if (this.items.includes(item)) {
      return `Dear, ${client.name}, you have ordered ${item}!`;
    } else {
      return "Sorry!"
    }
  }

}

class Client {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
}

let shop = new Shop("ATB", "Kyiv", "griserry");
let market = new Market("koko", "Kyiv");
let sasha = new Client("Sasha", "Kyiv");
let dasha = new Client("Dasha", "Kiiv");

market.addClient(sasha);
console.log(market);
