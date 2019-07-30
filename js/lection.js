//ES6 OOP
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  introduction() {
    return `Hi! My name is ${this.name}. I'm ${this.age} years old :)`;
  }

  myself() {
    return "I'm just a regular person";
  }
}

class Superhero extends Person {
  constructor(name, age, city, ability) {
    super(name, age, city);
    this.ability = ability;
  }
  myself() {
    return `I'm superhero!`;
  }
}

let p1 = new Person("Sasha", 12, "Kyiv");
let s1 = new Superhero("Jack", 50, "Gost Town", "Fileballs")
// console.log(p1.introduction());
// console.log(s1.myself());
// console.log(s1.introduction());
// console.log(p1.myself());

let nums = [14, 13, 48];
let nums1 = [5, 14, 39];
let nums2 = [88, 13, 0];

// let allNums = [nums, nums1, nums2]; //не удалось совместить массивы
// console.log(allNums);
//Spread operator
// let allNums = [...nums, ...nums1, ...nums2]; //ES6 распаковка и совмесщение  массивов
// console.log(allNums);

// let reversedNums = [];
// for (num of allNums) {
//   console.log(num);
// }

// for ( let i = allNums.length-1 ; i >= 0; i++) {
//   reversedNums.push(allNums[i]);
// }
// console.log(reversedNums);
//
//
// let add = (x,y,z) => x+y+z;
// console.log(add(...nums)); //распаковка массива для 3 аргументов в функции
// class ATM {
//   constructor(cash) {
//     this.cash = cash;
//   }
//
//   showCach(){
//     return `Current amount: ${this.cash}`;
//   }
//
//   withdrawCash(amount) {
//     if(this.cash < amount) {
//       return `Not enought cash in the ATM. Avaliable ${this.cash}`;
//     }
//     this.cash -= amount;
//     return ` -${amount}. ${this.cash} left in the ATM`;
//   }
//
//   addCash(amount) {
//     this.cash += amount;
//     return `+${amount}. ${this.cash} left in the ATM`;
//   }
// }
//
// let atm = new ATM(1000);
// console.log(atm.withdrawCash(10000));
// console.log(atm.addCash(236));
