var http=require('http');
http.createServer(function(request,response){
    //发送HTTP头部
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\n');
}).listen(7777);
console.log('Server running at http://127.0.0.1:7777/');