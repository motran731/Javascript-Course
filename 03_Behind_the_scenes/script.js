'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = ` ${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating New variable with same name as outerscope's variable
      const firstName = 'Alex';

      //reassigning outer scope's variable
      output = 'New OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //cannot call cl(str) here
    console.log(millenial);
    //console.log(add(2, 3)); //reference error unless you turn off strict mode
    console.log(output);
  }
  printAge();
  console.log(firstName);
  return age;
}
//global variable
const firstName = 'Midori';
calcAge(1988);
