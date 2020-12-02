const express = require('express');
const path = require('path');
const app = express();




//Gets all Members
  app.get('/api/members',(req,res)=>res.json(members));



//******************************************************** */
// Set static folder (bizim biradaki static folderimiz public)
// app.use() // method that we use when we want to include middleware

app.use(express.static(path.join(__dirname,'public')));

//********************************************* */



// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html')) public folderinin icindeki index.html dosyasinin icerigini yazdiriyoruz
//  res.send('<h1>Hello World!!</h1>');   
// })




const PORT = process.env.PORT || 5000;
 
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
