var friendAges = [34, 43, 43, 53, 33, 53, 34, 54];
// get elements by index

console.log(friendAges);
console.log(friendAges[3]);

// ANOTHER METHOD
var elements = friendAges[1];
console.log(elements);

// set elements value by index
friendAges[1] = 77;
friendAges[0] = 67;
console.log(friendAges);
// find index of an elements
var positionIndex = friendAges.indexOf(54);
console.log(positionIndex);