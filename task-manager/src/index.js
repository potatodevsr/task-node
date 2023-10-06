//  cd task-manager
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {

//     console.log(req.method, req.path)
//     next()

//     if (req.method === 'GET') {
//         res.send('GET requests are disable')
//     } else {
//         next()
//     }
// })

app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!')
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

// JSON Web Tokens --> npm i jsonwebtoken@8.4.0 
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log('token ->', token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log('token data->', data);
}


// Securely Storing Passwords
// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Chada12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log('password ->', password);
//     console.log('hashedPassword ->', hashedPassword);

//     const isMatch = await bcrypt.compare('Chada12345!', hashedPassword)
//     console.log('isMatch ->', isMatch);
// }

myFunction()