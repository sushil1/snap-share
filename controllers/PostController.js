var Post = require('../models/Post')
var Promise = require('bluebird')

module.exports = {

  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Post.find(params, function(err, posts){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(posts)
        }
        var list = []
        posts.forEach(function(post){
          list.push(post.summary())
        })
        resolve(list)
      })
    })
  },

  getById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Post.findById(id, function(err, post){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(post)
        }
        resolve(post.summary())
      })
    })
  },

  post: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Post.create(params, function(err, post){
        if(err){
          reject(err)
          return
        }
        if(isRaw == true){
          resolve(post)
        }
        resolve(post.summary())
      })
    })
  }


}
