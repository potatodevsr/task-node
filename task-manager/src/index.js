const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')


const main = async () => {
    try {
        const user = await User.findById('652237bf3567501e9aef8d55');

        if (user) {
            await user.populate('tasks').execPopulate();
            console.log('user.tasks ->', user.tasks);
        } else {
            console.log('User not found');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

// const pet = {
//     name: 'Test'
// }

// pet.toJSON = function () {
// console.log(this)
// return this
//     return []
// }

// console.log(JSON.stringify(pet));
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()