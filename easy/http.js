const http = require ('http');
const server = http.createServer((req,res) =>{
    res.writeHead(200,{
        'content-type' :'text/http'
    });
    res.end('hello world')
})

port = 3000;
server.listen(port,()=>{
console.log(`server listening to port http://localhost${port}`)
})