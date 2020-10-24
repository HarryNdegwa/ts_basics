// data members in a class are public by default
// protected class members are only accessible within the class and also within child classes
// classes can also implement interfaces

class Car {
  static model: string;

  engine: string;

  constructor(engine: string, model: string) {
    this.engine = engine;
  }

  start(): void {
    console.log("Vroooooooommmmm.....", this.engine, " Started!");
  }
}

let myCar: Car = new Car("Fords Engine", "Isuzu");
console.log(myCar instanceof Car);

myCar.start();

Car.model = "Mitsubishi";
console.log(Car.model);
