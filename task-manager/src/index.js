const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cd) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cd(new Error('Please upload a Word document'))
        }

        cd(undefined, true)
        // cd(new Error('File must be a PDF'))
        // cd(undefined, true)
        // cd(undefined, false)

    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})