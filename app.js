const express = require('express');
const asyncHandler = require('express-async-handler');

const usersRoutes = require('./routes/api/v1/users');
const animalsRoutes = require('./routes/api/v1/animals');
// const ownersRoutes = require('./routes/api/v1/owners');

const app = express();

// const { People, Articles } = require('./models');
const sequelize = require('./sequelize');

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        data: 'Homepage'
    });
});

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/animals', animalsRoutes);
// app.use('/api/v1/owners', ownersRoutes);

app.use((error, req, res, next) => {
    res.send({
        error: error.message
    });
});

module.exports = app;
