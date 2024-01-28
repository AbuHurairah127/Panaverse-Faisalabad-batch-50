var num: number = 10;
let userName: string = "Naveed Sarwar"
let isCompleted: boolean = false;
let isNull: null = null;
let isUndefined: undefined = undefined
let isVoid: void = undefined

let isAny: any = "anything"
isAny = 12;
isAny = false

let isUnknown: unknown = "sf"
isUnknown = false
// console.log(isUnknown,isUnknown);

function calculateSum(num1: number, num2: number): number {
    return num1 + num2
}

function printConsole(): never {
    console.log("Print console");
    throw new Error("any error")
}
let output: void = printConsole()

function returnError(): never {
    throw new Error("Any error");
}
type carType = {
    company: string,
   
}
type companyType = {
    modal: string
}
type finalType = companyType | carType
let newCar: finalType = {
    company: "Honda",
}
type userTypeA = boolean | string
var userType: userTypeA = "Admin"
// let student:object = {
//   name: Naveed,
//   email:naveed@techloset.com,
//   phone: 234
// }

// let student1:{
//   name:string, 
//   email : string, 
//   phone:number
// } = {
//   name: Naveed,
//   email:naveed@techloset.com,
//   phone: 234
// }


// const pi = 3.133
// let data:number[] = [1,123,1231,532445,234,24234,234]
// // let datString:string[] = [afs, ASdf, ASf]
// let tuple: [string, number, boolean] = [Alice, 25,false];

// type StudentType = {
//   name: string, 
//   email:string,
//   phone:number,
//   address:string | null,
// }

// let newStudent:StudentType = {
//   name: Naveed, 
//   email:naveed@techloset.com,
//   phone:234234,
//   address: null,
// }



// let students:StudentType[]  = [{name:safd, email:saf, phone:23, address:null}, {name:'naveed', email:'naveed@techlsoet.com', phone: 3242, address: null}]





// // union
// let num3:number = 234

// let num2: number | null = null;


// num2 = 234;


// type SHAPE = {
//   area: number
//   width:number | null
// }

// type CIRCLE = {
//   size: string,
//   width:number
// }

// // intersection
// let newShape: SHAPE & CIRCLE  = {
//   area: 23,
//   size:42,
//   width:234
// }

// contact page
// type ContactForm1 = {
//   name: string, 
//   email: string, 
//   budget: number,
//   message:string | null
// }

// // about page
// type ContactForm2 = {
//   subject: string,
// }

// let newContact:ContactForm1 & ContactForm2 = {
//   name: Naveed,
//   email:naveed@techloset.com,
//   budget: 2342,
//   message: null
// }
// newContact.message


// // ## Enum
// enum COLORS {RED, GREEN, BLUE}

// COLORS[COLORS.RED]

// enum USERROLE { ADMIN, USER}


// let newAdmin = {
//   role: USERROLE.ADMIN,
//   name:Naveed
// }


// if (newAdmin.role == USERROLE.ADMIN) {
//   // do something
// }



// function swap<T>(arr:T[]):T[] {
//   return [arr[1], arr[0]]
// }

// const result:number[] = swap<number>([10,20])
// const result2:string[] = swap<string>([naveed,ali])
// const result3:boolean[]= swap<boolean>([true, false])

// console.log(result,result2);

// type StudentTypeA = {
//   name:string, 
//   email:string
// }



// type StudentTypeB = {
//   age:string, 
//   email:string
// }
// function sortedStudents<T>(arr: T[]):T[] {

//   return arr

// }

// sortedStudents<StudentTypeA>([{name:naveed, email:saf}])

// sortedStudents<StudentTypeB>([{age:naveed, email:saf}])

// function swap2(arr:string[]):string[] {
//   return [arr[1], arr[0]]
// }
// function swap3(arr:boolean[]):boolean[] {
//   return [arr[1], arr[0]]
// }


// type StudentTypeD = {
//   rollNo: number, 
//   uni: string
// }

// type StudentTypeE= {
//   class: string
// }

// type FinalType = StudentTypeD & StudentTypeE

// // const newSTudent: FinalType = {}

// type A = number | null;

// var anyVar: A[] = [234];


// interface TeacherA {
//   class: string,
//   time: number
// }

// interface StudentTypeC extends TeacherA {
//   rollNo: number, 
//   uni?: string
//   detail:TeacherA

// }

// let newObj:StudentTypeC = {
//   rollNo:234,
//   uni: NTU,
//   class:CS
// }


// interface ProductInterface {
//   id: number
//   title: string,
//   description: string,
//   price: number,
//   discountPercentage: number,
//   rating: number,
//   stock: number,
//   brand: string,
//   category: string,
//   thumbnail: string,
//   images: string[]
// }

// interface DataInterface {
//   products: ProductInterface[],
//   total: number,
//   skip: number,
//   limit: number
// }


// let data:DataInterface = {
//   products: [
//     {
//       id: 1,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       discountPercentage: 12.96,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category:" smartphones",
//       thumbnail:" ...",
//       images: ["...", "..."," ..."]
//     },
//     // 30 items
//   ],

//   total: 100,
//   skip: 0,
//   limit: 30
// }

// const myFunc = <T> (arr:T[]): T[]=>{
// return arr
// }



// let todods = {
//   "todos": [
//     {
//       "id": 1,
//       "todo": "Do something nice for someone I care about",
//       "completed": true,
//       "userId": 26
//     },
//     // 30 items
//   ],
//   "total": 150,
//   "skip": 0,
//   "limit": 30
// }
