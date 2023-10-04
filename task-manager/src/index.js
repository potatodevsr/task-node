//  cd task-manager
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

// Securely Storing Passwords
const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Chada12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log('password ->', password);
    console.log('hashedPassword ->', hashedPassword);

    const isMatch = await bcrypt.compare('Chada12345!', hashedPassword)
    console.log('isMatch ->', isMatch);
}

myFunction()