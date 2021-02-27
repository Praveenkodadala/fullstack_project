const express = require("express");
const testAPI = require('./routes/testapi')

const app = express();
const port = 3000


app.use('/testapi', testAPI )
app.use(express.static('static'))

app.listen(port, ()=>{
    console.log(`server is running at ${port}` );
})