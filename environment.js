const mongoose = require('mongoose');

const dbConfig = {
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME
}

mongoose.connect(`mongodb://${dbConfig.USER}:${dbConfig.PASS}@ds241097.mlab.com:41097/${dbConfig.DB_NAME}`,
err => {
    if(err) {
        throw err;
    }

    console.log('Mongo connection established');
});