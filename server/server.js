const express = require("express");
const db = require('./connection')
const testAPI = require('../server/routes/testapi')


const app = express();
const port = process.env.PORT||3000


app.use('/testapi', testAPI )

app.use(express.static('dist'))


app.listen(port, ()=>{
    console.log(`server is running at ${port}` );
})