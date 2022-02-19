const express = require('express')
const router = express.Router()
const con = require('../connection')



router.get('/:shortURL', (req, res, next) => {
    const shortURL = req.params.shortURL
    con.connection.query(
        'SELECT * FROM `urls` WHERE `short` = ?',
        shortURL,
        (err, result, fields) => {
            if (!err) {
                // console.log('retrieve: ', res);
                // JSON.stringify(res[0]);
                // res.send(result)
                res.redirect('https://www.'+result[0].original)
            } else {
                console.log(err)
            }
        },
    )
})

module.exports = router
