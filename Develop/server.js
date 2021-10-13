const express = require('express').config();
const mongojs = require("mongojs");
const routes = require('');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));

