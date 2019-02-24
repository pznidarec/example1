var yearsOfBirth = [1982, 1996, 2006, 2018, 1991];
console.log(yearsOfBirth);
var ages = [];
var currentYear = 2019;
for (var i = 0; i < yearsOfBirth.length; i++) {
  ages.push(currentYear - yearsOfBirth[i]);
}
console.log(ages);
for (var i = 0; i < currentYear; i++) {}
console.log(ages);
