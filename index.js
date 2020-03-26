const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

// Yargs version
yargs.version('1.0.0');
// Colour messages
const greenMessage = chalk.green.bold;
const redMessage = chalk.red.bold;

// Create add command
yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
       title: {
           describe: 'New note title',
           demandOption: true,
           type: 'string'
       },
       body: {
           describe: 'Body title',
           demandOption: true,
           type: 'string'
       }
   },
   handler: (argv) => {
       notes.addNote(argv.title, argv.body);
       console.log(greenMessage('Note successfully added!'));
   }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Removing note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        if (notes.removeNote(argv.title)) {
            console.log(greenMessage('Note successfully deleted!'));
        } else {
            console.log(redMessage('Note not found!'));
        }
    }
});

// Create add command
yargs.command({
    command: 'list',
    describe: 'Printing all notes',
    handler: () => {
        console.log('Printing all notes...');
    }
});

// Create add command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading the note...');
    }
});

yargs.parse();