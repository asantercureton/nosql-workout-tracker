require('dotenv').config();
const express = require('express').config();
const mongoose = require('mongoose');
const routes = require('');

const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

app.use(routes);

app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));

