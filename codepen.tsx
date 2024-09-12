function Car(make, model) {
  this.make = make;
  this.model = model;
  this.drive = function () {
    console.log(`Driving a ${this.make} ${this.model}`);
  };
}

const myCar = new Car("Toyota", "Corolla");
myCar.drive(); // Outputs: Driving a Toyota Corolla

// ES6 Class Syntax
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`Driving a ${this.make} ${this.model}`);
  }
}

const myCar = new Car("Honda", "Civic");
myCar.drive();
