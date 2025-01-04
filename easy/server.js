const http = require('http');
const server = http.createServer((req,res) =>{
    res.writeHead(200,{
        "content-type":'text/html'
    });
    res.end('hello world')
});
const port = 3000;
server.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}/`);
})
