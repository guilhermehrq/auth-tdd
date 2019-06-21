const repository = require('./repository');
const service = require('./service');

module.exports = {
    createUser,
    loginUser
}

async function createUser(req, res) {
    try {
        const data = await repository.createUser(req.body);

        res.status(200).send({
            content: {
                message: 'User created!',
                id: data
            }
        });
    } catch (e) {
        res.status(e.httpCode || 500).send({
            error: e
        });
    }
}

async function loginUser(req, res) {
    try {
        const data = await service.loginUser(req.body);

        res.status(200).send({
            content: {
                message: 'Logged in',
                user: data
            }
        });
    } catch(e) {
        res.status(e.httpCode || 500).send({
            error: e
        });
    }
}