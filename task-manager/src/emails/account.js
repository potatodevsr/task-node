const mailjetMail = require('@mailjet/mail')
const mailjetAPIKey = '70d3d45e7c4ce72d584afb24cc16dafd'

mailjetMail.setApiKey(mailjetAPIKey)

mailjetMail.send({
    to: 'chada@srkn.io',
    from: 'chada@srkn.io',
    subject: 'This is my first creation!',
    text: 'Hello, this is the text content of the email.'
})