const _ = require("lodash");
const data = require("../../data/arrayData.js");

const students = _.concat(data.myClassmates, data.mySenior);
const customConcat = _.concat(data.myClassmates, "Ah Hock", "Muthu");

console.log(students);
// [ "John", "Jane", "Jack", "Jill", "Joe", "Alice", "Bob", "Charlie", "David", "Eve" ];

console.log(data.myClassmates);
// [ 'John', 'Jane', 'Jack', 'Jill', 'Joe' ]

console.log(customConcat);
// ["John", "Jane", "Jack", "Jill", "Joe", "Ah Hock", "Muthu"];
