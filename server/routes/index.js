const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
res.send('api is working')

})
router.use('/users', require('./usertest'))


module.exports = router;

