const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const User = require('./model/Users');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'client/build')));

mongoose.connect(process.env.MONGODB_URI);

app.post(
  '/api/contact',
  asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
      await User.create({ name, email, subject, message });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(400);
    }
  })
);

app.listen(port);
