let express = require('express')

let app=express();

let bodyParser = require('body-parser')

let urlEncodedParser = bodyParser.urlencoded({extended:false})

app.get('/',function(req,res) {
    res.send('Hello')
    
})
app.get('/admin',function(req,res) {
    res.send('Hello admin')
    
})

app.get('/product',function(req,res) {
    console.log('ID : ' + req.query.id);
    console.log('CategoryID : ' + req.query.categoryid);
    res.send('Hello Product')
    
})

app.post("/product",urlEncodedParser,function (req,res) {
    console.log(req.body.name);
   res.send("post istegi alindi") 
    
})

app.delete("/product",function (req,res) {
    res.send("Delete istegi alindi") 
     
 })

 app.put("/product",function (req,res) {
    res.send("Put istegi alindi") 
     
 })
 app.get('/customer*',function(req,res) {
    res.send('Musteriler listelendi')
    
})

let server = app.listen(8080)