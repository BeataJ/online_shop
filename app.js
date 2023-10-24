const path = require('path');

const express = require('express');

const authRouter = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(authRouter);

app.listen(3000);