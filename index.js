const validator = require('validator');
const getNotes = require('./notes.js');

console.log(validator.isURL('https://www.npmjs.com/package/validator'));