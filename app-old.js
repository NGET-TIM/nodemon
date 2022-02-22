const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');



// MangoDB Connection
const dbURI = 'mongodb+srv://ngettim:brotim@blogs.ymrnw.mongodb.net/nodemon?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected With MongoDB on the Server'))
    .catch((error) => console.log(error));

app.listen(3000);
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Try with express ----------------------------------------------------------------
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome' });
});
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
});



// call error 404 page 
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page Not Found' });
});