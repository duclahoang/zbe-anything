const express = require('express');
const app = express();
const path = require('path');
const Memcached = require('memcached');
require('dotenv').config();

console.log(process.env['MEMCACHED_HOST']);


app.get('/hey', (req, res) => res.send('ho!'))
app.listen(8080)