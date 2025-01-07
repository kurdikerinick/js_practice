const fs = require('fs')

fs.writeFile("./hello.txt","hello my name is node",(err)=>{
    console.log ('did not create')
});
