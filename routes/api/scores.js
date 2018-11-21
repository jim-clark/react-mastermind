var express = require('express');
var router = express.Router();
var scoresCtrl = require('../../controllers/scores');

/*--- Protected Routes ---*/

router.get('/', checkAuth, scoresCtrl.highScores);
router.post('/', checkAuth, scoresCtrl.create);


/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;
