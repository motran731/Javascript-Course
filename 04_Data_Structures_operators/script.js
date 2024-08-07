'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '13:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngred, ...otherIngred) {
    console.log(mainIngred);
    console.log(otherIngred);
  },
};

restaurant.orderDelivery({
  time: '22:00',
  address: 'via del, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//using default values

restaurant.orderDelivery({
  address: 'via del, 21',
  starterIndex: 1,
});

//NOTES
const rest1 = {
  name: 'capri',
  numGuests: 20,
};

const rest2 = {
  name: 'la la pizza',
  owner: 'Momo',
};

//OR assignment, num 0 is false
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANNOYMOUS>';
// rest2.owner = rest2.owner && '<ANNOYMOUS>';

rest1.owner &&= '<ANNOYMOUS>';
rest2.owner &&= '<ANNOYMOUS>';
console.log(rest1);
console.log(rest2);

//NOTES SPREAD OPERATOR
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const goodArray = [1, 2, ...arr];
// console.log(goodArray);
// console.log(...goodArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(...newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //iterable: arrays, strings, maps, sets. NOT objects
// const str = 'Tran';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);

//old way restaurant.orderPasta(ingredients[0],ingredients[1], ingredients[2] )
// restaurant.orderPasta(...ingredients);

//Real-world example on objects

// const newRest = { ...restaurant, found: 1999, founder: 'gssfs' };
// console.log(newRest);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'tran tran';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//NOTES DESTRUCTURING ARRAY
//destructuring, left side of equal sign
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//1. switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//2. destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//3. Receive 2 return values from a function, used destructure with order
// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //4. Nested destructuring array
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested; // skip the 4
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //5. set default values when length of array is unknown
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // NOTES DESTRUCTURING OBJECTS
// //1. order of elements does not matter
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //2. default values in objects
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //3. Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// // const { fri } = openingHours;
// // console.log(fri);

// // const {
// //   fri: { open, close },
// // } = openingHours;
// // console.log(open, close);

// //reassign different variables with :
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//NOTES rest pattern and parameter
//1) REST destructuring
//spread, because the ... is on RIGHT side of =
// const arr1 = [1, 2, ...[3, 4]];

// //REST, because on Left side of =
// const [g, h, ...others] = [1, 2, 3, 4, 5];
// console.log((g, h, others));

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //rest object

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) REST functions
// const add = function (...numbers) {
//   // console.log(numbers); puts all the elements in one array
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 9, 2, 4, 5, 6, 7, 1, 2);

// const x = [23, 8, 7];
// add(...x);
// console.log(x);

// restaurant.orderPizza('mushy', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

//NOTES Short circuiting( && and ||)
//use ANY data type, return ANY data type, short-circuiting
// console.log('-----OR-----');
// console.log(3 || 'tran');
// console.log('' || 'tran');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23; //if the num=0, then it becomes false
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest2);

// console.log('-----AND-----');
// console.log(0 && 'tran');
// console.log(7 && 'tran');
// console.log('hello' && 23 && null && 'tran');

// //Practice example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');

//   restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// }

//NOTES Nullish coalescing operator ??
// restaurant.numGuests = 0; //if the num=0, then it becomes false
// const guest1 = restaurant.numGuests || 10;
// console.log(guest1);

// //nullish: null and undefined (not 0 or '')
// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);
