const express = require('express')
const cors = require('cors')
const path = require('path')
const { Post } = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/posts', Post)

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
app.get('*', (req, res) => res.status(404).send('<h2>Not Found!<h2>'))

app.listen(3000, () => console.log('Server up on 3000'))