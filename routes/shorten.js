const express = require('express')
const router = express.Router()
const con = require('../db/connection')
const uuid = require('uuid')

router.get('/:original(*)', (req, res, next) => {
    const newURL = {original: req.params.original, short: uuid.v4().substring(0,8)}
    console.log(newURL)
    con.connection.query(
        'INSERT INTO urls SET ?',
        newURL,
        (err, result, fields) => {
            if (!err) {
                // res.redirect('https://www.' + result[0].original)
                res.send({newURL: newURL})
            } else {
                console.log(err)
            }
        },
    )
})

module.exports = router