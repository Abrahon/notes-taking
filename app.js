require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended :true}));
app.use(express.json());

//connect to Databse
connectDB();

//static
app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine','ejs');

//Routes
app.use('/',require('./server/routes/index'))
app.use('/',require('./server/routes/dashboard'))

//Handle 4004
app.get('*',function(req,res){
    res.status(404).render("404")

})

app.listen(port,()=>{
    console.log(`running server on ${port}`)
})