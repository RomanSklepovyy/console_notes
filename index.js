const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

const greenMessage = chalk.black.bgGreen.bold;

console.log(greenMessage('Success!'));
