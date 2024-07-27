const express=require('express');
const http=require('http');
const path=require('path');
const nodemailer=require('nodemailer');

const app=express();
const server =http.Server(app);
const port=5500;
const MyEmail='mimouchefaouzi05@gmail.com'
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'index.html')));


// Routing
app.get("/send_email", function(req, res){
 res.sendFile(path.join(__dirname, 'index.html'))
})

app.post("/send_email",function(req,response){
    const usermail=req.body.email
    const to=MyEmail
    const subject=req.body.name
    const message=req.body.message
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'mimouchefaouzi05@gmail.com',
            pass:'jddw yfmy jzbz cauj'
        }
    })
    const mailOption={
        from:usermail,
        to:to,
        subject:subject,
        text:message,
    }
    transporter.sendMail(mailOption,function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log("email send :" + info.response)
        }
          response.redirect("/")
    })
})




// Initialise web server
server.listen(port,function(){
    console.log("server activ")
})
