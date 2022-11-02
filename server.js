const express = require('express');
const path = require('path')
//const apiRouter = require('./public/assets/js/apiRouter')

const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json)
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.post('/api/notes', (req, res) => {
    req.
})

app.delete('api/notes', (req, res) => {

})

//route for notes html page

//route for homepage html

app.listen(PORT, () =>{
    console.log('Working!! http://localhost:3001')
})