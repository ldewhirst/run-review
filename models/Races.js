var mongoose = require('mongoose');

var RaceSchema = new mongoose.Schema({
  name: String,
  distance: String,
  rating: String,
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});
//
//RaceSchema.methods.rating = function(cb) {
//  this.ratings += 1;
//  this.save(cb);
//};

mongoose.model('Race', RaceSchema);