const mongoose = require('mongoose')
const {schema} = mongoose;

const user = new mongoose.Schema({
name :{
    type: String,
},
gender:{
    type: String,
}
    
})

module.exports = mongoose.model('Usertest', user);