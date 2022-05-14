const _ = require("lodash");
const data = require("../data/arrayData.js");

/**
 * Chunk is a function that splits an array into smaller arrays.
 * It takes two arguments: the array to split and the size of each chunk.
 * The function returns an array of arrays.
 * If the array cannot be split evenly, the final chunk will contain the remaining elements.
 * */

console.log("Before Chunk: ", data.myClassmates); // [ 'John', 'Jane', 'Jack', 'Jill', 'Joe' ]
const chunkResult = _.chunk(data.myClassmates, 2);
console.log("After Chunk: ", chunkResult); // [ [ 'John', 'Jane' ], [ 'Jack', 'Jill' ], [ 'Joe' ] ]
