const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
     const url=req.url;
     const method=req.method;
     const body=[];
    if(url==='/'){

     fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
      if(err){
        console.log(err);
      }
      res.write('<html>');
      res.write('<head><title>Enter message</title></head>')
      res.write(`<body>${data}</body>`)
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
      res.write('</html>');
      return res.end();
    });
    }
    else if(url==="/message" && method==="POST"){
      req.on("data",(chunk)=>{
        body.push(chunk);
      });
      return req.on('end',()=>{
     const parsedbody=Buffer.concat(body).toString();
     const message=parsedbody.split("=")[1];
     fs.writeFile("message.txt",message,(error)=>{
      console.log('inside fileSync');
      res.statusCode='302';
      res.setHeader('Location','/');
      return res.end();
        })
     });
    }
})

server.listen(3000);
