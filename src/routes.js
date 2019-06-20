const routes = require('express').Router();
const user = require('./core/user/userController');


routes.get('/ping', (req, res) => {
    return res.status(200).send(new Date());
});


routes.post('/user', (req, res) => user.createUser(req, res));

module.exports = routes;