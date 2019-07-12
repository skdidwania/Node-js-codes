var http=require('http');
var fs=require('fs');
   
var server=http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/plain'});
   var myReadstream=fs.createReadStream(__dirname + '/readMe.txt','utf8');
   myReadstream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('yo dogs,now listening');


















