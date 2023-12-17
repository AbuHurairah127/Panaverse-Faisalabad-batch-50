

// type resolveFunctionType = (value?: string) => void
// type rejectFunctionType = (value?: string) => void
// console.log("before async code");

// function promiseFunc(resolve:resolveFunctionType, reject:rejectFunctionType) {
//     // internt code 

//     const randomNumber: number = Math.random()

//     if (randomNumber > 0.5) {
//         resolve("Successfully done")
//     }
//     else {
//         reject("something went wrong!")
//     }

//     // console.log("randomNumber", randomNumber);
    
// }

// const result = new Promise(promiseFunc)
// result.then((success)=>{
//     console.log("success", success);
// })
// .catch((err)=>{
//     console.log("err", err);
// })

// console.log("after async code");


// const date = new Date()
// date.getDay()


class Car {
    name: string = ""
    price: number = 234
    constructor(name:string){

    }
    carStart = ()=>{
        // car that
        console.log("car successfully start")
    }
}

let car3 = new Car("something")
// console.log("car3", car3);

// car3.carStart()



// type carTypes  = {
//     name: string,
//     price: number,
//     carStart:()=> void
// } 
// class Car {
//     name: string = ""
//     price: number = 234
//     carStart = ()=>{
//         // car that
//         console.log("car successfully start")
//     }
// }

// let car3 = new Car()
// car3.name = "sdf"
// car3.anyNewkey = "asdf"
// car3.carStart()
// let car4 = new Car()
// car4.carStart()

// let car1:carTypes= {
//     name:'object',
//     price:234,
//     carStart: ()=>{
//         // car that
//         console.log("car successfully start")
//     }

// }
// car1.carStart()

// let car2: carTypes = {
//     name:'honda city',
//     price:2342,
//     carStart: ()=>{
//         // car that
//         console.log("car successfully start")
//     }
// }