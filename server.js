const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require("dotenv").config()

const routes = require('./routes/api');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client", "build")))

mongoose
  .connect( 'mongodb://justin:justin1@ds215961.mlab.com:15961/justin', {useNewUrlParser: true})
  .then( () => console.log('Successfully connected to server'))
  .catch( err => console.log(err))

app.use(cors())
app.use('/api/data', routes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(port , () => console.log(`Server connected on port ${port}`));