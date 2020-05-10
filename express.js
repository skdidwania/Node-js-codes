var express=require('express');
var app=express();
app.set('view engine','ejs');
app.get('/',function(req,res){
res.sendFile(__dirname + '/index.html');
	
});
app.get('/contact',function(req,res){
res.sendFile(__dirname + '/contact.html');
	
});
app.get('/profile/:id',function(req,res){
res.send('you requested to see profile with id of' +  req.params.id);
	                                                                
});
app.listen(30000); 