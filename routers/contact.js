
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');




router.post('/',(req,res)=>{


  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isValid = emailPattern.test(req.body.email);
    let c=0;
   if(req.body.name=='' || req.body.company=='' || req.body.phone=='' || req.body.address=='' || req.body.req=='')
   {
    c++;
   }else if(!isValid){
    c=2;
   }

  
   


   if(c==0){
    const auth = {
        service: 'gmail',
        auth: {
          api_key: '80e25d518374f0e6b443978633462a3e-ee16bf1a-85b359b9',
          domain: 'sandbox56f663de17974ca4bcd95f7f3aacdea9.mailgun.org'   
           }
      };
      const transporter = nodemailer.createTransport(mailgunTransport(auth));
  
      const mailOptions = {
        from: req.body.email,
        to: 'saheramr1515@gmail.com',
        subject: `Message from ${req.body.email}`,
        text: `${req.body.mes}`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error.');
        } else {
          res.send('true');
        }
      });
    
   }
   else if(c==1){
    res.send('error')

   }else{
    res.send('error2')
   }
   
})

module.exports = router;