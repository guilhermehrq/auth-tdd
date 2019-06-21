const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

module.exports = {
    createUser,
    loginUser
};

async function createUser(data) {
    const foundUser = await User.findOne({ email: data.email });

    if(foundUser && foundUser.id) {
        throw {
            message: 'Email already exists',
            httpCode: 401
        }
    }

    data.password_hash = await bcrypt.hash(data.password, 8);

    const user = await User.create(data);
    
    return user._id;
}

async function loginUser(data) {
    const user = await User.findOne({ email: data.login });

    if (!user) {
        throw {
            message: 'User not found',
            httpCode: 404
        };
    }

    const isPassCorrect = bcrypt.compare(data.password, user.password_hash);

    if (!isPassCorrect) {
        throw {
            message: 'Wrong password',
            httpCode: 401
        };
    }

    return user;
}
