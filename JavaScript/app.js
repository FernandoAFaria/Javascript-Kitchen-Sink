var name = "Fernando";
const numOfStates = 50;
const result = 5 + 4;
//
// Checking if first letter starts with 'L'
//
// if(name[0] == 'L' || name[0] == 'l'){
//   console.log('Bakc of the line!');
//
// }else {
//   alert('Next!');
// }
//
//
// function sayHello() {
//   alert('Hello World!');
// }
//
// sayHello()
//
// Function that checks if user is less than 21 years old//
//
// function checkAge(name, age) {
//   if(age < 21){
//     alert(`Sorry ${name}, you aren't old enough to view this page!`);
//   }
// }
// checkAge('Charles', 21);
// checkAge('Abby', 27);
// checkAge('James', 18);
// checkAge('John', 17);
//
//
//
// var vegetables = ['brocolli', 'asparagus', 'corn'];
// for(each in vegetables){
//   console.log(vegetables[each]);
// }
//
// var people = [{name: 'John', age: 10},{name: 'Bill', age: 10},{name: 'Bob', age: 30},{name: 'Dick', age: 22},{name: 'Harry', age: 44}]
//
// for(i in people){
//   checkAge(people[i].name, people[i].age);
// }
function getLength(word) {
  return word.length;
}
var lengthOfWord = getLength('Hello World!');
if(lengthOfWord % 2 == 0){
  console.log('The world is nice and even!');
}
else{
  console.log('The world is an odd place!');
}
