require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;


/************************************** */
app.use(express.static('public'));
app.set('view engine', 'ejs');

/************************************* */
const mainRoutes = require('./routes/main');

app.use('/', mainRoutes)

app.listen(port, () => {
    console.log('app conneted on port ' + port)
})