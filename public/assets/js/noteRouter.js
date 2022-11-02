const { response } = require('express');
const express = require('express')
const path = require('path');

const notes = [];

noteRouter.get('/api/notes', (req, res) => {
    const newNote = getElementbyId(req.params.id, 'notes')
    console.log(newNote);
    if (newNote) {
        console.log('Got your note!');
        res.status(201).send('Got your note!')
    } else {
        res.status(401).send();
    }
});

noteRoute.put('api/notes', (req, res) => {
    const noteIndex = getIndexbyId(req.params.id, notes);
    if (noteIndex !== -1) {
        updateElement(req.params.id, req.query, notes);
        res.send(201).send();
    } else {
        res.status(404).send();
    }
})

noteRouter.post('api/notes', (req, res) => {
    const postNote = createElement('notes', req.query);
    if(postNote) {
        notes.push(postNote);
        res.status(201).send(postNote)
    } else {
        res.status(401).send();
    }
})

module.exports = noteRouter