var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({

    service: 'protonmail',
    auth:{
        user: 'bkshewale@protonmail.ch',
        pass: 'k115422'
    }   

});

var mailOptions = {

        from: 'bkshewale@protonmail.ch',
        to: 'balajishewale143@gmail.com',
        subject: 'sending mail using nodejs lib called nodemailer',
        text: "ohh yay !!"


};

transporter.sendMail(mailOptions,function(error,info){

    if(error){
        console.log(error);
      }  else {
          console.log('massage is send' + info.response);
      }


});
