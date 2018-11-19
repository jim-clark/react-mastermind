var User = require('../models/user');

module.exports = {
  signup
};

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      // TODO: Send back a JWT instead of the user
      res.json(user);
    })
    // User data invalid
    .catch(err => res.status(400).json(err));
}
