const functions = require('firebase-functions');
const express= require('express');
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var nodemailer = require('nodemailer');

const app=express();
require('dotenv').config();
const PORT=3000;


app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/',function(req,res){
    res.render('index');
    //res.send('hi');
});

app.post('/',urlencodedParser, function(req,res){

    //console.log(req.body);
    data=req.body;
    console.log(data);
    if(data.email!=''){
      sendmail(data.name,data.email,data.comment);
    }
    
    res.render('index');
});
/*
 var transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS
        }
      });
*/


var sendmail= function(name, email, comment){
    var transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS
        }
      });

      //console.log(process.env.NODEMAILER_USER)

      var mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: process.env.NODEMAILER_USER,
        subject: 'New comment from:'+ name,
        text: comment + ' \n return their message to '+ email
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}
//app.listen(PORT);

exports.app = functions.https.onRequest(app);