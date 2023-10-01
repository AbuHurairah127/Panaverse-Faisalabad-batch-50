// // Procedural oriented programming | Functional programming
// // OOPs
// let user: { name: string } = { name: "Abuhurairah" };
// user.name;
// class Car {
//   company: string = "";
//   modelYear: number = 0;
//   color: string = "";

//   constructor(_company: string, _modelYear: number, _color: string) {
//     this.company = _company;
//     this.modelYear = _modelYear;
//     this.color = _color;
//   }
//   start() {
//     console.log("engine starting");
//   }
// }

// const car1 = new Car("Honda", 2023, "White");
// car1.start();
// car1.start();
// car1.start();
// car1.start();
// console.log("🚀 ~ file: index.ts:21 ~ car1:", car1);
// const car2 = new Car("BMW", 2023, "BLACK");
// console.log("🚀 ~ file: index.ts:23 ~ car2:", car2);
// const car3 = new Car("Audi", 2023, "Grey");
// console.log("🚀 ~ file: index.ts:25 ~ car3:", car3);

interface Car {
  company: string;
  modelYear: 2023;
  color: string;
  start: () => void;
}

const car: Car = {
  company: "BMW",
  color: "Black",
  modelYear: 2023,
  start: () => {
    console.log("lorem", "first");
  },
};

class CAR {
  company: string;
  modelYear: number;
  color: string;
  constructor(_company: string, _modelYear: number, _color: string) {
    this.company = _company;
    this.modelYear = _modelYear;
    this.color = _color;
  }

  start() {
    console.log("car started");
  }
}
const bmw = new CAR("BMW", 2023, "White");
const audi = new CAR("AUDI", 2023, "Black");
