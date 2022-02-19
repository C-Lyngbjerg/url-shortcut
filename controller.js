const con = require('./db/connection')

exports.shorten = async (longURL) => {
    await con.connection.query()
}

exports.retrieve = async (shortURL) => {
    const res = con.connection.query(
        'SELECT * FROM `urls` WHERE `short` = ?',
        shortURL,
        (err, res, fields) => {
            if (!err) {
                // console.log('retrieve: ', res);
                JSON.stringify(res[0])
            } else {
                console.log(err)
            }
        },
    )
    // res = JSON.stringify(res[0]);
    console.log('retrieve: ', res)
}
