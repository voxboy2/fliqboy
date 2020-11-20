const express = require('express');


const router = express.Router();

router.post('/add-product', (req,res,next) => {
    console.log('code!');
    res.send('<h1>lol</h1>')
});


router.post('/product', (req,res,next) => {
    console.log(req.body);
    res.send('<h1>lol</h1>')
});

module.exports = router;