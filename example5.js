/*
// example 1
function x () {
  var a = 4;
  return a * a;
}


// example 2
var a = 4;
function y () {
  return a * a;
}

*/
// var counter = 0;

// function add() {
//   counter += 1;
// }

// add();
// add();
// add();

// console.log(counter);



// function add() {
//   var counter = 0;
//   counter += 1;
// }

// add();
// add();
// add();


// function add() {
//   var counter = 0;
//   function plus_one() {
//     counter += 1;
//   }
//   plus_one();
//   return counter;
// }

// add();
// add();
// add();


var add = (function () {
  var counter = 0;
  return function () { return counter += 1; };
})();



