const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')



// Init middeleware
app.use(logger);

// express-handlebars Middleware

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//  Homepage Route
app.get('/', (req,res)=>res.render('index'));

//******************************************************** */
// Set static folder (bizim biradaki static folderimiz public)
// app.use() // method that we use when we want to include middleware

app.use(express.static(path.join(__dirname,'public')));


// Members API Routes
app.use('/api/members',require('./routers/api/members'))

//********************************************* */



// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html')) public folderinin icindeki index.html dosyasinin icerigini yazdiriyoruz
//  res.send('<h1>Hello World!!</h1>');   
// })




const PORT = process.env.PORT || 5000;
 
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
