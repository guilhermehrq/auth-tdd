const request = require('supertest');
const app = require('../../src/app');

describe('User', () => {
    it('should create a user and return the userId', async () => {
        const response = await request(app)
            .post('/user')
            .send({
                name: 'Jamal',
                email: 'jamal@tests.com',
                password: 'teste123'
            });

        expect(response.status).toBe(200);
    });

    it('should authenticate user and return JWT if the credentials are valid', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({
            login: 'jamal@tests.com',
            password: 'teste123'
        });

        expect(response.status).toBe(200);
    });
});
