var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  body: String,
  runner: String,
  rating: String,
  race: { type: mongoose.Schema.Types.ObjectId, ref: 'Race' }
});

mongoose.model('Review', ReviewSchema);