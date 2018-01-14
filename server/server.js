const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const toDoRouter = require('./routes/toDo.router');

// body parser
app.use(bodyParser.urlencoded({extended: true}));

//serve static files
app.use(express.static('server/public'));

// routes
app.use('/toDo', toDoRouter);

app.listen(PORT, function(){
    console.log('server running on port:', PORT);
});