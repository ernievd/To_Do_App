const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', function(req, res){
    const queryText = 'SELECT * FROM tasks ORDER BY id';
    pool.query(queryText)
    // runs on successful query
        .then((result) => {
            //console.log('query results: ', result);
            res.send(result.rows);
        })
        // error handling
        .catch((err) => {
            console.log('error making select query:', err);
            res.sendStatus(500);
        });
}); // End router.get

module.exports = router;