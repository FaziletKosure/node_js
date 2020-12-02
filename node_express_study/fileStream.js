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

   //appendFile
   fs.appendFile('dosya2.txt',"Serra Kosure",function (error) {
    if(error){
        throw error;
    } 
    console.log("eklendii"); //.toString() 
   })

    //unlink bir dosyayi silmek icin
    fs.unlink('dosya2.txt',function (error) {
        if(error){
            throw error;
        } 
        console.log("dosya2 silindi"); //.toString() 
       })