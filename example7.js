var a = [19,3,4, "jason"];

console.log(a.length);

var fruits = ["mango", "apple", "kiwi", "limes", "banana"];

console.log(fruits.sort());


var s = [19,234,123,8];

console.log(s.sort(function(a,b) { return b - a; }));

console.log(fruits.toString());

console.log(fruits.join(" < "));

fruits.push("orange");
console.log(fruits.toString());

fruits.pop();
console.log(fruits.toString());

fruits.shift();
console.log(fruits.toString());

fruits.unshift("avocado");
console.log(fruits.toString());

s.splice(1,2);
console.log(s);

