var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lamas');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
  fbID:String,
  postedAt: Date,
  headline:String,
  detail:String,
  imgUrl:String,
  votes:[{voter:String,voteAt:Date}]
});

var Report = mongoose.model('Report', reportSchema);

module.exports = Report;
