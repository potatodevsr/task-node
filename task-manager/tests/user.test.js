const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Chaya',
    email: 'chaya@example.com',
    password: 'MyPass888!'
}
beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})


test('hould signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Chada',
        email: 'chada@example.com',
        password: 'MyPass999!'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should login nonexisting user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'thisisnotmypass'
    }).expect(400)
})