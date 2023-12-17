var num = 10;
let userName = "Naveed Sarwar";
let isCompleted = false;
let isNull = null;
let isUndefined = undefined;
let isVoid = undefined;
let isAny = "anything";
isAny = 12;
isAny = false;
let isUnknown = "string";
isUnknown = false;
console.log("isUnknown", isUnknown);
function returnError() {
    throw new Error("Any error");
}
let student = {
    name: "Naveed",
    email: "naveed@techloset.com",
    phone: 234
};
let student1 = {
    name: "Naveed",
    email: "naveed@techloset.com",
    phone: 234
};
const pi = 3.133;
let data = [1, 123, 1231, 532445, 234, 24234, 234];
// let datString:string[] = ["afs", "ASdf", "ASf"]
let tuple = ["Alice", 25, false];
let newStudent = {
    name: "Naveed",
    email: "naveed@techloset.com",
    phone: 234234,
    address: null,
};
let students = [{ name: "safd", email: "saf", phone: 23, address: null }, { name: 'naveed', email: 'naveed@techlsoet.com', phone: 3242, address: null }];
// union
let num3 = 234;
let num2 = null;
num2 = 234;
// intersection
let newShape = {
    area: 23,
    size: "42",
    width: 234
};
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
//   name: "Naveed",
//   email:"naveed@techloset.com",
//   budget: 2342,
//   message: null
// }
// newContact.message
// ## Enum
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["GREEN"] = 1] = "GREEN";
    COLORS[COLORS["BLUE"] = 2] = "BLUE";
})(COLORS || (COLORS = {}));
COLORS[COLORS.RED];
var USERROLE;
(function (USERROLE) {
    USERROLE[USERROLE["ADMIN"] = 0] = "ADMIN";
    USERROLE[USERROLE["USER"] = 1] = "USER";
})(USERROLE || (USERROLE = {}));
let newAdmin = {
    role: USERROLE.ADMIN,
    name: "Naveed"
};
if (newAdmin.role == USERROLE.ADMIN) {
    // do something
}
function swap(arr) {
    return [arr[1], arr[0]];
}
const result = swap([10, 20]);
console.log("result", result);
export {};
