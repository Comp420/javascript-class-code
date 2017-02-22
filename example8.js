var x = [0,1,2,3];

console.log(x.map(function(a) { return a + 2;}));

console.log(x.reduce(function(a,b) { return a + b; }));

console.log(x.filter(function(a) { return a >= 2; }));

console.log(x.sort(function(a,b) { return b - a; }));


var employee = [
{name:"Jim", earnings:20},
{name:"Jeff", earnings:25},
{name:"John", earnings:14}];

console.log(employee.sort(function(a,b) {return a.earnings - b.earnings;}));

function sort_by_name(a,b) {
  if (a.name < b.name) {
    return -1;
  }
  else if (a.name > b.name) {
    return 1;
  }
  else {
    return 0;
  }
}

console.log(employee.sort(sort_by_name));