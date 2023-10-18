const MJ_ID = '70d3d45e7c4ce72d584afb24cc16dafd';
const MJ_TOKEN = '9c499d4659d973ef28474ea87bba490c';

const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(MJ_ID, MJ_TOKEN);

const sendWelcomeEmail = (email, name) => {
    mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: 'hoshiku1997@gmail.com',
                        Name: 'Chadapohn Sorakanit'
                    },
                    To: [
                        {
                            Email: email,
                            Name: name
                        }
                    ],
                    Subject: 'Thank for joining in my App!',
                    TextPart: `Dear ${name}, welcome to Chada App!`,
                    HTMLPart: `<h3>Dear ${name}, welcome to <a href="https://www.herbiware.com/">Herb Marketing online!</a>!</h3><br />May the delivery force be with you!`
                }
            ]
        })
        .then((result) => {
            console.log('result body ->', result.body);
        })
        .catch((err) => {
            console.log('Err result body statusCode ->', err.statusCode);
        });
};

const sendCancelationEmail = (email, name) => {
    mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: 'hoshiku1997@gmail.com',
                        Name: 'Chadapohn Sorakanit'
                    },
                    To: [
                        {
                            Email: email,
                            Name: name
                        }
                    ],
                    Subject: 'Sorry to see you go!',
                    TextPart: `Goodbye, ${name}. I hope to see you back sometime soon.`,
                }
            ]
        })
        .then((result) => {
            console.log('result body ->', result.body);
        })
        .catch((err) => {
            console.log('Err result body statusCode ->', err.statusCode);
        });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};