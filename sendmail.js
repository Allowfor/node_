var nodemailer=require('nodemailer');
var sender =nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'enter your gmail id',
        password:'enter your google account password'
    }
});

var composemail={
    from:'sendermail1213@gmail.com',
    to:'receivermail12@gmail.com',
    subject:'Send mail using node js',
    text:'Hello world'
};
sender.sendMail(composemail,function(error,info){
    if(error){
        console.log(error);

    }
    else{
        console.log("mail sent successfully"+info.response);
    }
});