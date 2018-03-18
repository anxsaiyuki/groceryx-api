var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define endpoints
router.get('/login', function(req, res) {
  var resObj = {
    success: true,
  }
  console.log("login")
  res.json(JSON.stringify(resObj))
})

router.get('/signup', function (req, res) {
  var resObj = {
    success: true,
  }
  console.log("signup")
  res.json(JSON.stringify(resObj))
})

module.exports = router
