const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')

const postRoute = require('./routes/post')
const getRoute = require('./routes/get')
const deleteRoute = require('./routes/delete')
const putRoute = require('./routes/put')

dotenv.config()

const PORT = 1808

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('Connected to MONGODB')
    }
)

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/post', postRoute)
app.use('/api/get', getRoute)
app.use('/api/delete', deleteRoute)
app.use('/api/put', putRoute)

app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`)
})
