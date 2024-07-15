'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = ` ${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  console.log(firstName);
  return age;
}
//global variable
const firstName = 'Midori';
calcAge(1988);
