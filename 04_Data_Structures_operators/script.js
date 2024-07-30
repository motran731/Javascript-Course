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

// NOTES DESTRUCTURING OBJECTS
//1. order of elements does not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//2. default values in objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//3. Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//reassign different variables with :
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//DESTRUCTURING ARRAY
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
