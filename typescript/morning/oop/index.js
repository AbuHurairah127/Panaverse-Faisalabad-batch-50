class Shape {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
var shapeObj = new Shape(5, 2);
console.log("shapeObj", shapeObj.getArea());
class Cube extends Shape {
    length;
    constructor(length, width, height) {
        super(width, height);
        this.length = length;
    }
}
const cubeObj = new Cube(10, 2, 4);
console.log("cubeObj", cubeObj.getArea());
class Seat {
    count;
    seatColor;
    heated;
    constructor(count, seatColor, heat) {
        this.count = count;
        this.seatColor = seatColor;
        this.heated = heat;
    }
}
var seat = new Seat(4, "black", false);
class Car extends Seat {
    company;
    price;
    color;
    constructor(company, price, color) {
        super(4, "black", false);
        this.company = company;
        this.price = price;
        this.color = color;
    }
    getCompany() {
        return this.company;
    }
    setCompany(a) {
        this.company = a;
    }
}
var carObject1 = new Car("Toyota", 2342, "red");
var carObject2 = new Car("Kia", 3442, "red");
var carObject3 = new Car("Honda", 21431, "green");
carObject1.setCompany("honda");
carObject3.setCompany("Toyota");
console.log(carObject1);
// console.log("getCompany 1",carObject1.getCompany());
// console.log("getCompany 2",carObject2.getCompany());
// console.log("getCompany 3",carObject3.getCompany());
var car1 = {
    company: "honda",
    price: 234,
    color: 'red',
};
car1.company = "kia";
var car2 = {
    company: "honda",
    price: 234,
    color2: 'red',
};
export {};
