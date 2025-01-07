const fs = require('fs');
fs.readFile('./hello.txt', 'utf-8',(err, result)=>{
 if(err){
    console.log('error');
 }else{
    console.log(result);
 }
})