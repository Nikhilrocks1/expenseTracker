const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url ,req.method, req.headers);
   
    switch(req.url){
        case '/':
            console.log('hii govind patidar');
            break;
        case '/about':
            console.log('welcome to about us page');
            break;
        case '/home':
            console.log('welcome home');
            break;
        case '/node':
            console.log('welcome to node js project');
            break;
      
    }
    
})

server.listen(4000);
