let fs = require('fs')

fs.readFile('dosya.txt',"utf8",function (error,data) {
 if(error){
     throw error;
 } 
 console.log(data); //.toString() 
})