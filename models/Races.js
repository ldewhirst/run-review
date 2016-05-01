var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

db.on('error', console.error);

var RaceSchema = new Schema({
  name: String,
  distance: String,
  rating: Number,
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});
//
//RaceSchema.methods.rating = function(cb) {
//  this.ratings += 1;
//  this.save(cb);
//};

RaceSchema.methods.query = function(races) {
  console.log("Queried:");
  console.log(races);
};

RaceSchema.methods.get = function(race) {
  console.log("Got:");
  console.log(race);
};

RaceSchema.methods.put = function(race) {
  console.log("Put:");
  console.log(race);
};

RaceSchema.methods.post = function(race) {
  console.log("Posted:");
  console.log(race);
};

RaceSchema.methods.delete = function(race) {
  console.log("Deleted:");
  console.log(race);
};

exports.Race = mongoose.model('Race', RaceSchema);
