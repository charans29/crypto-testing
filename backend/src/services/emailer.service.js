const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const i18n = require('i18n')
i18n.configure({
    locales: ['En', 'Mn'],
    directory: __dirname + '/locales',
    defaultLocale: 'En',
})
dotenv.config();                    // initiated environment
module.exports = {
    deliverEmail: function (dest, subject, body) {
        var transport = nodemailer.createTransport({
            // service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,               // SMTP server host (SMTP2GO)
            port: Number(process.env.EMAIL_PORT),       // SMTP server port (SMTP2GO)
            auth: {
                user: process.env.EMAIL_USER,           // SMTP username (SMTP2GO)
                // user: process.env.EMAIL,
                pass: process.env.EMAIL_PWD             // SMTP password (SMTP2GO)
            }
        });
    
        var mailOptions = {
            from: process.env.EMAIL,                    // Sender email address, verified with SMTP2GO
            to: dest,
            subject: subject,
            text: body
        };
    
        transport.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }   
}