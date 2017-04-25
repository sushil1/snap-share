var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

router.get('/currentuser', function(req, res, next){
  if(req.session == null){
    console.log('no session')
    return
  }
  if(req.session.token == null){
    console.log('no token assigned')
    return
  }
  jwt.verify(req.session.token, process.env.JWT_TOKEN_SECRET, function(err, decode){
    if(err){
      console.log(err)
      return
    }
    controllers.profile.getById(decode.id, false)
      .then(function(profile){
        res.json({
          confirmation:'success',
          result: profile
        })
      })
      .catch(function(err){
        res.json({
          confirmation:'fail',
          message:err
        })
      })
  })
})


router.post('/register', function(req, res, next){
  controllers.profile.post(req.body, false)
    .then(function(profile){
      var token = jwt.sign({id:profile.id}, process.env.JWT_TOKEN_SECRET, {expiresIn: 4000})
      req.session.token = token
      res.json({
        confirmation:'success',
        profile: profile,
        token: token
      })
    })
    .catch(function(err){
      res.json({
        confirmation:'fail',
        message:err +''
      })
    })
})

router.post('/login', function(req, res, next){
  var credentials = {
    email: req.body.email,
    password: req.body.password
  }
  controllers.profile.get({email: credentials.email}, true)
    .then(function(profiles){
      var profile = profiles[0]
      var passwordCorrect = bcrypt.compareSync(credentials.password, profile.password)
      if(passwordCorrect == true){
        var token = jwt.sign({id:profile._id.toString()}, process.env.JWT_TOKEN_SECRET, {expiresIn:4000})
        req.session.token = token
        res.json({
          confirmation:'success',
          profile: profile.summary(),
          token: req.session.token
        })
      }
      else{
        req.session.reset()
        res.json({
          confirmation:'fail',
          message: 'wrong password'
        })
      }
    })
    .catch(function(err){
      res.json({
        confirmation:'fail',
        message:err
      })
    })
})

router.get('/logout', function(req, res, next) {
  req.session.reset()
  res.render('index', {})
  // res.json({
  //   confirmation:'success',
  //   message:'logged out'
  // })
})

module.exports = router
