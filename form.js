var http=require('http');
var fs=require('fs');
var formidable=require('formidable');

http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('<form action="biodata" method="post" enctype="multiport/form-data">');
        res.write('<h1>MIJO</h1>');
        res.write('Name<input type="text" name="username"><br>');
        res.write('D.O.B<input type="date" name="dob"><br>');
        res.write('Qualification<input type="text" name="qualification"><br>');
        res.write('Email id<input type="text" name="email id"><br>');
        res.write('phone number<input type="text" name="pno"><br>');
        res.write('upload your resume<input type="file" name="upload file"><br>');
        res.write('<input type="submit">')
   

    }
    else if(req.url=='/biodata')
    {
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>Name:'+fields.name+'</h1><br>');
            res.write('<h1>D.O.B:'+fields.dob+'</h1><br>');
            res.write('<h1>Qualification:'+fields.qualification+'</h1><br>');
            res.write('<h1>Email id:'+fields.emailid+'</h1><br>');
            res.write('<h1>phone number:'+fields.pno+'</h1><br>');
            var oldpath=files.uploadfile.path;
            var newpath='c:/users/acer/Desktop/'+files.uploadfile.name;
            fs.rename(oldpath,newpath,function(err){
                {
                if(err)throw err;
                res.write('<h1> Your File Location</h1><br>');
                res.write('<h1>Old path:'+oldpath+'</h1><br>');
                res.write('<h1>New path:'+newpath+'</h1><br>');
                res. end('<h1>Thank you form is submitted</h1>');
                }

            });
        });
    }
    else{
        res.end('<h1> 404 page not found</h1>');
    }
}).listen(8080);