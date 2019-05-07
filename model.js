var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
  name: String,
  password: String,
  email : String
});


module.exports = mongoose.model('tests', testSchema);
