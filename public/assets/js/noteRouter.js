const { response } = require('express');
const express = require('express');
const apiRouter = express.Router();
const { networkInterfaces } = require('os');
const path = require('path');

const notes = [];

apiRouter.get('/notes', (req, res) => {
    const newNote = getElementbyId(req.params.id, 'notes')
    console.log(newNote);
    if (newNote) {
        notes.push(newNote);
        res.status(201).send('Got your note!');
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify({ notes }, null, 2)
        )
        return newNote;
    } else {
        res.status(401).send();
    }
});

apiRouter.put('/notes', (req, res) => {
    const noteIndex = getIndexbyId(req.params.id, notes);
    if (noteIndex !== -1) {
        updateElement(req.params.id, req.query, notes);
        res.send(201).send();
    } else {
        res.status(404).send();
    }
})

apiRouter.post('/notes', (req, res) => {
    const postNote = createElement('notes', req.query);
    if(postNote) {
        notes.push(postNote);
        res.status(201).send(postNote)
    } else {
        res.status(401).send();
    }
})

module.exports = noteRouter