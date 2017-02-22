var n = 1;

function plus_one (n) {
  return n + 1;
}

console.log(plus_one(n));


var plus_two = function (x) {
  return x + 2;
}

console.log(plus_two(n));


var arithmetic = {
  plus: function(a,b) { return a + b; },
  minus: function(a,b) { return a - b; }
};

console.log(arithmetic.minus(arithmetic.plus(2,3), 1));