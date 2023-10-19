const request = require('supertest')
const app = require('../src/app')

test('hould signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Chada',
        email: 'chada@example.com',
        password: 'MyPass999!'
    }).expect(201)
})