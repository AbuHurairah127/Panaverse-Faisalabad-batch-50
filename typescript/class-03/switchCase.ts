// The Switch...Case conditionals is used when we have to just do matching and perform no calculation in the condition part
// !Syntax
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let _number: number = 1;

switch (_number) {
  case 1:
    console.log("Monday");

    break;
  case 2:
    console.log("Tuesday");

    break;
  case 3:
    console.log("Wednesday");

    break;
  case 4:
    console.log("Thursday");

    break;
  case 5:
    console.log("Friday");

    break;
  case 6:
    console.log("Saturday");

    break;
  case 7:
    console.log("Sunday");

    break;

  default:
    console.log("You entered a wrong number");

    break;
}
