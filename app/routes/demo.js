var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('demo');
});
// router.get('/demo',(req,res,next)=>{
//   res.send('demo');
// });

module.exports = router;
