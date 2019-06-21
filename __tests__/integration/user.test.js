const request = require('supertest');
const app = require('../../src/app');

describe('User', () => {
    it('should create a user', async () => {
        const response = await request(app)
            .post('/user')
            .send({
                name: 'Jamal',
                email: 'jamal@exemplo.com',
                password: 'teste123'
            });

        expect(response.status).toBe(200);
    });

    it('should authenticate user and return JWT if the credentials are valid', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({
            login: 'jamal@exemplo.com',
            password: 'teste123'
        });

        expect(response.body.content.user).toHaveProperty('token');
        expect(response.status).toBe(200);
    });

    it('should not authenticate user because the user doesn\'t exists', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({
            login: 'algo@qualquercoisa.com',
            password: 'test123'
        });

        expect(response.status).toBe(404);
    });

    it('should not authenticate user because the password are incorrect', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({
            login: 'jamal@exemplo.com',
            password: '123456'
        });

        expect(response.status).toBe(401);
    });
});
