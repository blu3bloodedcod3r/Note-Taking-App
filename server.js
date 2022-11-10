const express = require('express');
const path = require('path')
const apiRouter = require('./public/assets/js/apiRouter')
const noteRouter = require('./public/assets/js/noteRouter')

const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json)
app.use(express.static('public'))

app.use('/api', apiRouter)
app.get('/', noteRouter)

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname), '/public/index.html')
});

app.listen(PORT, () =>{
    console.log(`Working!! http://localhost:${PORT}`)
})