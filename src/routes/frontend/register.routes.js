const express = require('express')
const route = express.Router();
const usercontroller = require("../../controllers/frontend/register.controller");

module.exports = app => {
    route.get('/register', usercontroller.register);
    route.get('/login', usercontroller.login);
    route.get('/profile', usercontroller.profile);

    app.use('/api/frontend/users', route)
}