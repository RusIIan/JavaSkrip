//#region task 5
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] % 2 == 0) {
    sum += arr[index];
  }
}
console.log(sum);
//#endregion

//#region task 1
function myFunction(a,b){
    return (a+b==100)||(a==100)||(b==100)||(a+b==100)
}
console.log(myFunction(98,100))
console.log(myFunction(98,2))
console.log(myFunction(16,45))
//#endregion

// task 4
function myNumber(a,b){
  let c=100-a;
  let d=100-b;
  if (c>d||c<d)
  {
    return a +' Yaxindir'
  }
  else{
    return b +' Yaxindir'
  }
}
console.log(myNumber(5,2));

// Muellim derste yazin zehmet olmasa
function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return `Py${str1}`;
}
console.log(string_check("Python"));
console.log(string_check("thon"));

function front_back3(str)
 {
  if (str.length>=3)
   {
   str_len = 3;
 
  back = str.substring(str.length-3);
   return back + str + back;
 }
   else
     return false;
 }
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));





















// //#region 
// function myFn(a,b){
//     let c;
//     a++;
//     c=a*b
//     c++
//     return c;
// }
// myFn(5,10);
// //#endregion
// const Person={
//     name:'Ruslan',
//     age:25
// }
// function isPerson(Person){
//     Person.age-=2;
//     return Person;
// }
// isPerson(Person);
// console.log(Person);
// // fdgfhgjhk

// const people={
//   name:'Nicat',
//   age:12
// }

// function myFun(people){
//   const updataPeople = Object.assign({}, people);
//   updataPeople.age += 25;
//   return updataPeople;
// }

// const updataPeople = myFn(people);
// console.log(people.age);
// console.log(updataPeople.age);