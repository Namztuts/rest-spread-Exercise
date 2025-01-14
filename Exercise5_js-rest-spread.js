// Refactor it to use the rest operator & an arrow function:
function filterOutOdds() {
   var nums = Array.prototype.slice.call(arguments);
   return nums.filter(function (num) {
      return num % 2 === 0;
   });
}
const filterOutOddsNew = (...arguments) =>
   arguments.filter((nums) => nums % 2 === 0);

/*
// **findMin**
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

*/
const findMin = (...arguments) => Math.min(...arguments);

/*
// **mergeObjects**
Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

*/
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

/*
// **doubleAndReturnArgs**
Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

*/
const doubleAndReturnArgs = (arr, ...arguments) => [
   ...arr,
   ...arguments.map((v) => v * 2),
];

/** remove a random element in the items array
and return a new array without that item. */
const items = [10, 20, 30, 40, 50, 60];
const removeRandom = (items) => {
   let rand = Math.floor(Math.random() * items.length);
   console.log(rand);
   // Example: rand = 2; rand = 30; so we are returning the (items) arr starting at index 0 and ending at index 2 (rand)
   // and then adding another array that starts at 2(rand)+ 1; which would be everything after that index;
   return [...items.slice(0, rand), ...items.slice(rand + 1)];
};

/** Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const tea = {
   type: 'oolong',
   name: 'winter sprout',
   origin: 'taiwan',
};
const teaData = {
   steepTime: '30s',
   brewTemp: 175,
};
const addKeyVal = (obj, key, val) => {
   let newObj = { ...obj };
   newObj[key] = val;
   return newObj;
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
   let newObj = { ...obj };
   delete newObj[key];
   return newObj;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
   return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */
// Can just use addKeyVal to do the same thing
const update = (obj, key, val) => {
   let newObj = { ...obj };
   newObj[key] = val;
   return newObj;
};
