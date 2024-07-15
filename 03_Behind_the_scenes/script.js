'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = ` ${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Alex';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //cannot call cl(str) here
    console.log(millenial);
    console.log(add(2, 3)); //reference error unless you turn off strict mode
  }
  printAge();
  console.log(firstName);
  return age;
}
//global variable
const firstName = 'Midori';
calcAge(1988);
