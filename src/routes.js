const routes = require('express').Router();
const user = require('./core/user/controller');

routes.get('/ping', (req, res) => {
    return res.status(200).send(new Date());
});

routes.post('/user', (req, res) => user.createUser(req, res));
routes.post('/user/login', (req, res) => user.loginUser(req, res))

module.exports = routes;