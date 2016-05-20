var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

db.on('error', console.error);

var RaceSchema = new Schema({
  name: String,
  distance: String,
  location: String,
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});

exports.Race = mongoose.model('Race', RaceSchema);
