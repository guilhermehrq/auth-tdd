const repository = require('./userRepository');

module.exports = {
    createUser
}

async function createUser(req, res) {
    try {
        const data = await repository.createUser(req.body);

        res.status(200).send({
            content: {
                message: 'User created!',
                id: data._id
            }
        });
    } catch (e) {
        res.status(e.httpCode || 500).send({
            error: e
        });
    }
}