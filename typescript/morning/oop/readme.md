# Object orinted programming
<!-- Classes, Function overloading, function overiding -->
## Four pillar of oop
- Inheritance
- Encapsulation
- Abstraction
- Polymorphism


## Multiple inhertance:
// Interface for a shape
interface Shape {
  color: string;
  getArea(): number;
  displayInfo(): void;
}

// Base class implementing the Shape interface
class BasicShape implements Shape {
  constructor(public color: string) {}

  getArea(): number {
    return 0; // Default implementation, to be overridden in derived classes
  }

  displayInfo(): void {
    console.log(`This is a ${this.color} shape.`);
  }
}

// Derived class 1: Circle
class Circle extends BasicShape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  displayInfo(): void {
    console.log(`This is a ${this.color} circle with a radius of ${this.radius}.`);
  }
}

// Derived class 2: Rectangle
class Rectangle extends BasicShape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }

  displayInfo(): void {
    console.log(`This is a ${this.color} rectangle with dimensions ${this.width}x${this.height}.`);
  }
}

// Function to calculate and display the area of a shape
function calculateAndDisplayArea(shape: Shape): void {
  console.log(`Area: ${shape.getArea()}`);
}

// Usage
const redCircle: Shape = new Circle("red", 5);
const blueRectangle: Shape = new Rectangle("blue", 4, 6);

redCircle.displayInfo();        // This is a red circle with a radius of 5.
calculateAndDisplayArea(redCircle); // Area: 78.53981633974483

blueRectangle.displayInfo();           // This is a blue rectangle with dimensions 4x6.
calculateAndDisplayArea(blueRectangle); // Area: 24

## Multilevel intertance:
// Base class
class Vehicle {
  constructor(public brand: string) {}

  startEngine() {
    console.log(`${this.brand}'s engine started.`);
  }

  stopEngine() {
    console.log(`${this.brand}'s engine stopped.`);
  }
}

// Derived class 1
class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand);
  }

  drive() {
    console.log(`Driving ${this.brand} ${this.model}.`);
  }
}

// Derived class 2 (multilevel inheritance)
class ElectricCar extends Car {
  constructor(brand: string, model: string, public batteryCapacity: number) {
    super(brand, model);
  }

  charge() {
    console.log(`Charging ${this.brand} ${this.model} with ${this.batteryCapacity} kWh.`);
  }
}

// Usage
const teslaModel3 = new ElectricCar("Tesla", "Model 3", 75);

teslaModel3.startEngine();  // Tesla's engine started.
teslaModel3.drive();        // Driving Tesla Model 3.
teslaModel3.charge();       // Charging Tesla Model 3 with 75 kWh.
teslaModel3.stopEngine();   // Tesla's engine stopped.


## Encapsulation:

class BankAccount {
  private balance: number = 0;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}




## Abstraction

abstract class Vehicle {
  constructor(private brand: string) {}

  startEngine(): void {
    console.log(`${this.brand}'s engine started.`);
  }

  abstract drive(): void;
}

class Car extends Vehicle {
  constructor(brand: string, private model: string) {
    super(brand);
  }

  drive(): void {
    console.log(`Driving ${this.brand} ${this.model}.`);
  }
}


## Polymorphism:

interface Animal {
  makeSound(): void;
}

class Dog implements Animal {
  makeSound() {
    console.log("Dog barks.");
  }
}

class Cat implements Animal {
  makeSound() {
    console.log("Cat meows.");
  }
}
