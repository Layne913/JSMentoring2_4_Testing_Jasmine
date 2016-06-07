var express = require('express');
var Mailgun = require('mailgun-js');
//init express
var app = express();
var api_key = 'key-fa85f8e2168b0a7a3f96ff1f78d3d517';
var domain = 'sandboxdf5afec8545f46e4a212bb2f8e4533e5.mailgun.org';
var from_who = 'testReport@epam.com';
var to_who = 'enjoylaynelife@163.com';

module.exports.sendEmail = function(result) {
  var mailgun = new Mailgun({apiKey: api_key, domain: domain});
   var data = {
    //Specify email data
      from: from_who,
    //The email to contact
      to: to_who,
    //Subject and text data
      subject: 'Testing report',
      html: result
    }

  console.log("result:" , data.html);

      mailgun.messages().send(data, function (err, body) {
      //If there is an error, render the error page
      if (err) {
        console.log("got an error: ", err);
      }
       //Else we can greet and leave
      else {
        console.log('success send email to: ' + to_who);
      }
      });

}