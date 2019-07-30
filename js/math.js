class Math {
  constructor(name) {
    this.name = name;
  }

  powArr(arr) {
    return arr.map(elem => elem ** 2);
  }

  deletePositive(arr) {
    return arr.filter(elem => elem < 0);
  }

  filterLeapYear(arr) {
    return arr.filter(elem => (elem % 4) == 0)
  }

}

let math = new Math("Math");
let years = ['2004', '2013', '2014', '2016', '2020'];
let numbers = [-1, 4, 67, 907, 32, -8, 0, 21, -5];
console.log(numbers);
console.log(math.powArr(numbers));
console.log(math.deletePositive(numbers));
console.log(math.filterLeapYear(years));