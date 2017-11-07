const User = require('../models/user').User
module.exports = function (req, res, next) {
  if (!req.session.user_id) {
    res.send('no se a logeado')
  }
  else {
     User.findById(req.session.user_id, function (err, user){
     if (err) {
       console.log(err)
     }
     else {
       res.locals = {user: user }
       next();
     }
    });
 }
};
