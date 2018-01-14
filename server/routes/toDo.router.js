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

router.put('/:id', function(req, res){
    const queryText = 'UPDATE tasks SET task_complete=$1 WHERE id=$2;';
    pool.query(queryText, [req.body.task_complete, req.params.id])
    // runs on successful query
        .then((result) => {
            //console.log('query results: ', result);
            res.send(200);
        })
        // error handling
        .catch((err) => {
            console.log('error making select query:', err);
            res.sendStatus(500);
        });
}); // End router.put

router.delete('/:id', function(req, res){
    const queryText = 'DELETE FROM tasks WHERE id=$1';
    pool.query(queryText, [req.params.id])
    // runs on successful query
        .then((result) => {
            //console.log('query results: ', result);
            res.send(200);
        })
        // error handling
        .catch((err) => {
            console.log('error making select query:', err);
            res.sendStatus(500);
        });
}); // End router.delete

router.post('/', function(req, res) {
    const queryText = 'INSERT INTO tasks(task_name, task_owner, task_priority, task_complete, notes) VALUES($1, $2, $3, $4, $5)';
    pool.query(queryText, [req.body.task_name, req.body.task_owner, req.body.task_priority, req.body.task_complete, req.body.notes])
    // runs on successful query
        .then((result) => {
            //console.log('query results: ', result);
            res.sendStatus(201);
        })
        // error handling
        .catch((err) => {
            console.log('error making select query:', err);
            res.sendStatus(500);
        });
});// End router.post

module.exports = router;