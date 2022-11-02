const express = require('express')
const apiRouter = express.Router();
const noteRouter = require('./noteRouter');

apiRouter.use('/public/index.html', noteRouter)
apiRouter.use('/public/notes.html', noteRouter)

module.exports = apiRouter