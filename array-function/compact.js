const _ = require("lodash");
const data = require("../data/arrayData.js");

const cleanWords = _.compact(data.randomWord)

console.log(cleanWords)