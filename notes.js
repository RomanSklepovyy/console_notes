const fs = require('fs');

const getNotes = () => {

};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => note.title === title);

    if (!duplicateNotes.length) {

        notes.push({
            title,
            body
        });

        saveNotes(notes);

    } else {
        console.log('Note title taken!');
    }


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

module.exports = {
    addNote: addNote,
    getNotes: getNotes
};