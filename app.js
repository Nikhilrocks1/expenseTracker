const http=require('http');
const bodyParser=require('body-parser');
const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">
	<input id="username" type="text" name="title">
	<button type="submit">add</button>
</form>`)
})

app.get('/',(req,res)=>{
	fs.readFile('username.txt',(err,data)=>{
		if(err){
			console.log(err);
			data-"no chat exists";
		}
		res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
	<input id="message" name="message" type="text">
	<input type="hidden" name="username" id="username">
	<button type="submit">send</button></form>`);
	})
	
})

app.post('/',(req,res)=>{
	console.log(req.body.username)
	console.log(req.body.message)
	fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag :'a'},(err) =>
     err ? console.log(err):res.redirect("/")
	);
})

app.listen(3000);