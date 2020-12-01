let fs = require('fs')
//readFile
fs.readFile('dosya.txt',"utf8",function (error,data) {
 if(error){
     throw error;
 } 
 console.log(data); //.toString() 
})

//WriteFile

fs.writeFile('dosya2.txt',"Fazilet Kosure",function (error) {
    if(error){
        throw error;
    } 
    console.log("yazildi"); //.toString() 
   })