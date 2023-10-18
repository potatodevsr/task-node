/**
 * @typedef {import('node-mailjet')} 
 */

const MJ_ID = '70d3d45e7c4ce72d584afb24cc16dafd'
const MJ_TOKEN = '9c499d4659d973ef28474ea87bba490c'


const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
    MJ_ID,
    MJ_TOKEN,
);


const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
        Messages: [
            {
                From: {
                    Email: "hoshiku1997@gmail.com",
                    Name: "Mailjet Pilot"
                },
                To: [
                    {
                        Email: "hoshiku1997@gmail.com",
                        Name: "passenger 1"
                    }
                ],
                Subject: "Your email flight plan!",
                TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
        ]
    })

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })