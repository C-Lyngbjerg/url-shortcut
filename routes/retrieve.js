const express = require('express')
const router = express.Router()
const con = require('../db/connection')

router.get('/:shortURL', (req, res, next) => {
    const shortURL = req.params.shortURL
    con.connection.query(
        'SELECT * FROM urls WHERE `short` = ?',
        shortURL,
        (err, result, fields) => {
            if (!err && result) {
                console.log(result)
                res.redirect('https://www.' + result[0].original)
            } else {
                console.log(err)
            }
        },
    )
})

module.exports = router
