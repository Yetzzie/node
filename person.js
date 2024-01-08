
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hatdog(){
    console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
  }
}

module.exports = person;