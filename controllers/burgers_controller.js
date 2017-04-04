var models  = require('../models');
var express = require('express');
var router  = express.Router();

//app.get 

router.get('/', function(req, res) {
  // res.send('yoo')
  //res.render('index')
 // this is the query to 'find all'
   models.Burger.findAll({}).then(function(burgers) {
       res.render('index', {burgers: burgers})
      console.log(burgers)    
    });
});


router.post('/', function(req, res) {
  //console.log(req);

  models.Burger.create({
    burger_name: req.body.burger_name
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;