var nodemailer = require('nodemailer'),
    angri = require('angri');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'projglow@gmail.com',
        pass: 'sonic365'
    }
});

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/partials/*', function (req, res) {
        res.render('../../public/' + req.params[0]);
    });

    app.post('/sendMail', function (req, res) {
        var emailInfo = req.body;
        console.log("Sending Email: " + JSON.stringify(req.body));
        var mailOptions = {
            from: emailInfo.from + "<" + emailInfo.fromEmail + ">", // sender address
            to: 'tboyd@student.neumont.edu', // list of receivers
            subject: 'Homepage Contact', // Subject line
            html: "<h2>" + emailInfo.message + "</h2><h4>respond at: <a>" + emailInfo.fromEmail + "</a></h4>" // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
        res.send('Email sent');
    });

    app.get('*', function (req, res) {
        res.render('index');
    });
};