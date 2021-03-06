var mongoose = require('mongoose');
var express = require('express');
// var passport = require('passport');

var router = express.Router();
// use ENV for 'SECRET' variable
// var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var Race = mongoose.model('Race');
var Review = mongoose.model('Review');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/raceIndex', function(req, res, next) {
  Race.find(function(err, races) {
    if(err){ return next(err); }

    res.json(races);
  });
});

router.post('/addRace', function(req, res, next) {
  var race = new Race(req.body);
  // race.runner = req.payload.username;

  race.save(function(err, race){
    if(err){ return next(err); }

    res.json(race);
  });
});

router.param('race', function(req, res, next, id) {
  var query = Race.findById(id);

  query.exec(function (err, race){
    if (err) { return next(err); }
    if (!race) { return next(new Error('can\'t find post')); }

    req.race = race;
    return next();
  });
});

router.get('/races/:race', function(req, res, next) {
  req.race.populate('reviews', function(err, race) {
    if(err){ return next(err); }

    res.json(race);
  });
});

// router.put('/races/:race/rating', function(req, res, next) {
//   req.post.upvote(function(err, race){
//     if (err) { return next(err); }
//
//     res.json(post);
//   });
// });

router.post('/races/:race/reviews', function(req, res, next) {
  // req.body is the data we want to save to the review
  var review = new Review(req.body);
  review.race = req.race;

  review.save(function(err, review){
    if(err){ return next(err); }
    // why is it only pushing the string of the id and not the entire object????
    req.race.reviews.push(review);
    req.race.save(function(err, race){
      if(err){ return next(err); }
      res.json(review);
    });
  });
});

router.param('review', function(req, res, next, id) {
  var query = Review.findById(id);

  query.exec(function(err, review) {
    if (err) { return next(err); }
    if (!race) { return next(new Error("can't find review")); }

    req.review = review;
    return next();
  });
});

router.get('/races/:race/reviews', function(req, res) {
  res.json(req.race.reviews);
});
// router.post('/signup', function(req, res, next){
//   if (!req.body.username || !req.body.password){
//     return res.status(400).json({message: 'Please complete all required fields'});
//   }
//
//   var user = new User();
//
//   user.username = req.body.username;
//
//   user.setPassword(req.body.password)
//
//   user.save(function (err){
//     if(err){ return next(err); }
//
//     return res.json({token: user.generateJWT()})
//   });
// });
//
// router.post('/signIn', function(req, res, next){
//   if(!req.body.username || !req.body.password){
//     return res.status(400).json({message: 'Please complete all required fields'});
//   }
//
//   passport.authenticate('local', function(err, user, info){
//     if (err){ return next(err); }
//
//     if(user){
//        return res.json({token: user.generateJWT()});
//     } else {
//       return res.status(401).json(info);
//     }
//   })(req, res, next);
// });


module.exports = router;
