// function describeAge(age) {
//   let word = "You're a(n)";
//   let result = (age <= 12) ? `${word} kid` : 
//             (age >= 13 && age <= 17 ) ? `${word} teenager` :
//             (age >= 18 && age <= 64 ) ? `${word} adult` :
//             `${word} elderly`;

//     return result;
//   }

// console.log(describeAge(9));
// console.log(describeAge(10));
// console.log(describeAge(11));
// console.log(describeAge(12));
// console.log(describeAge(13));
// console.log(describeAge(14));
// console.log(describeAge(15));
// console.log(describeAge(16));
// console.log(describeAge(17));
// console.log(describeAge(18));
// console.log(describeAge(19));
// console.log(describeAge(63));
// console.log(describeAge(64));
// console.log(describeAge(65));
// console.log(describeAge(66));
// console.log(describeAge(100));
function describeAge(a) {return `You're a(n) ${a<=12?"kid":a<=17?"teenager":a<=64?"adult":"elderly"}`;}
