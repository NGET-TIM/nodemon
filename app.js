const express = require('express');
const app = express();
const morgan = require('morgan');

app.listen(3000);
app.set('view engine', 'ejs');

// middleware
// app.use((req, res, next) => {
//     console.log('Host: ', req.hostname);
//     console.log('Path: ', req.path);
//     console.log('Method: ', req.method);
//     next();
// });

// app.get('/', (req, res) => {
//     res.sendFile('./views/about.html', { root: __dirname })
// });
// app.get('/about-us', (req, res) => {
//     // res.send('<h1>Hello Brother</h1>');
//     res.redirect('/about');
// });
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