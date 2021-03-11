const express = require('express')

const router = express.Router();
const {User} = require('../models/index')

let userCollection = [];

router.post('/', (req, res)=>{
  
    let newUser = new User({
  
  
  "docVersionNumber":req.query.docVersionNumber,
  "reasonsForChange": req.query.reasonsForChange,
  "changeRequestApprovedBy":req.query.changeRequestApprovedBy,
  "dateOfChagneRequest" : req.query.dateOfChagneRequest,
  "proposedChange":req.query.proposedChange,
  "existingSystem":req.query.existingSystem,

    })

    userCollection.push(newUser);

    newUser.save()
    .then(data => res.json(data))
    .catch(err=>{
        console.log(err)
        // res.status(400).json({
        //     message: "failed to save users"
        // })

    })

    return res.send("User successfully added");

})


router.get("/", (req, res)=>{
    res.send(userCollection)

})

module.exports = router;