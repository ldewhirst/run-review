var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Race = mongoose.model('Race');
var Review = mongoose.model('Review');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/raceindex', function(req, res, next) {
  Race.find(function(err, races) {
    if(err){ return next(err); }
    
    res.json(races);
  });
});

router.post('/addrace', function(req, res, next) {
  var race = new Race(req.name);
  
  race.save(function(err, race){
    if(err){ return next(err); }
    
    res.json(race);
  });
});

router.param('race', function(req, res, next, id) {
  var query = Race.findById(id);
  
  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!race) { return next(new Error('can\'t find post')); }
    
    req.race = race;
    return next();
  });
});

router.get('/races/:race', function(req, res, next) {
  req.post.populate('reviews', function(err, post) {
    if (err) { return next(err); }
  res.json(race);
  });
});

router.put('/races/:race/rating', function(req, res, next) {
  req.post.upvote(function(err, race){
    if (err) { return next(err); }
    
    res.json(post);
  });
});

router.post('/races/:race/reviews', function(req, res, next) {
  var review = new Review(req.body);
  review.post = req.post;
  
  review.save(function(err, review){
    if(err){ return next(err); }
    
    req.race.reviews.push(review);
    req.race.save(function(err, race) {
      if(err){ return next(err); }
      res.json(review);
    });
  });
});



module.exports = router;
