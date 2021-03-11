const mongoose = require('mongoose')
const {schema} = mongoose;

const user = new mongoose.Schema({


docVersionNumber: {
    type : String,
},

reasonsForChange:{
type : String
},

changeRequestApprovedBy:{
    type: String
},
dateOfChagneRequest: {
    type: Date
},

proposedChange :{
    type : String
},

existingSystem :{
    type : String
}

})

module.exports = mongoose.model('Usertest', user);