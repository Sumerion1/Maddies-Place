//Express +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const express = require('express');
const helmet = require('helmet');
const path = require('path') ;
const PORT = process.env.PORT || 3000;
const app = express(); 
app.use(helmet())
app.use(express.static('static'));
let server = app.listen(PORT, () => console.log(`Running Maddie's Place on PORT ${PORT}!`))
app.server = server;
