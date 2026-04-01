"use strict";
 
const express = require('express');
const app = express();
 
// Serve static files from the 'public' folder
app.use(express.static('public'));
 
// Parse JSON request bodies (needed for POST)
app.use(express.json());
 
// ---- Your endpoints go below this line ----
app.get('/hello', (req, res) => {
  res.type('text').send('Hello from the server!');
});

app.get('/api/time', (req, res) => {
   let date = new Date().toISOString();
  const currentDate = {
    currentTime: date,
    message: "Current server time"
};
  res.type('json').send(currentDate);
});

app.get('/api/greet/:name', (req, res) => {
  
  const greetings = {
    greeting: "Hello, " + req.params.name + "! Welcome to the API."
};
  res.type('json').send(greetings);
});

app.get('/api/math', (req, res) => {
  const math = {
    a: req.query.a,
    b: req.query.b,
    operation: req.query.operation,
    result: 
};
  res.type('json').send(math);
});


 
 
 
// ---- Your endpoints go above this line ----
 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
