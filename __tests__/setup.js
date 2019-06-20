const mongoose = require('mongoose');

beforeEach(done => {
    console.log('zenes');
    const clearDB = () => {
        for(let key in mongoose.connection.collection) {
            mongoose.connection.collections[key].remove(() => {});
        }

        return done();
    }

    if(mongoose.connection.readyState === 0) {
        mongoose.connect(
            'mongodb://jamal:teste123@ds241097.mlab.com:41097/authtdddev',
            err => {
                if(err) {
                    throw err;
                }

                return clearDB();
            }
        );
    } else {
        return clearDB();
    }
});

afterEach(done => {
    mongoose.disconnect();
    return done();
});

afterAll(done => {
    return done();
});