const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const controller = require('./controller')
const corsOptions = {
    origin: 'http://localhost:8081',
}

const retrieveRouter = require('./routes/retrieve')
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', retrieveRouter)
// simple route
// app.get('/', async (req, res) => {
//     const query = await controller.retrieve('chris-bjerge')
//     console.log(query)
//     res.json({ message: JSON.stringify(query) })
// })

// require('./app/routes/tutorial.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
