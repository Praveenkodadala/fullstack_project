const mongoose = require('mongoose')
const {schema} = mongoose;

const user = new mongoose.Schema({
name :{
    type: String,
},

docVersionNumber: {
    type : String
},

reasonsForChange:{
type : String
},

changeRequestApprovedBy:{
    type: String
}



    
})

module.exports = mongoose.model('Usertest', user);