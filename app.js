const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Serve static assets (CSS, images, client JS)
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views')));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

app.post('/new', (req, res) => {
  const messageText = req.body.messageText || 'no message...';
  const messageUser = req.body.userName || 'anonymous';


  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect('/');
});

// 4. SERVER START
app.listen(3000, () => {
  console.log('server running on port 3000...');
});