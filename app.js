const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const corsOptions = {
    origin: 'http://localhost:8081',
}

const retrieveRouter = require('./routes/retrieve')
const shortenRouter = require('./routes/shorten')
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/shorten', shortenRouter)
app.use('/retrieve', retrieveRouter)
// simple route
// app.get('/', async (req, res) => {
//     const query = await controller.retrieve('chris-bjerge')
//     console.log(query)
//     res.json({ message: JSON.stringify(query) })
// })

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
