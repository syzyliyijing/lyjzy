var http=require('http');
function onRequest(require,response){
    response.writeHead(200,{'Content-Typ':'text/plain'});
    response.write('Hello World');
    response.end();
}
http.createServer(onRequest).listen(8888);
