const nodemailer = require('nodemailer');
const gmail_password = require('config').get("gmail_password");
const from = require('config').get("gmail_user");

function sendMail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: from, pass: gmail_password }
    });
      
    const mailOptions = { from, to, subject, text }
        
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function homePage(req, res) {
    res.send(`<form action='/getted' method='GET'><label for='to'>Send to:</label><input type='email' id='to' name='to' /><br /><br /><label for='subject'>Subject:</label><input id='subject' type='text' name='subject' /><br /><br /><label for='text'>Text:</label><textarea id='text' name='text'></textarea><br /><br /><button type='submit'>Send</button></form>`);
}

function gettedPage(req, res) {
    sendMail(req.query.to, req.query.subject, req.query.text);
    res.redirect('/');
}

module.exports = { homePage, gettedPage }