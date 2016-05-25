var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ReviewSchema = new Schema({
  body: String,
  runner: String,
  rating: Number,
  race: { type: mongoose.Schema.Types.ObjectId, ref: 'Race' }
});

exports.Race = mongoose.model('Review', ReviewSchema);
