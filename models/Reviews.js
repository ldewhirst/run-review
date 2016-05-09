var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  body: String,
  runner: String,
  race: { type: mongoose.Schema.Types.ObjectId, ref: 'Race' }
});

mongoose.model('Review', ReviewSchema);
