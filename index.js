const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.post('/submit', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.emailAddr;
  res.send(
    `Server received: First Name - ${firstName}, Last Name - ${lastName}, Email Address - ${email}`
  );
});
app.listen(3000);
