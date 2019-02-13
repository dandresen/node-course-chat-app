const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000; // add this for heroku 
var app = express();


const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.get('/index', (req, res) => {
    res.render('index.html', {
        pageTitle: 'First Page',
    });
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
});