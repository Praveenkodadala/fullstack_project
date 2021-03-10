const express = require("express");
const db = require('./connection')
const testAPI = require('../server/routes/testapi')
const testRouter = require('./routes/index')


const app = express();
const port = process.env.PORT||3000


//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded#:~:text=a.-,express.,use(express.
app.use(express.json());
app.use(express.urlencoded());

app.use('/testapi', testAPI );
app.use('/api', testRouter);


// app.get("/api/users", (req, res) => {
//     res.sendFile(__dirname + "/pra.html");
// });

app.use(express.static('dist'))


app.listen(port, ()=>{
    console.log(`server is running at ${port}` );
})