
class A { 
   static color:string  = "red";
    // setColor (color:string){
    //   this.color = color
    // }
    getColor(){
        return A.color
    }
}
const obj1 = new A();
obj1.setColor("blue")
console.log("obj1",obj1.color);

const obj2 = new A();
console.log("obj2",obj2.color);





// interface Shape {
//     getArea():number
// }

// abstract class AShape {
//      width:number = 0;
//      height:number = 0;
//      constructor(width:number, height:number){
//         this.width = width;
//         this.height = height;
//      }
//     getArea(){
//         return  this.width * this.height
//     }
//    abstract display():void
// }

// class Circle extends AShape {

//     constructor(private radius:number){
//         super(10,20)
//     }
//     getArea(): number {
//          return Math.PI * this.radius ** 2
//     }

//     display(): void {
//         console.log("display");
        
//     }
// }

// const shapes:Shape [] = [new Circle(10)]

// console.log(shapes[0].getArea());


// shapes.forEach((shape)=>{
//     console.log("get Area",shape.getArea());
// })


// Public, Private, Protected