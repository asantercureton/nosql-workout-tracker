require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);
app.use(htmlRoutes);

// CONNECTING TO LOCAL MONGODB INSTANCE
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// CHECKING TO SEE IF CONNECT WAS SUCCESSFUL
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
  console.log('Connected successfully!');
});


app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));

module.exports = db;