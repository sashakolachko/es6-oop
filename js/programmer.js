class Programmer {
  constructor(name, age, city, expiriance) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.expiriance = expiriance;
  }
}

class FrontEnd extends Programmer {
  constructor(name, age, city, expiriance, frameworks) {
    super(name, city, age, expiriance);
    this.frameworks = frameworks;
  }
}

class BackEnd extends Programmer {
  constructor(name, age, city, expiriance, databases) {
    super(name, city, age, expiriance);
    this.databases = [];
  }
}

class JuniorFrontEnd extends FrontEnd {
  constructor(name, age, city, expiriance, frameworks) {
    super(name, age, city, expiriance, frameworks);
  }
}

class JuniorBackEnd extends BackEnd {
  constructor(name, age, city, expiriance, databases) {
    super(name, age, city, expiriance, databases);
  }
}

let jun = new JuniorFrontEnd("sasha", 11, "Kyiv", "12", "smth");
console.log(jun);