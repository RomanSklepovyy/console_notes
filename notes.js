const fs = require('fs');
const chalk = require('chalk');

const yellowMessage = chalk.yellow.bold;
const greenMessage = chalk.bgGreen.bold;
const redMessage = chalk.bgRed.bold;

const printAllNotes = () => {
    const notes = loadNotes();

    console.log(greenMessage('\nYour notes: '));
    notes.forEach((note) => {
        console.log('--------------------------------------------------');
        printNote(note);
    });
    console.log('--------------------------------------------------');
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);

        return true;

    } else {
        return false;
    }


};

const removeNote = (title) => {
    const notes = loadNotes();

    const noteIndex = notes.findIndex((note) => note.title === title);

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        saveNotes(notes);
        return true;
    }

    return false;
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const data = fs.readFileSync('notes.json', 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log('--------------------------------------------------');
        printNote(note);
        console.log('--------------------------------------------------');
    } else {
        console.log(redMessage('Note not found!'));
    }
};

module.exports = {
    addNote,
    printAllNotes,
    removeNote,
    readNote
};

const printNote = (note) => {
    console.log(`${yellowMessage('Title: ')} ${note.title}`);
    console.log(`${yellowMessage('Text: ')} ${note.body}`);
};