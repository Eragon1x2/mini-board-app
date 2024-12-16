const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const messages = [
    { text: 'Hi there!', user: 'Amando' },  
    { text: 'Hello World!', user: 'Charles' },
    { text: 'Hi there!', user: 'ali' },
];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', { messages: messages });
});

app.get('/new', (req, res) => {
    res.render('form');
});
app.post('/new', (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.user
    });
    res.redirect('/');
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});