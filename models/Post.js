var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  profile: {type:mongoose.Schema.Types.Mixed, default:{}},
  image:{type:String, default:''},
  geo:{
    type: [Number],
    index: '2d'
  },
  caption:{type:String, default:''},
  timestamp: {type:Date, default:Date.now}
})

PostSchema.methods.summary = function(){
  var summary = {
    id:this._id.toString(),
    profile:this.profile,
    image:this.image,
    geo: this.geo,
    caption:this.caption,
    timestamp:this.timestamp
  }
  return summary
}

module.exports = mongoose.model('PostSchema', PostSchema)
