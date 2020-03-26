const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

// Yargs version
yargs.version('1.0.0');

// Create add command
yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
       title: {
           describe: 'Note title',
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
   }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing the note...');
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