var academic_history = {
  name: "Jason",
  class_year: 2017,
  major: "Computer Science"
}

/*
academic_history.name = "Duong";
academic_history.class_year = 2018;

console.log(academic_history.name);
console.log(academic_history.class_year);
console.log(academic_history.major);

for (key in academic_history) {
  console.log(academic_history[key]);
}
*/

var x = academic_history;
x.name = "Vanessa";

console.log(x.name);
console.log(academic_history.name);




