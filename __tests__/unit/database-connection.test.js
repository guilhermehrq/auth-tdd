const mongoose = require('mongoose');
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

// const app = require('../../src/app');

const dbConfig = {
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME
}

describe('Database connection', () => {
    it('should connect in a databese', async () => {
        let connectionEstablished = false;

        await mongoose.connect(
            `mongodb://${dbConfig.USER}:${dbConfig.PASS}@ds241097.mlab.com:41097/${dbConfig.DB_NAME}`,
            (err) => {
                if(err) {
                    throw err;
                } 

                connectionEstablished = true;
            });

            if(connectionEstablished) {
                await mongoose.disconnect();
            }
            
            expect(connectionEstablished).toBe(true);
    })
})