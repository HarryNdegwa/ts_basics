var Car = /** @class */ (function () {
    function Car(engine, model) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Vroooooooommmmm.....", this.engine, " Started!");
    };
    return Car;
}());
var myCar = new Car("Fords Engine", "Isuzu");
console.log(myCar instanceof Car);
myCar.start();
Car.model = "Mitsubishi";
console.log(Car.model);
